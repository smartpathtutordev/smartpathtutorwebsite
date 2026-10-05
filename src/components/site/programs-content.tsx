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
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
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
    title: "Prepaid Voucher Code",
    badge: "No credit card needed",
    body: "Pay manually via GCash, Maya, 7-Eleven, or over-the-counter load stations — no recurring bank charges. One 16-character code unlocks 30 days of all Grade 1–3 subjects.",
    cta: "How vouchers work",
    steps: [
      { title: "Choose 1 Month or Term", body: "Pick the prepaid voucher that fits your budget — unlocks all subjects, Tala AI tutor, and Today's Path quests." },
      { title: "Pay your way", body: "GCash, Maya, ShopeePay, Cebuana Lhuillier, Palawan Express, or over-the-counter load station." },
      { title: "Instant Voucher Code", body: "Receive your unique 16-digit voucher code instantly via SMS and email upon payment confirmation." },
      { title: "Redeem in 1 Tap", body: "Open the SmartPath app or web portal, enter the code, select your child's grade (Grades 1–3), and start learning immediately." },
    ],
    goodToKnow: [
      "No bank account or credit card required",
      "Zero auto-renewals — you are always in complete control",
      "Top up anytime whenever budget allows; child progress is never lost",
    ],
  },
  {
    icon: Users,
    title: "Family Plan (Up to 3 Children)",
    badge: "Best for siblings",
    body: "Add up to 3 child profiles under a single household account at ₱599/mo (or ₱5,990/yr). Each child maintains their own grade level, streaks, and stars.",
    cta: "Explore family pass",
    steps: [
      { title: "One Parent Dashboard", body: "Create your parent account once — manage screen time, review Bloom quiz scores, and monitor all siblings in one place." },
      { title: "Add up to 3 Child Profiles", body: "Configure individual grades for Grades 1, 2, and 3 with custom avatar choices." },
      { title: "Shared Household Value", body: "One single subscription covers the entire family across multiple devices with live Parent App syncing." },
      { title: "Switch Profiles Seamlessly", body: "Kids can swap profiles on the shared family tablet or phone with their own 4-digit child PIN." },
    ],
    goodToKnow: [
      "Up to 3 independent learners on 1 subscription (Custom Mix for 4+ kids)",
      "Separate mastery tracking, badges, and streaks per child",
      "Includes 80 Parent AI questions a month on the Parent App",
    ],
  },
  {
    icon: Gift,
    title: "Refer a Kapamilya",
    badge: "Free 1 Month",
    body: "Invite a fellow parent, cousin, or neighbor. When they start their subscription, both families receive a full bonus month of SmartPath Tutor credited automatically.",
    cta: "Referral mechanics",
    steps: [
      { title: "Get your invite link", body: "Find your unique Kapamilya referral code in the Parent Portal." },
      { title: "Share on Messenger or Viber", body: "Send your link to parents, family group chats, or school PTA groups." },
      { title: "Friend starts 7-day trial", body: "They explore DepEd MATATAG lessons with Tala with zero payment required." },
      { title: "Both get 30 days free", body: "Upon their first voucher or plan activation, 30 days are automatically credited to both accounts." },
    ],
    goodToKnow: [
      "No limit on referral rewards — stack up to 12 months free",
      "Valid for any active subscriber or prepaid voucher user",
      "Both parties receive automatic SMS & email confirmation",
    ],
  },
  {
    icon: Globe,
    title: "OFW Gift Access",
    badge: "Gift from abroad",
    body: "Working in the Middle East, Singapore, Canada, or worldwide? Directly gift a term or school year of DepEd-aligned tutoring to your children, nieces, or nephews back home.",
    cta: "Send gift to PH",
    steps: [
      { title: "Select a gift pass", body: "Choose 3-month, 6-month, or full 1-year access for your learner in the Philippines." },
      { title: "Pay internationally", body: "Pay securely via international Visa, Mastercard, PayPal, or remit partner." },
      { title: "Digital Gift Voucher", body: "We generate a customized gift voucher with your personal message sent to your family's Philippine mobile number." },
      { title: "Stay updated overseas", body: "Optionally receive weekly email progress reports to celebrate their achievements from afar." },
    ],
    goodToKnow: [
      "Pay from abroad, child learns in the Philippines",
      "Ideal for OFW parents, godparents (Ninong/Ninang), and relatives",
      "One-time payment with zero surprise subscription charges",
    ],
  },
];

const givebackPrograms: Program[] = [
  {
    icon: HeartHandshake,
    title: "Sponsor a Child (CSR)",
    body: "Fund a year of digital tutoring for underprivileged learners. Ideal for individuals, alumni groups, and corporate social responsibility (CSR) initiatives.",
    cta: "How sponsoring works",
    steps: [
      { title: "Choose sponsorship count", body: "Sponsor 1, 5, 20, or 100 learners as a one-time donation or monthly grant." },
      { title: "Verified recipient matching", body: "We partner with local public elementary schools to identify deserving 4Ps beneficiary students." },
      { title: "Digital pack deployment", body: "We provide tablet bundles or voucher codes with complete DepEd MATATAG Grade 1–3 lessons." },
      { title: "Audited impact reports", body: "Receive anonymized quarterly competency improvement metrics demonstrating real educational outcomes." },
    ],
    goodToKnow: [
      "Includes Certificate of Educational Partnership",
      "100% of sponsorship funds go directly to platform access and student tablets",
      "Transparent reporting on learning hours and quiz mastery",
    ],
  },
  {
    icon: Building2,
    title: "Barangay & Community Packs",
    body: "Subsidized group access for barangay learning hubs, day care centers, SK youth programs, and community libraries.",
    cta: "Group setup details",
    steps: [
      { title: "Contact community desk", body: "Connect with our Filipino team with your estimated number of barangay learners." },
      { title: "Local community license", body: "We set up a discounted group bundle optimized for shared community tablets." },
      { title: "Staff orientation", body: "Short 30-minute virtual or on-site briefing for barangay volunteers and educators." },
      { title: "Community hub access", body: "Tablets connect to local Wi-Fi or mobile data with low bandwidth usage." },
    ],
    goodToKnow: [
      "Tiered discounts up to 50% for local government units and non-profits",
      "Works with low-spec Android tablets and refurbished hardware",
      "Includes certificates of completion for learners",
    ],
  },
  {
    icon: School,
    title: "100% Free Teacher & Classroom Access",
    body: "Equip elementary teachers with 100% free classroom presentation tools, 1-click PowerPoint / Canva (.pptx) lesson exporters, and DepEd MATATAG Grade 1–3 assessments.",
    cta: "Get free teacher access",
    steps: [
      { title: "Instant educator registration", body: "Sign up with your DepEd or school email to unlock full educator access immediately." },
      { title: "Classroom roster setup", body: "Batch enroll class sections with student IDs and parent contact numbers." },
      { title: "Assign Today's Path modules", body: "Teachers assign specific DepEd competency modules matching the school lesson calendar." },
      { title: "Automated grading insights", body: "Review student mastery percentages, pinpoint common misconceptions, and export reports." },
    ],
    goodToKnow: [
      "Teacher console includes slides exporter for TV/projector display",
      "Fully compliant with DepEd Order No. 10 s. 2024 (MATATAG Curriculum)",
      "100% Free forever for verified Philippine educators",
    ],
  },
  {
    icon: Award,
    title: "Public School Scholarship Seats",
    body: "Annual allocation of 100% free SmartPath Tutor memberships reserved for qualified public-school students and 4Ps (Pantawid Pamilyang Pilipino) families.",
    cta: "Apply for scholarship",
    steps: [
      { title: "Verify eligibility", body: "Submit a simple verification form indicating enrolment in a Philippine public elementary school or 4Ps status." },
      { title: "Upload student ID", body: "Provide a quick photo of the learner's school ID or certificate of registration." },
      { title: "Fast-track review", body: "Our educator review board processes applications within 48 to 72 hours." },
      { title: "Full 1-year access", body: "Approved students receive completely free 365-day access to all Grade 1–3 subjects and features." },
    ],
    goodToKnow: [
      "Priority given to rural and low-income elementary students",
      "No paperwork hassle — swift digital verification",
      "Renewable each academic school year upon continued enrollment",
    ],
  },
];

const payMethods = [
  "GCash",
  "Maya",
  "ShopeePay",
  "GrabPay",
  "7-Eleven (Cliqq)",
  "Cebuana Lhuillier",
  "Palawan Express",
  "Over-the-counter Load",
  "BDO / BPI / UnionBank",
  "Visa / Mastercard",
];

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
          <Icon className="h-5 w-5" />
        </span>
        {badge && (
          <Badge variant="secondary" className="rounded-full text-[11px] font-bold border border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-300">
            {badge}
          </Badge>
        )}
      </div>
      <h3 className="mt-5 font-heading font-black text-lg text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{body}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpen}
        className="mt-5 self-start rounded-full px-3 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40 font-bold text-xs"
      >
        {cta}
        <ArrowRight className="ml-1 h-3.5 w-3.5" />
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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 sm:rounded-3xl sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-sunset text-white shadow-md shadow-orange-500/20">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-heading font-black text-2xl tracking-tight text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Step-by-Step Guide</p>

        <ol className="mt-5 space-y-3.5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-500/15 text-xs font-bold text-orange-600 dark:text-orange-400">
                {i + 1}
              </span>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{s.title}</div>
                <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{s.body}</div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Good to know
          </div>
          <ul className="mt-2.5 space-y-2">
            {goodToKnow.map((g) => (
              <li key={g} className="flex items-start gap-2 text-xs font-sans">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">{g}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Button
            className="flex-1 rounded-full bg-gradient-sunset text-white font-bold shadow-md shadow-orange-500/20 hover:opacity-95"
            render={<a href={`/?program=${encodeURIComponent(title)}#contact`} />}
          >
            Inquire About This Program
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="rounded-full text-xs font-semibold" onClick={onClose}>
            Close
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
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-background to-background dark:from-orange-950/20"
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <Badge variant="secondary" className="rounded-full px-3.5 py-1 text-xs gap-1.5 font-bold border border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Flexible Access &amp; Partnerships
            </Badge>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 font-heading font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white"
          >
            Affordable learning tailored for{" "}
            <span className="text-orange-500">
              every Filipino home
            </span>
            .
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            No credit card? Tight family budget? No problem. Choose prepaid voucher codes, family discounts, OFW gifting, or public school scholarship programs.
          </motion.p>
        </div>
      </section>

      {/* ── Family programs ──────────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="rounded-full px-3 py-0.5 text-xs font-bold border border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-300">
              Family Options
            </Badge>
            <h2 className="mt-3 font-heading font-black text-2xl tracking-tight sm:text-3xl text-slate-900 dark:text-white">
              Ways to pay &amp; get access
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
              Flexible options designed for how Filipino families actually transact. Tap any card for full details.
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
      <section className="py-10 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <Wallet className="h-4 w-4 text-orange-500" /> Supported Payment Channels:
            </span>
            {payMethods.map((m) => (
              <Badge key={m} variant="outline" className="rounded-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-xs font-semibold py-1 px-3">
                {m}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ── Give-back programs ───────────────────────────────────── */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="rounded-full px-3 py-0.5 text-xs font-bold border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300">
              Community &amp; Schools
            </Badge>
            <h2 className="mt-3 font-heading font-black text-2xl tracking-tight sm:text-3xl text-slate-900 dark:text-white">
              Programs that give back
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
              Help more children learn — as a sponsor, a barangay learning hub, or an elementary school partner.
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset p-8 sm:p-14 text-center shadow-xl shadow-orange-500/20 text-white">
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight text-white">
              Not sure which program is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90 text-sm sm:text-base font-sans">
              Tell us about your child&apos;s grade level, school, or community — our local educator team will guide you to the easiest option.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold px-7 shadow-md" render={<a href="/#contact" />}>
                Message an Educator
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 font-bold px-7"
                render={<a href="/#pricing" />}
              >
                View Standard Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProgramDialog program={active} onClose={() => setActive(null)} />
    </main>
  );
}
