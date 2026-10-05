"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "My daughter used to cry over Math homework. Now she opens the app on her own every afternoon just to keep her star streak going!",
    name: "Joy Constantino",
    role: "Mother of Grade 2 Learner",
    location: "Quezon City",
    tag: "Math Confidence",
  },
  {
    quote:
      "Today's Path keeps my son excited every single morning. Just 20 minutes a day, and he proudly shows me the stars he earned.",
    name: "Mark Delgado",
    role: "Father of Grade 1 Learner",
    location: "Cebu City",
    tag: "Daily Habit",
  },
  {
    quote:
      "Every lesson matches DepEd competency codes exactly. My Grade 3 students who struggled with English caught up in under a month.",
    name: "Teacher Maricel",
    role: "Public School Educator",
    location: "Davao City",
    tag: "DepEd Aligned",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-700 dark:text-orange-300">
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>Family Stories</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Loved across the{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Philippines.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            From Metro Manila to provincial barangays and OFW families worldwide.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-black text-slate-900 dark:text-white">4.9 / 5</span>
            <span className="text-xs text-slate-400">• 1,200+ Filipino learners</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-bold text-purple-600 dark:text-purple-400">
                    {t.tag}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-heading font-black text-xs text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-slate-500">{t.role}</div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">{t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
