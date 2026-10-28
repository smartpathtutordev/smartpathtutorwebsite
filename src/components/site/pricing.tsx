"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Wallet, ArrowRight, Sparkles, Minus, Plus } from "lucide-react";

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

// Prices from docs/PRODUCT_DECISION_pricing_programs.md (smartpath_tutor),
// matching plan_list_price_php(). Keep the two in step.
const PRO: Record<Cycle, number> = { monthly: 399, term: 1099, year: 3990 };
const SIBLING: Record<Cycle, number> = { monthly: 199, term: 549, year: 1990 };
const MIN_KIDS = 1;
const MAX_KIDS = 5;

const peso = (n: number) => "\u20b1" + n.toLocaleString("en-PH");

const PRO_FEATURES = ["Tutor app per child", "Parent app", "40 Parent AI questions/mo", "No ads"];
const TEACHER_FEATURES = ["Set up a class", "Recommend lessons", "Write multiple-choice questions", "See topics done"];

const ease = [0.22, 1, 0.36, 1] as const;

function Feature({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-[15px] font-medium leading-snug ${dark ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}`}>
      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-orange-500/20 text-orange-300" : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"}`}>
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span>{text}</span>
    </li>
  );
}

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [kids, setKids] = useState(1);
  const extra = kids - 1;
  const total = PRO[cycle] + extra * SIBLING[cycle];

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
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">One price for your first child. Siblings cost less.</p>

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

        <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 md:grid-cols-5 lg:gap-8">
          {/* Pro with child calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="relative flex flex-col rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-2xl shadow-orange-900/20 ring-1 ring-slate-800 sm:p-8 md:col-span-3 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:ring-orange-400/30"
          >
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-2xl font-extrabold">Pro</h3>
                <p className="text-sm font-semibold text-slate-400">Per child, full Tutor app</p>
              </div>
              <span className="rounded-full bg-gradient-sunset px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">Recommended</span>
            </div>

            {/* Stepper */}
            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <span id="kids-label" className="pl-1 text-sm font-bold text-slate-200">How many children?</span>
              <div className="flex items-center gap-1" role="group" aria-labelledby="kids-label">
                <button
                  type="button"
                  onClick={() => setKids((k) => Math.max(MIN_KIDS, k - 1))}
                  disabled={kids <= MIN_KIDS}
                  aria-label="Remove a child"
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <output aria-live="polite" className="w-10 text-center font-heading text-2xl font-extrabold tabular-nums">{kids}</output>
                <button
                  type="button"
                  onClick={() => setKids((k) => Math.min(MAX_KIDS, k + 1))}
                  disabled={kids >= MAX_KIDS}
                  aria-label="Add a child"
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-gradient-sunset text-white shadow-md shadow-orange-500/30 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-heading text-5xl font-extrabold leading-none tracking-tight tabular-nums">{peso(total)}</span>
                <span className="text-sm font-semibold text-slate-300">{CADENCE[cycle]}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-400 tabular-nums">
                {extra === 0
                  ? `${peso(PRO[cycle])} for 1 child · each extra child ${peso(SIBLING[cycle])}`
                  : `${peso(PRO[cycle])} + ${extra} \u00d7 ${peso(SIBLING[cycle])} for ${kids} children`}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
              {PRO_FEATURES.map((f) => <Feature key={f} text={f} dark />)}
            </ul>

            <p className="mt-6 text-sm font-semibold text-slate-400">
              Premium from {peso(649)}/mo: 100 Parent AI questions a month and catch-up support.
            </p>

            <a href="#contact" className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-sunset py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105 active:scale-[0.98]">
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Teachers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="card-premium flex flex-col p-6 text-slate-900 sm:p-8 md:col-span-2 dark:text-white"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-2xl font-extrabold">Teachers</h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">For classrooms</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20">Free</span>
            </div>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-heading text-5xl font-extrabold leading-none tracking-tight tabular-nums">{"\u20b10"}</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Nothing to buy</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3 border-t border-slate-900/5 pt-6 dark:border-white/10">
              {TEACHER_FEATURES.map((f) => <Feature key={f} text={f} />)}
            </ul>
            <a href="#contact" className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-100 py-3.5 text-sm font-extrabold text-slate-900 transition hover:bg-slate-200 active:scale-[0.98] dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              Get teacher access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
          GCash, bank or cash · No card · No auto-renewal · Up to 5 children · +40 AI questions ₱99
        </p>

      </div>
    </section>
  );
}
