"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PILLARS = [
  {
    title: "1-on-1 Patience for Every Learner",
    desc: "Every Filipino child deserves dedicated, encouraging attention that builds lifelong grit instead of frustration.",
  },
  {
    title: "DepEd MATATAG Aligned",
    desc: "Built directly alongside DepEd educators so 20 minutes at home leads directly to top marks in the classroom.",
  },
  {
    title: "Accessible for Every Filipino Household",
    desc: "Priced under ₱8/day with GCash and Maya voucher support so quality education is never out of reach.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-1.5 text-xs font-extrabold text-foreground shadow-xs">
              <GraduationCap className="h-3.5 w-3.5 text-[#7c3aed]" />
              <span>Our Mission &amp; Purpose</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Built by Filipino educators for{" "}
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                Filipino families.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
              We started as a local tutoring center where after-school slots were constantly packed.
              We believed every Filipino child in Kinder to Grade 6 deserved that same personalized,
              encouraging one-on-one attention — without the traffic, the steep private center fees, or the waitlists.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <Button
                variant="outline"
                render={<a href="/about" />}
                className="rounded-full text-xs font-extrabold border-border/80 bg-card hover:bg-muted text-foreground px-6 py-2.5"
              >
                Read our educator story
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-4 lg:col-span-6"
          >
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-sunset text-xs font-black text-white shadow-xs">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-foreground">{p.title}</h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed pl-11">
                  {p.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

