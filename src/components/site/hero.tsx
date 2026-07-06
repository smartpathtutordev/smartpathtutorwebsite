"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36"
    >
      {/* Soft radial backdrop — pure CSS, no images. Keeps initial paint fast. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(251,191,36,0.30) 0%, transparent 70%), radial-gradient(40% 30% at 80% 20%, rgba(124,58,237,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Built for Grades 1–3 · Philippine DepEd curriculum
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Your child&rsquo;s{" "}
            <span className="brand-text-gradient bg-clip-text text-transparent">
              smart path
            </span>{" "}
            starts here.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Personalized Math, Science, and English lessons aligned with the
            DepEd curriculum. Bite-sized videos, instant quizzes, and progress
            you can see — built for Filipino learners in Grades 1 to 3.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" render={<a href="#pricing" />} className="rounded-full">
              Start your free week
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost" render={<a href="#how-it-works" />} className="rounded-full">
              See how it works
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground"
          >
            <span>★★★★★ trusted by Filipino parents</span>
            <span>• No credit card to start</span>
            <span>• Cancel anytime</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
