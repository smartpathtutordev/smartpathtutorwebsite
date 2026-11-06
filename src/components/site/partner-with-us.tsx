"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
  Copy,
  Check,
  Send,
  HelpCircle,
  ExternalLink,
  Code2,
  BookOpen,
  Building2,
  Users,
  MonitorSmartphone,
  Flame,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

interface PartnerTrack {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  discount: string;
  effectivePrice: string;
  description: string;
  benefits: string[];
}

const PARTNER_TRACKS: PartnerTrack[] = [
  {
    id: "school-cohort",
    badge: "Most Popular for Schools",
    badgeColor: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:bg-orange-500/20 dark:text-orange-300",
    title: "School Cohort & 20% Family Discount Code",
    subtitle: "For Elementary Schools · Grades 1–3 Departments · Private Academies",
    discount: "20% OFF for Every Family",
    effectivePrice: "₱319/mo per child for Tutor (reg. ₱399) · ₱119/mo for Coding (reg. ₱149)",
    description:
      "A 100% free partnership for schools. We give your school a dedicated partner code (e.g., MABINI20). Parents enter it at checkout to get 20% off all Tutor and Coding renewals, while your teachers get free lifetime classroom tools.",
    benefits: [
      "20% discount on SmartPath Tutor and SmartPath Coding for your students' families",
      "100% Free Teacher App: assign lessons, monitor daily paths, and spot weak spots",
      "Zero school collection hassle: parents pay directly via GCash, bank transfer, or cards",
      "DepEd MATATAG aligned Math, Reading & Science + Codi Coding curriculum",
      "Free printable/digital parent flyers with step-by-step code instructions",
      "Coordinator access to live family enrollment count",
    ],
  },
  {
    id: "coding-clubs",
    badge: "Computer Science & ICT",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:bg-purple-500/20 dark:text-purple-300",
    title: "School ICT Labs & Coding Club Programs",
    subtitle: "For School Computer Labs · After-School Coding Clubs · STEM Programs (Ages 5–12)",
    discount: "Bulk Lab Pricing & 20% Student Passes",
    effectivePrice: "Custom school lab packages or 20% student passes via coding.smartpathtutor.ph",
    description:
      "Bring world-class computer science to your school with Codi the Robot! 147 video lessons, 771 guided missions, and 6 sandbox engines covering visual blocks, game design, real typed Python, and AI.",
    benefits: [
      "Works in any browser on Chromebooks, PC lab computers, and tablets (no bulky software)",
      "7 Adventure Worlds: Level 0 (Picture Park) to Level 3 (Python Plaza) and AI/Robotics",
      "Lab instructor dashboard to monitor student mission progress and project saves",
      "Curriculum training and lesson plan outlines for your computer teachers",
      "7-day free trial on signup for all students and faculty",
      "Safe walled garden: zero ads, no open chat, child privacy strictly protected",
    ],
  },
  {
    id: "community-hubs",
    badge: "Community & NGO Impact",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-300",
    title: "Barangay, LGU & Community Learning Hubs",
    subtitle: "For Barangay Reading Centers · SK Youth Councils · Community Libraries · NGOs",
    discount: "Subsidized Grant & Sponsored Rates",
    effectivePrice: "Subsidized multi-device packages for community centers and foundations",
    description:
      "Transform community centers into active daily learning stations. Package foundational reading and math (SmartPath Tutor) alongside computer literacy and coding (SmartPath Coding) for neighborhood youth.",
    benefits: [
      "Shared-device profile switching: multiple learners use the same community tablet or desktop",
      "Bilingual audio-first instruction: lessons read aloud in Filipino and English for early readers",
      "Turnkey volunteer facilitator guides for 10-minute reading and coding circles",
      "Quarterly literacy, numeracy, and STEM impact reports for LGU/sponsors",
      "Direct technical onboarding and train-the-facilitator support",
    ],
  },
];

const FAQS = [
  {
    q: "How much does the school pay to get a 20% partner discount code?",
    a: "₱0. The partnership is 100% free for the school. There are no setup fees, no software maintenance costs, and no minimum commitments. Parents subscribe directly with their 20% discount code, and all your teachers receive free lifetime Teacher App accounts.",
  },
  {
    q: "Can one school partner code be used for both SmartPath Tutor and SmartPath Coding?",
    a: "Yes! Your dedicated partner code applies across both programs. Families can use it for foundational DepEd MATATAG learning (SmartPath Tutor) and introductory coding from visual blocks to Python (SmartPath Coding).",
  },
  {
    q: "Are the teacher and computer lab instructor tools free?",
    a: "Yes, 100% free forever. Teachers can create class sections, recommend lessons, monitor student completion of Today's Path, and track project saves without paying a cent.",
  },
  {
    q: "What devices do our students and schools need?",
    a: "Both SmartPath Tutor and SmartPath Coding run in any standard web browser on smartphones, tablets, Chromebooks, laptops, and desktop computers. Nothing complicated to install or maintain.",
  },
];

export function PartnerWithUs() {
  const [selectedTrack, setSelectedTrack] = useState<string>("school-cohort");
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "sent">("idle");

  // Form State
  const [programChoice, setProgramChoice] = useState("Both SmartPath Tutor & Coding");
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState("Principal / School Administrator");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [learnerCount, setLearnerCount] = useState("50–150 students");
  const [notes, setNotes] = useState("");

  const buildEmailDraft = () => {
    const subject = `[Partnership Inquiry] ${programChoice} — ${orgName || "School/Community"}`;
    const body = [
      `Hello SmartPath Team,`,
      ``,
      `I would like to inquire about partnering with SmartPath for our school/community.`,
      ``,
      `--- INQUIRY DETAILS ---`,
      `Program Interested In: ${programChoice}`,
      `Contact Person: ${fullName || "[Your Name]"}`,
      `Role / Title: ${role}`,
      `School / Organization: ${orgName || "[Organization Name]"}`,
      `Email: ${email || "[Your Email]"}`,
      `Mobile Number: ${phone || "N/A"}`,
      `Estimated Learners: ${learnerCount}`,
      ``,
      `Notes / Specific Request:`,
      notes.trim() ||
        `We would like to request a 20% discount code for our families and set up free teacher accounts. Please guide us on getting started.`,
      ``,
      `Thank you!`,
    ].join("\n");

    return { subject, body };
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject, body } = buildEmailDraft();
    const mailtoUrl = `mailto:sptutor.ph@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSendStatus("sent");
    setTimeout(() => setSendStatus("idle"), 6000);
  };

  const handleCopyDraft = async () => {
    const { subject, body } = buildEmailDraft();
    try {
      await navigator.clipboard.writeText(`To: sptutor.ph@gmail.com\nSubject: ${subject}\n\n${body}`);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyEmailOnly = async () => {
    try {
      await navigator.clipboard.writeText("sptutor.ph@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-sunset opacity-20 blur-3xl"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/15 dark:text-orange-300"
          >
            <HeartHandshake className="h-4 w-4 text-orange-500" />
            <span>School &amp; Community Partnerships</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
            className="mt-6 font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Partner with SmartPath.{" "}
            <span className="text-gradient-sunset">Foundations &amp; Coding for all.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
            className="mt-4 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Bring DepEd MATATAG Math &amp; Reading (<strong>SmartPath Tutor</strong>) and hands-on computer science (<strong>SmartPath Coding</strong>) to your learners. Get exclusive <strong>20% family discounts</strong>, 100% free teacher dashboards, and easy community onboarding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <a
              href="#programs"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-sunset px-6 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 active:scale-95"
            >
              <span>Explore Programs</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#inquire"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-6 text-sm font-extrabold text-slate-800 backdrop-blur-sm transition hover:bg-white hover:text-slate-900 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              <Mail className="h-4 w-4 text-orange-500" />
              <span>Send Partnership Email</span>
            </a>

            <Link
              href="/partner"
              className="inline-flex h-11 items-center gap-1.5 px-3 text-xs font-bold text-slate-600 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400 transition"
            >
              <span>Active Partner Portal</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2 Flagship Platforms: Tutor + Coding */}
      <section className="py-12 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Complete Learning Ecosystem
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Two programs for your school &amp; community
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Tutor Card */}
            <div className="card-premium p-6 sm:p-7 border-2 border-orange-500/25 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700 dark:text-orange-300">
                    <BookOpen className="h-3.5 w-3.5" />
                    Foundational Learning
                  </span>
                  <span className="text-xs font-black text-orange-600 dark:text-orange-400">
                    20% Discount Code
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-2xl font-black text-slate-900 dark:text-white">
                  SmartPath Tutor
                </h3>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                  Grades 1–3 · DepEd MATATAG Aligned
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  A bite-sized 10-minute daily learning path in Math, Reading, and Science. Lessons read aloud clearly in Filipino and English with the Teacher Saje AI homework coach.
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Reduces Pro plan to ₱319/mo (save 20%) for families</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>100% Free Teacher App with classroom homework tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Runs in any mobile or desktop web browser</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link href="/tutor-app" className="text-xs font-bold text-orange-600 hover:underline dark:text-orange-400">
                  See Tutor App Showcase &rarr;
                </Link>
                <a href="#inquire" className="text-xs font-extrabold text-slate-800 hover:text-orange-600 dark:text-slate-200">
                  Inquire for School &rarr;
                </a>
              </div>
            </div>

            {/* Coding Card */}
            <div className="card-premium p-6 sm:p-7 border-2 border-purple-500/25 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-purple-700 dark:text-purple-300">
                    <Code2 className="h-3.5 w-3.5" />
                    Computer Science &amp; STEM
                  </span>
                  <span className="text-xs font-black text-purple-600 dark:text-purple-400">
                    20% Passes &amp; Lab Packs
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-2xl font-black text-slate-900 dark:text-white">
                  SmartPath Coding
                </h3>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                  Ages 5–12 · Blocks, Games, Python &amp; AI
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Meet Codi the Robot! 147 concept videos, 771 guided missions, and 6 sandbox engines across 7 adventure worlds. Zero experience needed to build games, animations, and real Python code.
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>20% off coding passes (starts at ~₱119/mo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Perfect for school ICT labs, coding clubs &amp; youth centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Live web app at coding.smartpathtutor.ph with 7-day trial</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link href="/coding" className="text-xs font-bold text-purple-600 hover:underline dark:text-purple-400">
                  See Coding Showcase &rarr;
                </Link>
                <a href="https://coding.smartpathtutor.ph" target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold text-slate-800 hover:text-purple-600 dark:text-slate-200">
                  Open coding.smartpathtutor.ph ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Partnership Tracks */}
      <section id="programs" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="eyebrow">
              <Building2 className="h-3.5 w-3.5 text-orange-500" /> 3 Simple Models
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Choose the program that fits <span className="text-gradient-sunset">your needs.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PARTNER_TRACKS.map((t) => (
              <div
                key={t.id}
                className="card-premium p-6 flex flex-col justify-between border-2 border-slate-200/80 hover:border-orange-500/40 transition-all dark:border-slate-800"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${t.badgeColor}`}>
                      {t.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.subtitle}
                  </p>

                  <div className="mt-3 rounded-xl bg-orange-500/10 p-2.5 text-xs font-bold text-orange-800 dark:bg-orange-500/15 dark:text-orange-300">
                    {t.discount}
                    <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                      {t.effectivePrice}
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {t.description}
                  </p>

                  <ul className="mt-5 space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-sans">
                    {t.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="#inquire"
                    onClick={() => {
                      if (t.id === "coding-clubs") {
                        setProgramChoice("SmartPath Coding (STEM & Python)");
                      } else if (t.id === "school-cohort") {
                        setProgramChoice("Both SmartPath Tutor & Coding");
                      } else {
                        setProgramChoice("Community Hub Sponsorship");
                      }
                    }}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-900 py-2.5 text-xs font-extrabold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    <span>Inquire About This Program</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Email Inquiry Form */}
      <section id="inquire" className="scroll-mt-20 py-16 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="card-premium p-6 sm:p-8 border-2 border-orange-500/25 bg-white dark:bg-slate-900">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-6">
              <span className="eyebrow">
                <Mail className="h-3.5 w-3.5 text-orange-500" /> Fast Educator Response
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Send a partnership inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                We respond within 24 hours with your custom 20% discount code, teacher logins, and parent guide flyers.
              </p>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              {/* Program Choice Radio / Pills */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                  What program are you interested in?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Both SmartPath Tutor & Coding",
                    "SmartPath Tutor (Math & Reading)",
                    "SmartPath Coding (STEM & Python)",
                  ].map((p) => {
                    const sel = programChoice === p;
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setProgramChoice(p)}
                        className={`rounded-xl border p-2.5 text-left text-xs font-bold transition ${
                          sel
                            ? "border-orange-500 bg-orange-500/10 text-orange-950 dark:border-orange-400 dark:bg-orange-400/20 dark:text-white"
                            : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`h-3 w-3 rounded-full border flex items-center justify-center ${sel ? "border-orange-500 bg-orange-500" : "border-slate-400"}`}>
                            {sel && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="line-clamp-1">{p}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Maria Santos"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    School / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., St. Jude Academy / Brgy. San Isidro"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Your Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  >
                    <option>Principal / School Administrator</option>
                    <option>Primary School Teacher</option>
                    <option>Computer / ICT Teacher</option>
                    <option>Barangay / LGU Official</option>
                    <option>NGO / Foundation Coordinator</option>
                    <option>Tutorial Center Owner</option>
                    <option>PTA Leader</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@school.edu.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Learner Count (Estimate)
                  </label>
                  <select
                    value={learnerCount}
                    onChange={(e) => setLearnerCount(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  >
                    <option>10–30 students (1 class)</option>
                    <option>31–75 students (2–3 sections)</option>
                    <option>76–200 students (Grade batch)</option>
                    <option>200+ students (Entire school / barangay)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any questions or specific needs (e.g. We want to test coding in our Grade 3 classes and get a 20% code for parents)."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-orange-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-sunset px-6 text-sm font-extrabold text-white shadow-md shadow-orange-500/25 transition hover:brightness-105 active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Partnership Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email Draft</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                Direct email:{" "}
                <button
                  type="button"
                  onClick={handleCopyEmailOnly}
                  className="font-bold text-slate-900 underline dark:text-white hover:text-orange-600"
                >
                  sptutor.ph@gmail.com
                </button>
                {copiedEmail && <span className="ml-2 text-emerald-600 font-bold">Copied!</span>}
              </div>

              {sendStatus === "sent" && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-700 dark:text-emerald-300 text-center">
                  Email client opened! If your email did not pop up, click &quot;Copy Email Draft&quot; and send to <strong>sptutor.ph@gmail.com</strong>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Simplified FAQs */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center mb-8">
            <span className="eyebrow">
              <HelpCircle className="h-3.5 w-3.5 text-orange-500" /> Quick Answers
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Partnership Questions
            </h2>
          </div>

          <Accordion className="space-y-3">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="card-premium border-0 px-5 transition-shadow hover:shadow-md sm:px-6"
              >
                <AccordionTrigger className="py-3.5 text-left text-sm sm:text-base font-extrabold text-slate-900 hover:no-underline dark:text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
