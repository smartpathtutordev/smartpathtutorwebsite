"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  TrendingDown,
  BookOpen,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Lightbulb,
  Clock,
  Rocket,
  Award,
  Landmark,
  PenTool,
  FlaskConical,
  Calculator,
  Palette,
  Newspaper,
  ExternalLink,
  Volume2,
  Smile,
  Shield,
} from "lucide-react";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Contact } from "@/components/site/contact";

const ease = [0.22, 1, 0.36, 1] as const;

// 3 Big Visual Numbers — instant scannability for parents
const CRISIS_STATS = [
  {
    value: "1 in 3",
    label: "Struggle with Reading",
    caption: "Grades 1–3 pupils classified as 'low-emerging readers' (DepEd CRLA)",
    badge: "EDCOM II / GMA News",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  },
  {
    value: "91%",
    label: "Fall Behind by Age 10",
    caption: "Filipino 10-year-olds who cannot read a simple story without early help",
    badge: "World Bank / UNICEF",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    value: "10 mins",
    label: "Daily Fix at Home",
    caption: "Bite-sized, stress-free audio practice to catch up and stay ahead",
    badge: "The SmartPath Way",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
];

// The 3 Children: Visceral, relatable reality for parents
const THREE_CHILDREN = [
  {
    character: "/assets/characters/bunso_idle.png",
    name: "Child #1: The Silent Struggler",
    statusBadge: "1 in 3 Kids · Needs Early Intervention",
    badgeClass: "bg-rose-500 text-white",
    cardBorder: "border-rose-500/30 bg-rose-50/60 dark:bg-rose-500/10",
    pain: "Guesses words from pictures. Confuses letter sounds (like 'b' and 'd'). Hides when asked to read aloud in class.",
    smartpathSolution: "Stroke-by-stroke phonics with Tala reading aloud patiently until it clicks. Zero shame.",
  },
  {
    character: "/assets/characters/ate_idle.png",
    name: "Child #2: The Slow Sounder",
    statusBadge: "Needs Daily Guided Practice",
    badgeClass: "bg-amber-500 text-white",
    cardBorder: "border-amber-500/30 bg-amber-50/60 dark:bg-amber-500/10",
    pain: "Sounds out words letter-by-letter, but loses the meaning of the sentence by the time they reach the end.",
    smartpathSolution: "10-minute daily decodable story trips that build smooth, joyful reading fluency.",
  },
  {
    character: "/assets/characters/kuya_idle.png",
    name: "Child #3: Confident & Ready",
    statusBadge: "Grade-Ready · Confident",
    badgeClass: "bg-emerald-500 text-white",
    cardBorder: "border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-500/10",
    pain: "Already reads independently, but needs consistent challenge so they don't get bored in class.",
    smartpathSolution: "Daily challenge drills, rich storytelling, and Grade 3 Science discovery modules.",
  },
];

// 3 Super Simple Fixes for Busy Parents
const PARENT_FIXES = [
  {
    icon: Volume2,
    color: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
    title: "It reads aloud with your child",
    desc: "Tala speaks patient English and Filipino. Your child taps any word to hear it pronounced and sounded out.",
  },
  {
    icon: Clock,
    color: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    title: "Just 10 minutes a day",
    desc: "Short, gamified daily trips that fit before dinner or after school. No 2-hour homework crying battles.",
  },
  {
    icon: Smile,
    color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "Parent peace of mind",
    desc: "Daily progress arrives on your phone. Plus Teacher Saje AI gives you instant tips when your child is stuck.",
  },
];

// Education Roadmap: Starting at 1-3, scaling to complete elementary
const ROADMAP_STEPS = [
  {
    phase: "Phase 1 · Now Live",
    title: "Grades 1 to 3 Foundations",
    badge: "Active",
    badgeColor: "bg-emerald-500 text-white",
    desc: "The critical window. Daily guided lessons in Math, English, and Science with read-aloud voice, tracing, and live parent sync.",
    icon: Compass,
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
  },
  {
    phase: "Phase 2 · In Development",
    title: "Grades 4 to 6 Mastery",
    badge: "Roadmap",
    badgeColor: "bg-amber-500 text-white",
    desc: "Critical reading comprehension, applied mathematics, scientific inquiry, and preparation for high school entrance.",
    icon: Rocket,
    iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
  },
  {
    phase: "The Grand Goal",
    title: "Complete Primary Education",
    badge: "Vision",
    badgeColor: "bg-purple-600 text-white",
    desc: "A comprehensive digital learning companion covering the entire elementary journey for every Filipino family.",
    icon: GraduationCap,
    iconColor: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
  },
];

// 2 Co-Founders (Text/Role only, clean & scannable)
const CO_FOUNDERS = [
  {
    role: "Co-Founder & Chief Executive Officer",
    subtitle: "Vision, Product & Growth",
    focus:
      "Leading our mission to make high-impact foundational learning affordable to every Filipino home, driving school partnerships, and scaling our learning ecosystem across the country.",
  },
  {
    role: "Co-Founder & Chief Technology Officer",
    subtitle: "Learning Architecture & Systems",
    focus:
      "Directing educational system design, offline-capable mobile architecture, and child-safe real-time synchronization engineered for reliable performance on Philippine devices.",
  },
];

// 5 Content Creators
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
    focus: "Crafting visual, market-counting math trips featuring Philippine currency, shapes, and early word problems.",
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
    tag: "Stories & Values",
    icon: PenTool,
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    focus: "Writing culturally attuned, values-rich stories and audio narrations that build reading joy and character.",
  },
  {
    role: "Interactive Learning & Drill Designer",
    tag: "UI & Touch Games",
    icon: Palette,
    iconColor: "bg-rose-500/10 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
    focus: "Designing stroke-by-stroke tracing drills, accessible coloring boards, and distraction-free visual interactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1 overflow-hidden">
        {/* =========================================================================
            HERO: PARENT-FIRST, URGENT & RELATABLE (NO WALLS OF TEXT)
           ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-background to-background dark:from-slate-900/40" />
            <div className="absolute -top-32 right-1/4 h-[440px] w-[440px] rounded-full bg-rose-400/15 blur-3xl dark:bg-rose-500/10" />
            <div className="absolute top-40 -left-20 h-[360px] w-[360px] rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
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
                Why We Built SmartPath · For Every Filipino Family
              </span>

              <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.025em] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                1 in 3 Filipino children
                <br />
                <span className="text-gradient-sunset">can&apos;t read by Grade 3.</span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-slate-700 sm:text-lg dark:text-slate-200">
                In a regular classroom of 40 pupils, teachers don&apos;t have time to sit one-on-one with your child every day.{" "}
                <span className="text-orange-600 dark:text-orange-400 font-extrabold">SmartPath fixes this at home in 10 minutes a day.</span>
              </p>
            </motion.div>

            {/* Quick Evidence Trust Bar (Clean, no wall of text) */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.gmanetwork.com/news/topstories/nation/957822/edcom-2-low-emerging-readers-comprehensive-rapid-literacy-assessment-low/story/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 text-xs font-bold text-slate-700 shadow-xs backdrop-blur-sm transition hover:border-orange-500/30 hover:text-orange-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:text-orange-400"
              >
                <Newspaper className="h-3.5 w-3.5 text-rose-600" />
                <span>GMA News &amp; EDCOM II: 1 in 3 are &apos;low-emerging readers&apos;</span>
                <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
              </a>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 text-xs font-bold text-slate-700 shadow-xs backdrop-blur-sm dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200">
                <Award className="h-3.5 w-3.5 text-amber-500" />
                <span>Recipient of the DICT Startup Grant Fund</span>
              </div>
            </div>

            {/* 3 High-Impact Stat Tiles */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {CRISIS_STATS.map((s) => (
                <div
                  key={s.label}
                  className="card-premium relative overflow-hidden p-6 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${s.bg}`}>
                    {s.badge}
                  </span>
                  <div className={`mt-2 font-heading text-4xl font-black tracking-tight sm:text-5xl ${s.color}`}>
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

            {/* =========================================================================
                THE 3-CHILDREN REALITY: RELATABLE & HIGH VISUAL ENGAGEMENT
               ========================================================================= */}
            <div className="mt-12 rounded-3xl border-2 border-slate-900/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-slate-900">
              <div className="text-center max-w-xl mx-auto">
                <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-600 dark:text-orange-400">
                  A Reality Check for Every Parent
                </span>
                <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                  Which one is your child today?
                </h2>
                <p className="mt-1.5 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
                  Children don&apos;t say &ldquo;I can&apos;t read.&rdquo; They hide it, guess, or cry during homework.
                </p>
              </div>

              {/* 3 Child Cards with Characters */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {THREE_CHILDREN.map((child) => (
                  <div
                    key={child.name}
                    className={`flex flex-col justify-between rounded-2xl border-2 p-5 transition hover:shadow-md ${child.cardBorder}`}
                  >
                    <div>
                      {/* Character Avatar */}
                      <div className="flex items-center gap-3">
                        <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-white/90 p-1 shadow-xs dark:bg-slate-800">
                          <Image
                            src={child.character}
                            alt={child.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-black uppercase ${child.badgeClass}`}>
                            {child.statusBadge}
                          </span>
                          <h3 className="mt-1 font-heading text-sm font-extrabold text-slate-900 dark:text-white">
                            {child.name}
                          </h3>
                        </div>
                      </div>

                      {/* What happens at school / home */}
                      <div className="mt-4">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          At School &amp; Homework:
                        </span>
                        <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                          {child.pain}
                        </p>
                      </div>
                    </div>

                    {/* How SmartPath Solves It */}
                    <div className="mt-4 border-t border-slate-900/10 pt-3 dark:border-white/10">
                      <span className="text-[11px] font-black text-emerald-700 dark:text-emerald-300 block">
                        With SmartPath:
                      </span>
                      <p className="mt-0.5 text-xs font-medium text-slate-800 dark:text-slate-100">
                        {child.smartpathSolution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Reassurance Pill */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-center text-xs font-semibold text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                Caught during <span className="font-extrabold text-slate-900 dark:text-white">Grades 1 to 3</span>, reading gaps take only 10 minutes a day to fix. After Grade 4, they compound into permanent learning loss.
              </div>
            </div>

            {/* =========================================================================
                THE 3 SIMPLE FIXES FOR BUSY PARENTS
               ========================================================================= */}
            <div className="mt-12">
              <div className="text-center max-w-xl mx-auto">
                <span className="eyebrow">
                  <Heart className="h-3.5 w-3.5 text-rose-500" />
                  Made for Real Filipino Homes
                </span>
                <h2 className="mt-1.5 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
                  No stress. No tutors. Just 10 joyful minutes.
                </h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {PARENT_FIXES.map((fix) => {
                  const Icon = fix.icon;
                  return (
                    <div
                      key={fix.title}
                      className="card-premium p-6 text-center sm:text-left transition hover:shadow-md"
                    >
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl mx-auto sm:mx-0 ${fix.color}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 font-heading text-base font-extrabold text-slate-900 dark:text-white">
                        {fix.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {fix.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: MISSION, VISION & THE FULL GRADE SCHOOL ROADMAP
           ========================================================================= */}
        <section className="border-t border-slate-900/5 bg-slate-50/70 py-12 sm:py-16 dark:border-white/5 dark:bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                Our Vision &amp; Ambition
              </span>
              <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-4xl dark:text-white">
                Complete grade school education for every Filipino child.
              </h2>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
                Grades 1–3 is our launchpad because reading and math foundations are won or lost here. Our long-term mission is complete primary education (Grades 1–6).
              </p>
            </div>

            {/* Vision & Mission Split Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card-premium p-6 sm:p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-extrabold text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                  <Heart className="h-3.5 w-3.5" />
                  Our Mission
                </span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                  Empower every Filipino home with stress-free, joyful digital tutoring.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Giving children daily bite-sized guidance, empowering parents with real-time coaching via Teacher Saje, and providing teachers with 100% free classroom connection tools.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-extrabold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Our Vision
                </span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                  A future where no Filipino child enters Grade 4 left behind.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  From Kinder to Grade 6, we envision every learner stepping into high school fluent in reading, confident in math, and excited about discovery.
                </p>
              </div>
            </div>

            {/* Elementary Education Roadmap */}
            <div className="mt-10">
              <h3 className="text-center font-heading text-base font-extrabold text-slate-900 sm:text-lg dark:text-white">
                Our Elementary Education Roadmap
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {ROADMAP_STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="card-premium flex flex-col justify-between p-5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`grid h-9 w-9 place-items-center rounded-xl ${step.iconColor}`}>
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        </div>
                        <span className="mt-3 block text-[11px] font-bold text-slate-400 dark:text-slate-500">
                          {step.phase}
                        </span>
                        <h4 className="mt-0.5 font-heading text-base font-extrabold text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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
            SECTION: DICT STARTUP GRANT FUND RECOGNITION (CLEAN TRUST BANNER)
           ========================================================================= */}
        <section className="relative border-t border-slate-900/5 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-purple-500/10 py-10 dark:border-white/5 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-purple-500/5">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="card-premium relative overflow-hidden border-2 border-orange-500/20 bg-white p-6 sm:p-7 dark:border-orange-500/25 dark:bg-slate-900">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-md shadow-orange-500/25">
                  <Award className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-extrabold text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                    <Landmark className="h-3 w-3" />
                    Government Innovation Support
                  </div>
                  <h3 className="mt-1.5 font-heading text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                    Proud Recipient of the DICT Startup Grant Fund
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                    SmartPath is backed by the <span className="font-extrabold text-slate-900 dark:text-white">Department of Information and Communications Technology (DICT) Startup Grant Fund</span> to build scalable, child-safe educational technology addressing foundational learning across Philippine islands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: OUR TEAM (2 CO-FOUNDERS + 5 CONTENT CREATORS, CLEAN & CRISP)
           ========================================================================= */}
        <section className="relative border-t border-slate-900/5 bg-slate-50/70 py-12 sm:py-16 dark:border-white/5 dark:bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">
                <Users className="h-3.5 w-3.5 text-orange-500" />
                The Team Behind SmartPath
              </span>
              <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-3xl dark:text-white">
                Educators, creators, and technologists.
              </h2>
              <p className="mt-1.5 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
                Built by Filipino parents and founders passionate about making world-class early education joyful and accessible.
              </p>
            </div>

            {/* 2 Co-Founders */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CO_FOUNDERS.map((founder) => (
                <div
                  key={founder.role}
                  className="card-premium relative overflow-hidden border-2 border-orange-500/20 bg-white p-6 dark:bg-slate-900"
                >
                  <span className="inline-block rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                    {founder.subtitle}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                    {founder.role}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {founder.focus}
                  </p>
                </div>
              ))}
            </div>

            {/* 5 Content Creators */}
            <div className="mt-10">
              <div className="text-center">
                <span className="inline-block rounded-full bg-slate-200/80 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Content Creation &amp; Curriculum Specialists
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CONTENT_CREATORS.map((creator) => {
                  const Icon = creator.icon;
                  return (
                    <div
                      key={creator.role}
                      className="card-premium flex flex-col justify-between p-5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`grid h-9 w-9 place-items-center rounded-xl ${creator.iconColor}`}>
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {creator.tag}
                          </span>
                        </div>
                        <h4 className="mt-3 font-heading text-sm font-extrabold text-slate-900 dark:text-white">
                          {creator.role}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {creator.focus}
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
            FINAL CALL TO ACTION FOR PARENTS
           ========================================================================= */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Start Early. Start Joyful.
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
              Give your child a confident start in 10 minutes today.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Join thousands of Filipino families helping their kids master reading and math without tears or homework friction.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/tutor-app"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-sunset px-6 text-sm font-extrabold text-white shadow-md shadow-orange-500/25 transition hover:scale-105"
              >
                Try Kids App Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/parent-app"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-900/10 bg-white px-6 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
              >
                See Parent App
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
