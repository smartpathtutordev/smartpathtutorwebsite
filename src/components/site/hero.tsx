"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, GraduationCap, Compass } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-background to-background dark:from-slate-900/60" />
        <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/15" />
        <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute inset-0 bg-dots text-slate-900 dark:text-white [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center lg:col-span-6 lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 py-1 pl-1 pr-3.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-sunset text-[11px]">🌟</span>
              DepEd MATATAG · Grades 1–3
            </div>

            <h1 className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-slate-900 sm:text-6xl lg:text-[4.5rem] dark:text-white">
              The <span className="text-gradient-sunset">smart path</span>
              <br className="hidden sm:block" /> to confident learning.
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0 dark:text-slate-300">
              Ten minutes a day of Math, English and Science — on your child&apos;s phone.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#pricing"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 active:scale-[0.98] sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                See plans
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 text-sm font-bold text-slate-700 sm:grid-cols-3 sm:gap-4 dark:text-slate-300">
              {[
                { icon: CheckCircle2, label: "Works offline", tint: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10" },
                { icon: Users, label: "From ₱399/mo", tint: "text-orange-600 bg-orange-50 dark:bg-orange-500/10" },
                { icon: GraduationCap, label: "Free for teachers", tint: "text-violet-600 bg-violet-50 dark:bg-violet-500/10" },
              ].map(({ icon: Icon, label, tint }) => (
                <li key={label} className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className={`grid h-8 w-8 place-items-center rounded-lg ${tint}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="relative flex justify-center lg:col-span-6"
          >
            <div aria-hidden className="absolute top-1/2 left-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-sunset opacity-25 blur-3xl sm:h-[520px] sm:w-[520px]" />
            <div aria-hidden className="absolute top-1/2 left-1/2 hidden h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/40 sm:block dark:border-orange-400/15" />
            <div aria-hidden className="absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/25 lg:block dark:border-orange-400/10" />

            <div className="relative w-full max-w-[290px] sm:max-w-[320px]">
              <div className="relative rounded-[46px] bg-slate-900 p-2.5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-slate-800">
                <div className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
                <div className="relative overflow-hidden rounded-[38px] bg-white">
                  <Image
                    src="/images/app-screen.png"
                    alt="SmartPath Tutor App - Today's Trip (Math, English, Science)"
                    width={554}
                    height={1024}
                    className="block h-auto w-full select-none object-cover"
                    priority
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease }}
                className="absolute top-[46%] -left-8 z-20 hidden items-center sm:flex gap-3 rounded-2xl border border-slate-900/5 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:-left-24 dark:border-white/10 dark:bg-slate-900/95"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-100 text-lg dark:bg-amber-500/15">👧</span>
                <div>
                  <p className="text-sm font-extrabold leading-tight text-slate-900 dark:text-white">From ₱399/mo</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Free Parents app</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease }}
                className="absolute inset-x-0 -bottom-5 z-20 mx-auto flex w-max items-center gap-3 whitespace-nowrap rounded-2xl sm:inset-x-auto sm:bottom-14 sm:-right-16 sm:mx-0 border border-slate-900/5 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/95"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-sunset text-white">
                  <Compass className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold leading-tight text-slate-900 dark:text-white">Today&apos;s Trip</p>
                  <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">Math · English · Science</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
