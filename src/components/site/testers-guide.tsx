"use client";

// TEMPORARY — UAT pilot guide. Remove with src/app/testers/page.tsx and the
// "Testers" link in nav.tsx when UAT ends.

import { useState } from "react";
import { Users, Baby, GraduationCap, Mail, CreditCard, ShieldAlert, ExternalLink } from "lucide-react";

type Lang = "en" | "tl";

const APP = "https://smartpathtutor.ph/app";
const SUPPORT = "sptutor.ph@gmail.com";

const reportLink = (role: string) =>
  `mailto:${SUPPORT}?subject=${encodeURIComponent(`UAT – ${role}`)}&body=${encodeURIComponent(
    "What I was doing:\n\nWhat happened:\n\nWhat I expected:\n\nPhone/computer and browser:\n\n(Attach a screenshot if you can.)",
  )}`;

const T = {
  en: {
    badge: "Temporary · User testing (UAT)",
    title: "Help us test SmartPath",
    intro:
      "Thank you for testing! Choose your role below, follow the steps, and tell us anything that is confusing or does not work. It takes about 15–20 minutes.",
    before: "Before you start",
    beforeItems: [
      "Use your phone or computer browser (Chrome or Safari). There is nothing to install.",
      "Use an email address you can open. You will get a confirmation email.",
      "Payments are in TEST MODE. No real money is taken.",
      "Test accounts may be deleted after testing ends.",
    ],
    payTitle: "How to pay in test mode",
    payItems: [
      "In the Parent app, open Plan, choose a plan, then tap Pay online.",
      "On the PayMongo page, choose GCash or Maya and tap Authorize Test Payment.",
      "Or choose card and type 4343 4343 4343 4345, any future date (e.g. 12/30) and any 3 digits.",
      "You come back to SmartPath. Your plan turns on within a few seconds.",
    ],
    fbNote:
      "Continue with Facebook works only if we added your Facebook account as a tester. If it says “App not active”, use Google or email instead.",
    steps: "Steps",
    check: "Please check",
    report: "Report a problem",
    roles: [
      {
        key: "parent",
        icon: Users,
        title: "I am a parent",
        who: "Start here. A parent account is needed before a child can use SmartPath.",
        buttons: [
          { label: "Create a parent account", href: `${APP}/parent/#/auth`, primary: true },
          { label: "Sign in", href: `${APP}/parent/#/auth` },
          { label: "We'll set it up for you", href: `${APP}/parent/#/setup-help` },
        ],
        steps: [
          "Tap Create a parent account, then tap the Create account tab.",
          "Type your name, email and a password twice (or use Continue with Google).",
          "Open the confirmation email and tap the link, then sign in.",
          "Open Plan, choose a plan and pay in test mode (see “How to pay in test mode”).",
          "Add your child: name and grade (Grades 1–3).",
          "Have a class code from a teacher tester? Enter it under Class code from the teacher.",
          "Sign out, then sign in again. Your email should already be filled in.",
        ],
        checks: [
          "Was creating the account easy to understand?",
          "Did the plan turn on after paying? Did the Subscribe banner on Home disappear?",
          "Can you see your child's progress after they do a lesson?",
          "Try Teacher Saje (Ask AI) with a homework question.",
        ],
        role: "Parent",
      },
      {
        key: "child",
        icon: Baby,
        title: "My child will test",
        who: "For Grades 1–3. Do this after the parent account has an active plan.",
        buttons: [{ label: "Open the Tutor app", href: `${APP}/tutor/`, primary: true }],
        steps: [
          "On your child's phone, tablet or computer, open the Tutor app.",
          "A grown-up signs in once with the parent email and password.",
          "Your child taps their picture. No password needed for kids.",
          "Let your child do today's lesson: reading aloud, tracing and the activities.",
          "Close the app and open it again. Your child should still be signed in.",
        ],
        checks: [
          "Could your child use it alone after you signed in?",
          "Were the instructions and voice clear for your child?",
          "Did anything freeze, look broken or feel too hard?",
        ],
        role: "Child",
      },
      {
        key: "teacher",
        icon: GraduationCap,
        title: "I am a teacher",
        who: "Free for teachers. Best tested together with a parent tester.",
        buttons: [
          { label: "Create a teacher account", href: `${APP}/teacher/`, primary: true },
          { label: "Sign in", href: `${APP}/teacher/` },
        ],
        steps: [
          "Open the Teacher app and create an account (or use Continue with Google).",
          "Create a class.",
          "Share the class code with a parent tester. They enter it in the Parent app, then you approve the request on the class page.",
          "Recommend a lesson and write a multiple-choice question for the class.",
          "Look at which topics your class has done.",
        ],
        checks: [
          "Was creating a class and sharing the class code clear?",
          "Did the family's request show up for you to approve?",
          "Is anything missing that you need in class?",
        ],
        role: "Teacher",
      },
    ],
    reportTitle: "Found a problem or have an idea?",
    reportBody:
      "Email us what you were doing, what happened, and what you expected. A screenshot helps a lot. Every report is read.",
    thanks: "Salamat! Thank you for helping make SmartPath better for Filipino families.",
  },
  tl: {
    badge: "Pansamantala · Pagsubok ng user (UAT)",
    title: "Tulungan kaming subukan ang SmartPath",
    intro:
      "Salamat sa pagsubok! Piliin ang iyong papel sa ibaba, sundin ang mga hakbang, at sabihin sa amin kung may nakakalito o hindi gumagana. Mga 15–20 minuto lang ito.",
    before: "Bago ka magsimula",
    beforeItems: [
      "Gamitin ang browser ng iyong phone o computer (Chrome o Safari). Walang kailangang i-install.",
      "Gumamit ng email na nabubuksan mo. Makakatanggap ka ng confirmation email.",
      "Ang bayad ay nasa TEST MODE. Walang totoong perang kukunin.",
      "Maaaring burahin ang mga test account pagkatapos ng testing.",
    ],
    payTitle: "Paano magbayad sa test mode",
    payItems: [
      "Sa Parent app, buksan ang Plan, pumili ng plan, at i-tap ang Pay online.",
      "Sa PayMongo page, piliin ang GCash o Maya at i-tap ang Authorize Test Payment.",
      "O piliin ang card at i-type ang 4343 4343 4343 4345, kahit anong petsa sa hinaharap (hal. 12/30) at kahit anong 3 numero.",
      "Babalik ka sa SmartPath. Bubukas ang iyong plan sa loob ng ilang segundo.",
    ],
    fbNote:
      "Gumagana lang ang Continue with Facebook kung idinagdag namin ang iyong Facebook bilang tester. Kung lumabas ang “App not active”, gamitin ang Google o email.",
    steps: "Mga hakbang",
    check: "Pakisuri",
    report: "Mag-ulat ng problema",
    roles: [
      {
        key: "parent",
        icon: Users,
        title: "Magulang ako",
        who: "Dito magsimula. Kailangan muna ng parent account bago magamit ng bata ang SmartPath.",
        buttons: [
          { label: "Gumawa ng parent account", href: `${APP}/parent/#/auth`, primary: true },
          { label: "Mag-sign in", href: `${APP}/parent/#/auth` },
          { label: "Kami na ang mag-aayos para sa iyo", href: `${APP}/parent/#/setup-help` },
        ],
        steps: [
          "I-tap ang Gumawa ng parent account, tapos i-tap ang Create account.",
          "I-type ang iyong pangalan, email at password nang dalawang beses (o gamitin ang Continue with Google).",
          "Buksan ang confirmation email at i-tap ang link, tapos mag-sign in.",
          "Buksan ang Plan, pumili ng plan at magbayad sa test mode (tingnan ang “Paano magbayad sa test mode”).",
          "Idagdag ang iyong anak: pangalan at baitang (Grade 1–3).",
          "May class code ka mula sa isang teacher tester? Ilagay ito sa Class code from the teacher.",
          "Mag-sign out, tapos mag-sign in ulit. Dapat nakalagay na ang iyong email.",
        ],
        checks: [
          "Madali bang intindihin ang paggawa ng account?",
          "Bumukas ba ang plan pagkatapos magbayad? Nawala ba ang Subscribe banner sa Home?",
          "Nakikita mo ba ang progreso ng iyong anak pagkatapos niyang gumawa ng aralin?",
          "Subukan si Teacher Saje (Ask AI) gamit ang isang tanong sa takdang-aralin.",
        ],
        role: "Parent",
      },
      {
        key: "child",
        icon: Baby,
        title: "Susubok ang anak ko",
        who: "Para sa Grade 1–3. Gawin ito kapag may aktibong plan na ang parent account.",
        buttons: [{ label: "Buksan ang Tutor app", href: `${APP}/tutor/`, primary: true }],
        steps: [
          "Sa phone, tablet o computer ng iyong anak, buksan ang Tutor app.",
          "Isang beses lang mag-sign in ang magulang gamit ang email at password ng parent account.",
          "I-tap ng bata ang kanyang larawan. Walang password para sa mga bata.",
          "Hayaang gawin ng bata ang aralin ngayong araw: pagbasa nang malakas, pagsulat at mga gawain.",
          "Isara ang app at buksan ulit. Dapat naka-sign in pa rin ang bata.",
        ],
        checks: [
          "Nagamit ba ito ng bata nang mag-isa pagkatapos mong mag-sign in?",
          "Malinaw ba ang mga tagubilin at boses para sa bata?",
          "May tumigil ba, mukhang sira, o masyadong mahirap?",
        ],
        role: "Child",
      },
      {
        key: "teacher",
        icon: GraduationCap,
        title: "Guro ako",
        who: "Libre para sa mga guro. Mas mainam subukan kasama ang isang parent tester.",
        buttons: [
          { label: "Gumawa ng teacher account", href: `${APP}/teacher/`, primary: true },
          { label: "Mag-sign in", href: `${APP}/teacher/` },
        ],
        steps: [
          "Buksan ang Teacher app at gumawa ng account (o gamitin ang Continue with Google).",
          "Gumawa ng klase.",
          "Ibahagi ang class code sa isang parent tester. Ilalagay nila ito sa Parent app, tapos aaprubahan mo ang request sa pahina ng klase.",
          "Magrekomenda ng aralin at sumulat ng multiple-choice na tanong para sa klase.",
          "Tingnan kung aling mga paksa na ang natapos ng klase.",
        ],
        checks: [
          "Malinaw ba ang paggawa ng klase at pagbahagi ng class code?",
          "Lumabas ba sa iyo ang request ng pamilya para aprubahan?",
          "May kulang ba na kailangan mo sa klase?",
        ],
        role: "Teacher",
      },
    ],
    reportTitle: "May nakitang problema o may ideya?",
    reportBody:
      "I-email sa amin kung ano ang ginagawa mo, ano ang nangyari, at ano ang inaasahan mo. Malaking tulong ang screenshot. Binabasa namin ang bawat ulat.",
    thanks: "Salamat sa pagtulong na mapaganda ang SmartPath para sa mga pamilyang Pilipino!",
  },
} as const;

export function TestersGuide() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20">
          {t.badge}
        </span>
        <div role="group" aria-label="Language" className="inline-flex rounded-full bg-slate-100 p-1 dark:bg-white/10">
          {(["en", "tl"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`min-h-10 rounded-full px-4 text-sm font-bold transition ${
                lang === l ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white" : "text-slate-500 dark:text-slate-300"
              }`}
            >
              {l === "en" ? "English" : "Tagalog"}
            </button>
          ))}
        </div>
      </div>

      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{t.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{t.intro}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
          <h2 className="flex items-center gap-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
            <ShieldAlert className="h-5 w-5 text-orange-600" /> {t.before}
          </h2>
          <ul className="mt-3 space-y-2 text-[15px] text-slate-600 dark:text-slate-300">
            {t.beforeItems.map((x) => <li key={x} className="flex gap-2"><span aria-hidden>•</span><span>{x}</span></li>)}
          </ul>
        </section>
        <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-white/10">
          <h2 className="flex items-center gap-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
            <CreditCard className="h-5 w-5 text-orange-600" /> {t.payTitle}
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] text-slate-600 dark:text-slate-300">
            {t.payItems.map((x) => <li key={x}>{x}</li>)}
          </ol>
        </section>
      </div>

      <p className="mt-4 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-900 ring-1 ring-sky-200 dark:bg-sky-500/10 dark:text-sky-100 dark:ring-sky-500/20">
        {t.fbNote}
      </p>

      <div className="mt-10 space-y-6">
        {t.roles.map((r) => {
          const Icon = r.icon;
          return (
            <section key={r.key} id={r.key} className="scroll-mt-24 rounded-3xl bg-white p-6 ring-1 ring-slate-900/10 sm:p-8 dark:bg-slate-900 dark:ring-white/10">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">{r.title}</h2>
                  <p className="mt-1 text-[15px] text-slate-600 dark:text-slate-300">{r.who}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {r.buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    target="_blank"
                    rel="noopener"
                    className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-[15px] font-bold transition ${
                      "primary" in b && b.primary
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-white/10 dark:text-white"
                    }`}
                  >
                    {b.label} <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">{t.steps}</h3>
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] text-slate-700 dark:text-slate-200">
                    {r.steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">{t.check}</h3>
                  <ul className="mt-2 space-y-2 text-[15px] text-slate-700 dark:text-slate-200">
                    {r.checks.map((c) => <li key={c} className="flex gap-2"><span aria-hidden>☐</span><span>{c}</span></li>)}
                  </ul>
                  <a href={reportLink(r.role)} className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-bold text-orange-700 underline dark:text-orange-300">
                    <Mail className="h-4 w-4" aria-hidden /> {t.report}
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-10 rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
        <h2 className="font-heading text-2xl font-extrabold">{t.reportTitle}</h2>
        <p className="mt-2 text-slate-300">{t.reportBody}</p>
        <a href={reportLink("General")} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 font-bold text-slate-900">
          <Mail className="h-4 w-4" aria-hidden /> {SUPPORT}
        </a>
        <p className="mt-6 text-sm text-slate-400">{t.thanks}</p>
      </section>
    </div>
  );
}
