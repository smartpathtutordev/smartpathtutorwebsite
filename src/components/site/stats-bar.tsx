"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Clock, Users } from "lucide-react";

const STATS = [
  {
    icon: BookOpen,
    value: "Grades 1–3",
    label: "DepEd MATATAG",
    sub: "Primary Grades Aligned",
    accent: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-950/40",
  },
  {
    icon: GraduationCap,
    value: "₱0 Free",
    label: "For Teachers",
    sub: "100% Free Forever for Educators",
    accent: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-950/40",
  },
  {
    icon: Users,
    value: "Per Family",
    label: "1 Subscription",
    sub: "Covers up to 3+ children",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-950/40",
  },
  {
    icon: Clock,
    value: "Today's Path",
    label: "Adaptive Routine",
    sub: "Pointer-based, never falls behind",
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-950/40",
  },
];

export function StatsBar() {
  return (
    <section className="relative -mt-6 mb-16 sm:mb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xl shadow-amber-500/5 dark:shadow-none"
        >
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center px-3 py-1"
              >
                <span className={`grid h-10 w-10 place-items-center rounded-2xl ${s.bg} ${s.accent} mb-2.5`}>
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  {s.value}
                </span>
                <span className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                  {s.label}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
