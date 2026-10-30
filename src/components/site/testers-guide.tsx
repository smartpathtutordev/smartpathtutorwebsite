"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Compass,
  GraduationCap,
  CreditCard,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Trophy,
  Clock,
  RotateCcw,
  ThumbsUp,
  HelpCircle,
  Bug,
  Smartphone,
  Volume2,
  Smile,
  ShieldCheck,
  ArrowRight,
  Heart,
  Tablet,
  Wifi,
} from "lucide-react";

type Lang = "en" | "tl";
type RoleKey = "parent" | "child" | "teacher";

const APP = "https://smartpathtutor.ph/app";
const SUPPORT = "sptutor.ph@gmail.com";
const STORAGE_KEY = "smartpath_uat_quest_v2";
const TEST_CARD = "4343 4343 4343 4345";

const buildReportLink = (role: string, status: string, count: number) =>
  `mailto:${SUPPORT}?subject=${encodeURIComponent(`UAT Feedback – ${role} (${status})`)}&body=${encodeURIComponent(
    `Role tested: ${role}\nCompleted checks: ${count}\nOverall experience: ${status}\n\nWhat worked well:\n\nWhat was confusing or needs improvement:\n\nDevice used (e.g. iPhone, Samsung, Tablet, Laptop):\n\n(Feel free to attach a screenshot!)`,
  )}`;

export function TestersGuide() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeTab, setActiveTab] = useState<"all" | RoleKey>("all");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copiedCard, setCopiedCard] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetAll = () => {
    setChecked({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const copyCard = () => {
    navigator.clipboard?.writeText(TEST_CARD.replace(/\s/g, ""));
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2000);
  };

  // Content definitions in English and Tagalog
  const t = {
    en: {
      badge: "Pilot Quest · User Testing (UAT)",
      title: "SmartPath",
      titleAccent: "Tester Quest.",
      subtitle:
        "Help us test SmartPath for Filipino kids! Choose your role below, tap steps as you test, and tell us what you think. Takes under 10 minutes.",
      allRoles: "All 3 Roles",
      progressLabel: "Quest Progress",
      tasksDone: "tasks completed",
      reset: "Reset progress",

      // Free test pass banner
      testPassTitle: "Free Test Payment Pass (₱0 Charge)",
      testPassDesc: "Use either free test method when trying the Parent plan activation:",
      gcashOpt: "Option A: Tap GCash or Maya → Tap 'Authorize Test Payment'.",
      cardOpt: "Option B: Tap Card and copy this test card number:",
      cardMeta: "Exp: 12/30 · CVC: 123",
      copyCardBtn: "Copy Card",
      copiedCardBtn: "Copied!",

      // Tester Agreement & Parental Consent
      agreementBadge: "RA 10173 Compliant · 100% Safe",
      agreementTitle: "Pilot Tester Agreement & Privacy Notice",
      agreementSubtitle: "By participating in this pilot test, you agree to these 3 simple points:",
      agreements: [
        {
          num: "1",
          title: "Guided by an Adult",
          desc: "You confirm you are a parent, legal guardian, or teacher guiding your learner. Children explore under adult supervision.",
        },
        {
          num: "2",
          title: "100% Free · No Real Charges",
          desc: "All test passes, cards, and GCash/Maya buttons are simulated. Zero real money is ever billed to your bank or e-wallet.",
        },
        {
          num: "3",
          title: "Child Privacy Protected",
          desc: "Compliant with the Philippine Data Privacy Act (RA 10173). We never sell, track, or share child data. Feedback is voluntary to help improve SmartPath.",
        },
      ],
      agreementFooter: "By testing SmartPath, you acknowledge our",
      termsLink: "Terms of Service",
      privacyLink: "Privacy Policy",

      // 3 Straightforward Role Tracks
      roles: [
        {
          key: "parent" as const,
          badge: "Step 1 · ~5 mins",
          title: "Parent Track",
          tagline: "Account setup, plan unlock, and child dashboard",
          character: "/assets/characters/nanay_idle.png",
          appUrl: `${APP}/parent/#/auth`,
          appBtn: "Open Parent App",
          accentBorder: "border-orange-500/30",
          accentBg: "bg-orange-500/5",
          steps: [
            {
              id: "p1",
              title: "Create your free Parent account",
              desc: "Open the Parent App and sign up with email & password (or Continue with Google).",
            },
            {
              id: "p2",
              title: "Activate test plan (Subscribe Free)",
              desc: "Go to Plan, choose any plan, and use the Free Test Pass (GCash or Card above). Verify it unlocks instantly.",
            },
            {
              id: "p3",
              title: "Add your child's profile",
              desc: "Now add your child's name and grade level (Grade 1, 2, or 3) to your active plan.",
            },
            {
              id: "p4",
              title: "Ask Teacher Saje AI a question",
              desc: "Tap 'Ask Saje' and ask a quick question (e.g. 'How can I help my Grade 1 child learn to read?').",
            },
            {
              id: "p5",
              title: "Check live child progress",
              desc: "After your child tries a lesson in the Tutor App, verify their progress shows up on your Parent dashboard.",
            },
          ],
        },
        {
          key: "child" as const,
          badge: "Step 2 · ~8 mins",
          title: "Kid Track (Guided by Parent)",
          tagline: "Bilingual read-aloud lessons, games, and touch drills",
          character: "/assets/characters/kuya_idle.png",
          appUrl: `${APP}/tutor/`,
          appBtn: "Open Tutor App (For Kids)",
          accentBorder: "border-sky-500/30",
          accentBg: "bg-sky-500/5",
          steps: [
            {
              id: "c1",
              title: "Sign in once & tap avatar",
              desc: "Parent signs in once with email/password. Then let your child tap their avatar picture (no passwords for kids!).",
            },
            {
              id: "c2",
              title: "Try Today's Trip (Math, English, or Science)",
              desc: "Let your child start a daily lesson. Watch if they can follow along naturally.",
            },
            {
              id: "c3",
              title: "Check read-aloud voice clarity",
              desc: "Listen to Teacher Saje reading aloud. Is the voice warm, clear, and easy to understand in English & Filipino?",
            },
            {
              id: "c4",
              title: "Test touch & tracing",
              desc: "Let your child tap buttons and trace letters or shapes. Do buttons react immediately with sound?",
            },
            {
              id: "c5",
              title: "Rotate your phone (Upright & Sideways)",
              desc: "Hold your phone vertically and horizontally. Does the lesson fill the screen comfortably?",
            },
            {
              id: "c6",
              title: "Explore the Funzone",
              desc: "Open the Funzone to try a mini-game or the read-aloud story corner.",
            },
          ],
        },
        {
          key: "teacher" as const,
          badge: "Step 3 · ~4 mins",
          title: "Teacher Track (100% Free)",
          tagline: "Classroom sections, class codes, and student mastery",
          character: "/assets/characters/teacher_idle.png",
          appUrl: `${APP}/teacher/`,
          appBtn: "Open Teacher App",
          accentBorder: "border-indigo-500/30",
          accentBg: "bg-indigo-500/5",
          steps: [
            {
              id: "t1",
              title: "Sign in to Teacher App",
              desc: "Create an account or Continue with Google (completely free forever for teachers).",
            },
            {
              id: "t2",
              title: "Create a class section",
              desc: "Create your class (e.g. 'Grade 2 - Sampaguita') or tap 'Try a sample class'.",
            },
            {
              id: "t3",
              title: "Share your Class Code",
              desc: "Copy your 6-letter class code. Enter it in a Parent account under 'Class code from teacher' and approve the request.",
            },
            {
              id: "t4",
              title: "Recommend a lesson",
              desc: "Pick a Math, English, or Science topic and recommend it to your class.",
            },
            {
              id: "t5",
              title: "Check class topic board",
              desc: "Verify you can see overall class completion and individual learner mastery.",
            },
          ],
        },
      ],

      // What to Look For (Distilled 58-Point Quality Highlights)
      qualityTitle: "What to Look For During Testing",
      qualitySubtitle: "Our key focus areas for the pilot test:",
      qualityPillars: [
        {
          icon: Smartphone,
          title: "Screen & Touch",
          desc: "Lessons fit sideways & upright. Large buttons easy for little fingers to tap without lag.",
        },
        {
          icon: Volume2,
          title: "Voice & Audio",
          desc: "Teacher Saje speaks clearly in English & Tagalog. Pronunciation is natural and friendly.",
        },
        {
          icon: Wifi,
          title: "Speed & Mobile Data",
          desc: "Loads quickly in mobile browsers and runs smoothly on regular data connections.",
        },
        {
          icon: Smile,
          title: "Child Joy & Focus",
          desc: "Your child stays smiling and engaged. No confusing menus or homework frustration.",
        },
      ],

      // Feedback Bar
      feedbackTitle: "How was your testing experience?",
      fbSmooth: "Worked smoothly!",
      fbConfusing: "A bit confusing",
      fbBug: "Found a bug",
    },

    tl: {
      badge: "Pilot Quest · Pagsubok ng User (UAT)",
      title: "SmartPath",
      titleAccent: "Tester Quest.",
      subtitle:
        "Tulungan kaming subukan ang SmartPath para sa mga batang Pilipino! Piliin ang iyong papel sa ibaba, i-tap ang mga hakbang, at sabihin ang iyong opinyon. Wala pang 10 minuto.",
      allRoles: "Lahat ng 3 Papel",
      progressLabel: "Progreso ng Quest",
      tasksDone: "natapos na gawain",
      reset: "I-reset",

      // Free test pass banner
      testPassTitle: "Libreng Test Payment Pass (₱0 Bawas)",
      testPassDesc: "Gamitin ang alinman sa libreng test method sa Parent plan activation:",
      gcashOpt: "Option A: Piliin ang GCash o Maya → I-tap ang 'Authorize Test Payment'.",
      cardOpt: "Option B: Piliin ang Card at kopyahin ang test card number na ito:",
      cardMeta: "Exp: 12/30 · CVC: 123",
      copyCardBtn: "Kopyahin",
      copiedCardBtn: "Nakopya!",

      // Kasunduan at Pahintulot
      agreementBadge: "Ayon sa RA 10173 · 100% Ligtas",
      agreementTitle: "Kasunduan sa Pagsubok at Paunawa sa Privacy",
      agreementSubtitle: "Sa paglahok sa pilot test na ito, sumasang-ayon ka sa 3 simpleng puntong ito:",
      agreements: [
        {
          num: "1",
          title: "May Gabay ng Nakatatanda",
          desc: "Pinatutunayan mong ikaw ay magulang, tagapangalaga, o guro na gumagabay sa bata. Ang bata ay sumusubok sa ilalim ng iyong patnubay.",
        },
        {
          num: "2",
          title: "100% Libre · Walang Bawas sa Pera",
          desc: "Ang test pass at test card ay pawang simulation lamang. Walang anumang bawas sa iyong totoong pera, GCash, o bangko.",
        },
        {
          num: "3",
          title: "Protektado ang Datos ng Bata",
          desc: "Alinsunod sa Data Privacy Act (RA 10173). Hindi namin ibinebenta o ipinapamahagi ang impormasyon ng bata. Ang feedback ay kusang-loob upang mapaganda ang SmartPath.",
        },
      ],
      agreementFooter: "Sa pagsusuri ng SmartPath, sumasang-ayon ka sa aming",
      termsLink: "Terms of Service",
      privacyLink: "Privacy Policy",

      // 3 Straightforward Role Tracks
      roles: [
        {
          key: "parent" as const,
          badge: "Hakbang 1 · ~5 min",
          title: "Para sa Magulang (Parent)",
          tagline: "Pag-setup ng account, pag-unlock ng aralin, at dashboard",
          character: "/assets/characters/nanay_idle.png",
          appUrl: `${APP}/parent/#/auth`,
          appBtn: "Buksan ang Parent App",
          accentBorder: "border-orange-500/30",
          accentBg: "bg-orange-500/5",
          steps: [
            {
              id: "p1",
              title: "Gumawa ng Parent account",
              desc: "Buksan ang Parent App at mag-sign up gamit ang email at password (o Continue with Google).",
            },
            {
              id: "p2",
              title: "I-activate ang test plan (Libreng Subscription)",
              desc: "Pumunta sa Plan, pumili ng plan, at gamitin ang Test Pass (GCash o Card). Tiyaking bumukas agad.",
            },
            {
              id: "p3",
              title: "Idagdag ang iyong anak",
              desc: "Ngayon ilagay ang pangalan at baitang ng anak (Grade 1, 2, o 3) sa iyong aktibong plan.",
            },
            {
              id: "p4",
              title: "Magtanong kay Teacher Saje AI",
              desc: "I-tap ang 'Ask Saje' at magtanong (hal. 'Paano ko matutulungan magbasa ang anak ko sa Grade 1?').",
            },
            {
              id: "p5",
              title: "Tingnan ang progreso ng anak",
              desc: "Kapag nag-aral ang anak sa Tutor App, tingnan kung lumabas agad ang progreso sa iyong dashboard.",
            },
          ],
        },
        {
          key: "child" as const,
          badge: "Hakbang 2 · ~8 min",
          title: "Para sa Bata (Kasama ang Magulang)",
          tagline: "Aralin na may boses, mga laro, at masayang pagsusulat",
          character: "/assets/characters/kuya_idle.png",
          appUrl: `${APP}/tutor/`,
          appBtn: "Buksan ang Tutor App (Para sa Bata)",
          accentBorder: "border-sky-500/30",
          accentBg: "bg-sky-500/5",
          steps: [
            {
              id: "c1",
              title: "Mag-sign in at i-tap ang larawan",
              desc: "Mag-sign in ang magulang nang isang beses. Hayaang i-tap ng bata ang kanyang avatar (walang password para sa bata!).",
            },
            {
              id: "c2",
              title: "Subukan ang Today's Trip (Math, English, Science)",
              desc: "Simulan ang aralin ng araw. Tingnan kung madaling sundan ng bata ang mga laro.",
            },
            {
              id: "c3",
              title: "Pakinggan ang boses ni Teacher Saje",
              desc: "Malinaw at magiliw ba ang boses ni Teacher Saje sa Ingles at Tagalog? Madali bang maintindihan?",
            },
            {
              id: "c4",
              title: "Subukan ang pagsulat at pag-tap",
              desc: "Hayaang pumindot at mag-trace ang bata. Mabilis ba ang sagot ng buttons at may tunog ba?",
            },
            {
              id: "c5",
              title: "Iikot ang telepono (Patayo at Pahalang)",
              desc: "Subukang i-rotate ang phone. Sakop ba nang maayos ang buong screen nang walang putol?",
            },
            {
              id: "c6",
              title: "Buksan ang Funzone",
              desc: "Subukan ang mga laro sa Funzone o ang kuwento sa reading corner.",
            },
          ],
        },
        {
          key: "teacher" as const,
          badge: "Hakbang 3 · ~4 min",
          title: "Para sa Guro (Teacher · 100% Libre)",
          tagline: "Mga klase, class code, at progreso ng bawat mag-aaral",
          character: "/assets/characters/teacher_idle.png",
          appUrl: `${APP}/teacher/`,
          appBtn: "Buksan ang Teacher App",
          accentBorder: "border-indigo-500/30",
          accentBg: "bg-indigo-500/5",
          steps: [
            {
              id: "t1",
              title: "Mag-sign in sa Teacher App",
              desc: "Gumawa ng libreng account o Continue with Google (100% libre para sa mga guro).",
            },
            {
              id: "t2",
              title: "Gumawa ng seksyon",
              desc: "Gumawa ng klase (hal. 'Grade 2 - Sampaguita') o i-tap ang 'Try a sample class'.",
            },
            {
              id: "t3",
              title: "Ibahagi ang Class Code",
              desc: "Kopyahin ang 6-letter class code. Ipagamit sa Parent account at aprubahan ang request.",
            },
            {
              id: "t4",
              title: "Magrekomenda ng aralin",
              desc: "Pumili ng aralin sa Math, English, o Science at irekomenda sa iyong klase.",
            },
            {
              id: "t5",
              title: "Suriin ang mastery board ng klase",
              desc: "Tingnan ang pangkalahatang progreso ng klase at ng bawat bata.",
            },
          ],
        },
      ],

      // What to Look For
      qualityTitle: "Mga Dapat Pansinin Habang Sumusubok",
      qualitySubtitle: "Ang mga mahahalagang aspeto ng pilot testing:",
      qualityPillars: [
        {
          icon: Smartphone,
          title: "Screen at Touch",
          desc: "Kasya ang aralin sa screen pahalang man o patayo. Malalaki ang pindutan para sa maliliit na daliri.",
        },
        {
          icon: Volume2,
          title: "Boses at Tunog",
          desc: "Malinaw at magiliw magsalita si Teacher Saje sa Tagalog at English. Natural ang bigkas.",
        },
        {
          icon: Wifi,
          title: "Bilis sa Mobile Data",
          desc: "Mabilis mag-load sa mobile browser at maayos gamitin kahit sa karaniwang mobile internet.",
        },
        {
          icon: Smile,
          title: "Sigla at Ngiti ng Bata",
          desc: "Masaya at hindi naiinip ang bata habang natututo. Walang iyak o lungkot sa aralin.",
        },
      ],

      // Feedback Bar
      feedbackTitle: "Kumusta ang iyong karanasan sa pagsusuri?",
      fbSmooth: "Maayos lahat!",
      fbConfusing: "Medyo nakakalito",
      fbBug: "May nakitang bug",
    },
  }[lang];

  // Calculate totals
  const allStepIds = t.roles.flatMap((r) => r.steps.map((s) => s.id));
  const totalCompleted = allStepIds.filter((id) => checked[id]).length;
  const progressPercent = Math.round((totalCompleted / allStepIds.length) * 100);

  const visibleRoles = activeTab === "all" ? t.roles : t.roles.filter((r) => r.key === activeTab);

  return (
    <div className="space-y-8">
      {/* Top Controls: Language Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-50 px-3.5 py-1 text-xs font-extrabold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
          <Sparkles className="h-3.5 w-3.5 text-orange-500" />
          {t.badge}
        </span>

        <div
          role="group"
          aria-label="Language"
          className="inline-flex rounded-full border border-slate-900/10 bg-white/80 p-1 shadow-xs backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
        >
          {(["en", "tl"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition ${
                lang === l
                  ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {l === "en" ? "English" : "Tagalog"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center">
        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.025em] text-slate-900 sm:text-5xl dark:text-white">
          {t.title} <span className="text-gradient-sunset">{t.titleAccent}</span>
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {t.subtitle}
        </p>
      </div>

      {/* Quest Progress Bar */}
      <div className="card-premium p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-extrabold text-slate-900 dark:text-white">
                {t.progressLabel}: {totalCompleted} of {allStepIds.length} {t.tasksDone} ({progressPercent}%)
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Tap steps below as you test. Progress saves automatically in your browser.
              </p>
            </div>
          </div>

          {totalCompleted > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <RotateCcw className="h-3 w-3" />
              {t.reset}
            </button>
          )}
        </div>

        {/* Progress track */}
        <div className="mt-3.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-gradient-sunset"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Free Test Payment Pass (Prominent, zero real money) */}
      <section className="card-premium border-2 border-emerald-500/25 bg-gradient-to-r from-emerald-500/[0.04] to-sky-500/[0.04] p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
              <CreditCard className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
                  {t.testPassTitle}
                </h3>
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-black uppercase text-white">
                  ₱0 Test Mode
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                {t.testPassDesc}
              </p>
            </div>
          </div>

          {/* Copyable Card Box */}
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-2.5 text-white dark:bg-slate-800">
            <div>
              <p className="font-mono text-xs font-extrabold tracking-wider text-amber-300">
                {TEST_CARD}
              </p>
              <p className="text-[10px] text-slate-400">{t.cardMeta}</p>
            </div>
            <button
              type="button"
              onClick={copyCard}
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-3 text-[11px] font-extrabold text-slate-900 transition hover:bg-amber-100"
            >
              {copiedCard ? (
                <>
                  <Check className="h-3 w-3 text-emerald-600" />
                  {t.copiedCardBtn}
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  {t.copyCardBtn}
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-300">
            {t.gcashOpt}
          </span>
          <span className="text-slate-400">or</span>
          <span className="rounded-lg bg-sky-500/10 px-2.5 py-1 text-sky-700 dark:text-sky-300">
            {t.cardOpt} {TEST_CARD}
          </span>
        </div>
      </section>

      {/* Pilot Tester Agreement & Privacy Notice */}
      <section className="card-premium border border-slate-900/10 bg-slate-50/70 p-5 sm:p-6 dark:border-white/10 dark:bg-slate-850">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-900/5 pb-4 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-heading text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {t.agreementTitle}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {t.agreementSubtitle}
              </p>
            </div>
          </div>
          <span className="inline-block self-start sm:self-auto rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            {t.agreementBadge}
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {t.agreements.map((item) => (
            <div
              key={item.num}
              className="rounded-xl border border-slate-900/5 bg-white p-3.5 shadow-2xs dark:border-white/5 dark:bg-slate-800"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-orange-100 text-[11px] font-black text-orange-700 dark:bg-orange-500/20 dark:text-orange-300">
                  {item.num}
                </span>
                <h4 className="font-heading text-xs font-extrabold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-900/5 pt-3 text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span>
            {t.agreementFooter}{" "}
            <Link href="/terms" className="font-bold text-orange-600 underline hover:text-orange-700 dark:text-orange-400">
              {t.termsLink}
            </Link>{" "}
            &amp;{" "}
            <Link href="/privacy" className="font-bold text-orange-600 underline hover:text-orange-700 dark:text-orange-400">
              {t.privacyLink}
            </Link>
            .
          </span>
          <span className="font-semibold text-slate-400">
            Republic Act No. 10173 (Data Privacy Act of 2012)
          </span>
        </div>
      </section>

      {/* Role Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-extrabold transition ${
            activeTab === "all"
              ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
              : "border border-slate-900/10 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          {t.allRoles}
        </button>

        {t.roles.map((r) => {
          const isActive = activeTab === r.key;
          const roleDone = r.steps.filter((s) => checked[s.id]).length;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => setActiveTab(r.key)}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-extrabold transition ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
                  : "border border-slate-900/10 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <span>{r.title}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                  roleDone === r.steps.length
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {roleDone}/{r.steps.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3 Straightforward Role Mission Cards */}
      <div className="space-y-6">
        {visibleRoles.map((role) => {
          const roleDone = role.steps.filter((s) => checked[s.id]).length;
          const isComplete = roleDone === role.steps.length;

          return (
            <section
              key={role.key}
              className={`card-premium relative overflow-hidden border-2 p-6 sm:p-7 transition ${role.accentBorder} ${
                isComplete ? "ring-2 ring-emerald-500/60" : ""
              }`}
            >
              {/* Role Header */}
              <div className="flex flex-col gap-4 border-b border-slate-900/5 pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-white p-1 shadow-xs dark:bg-slate-800">
                    <Image
                      src={role.character}
                      alt={role.title}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                      {role.badge}
                    </span>
                    <h2 className="mt-0.5 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                      {role.title}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {role.tagline}
                    </p>
                  </div>
                </div>

                <a
                  href={role.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-xs font-extrabold text-white transition hover:bg-orange-600 dark:bg-white dark:text-slate-900 dark:hover:bg-orange-400 dark:hover:text-white"
                >
                  {role.appBtn}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Steps Checkbox List */}
              <div className="mt-5 space-y-2.5">
                {role.steps.map((step, idx) => {
                  const isChecked = !!checked[step.id];
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => toggleItem(step.id)}
                      className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition ${
                        isChecked
                          ? "border-emerald-500/30 bg-emerald-50/50 opacity-80 dark:border-emerald-400/20 dark:bg-emerald-500/10"
                          : "border-slate-900/10 bg-white hover:border-orange-500/30 dark:border-white/10 dark:bg-slate-900/60"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-black ${
                          isChecked
                            ? "bg-emerald-500 text-white"
                            : "border border-slate-300 text-slate-400 dark:border-slate-600"
                        }`}
                      >
                        {isChecked ? <Check className="h-3 w-3" /> : idx + 1}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-xs font-extrabold ${
                            isChecked
                              ? "text-emerald-800 line-through dark:text-emerald-300"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {step.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 1-Tap Feedback Bar for this role */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {role.title} feedback:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={buildReportLink(role.title, "Smooth & clear", roleDone)}
                    className="inline-flex h-8 items-center gap-1 rounded-full bg-emerald-500/10 px-3 text-[11px] font-extrabold text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300"
                  >
                    <ThumbsUp className="h-3 w-3" />
                    {t.fbSmooth}
                  </a>
                  <a
                    href={buildReportLink(role.title, "Confusing part", roleDone)}
                    className="inline-flex h-8 items-center gap-1 rounded-full bg-amber-500/10 px-3 text-[11px] font-extrabold text-amber-700 hover:bg-amber-500/20 dark:text-amber-300"
                  >
                    <HelpCircle className="h-3 w-3" />
                    {t.fbConfusing}
                  </a>
                  <a
                    href={buildReportLink(role.title, "Bug found", roleDone)}
                    className="inline-flex h-8 items-center gap-1 rounded-full bg-rose-500/10 px-3 text-[11px] font-extrabold text-rose-700 hover:bg-rose-500/20 dark:text-rose-300"
                  >
                    <Bug className="h-3 w-3" />
                    {t.fbBug}
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================================
          WHAT TO LOOK FOR: 4 SIMPLE QUALITY PILLARS (DISTILLED FROM 58 UAT ITEMS)
         ========================================================================= */}
      <section className="card-premium p-6 sm:p-7">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5 text-orange-500" />
            Quality Checklist
          </span>
          <h2 className="mt-1 font-heading text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
            {t.qualityTitle}
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {t.qualitySubtitle}
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.qualityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-900/10 bg-white p-4.5 text-center sm:text-left dark:border-white/10 dark:bg-slate-900"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300 mx-auto sm:mx-0">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-heading text-sm font-extrabold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
