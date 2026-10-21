"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Wallet, ArrowRight } from "lucide-react";

type BillingCycle = "monthly" | "annual";

interface PlanConfig {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  monthlyCadence: string;
  annualCadence: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

// Three short lines per plan, not six long ones.
//
// The old list repeated what every plan shares — ad-free, DepEd MATATAG, the
// Parent app — inside all three cards, so a parent read 162 words to find the
// two things that actually differ: how many children, and how many Parent AI
// questions. Those differences are now the whole list, and the shared promises
// sit once underneath where they are stated a single time.
const PLANS: PlanConfig[] = [
  {
    name: "Tutor One",
    monthlyPrice: "\u20b1299",
    annualPrice: "\u20b12,990",
    monthlyCadence: "/ month",
    annualCadence: "/ year (\u20b1249/mo)",
    features: [
      "1 child",
      "40 Parent AI questions a month",
      "7-day free trial",
    ],
    cta: "Start free trial",
    badge: "1 child",
  },
  {
    name: "Family Plan",
    monthlyPrice: "\u20b1599",
    annualPrice: "\u20b15,990",
    monthlyCadence: "/ month",
    annualCadence: "/ year (\u20b1499/mo)",
    features: [
      "Up to 3 children",
      "80 Parent AI questions a month",
      "One price for the household",
    ],
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Teachers",
    monthlyPrice: "\u20b10",
    annualPrice: "\u20b10",
    monthlyCadence: "Free forever",
    annualCadence: "Free forever",
    features: [
      "Free forever, verified teachers",
      "Classroom dashboard",
      "Lesson plans and worksheets",
    ],
    cta: "Get teacher access",
    badge: "Free",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden border-y border-slate-900/5 bg-[#fbf8f2] py-20 sm:py-28 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span aria-hidden>👨‍👩‍👧‍👦</span> One price per household
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Pick a <span className="text-gradient-sunset">plan.</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">Cancel any time.</p>

          {/* Toggle */}
          <div role="group" aria-label="Billing cycle" className="mt-8 inline-flex items-center rounded-full border border-slate-900/10 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-slate-900">
            {(["monthly", "annual"] as const).map((c) => {
              const active = cycle === c;
              return (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  aria-pressed={active}
                  className={`relative flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                    active ? "text-white dark:text-slate-900" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span layoutId="billing-pill" transition={{ duration: 0.35, ease }} className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white" />
                  )}
                  <span className="relative">{c === "monthly" ? "Monthly" : "Annual"}</span>
                  <span className={`relative rounded-full px-2 py-0.5 text-[10px] font-black ${
                    c === "annual" ? "bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200" : active ? "bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-900" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  }`}>
                    {c === "monthly" ? "Standard" : "Save 2 Mos"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {PLANS.map((p, i) => {
            const price = cycle === "monthly" ? p.monthlyPrice : p.annualPrice;
            const cadence = cycle === "monthly" ? p.monthlyCadence : p.annualCadence;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className={`relative flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${
                  p.highlight
                    ? "bg-slate-900 text-white shadow-2xl shadow-orange-900/20 ring-1 ring-slate-800 md:-my-4 md:py-12 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:ring-orange-400/30"
                    : "card-premium text-slate-900 dark:text-white"
                }`}
              >
                {p.highlight && (
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                )}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-xl font-extrabold">{p.name}</h3>
                  {p.badge && (
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                      p.highlight ? "bg-gradient-sunset text-white" : "bg-amber-50 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20"
                    }`}>
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-heading text-5xl font-extrabold tracking-tight tabular-nums">{price}</span>
                  <span className={`text-sm font-semibold ${p.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>{cadence}</span>
                </div>

                <ul className={`mt-7 flex-1 space-y-3.5 border-t pt-7 ${p.highlight ? "border-white/10" : "border-slate-900/5 dark:border-white/10"}`}>
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[15px] font-medium leading-snug ${p.highlight ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}`}>
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.highlight ? "bg-orange-500/20 text-orange-300" : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"}`}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/soon"
                  className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-extrabold transition active:scale-[0.98] ${
                    p.highlight
                      ? "bg-gradient-sunset text-white shadow-lg shadow-orange-500/30 hover:brightness-105"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* True of all three plans, so it is stated once rather than
            three times inside the cards. */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
          Every plan is ad-free, works without signal, and never puts your
          child in front of a chatbot.
        </p>

        {/* GCash / Maya Voucher Banner */}
        <div className="card-premium mx-auto mt-8 flex max-w-4xl flex-col items-start justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
              <Wallet className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-900 sm:text-base dark:text-white">No credit card? GCash, Maya or 7-Eleven.</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Prepaid codes. No auto-renewal, no bank account.</p>
            </div>
          </div>
          <a
            href="/programs"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-orange-200 px-4 py-2.5 text-sm font-bold text-orange-700 transition hover:bg-orange-50 dark:border-orange-500/30 dark:text-orange-300 dark:hover:bg-orange-500/10"
          >
            Learn About Prepaid Vouchers
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
