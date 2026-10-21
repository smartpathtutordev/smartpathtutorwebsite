"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Wallet, ArrowRight, UserPlus, Sparkles } from "lucide-react";

type Cycle = "monthly" | "term" | "year";

const CYCLES: { id: Cycle; label: string; hint?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "term", label: "Term", hint: "~90 days" },
  { id: "year", label: "School Year" },
];

const CADENCE: Record<Cycle, string> = {
  monthly: "/ month",
  term: "/ term (~90 days)",
  year: "/ school year",
};

interface Plan {
  name: string;
  tagline: string;
  prices: Record<Cycle, string> | null; // null = flat free
  freeLabel?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

// Prices from docs/PRODUCT_DECISION_pricing_programs.md (smartpath_tutor),
// matching plan_list_price_php(). Keep the two in step.
const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "Parents app only",
    prices: null,
    freeLabel: "Free",
    features: ["Parents app", "Progress and a limited Today view", "Upgrade any time to add the Tutor app"],
    cta: "Get started",
  },
  {
    name: "Pro",
    tagline: "1 child",
    prices: { monthly: "\u20b1399", term: "\u20b11,099", year: "\u20b13,990" },
    features: ["Full SmartPath Tutor app for your child", "Parents app", "40 Parent AI questions a month"],
    cta: "Get started",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Teachers",
    tagline: "For classrooms",
    prices: null,
    freeLabel: "Free to start",
    features: ["30 credits to start", "Editing & export free", "Classroom dashboard"],
    cta: "Get teacher access",
    badge: "Free",
  },
];

const EXTRA_CHILD: Record<Cycle, string> = { monthly: "\u20b1199/mo", term: "\u20b1549/term", year: "\u20b11,990/school year" };

const ease = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden border-y border-slate-900/5 bg-[#fbf8f2] py-20 sm:py-28 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span aria-hidden>👧</span> Simple plans per child
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Pick a <span className="text-gradient-sunset">plan.</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">Start free. Add your child when you&apos;re ready.</p>

          <div role="group" aria-label="Billing period" className="mt-8 inline-flex max-w-full items-center rounded-full border border-slate-900/10 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-slate-900">
            {CYCLES.map((c) => {
              const active = cycle === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCycle(c.id)}
                  aria-pressed={active}
                  className={`relative flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-3.5 text-sm font-bold transition-colors sm:px-5 ${
                    active ? "text-white dark:text-slate-900" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {active && <motion.span layoutId="billing-pill" transition={{ duration: 0.35, ease }} className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white" />}
                  <span className="relative whitespace-nowrap">{c.label}</span>
                  {c.hint && <span className={`relative hidden text-[11px] font-semibold sm:inline ${active ? "opacity-80" : "opacity-60"}`}>{c.hint}</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {PLANS.map((p, i) => {
            const price = p.prices ? p.prices[cycle] : "\u20b10";
            const cadence = p.prices ? CADENCE[cycle] : p.freeLabel;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className={`relative flex flex-col rounded-[1.75rem] p-6 sm:p-7 ${
                  p.highlight
                    ? "bg-slate-900 text-white shadow-2xl shadow-orange-900/20 ring-1 ring-slate-800 md:-my-3 md:py-10 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:ring-orange-400/30"
                    : "card-premium text-slate-900 dark:text-white"
                }`}
              >
                {p.highlight && <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-extrabold">{p.name}</h3>
                    <p className={`text-sm font-semibold ${p.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>{p.tagline}</p>
                  </div>
                  {p.badge && (
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                      p.highlight ? "bg-gradient-sunset text-white" : "bg-amber-50 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20"
                    }`}>
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-heading text-[2.6rem] font-extrabold leading-none tracking-tight tabular-nums">{price}</span>
                  <span className={`text-sm font-semibold ${p.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>{cadence}</span>
                </div>

                <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${p.highlight ? "border-white/10" : "border-slate-900/5 dark:border-white/10"}`}>
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

        {/* Add-ons */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="card-premium flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"><UserPlus className="h-5 w-5" /></span>
            <div>
              <p className="font-extrabold text-slate-900 dark:text-white">+{EXTRA_CHILD[cycle]} per extra child</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Add siblings to Pro. Each gets their own profile.</p>
            </div>
          </div>
          <div className="card-premium flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"><Sparkles className="h-5 w-5" /></span>
            <div>
              <p className="font-extrabold text-slate-900 dark:text-white">Parent AI top-up: ₱99 / 40 questions</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Optional. Only if you need more answers.</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
          Every plan is ad-free, works without signal, and never puts your child in front of a chatbot.
        </p>

        <div className="card-premium mx-auto mt-6 flex max-w-4xl flex-col items-start justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"><Wallet className="h-5 w-5" /></span>
            <div>
              <p className="text-sm font-extrabold text-slate-900 sm:text-base dark:text-white">No credit card? GCash, Maya or 7-Eleven.</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Prepaid codes. No auto-renewal, no bank account.</p>
            </div>
          </div>
          <a href="/programs" className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border border-orange-200 px-4 text-sm font-bold text-orange-700 transition hover:bg-orange-50 dark:border-orange-500/30 dark:text-orange-300 dark:hover:bg-orange-500/10">
            Learn About Prepaid Vouchers
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
