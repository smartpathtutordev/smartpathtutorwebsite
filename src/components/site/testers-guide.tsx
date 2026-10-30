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
  Smartphone,
  Volume2,
  Eye,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Cpu,
} from "lucide-react";

type Lang = "en" | "tl";
type RoleFilter = "all" | "parent" | "child" | "teacher";
type UatCategoryFilter = "all" | "device" | "kid" | "workflow" | "polish";

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
    uat: {
      badge: "UAT Pilot Briefing · Oct 30, 2026",
      title: "Why Automated Tests Aren't Enough:",
      titleAccent: "The Need for Human UAT",
      lead:
        "Our automated test suites passed 1,440+ checks today — from clean database migrations to strict security scans. But software code cannot feel touch latency on an entry-level phone, hear voice clarity, or watch a 6-year-old learn. Here is why real testers are indispensable.",
      stats: [
        {
          value: "1,440+",
          label: "Automated Tests Passed",
          sub: "Units, widgets & API contracts",
          color: "text-emerald-600 dark:text-emerald-400",
          border: "border-emerald-500/20 bg-emerald-500/5",
        },
        {
          value: "33 / 33",
          label: "SQL Suites Verified",
          sub: "Migrations 001–160 on clean DB",
          color: "text-sky-600 dark:text-sky-400",
          border: "border-sky-500/20 bg-sky-500/5",
        },
        {
          value: "52 / 52",
          label: "Security Checks (0 Findings)",
          sub: "TLS 1.2+, permissions & RLS",
          color: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-500/20 bg-indigo-500/5",
        },
        {
          value: "28 Tasks",
          label: "Need Real People (RED)",
          sub: "17 checklist items + 11 release changes",
          color: "text-rose-600 dark:text-rose-400",
          border: "border-rose-500/20 bg-rose-500/5 ring-1 ring-rose-500/30",
        },
      ],
      pillarsTitle: "The 4 Core Reasons We Need Real People (What Code Cannot Test)",
      pillars: [
        {
          icon: Smartphone,
          title: "Real Phones & Touch Ergonomics",
          tag: "Physical Reality",
          badgeColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
          desc:
            "Laptops and browser emulators don't match real touchscreens. We need physical iPhones, budget Android phones, and school tablets to test automatic sideways screen rotation on upright phones, 40px+ tap targets, zero tap lag, and fullscreen Watch mode.",
        },
        {
          icon: Volume2,
          title: "Child Learnability & Voice Clarity",
          tag: "Pedagogical Reality",
          badgeColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
          desc:
            "Code cannot tell if a 6-year-old Grade 1 child gets confused, loses interest, or can't follow a voice prompt. Real children must test whether Tagalog and English read-aloud voice clips sound natural, and whether lesson visuals clearly convey concepts.",
        },
        {
          icon: Users,
          title: "Live Production Workflows",
          tag: "Operational Reality",
          badgeColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
          desc:
            "Automated test scripts cannot test real user email inboxes without generating spam. Real parents and teachers must verify inbox email confirmations, session persistence, teacher class code handshakes, and live partial progress updates ('2 of 6 answered').",
        },
        {
          icon: Eye,
          title: "Emotional Delight & UX Polish",
          tag: "Human Empathy",
          badgeColor: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
          desc:
            "Only human eyes can identify subtle friction: ambiguous loading states, awkward pacing, or hesitation. We need to observe real families to see where learners feel confident and excited versus where they hesitate or require help.",
        },
      ],
      matrixHeader: "The Human Verification Matrix",
      matrixSub:
        "Based on our October 30, 2026 UAT audit (58 checklist items + 16 release changes), here is the exact breakdown of tasks that require human hands and judgment:",
      btnShow: "View Full Human Verification Matrix (28 Tasks)",
      btnHide: "Hide Human Verification Matrix",
      filterAll: "All (28)",
      filterDevice: "Real Phones & Touch (6)",
      filterKid: "Kids & Lessons (8)",
      filterWorkflow: "Accounts & Sync (8)",
      filterPolish: "Design & UX (6)",
      items: [
        {
          id: "UAT-42A",
          ref: "F-11 · ID 42",
          cat: "device" as const,
          title: "Lesson Fills Sideways Phone",
          who: "Real iPhone / Android",
          status: "Needs Physical Phone",
          desc: "Hold phone horizontally: verify lesson fills the display (compact header, buttons over picture; frame 615x346 vs old 302x170 box).",
        },
        {
          id: "UAT-42B",
          ref: "F-12 · ID 42",
          cat: "device" as const,
          title: "Upright Phone Auto-Orientation",
          who: "Real iPhone / Android",
          status: "Needs Physical Phone",
          desc: "Hold phone upright: lesson automatically turns sideways to fill screen; verify taps land accurately where fingers press.",
        },
        {
          id: "UAT-42C",
          ref: "F-13 · DEF-029",
          cat: "device" as const,
          title: "Instant Touch Feedback & Targets",
          who: "Real Touchscreen",
          status: "Needs Physical Device",
          desc: "Tap Next, Play, and Back buttons: verify instant press feedback, no 300ms tap lag, and all tap targets measure >= 40px.",
        },
        {
          id: "UAT-14",
          ref: "F-14",
          cat: "device" as const,
          title: "Watch Mode on Physical Phones",
          who: "Android & iPhone",
          status: "Needs Physical Device",
          desc: "Test Watch mode: whole lesson plays with hidden controls; Android enters fullscreen landscape, iPhone hides browser chrome; 'X' exits cleanly.",
        },
        {
          id: "UAT-44",
          ref: "ID 44",
          cat: "device" as const,
          title: "Budget Android Phones & Tablets",
          who: "Low-End Hardware",
          status: "Needs Approved Hardware",
          desc: "Test on entry-level Android phones and school tablets: verify smooth animations, quick audio playback, and zero crashes.",
        },
        {
          id: "UAT-45",
          ref: "ID 45",
          cat: "device" as const,
          title: "Microphone & Camera Permissions",
          who: "Physical Device",
          status: "Needs Real Hardware",
          desc: "Test reading check microphone input and camera prompt on a physical device, including graceful fallback when permission is denied.",
        },
        {
          id: "UAT-16",
          ref: "ID 16 & 22",
          cat: "kid" as const,
          title: "First-Time Learner Autonomy",
          who: "Grade 1–3 Child",
          status: "Needs Child Pilot",
          desc: "Let a young learner try Today's Trip unaided: verify they understand avatar login, step through activities, and complete lessons with minimal help.",
        },
        {
          id: "UAT-17",
          ref: "ID 17 & F-08",
          cat: "kid" as const,
          title: "Voice Clarity (English & Tagalog)",
          who: "Child & Parent Reviewer",
          status: "Needs Human Listening",
          desc: "Play Math G1 W1 and Science G3 W1 audio: confirm read-aloud voice clips sound clear, warm, correctly pronounced, and easy to understand.",
        },
        {
          id: "UAT-09",
          ref: "F-09",
          cat: "kid" as const,
          title: "Visual Meaning & Lesson Engagement",
          who: "Content Reviewer",
          status: "Needs Educational Review",
          desc: "Check lesson illustrations and animations in Science G3 Q1 W1: verify visuals support the lesson concept and don't confuse the learner.",
        },
        {
          id: "UAT-03",
          ref: "F-03 · DEF-024",
          cat: "kid" as const,
          title: "Module Completion Criteria",
          who: "Learner Journey",
          status: "Needs Real Run",
          desc: "Confirm module only marks 'Finished' when watched for 80%+ of slides; skipping to the end leaves it at 10–11% unfinished.",
        },
        {
          id: "UAT-02",
          ref: "F-02 · DEF-027",
          cat: "kid" as const,
          title: "Science Question Variant Rotation",
          who: "Learner Retry",
          status: "Needs Real Retries",
          desc: "Verify 1 question per level (6 total) and each retry rotates to the next variant (x.1 -> x.2 -> x.3) with its matching voice clip.",
        },
        {
          id: "UAT-06",
          ref: "F-06",
          cat: "kid" as const,
          title: "Multi-Grade Direct Navigation",
          who: "Signed-in Child",
          status: "Needs Child Account",
          desc: "Child taps All Lessons -> Grade 1 -> Math -> Day 1 opens directly without unintentionally changing Today's assigned trip.",
        },
        {
          id: "UAT-07",
          ref: "F-07 · DEF-032",
          cat: "kid" as const,
          title: "Uploaded Content Filtering",
          who: "Grade 3 Child",
          status: "Needs Child Account",
          desc: "Grade 3 child sees no empty Math card on Today; All Lessons Grade 1 Math lists only uploaded Days 1–4 cleanly.",
        },
        {
          id: "UAT-18",
          ref: "ID 18 & 23",
          cat: "kid" as const,
          title: "Navigation Predictability for Kids",
          who: "Observed Pilot Child",
          status: "Needs Observation",
          desc: "Child can predict where buttons lead, knows where they are, and returns to prior screens using large back buttons without frustration.",
        },
        {
          id: "UAT-05",
          ref: "ID 5 & 26",
          cat: "workflow" as const,
          title: "Production Signup & Email Delivery",
          who: "Parent / Owner",
          status: "Needs Real Inbox",
          desc: "Sign up with a real email on production; verify the confirmation email arrives in your inbox (Resend SMTP) and link activates account.",
        },
        {
          id: "UAT-10",
          ref: "ID 10",
          cat: "workflow" as const,
          title: "Session Persistence Across Restarts",
          who: "Owner / Parent",
          status: "Needs Real Account",
          desc: "Sign in on production, browse across screens, close the browser tab, and reopen: confirm the session holds without unintended logout.",
        },
        {
          id: "UAT-F04",
          ref: "F-04 · DEF-025",
          cat: "workflow" as const,
          title: "Unfinished Assessment Reporting",
          who: "Parent Weekly Report",
          status: "Needs Migration 157",
          desc: "Child answers 2 of 6 questions: verify the parent weekly report displays '2 of 6 answered — X right' instead of showing blank.",
        },
        {
          id: "UAT-F05",
          ref: "F-05 · DEF-026",
          cat: "workflow" as const,
          title: "Partial Progress Meter",
          who: "Tutor & Parent App",
          status: "Needs Migration 158",
          desc: "Child watches half a module and answers 2 questions: Today's progress bar moves above 0% and lesson displays 'Watched 40%' / '2 of 6 answered'.",
        },
        {
          id: "UAT-PAY",
          ref: "ID 5 & 14",
          cat: "workflow" as const,
          title: "Test Plan Activation & Instant Unlock",
          who: "Parent Tester",
          status: "Needs Test Pass",
          desc: "Parent completes test payment: plan unlocks immediately, Subscribe banner vanishes, and child learning path activates.",
        },
        {
          id: "UAT-GGL",
          ref: "ID 26",
          cat: "workflow" as const,
          title: "Google Sign-In Token Exchange",
          who: "Owner / Tester",
          status: "Needs Client Secret",
          desc: "Retest Google Sign-in on production once Supabase client secret is configured; confirm OAuth exchange redirects cleanly into app.",
        },
        {
          id: "UAT-TCH",
          ref: "ID 5 & 14",
          cat: "workflow" as const,
          title: "Teacher Class Code Handshake",
          who: "Teacher + Parent Pair",
          status: "Needs 2 Accounts",
          desc: "Teacher generates 1-time class code; Parent submits code; Teacher dashboard immediately displays pending request and approves.",
        },
        {
          id: "UAT-F16",
          ref: "F-16",
          cat: "workflow" as const,
          title: "Production Migration Verification",
          who: "Owner",
          status: "Needs Production Run",
          desc: "Owner executes migration 160 in Supabase production and reports result rows (157 'applied 157', 158 'applied 158', 159 linked=16, 160 0/16/32).",
        },
        {
          id: "UAT-19",
          ref: "ID 19",
          cat: "polish" as const,
          title: "Loading States & Action Feedback",
          who: "QA / Design Reviewer",
          status: "Needs Human Review",
          desc: "Inspect loading spinners, submission feedback, and error messages across all screens to ensure users never face unexplained pauses.",
        },
        {
          id: "UAT-20",
          ref: "ID 20",
          cat: "polish" as const,
          title: "Cross-App Design Consistency",
          who: "Design Reviewer",
          status: "Needs Human Eye",
          desc: "Audit typography, colors, spacing, and buttons across Parent, Child, Teacher, and Admin apps for unified platform consistency.",
        },
        {
          id: "UAT-24",
          ref: "ID 24 & 25",
          cat: "polish" as const,
          title: "Pilot User Satisfaction & Frustration",
          who: "Observed Pilot Sessions",
          status: "Needs Observation",
          desc: "Document moments of hesitation, confusion, or joy during pilot testing to capture qualitative feedback before public launch.",
        },
        {
          id: "UAT-40",
          ref: "ID 40 & 41",
          cat: "polish" as const,
          title: "Cross-OS Platform Verification",
          who: "QA on Windows / Linux",
          status: "Needs Other OS",
          desc: "Run core browser flows on Windows and Linux machines across Chrome, Firefox, and Edge to confirm results match macOS baselines.",
        },
        {
          id: "UAT-46",
          ref: "ID 46 & 47",
          cat: "polish" as const,
          title: "Offline PWA & Slow Network Feel",
          who: "Mobile Tester",
          status: "Needs Real Network Off",
          desc: "Turn off Wi-Fi/mobile data: apps reopen in ~1s from offline service worker; verify no stale caching of sensitive payment data.",
        },
        {
          id: "UAT-11",
          ref: "ID 11 · DEF-003",
          cat: "polish" as const,
          title: "Admin 30-Minute Idle Sign-Out",
          who: "Admin Reviewer",
          status: "Needs Live Check",
          desc: "Leave Admin console idle for 30 minutes wall clock: verify first click signs out cleanly to protect payments and student data.",
        },
      ],
    },
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
    uat: {
      badge: "UAT Pilot Briefing · Okt 30, 2026",
      title: "Bakit Hindi Sapat ang Automated Tests:",
      titleAccent: "Ang Halaga ng Human UAT",
      lead:
        "Pumasa ang 1,440+ awtomatikong pagsusuri kanina — mula sa malinis na database migrations hanggang sa mahigpit na security scans. Ngunit hindi kayang maramdaman ng computer ang hawak ng bata sa telepono, ang linaw ng boses, o ang ngiti ng 6-taong-gulang na natututo. Narito kung bakit kailangan namin kayo.",
      stats: [
        {
          value: "1,440+",
          label: "Pumasang Automated Tests",
          sub: "Unit, widget at API contract tests",
          color: "text-emerald-600 dark:text-emerald-400",
          border: "border-emerald-500/20 bg-emerald-500/5",
        },
        {
          value: "33 / 33",
          label: "SQL Suites na Na-verify",
          sub: "Migrations 001–160 malinis",
          color: "text-sky-600 dark:text-sky-400",
          border: "border-sky-500/20 bg-sky-500/5",
        },
        {
          value: "52 / 52",
          label: "Security Checks (0 Findings)",
          sub: "TLS 1.2+, permissions & RLS",
          color: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-500/20 bg-indigo-500/5",
        },
        {
          value: "28 Gawain",
          label: "Kailangan ng Tao (RED)",
          sub: "17 checklist items + 11 bagong feature",
          color: "text-rose-600 dark:text-rose-400",
          border: "border-rose-500/20 bg-rose-500/5 ring-1 ring-rose-500/30",
        },
      ],
      pillarsTitle: "Ang 4 na Haligi ng Human UAT (Hindi Kayang Subukan ng Computer)",
      pillars: [
        {
          icon: Smartphone,
          title: "Mga Totoong Telepono at Touch Ergonomics",
          tag: "Pisikal na Realidad",
          badgeColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
          desc:
            "Iba ang pakiramdam ng tunay na touchscreen sa computer emulator. Kailangan ng totoong iPhone, murang Android phone, at school tablet para masubukan ang awtomatikong pag-ikot ng aralin sa patayong phone, 40px+ buttons, at Watch mode.",
        },
        {
          icon: Volume2,
          title: "Karanasan ng Bata at Linaw ng Boses",
          tag: "Edukasyonal na Realidad",
          badgeColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
          desc:
            "Hindi alam ng code kung nalilito o naiinip ang batang Grade 1. Kailangan ng totoong bata para subukan kung malinaw at nakakahikayat ang boses sa Tagalog at Ingles, at kung madaling intindihin ang mga aralin sa Math at Science.",
        },
        {
          icon: Users,
          title: "Totoong Account at Proseso ng Pamilya",
          tag: "Operasyonal na Realidad",
          badgeColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
          desc:
            "Hindi kayang subukan ng automated scripts ang totoong email inboxes nang walang spam. Kailangan ng totoong magulang at guro para suriin ang confirmation email, pananatiling naka-sign in, class code, at live progress ('2 of 6 answered').",
        },
        {
          icon: Eye,
          title: "Kaginhawahan at Emosyon ng Gumagamit",
          tag: "Disenyo at Empathy",
          badgeColor: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
          desc:
            "Tao lamang ang makakapansin sa maliliit na aberya: nakakalitong loading screen, biglaang paghinto, o pag-aalinlangan. Nais naming malaman kung saan natutuwa ang bata at kung saan sila nangangailangan ng tulong.",
        },
      ],
      matrixHeader: "Talaan ng Susuriin ng Tao (Human Verification Matrix)",
      matrixSub:
        "Batay sa aming UAT audit ngayong Oktubre 30, 2026 (58 checklist items + 16 release changes), narito ang mga gawaing nangangailangan ng inyong mga kamay at pagsusuri:",
      btnShow: "Ipakita ang Buong Talaan ng Susuriin (28 Gawain)",
      btnHide: "Itago ang Talaan ng Susuriin",
      filterAll: "Lahat (28)",
      filterDevice: "Telepono at Touch (6)",
      filterKid: "Bata at Aralin (8)",
      filterWorkflow: "Account at Sync (8)",
      filterPolish: "Disenyo at UX (6)",
      items: [
        {
          id: "UAT-42A",
          ref: "F-11 · ID 42",
          cat: "device" as const,
          title: "Pahalang na Aralin sa Telepono",
          who: "Totoong iPhone / Android",
          status: "Kailangan ng Telepono",
          desc: "Hawakan ang telepono nang pahalang: tiyaking sakop ng aralin ang buong screen (compact header, buttons sa ibabaw ng picture; frame 615x346 kumpara sa lumang 302x170).",
        },
        {
          id: "UAT-42B",
          ref: "F-12 · ID 42",
          cat: "device" as const,
          title: "Awtomatikong Pag-ikot sa Patayong Phone",
          who: "Totoong iPhone / Android",
          status: "Kailangan ng Telepono",
          desc: "Hawakan ang phone nang patayo: awtomatikong liliko nang pahalang ang aralin upang punan ang screen; tiyaking tama ang rehistro ng bawat pindot.",
        },
        {
          id: "UAT-42C",
          ref: "F-13 · DEF-029",
          cat: "device" as const,
          title: "Mabilis na Touch Feedback at Buttons",
          who: "Totoong Touchscreen",
          status: "Kailangan ng Device",
          desc: "Pindutin ang Next, Play, at Back: tiyaking agad sumasagot ang pindutan nang walang delay, at may sukat na hindi bababa sa 40px.",
        },
        {
          id: "UAT-14",
          ref: "F-14",
          cat: "device" as const,
          title: "Watch Mode sa Telepono",
          who: "Android at iPhone",
          status: "Kailangan ng Device",
          desc: "Subukan ang Watch mode: tuloy-tuloy na tumutugtog ang aralin nang nakatago ang controls; fullscreen sa Android at tago ang browser chrome sa iPhone; 'X' para lumabas.",
        },
        {
          id: "UAT-44",
          ref: "ID 44",
          cat: "device" as const,
          title: "Murang Android Phone at School Tablets",
          who: "Aprubadong Hardware",
          status: "Kailangan ng Hardware",
          desc: "Subukan sa mga entry-level na Android phone at DepEd school tablet: tiyaking maayos ang animation at hindi nagka-crash.",
        },
        {
          id: "UAT-45",
          ref: "ID 45",
          cat: "device" as const,
          title: "Permiso sa Mikropono at Kamera",
          who: "Totoong Device",
          status: "Kailangan ng Sensor",
          desc: "Subukan ang mikropono (reading check) at kamera sa telepono, pati na ang maayos na abiso kapag tinanggihan ang permiso.",
        },
        {
          id: "UAT-16",
          ref: "ID 16 & 22",
          cat: "kid" as const,
          title: "Malayang Paggamit ng Batang Mag-aaral",
          who: "Batang Grade 1–3",
          status: "Kailangan ng Bata",
          desc: "Hayaang subukan ng bata ang Today's Trip nang walang tulong ng matanda: tiyaking madali nilang naintindihan ang pag-tap sa avatar at pagsagot sa aralin.",
        },
        {
          id: "UAT-17",
          ref: "ID 17 & F-08",
          cat: "kid" as const,
          title: "Linaw ng Boses (Ingles at Tagalog)",
          who: "Bata at Magulang",
          status: "Kailangan Pakinggan",
          desc: "Pakinggan ang audio sa Math G1 W1 at Science G3 W1: tiyaking malinaw, magiliw, tama ang bigkas, at tumutugma sa nakasulat sa screen.",
        },
        {
          id: "UAT-09",
          ref: "F-09",
          cat: "kid" as const,
          title: "Kalinawan ng Larawan at Aralin",
          who: "Content Reviewer",
          status: "Edukasyonal na Pagsusuri",
          desc: "Suriin ang mga drowing at animation sa Science G3 Q1 W1: tiyaking malinaw ang itinuturong konsepto at hindi nakakalito sa bata.",
        },
        {
          id: "UAT-03",
          ref: "F-03 · DEF-024",
          cat: "kid" as const,
          title: "Pamantayan sa Pagtatapos ng Aralin",
          who: "Pagsusuri sa Aralin",
          status: "Kailangan Subukan",
          desc: "Tiyaking magiging 'Finished' lamang ang module kung napanood ang 80%+ ng slides; kung lilaktawan hanggang dulo, mananatili itong 10–11% unfinished.",
        },
        {
          id: "UAT-02",
          ref: "F-02 · DEF-027",
          cat: "kid" as const,
          title: "Pagpapalit ng Tanong sa Science",
          who: "Pag-ulit ng Pagsusulit",
          status: "Kailangan Subukan",
          desc: "Tiyaking 1 tanong bawat level (6 kabuuan) at sa bawat pag-ulit ay bagong bersyon ang lalabas (x.1 -> x.2 -> x.3) kasabay ang tamang audio.",
        },
        {
          id: "UAT-06",
          ref: "F-06",
          cat: "kid" as const,
          title: "Direktang Pagbubukas ng Ibang Baitang",
          who: "Naka-sign in na Bata",
          status: "Kailangan ng Bata",
          desc: "I-tap ang All Lessons -> Grade 1 -> Math -> Day 1 nang hindi nababago ang itinakdang biyahe sa Today tab.",
        },
        {
          id: "UAT-07",
          ref: "F-07 · DEF-032",
          cat: "kid" as const,
          title: "Tamang Pagpapakita ng Aralin",
          who: "Batang Grade 3",
          status: "Kailangan ng Bata",
          desc: "Walang bakanteng Math card sa Today para sa Grade 3; tanging Days 1–4 lamang ang nakalista sa Grade 1 Math.",
        },
        {
          id: "UAT-18",
          ref: "ID 18 & 23",
          cat: "kid" as const,
          title: "Madaling Pag-navigate ng Bata",
          who: "Pilot na Bata",
          status: "Kailangan Obserbahan",
          desc: "Alam ng bata kung saan patungo ang bawat pindutan, alam kung nasaan sila, at madaling nakakabalik gamit ang malaking back button.",
        },
        {
          id: "UAT-05",
          ref: "ID 5 & 26",
          cat: "workflow" as const,
          title: "Paggawa ng Account at Confirmation Email",
          who: "Magulang / May-ari",
          status: "Kailangan ng Email",
          desc: "Gumawa ng account sa production; tiyaking dumarating ang confirmation email sa iyong inbox (Resend SMTP) at nabubuksan ang account.",
        },
        {
          id: "UAT-10",
          ref: "ID 10",
          cat: "workflow" as const,
          title: "Pananatiling Naka-sign in",
          who: "Magulang / May-ari",
          status: "Kailangan ng Account",
          desc: "Mag-sign in sa production, lumipat ng pahina, i-refresh ang browser, o muling buksan ang tab: tiyaking naka-sign in pa rin.",
        },
        {
          id: "UAT-F04",
          ref: "F-04 · DEF-025",
          cat: "workflow" as const,
          title: "Ulat ng Hindi Tapos na Pagsusulit",
          who: "Weekly Report ng Magulang",
          status: "Kailangan ng Mig 157",
          desc: "Sumagot ng 2 sa 6 na tanong: tiyaking malinaw na ipinapakita sa ulat ng magulang ang '2 of 6 answered — X right' sa halip na blangko.",
        },
        {
          id: "UAT-F05",
          ref: "F-05 · DEF-026",
          cat: "workflow" as const,
          title: "Bahagyang Progreso ng Aralin",
          who: "Tutor at Parent App",
          status: "Kailangan ng Mig 158",
          desc: "Panoorin ang kalahati ng module at sagutan ang 2 tanong: aangat sa 0% ang Today's progress at makikita ang 'Watched 40%' / '2 of 6 answered'.",
        },
        {
          id: "UAT-PAY",
          ref: "ID 5 & 14",
          cat: "workflow" as const,
          title: "Agad na Pagbubukas ng Test Plan",
          who: "Parent Tester",
          status: "Kailangan ng Test Pass",
          desc: "Piliin ang plan gamit ang Test Payment Pass: agad bubukas ang serbisyo nang walang totoong bayad at mawawala ang Subscribe banner.",
        },
        {
          id: "UAT-GGL",
          ref: "ID 26",
          cat: "workflow" as const,
          title: "Pagsusuri sa Google Sign-In",
          who: "May-ari / Tester",
          status: "Kailangan ng Client Secret",
          desc: "Subukan muli ang Google Sign-In sa production kapag na-save na ang client secret sa Supabase; tiyaking diretso itong pumapasok sa app.",
        },
        {
          id: "UAT-TCH",
          ref: "ID 5 & 14",
          cat: "workflow" as const,
          title: "Pag-apruba sa Class Code ng Guro",
          who: "Guro at Magulang",
          status: "Kailangan ng 2 Account",
          desc: "Gagawa ng class code ang guro; ilalagay ito ng magulang; agad lalabas sa dashboard ng guro ang hiling para maaprubahan.",
        },
        {
          id: "UAT-F16",
          ref: "F-16",
          cat: "workflow" as const,
          title: "Kumpirmasyon ng Database Migrations",
          who: "May-ari",
          status: "Kailangan sa Production",
          desc: "Patakbuhin ang migration 160 sa production database at kumpirmahin ang resulta (157 'applied 157', 158 'applied 158', 159 linked=16, 160 0/16/32).",
        },
        {
          id: "UAT-19",
          ref: "ID 19",
          cat: "polish" as const,
          title: "Malinaw na Feedback sa Loading",
          who: "QA / Design Reviewer",
          status: "Kailangan Suriin",
          desc: "Suriin ang mga loading spinner at abiso sa bawat pagpindot upang matiyak na hindi naghihintay ang user nang walang paliwanag.",
        },
        {
          id: "UAT-20",
          ref: "ID 20",
          cat: "polish" as const,
          title: "Pagkakapare-pareho ng Disenyo",
          who: "Design Reviewer",
          status: "Kailangan ng Mapanuring Mata",
          desc: "Suriin ang kulay, font, agwat, at pindutan sa Parent, Child, Teacher, at Admin apps upang matiyak ang pare-parehong kalidad.",
        },
        {
          id: "UAT-24",
          ref: "ID 24 & 25",
          cat: "polish" as const,
          title: "Kasiyahan at Hirap ng User",
          who: "Observed Pilot Sessions",
          status: "Kailangan Obserbahan",
          desc: "Itala ang mga sandali ng pag-aalinlangan, kalituhan, o katuwaan ng mga pamilya upang mapaganda pa bago ang pampublikong paglabas.",
        },
        {
          id: "UAT-40",
          ref: "ID 40 & 41",
          cat: "polish" as const,
          title: "Pagsusuri sa Ibang Operating System",
          who: "QA sa Windows / Linux",
          status: "Kailangan ng Ibang OS",
          desc: "Buksan ang mga app sa Windows at Linux sa Chrome, Firefox, at Edge upang matiyak na kasing-ayos ito ng sa macOS.",
        },
        {
          id: "UAT-46",
          ref: "ID 46 & 47",
          cat: "polish" as const,
          title: "Paggamit Nang Walang Internet (Offline)",
          who: "Mobile Tester",
          status: "Patayin ang Network",
          desc: "Patayin ang Wi-Fi o mobile data: bumubukas pa rin ang app sa loob ng 1 segundo mula sa offline cache nang walang naiiwang sensitibong datos.",
        },
        {
          id: "UAT-11",
          ref: "ID 11 · DEF-003",
          cat: "polish" as const,
          title: "Auto Sign-Out sa Admin Matapos ang 30 Minuto",
          who: "Admin Reviewer",
          status: "Kailangan Subukan",
          desc: "Hayaang nakatiwangwang ang Admin app nang 30 minuto: tiyaking awtomatiko itong magsa-sign out sa unang pindot upang protektahan ang datos.",
        },
      ],
    },
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
  const [showUatDetails, setShowUatDetails] = useState(false);
  const [uatFilter, setUatFilter] = useState<UatCategoryFilter>("all");

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

  const visibleUatItems =
    uatFilter === "all"
      ? t.uat.items
      : t.uat.items.filter((item) => (item.cat as string) === uatFilter);
  const uatItemsDone = t.uat.items.filter((item) => checked[item.id]).length;
  const uatItemsTotal = t.uat.items.length;

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

      {/* The Need for Human UAT Section */}
      <section className="card-premium relative overflow-hidden border-orange-500/20 bg-gradient-to-b from-orange-500/[0.04] via-transparent to-transparent p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="eyebrow">
            <Cpu className="h-3.5 w-3.5 text-orange-500" />
            {t.uat.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-extrabold text-rose-600 dark:bg-rose-400/15 dark:text-rose-300">
            <AlertTriangle className="h-3.5 w-3.5" />
            {t.uat.stats[3].value} {t.uat.stats[3].label}
          </span>
        </div>

        <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {t.uat.title} <span className="text-gradient-sunset">{t.uat.titleAccent}</span>
        </h2>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          {t.uat.lead}
        </p>

        {/* Audit Stats Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {t.uat.stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl border p-4 transition ${s.border}`}
            >
              <p className={`font-heading text-2xl font-extrabold sm:text-3xl ${s.color}`}>
                {s.value}
              </p>
              <p className="mt-1 text-xs font-extrabold text-slate-900 dark:text-white">
                {s.label}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Human Testing */}
        <div className="mt-8">
          <h3 className="font-heading text-lg font-extrabold text-slate-900 dark:text-white">
            {t.uat.pillarsTitle}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {t.uat.pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-900/8 bg-white/70 p-5 shadow-xs backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ${p.badgeColor}`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="mt-3 font-heading text-base font-extrabold text-slate-900 dark:text-white">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expandable Human Verification Matrix */}
        <div className="mt-8 rounded-2xl border border-slate-900/10 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-800/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                  {t.uat.matrixHeader}
                </h3>
                <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-extrabold text-rose-600 dark:bg-rose-400/15 dark:text-rose-300">
                  {uatItemsDone}/{uatItemsTotal} Verified
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {t.uat.matrixSub}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowUatDetails((prev) => !prev)}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-900/15 bg-white px-4 text-xs font-extrabold text-slate-800 transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              {showUatDetails ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  {t.uat.btnHide}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  {t.uat.btnShow}
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {showUatDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-5 space-y-4 overflow-hidden border-t border-slate-900/10 pt-4 dark:border-white/10"
              >
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { key: "all" as const, label: t.uat.filterAll },
                    { key: "device" as const, label: t.uat.filterDevice },
                    { key: "kid" as const, label: t.uat.filterKid },
                    { key: "workflow" as const, label: t.uat.filterWorkflow },
                    { key: "polish" as const, label: t.uat.filterPolish },
                  ].map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setUatFilter(f.key)}
                      className={`rounded-full px-3 py-1 text-xs font-extrabold transition ${
                        uatFilter === f.key
                          ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
                          : "bg-white text-slate-600 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Matrix Tasks Grid */}
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {visibleUatItems.map((item) => {
                    const isChecked = !!checked[item.id];
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition ${
                          isChecked
                            ? "border-emerald-500/30 bg-emerald-500/5 line-through opacity-75 dark:border-emerald-400/20 dark:bg-emerald-500/10"
                            : "border-slate-900/10 bg-white hover:border-orange-500/40 dark:border-white/10 dark:bg-slate-900/70"
                        }`}
                      >
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                            isChecked
                              ? "bg-emerald-500 text-white"
                              : "border border-slate-300 text-transparent dark:border-slate-600"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <span className="font-heading text-xs font-extrabold text-slate-900 dark:text-white">
                              {item.title}
                            </span>
                            <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-extrabold text-rose-700 dark:bg-rose-400/15 dark:text-rose-300">
                              {item.who}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                            {item.desc}
                          </p>
                          <span className="mt-1.5 inline-block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                            Ref: {item.ref}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

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
