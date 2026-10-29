"use client";

// TEMPORARY — UAT pilot guide. Remove with src/app/testers/page.tsx and the
// "Testers" link in nav.tsx when UAT ends.

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Compass,
  GraduationCap,
  Mail,
  CreditCard,
  ShieldAlert,
  ExternalLink,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Sparkles,
  Trophy,
  Clock,
  RotateCcw,
  ThumbsUp,
  HelpCircle,
  Bug,
  Layers,
} from "lucide-react";

type Lang = "en" | "tl";
type RoleFilter = "all" | "parent" | "child" | "teacher";

const APP = "https://smartpathtutor.ph/app";
const SUPPORT = "sptutor.ph@gmail.com";
const STORAGE_KEY = "smartpath_uat_quest_v1";
const TEST_CARD = "4343 4343 4343 4345";

const buildReportLink = (role: string, status: string, completedCount: number, totalCount: number) =>
  `mailto:${SUPPORT}?subject=${encodeURIComponent(`UAT Feedback – ${role} (${status})`)}&body=${encodeURIComponent(
    `Role tested: ${role}\nChecklist progress: ${completedCount}/${totalCount} completed\nOverall experience: ${status}\n\nWhat I was doing:\n\nWhat happened:\n\nWhat I expected:\n\nPhone/computer and browser:\n\n(Attach a screenshot if you can.)`,
  )}`;

const T = {
  en: {
    badge: "Pilot Quest · User Testing (UAT)",
    title: "SmartPath",
    titleAccent: "Tester Quest.",
    intro:
      "Pick your mission below, tap each step as you finish it, and help us make SmartPath awesome for Filipino kids! Your progress saves automatically.",
    questProgress: "Your Quest Progress",
    completedLabel: "tasks completed",
    resetLabel: "Reset progress",
    allMissions: "All 3 Missions",
    before: "Quick Rules Before You Start",
    beforeItems: [
      "Works right in Chrome or Safari on phone, tablet, or laptop — nothing to install.",
      "Use a real email address you can open for the confirmation link.",
      "Payments are in TEST MODE — zero real money is charged.",
      "Facebook login only works for pre-added testers; use Google or email if prompted.",
    ],
    payTitle: "Test Payment Pass (Free)",
    paySubtitle: "In Parent → Plan → Pay online, use either option on PayMongo:",
    payGcash: "Option A: Tap GCash or Maya → Tap Authorize Test Payment.",
    payCardLabel: "Option B: Tap Card and copy this test card:",
    copyBtn: "Copy Card",
    copiedBtn: "Copied!",
    cardMeta: "Exp: 12/30 · CVC: 123",
    steps: "Mission Steps (Tap as you go)",
    check: "Bonus Checks (Tap to verify)",
    quickFeedback: "Send 1-Tap Feedback:",
    fbSmooth: "Worked smoothly!",
    fbConfusing: "A bit confusing",
    fbBug: "Found a bug",
    missionDone: "Mission Complete!",
    allDoneTitle: "All Tester Missions Complete!",
    allDoneSub: "Salamat! Tap below to send your final tester summary to the SmartPath team.",
    sendFinalBtn: "Send Final Quest Report",
    roles: [
      {
        key: "parent" as const,
        missionBadge: "Mission 1 · ~7 mins",
        icon: Users,
        character: "/assets/characters/nanay_idle.png",
        accentColor: "from-orange-500/20 via-amber-500/10 to-transparent",
        badgeClass: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
        title: "Parent Mission",
        who: "Start here first! Set up your family account and unlock your child's learning path.",
        buttons: [
          { label: "Open Parent App", href: `${APP}/parent/#/auth`, primary: true },
          { label: "Need Setup Help?", href: `${APP}/parent/#/setup-help` },
        ],
        steps: [
          "Open Parent App and tap the Create account tab.",
          "Sign up with your name, email & password (or Continue with Google).",
          "Open the confirmation email, tap the link, and sign in.",
          "Open Plan, choose a plan, and activate with the Test Payment Pass above.",
          "Add your child's name and grade level (Grades 1–3).",
          "Optional: Enter a class code under Class code from the teacher.",
          "Sign out and sign back in — verify your email is remembered.",
        ],
        checks: [
          "Creating the parent account felt clear and fast",
          "Plan activated right after test payment & Subscribe banner disappeared",
          "Child's live progress appeared after they did a lesson",
          "Asked Teacher Saje (Ask AI) a homework question",
        ],
        role: "Parent",
      },
      {
        key: "child" as const,
        missionBadge: "Mission 2 · ~8 mins",
        icon: Compass,
        character: "/assets/characters/kuya_idle.png",
        accentColor: "from-sky-500/20 via-cyan-500/10 to-transparent",
        badgeClass: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
        title: "Kid & Tutor Mission",
        who: "For Grades 1–3! Do this right after your Parent account has an active plan.",
        buttons: [{ label: "Open Tutor App", href: `${APP}/tutor/`, primary: true }],
        steps: [
          "Open the Tutor App on your phone, tablet, or laptop.",
          "Sign in once with your parent email and password.",
          "Let your child tap their avatar picture (no password needed for kids!).",
          "Try Today's Trip: complete a Math, English, or Science activity with audio.",
          "Close the tab and reopen it — verify your child stays signed in.",
        ],
        checks: [
          "My child could navigate independently after sign-in",
          "Read-aloud voice and instructions were clear",
          "Lessons, tracing, and animations ran smoothly without freezing",
        ],
        role: "Child / Tutor",
      },
      {
        key: "teacher" as const,
        missionBadge: "Mission 3 · ~5 mins",
        icon: GraduationCap,
        character: "/assets/characters/teacher_idle.png",
        accentColor: "from-indigo-500/20 via-violet-500/10 to-transparent",
        badgeClass: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
        title: "Teacher Mission",
        who: "100% Free for teachers! Best tested alongside a Parent account.",
        buttons: [{ label: "Open Teacher App", href: `${APP}/teacher/`, primary: true }],
        steps: [
          "Open the Teacher App and create an account (or Continue with Google).",
          "Create a new class for your section (or tap Try a sample class).",
          "Share your 1-time class code with a Parent account and approve their join request.",
          "Recommend a lesson and create a quick multiple-choice question for the class.",
          "Check the class topic completion dashboard.",
        ],
        checks: [
          "Creating a class and sharing the code was effortless",
          "Parent join request appeared right away for approval",
          "Topic progress and lesson recommendations worked as expected",
        ],
        role: "Teacher",
      },
    ],
    reportTitle: "Spotted a bug or have a cool idea?",
    reportBody:
      "Send us a quick note with what you were doing and what happened. Screenshots are super helpful!",
    thanks: "Salamat! Every box you check helps us build a better learning companion for Filipino kids.",
  },
  tl: {
    badge: "Pilot Quest · Pagsubok ng User (UAT)",
    title: "SmartPath",
    titleAccent: "Tester Quest.",
    intro:
      "Piliin ang iyong misyon sa ibaba, i-tap ang bawat hakbang kapag natapos mo, at tulungan kaming pagandahin ang SmartPath! Awtomatikong nase-save ang iyong progreso.",
    questProgress: "Progreso ng Iyong Quest",
    completedLabel: "natapos na gawain",
    resetLabel: "I-reset",
    allMissions: "Lahat ng 3 Misyon",
    before: "Mahalagang Paalala Bago Magsimula",
    beforeItems: [
      "buksan sa Chrome o Safari sa phone, tablet, o laptop — walang kailangang i-install.",
      "Gumamit ng totoong email na nabubuksan mo para sa confirmation link.",
      "TEST MODE lang ang bayad — walang totoong perang mababawas.",
      "Kung hindi gumana ang Facebook login, gamitin ang Continue with Google o email.",
    ],
    payTitle: "Test Payment Pass (Libre)",
    paySubtitle: "Sa Parent → Plan → Pay online, piliin ang alinman sa PayMongo:",
    payGcash: "Option A: Piliin ang GCash o Maya → I-tap ang Authorize Test Payment.",
    payCardLabel: "Option B: Piliin ang Card at kopyahin ang test card na ito:",
    copyBtn: "Kopyahin",
    copiedBtn: "Nakopya!",
    cardMeta: "Exp: 12/30 · CVC: 123",
    steps: "Mga Hakbang sa Misyon (I-tap kapag tapos na)",
    check: "Bonus Checks (I-tap para kumpirmahin)",
    quickFeedback: "Magpadala ng Feedback:",
    fbSmooth: "Maayos lahat!",
    fbConfusing: "Medyo nakakalito",
    fbBug: "May nakitang bug",
    missionDone: "Tapos na ang Misyon!",
    allDoneTitle: "Tapos na ang Lahat ng Misyon!",
    allDoneSub: "Salamat! I-tap sa ibaba para ipadala ang iyong ulat sa SmartPath team.",
    sendFinalBtn: "Ipadala ang Final Quest Report",
    roles: [
      {
        key: "parent" as const,
        missionBadge: "Misyon 1 · ~7 min",
        icon: Users,
        character: "/assets/characters/nanay_idle.png",
        accentColor: "from-orange-500/20 via-amber-500/10 to-transparent",
        badgeClass: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
        title: "Misyon ng Magulang",
        who: "Magsimula rito! Gumawa ng parent account bago magamit ng bata ang SmartPath.",
        buttons: [
          { label: "Buksan ang Parent App", href: `${APP}/parent/#/auth`, primary: true },
          { label: "Tulong sa Pag-setup", href: `${APP}/parent/#/setup-help` },
        ],
        steps: [
          "Buksan ang Parent App at i-tap ang Create account tab.",
          "Mag-sign up gamit ang pangalan, email at password (o Continue with Google).",
          "Buksan ang confirmation email, i-tap ang link, at mag-sign in.",
          "Buksan ang Plan, pumili ng plan, at gamitin ang Test Payment Pass sa itaas.",
          "Idagdag ang pangalan at baitang ng iyong anak (Grade 1–3).",
          "Opsyonal: Ilagay ang class code mula sa guro.",
          "Mag-sign out at mag-sign in ulit — tingnan kung nakalagay na ang iyong email.",
        ],
        checks: [
          "Madaling maintindihan ang paggawa ng parent account",
          "Agad bumukas ang plan pagkatapos ng test payment",
          "Lumabas nang live ang progreso ng anak pagkatapos ng aralin",
          "Nasubukan si Teacher Saje (Ask AI) sa isang tanong",
        ],
        role: "Parent",
      },
      {
        key: "child" as const,
        missionBadge: "Misyon 2 · ~8 min",
        icon: Compass,
        character: "/assets/characters/kuya_idle.png",
        accentColor: "from-sky-500/20 via-cyan-500/10 to-transparent",
        badgeClass: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
        title: "Misyon ng Bata (Tutor)",
        who: "Para sa Grade 1–3! Gawin ito kapag aktibo na ang plan sa Parent account.",
        buttons: [{ label: "Buksan ang Tutor App", href: `${APP}/tutor/`, primary: true }],
        steps: [
          "Buksan ang Tutor App sa phone, tablet, o laptop ng bata.",
          "Mag-sign in nang isang beses gamit ang email at password ng magulang.",
          "Hayaang i-tap ng bata ang kanyang larawan (walang password para sa bata!).",
          "Subukan ang Today's Trip: Math, English, o Science kasama ang boses.",
          "Isara ang app at buksan ulit — dapat naka-sign in pa rin ang bata.",
        ],
        checks: [
          "Nagamit ng bata nang mag-isa pagkatapos mag-sign in",
          "Malinaw ang boses at mga panuto para sa bata",
          "Maayos at hindi nag-freeze ang mga laro at pagsulat",
        ],
        role: "Child / Tutor",
      },
      {
        key: "teacher" as const,
        missionBadge: "Misyon 3 · ~5 min",
        icon: GraduationCap,
        character: "/assets/characters/teacher_idle.png",
        accentColor: "from-indigo-500/20 via-violet-500/10 to-transparent",
        badgeClass: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
        title: "Misyon ng Guro",
        who: "100% Libre para sa mga guro! Mas masayang subukan kasama ang Parent account.",
        buttons: [{ label: "Buksan ang Teacher App", href: `${APP}/teacher/`, primary: true }],
        steps: [
          "Buksan ang Teacher App at gumawa ng account (o Continue with Google).",
          "Gumawa ng klase para sa iyong seksyon (o i-tap ang Try a sample class).",
          "Ibahagi ang class code sa Parent tester at aprubahan ang kanilang request.",
          "Magrekomenda ng aralin at gumawa ng multiple-choice na tanong.",
          "Tingnan ang progreso ng mga paksa ng iyong klase.",
        ],
        checks: [
          "Madaling gumawa ng klase at magbahagi ng class code",
          "Agad lumabas ang request ng pamilya para maaprubahan",
          "Malinaw ang progreso ng klase at rekomendasyon ng aralin",
        ],
        role: "Teacher",
      },
    ],
    reportTitle: "May nakitang problema o magandang ideya?",
    reportBody:
      "Magpadala ng maikling email kung ano ang nangyari. Malaking tulong ang screenshot!",
    thanks: "Salamat sa pagtulong na mapaganda ang SmartPath para sa mga batang Pilipino!",
  },
} as const;

export function TestersGuide() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeRole, setActiveRole] = useState<RoleFilter>("all");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copiedCard, setCopiedCard] = useState(false);

  const t = T[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setChecked(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const resetProgress = () => {
    setChecked({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const copyCardNumber = async () => {
    try {
      await navigator.clipboard.writeText(TEST_CARD);
      setCopiedCard(true);
      setTimeout(() => setCopiedCard(false), 2000);
    } catch {
      // fallback
    }
  };

  // Compute totals across all roles
  const getRoleStats = (roleKey: "parent" | "child" | "teacher") => {
    const roleObj = t.roles.find((r) => r.key === roleKey)!;
    const total = roleObj.steps.length + roleObj.checks.length;
    let done = 0;
    roleObj.steps.forEach((_, i) => {
      if (checked[`${roleKey}-step-${i}`]) done++;
    });
    roleObj.checks.forEach((_, i) => {
      if (checked[`${roleKey}-check-${i}`]) done++;
    });
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  };

  const parentStats = getRoleStats("parent");
  const childStats = getRoleStats("child");
  const teacherStats = getRoleStats("teacher");

  const totalTasks = parentStats.total + childStats.total + teacherStats.total;
  const totalDone = parentStats.done + childStats.done + teacherStats.done;
  const totalPercent = totalTasks > 0 ? Math.round((totalDone / totalTasks) * 100) : 0;

  const visibleRoles =
    activeRole === "all" ? t.roles : t.roles.filter((r) => r.key === activeRole);

  return (
    <div className="space-y-8">
      {/* Top Bar: Badge + Language Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow">
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
        <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          {t.intro}
        </p>
      </div>

      {/* Quick Rules + Interactive Test Payment Pass */}
      <div className="grid gap-5 lg:grid-cols-12">
        <section className="card-premium flex flex-col justify-between p-5 sm:p-6 lg:col-span-6">
          <div>
            <h2 className="flex items-center gap-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300">
                <ShieldAlert className="h-4.5 w-4.5" />
              </span>
              {t.before}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {t.beforeItems.map((x) => (
                <li key={x} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Interactive Test Payment Pass Card */}
        <section className="card-premium flex flex-col justify-between p-5 sm:p-6 lg:col-span-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300">
                  <CreditCard className="h-4.5 w-4.5" />
                </span>
                {t.payTitle}
              </h2>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                ₱0 Real Money
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t.paySubtitle}
            </p>

            <div className="mt-3 rounded-xl border border-slate-900/5 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200">
              {t.payGcash}
            </div>

            <p className="mt-3 text-xs font-bold text-slate-600 dark:text-slate-300">
              {t.payCardLabel}
            </p>

            {/* Simulated Copyable Credit Card Box */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-sm dark:bg-slate-800">
              <div>
                <p className="font-mono text-sm font-extrabold tracking-wider text-amber-300 sm:text-base">
                  {TEST_CARD}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-slate-300">{t.cardMeta}</p>
              </div>
              <button
                type="button"
                onClick={copyCardNumber}
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-xs font-extrabold text-slate-900 transition hover:bg-amber-100"
              >
                {copiedCard ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    {t.copiedBtn}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    {t.copyBtn}
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Role Mission Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveRole("all")}
          className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-extrabold transition sm:text-sm ${
            activeRole === "all"
              ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
              : "border border-slate-900/10 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          <Layers className="h-4 w-4" />
          {t.allMissions}
        </button>

        {t.roles.map((r) => {
          const Icon = r.icon;
          const stats = getRoleStats(r.key);
          const isActive = activeRole === r.key;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => setActiveRole(r.key)}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-extrabold transition sm:text-sm ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "border border-slate-900/10 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <Icon className="h-4 w-4 text-orange-500" />
              <span>{r.title}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${
                  stats.done === stats.total
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-200/80 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                }`}
              >
                {stats.done}/{stats.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mission Cards */}
      <div className="space-y-6">
        {visibleRoles.map((r) => {
          const Icon = r.icon;
          const stats = getRoleStats(r.key);
          const isComplete = stats.done === stats.total;

          return (
            <motion.section
              key={r.key}
              id={r.key}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`card-premium relative overflow-hidden p-6 sm:p-8 ${
                isComplete ? "ring-2 ring-emerald-500/70" : ""
              }`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${r.accentColor}`}
              />

              {/* Mission Header */}
              <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-slate-900/5 pb-5 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white p-1 shadow-xs dark:border-white/10 dark:bg-slate-800">
                    <Image
                      src={`${r.character}?v=2`}
                      alt={r.title}
                      width={64}
                      height={64}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-extrabold ${r.badgeClass}`}
                      >
                        <Clock className="h-3 w-3" />
                        {r.missionBadge}
                      </span>
                      {isComplete && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-extrabold text-white">
                          <CheckCircle2 className="h-3 w-3" />
                          {t.missionDone}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-1 flex items-center gap-2 font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                      <Icon className="h-5 w-5 text-orange-500" />
                      {r.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{r.who}</p>
                  </div>
                </div>

                {/* Launch App Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {r.buttons.map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      target="_blank"
                      rel="noopener"
                      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-extrabold transition ${
                        "primary" in b && b.primary
                          ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                          : "border border-slate-900/10 bg-white text-slate-800 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                      }`}
                    >
                      {b.label}
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mission Progress Bar */}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    style={{ width: `${stats.percent}%` }}
                    className="h-full rounded-full bg-gradient-sunset transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
                  {stats.done}/{stats.total} ({stats.percent}%)
                </span>
              </div>

              {/* Interactive Checklist Grid */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Column 1: Steps */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.steps}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {r.steps.map((stepText, idx) => {
                      const id = `${r.key}-step-${idx}`;
                      const isChecked = !!checked[id];
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleItem(id)}
                          className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left text-sm transition ${
                            isChecked
                              ? "border-emerald-500/30 bg-emerald-500/5 text-slate-500 line-through dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-slate-400"
                              : "border-slate-900/8 bg-slate-50/70 text-slate-800 hover:border-orange-500/40 hover:bg-white dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                              isChecked
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                            }`}
                          >
                            {isChecked ? <Check className="h-3 w-3" /> : idx + 1}
                          </span>
                          <span className="flex-1 leading-snug font-medium">{stepText}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Verification Checks + Quick Feedback */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t.check}
                    </h3>
                    <div className="mt-3 space-y-2">
                      {r.checks.map((checkText, idx) => {
                        const id = `${r.key}-check-${idx}`;
                        const isChecked = !!checked[id];
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggleItem(id)}
                            className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left text-sm transition ${
                              isChecked
                                ? "border-emerald-500/30 bg-emerald-500/5 text-slate-500 line-through dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-slate-400"
                                : "border-slate-900/8 bg-slate-50/70 text-slate-800 hover:border-orange-500/40 hover:bg-white dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-800"
                            }`}
                          >
                            {isChecked ? (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                            ) : (
                              <Circle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                            )}
                            <span className="flex-1 leading-snug font-medium">{checkText}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick 1-Tap Feedback Pills */}
                  <div className="mt-6 rounded-2xl border border-slate-900/5 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-800/40">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t.quickFeedback}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <a
                        href={buildReportLink(r.role, "Worked Smoothly", stats.done, stats.total)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-extrabold text-emerald-700 transition hover:bg-emerald-500/20 dark:bg-emerald-400/15 dark:text-emerald-300"
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                        {t.fbSmooth}
                      </a>
                      <a
                        href={buildReportLink(r.role, "Confusing Step", stats.done, stats.total)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-extrabold text-amber-700 transition hover:bg-amber-500/20 dark:bg-amber-400/15 dark:text-amber-300"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        {t.fbConfusing}
                      </a>
                      <a
                        href={buildReportLink(r.role, "Bug Report", stats.done, stats.total)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1.5 text-xs font-extrabold text-rose-700 transition hover:bg-rose-500/20 dark:bg-rose-400/15 dark:text-rose-300"
                      >
                        <Bug className="h-3.5 w-3.5" />
                        {t.fbBug}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* All Missions Complete Banner */}
      <AnimatePresence>
        {totalDone === totalTasks && totalTasks > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="rounded-3xl bg-gradient-sunset p-6 text-center text-white shadow-xl sm:p-8"
          >
            <Trophy className="mx-auto h-10 w-10" />
            <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
              {t.allDoneTitle}
            </h2>
            <p className="mx-auto mt-1 max-w-xl text-sm text-white/90 sm:text-base">
              {t.allDoneSub}
            </p>
            <a
              href={buildReportLink("All 3 Missions", "Completed Quest", totalDone, totalTasks)}
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-900 shadow-sm transition hover:bg-amber-50"
            >
              <Mail className="h-4 w-4" />
              {t.sendFinalBtn}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Support Footer Card */}
      <section className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8 dark:bg-slate-800/90">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-xl font-extrabold sm:text-2xl">{t.reportTitle}</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-300">{t.reportBody}</p>
          </div>
          <a
            href={buildReportLink("General", "Feedback", totalDone, totalTasks)}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {SUPPORT}
          </a>
        </div>
        <p className="mt-5 border-t border-white/10 pt-4 text-xs font-semibold text-slate-400">
          {t.thanks}
        </p>
      </section>
    </div>
  );
}
