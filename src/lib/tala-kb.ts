// Tala's answers for the website chat. Taglish, like a friendly parent-to-parent chat.
//
// Every fact here must match the rest of the site — src/lib/faqs.ts,
// src/components/site/pricing.tsx and the Terms page (src/app/terms/page.tsx).
// When a price or rule changes there, change it here too.
//
// Matching is plain keyword scoring in the browser (the site is a static export,
// so there is no server and no AI). `keys` are lowercase; a key with a space is a
// phrase and counts more than a single word.

export type TalaLink = { label: string; href: string };

export type TalaTopic = {
  id: string;
  /** Short label for the suggestion chips. */
  chip: string;
  keys: string[];
  /** Paragraphs. A line starting with "• " is shown as a bullet. **bold** works. */
  answer: string[];
  links?: TalaLink[];
  /** Topic ids to suggest after this answer. */
  next?: string[];
};

export const PARENT_APP = "https://smartpathtutor.ph/app/parent/#/auth";
export const TUTOR_APP = "https://smartpathtutor.ph/app/tutor/";
export const EMAIL = "sptutor.ph@gmail.com";
const ASSISTED_MAILTO =
  "mailto:" + EMAIL +
  "?subject=" + encodeURIComponent("Pa-setup ng Parent account") +
  "&body=" + encodeURIComponent(
    "Hi SmartPath! Pakitulungan po akong i-set up ang Parent account ko.\n\nPangalan ko:\nMobile number:\nPangalan at Grade ni anak (1, 2 o 3):\nPlan (Monthly / Term / School Year):\n",
  );

export const TALA_TOPICS: TalaTopic[] = [
  {
    id: "about",
    chip: "Ano ang SmartPath?",
    keys: ["ano ang smartpath", "what is smartpath", "about", "ano to", "ano ito", "paano gumagana", "how does it work", "how it works", "explain", "tungkol", "smartpath tutor"],
    answer: [
      "Ang **SmartPath Tutor** ay learning app para sa mga batang **Grade 1 hanggang Grade 3**. Naka-align siya sa **DepEd MATATAG**, kaya kung ano ang inaaral sa school, yun din ang pinapractice dito. 😊",
      "Araw-araw may maikling lesson si anak, yung tinatawag naming **Today's Trip**. May Math, English, at Science pag Grade 3. Binabasa nang malakas ang instructions kaya kahit hindi pa masyadong marunong magbasa si bunso, kaya niya.",
      "Ikaw naman sa **Parent app**, kita mo agad ang progress niya, live, hindi na kailangan mag-refresh.",
    ],
    next: ["grades", "price", "signup", "daily"],
  },
  {
    id: "grades",
    chip: "Anong grades at subjects?",
    keys: ["grade", "grades", "subject", "subjects", "kinder", "kindergarten", "grade 4", "grade 5", "grade 6", "math", "english", "science", "filipino", "matatag", "deped", "curriculum", "ilang taon", "age"],
    answer: [
      "Sa ngayon, **Grade 1, 2 at 3** lang po kami. 📚",
      "• **Math** at **English**: lahat ng grade (1–3)\n• **Science**: Grade 3 lang\n• Naka-align lahat sa **DepEd MATATAG**",
      "Sa reading, nagsisimula sa **Filipino** tapos unti-unting lumilipat sa **English**. Hindi biglaan, kaya hindi nao-overwhelm ang bata.",
      "Wala pa kaming Kinder o Grade 4 pataas. Pero kung mahilig sa computer si anak (5–12 years old), meron kaming **SmartPath Coding**. Itanong mo lang sa akin!",
    ],
    next: ["reading", "price", "coding"],
  },
  {
    id: "price",
    chip: "Magkano?",
    keys: ["magkano", "hm", "hmm", "how much po", "presyo", "price", "pricing", "how much", "cost", "bayad", "rate", "rates", "fee", "pro plan", "plan", "plans", "subscription", "subscribe", "mahal", "monthly", "kada buwan", "isang buwan", "per month"],
    answer: [
      "Isang plan lang kami, ang **Pro**, para sa isang anak: 💛",
      "• **₱399** kada buwan\n• **₱1,099** kada term (mga 90 days)\n• **₱3,990** buong school year",
      "Kung buong school year ang kunin mo, parang **₱332 lang kada buwan**. Tipid!",
      "Kasama na: Tutor app ni anak, Parent app mo, walang ads, at **10 tanong kay Teacher Saje** (ang AI helper ng parents) kada buwan.",
      "May kapatid? Mas mura ang dagdag na anak. Tanungin mo lang ako ng \"kapatid\". 😉",
    ],
    links: [{ label: "Tingnan ang pricing", href: "/pricing" }],
    next: ["siblings", "payment", "renew", "signup"],
  },
  {
    id: "siblings",
    chip: "May kapatid, magkano?",
    keys: ["kapatid", "sibling", "siblings", "dalawang anak", "2 anak", "tatlong anak", "3 anak", "more than one", "ilang anak", "extra child", "another child", "dagdag na anak", "dagdag anak", "add child", "magkapatid", "children", "mga anak", "twins", "kambal", "5 anak"],
    answer: [
      "Pwede hanggang **5 anak** sa iisang family account, at bawat isa may sariling profile. 👧👦",
      "Ang unang anak ay presyo ng Pro. Bawat **dagdag na anak** ay:",
      "• **₱199** kada buwan\n• **₱549** kada term\n• **₱1,990** kada school year",
      "Halimbawa, **2 anak, monthly**: ₱399 + ₱199 = **₱598** kada buwan.",
      "Kung magdagdag ka ng anak sa gitna ng plan mo, babayaran mo lang ang **natitirang araw**, kasi iisa lang ang end date ng buong household.",
    ],
    links: [{ label: "I-compute sa pricing", href: "/pricing" }],
    next: ["payment", "addchild", "renew"],
  },
  {
    id: "payment",
    chip: "Paano magbayad?",
    keys: ["paano magbayad", "paano mag bayad", "mag bayad", "how to pay", "payment", "pay", "gcash", "maya", "paymaya", "card", "credit card", "debit", "bank", "bank transfer", "cash", "qr", "qr ph", "paymongo", "bayaran", "magbayad", "resibo", "receipt", "reference", "mode of payment"],
    answer: [
      "Dalawang paraan po: 💳",
      "**1. Online, sa loob ng Parent app (pinakamabilis)**\nGCash, Maya, QR Ph, o card, via PayMongo. **Bukas agad** ang plan pagkatapos magbayad.",
      "**2. Manual: GCash, bank transfer, o cash**\nIbigay mo lang sa amin ang **reference number**. Bubuksan namin ang plan pag na-confirm na ng team namin ang bayad.",
      "Hindi kailangan ng credit card. Pwedeng GCash lang talaga. 👍",
    ],
    next: ["renew", "refund", "signup"],
  },
  {
    id: "renew",
    chip: "Auto-renew ba?",
    keys: ["auto renew", "autorenew", "auto-renew", "renew", "renewal", "automatic", "awtomatik", "kusang", "kakaltasan", "charge", "charged", "recurring", "mag expire", "expire", "expired", "matapos", "end date", "remind", "reminder"],
    answer: [
      "**Hindi kami nagcha-charge nang automatic.** Walang biglang kaltas. 🙅‍♀️",
      "Kung naka-ON ang auto-renew, **paaalalahanan ka namin 7, 3 at 1 araw** bago matapos ang plan, tapos ikaw ang magbabayad kung gusto mong ituloy.",
      "Kung magbayad ka nang maaga, **madadagdag lang ang days** sa dulo ng plan mo. Walang masasayang.",
      "Kung OFF naman, kusa lang matatapos ang plan sa end date. Buo mo pa ring magagamit lahat ng araw na binayaran mo.",
    ],
    next: ["cancel", "payment", "refund"],
  },
  {
    id: "cancel",
    chip: "Pwede bang i-stop?",
    keys: ["cancel", "i-cancel", "icancel", "stop", "itigil", "ihinto", "unsubscribe", "ayoko na", "tigil", "quit", "pause", "i-pause"],
    answer: [
      "Oo naman, **anytime** pwede, sa Parent app mismo. 😊",
      "At dahil hindi kami nagcha-charge nang automatic, **hindi ka na sisingilin ulit** hangga't hindi ka mismo nagbabayad. Tuloy pa rin ang access ni anak hanggang matapos ang mga araw na nabayaran mo.",
    ],
    next: ["refund", "renew"],
  },
  {
    id: "refund",
    chip: "May refund ba?",
    keys: ["refund", "ibalik", "ibalik ang pera", "money back", "nadoble", "double payment", "doble", "mali ang bayad", "wrong amount", "sobra ang bayad", "nagkamali"],
    answer: [
      "Kung **nagkamali ang bayad**, halimbawa nadoble, mali ang amount, o hindi namin na-apply, sabihin mo lang sa amin **within 30 days** at **ibabalik namin nang buo** sa paraan ng pagbayad mo.",
      "Pero kapag nagsimula na ang plan o seat, hindi na po ito refundable, maliban kung may karapatan ka sa ilalim ng batas (Consumer Act, RA 7394).",
      "Kung matagal na hindi magamit ang SmartPath dahil sa amin, **i-e-extend namin ang plan mo** sa araw na nawala.",
      "Iba ang rules sa refund ng 1-on-1 tutoring. Itanong mo lang ang \"tutoring refund\".",
    ],
    links: [{ label: "Basahin ang Terms", href: "/terms" }],
    next: ["contact", "tutoringrefund"],
  },
  {
    id: "free",
    chip: "May libre ba / trial?",
    keys: ["libre", "free", "trial", "free trial", "try", "subukan", "demo", "sample", "pa-try", "patry", "walang bayad"],
    answer: [
      "**Libre** ang paggawa ng Parent account. Pwede mo nang silipin ang Parent app nang walang binabayaran. 😊",
      "Para mabuksan ang **lessons ni anak** sa Tutor app, kailangan ng **Pro plan** (₱399 kada buwan). Walang auto-charge, kaya pwede mong subukan muna nang **isang buwan** tapos tingnan kung bagay kay anak.",
      "Para sa **teachers**, libre talaga, walang bibilhin.",
    ],
    links: [{ label: "Gumawa ng libreng Parent account", href: PARENT_APP }],
    next: ["price", "signup", "teachers"],
  },
  {
    id: "signup",
    chip: "Paano magsimula?",
    keys: ["paano magsimula", "how to start", "get started", "sign up", "signup", "register", "mag register", "magregister", "create account", "gumawa ng account", "account", "paano gamitin", "how to use", "setup", "set up", "simula", "magsimula", "umpisa", "mag umpisa", "mag start", "mag-start", "paano mag start", "enroll", "mag enroll", "start"],
    answer: [
      "Mga **3 minutes** lang 'to! ⏱️",
      "• **Step 1:** Buksan ang **Parent app** → *Create account*. Gamitin ang email at password, o **Continue with Google**. I-click ang link sa confirmation email.\n• **Step 2:** Sa Parent app, tap **Plan** → piliin ang Monthly, Term o School Year → magbayad.\n• **Step 3:** Tap **Add child**: nickname, avatar, at grade (1, 2 o 3).\n• **Step 4:** Buksan ang **Tutor app** sa device ni anak, mag-sign in **isang beses** gamit ang Parent email mo. Tapos tap na lang ni anak ang picture niya. Tapos na!",
      "Medyo hirap sa tech? Okay lang, **kami na ang mag-se-set up** para sa'yo. Itanong mo lang ang \"pa-setup\". 😊",
    ],
    links: [
      { label: "Gumawa ng Parent account", href: PARENT_APP },
      { label: "Step-by-step guide", href: "/get-started" },
    ],
    next: ["assisted", "childlogin", "payment"],
  },
  {
    id: "assisted",
    chip: "Pa-setup na lang",
    keys: ["pa setup", "pa-setup", "pasetup", "set it up for me", "kayo na", "tulungan", "tulong", "help me", "hindi ko alam", "di ko alam", "hirap", "nahihirapan", "hindi marunong", "di marunong", "assist", "assisted", "senior", "lola", "lolo", "tawagan", "call me"],
    answer: [
      "Walang problema! Kami na ang bahala. 🤝",
      "Buksan ang **Parent app** at piliin ang **\"We'll set it up for you\"**. Ilagay lang ang **pangalan at mobile number** mo, at **tatawagan ka ng staff namin**. Bibigyan ka namin ng temporary password na pwede mong palitan pagkatapos.",
      "O kaya, i-tap ang **\"I-email ang details ko\"** sa baba. May nakahanda nang email, punan mo lang ang pangalan mo, pangalan at grade ni anak, at ipadala sa **" + EMAIL + "**.",
    ],
    links: [
      { label: "Buksan ang Parent app", href: PARENT_APP },
      { label: "I-email ang details ko", href: ASSISTED_MAILTO },
    ],
    next: ["payment", "childlogin"],
  },
  {
    id: "addchild",
    chip: "Paano mag-add ng anak?",
    keys: ["paano mag add", "add a child", "add my child", "mag add ng anak", "magdagdag ng anak", "profile", "avatar", "palitan ang grade", "change grade", "nickname"],
    answer: [
      "Sa **Parent app**, sa Home screen, tap **Add child**. ➕",
      "Ilagay ang **nickname** ni anak, pumili ng **avatar**, at piliin ang **Grade 1, 2 o 3**. Yun lang!",
      "Kung pangalawa o pangatlong anak na, kailangan ng **dagdag na seat** (₱199 kada buwan). Hanggang 5 anak ang pwede.",
      "Tip: sa Settings, pwede mo ring lagyan ng **screen-time limit** at **bedtime** si anak. 🌙",
    ],
    next: ["siblings", "childlogin", "parentapp"],
  },
  {
    id: "childlogin",
    chip: "Paano mag-login si anak?",
    keys: ["login", "log in", "sign in", "signin", "mag login", "maglogin", "password ng anak", "child password", "pin", "anak mag login", "paano papasok", "tutor app"],
    answer: [
      "Si anak **hindi na kailangan ng password**. 🙌",
      "Ikaw (o kahit sinong grown-up) ang mag-sign in **isang beses** sa Tutor app sa device niya, gamit ang Parent email mo. Pagkatapos, **tap na lang niya ang picture niya** para magsimula.",
      "Bawal gumawa si anak ng sariling account. Lahat dumadaan sa Parent account mo, para safe.",
    ],
    links: [{ label: "Buksan ang Tutor app", href: TUTOR_APP }],
    next: ["devices", "forgot", "daily"],
  },
  {
    id: "forgot",
    chip: "Nakalimutan ang password",
    keys: ["forgot", "nakalimutan", "nakalimutan ko", "reset password", "palitan ang password", "change password", "ayaw mag login", "hindi makapasok", "di makapasok", "locked", "cant login", "can't login", "cannot login", "error"],
    answer: [
      "Sa sign-in page ng Parent app, i-tap ang **Forgot password**. Magpapadala kami ng link sa email mo para makagawa ng bago. 🔑",
      "Kung **Google** ang ginamit mo nung nag-sign up, piliin lang ulit ang **Continue with Google**.",
      "Ayaw pa rin? Mag-email ka sa **" + EMAIL + "** at sabihin ang email ng account mo. Tutulungan ka namin.",
    ],
    links: [{ label: "Buksan ang Parent app", href: PARENT_APP }],
    next: ["contact"],
  },
  {
    id: "devices",
    chip: "Anong device pwede?",
    keys: ["device", "devices", "cellphone", "phone", "cp", "selpon", "tablet", "ipad", "laptop", "computer", "pc", "android", "iphone", "ios", "app store", "play store", "download", "i-download", "install", "browser", "chrome", "ilang device", "how many devices"],
    answer: [
      "Gumagana ang SmartPath sa **web browser**: phone, tablet, laptop o computer. Buksan lang ang **smartpathtutor.ph**. 📱💻",
      "Hindi na kailangang mag-download sa Play Store. Pero kung gusto mo ng icon sa home screen, gamitin ang **Install App** sa website para parang app na rin.",
      "Malapit na rin ang Android phone app.",
      "Mas maganda ang **tablet o laptop** para sa malaking screen. Pero okay na okay din sa cellphone.",
    ],
    next: ["internet", "childlogin"],
  },
  {
    id: "internet",
    chip: "Kailangan ba ng internet?",
    keys: ["internet", "wifi", "wi-fi", "mobile data", "load", "offline", "walang internet", "mabagal", "slow", "signal", "connection"],
    answer: [
      "Oo, kailangan ng internet para magamit ang SmartPath at para ma-save ang progress ni anak, para makita mo agad sa Parent app. 📶",
      "Pwede ang **WiFi o mobile data**. Kung mabagal ang signal, mas mainam mag-WiFi lalo na sa may video.",
      "Mabagal o nag-e-error? Sabihan mo kami sa **" + EMAIL + "** para matingnan namin.",
    ],
    next: ["devices", "contact"],
  },
  {
    id: "daily",
    chip: "Ilang minuto kada araw?",
    keys: ["ilang minuto", "how long", "gaano katagal", "minutes", "oras", "araw araw", "araw-araw", "daily", "everyday", "schedule", "today's trip", "todays trip", "lesson", "lessons", "pretest", "posttest", "quiz", "assessment", "weekly"],
    answer: [
      "Maikli lang ang lesson kada araw, sakto lang sa attention span ng batang Grade 1–3. ⏰ Tinatawag namin itong **Today's Trip**.",
      "Kada linggo, may **pre-test sa Monday** at **post-test sa Thursday**, kaya kita mo talaga kung may natutunan si anak sa linggong iyon. 📈",
      "Binabasa nang malakas ang mga instruction, at may laro at activities para hindi siya mabagot.",
      "Ikaw naman, pwede kang maglagay ng **screen-time limit** at **bedtime** sa Parent app.",
    ],
    next: ["parentapp", "reading", "safety"],
  },
  {
    id: "reading",
    chip: "Paano tinuturo ang reading?",
    keys: ["reading", "magbasa", "pagbasa", "basa", "hindi marunong magbasa", "di marunong magbasa", "phonics", "marungko", "abakada", "read aloud", "read-aloud", "pronunciation", "writing", "pagsulat", "sulat", "tracing", "handwriting"],
    answer: [
      "Sa reading, nagsisimula si anak sa **Filipino**, tapos unti-unting tumatawid papuntang **English**. Step by step, ayon sa research. 📖",
      "May **placement** sa umpisa para malaman kung saan siya magsisimula. Hindi siya mapipilitang mag-umpisa sa sobrang dali o sobrang hirap.",
      "May **read-along**: binabasa ng app ang kwento, tapos pwede rin siyang **magbasa nang malakas** para ma-check. Hindi itinuturing na mali ang Pinoy accent. 😊",
      "May **writing/tracing** din para sa letters at numbers.",
    ],
    next: ["daily", "grades", "parentapp"],
  },
  {
    id: "parentapp",
    chip: "Ano ang makikita ko bilang parent?",
    keys: ["parent app", "parent", "magulang", "progress", "report", "makikita", "monitor", "bantayan", "screen time", "screen-time", "bedtime", "limit", "sit in", "sit-in", "nakikita ko", "track", "tracking"],
    answer: [
      "Sa **Parent app**, para ka na ring katabi ni anak kahit nasa trabaho ka. 👀💛",
      "• **Live progress**: anong lesson ang tapos, at kung saan siya nahihirapan\n• **Pre-test vs post-test** kada linggo\n• **Screen-time limit** at **bedtime lock**\n• **Sit in**: makita kung ano ang nasa screen niya ngayon (view lang)\n• **Teacher Saje**: AI helper para sa teaching tips mo",
      "Kahit OFW o malayo ka, makikita mo pa rin ang progress niya. ✈️",
    ],
    next: ["ai", "safety", "price"],
  },
  {
    id: "ai",
    chip: "Ano si Teacher Saje (AI)?",
    keys: ["ai", "teacher saje", "saje", "chatgpt", "artificial", "parent ai", "ai questions", "ai credits", "credits", "tanong sa ai", "40 questions", "10 questions"],
    answer: [
      "Si **Teacher Saje** ay AI helper para sa **parents**, hindi para sa bata. 🤖 Pwede mo siyang tanungin ng teaching ideas o paano ipaliwanag ang isang topic kay anak.",
      "Kasama sa Pro ang **10 tanong kada buwan**. Kung kulang, may dagdag na **40 tanong sa ₱99**.",
      "Paalala lang: pwede siyang magkamali kaya gamitin pa rin ang sariling judgment. At hindi siya para gumawa ng assignment ni anak. 😉",
      "Si **anak naman ay hindi nakaka-chat sa AI**. Pag na-stuck siya, maikling hint lang ang lalabas tungkol sa tanong na iyon.",
    ],
    next: ["safety", "price"],
  },
  {
    id: "safety",
    chip: "Safe ba para sa bata?",
    keys: ["safe", "safety", "ligtas", "ads", "advertisement", "may ads", "links", "chat", "stranger", "bad", "inappropriate", "youtube", "kid safe"],
    answer: [
      "Opo, ginawa namin 'to para **sa mga bata**. 🛡️",
      "• **Walang ads**\n• **Walang links palabas** ng app\n• **Hindi nakaka-chat si anak sa AI**, maikling hint lang pag na-stuck\n• Ikaw ang may hawak ng **screen-time at bedtime**",
      "Sa 1-on-1 tutoring, **approved ng SmartPath ang mga teacher**, at pwede kang **mag-sit in** sa video anytime.",
    ],
    next: ["privacy", "parentapp", "tutoring"],
  },
  {
    id: "privacy",
    chip: "Safe ba ang data namin?",
    keys: ["privacy", "data", "data namin", "data ko", "data ng anak", "data privacy", "personal information", "impormasyon", "ibenta", "sell", "protected", "ra 10173", "delete account", "burahin", "account deletion"],
    answer: [
      "Protektado ang data ninyo sa ilalim ng **Data Privacy Act of 2012 (RA 10173)**, at **hindi namin ito binebenta**. Kahit kailan. 🔒",
      "Sa bayad, **reference at amount lang** ang tinatago namin. Hindi kami nagtatago ng card number.",
      "Gusto mong burahin ang account? May page para diyan.",
    ],
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Pag-delete ng data", href: "/data-deletion" },
    ],
    next: ["safety", "contact"],
  },
  {
    id: "tutoring",
    chip: "May 1-on-1 tutor ba?",
    keys: ["tutoring", "1 on 1", "1-on-1", "one on one", "one-on-one", "live tutor", "human tutor", "totoong teacher", "real teacher", "video call", "online class", "live class", "private tutor", "tutor session", "book", "booking", "mag book", "my teacher"],
    answer: [
      "Meron! **Live 1-on-1 lessons** with real teachers na **approved ng SmartPath**. 👩‍🏫",
      "• **1 oras** kada session, sa loob ng Tutor app ni anak (video + whiteboard)\n• **₱350 kada session**, makikita ang presyo bago mag-book\n• Hiwalay ito sa plan. Kailangan lang may **active plan** ka",
      "Pag nag-book ka, sabihin mo kung para saan, halimbawa homework, reading, o lesson sa school. Pwede ka ring mag-upload ng picture ng homework.",
      "Pagkatapos ng session, **susulatan ka ng teacher ng maikling report**. 📝",
    ],
    next: ["tutoringrefund", "safety", "payment"],
  },
  {
    id: "tutoringrefund",
    chip: "Cancel/refund ng tutoring",
    keys: ["session", "cancel", "tutoring refund", "cancel tutoring", "cancel session", "cancel booking", "late teacher", "hindi dumating", "absent", "missed session", "try another teacher", "ibang teacher", "palit teacher"],
    answer: [
      "Ganito ang rules sa tutoring: 📋",
      "• **Cancel 24 hours o higit pa bago magsimula** → full refund\n• Kung **ang teacher ang nag-cancel** o hindi natuloy dahil sa amin → full refund\n• Kung **hindi sumali si anak within 15 minutes** habang naghihintay ang teacher → pwedeng ma-mark na missed, walang refund\n• **Try another teacher**: within 14 days pagkatapos ng session, pwede kang humingi ng isang libreng session sa ibang teacher (hanggang 2 beses kada 90 days)",
      "Nagsisimula ang refund **within 2 working days**. Sa PayMongo, padadalhan ka ng claim link. Sa GCash, ibabalik namin sa number na ginamit mo within 7 working days.",
    ],
    links: [{ label: "Buong tutoring rules", href: "/terms#tutoring" }],
    next: ["tutoring", "contact"],
  },
  {
    id: "teachers",
    chip: "Para sa teachers",
    keys: ["teacher", "teachers", "guro", "titser", "class code", "classroom", "section", "estudyante", "students", "school", "paaralan", "deped teacher", "free for teachers"],
    answer: [
      "**Libre** para sa teachers, walang bibilhin! 🍎",
      "Sa **SmartPath Teacher**, pwede kang gumawa ng class, mag-recommend ng lessons, gumawa ng multiple-choice questions, at makita kung anong topics na ang natapos ng klase. Lumalabas lang ang scores ng isang bata kung **may pahintulot**.",
      "**Parent ka at may Class Code galing sa teacher?** Sa Parent app → **Classroom** tab → i-scan ang QR o i-type ang code. Pag na-approve ng teacher, lalabas na ang recommended lessons sa Tutor app ni anak.",
    ],
    links: [{ label: "Teacher app", href: "/teacher-app" }],
    next: ["partner", "contact"],
  },
  {
    id: "partner",
    chip: "Para sa schools/partners",
    keys: ["partner", "partnership", "partners", "school partner", "lgu", "barangay", "ngo", "discount", "promo", "voucher", "promo code", "bulk", "maramihan", "reseller", "affiliate"],
    answer: [
      "Gusto naming makipag-partner sa **schools, LGUs, NGOs at communities**! 🤝",
      "May **partner discount code** din kami: bawas sa presyo ng plan sa **bawat renewal**.",
      "Tingnan ang Partner page o mag-email sa **" + EMAIL + "**.",
    ],
    links: [{ label: "Partner with us", href: "/partner-with-us" }],
    next: ["teachers", "contact"],
  },
  {
    id: "coding",
    chip: "Coding para sa bata",
    keys: ["coding", "programming", "python", "computer science", "codi", "robot", "game design", "stem", "scratch"],
    answer: [
      "Meron kaming kapatid na app, ang **SmartPath Coding**, para sa edad **5 hanggang 12**! 🤖💻",
      "May **147 video lessons**, missions at creative playgrounds. Mula sa picture blocks (kahit hindi pa marunong magbasa) hanggang sa **totoong Python** at game building.",
      "• **₱249** isang buwan\n• **₱649** tatlong buwan\n• **₱1,999** isang taon",
      "Prepaid lang, walang auto-renew.",
    ],
    links: [{ label: "Tingnan ang SmartPath Coding", href: "/coding" }],
    next: ["about", "contact"],
  },
  {
    id: "contact",
    chip: "Paano kayo makakausap?",
    keys: ["contact", "macontact", "ma-contact", "contact number", "email", "makausap", "kausapin", "tao", "human", "agent", "staff", "customer service", "support", "message", "number", "phone number", "facebook", "fb", "messenger", "complain", "reklamo", "problema", "problem", "issue"],
    answer: [
      "Pwede kang mag-email sa **" + EMAIL + "**, o gamitin ang **contact form** sa website. Sasagot kami sa email. 💌",
      "Para mabilis, isama mo na ang **email ng account mo** at maikling paliwanag ng problema. Kung may screenshot, mas maganda!",
    ],
    links: [
      { label: "Mag-email sa amin", href: "mailto:" + EMAIL },
      { label: "Contact form", href: "/#contact" },
    ],
    next: ["assisted", "forgot"],
  },
];

export const TALA_START_CHIPS = ["about", "price", "signup", "payment", "siblings", "free", "tutoring", "assisted"];

export const TALA_GREETING = [
  "Hi po! Ako si **Tala** 👋⭐",
  "Nandito ako para sagutin ang mga tanong mo tungkol sa SmartPath, kaya hindi mo na kailangang basahin lahat. 😊 Type mo lang ang tanong mo, o pumili sa baba:",
];

const SMALL_TALK: { keys: string[]; reply: string[] }[] = [
  {
    keys: ["hi", "hello", "helo", "hey", "kumusta", "kamusta", "musta", "good morning", "good afternoon", "good evening", "magandang umaga", "magandang hapon", "magandang gabi", "uy", "huy"],
    reply: ["Hello po! 😊 Ano'ng gusto mong malaman? Pwede tungkol sa **presyo**, **paano magsimula**, **bayad**, o kahit ano tungkol sa SmartPath."],
  },
  {
    keys: ["salamat", "thank you", "thanks", "ty", "tnx", "thank u", "maraming salamat", "salamuch"],
    reply: ["Walang anuman po! 💛 Kung may tanong ka pa, nandito lang ako."],
  },
  {
    keys: ["ok", "okay", "sige", "noted", "gets", "ah ok", "i see", "ahh", "oo", "yes"],
    reply: ["Sige po! 😊 May iba ka pa bang gustong itanong?"],
  },
  {
    keys: ["sino ka", "who are you", "bot ka ba", "robot ka", "tao ka ba", "are you a bot", "ai ka ba"],
    reply: [
      "Ako si **Tala**, ang star guide ng SmartPath! ⭐ Isa akong simpleng FAQ helper dito sa website. May mga nakahandang sagot ako sa mga madalas itanong.",
      "Kung kailangan mo ng totoong tao, mag-email ka lang sa **" + EMAIL + "**.",
    ],
  },
];

export type TalaReply = {
  answer: string[];
  links?: TalaLink[];
  next: string[];
  topicId?: string;
};

function normalize(s: string): string {
  return (
    " " +
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[₱]/g, " ")
      .replace(/[^a-z0-9'\- ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim() +
    " "
  )
    // Common texting spellings → one form, and drop polite fillers so phrases still match.
    .replace(/ (pano|panu|paanu|pa'no) /g, " paano ")
    .replace(/ (pwde|pde|puede|pwd) /g, " pwede ")
    .replace(/ (mgkano|magkanu|mkano) /g, " magkano ")
    .replace(/ (po|ho|opo|nga|naman|pala|lang|yung|ung) /g, " ")
    .replace(/ (po|ho|opo|nga|naman|pala|lang|yung|ung) /g, " ");
}

function hasKey(text: string, key: string): boolean {
  // Whole-word / whole-phrase match on the padded, normalized text.
  return text.includes(" " + key + " ");
}

export function topicById(id: string): TalaTopic | undefined {
  return TALA_TOPICS.find((t) => t.id === id);
}

export function talaAnswer(input: string): TalaReply {
  const text = normalize(input);
  const words = text.trim().split(" ").filter(Boolean);

  let best: TalaTopic | undefined;
  let bestScore = 0;
  for (const t of TALA_TOPICS) {
    let score = 0;
    for (const k of t.keys) {
      if (hasKey(text, k)) score += k.includes(" ") ? 3 : k.length <= 3 ? 1 : 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }

  // Short small-talk messages ("salamat", "hi po") win over a weak topic hit.
  if (words.length <= 4 || bestScore === 0) {
    for (const s of SMALL_TALK) {
      if (s.keys.some((k) => hasKey(text, k)) && bestScore < 3) {
        return { answer: s.reply, next: ["price", "signup", "payment", "contact"] };
      }
    }
  }

  if (best && bestScore > 0) {
    return { answer: best.answer, links: best.links, next: best.next ?? [], topicId: best.id };
  }

  return {
    answer: [
      "Pasensya na po, hindi ko masyadong na-gets ang tanong mo. 😅",
      "Subukan mong itanong sa ibang paraan, halimbawa **\"magkano\"**, **\"paano magbayad\"**, o **\"paano magsimula\"**. O pumili ka sa mga button sa baba.",
      "Kung kailangan mo ng tao, mag-email ka sa **" + EMAIL + "**. Sasagutin ka ng team namin. 💛",
    ],
    links: [{ label: "Mag-email sa amin", href: "mailto:" + EMAIL }],
    next: ["price", "signup", "payment", "contact"],
  };
}
