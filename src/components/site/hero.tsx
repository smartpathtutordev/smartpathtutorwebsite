"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  GraduationCap,
  Compass,
} from "lucide-react";

export function Hero() {

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/60 via-amber-50/30 to-background dark:from-amber-950/20"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 items-center">
          
          {/* Left: Punchy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/40 px-4 py-1.5 text-xs font-black text-amber-800 dark:text-amber-300 shadow-xs">
              <span className="text-sm">🌟</span>
              <span>DepEd MATATAG · Grades 1–3</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              The <span className="text-orange-500">smart path</span> to confident learning.
            </h1>

            {/* Subhead */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-lg font-medium">
              Ten minutes a day of Math, English and Science — on your child&apos;s phone.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-3.5 text-sm sm:text-base font-heading font-black text-white shadow-xl shadow-orange-500/20 hover:brightness-105 transition-all active:scale-95"
              >
                <span>See plans</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* The "Watch a day" button lived here and pointed at
                  #how-it-works. That section is gone, so the button had
                  nothing to scroll to. One clear action beats two, and the
                  second one was the weaker of the pair. */}
            </div>

            {/* Micro Feature Proof */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 font-sans">
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Works offline
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <Users className="h-4 w-4 text-orange-500" /> One family plan
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <GraduationCap className="h-4 w-4 text-purple-600" /> Free for teachers
              </span>
            </div>
          </motion.div>

          {/* Right: Smartphone Showing The Real SmartPath App */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            {/* Phone Outer Chassis Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer Phone Shell with Titanium/Slate Bezel & Physical Buttons */}
              <div className="relative rounded-[48px] p-2.5 sm:p-3 bg-slate-900 border-[4px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.12)]">
                
                {/* Physical Side Buttons */}
                <div className="absolute -left-[7px] top-24 w-[3px] h-7 bg-slate-700 rounded-l-md" />
                <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-md" />
                <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-slate-700 rounded-l-md" />
                <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-md" />

                {/* Top Bezel Speaker Slit */}
                <div className="w-12 h-1 bg-slate-700/80 rounded-full mx-auto mb-2" />

                {/* Inner Screen Displaying The Actual App */}
                <div className="relative rounded-[36px] overflow-hidden bg-white shadow-inner">
                  <Image
                    src="/images/app-screen.png"
                    alt="SmartPath Tutor App - Today's Trip (Math, English, Science)"
                    width={554}
                    height={1024}
                    className="w-full h-auto object-cover block select-none"
                    priority
                  />
                </div>

                {/* Bottom Bezel Home Bar Accent */}
                <div className="w-24 h-1 bg-slate-700/60 rounded-full mx-auto mt-2" />
              </div>

              {/* Floating Badges outside the phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-3 -left-3 sm:-left-6 rounded-2xl border-2 border-amber-300 bg-white dark:bg-slate-900 px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20"
              >
                <span className="text-base">👨‍👩‍👧‍👦</span>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">1 Family Plan</p>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Up to 3 Learners</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-3 -right-3 sm:-right-6 rounded-2xl border-2 border-amber-300 bg-white dark:bg-slate-900 px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="grid h-7 w-7 place-items-center rounded-xl bg-orange-500 text-white shadow-xs">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">Today&apos;s Trip</p>
                  <p className="text-[10px] font-bold text-orange-600 dark:text-orange-400">Math · English · Science</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

