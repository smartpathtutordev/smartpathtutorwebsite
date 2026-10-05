"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Compass,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  Layers,
  Languages,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const characters = [
  {
    name: "Tala",
    role: "AI Learning Companion",
    image: "/assets/characters/tala_celebrate.png",
    tagline: "Always patient, always encouraging",
    description:
      "A friendly Filipino girl with her iconic yellow sun hoodie. Tala breaks down tough math steps, reads along in English & Filipino, and celebrates every single breakthrough.",
    badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  },
  {
    name: "Teacher Saje",
    role: "Curriculum & Educator Lead",
    image: "/assets/characters/teacher_saje_guide.png",
    tagline: "DepEd MATATAG Alignment & Slides",
    description:
      "Represents the dedicated Filipino teachers across public and private schools. Powers our 1-click PowerPoint and Canva exports, Bloom's Taxonomy quizzes, and lesson plans.",
    badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  },
  {
    name: "Nanay & Bunso",
    role: "The Filipino Family",
    image: "/assets/characters/nanay_idle.png",
    tagline: "Transparent Parent Dashboard",
    description:
      "Built so every nanay, tatay, or guardian can understand their child's daily progress without guessing. Available in English, Filipino, Cebuano, and Hiligaynon.",
    badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  },
];

const pillars = [
  {
    icon: Compass,
    title: "DepEd MATATAG Aligned",
    body: "Covering Grades 1 to 3, every learning competency is mapped directly to official Department of Education curriculum codes (e.g. M2NS-IIh-54.1). What kids practice reinforces classwork.",
  },
  {
    icon: GraduationCap,
    title: "100% Free for Teachers",
    body: "We believe in empowering Filipino educators. Certified teachers get completely free lifetime access to lesson presentation tools, MATATAG competency planners, and class diagnostics.",
  },
  {
    icon: Layers,
    title: "How It Works: DepEd MATATAG Journey",
    body: "Rather than rote memorization, our pointer-based daily adventure leads learners through contextualized MATATAG daily trips (Math, English, Science), interactive practice play doors, real-world kindness missions, and celebratory Fun Zone rewards.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    body: "Early literacy thrives when children understand the context. Tala and the parent dashboard support English, Tagalog/Filipino, Cebuano, and Hiligaynon to build early fluency.",
  },
  {
    icon: Heart,
    title: "Priced Per Family Household",
    body: "No per-device penalties. Tutor One is ₱299/mo, or cover up to 3 children with the Family Plan at ₱599/mo with GCash, Maya, or prepaid activation voucher codes.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Ad-Free & Distraction-Free",
    body: "Zero external ads, zero social feeds, zero algorithmic rabbit holes. A secure learning sanctuary tailored exclusively for children's cognitive growth and parent peace of mind.",
  },
];

const stats = [
  { value: "Grades 1–3", label: "DepEd MATATAG Focus", sub: "Primary Grades 1, 2, and 3" },
  { value: "₱0 Free", label: "For Certified Teachers", sub: "Lifetime Educator Access" },
  { value: "Per Family", label: "Household Pricing", sub: "Covers up to 3+ Children" },
  { value: "4", label: "PH Languages", sub: "English, Tagalog, Cebuano, Hiligaynon" },
];

export function AboutContent() {
  return (
    <main className="flex-1">
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-background to-background dark:from-orange-950/20"
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <Badge variant="secondary" className="rounded-full px-3.5 py-1 text-xs gap-1.5 font-bold border border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Our Mission &amp; People
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 font-heading font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white"
          >
            Empowering every Filipino child with a{" "}
            <span className="text-orange-500">
              patient, joyful tutor
            </span>
            .
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            SmartPath Tutor was founded by Filipino educators, engineers, and parents to solve a real challenge: giving every child personalized DepEd-aligned guidance without the barrier of costly private tutoring or unstable internet.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────── */}
      <section className="border-y border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-heading font-black text-3xl sm:text-4xl text-orange-600 dark:text-orange-400">
                  {s.value}
                </div>
                <div className="mt-1 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Character Ecosystem ─────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs gap-1.5 font-bold border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300">
              <GraduationCap className="h-3.5 w-3.5" />
              The SmartPath Family
            </Badge>
            <h2 className="mt-4 font-heading font-black text-3xl tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Meet the companions behind the journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
              Characters created with genuine Filipino cultural identity to inspire warmth, pride, and curiosity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {characters.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-lg shadow-slate-200/30 dark:shadow-none hover:shadow-xl transition-all"
              >
                <div className="relative mb-5 flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-orange-50/40 dark:from-slate-800 dark:to-slate-800/40 p-4">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={180}
                    height={180}
                    className="h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${c.badgeColor}`}>
                    {c.role}
                  </Badge>
                </div>

                <h3 className="mt-3 font-heading font-black text-xl text-slate-900 dark:text-white">
                  {c.name}
                </h3>
                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                  {c.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans flex-1">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading font-black text-3xl tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Built for the realities of the Philippines
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
              Designed from the ground up for island connectivity, parent work schedules, and DepEd standards.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading font-black text-lg text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset p-8 sm:p-14 text-center shadow-xl shadow-orange-500/20 text-white">
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-white">
              Ready to give your child the smart path?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90 text-sm sm:text-base font-sans">
              Start a 7-day free trial. Experience DepEd MATATAG lessons, Tala&apos;s audio guidance, and Today&apos;s Path learning today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold px-7 shadow-md"
                render={<a href="/#pricing" />}
              >
                View Plans &amp; GCash
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 font-bold px-7"
                render={<a href="/#contact" />}
              >
                Talk to an Educator
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
