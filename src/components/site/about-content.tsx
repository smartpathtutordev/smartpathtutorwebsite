"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Target,
  Compass,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const values = [
  {
    icon: Heart,
    title: "Adaptive by design",
    body: "Content adjusts to how your child is doing — the right challenge at the right time, with points, streaks, and rewards that keep them coming back.",
  },
  {
    icon: Compass,
    title: "DepEd-aligned, always",
    body: "Each lesson maps to a DepEd competency for Grades 1 to 3, so what your child learns at home matches what they meet in class.",
  },
  {
    icon: ShieldCheck,
    title: "Made for Filipino families",
    body: "Built for local learners and local budgets — affordable, ad-light, and structured the way Filipino kids actually study.",
  },
];

const stats = [
  { value: "1–3", label: "Grade levels covered" },
  { value: "3", label: "Core subjects" },
  { value: "100%", label: "DepEd-aligned content" },
  { value: "PH", label: "Built locally, for local learners" },
];

export function AboutContent() {
  return (
    <main className="flex-1">
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 0%, rgba(251,191,36,0.30) 0%, transparent 70%), radial-gradient(40% 30% at 80% 20%, rgba(124,58,237,0.16) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              About SmartPath Tutor
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Adaptive, personalized learning for{" "}
            <span className="brand-text-gradient bg-clip-text text-transparent">
              every Filipino child
            </span>
            .
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-pretty text-base text-muted-foreground sm:text-lg"
          >
            We&rsquo;re a small team of Filipino educators on a simple mission:
            give every Grade 1&ndash;3 learner the same personalized, one-on-one
            attention we wished every child could have &mdash; without the
            commute, the cost, or the waiting list.
          </motion.p>
        </div>
      </section>

      {/* ── Our story ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our story</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SmartPath Tutor started in a tutoring center that ran out of
                evening slots. Parents kept asking for more time, more
                attention, more patience for their little ones &mdash; and there
                simply weren&rsquo;t enough hours in the day.
              </p>
              <p>
                So we built a learning app aligned with the DepEd curriculum for
                Grades 1 to 3, structured the way Filipino kids actually study,
                and priced so a parent on any budget could afford it. Bite-sized
                videos, instant quizzes, and progress parents can actually see.
              </p>
              <p>
                Today, SmartPath is that same one-on-one tutor &mdash; just one
                that adapts to every child and never runs out of evening slots.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission band ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-12 text-center shadow-sm"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-foreground shadow-sm">
              <Target className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Our mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg leading-relaxed">
              To make adaptive, personalized, DepEd-aligned learning affordable
              for every Filipino family &mdash; so a child&rsquo;s grade level
              is never limited by where they live or what they can pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What we believe
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three ideas shape every lesson we build.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-[#7c3aed]">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <div className="brand-text-gradient bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team / educators ────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent text-[#7c3aed]">
            <Users className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Built by Filipino educators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Teachers, tutors, and parents who&rsquo;ve sat beside real Grade 1&ndash;3
            learners &mdash; we know what makes a lesson click, and what makes a
            child want to come back tomorrow.
          </p>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-12 sm:px-12 sm:py-16 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Ready to start your child&rsquo;s smart path?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/80">
              Try a free week. No card required. Cancel anytime.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full"
                render={<a href="/#pricing" />}
              >
                See pricing
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full hover:bg-foreground/10"
                render={<a href="/#contact" />}
              >
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
