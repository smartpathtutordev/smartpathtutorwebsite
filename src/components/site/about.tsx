"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1–3", label: "Grade levels covered" },
  { value: "3", label: "Core subjects" },
  { value: "100%", label: "DepEd-aligned content" },
  { value: "PH", label: "Built locally, for local learners" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built by Filipino educators, for Filipino families.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              SmartPath Tutor started in a tutoring center that ran out of
              evening slots. We wanted every child to get the same personalized,
              one-on-one help — without the commute, the cost, or the
              waiting list.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              So we built a learning app aligned with the DepEd curriculum for
              Grades 1 to 3, structured the way Filipino kids actually study, and
              priced so a parent on any budget could afford it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <div className="brand-text-gradient bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
