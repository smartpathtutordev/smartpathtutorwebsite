"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Wallet, ArrowRight } from "lucide-react";

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

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden bg-amber-50/30 dark:bg-slate-900/30 border-y border-amber-100/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1 text-xs font-black text-amber-800 dark:text-amber-300">
            <span>👨‍👩‍👧‍👦</span>
            <span>One price per household</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Pick a{" "}
            <span className="text-orange-500">
              plan.
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans font-medium">
            Cancel any time.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 shadow-xs">
            <button
              onClick={() => setCycle("monthly")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                cycle === "monthly"
                  ? "bg-gradient-sunset text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <span>Monthly</span>
              <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-black text-white">
                Standard
              </span>
            </button>
            <button
              onClick={() => setCycle("annual")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                cycle === "annual"
                  ? "bg-gradient-sunset text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <span>Annual</span>
              <span className="rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 px-2 py-0.5 text-[10px] font-black">
                Save 2 Mos
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PLANS.map((p) => {
            const price = cycle === "monthly" ? p.monthlyPrice : p.annualPrice;
            const cadence = cycle === "monthly" ? p.monthlyCadence : p.annualCadence;

            return (
              <div
                key={p.name}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all ${
                  p.highlight
                    ? "border-2 border-orange-500 bg-white dark:bg-slate-900 shadow-xl shadow-orange-500/10 sm:-translate-y-1 ring-4 ring-orange-500/10"
                    : "border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`inline-block rounded-full font-black text-[10px] px-3.5 py-1 shadow-sm uppercase tracking-wider ${
                      p.highlight
                        ? "bg-gradient-sunset text-white"
                        : "bg-amber-100 text-amber-900 dark:bg-slate-800 dark:text-amber-200 border border-amber-300 dark:border-slate-700"
                    }`}>
                      {p.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                    {p.name}
                  </h3>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-sans">{cadence}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="https://portal.smartpathtutor.ph/portal"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs sm:text-sm font-bold transition-all ${
                      p.highlight
                        ? "bg-gradient-sunset text-white shadow-md shadow-orange-500/25 hover:brightness-105 active:scale-[0.98]"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xs active:scale-[0.98]"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* GCash / Maya Voucher Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-orange-600">
              <Wallet className="h-5 w-5" />
            </span>

            {/* True of all three plans, so it is stated once rather than
                three times inside the cards. */}
            <p className="mt-8 text-center text-sm font-bold text-slate-600 dark:text-slate-400">
              Every plan is ad-free, works without signal, and never puts your
              child in front of a chatbot.
            </p>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                No credit card? GCash, Maya or 7-Eleven.
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Prepaid codes. No auto-renewal, no bank account.
              </p>
            </div>
          </div>
          <a
            href="/programs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 shrink-0 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition-colors"
          >
            <span>Learn About Prepaid Vouchers</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
