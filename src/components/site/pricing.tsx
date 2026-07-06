"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  saveLabel?: string;
};

const plans: Plan[] = [
  {
    name: "Monthly",
    price: "₱299",
    cadence: "/month",
    blurb: "Try it for a month. Cancel anytime.",
    features: [
      "Full access to all subjects",
      "Unlimited lessons & quizzes",
      "Weekly progress emails",
      "1 child profile",
    ],
    cta: "Start monthly",
  },
  {
    name: "Quarterly",
    price: "₱799",
    cadence: "/3 months",
    blurb: "Most parents pick this one.",
    features: [
      "Everything in Monthly",
      "Save ~₱100 vs paying monthly",
      "Up to 2 child profiles",
      "Priority chat support",
    ],
    cta: "Choose quarterly",
    highlight: true,
    saveLabel: "Most popular",
  },
  {
    name: "Annual",
    price: "₱2,999",
    cadence: "/year",
    blurb: "The best value — for committed learners.",
    features: [
      "Everything in Quarterly",
      "Save ~₱600 vs paying monthly",
      "Up to 4 child profiles",
      "Quarterly 1-on-1 progress review",
    ],
    cta: "Go annual",
    saveLabel: "Best value",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, family-friendly pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start with a free week. No card required. Switch plans any time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg",
                p.highlight
                  ? "border-amber-400/60 ring-2 ring-amber-400/40 shadow-md"
                  : "border-border/60"
              )}
            >
              {p.saveLabel && (
                <Badge
                  className={cn(
                    "absolute -top-3 right-6 rounded-full px-3 text-xs font-bold",
                    p.highlight ? "brand-gradient text-foreground border-transparent" : ""
                  )}
                >
                  {p.saveLabel}
                </Badge>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.cadence}</span>
              </div>

              <Button
                render={<a href="#contact" />}
                className={cn(
                  "mt-6 w-full rounded-full",
                  !p.highlight && "bg-secondary text-secondary-foreground hover:bg-accent"
                )}
              >
                {p.cta}
              </Button>

              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
