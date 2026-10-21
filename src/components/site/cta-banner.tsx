"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, BookOpen } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative px-5 pb-20 sm:px-6 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-14 text-center text-white shadow-2xl shadow-slate-900/30 sm:px-14 sm:py-20 dark:ring-1 dark:ring-white/10"
      >
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-gradient-sunset opacity-40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots text-white opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <Image aria-hidden src="/spt_icon.png" alt="" width={256} height={256} className="pointer-events-none absolute -right-10 -bottom-10 hidden h-56 w-56 rotate-12 opacity-10 sm:block" />

        <div className="relative">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            From ₱399/mo per child
          </div>

          <h2 className="mt-6 font-heading text-5xl font-extrabold tracking-[-0.025em] sm:text-6xl lg:text-7xl">
            Start <span className="text-gradient-sunset">today</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 sm:text-xl">Siblings just ₱199/mo. No auto-renewal.</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/30 transition hover:brightness-105 active:scale-[0.98] sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#faq"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Read the FAQ
            </a>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm font-semibold text-slate-300">
            <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-amber-300" /> Free to start for teachers</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-300" /> No ads, no outside links</span>
            <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-amber-300" /> DepEd MATATAG Grades 1–3</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
