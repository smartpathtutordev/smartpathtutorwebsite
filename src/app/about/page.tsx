"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  TrendingDown,
  BarChart3,
  BookOpen,
  GraduationCap,
  Heart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Lightbulb,
  Clock,
  Lock,
  Target,
  Rocket,
  Award,
  Landmark,
  UserCheck,
  PenTool,
  FlaskConical,
  Calculator,
  Palette,
} from "lucide-react";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Contact } from "@/components/site/contact";

const ease = [0.22, 1, 0.36, 1] as const;

// 3 Core Crisis Numbers — High visual punch
const STAT_HIGHLIGHTS = [
  {
    value: "91%",
    label: "Learning Poverty",
    caption: "Filipino 10-year-olds who cannot read a simple story",
    badge: "World Bank / EDCOM II",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  },
  {
    value: "#77",
    label: "Out of 81 Countries",
    caption: "Philippines ranking in international reading & math (PISA)",
    badge: "Global Assessment",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    value: "45+",
    label: "Kids Per Classroom",
    caption: "Teachers lack 1-on-1 diagnostic time for early reading",
    badge: "Classroom Overload",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
];

// Interactive Crisis Comparison Tabs
const CRISIS_TABS = [
  {
    id: "reading",
    label: "Reading & Phonics",
    stat: "91% Struggle",
    issue: "By age 10, 9 out of 10 Filipino kids cannot comprehend simple text.",
    impact: "Children cannot transition from 'learning to read' to 'reading to learn'.",
    fix: "10-minute daily audio trips with stroke-by-stroke phonics in English & Filipino.",
  },
  {
    id: "math",
    label: "Math & Numeracy",
    stat: "81% Below Target",
    issue: "Rote memorization causes early math anxiety and calculation confusion.",
    impact: "Word problems and multi-step reasoning become road blocks in Grade 3.",
    fix: "Visual Philippine real-world math: market stalls, jeepneys, and concrete shapes.",
  },
  {
    id: "family",
    label: "Home-School Gap",
    stat: "Nightly Frustration",
    issue: "Parents want to help but feel unsure about the new MATATAG curriculum.",
    impact: "Homework turns into tension; gaps go unnoticed until report card day.",
    fix: "Live parent app sync + Teacher Saje AI Coach gives gentle step-by-step guidance.",
  },
];

// Education Roadmap: Starting at 1-3, scaling to complete elementary
const ROADMAP_STEPS = [
  {
    phase: "Phase 1 · Now Live",
    title: "Grades 1 to 3 Foundations",
    badge: "Active",
    badgeColor: "bg-emerald-500 text-white",
    desc: "The critical make-or-break years. Daily guided lessons in Math, English, and Science with read-aloud voice, tracing, and live parent sync.",
    icon: Compass,
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
  },
  {
    phase: "Phase 2 · In Development",
    title: "Grades 4 to 6 Mastery",
    badge: "Roadmap",
    badgeColor: "bg-amber-500 text-white",
    desc: "Advancing to critical reading comprehension, applied mathematics, scientific inquiry, and preparation for high school entrance.",
    icon: Rocket,
    iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
  },
  {
    phase: "The Grand Goal",
    title: "Complete Primary Education",
    badge: "Vision",
    badgeColor: "bg-purple-600 text-white",
    desc: "A comprehensive digital learning companion covering the entire elementary journey for every Filipino family — accessible, joyful, and effective.",
    icon: GraduationCap,
    iconColor: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
  },
];

// 2 Co-Founders (Text/Role only, no pictures yet)
const CO_FOUNDERS = [
  {
    role: "Co-Founder & Chief Executive Officer",
    subtitle: "Vision, Product & Strategic Growth",
    focus:
      "Leading our mission to make high-impact foundational learning affordable and accessible to every Filipino family, driving national school partnerships, and scaling our learning ecosystem.",
  },
  {
    role: "Co-Founder & Chief Technology Officer",
    subtitle: "Learning Architecture & Systems Engineering",
    focus:
      "Directing learning architecture, real-time sync technology, and child-safe educational systems engineered for lightweight mobile performance across Philippine islands.",
  },
];

// 5 Content Creators below (Text/Role only, no pictures yet)
const CONTENT_CREATORS = [
  {
    role: "Phonics & Early Literacy Specialist",
    tag: "English & Filipino",
    icon: BookOpen,
    iconColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
    focus: "Curating bilingual phonics, decodable readers, sight words, and reading fluency aligned with DepEd MATATAG.",
  },
  {
    role: "Primary Mathematics & Numeracy Specialist",
    tag: "Grades 1–3 Math",
    icon: Calculator,
    iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    focus: "Crafting visual, concrete-to-pictorial math trips featuring Philippine market counting, shapes, and word problems.",
  },
  {
    role: "Early Science & Inquiry Learning Specialist",
    tag: "Grade 3 Science",
    icon: FlaskConical,
    iconColor: "bg-violet-500/10 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
    focus: "Designing interactive discovery labs exploring weather, living things, matter, and Philippine biodiversity.",
  },
  {
    role: "Children's Literature & Storytelling Writer",
    tag: "Stories & Culture",
    icon: PenTool,
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    focus: "Writing culturally attuned, values-rich stories and audio narrations that build reading joy and character.",
  },
  {
    role: "Interactive Learning & Activity Designer",
    tag: "UI / Gamified Drills",
    icon: Palette,
    iconColor: "bg-rose-500/10 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
    focus: "Designing stroke-by-stroke tracing drills, accessible coloring boards, and distraction-free visual interactions.",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>("reading");
  const selectedTab = CRISIS_TABS.find((t) => t.id === activeTab) || CRISIS_TABS[0];

  return (
    <>
      <SiteNav />
      <main className="flex-1 overflow-hidden">
        {/* =========================================================================
            HERO: THE WHY — PUNCHY, HIGH IMPACT, SCANNABLE
           ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-background to-background dark:from-slate-900/40" />
            <div className="absolute -top-32 right-1/4 h-[460px] w-[460px] rounded-full bg-rose-400/15 blur-3xl dark:bg-rose-500/10" />
            <div className="absolute top-40 -left-20 h-[380px] w-[380px] rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
          </div>

          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="text-center"
            >
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-rose-300/60 bg-rose-50 px-3.5 py-1 text-xs font-extrabold text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300">
                <AlertTriangle className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                The Reason Behind SmartPath
              </span>

              <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.025em] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                91% of Filipino kids struggle to read.
                <br />
                <span className="text-gradient-sunset">We are here to fix that.</span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-600 sm:text-lg dark:text-slate-300">
                Starting with the make-or-break foundation in <span className="font-bold text-slate-900 dark:text-white">Grades 1–3</span>, and expanding across the entire elementary journey.
              </p>
            </motion.div>

            {/* 3 High-Impact Stat Tiles */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {STAT_HIGHLIGHTS.map((s) => (
                <div
                  key={s.label}
                  className="card-premium relative overflow-hidden p-6 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${s.bg}`}>
                    {s.badge}
                  </span>
                  <div className={`mt-2 font-heading text-5xl font-black tracking-tight sm:text-6xl ${s.color}`}>
                    {s.value}
                  </div>
                  <div className="mt-1 font-heading text-base font-extrabold text-slate-900 dark:text-white">
                    {s.label}
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>

            {/* Visual 10-Child Infographic */}
            <div className="card-premium mt-8 p-6 sm:p-7">
              <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-900/5 pb-4 sm:flex-row dark:border-white/10">
                <div>
                  <h3 className="font-heading text-base font-extrabold text-slate-900 dark:text-white sm:text-lg">
                    The 9-out-of-10 Reality: Visualized
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    For every 10 Filipino children at age 10, only 1 reads at grade level on time.
                  </p>
                </div>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-black text-rose-700 dark:bg-rose-500/20 dark:text-rose-300">
                  91% Urgent Need
                </span>
              </div>

              {/* Visual Grid of 10 Learner Icons */}
              <div className="mt-6 grid grid-cols-5 gap-3 sm:grid-cols-10 sm:gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const isStruggling = num <= 9;
                  return (
                    <div
                      key={num}
                      className={`flex flex-col items-center rounded-xl p-3 text-center transition ${
                        isStruggling
                          ? "bg-rose-50/80 text-rose-600 ring-1 ring-rose-200/60 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/20"
                          : "bg-emerald-50 text-emerald-600 ring-2 ring-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-400"
                      }`}
                    >
                      <Users className="h-6 w-6" />
                      <span className="mt-1 text-[11px] font-black">
                        {isStruggling ? "Behind" : "On Track"}
                      </span>
                      <span className="text-[9px] opacity-70">Child #{num}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                <span>Source: World Bank, UNICEF &amp; EDCOM II National Education Commission</span>
                <span className="text-orange-600 dark:text-orange-400">Why early home practice is non-negotiable</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE CRISIS BREAKDOWN & HOW WE SOLVE IT
           ========================================================================= */}
        <section className="relative border-y border-slate-900/5 bg-slate-50/70 py-12 sm:py-16 dark:border-white/5 dark:bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <BarChart3 className="h-3.5 w-3.5 text-orange-500" />
                The Core Bottlenecks
              </span>
              <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-4xl dark:text-white">
                Where the system breaks. How SmartPath fixes it.
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CRISIS_TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition sm:text-sm ${
                      isActive
                        ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
                        : "border border-slate-900/10 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                        isActive
                          ? "bg-rose-500 text-white"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {tab.stat}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Clean 2-Column Comparison Card */}
            <div className="card-premium mt-6 grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
              {/* Problem Side */}
              <div className="rounded-2xl border border-rose-500/15 bg-rose-50/50 p-5 dark:border-rose-500/20 dark:bg-rose-500/5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-black text-rose-700 dark:bg-rose-500/20 dark:text-rose-300">
                  <TrendingDown className="h-3.5 w-3.5" />
                  The Problem
                </span>
                <h4 className="mt-3 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                  {selectedTab.issue}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {selectedTab.impact}
                </p>
              </div>

              {/* SmartPath Solution Side */}
              <div className="rounded-2xl border border-emerald-500/15 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  The SmartPath Solution
                </span>
                <h4 className="mt-3 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                  Built for the home &amp; classroom
                </h4>
                <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                  {selectedTab.fix}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: MISSION, VISION & THE FULL GRADE SCHOOL ROADMAP
           ========================================================================= */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                Our Vision &amp; Ambition
              </span>
              <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-4xl dark:text-white">
                Full education for Filipino grade schoolers.
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
                We are starting with <span className="font-bold text-slate-900 dark:text-white">Grades 1–3</span> because foundational gaps compound fastest here. Our ultimate mission is comprehensive, joyful education across all of grade school.
              </p>
            </div>

            {/* Vision & Mission Split Cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="card-premium relative overflow-hidden p-6 sm:p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-extrabold text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                  <Heart className="h-3.5 w-3.5" />
                  Our Mission
                </span>
                <h3 className="mt-3 font-heading text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                  Empower every Filipino home with world-class, stress-free digital tutoring.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Giving children daily bite-sized guidance, empowering parents with real-time homework coaching (Teacher Saje), and providing teachers with 100% free classroom connection tools.
                </p>
              </div>

              <div className="card-premium relative overflow-hidden p-6 sm:p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-extrabold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Our Vision
                </span>
                <h3 className="mt-3 font-heading text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                  Complete primary education where no Filipino child is left behind.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  From Kinder to Grade 6 graduation, we envision a future where every learner across the islands steps into high school confident in reading, fluent in math, and passionate about learning.
                </p>
              </div>
            </div>

            {/* Education Roadmap: 1-3 to Full Elementary */}
            <div className="mt-12">
              <h3 className="text-center font-heading text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                Our Elementary Education Roadmap
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {ROADMAP_STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="card-premium flex flex-col justify-between p-5 sm:p-6"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`grid h-10 w-10 place-items-center rounded-2xl ${step.iconColor}`}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        </div>
                        <span className="mt-4 block text-xs font-bold text-slate-400 dark:text-slate-500">
                          {step.phase}
                        </span>
                        <h4 className="mt-0.5 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: DICT STARTUP GRANT FUND RECOGNITION (PRESTIGIOUS BANNER)
           ========================================================================= */}
        <section className="relative border-t border-slate-900/5 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-purple-500/10 py-12 dark:border-white/5 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-purple-500/5">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="card-premium relative overflow-hidden border-2 border-orange-500/20 bg-white p-6 sm:p-8 dark:border-orange-500/25 dark:bg-slate-900">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-gradient-sunset text-white shadow-md shadow-orange-500/25">
                  <Award className="h-8 w-8" />
                </span>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-extrabold text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                    <Landmark className="h-3.5 w-3.5" />
                    Government Innovation Support
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                    Proud Recipient of the DICT Startup Grant Fund
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                    SmartPath Educational Technologies is a proud recipient of the <span className="font-extrabold text-slate-900 dark:text-white">Department of Information and Communications Technology (DICT) Startup Grant Fund</span>. This national grant program empowers promising Filipino startups to build scalable, high-impact technological solutions addressing the Philippines&apos; most urgent foundational education challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OUR TEAM (2 CO-FOUNDERS + 5 CONTENT CREATORS, NO PICTURES)
           ========================================================================= */}
        <section className="relative border-t border-slate-900/5 bg-slate-50/70 py-14 sm:py-20 dark:border-white/5 dark:bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <Users className="h-3.5 w-3.5 text-orange-500" />
                The Team Behind SmartPath
              </span>
              <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-4xl dark:text-white">
                Co-Founders &amp; Content Creation Team
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
                Driven by Filipino educational technologists, curriculum specialists, and creative educators.
              </p>
            </div>

            {/* Part A: 2 Co-Founders */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between border-b border-slate-900/5 pb-2 dark:border-white/10">
                <h3 className="font-heading text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Co-Founders
                </h3>
                <span className="rounded-full bg-slate-900/5 px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  Leadership
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {CO_FOUNDERS.map((cf) => (
                  <div
                    key={cf.role}
                    className="card-premium flex flex-col justify-between p-6 sm:p-7"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-400">
                          <UserCheck className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                            {cf.role}
                          </h4>
                          <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                            {cf.subtitle}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                        {cf.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Part B: 5 Content Creation Team Members below */}
            <div className="mt-12">
              <div className="mb-4 flex items-center justify-between border-b border-slate-900/5 pb-2 dark:border-white/10">
                <h3 className="font-heading text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Content Creation &amp; Learning Specialists
                </h3>
                <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                  5 Specialist Roles
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CONTENT_CREATORS.map((cc) => {
                  const Icon = cc.icon;
                  return (
                    <div
                      key={cc.role}
                      className="card-premium flex flex-col justify-between p-5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`grid h-9 w-9 place-items-center rounded-xl ${cc.iconColor}`}>
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span className="rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-extrabold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                            {cc.tag}
                          </span>
                        </div>
                        <h4 className="mt-3 font-heading text-sm font-extrabold text-slate-900 dark:text-white">
                          {cc.role}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {cc.focus}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust & Safety Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-900/10 bg-white px-6 py-4 text-xs font-bold text-slate-700 shadow-2xs dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Zero Ads &amp; Privacy First
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-orange-600" />
                DepEd MATATAG Aligned
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-purple-600" />
                No Open AI Chat for Kids
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: BOTTOM CALLOUT & GET STARTED
           ========================================================================= */}
        <section className="relative border-t border-slate-900/5 bg-slate-900 py-12 text-white sm:py-16 dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <h2 className="font-heading text-2xl font-extrabold sm:text-4xl">
              Give your child a confident start in school.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
              Try SmartPath at home for ₱399/mo, or connect your school classroom for free.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-started"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-900 transition hover:bg-amber-100"
              >
                Get Started Guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-extrabold text-white transition hover:bg-white/20"
              >
                View Plans &amp; Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Embedded Contact Component */}
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
