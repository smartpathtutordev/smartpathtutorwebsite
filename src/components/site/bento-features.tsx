"use client";

import { motion } from "framer-motion";
import {
  Users,
  Volume2,
  Presentation,
  ShieldCheck,
  Sparkles,
  BarChart3,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export function BentoFeatures() {
  return (
    <section id="superpowers" className="relative py-16 sm:py-24 overflow-hidden bg-amber-50/30 dark:bg-slate-900/30 border-y border-amber-100/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1 text-xs font-black text-amber-800 dark:text-amber-300">
            <span>⚡</span>
            <span>Engineered for Philippine Homes</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            The{" "}
            <span className="text-orange-500">
              smart path
            </span>{" "}
            built for Philippine families.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans font-medium">
            Priced per family household, 100% free for certified educators, and tailored for Grades 1 to 3.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          
          {/* Card 1: Family Household Plan & Live Parent Mirror (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all md:col-span-7"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 dark:text-amber-400 border-2 border-amber-300">
                  <Users className="h-6 w-6" />
                </span>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Per-Family Pricing
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    One Household Plan, Multiple Learners
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                No per-child or per-device lock-in. The Family Plan (₱599/mo) covers up to 3 children with separate grade profiles, streaks, and Parent AI guidance. Plus, Teacher accounts are 100% Free!
              </p>
            </div>

            {/* Visual Household Mirror Card */}
            <div className="my-6 rounded-2xl border border-amber-200/80 dark:border-slate-800 bg-amber-50/50 dark:bg-slate-800/40 p-4 font-sans text-xs">
              <div className="flex items-center justify-between text-orange-600 dark:text-orange-400 font-bold mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Household Active · Parent App Connected
                </span>
                <span className="text-[10px] bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 px-2 py-0.5 rounded-full font-bold">1 Family Plan</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-white dark:bg-slate-900 p-2.5 border border-amber-100 dark:border-slate-700/60 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-orange-100 text-orange-700 font-bold text-xs">M</span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Maya · Grade 2</p>
                      <p className="text-[10px] text-slate-500">Today&apos;s Path: 3/4 Quests Done</p>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-1 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 3-Day Streak 🔥
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white dark:bg-slate-900 p-2.5 border border-amber-100 dark:border-slate-700/60 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100 text-blue-700 font-bold text-xs">L</span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Lucas · Grade 1</p>
                      <p className="text-[10px] text-slate-500">Reading Booster: Phonics Blends</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-bold flex items-center gap-1 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Ready Next
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900 dark:text-slate-300">
                👨‍👩‍👧‍👦 Up to 3+ Children
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900 dark:text-slate-300">
                👩‍🏫 100% Free For Teachers
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900 dark:text-slate-300">
                📱 Real-Time Parent App
              </span>
            </div>
          </motion.div>

          {/* Card 2: Multilingual Audio Companion (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all md:col-span-5"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                  <Volume2 className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Bilingual Voice
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    4 Mother-Tongue Languages
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Concepts explained in the child&apos;s natural language to eliminate English-only learning barriers.
              </p>
            </div>

            {/* Language Matrix */}
            <div className="my-6 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Filipino / Tagalog</span>
                <p className="text-[10px] text-slate-400 mt-0.5">National Standard</p>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white">English</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Global Literacy</p>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Cebuano / Bisaya</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Visayas &amp; Mindanao</p>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Hiligaynon</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Western Visayas</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                🎙️ Audio hints
              </span>
              <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                🗣️ Dual narration
              </span>
            </div>
          </motion.div>

          {/* Card 3: 1-Click Slide Exporter (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all md:col-span-4"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 text-amber-700 dark:text-amber-400 border-2 border-amber-300">
                  <Presentation className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Educator Platform
                  </span>
                  <h3 className="font-heading text-lg font-black text-slate-900 dark:text-white">
                    1-Click Slide Export
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                Generate animated classroom presentations formatted directly for TV and projectors.
              </p>
            </div>

            <div className="my-5 flex items-center justify-center gap-2 rounded-2xl bg-amber-50/60 dark:bg-slate-800/40 p-3 border border-amber-100">
              <span className="rounded-lg bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-black shadow-xs border border-amber-200 dark:border-slate-700">
                .PPTX
              </span>
              <span className="rounded-lg bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-black shadow-xs border border-amber-200 dark:border-slate-700">
                Canva
              </span>
              <span className="rounded-lg bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-black shadow-xs border border-amber-200 dark:border-slate-700">
                Slides
              </span>
            </div>

            <div className="pt-2">
              <span className="rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/40 px-3 py-1 text-xs font-black">
                Classroom Ready
              </span>
            </div>
          </motion.div>

          {/* Card 4: Bloom's Adaptive Diagnostic (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col justify-between rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all md:col-span-4"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-purple-100 text-purple-700 dark:text-purple-400 border-2 border-purple-300">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Mastery Curve
                  </span>
                  <h3 className="font-heading text-lg font-black text-slate-900 dark:text-white">
                    Adaptive Quiz Engine
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                Paced gently so kids gain confidence before moving to challenging problems.
              </p>
            </div>

            <div className="my-5 rounded-2xl bg-purple-50/50 dark:bg-slate-800/40 p-3.5 space-y-2 text-xs border border-purple-100">
              <div className="flex items-center justify-between font-bold">
                <span className="text-slate-700 dark:text-slate-400">Confidence Score</span>
                <span className="font-mono text-purple-600 font-extrabold">92%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[92%]" />
              </div>
            </div>

            <div className="pt-2">
              <span className="rounded-full bg-purple-100 text-purple-900 dark:bg-purple-950/40 px-3 py-1 text-xs font-black">
                Stress-Free Calibration
              </span>
            </div>
          </motion.div>

          {/* Card 5: 100% Ad-Free Safe Sanctuary (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex flex-col justify-between rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all md:col-span-4"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-100 text-rose-700 dark:text-rose-400 border-2 border-rose-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Child Safety
                  </span>
                  <h3 className="font-heading text-lg font-black text-slate-900 dark:text-white">
                    100% Ad-Free Haven
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                Zero third-party advertising, zero unmonitored feeds, and full parent screen-time limits.
              </p>
            </div>

            <div className="my-5 flex items-center justify-center gap-3 rounded-2xl bg-rose-50/50 dark:bg-slate-800/40 p-3 border border-rose-100">
              <span className="text-xs font-black text-slate-800 dark:text-slate-300">0 Ads</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-300">0 Trackers</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-300">PIN Locked</span>
            </div>

            <div className="pt-2">
              <span className="rounded-full bg-rose-100 text-rose-900 dark:bg-rose-950/40 px-3 py-1 text-xs font-black">
                Child-Safe Guaranteed
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
