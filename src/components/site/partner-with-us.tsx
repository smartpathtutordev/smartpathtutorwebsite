"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Users,
  HeartHandshake,
  Sparkles,
  Percent,
  CheckCircle2,
  ArrowRight,
  Mail,
  Copy,
  Check,
  Send,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Award,
  Layers,
  Clock,
  Volume2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

interface PartnerProgram {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  targetAudience: string;
  discountHighlight: string;
  discountSubtext: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  suggestedSubject: string;
}

const PARTNER_PROGRAMS: PartnerProgram[] = [
  {
    id: "school-discount",
    badge: "Most Popular for Schools",
    badgeColor: "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:bg-orange-500/20 dark:text-orange-300",
    title: "School Cohort & 20% Family Discount Code",
    targetAudience: "Elementary Schools · Kindergarten to Grade 3 Departments · Private Academies",
    discountHighlight: "20% OFF for Every Family",
    discountSubtext: "₱319/mo per child (reg. ₱399/mo) with your unique school code",
    description:
      "A completely free partnership for schools. We give your school a dedicated partner code (e.g., MABINI20). Parents enter it at checkout to get 20% off all renewals, while your teachers get 100% free lifetime Teacher App accounts.",
    benefits: [
      "20% discount on all monthly, term, and annual plans for your students' families",
      "100% Free Teacher App for all faculty: assign lessons, monitor daily paths, and spot weak spots",
      "Zero school collection hassle: parents pay directly via GCash, bank transfer, or cash",
      "Bilingual audio lessons aligned to DepEd MATATAG Grades 1–3",
      "Free printable/digital parent flyers with step-by-step code instructions",
      "School coordinator access to live enrollment dashboard",
    ],
    recommendedFor: "Schools wanting to support foundational reading and math without adding school fees or administrative overhead.",
    suggestedSubject: "School Partnership Inquiry — 20% Family Discount Code",
  },
  {
    id: "community-hub",
    badge: "Community & NGO Impact",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-300",
    title: "Barangay & Community Learning Hubs",
    targetAudience: "Barangay Reading Centers · SK Youth Councils · Community Libraries · NGO Foundations",
    discountHighlight: "Subsidized Community & Grant Rates",
    discountSubtext: "Custom seat packages & shared-device multi-learner setups",
    description:
      "Turn your local barangay hall, community center, or NGO facility into a vibrant daily learning hub. Designed to run on low bandwidth and shared tablets, enabling volunteer-led reading and math circles.",
    benefits: [
      "Shared-device profile switching: multiple learners can safely use the same tablet or PC",
      "Audio-first guidance: lessons read aloud in Filipino and English, ideal for non-readers",
      "Turnkey volunteer facilitator guides for 10-minute daily reading and math stations",
      "Subsidized bulk pricing for LGU, civic club, and foundation sponsors",
      "Quarterly community literacy and numeracy impact progress reports",
      "Direct technical onboarding and train-the-facilitator workshops",
    ],
    recommendedFor: "Barangays, youth councils, and charities wanting to eradicate reading poverty in their local neighborhoods.",
    suggestedSubject: "Community Learning Hub Partnership Inquiry",
  },
  {
    id: "tutorial-center",
    badge: "After-School & Remediation",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:bg-purple-500/20 dark:text-purple-300",
    title: "Tutorial & After-School Center Integration",
    targetAudience: "Tutorial Centers · Daycare & Early Learning Centers · Reading Clinics",
    discountHighlight: "Volume Seat Tier Discounts",
    discountSubtext: "Special instructor licenses & diagnostic tools included",
    description:
      "Supercharge your tutorial center with structured 10-minute daily paths, phonics remediation, and math problem-solving aligned with current DepEd quarters.",
    benefits: [
      "Volume-tiered licensing per student seat with flexible monthly renewal",
      "DepEd CRLA-style diagnostic checks to detect reading and math gaps on Day 1",
      "Multi-student tutor supervision dashboard to guide multiple children simultaneously",
      "Stroke-by-stroke guided writing and phonics for struggling early readers",
      "Teacher Saje AI coach to instantly break down difficult concepts for tutors",
      "Co-branded learning paths and parent progress reports",
    ],
    recommendedFor: "Tutorial centers looking for a standardized, engaging digital curriculum that keeps parents happy.",
    suggestedSubject: "Tutorial Center Partnership Inquiry",
  },
  {
    id: "pta-coop",
    badge: "Parent Circles & Co-ops",
    badgeColor: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:bg-sky-500/20 dark:text-sky-300",
    title: "PTA & Parent Co-op Group Bundles",
    targetAudience: "Parent-Teacher Associations · Homeschool Co-ops · Batch Parent Circles (10+ Kids)",
    discountHighlight: "20% Group Cohort Discount",
    discountSubtext: "Group code + combined sibling rates for 10 or more families",
    description:
      "Organized by parents, for parents. Bring your class section, PTA batch, or homeschooling cooperative together to unlock a 20% group discount for everyone.",
    benefits: [
      "20% discount code for every participating family in your parent group",
      "Additional sibling savings: ₱199/mo per extra child in the same household",
      "Free parent onboarding webinar on guiding early learners without homework battles",
      "Teacher Saje AI tutor access for all parents (40 homework questions/mo included)",
      "Daily progress visibility in the Parent App without waiting for report cards",
      "Dedicated group coordinator support via WhatsApp or email",
    ],
    recommendedFor: "PTA officers, class parent representatives, and homeschooling groups seeking affordable bulk learning.",
    suggestedSubject: "PTA / Parent Group Partnership Inquiry",
  },
];

const PARTNER_FAQS = [
  {
    q: "How much does the school pay to get a 20% partner discount code?",
    a: "₱0. The partnership is 100% free for the school. There are no setup fees, no minimum commitment, and no recurring charges. Parents pay directly for their own subscriptions with a 20% discount, and all your teachers receive free lifetime Teacher App accounts.",
  },
  {
    q: "How do parents use our school's 20% discount code?",
    a: "Once your school partnership is approved, we give you a custom code (e.g., MABINI20). Parents register in the SmartPath Parent app, choose their plan, tap 'Have a code?', and type the school code. The 20% discount is applied instantly at checkout for every renewal.",
  },
  {
    q: "Is the Teacher App really free for our teachers?",
    a: "Yes, 100% free forever. Teachers can create class sections, recommend daily lessons, write practice questions, and monitor which students have completed Today's Path. Individual scores are kept private and shared only with consent.",
  },
  {
    q: "Can our school or barangay test SmartPath with a free pilot trial?",
    a: "Yes! We frequently run 2-week pilot trials for DepEd public schools, private elementary schools, and community hubs. Send us a message below and we will set up demo access for your faculty and learners.",
  },
  {
    q: "What devices do our students and teachers need?",
    a: "SmartPath works in any standard web browser on smartphones, tablets, Chromebooks, and laptops. For low-spec Android devices, we also provide lightweight APKs. No expensive hardware or server installations are required.",
  },
  {
    q: "Which curriculum does SmartPath follow?",
    a: "SmartPath is strictly aligned with the DepEd MATATAG curriculum for Grades 1, 2, and 3. It covers Math and English for all three grades, plus Science in Grade 3, with lessons progressing smoothly from Filipino to English.",
  },
];

export function PartnerWithUs() {
  const [selectedProgramId, setSelectedProgramId] = useState<string>("school-discount");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "sent">("idle");

  // Form State
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState("School Principal / Administrator");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [learnerCount, setLearnerCount] = useState("51–150 students");
  const [customNotes, setCustomNotes] = useState("");

  const selectedProgram =
    PARTNER_PROGRAMS.find((p) => p.id === selectedProgramId) || PARTNER_PROGRAMS[0];

  const buildEmailDraft = () => {
    const subject = `[Partnership Inquiry] ${selectedProgram.title} — ${orgName || "New Partner"}`;
    const body = [
      `Hello SmartPath Team,`,
      ``,
      `I would like to inquire about partnering with SmartPath Tutor for our learners.`,
      ``,
      `--- PARTNERSHIP DETAILS ---`,
      `Program Interested In: ${selectedProgram.title} (${selectedProgram.discountHighlight})`,
      `Name: ${fullName || "[Your Name]"}`,
      `Role / Title: ${role}`,
      `School / Organization: ${orgName || "[Organization Name]"}`,
      `Email: ${email || "[Your Email]"}`,
      `Contact Number: ${phone || "N/A"}`,
      `Estimated Learners (Grades 1–3): ${learnerCount}`,
      ``,
      `Message & Specific Questions:`,
      customNotes.trim() ||
        `We are interested in setting up the ${selectedProgram.discountHighlight} program for our school/community. Please send us more details on how to get our partner code and set up teacher access.`,
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
    const fullDraft = `To: sptutor.ph@gmail.com\nSubject: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(fullDraft);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const handleCopyEmailOnly = async () => {
    try {
      await navigator.clipboard.writeText("sptutor.ph@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-sunset opacity-20 blur-3xl"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
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
              <span className="text-gradient-sunset">Empower every learner.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease }}
              className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Bring DepEd MATATAG-aligned Math, Reading, and Science to Filipino kids in Grades 1–3.
              Give your families an exclusive <strong>20% discount code</strong>, equip teachers with
              100% free classroom tracking, and launch community reading hubs with zero hassle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#choose-program"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-sunset px-6 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 active:scale-95"
              >
                <span>Find the Best Program</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#inquire-form"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-6 text-sm font-extrabold text-slate-800 backdrop-blur-sm transition hover:bg-white hover:text-slate-900 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                <Mail className="h-4 w-4 text-orange-500" />
                <span>Send Partnership Email</span>
              </a>

              <Link
                href="/partner"
                className="inline-flex h-12 items-center gap-1.5 px-4 text-xs font-bold text-slate-600 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400 transition"
              >
                <span>Active Partner Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="card-premium p-4 sm:p-5 text-center">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-400">
                20% OFF
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Family Discount Code
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Instant savings for your parents
              </p>
            </div>

            <div className="card-premium p-4 sm:p-5 text-center">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                ₱0 Cost
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Free for Teachers
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                100% free lifetime Teacher App
              </p>
            </div>

            <div className="card-premium p-4 sm:p-5 text-center">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400">
                MATATAG
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Grades 1 to 3 Aligned
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Math, English &amp; Grade 3 Science
              </p>
            </div>

            <div className="card-premium p-4 sm:p-5 text-center">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-sky-600 dark:text-sky-400">
                10 Mins
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Bite-Sized Daily Path
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Audio reads aloud; no screen strain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "What's the Best Program for Us?" Section */}
      <section id="choose-program" className="scroll-mt-24 py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Tailored For Your Community
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              What’s the best program for{" "}
              <span className="text-gradient-sunset">your school or group?</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              Whether you are an elementary school principal, a barangay official, a tutorial center owner, or a PTA coordinator, we have a customized model with clear savings and dedicated onboarding.
            </p>
          </div>

          {/* Quick Program Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {PARTNER_PROGRAMS.map((program) => {
              const active = program.id === selectedProgramId;
              return (
                <button
                  key={program.id}
                  onClick={() => {
                    setSelectedProgramId(program.id);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition-all ${
                    active
                      ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 dark:bg-slate-800/80 dark:text-slate-300 dark:border-white/10 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{program.title.split("&")[0].trim()}</span>
                  {program.id === "school-discount" && (
                    <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-black text-orange-600 dark:text-orange-300">
                      20% OFF
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Program Featured Card */}
          <div className="mt-8">
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="card-premium relative overflow-hidden border-2 border-orange-500/30 bg-white p-6 sm:p-8 dark:bg-slate-900"
            >
              <div className="grid gap-8 lg:grid-cols-12 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${selectedProgram.badgeColor}`}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      {selectedProgram.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {selectedProgram.targetAudience}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {selectedProgram.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                    {selectedProgram.description}
                  </p>

                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Best Suited When:
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {selectedProgram.recommendedFor}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#inquire-form"
                      onClick={() => {
                        // Pre-select program in form
                        setSelectedProgramId(selectedProgram.id);
                      }}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-sunset px-6 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-orange-500/25 transition hover:brightness-105"
                    >
                      <span>Inquire About This Program</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-rose-500/5 p-6 dark:border-white/10 dark:bg-slate-800/50">
                  <div className="text-center sm:text-left">
                    <span className="inline-block rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                      {selectedProgram.discountHighlight}
                    </span>
                    <p className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-200">
                      {selectedProgram.discountSubtext}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Program Highlights:
                    </p>
                    {selectedProgram.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* All 4 Programs Comparison Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PARTNER_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className={`card-premium relative flex flex-col justify-between p-6 transition-all ${
                  prog.id === selectedProgramId
                    ? "ring-2 ring-orange-500 shadow-md"
                    : "hover:border-orange-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${prog.badgeColor}`}
                    >
                      {prog.badge}
                    </span>
                    <span className="text-xs font-black text-orange-600 dark:text-orange-400">
                      {prog.discountHighlight}
                    </span>
                  </div>

                  <h4 className="mt-3 font-heading text-xl font-black text-slate-900 dark:text-white">
                    {prog.title}
                  </h4>

                  <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {prog.targetAudience}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {prog.discountSubtext}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProgramId(prog.id);
                      const el = document.getElementById("inquire-form");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    <span>Select &amp; Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Simple Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Easy 4-Step Rollout
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              How our partnership <span className="text-gradient-sunset">works.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              No long paperwork, no IT installations. We can have your school or community running within 24 to 48 hours.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-premium p-6 relative">
              <span className="font-heading text-3xl font-black text-orange-500/25">01</span>
              <h4 className="mt-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                Contact &amp; Align
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                Tell us about your school, barangay, or center using the email form below. We will recommend the best program.
              </p>
            </div>

            <div className="card-premium p-6 relative">
              <span className="font-heading text-3xl font-black text-orange-500/25">02</span>
              <h4 className="mt-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                Get Partner Code &amp; Logins
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                Receive your custom 20% discount code (e.g. STJUDE20) and complimentary Teacher App credentials for your faculty.
              </p>
            </div>

            <div className="card-premium p-6 relative">
              <span className="font-heading text-3xl font-black text-orange-500/25">03</span>
              <h4 className="mt-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                Distribute to Families
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                Share our ready-made parent guides or digital flyers. Parents subscribe with 20% off directly via GCash or cards.
              </p>
            </div>

            <div className="card-premium p-6 relative">
              <span className="font-heading text-3xl font-black text-orange-500/25">04</span>
              <h4 className="mt-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                Track Learner Progress
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                Teachers monitor daily completion, assign review exercises, and see reading &amp; math confidence flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Email Inquiry Form */}
      <section id="inquire-form" className="scroll-mt-24 py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Partnership Direct Support */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="eyebrow">
                  <Mail className="h-3.5 w-3.5 text-orange-500" /> Direct Educator Support
                </span>
                <h2 className="mt-3 font-heading text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">
                  Send us an email.{" "}
                  <span className="text-gradient-sunset">We reply within 24 hours.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
                  Whether you need a 20% partner code for your school, want a demo for your teachers, or wish to sponsor a barangay hub, our educational team is ready to assist you.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="card-premium p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Official Partner Email
                      </div>
                      <a
                        href="mailto:sptutor.ph@gmail.com"
                        className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-orange-600 transition-colors"
                      >
                        sptutor.ph@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmailOnly}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition"
                  >
                    {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Feel free to send a direct message, formal letter of intent, or request for an online meeting.
                </p>
              </div>

              {/* Partner Features Checklist */}
              <div className="card-premium p-5 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  What we provide partners:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Dedicated 20% discount code for your enrolled families</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Free Teacher App accounts for all primary school faculty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Custom flyers and step-by-step parent enrollment guides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Live partner dashboard to monitor active family count</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Optional online faculty demo or parent orientation session</span>
                  </li>
                </ul>
              </div>

              {/* Existing Partner Notice */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Already a partner school?</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  If your school already has a secret link, view your live family count in our{" "}
                  <Link href="/partner" className="font-extrabold text-orange-600 hover:underline dark:text-orange-400">
                    Partner Dashboard &rarr;
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column: Pre-populated Email Form */}
            <div className="lg:col-span-7">
              <div className="card-premium p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      Partnership Inquiry Form
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Fills in a clean email draft ready to send or copy.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-extrabold text-orange-600 dark:bg-orange-500/20 dark:text-orange-300">
                    sptutor.ph@gmail.com
                  </span>
                </div>

                <form onSubmit={handleSendEmail} className="mt-6 space-y-4">
                  {/* Selected Program */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Program of Interest
                    </label>
                    <select
                      value={selectedProgramId}
                      onChange={(e) => setSelectedProgramId(e.target.value)}
                      className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    >
                      {PARTNER_PROGRAMS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.discountHighlight})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Maria Santos"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Your Role / Designation
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      >
                        <option>School Principal / Administrator</option>
                        <option>Teacher / Department Head</option>
                        <option>Barangay Official / LGU Leader</option>
                        <option>NGO / Foundation Coordinator</option>
                        <option>Tutorial Center Owner / Tutor</option>
                        <option>PTA Officer / Parent Group Lead</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        School or Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Mabini Elementary School"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Estimated Number of Learners
                      </label>
                      <select
                        value={learnerCount}
                        onChange={(e) => setLearnerCount(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      >
                        <option>10–30 students (1 section / cohort)</option>
                        <option>31–75 students (2–3 sections)</option>
                        <option>76–200 students (Grade 1–3 batch)</option>
                        <option>200+ students (Entire primary school / barangay)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="principal@school.edu.ph"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Mobile Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="0917-xxx-xxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about your classes or what questions you have (e.g., We would like a 20% discount code for our Grade 1–3 parents and free teacher accounts).`}
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      className="w-full rounded-xl border border-slate-300/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-sunset px-6 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 active:scale-[0.98]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Partnership Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-5 text-xs sm:text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-500" />
                          <span>Draft Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy Email Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  {sendStatus === "sent" && (
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-700 dark:text-emerald-300 text-center">
                      Email client opened! If your email did not pop up, click &quot;Copy Email Draft&quot; and send to{" "}
                      <strong>sptutor.ph@gmail.com</strong>.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="text-center">
            <span className="eyebrow">
              <HelpCircle className="h-3.5 w-3.5 text-orange-500" /> Clear Answers
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Partnership Frequently Asked <span className="text-gradient-sunset">Questions.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Everything you need to know about setting up a school or community program with SmartPath Tutor.
            </p>
          </div>

          <div className="mt-10">
            <Accordion className="space-y-3">
              {PARTNER_FAQS.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="card-premium border-0 px-5 transition-shadow hover:shadow-md sm:px-6"
                >
                  <AccordionTrigger className="py-4 text-left text-sm sm:text-base font-extrabold text-slate-900 hover:no-underline dark:text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
            Have a custom institutional question or special requirement?{" "}
            <a
              href="mailto:sptutor.ph@gmail.com?subject=Custom%20School%20Partnership%20Question"
              className="font-extrabold text-orange-600 hover:underline dark:text-orange-400"
            >
              Email sptutor.ph@gmail.com &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
