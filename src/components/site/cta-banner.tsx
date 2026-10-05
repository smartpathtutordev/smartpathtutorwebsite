"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, BookOpen, Star } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-8 sm:p-14 text-center shadow-2xl shadow-orange-500/20 text-white"
        >
          {/* Subtle Background Glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/20 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-yellow-300/20 blur-2xl"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 backdrop-blur-xs px-4 py-1.5 text-xs font-bold text-white shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-yellow-200" />
              <span>Free 7-Day Trial for Kids</span>
            </div>

            <h2 className="mt-5 font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Start{" "}
              <span className="text-yellow-200">
                today
              </span>.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/95 font-sans leading-relaxed font-medium">
              Seven days free. Cancel any time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="https://portal.smartpathtutor.ph/portal"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-heading font-black text-sm sm:text-base text-slate-900 shadow-xl shadow-black/10 hover:bg-yellow-50 active:scale-95 transition-all w-full sm:w-auto"
              >
                <span>Start Free 7-Day Trial</span>
                <ArrowRight className="h-4 w-4 text-orange-600" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-xs px-6 py-4 font-heading font-bold text-sm sm:text-base text-white transition-colors w-full sm:w-auto"
              >
                <span>Explore Curriculum</span>
              </a>
            </div>

            {/* Badges row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/20 text-xs sm:text-sm font-bold text-white/90">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-yellow-200" />
                <span>100% Free For Teachers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-yellow-200" />
                <span>100% Ad-Free Safe Haven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-yellow-200" />
                <span>DepEd MATATAG Grades 1–3</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

