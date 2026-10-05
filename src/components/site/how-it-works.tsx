"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Heart, Trophy, CheckCircle2, ShieldAlert, BookOpen } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Today's Trip",
    time: "10 mins/trip",
    icon: Compass,
    description: "Learners embark on contextualized DepEd MATATAG missions in Math, English, and Science — like 'Count at the palengke!' or 'Read on a bangka!'.",
    tag: "DepEd Curriculum Adventures",
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-300",
    bg: "bg-amber-100 dark:bg-amber-950/40",
    emoji: "🧭",
  },
  {
    step: "02",
    title: "Let's Practice",
    time: "Anytime",
    icon: Sparkles,
    description: "Interactive play doors for foundational skills: Read (letters & words), Write (letter formation), Count (add & play), and Discover (science simulations).",
    tag: "Interactive Play Doors",
    accent: "text-blue-600 dark:text-blue-400",
    border: "border-blue-300",
    bg: "bg-blue-100 dark:bg-blue-950/40",
    emoji: "✨",
  },
  {
    step: "03",
    title: "Values & Kindness",
    time: "Daily habit",
    icon: Heart,
    description: "Daily real-world kindness missions connecting screen time to family life (e.g., hugging parents, helping at home), anchored in DepEd core values.",
    tag: "Maka-Diyos, Maka-Bansa",
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-300",
    bg: "bg-emerald-100 dark:bg-emerald-950/40",
    emoji: "❤️",
  },
  {
    step: "04",
    title: "Fun Zone Rewards",
    time: "Earn tickets",
    icon: Trophy,
    description: "Completing daily trips earns game tickets and streak fire, unlocking 12 cultural mini-games, island stories, and avatars in My Room.",
    tag: "12 Cultural Mini-Games",
    accent: "text-rose-600 dark:text-rose-400",
    border: "border-rose-300",
    bg: "bg-rose-100 dark:bg-rose-950/40",
    emoji: "🎟️",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 overflow-hidden bg-amber-50/30 dark:bg-slate-900/30 border-y border-amber-100/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1 text-xs font-black text-amber-800 dark:text-amber-300">
            <span>🧭</span>
            <span>Inside Today&apos;s Trip</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            How your child learns on the{" "}
            <span className="text-orange-500">
              smart path.
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans font-medium">
            Based directly on the SmartPath Tutor app: an adaptive, pointer-based daily adventure for Grades 1 to 3 that never piles up overdue homework.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex flex-col justify-between rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Step & Time */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-amber-300 group-hover:text-orange-500 transition-colors">
                      {s.step}
                    </span>
                    <span className="rounded-full bg-amber-100 dark:bg-slate-800 px-3 py-1 text-xs font-black text-amber-900 dark:text-amber-200">
                      {s.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="my-5">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl border-2 ${s.border} ${s.bg} ${s.accent}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg">{s.emoji}</span>
                    <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    {s.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Core Architecture Pillars from the Flutter App */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-amber-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-heading font-black text-sm mb-1.5">
              <CheckCircle2 className="h-4 w-4" />
              <span>Pointer-Based (Never Falls Behind)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Missed a busy school day? No penalties. The app pauses and resumes right where your learner left off — never piling on overwhelming overdue assignments.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-heading font-black text-sm mb-1.5">
              <Heart className="h-4 w-4" />
              <span>DepEd Values &amp; Character Strand</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Includes weekly character education stories anchored in official DepEd MATATAG core values: Maka-Diyos, Maka-Tao, Maka-Kalikasan, and Maka-Bansa.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-heading font-black text-sm mb-1.5">
              <ShieldAlert className="h-4 w-4" />
              <span>Parent App Live Mirror</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Parents monitor real-time daily checklist completion, accuracy scores, and tickets earned directly from their own phone with 1 household login.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
