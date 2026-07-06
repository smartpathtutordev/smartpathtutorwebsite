"use client";

import { motion } from "framer-motion";
import { UserPlus, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    body: "Sign up in under a minute. Pick your child's grade level and we'll align the lessons to their DepEd track.",
  },
  {
    icon: BookOpen,
    title: "Learn in small bites",
    body: "Short, focused videos and quizzes that fit between school and family time. No marathon study sessions.",
  },
  {
    icon: Trophy,
    title: "See real progress",
    body: "Track mastery per topic. Parents get weekly progress emails — kids get badges they're proud of.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps to a smarter week
          </h2>
          <p className="mt-4 text-muted-foreground">
            No setup calls, no installs, no homework piles. Just open the app
            and learn.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-full brand-gradient text-sm font-bold text-foreground shadow">
                {i + 1}
              </div>
              <step.icon className="h-6 w-6 text-[#7c3aed]" />
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
