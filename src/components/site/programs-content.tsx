"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Ticket,
  Users,
  Gift,
  Globe,
  HeartHandshake,
  Building2,
  School,
  Award,
  Wallet,
  ArrowRight,
  Check,
  X,
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

type Program = {
  icon: typeof Ticket;
  title: string;
  badge?: string;
  body: string;
  cta: string;
  steps: { title: string; body: string }[];
  goodToKnow: string[];
};

const familyPrograms: Program[] = [
  {
    icon: Ticket,
    title: "Prepaid Voucher",
    badge: "No card needed",
    body: "Pay manually via GCash, Maya, or over-the-counter — no bank card, no auto-renew. One voucher unlocks a full month.",
    cta: "Get a voucher",
    steps: [
      { title: "Pick 1 month", body: "Choose the prepaid voucher — it unlocks every subject and the Fun Zone for 30 days." },
      { title: "Pay your way", body: "GCash, Maya, bank transfer, or over-the-counter at a partner load station — whatever's easiest for you." },
      { title: "Get your code", body: "We send a voucher code by SMS or email, usually within minutes of payment." },
      { title: "Redeem & learn", body: "Open the app, enter the code, pick your child's grade, and start. No auto-charge when it ends." },
    ],
    goodToKnow: [
      "No credit card and no bank account required",
      "Never renews automatically — you're always in control",
      "Top up again any time, whenever the budget allows",
    ],
  },
  {
    icon: Users,
    title: "Family Plan",
    badge: "Best for siblings",
    body: "Add up to 4 child profiles under one account at a lower price per child — each with their own progress.",
    cta: "See how it works",
    steps: [
      { title: "One parent account", body: "Sign up once — you'll manage everything from a single dashboard." },
      { title: "Add your kids", body: "Create up to 4 child profiles, each with their own grade level and progress." },
      { title: "Pay one family rate", body: "A single discounted price covers the whole household — cheaper than separate plans." },
      { title: "Switch any time", body: "Move a child up a grade or swap profiles whenever you need to." },
    ],
    goodToKnow: [
      "Up to 4 learners on one account",
      "Separate progress and badges per child",
      "Lower cost per child than individual plans",
    ],
  },
  {
    icon: Gift,
    title: "Refer a Kapamilya",
    badge: "Free month",
    body: "Invite another family. When they start, you both get a free month — share the learning, lower the cost.",
    cta: "How referrals work",
    steps: [
      { title: "Share your code", body: "Send your personal invite link or code to another parent." },
      { title: "They try it free", body: "Your friend signs up and starts their free week — no card needed." },
      { title: "You both get a month", body: "When they subscribe, a free month is credited to both accounts automatically." },
    ],
    goodToKnow: [
      "No limit — refer as many families as you like",
      "Free months stack and apply automatically",
      "Both sides win, every time",
    ],
  },
  {
    icon: Globe,
    title: "OFW Gift Access",
    badge: "Gift from abroad",
    body: "Working overseas? Gift a month — or a whole year — of learning to a child back home.",
    cta: "How to gift",
    steps: [
      { title: "Choose a gift", body: "Pick 1 month or a full year of access to give." },
      { title: "Pay from anywhere", body: "Pay online from your country — card, e-wallet, or bank transfer." },
      { title: "Send the code", body: "We give you a redemption code to share with the family back home." },
      { title: "They start right away", body: "Your loved one redeems it and begins learning the same day." },
    ],
    goodToKnow: [
      "Pay from abroad, learning happens in the Philippines",
      "Great for ninong/ninang and OFW parents",
      "One-time payment — no subscription to manage",
    ],
  },
];

const givebackPrograms: Program[] = [
  {
    icon: HeartHandshake,
    title: "Sponsor a Child",
    body: "Fund full access for a learner whose family can't afford it — for individuals and companies (CSR).",
    cta: "How sponsoring works",
    steps: [
      { title: "Choose your support", body: "Sponsor one child or many, as a one-time gift or monthly." },
      { title: "We match a learner", body: "Your sponsorship goes to a verified family who applied for help." },
      { title: "A child gets access", body: "They receive full SmartPath access at no cost to their family." },
      { title: "See the impact", body: "Get periodic progress updates on the learner you're supporting." },
    ],
    goodToKnow: [
      "Open to individuals and company CSR programs",
      "One-time or monthly — any amount helps",
      "Transparent updates on who you're helping",
    ],
  },
  {
    icon: Building2,
    title: "Community Discount",
    body: "Special group rates for barangays, parent associations, and community learning centers.",
    cta: "How to enroll a group",
    steps: [
      { title: "Gather a group", body: "A barangay, parent association, or learning center brings families together." },
      { title: "Tell us your headcount", body: "Send us roughly how many children will join." },
      { title: "Get a group rate", body: "We set a discounted price and a simple sign-up link for your group." },
      { title: "Families activate", body: "Each parent sets up their own child's profile and starts learning." },
    ],
    goodToKnow: [
      "The bigger the group, the better the rate",
      "Each family keeps their own private account",
      "Great for barangay and NGO programs",
    ],
  },
  {
    icon: School,
    title: "School Partnership",
    body: "Bring SmartPath to a whole classroom — teacher dashboard, bulk pricing, DepEd-aligned lessons.",
    cta: "How partnership works",
    steps: [
      { title: "Book a quick call", body: "We learn about your school, grade levels, and goals." },
      { title: "We set you up", body: "We build your class roster and a teacher dashboard." },
      { title: "Assign lessons", body: "Teachers assign DepEd-aligned lessons that match the class plan." },
      { title: "Track the class", body: "See mastery for every student in one place." },
    ],
    goodToKnow: [
      "Teacher dashboard for the whole class",
      "Bulk pricing for schools",
      "Lessons mapped to DepEd competencies",
    ],
  },
  {
    icon: Award,
    title: "Scholarship Seats",
    body: "Need-based free seats for qualifying families, including public-school and 4Ps learners.",
    cta: "How to apply",
    steps: [
      { title: "Check eligibility", body: "Fill out a short form — e.g., public-school or 4Ps learners qualify." },
      { title: "Submit proof", body: "Share a simple document like a school ID or 4Ps ID." },
      { title: "We review", body: "Our team reviews and approves qualifying applicants quickly." },
      { title: "Learn for free", body: "Approved learners get free access for the school year." },
    ],
    goodToKnow: [
      "Prioritizes public-school and 4Ps families",
      "Simple form, minimal paperwork",
      "Free access for the full school year",
    ],
  },
];

const payMethods = ["GCash", "Maya", "Over-the-counter", "Load stations", "Bank transfer"];

function ProgramCard({
  program,
  delay,
  onOpen,
}: {
  program: Program;
  delay: number;
  onOpen: () => void;
}) {
  const { icon: Icon, title, badge, body, cta } = program;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-[#7c3aed]">
          <Icon className="h-5 w-5" />
        </span>
        {badge && (
          <Badge variant="secondary" className="rounded-full text-[11px]">
            {badge}
          </Badge>
        )}
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpen}
        className="mt-5 self-start rounded-full px-3 text-[#7c3aed] hover:bg-accent"
      >
        {cta}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </motion.div>
  );
}

function ProgramDialog({
  program,
  onClose,
}: {
  program: Program | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!program) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [program, onClose]);

  if (!program) return null;
  const { icon: Icon, title, steps, goodToKnow } = program;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-card p-6 shadow-2xl ring-1 ring-foreground/10 sm:rounded-3xl sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-foreground shadow-sm">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-[#7c3aed]">How it works</p>

        <ol className="mt-5 space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-[#7c3aed]">
                {i + 1}
              </span>
              <div>
                <div className="text-sm font-bold">{s.title}</div>
                <div className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{s.body}</div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl bg-muted/60 p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Good to know
          </div>
          <ul className="mt-2 space-y-1.5">
            {goodToKnow.map((g) => (
              <li key={g} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]" />
                <span className="text-muted-foreground">{g}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button
            className="flex-1 rounded-full"
            render={<a href={`/?program=${encodeURIComponent(title)}#contact`} />}
          >
            Get started
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="rounded-full" onClick={onClose}>
            Maybe later
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export function ProgramsContent() {
  const [active, setActive] = useState<Program | null>(null);

  return (
    <main className="flex-1">
      {/* ── Hero ─────────────────────────────────────────────────── */}
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
              Programs &amp; access
            </Badge>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Learning that reaches{" "}
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
            No bank card? Tight budget? No problem. Tap any program to see exactly
            how it works &mdash; pay your own way, enroll as a group, or let a
            sponsor cover the cost.
          </motion.p>
        </div>
      </section>

      {/* ── Family programs ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ways to pay &amp; get access
            </h2>
            <p className="mt-3 text-muted-foreground">
              Flexible options built for how Filipino families actually pay.
              Tap a card for the step-by-step.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {familyPrograms.map((p, i) => (
              <ProgramCard key={p.title} program={p} delay={i * 0.06} onOpen={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment methods strip ────────────────────────────────── */}
      <section className="py-10 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-medium">
              <Wallet className="h-4 w-4 text-[#7c3aed]" /> Pay manually with:
            </span>
            {payMethods.map((m) => (
              <Badge key={m} variant="outline" className="rounded-full bg-background">
                {m}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ── Give-back programs ───────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Programs that give back
            </h2>
            <p className="mt-3 text-muted-foreground">
              Help more kids learn &mdash; as a sponsor, a community, or a school.
              Tap a card to see the steps.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {givebackPrograms.map((p, i) => (
              <ProgramCard key={p.title} program={p} delay={i * 0.06} onOpen={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-12 sm:px-12 sm:py-16 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-foreground/80">
              Tell us about your family, group, or school &mdash; we&rsquo;ll
              point you to the right option.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" className="rounded-full" render={<a href="/#contact" />}>
                Talk to us
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full hover:bg-foreground/10"
                render={<a href="/#pricing" />}
              >
                See standard pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProgramDialog program={active} onClose={() => setActive(null)} />
    </main>
  );
}
