"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check, Loader2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const chips = [
  "DepEd MATATAG Grades 1–3",
  "100% Free for Teachers",
  "Math · Science · English · Reading",
  "English · Filipino · Cebuano · Hiligaynon",
];

const CONFETTI_COLORS = ["#fbbf24", "#7c3aed", "#ec4899", "#10b981", "#3b82f6"];

function Confetti() {
  const pieces = Array.from({ length: 22 });
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-20">
      {pieces.map((_, i) => {
        const angle = (Math.PI * 2 * i) / pieces.length + Math.random() * 0.4;
        const dist = 70 + Math.random() * 90;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist - 30;
        const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        return (
          <motion.span
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.6, rotate: 0 }}
            animate={{ opacity: 0, x, y, scale: 1, rotate: Math.random() * 360 }}
            transition={{ duration: 0.9 + Math.random() * 0.4, ease: "easeOut" }}
            style={{ backgroundColor: color }}
            className="absolute block h-2 w-2 rounded-[2px]"
          />
        );
      })}
    </div>
  );
}

type Status = "idle" | "loading" | "sent" | "error";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    try {
      // Web3Forms free plan only accepts client-side submissions — this posts
      // straight from the browser so the signup lands in smartpathtutor.dev@gmail.com.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "🎉 New SmartPath Tutor waitlist signup",
          from_name: "SmartPath Tutor Waitlist",
          email,
          message: `New waitlist signup: ${email}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      // Best-effort local backup (dev only; ignored if it fails).
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});

      setStatus("sent");
      setEmail("");
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      {/* Animated brand blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#fbbf24]/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-[#7c3aed]/25 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#ec4899]/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="mx-auto w-full max-w-xl">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex items-center justify-center gap-2.5"
        >
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <Image
              src="/spt_icon.png"
              alt="SmartPath Tutor logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="text-xl font-extrabold tracking-tight">SmartPath Tutor</span>
        </motion.div>

        {/* Badge */}
        <motion.div initial="hidden" animate="visible" custom={0.1} variants={fadeUp} className="mt-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
            <motion.span
              animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#7c3aed]" />
            </motion.span>
            Launching soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="mt-5 font-heading font-black text-balance text-4xl tracking-tight sm:text-5xl text-slate-900 dark:text-white"
        >
          Your child&rsquo;s{" "}
          <span className="bg-gradient-sunset bg-clip-text text-transparent">
            smart path
          </span>{" "}
          is almost here.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-md text-pretty text-base text-muted-foreground sm:text-lg font-sans"
        >
          A playful, DepEd MATATAG-aligned learning platform for Filipino kids across Grades 1 to 3
          &mdash; Math, English, and Science, made to feel like play with Tala.
        </motion.p>

        {/* Notify form */}
        <motion.div initial="hidden" animate="visible" custom={0.4} variants={fadeUp} className="relative mt-9">
          {status === "sent" && <Confetti />}
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#10b981]/12 px-4 py-2.5 text-sm font-semibold text-[#0f9d6f]"
            >
              <Check className="h-4 w-4" />
              You&rsquo;re on the list — we&rsquo;ll be in touch!
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto flex w-full max-w-md flex-col gap-2.5 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-11 flex-1 rounded-full border border-border/70 bg-card px-4 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-orange-400"
              />
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-gradient-sunset px-6 text-sm font-bold text-white shadow-md shadow-orange-500/20 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Notify me
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            {status === "error" ? (
              <span className="text-destructive">{error}</span>
            ) : (
              "Be the first to know when we launch. No spam, ever."
            )}
          </p>
        </motion.div>

        {/* Feature chips */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.6}
        variants={fadeUp}
        className="mt-14 text-xs text-muted-foreground"
      >
        <span>© {new Date().getFullYear()} SmartPath Tutor</span>
        <span className="mx-2">·</span>
        <span>Built with care in the Philippines 🇵🇭</span>
        <span className="mx-2">·</span>
        <a href="mailto:smartpathtutor.dev@gmail.com" className="hover:text-foreground">
          smartpathtutor.dev@gmail.com
        </a>
      </motion.div>
    </main>
  );
}
