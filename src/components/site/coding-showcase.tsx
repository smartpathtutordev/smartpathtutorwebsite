"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Play,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Gamepad2,
  Award,
  Layers,
  Cpu,
  Globe,
  Bot,
  Zap,
  HelpCircle,
  Lock,
  Flame,
  Star,
  MonitorSmartphone,
  ChevronRight,
  Compass,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

interface WorldTrack {
  id: string;
  level: string;
  title: string;
  ages: string;
  tag: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  coverImage: string;
  units: string[];
  description: string;
  highlights: string[];
}

const WORLDS: WorldTrack[] = [
  {
    id: "L0",
    level: "Level 0",
    title: "Picture Park",
    ages: "Ages 5–6 · Kindergarten to Grade 1",
    tag: "No Reading Required · Visual Blocks",
    color: "#FFB300",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/20",
    badgeText: "text-amber-700 dark:text-amber-300",
    coverImage: "/images/coding/cover_l0.jpg",
    units: ["Algorithms", "Debugging", "Loops", "Thinking Like a Computer"],
    description:
      "The perfect start for early learners! Guide Codi the Robot through colorful mazes and puzzles using picture-arrow blocks and cheerful voice narration with zero reading hurdles.",
    highlights: [
      "Directional arrow blocks (Up, Down, Left, Right)",
      "Debugging puzzles: find and fix Codi's mistaken steps",
      "Repeat patterns & simple loops",
      "Full voice read-aloud on every instruction",
    ],
  },
  {
    id: "L1",
    level: "Level 1",
    title: "Story Studio",
    ages: "Ages 6–8 · Grades 1–2",
    tag: "Interactive Stories & Cartoon Animation",
    color: "#FF7043",
    badgeBg: "bg-orange-500/10",
    badgeBorder: "border-orange-500/20",
    badgeText: "text-orange-700 dark:text-orange-300",
    coverImage: "/images/coding/cover_l1.jpg",
    units: ["Events", "Motion & Loops", "Looks & Sounds", "Storytelling"],
    description:
      "Bring characters to life on stage! Learn event triggers ('when tapped', 'when key pressed'), glide motions, sound effects, costume changes, and create multi-scene animated stories.",
    highlights: [
      "Event-driven programming (When Flag Clicked, When Tapped)",
      "Character dialogue, speech bubbles, and funny sound effects",
      "Costume animation & background switches",
      "Interactive storybooks shared with family",
    ],
  },
  {
    id: "L2",
    level: "Level 2",
    title: "Game Arcade",
    ages: "Ages 8–10 · Grades 3–4",
    tag: "Arcade & Platformer Game Mechanics",
    color: "#22C55E",
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    coverImage: "/images/coding/cover_l2.jpg",
    units: ["Decisions", "Variables", "Game Mechanics", "Game Design"],
    description:
      "Turn gamers into game makers! Build playable arcade and platformer games with real physics, coin collection, jump controls, score variables, health bars, and game-over conditions.",
    highlights: [
      "If/Then conditionals & decision logic",
      "Variables: score tracking, coin counters, and timer countdowns",
      "Collision detection & obstacle avoidance",
      "Multi-level game design with start & win screens",
    ],
  },
  {
    id: "L3",
    level: "Level 3",
    title: "Python Plaza",
    ages: "Ages 10–12 · Grades 5–6",
    tag: "Real Typed Python Programming",
    color: "#2EA8F5",
    badgeBg: "bg-sky-500/10",
    badgeBorder: "border-sky-500/20",
    badgeText: "text-sky-700 dark:text-sky-300",
    coverImage: "/images/coding/cover_l3.jpg",
    units: ["Blocks to Python", "Numbers & Variables", "Decisions & Loops", "Functions"],
    description:
      "Bridge from visual blocks to real written code! Kids type authentic Python syntax in our friendly web sandbox, printing outputs, creating math functions, and rendering digital canvas art.",
    highlights: [
      "Smooth side-by-side transition from blocks to typed Python",
      "Variables, strings, integers, and arithmetic operations",
      "For loops, while loops, and conditional statements",
      "Reusable functions and computational logic",
    ],
  },
  {
    id: "A",
    level: "Track A",
    title: "AI Explorers",
    ages: "Ages 8–12 · Elective",
    tag: "Artificial Intelligence & Smart Agents",
    color: "#A855F7",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    badgeText: "text-purple-700 dark:text-purple-300",
    coverImage: "/images/coding/cover_a.jpg",
    units: ["How Computers Learn", "Seeing & Hearing", "Smart Characters", "Safe & Fair AI"],
    description:
      "Demystify modern AI! Kids discover how neural models train, test visual classifiers, explore voice pattern recognition, and build smart interactive companions with safety and ethics.",
    highlights: [
      "Training vs inference explained in child-friendly concepts",
      "Image and sound pattern recognition experiments",
      "Building smart game characters that adapt to player moves",
      "Digital ethics: privacy, fairness, and safe AI usage",
    ],
  },
  {
    id: "B",
    level: "Track B",
    title: "Robot Workshop",
    ages: "Ages 8–12 · Elective",
    tag: "Virtual Circuits & Sensor Robotics",
    color: "#14B8A6",
    badgeBg: "bg-teal-500/10",
    badgeBorder: "border-teal-500/20",
    badgeText: "text-teal-700 dark:text-teal-300",
    coverImage: "/images/coding/cover_b.jpg",
    units: ["Robot Anatomy", "Sensors", "Automation", "Planetary Rovers"],
    description:
      "Where software meets hardware! Wire virtual microcontrollers, breadboards, ultrasonic distance sensors, and light detectors to build automated rovers that navigate alien terrains.",
    highlights: [
      "Virtual circuit wiring (LEDs, buzzers, switches, motors)",
      "Sensor inputs: light sensors, distance detectors, and buttons",
      "Automated event loops and rover obstacle avoidance",
      "Robotic engineering fundamentals without expensive physical hardware",
    ],
  },
  {
    id: "C",
    level: "Track C",
    title: "Web Town",
    ages: "Ages 9–12 · Elective",
    tag: "HTML, CSS & JavaScript Websites",
    color: "#FF6B8B",
    badgeBg: "bg-rose-500/10",
    badgeBorder: "border-rose-500/20",
    badgeText: "text-rose-700 dark:text-rose-300",
    coverImage: "/images/coding/cover_c.jpg",
    units: ["HTML Structure", "CSS Styling", "JavaScript Interactivity", "Web Safety"],
    description:
      "Build real webpages from scratch! Learn semantic HTML tags, color styling and layout with CSS, interactive button events with JavaScript, and how the global internet works safely.",
    highlights: [
      "Semantic HTML: headings, paragraphs, images, and links",
      "CSS colors, borders, fonts, card layouts, and responsive flex",
      "JavaScript interactive popups, click reactions, and forms",
      "Internet privacy, cyber safety, and digital citizenship",
    ],
  },
];

const ENGINES = [
  {
    icon: Compass,
    name: "World Engine",
    level: "Level 0",
    desc: "Grid maze navigation and directional block sequencing for early coders.",
    color: "from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Gamepad2,
    name: "Stage Engine",
    level: "Levels 1 & 2",
    desc: "Scratch-style block workspace with sprites, costumes, sound effects, and physics.",
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Code2,
    name: "Python Engine",
    level: "Level 3",
    desc: "Real browser-based Python sandbox with instant visual canvas output and error hints.",
    color: "from-sky-500/20 to-blue-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Bot,
    name: "AI Engine",
    level: "Track A",
    desc: "Visual classification labs, computer vision demos, and smart character agents.",
    color: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Cpu,
    name: "Circuit Engine",
    level: "Track B",
    desc: "Interactive virtual breadboard with simulated sensors, motors, and rovers.",
    color: "from-teal-500/20 to-emerald-500/10 text-teal-600 dark:text-teal-400",
  },
  {
    icon: Globe,
    name: "Web Engine",
    level: "Track C",
    desc: "Live HTML, CSS, and JavaScript coding sandbox with instant split-pane preview.",
    color: "from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-400",
  },
];

const CODING_PLANS = [
  {
    name: "1-Month Pass",
    price: "₱149",
    period: "/month",
    badge: "Flexible Monthly",
    desc: "Full access to all 147 lessons, 7 worlds, and creative playgrounds.",
    features: [
      "All 7 Worlds: Level 0 to Python, AI, Robotics, and Web",
      "771 hands-on guided missions with Codi the Robot",
      "6 creative playground engines with project saving",
      "Digital trophy shelf & unit badges",
      "Parent PIN dashboard with weekly progress reports",
    ],
    popular: false,
  },
  {
    name: "3-Month Pass",
    price: "₱399",
    period: "/term (90 days)",
    badge: "Most Popular",
    desc: "Save 11% — just ₱133/month. Perfect for a school term or vacation project.",
    features: [
      "Everything in the 1-Month Pass",
      "Ideal duration for completing 2 full Adventure Worlds",
      "Uninterrupted coding streak & badge collection",
      "Weekly parent email digests with skill breakdowns",
      "Pay securely with GCash, Maya, Bank Transfer, or Cards",
    ],
    popular: true,
  },
  {
    name: "12-Month Pass",
    price: "₱1,299",
    period: "/year (365 days)",
    badge: "Best Value · Save 27%",
    desc: "Just ₱108/month for an entire year of world-class computer science.",
    features: [
      "Everything in the 3-Month Pass",
      "Full 1-year mastery path from early blocks to real Python",
      "All newly released bonus coding missions & playgrounds",
      "Priority customer & parent curriculum support",
      "Single annual payment — no unexpected auto-debits",
    ],
    popular: false,
  },
];

const CODING_FAQS = [
  {
    q: "Does my child need prior experience or reading skills?",
    a: "None at all! Level 0 (Picture Park) is specially crafted for ages 5–6 with visual picture-arrow blocks, spoken audio on every instruction, and zero reading friction. As your child grows, the curriculum gently advances into stories, games, real typed Python, and web building.",
  },
  {
    q: "What devices are supported?",
    a: "SmartPath Coding runs directly in modern web browsers on laptops, desktop computers, Chromebooks, iPads, and Android tablets or phones. You can open coding.smartpathtutor.ph immediately with nothing to install.",
  },
  {
    q: "Is there a free trial, and how does payment work?",
    a: "There is no free trial — lessons and creative playgrounds unlock immediately once a prepaid pass is activated. Passes start at just ₱149/month, payable with GCash, Maya, bank transfer, or card. There are no recurring subscriptions or surprise charges — passes never renew automatically, so there is nothing to cancel.",
  },
  {
    q: "How does payment work in the Philippines?",
    a: "We support instant prepaid passes through GCash, Maya, online bank transfer, and credit/debit cards powered by PayMongo. There are no sneaky auto-renewals — you only pay again when you choose to renew.",
  },
  {
    q: "How are parents kept in the loop and children kept safe?",
    a: "SmartPath Coding is 100% ad-free and contains no open chat, external web surfing, or social links. Account settings and billing are protected behind a 4-digit Parent PIN. Parents receive automated weekly summary reports detailing lessons passed, badges earned, and concepts learned.",
  },
  {
    q: "How does SmartPath Coding relate to SmartPath Tutor?",
    a: "SmartPath Tutor is our core DepEd MATATAG curriculum platform for Grades 1–3 Math, English, and Science. SmartPath Coding is our specialized STEM & Computer Science sister platform for ages 5–12, providing early computational thinking, game design, and real Python coding.",
  },
];

export function CodingShowcase() {
  const [activeWorldId, setActiveWorldId] = useState<string>("L0");

  const activeWorld =
    WORLDS.find((w) => w.id === activeWorldId) || WORLDS[0];

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambience: Playful purple and cyan glows for Codi */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-sky-500/20 opacity-30 blur-3xl dark:opacity-20"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-700 dark:border-purple-400/30 dark:bg-purple-400/15 dark:text-purple-300"
              >
                <Code2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>SmartPath Coding · Ages 5–12</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05, ease }}
                className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
              >
                Where Filipino kids{" "}
                <span className="text-gradient-sunset">learn to code.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease }}
                className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
              >
                Meet <strong>Codi</strong>, your child&apos;s friendly robot tutor! 147 concept videos, 771 guided missions, and 6 creative coding playgrounds across 7 adventure worlds. From zero reading required to real Python, AI, and game building.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
              >
                <a
                  href="https://coding.smartpathtutor.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-sunset px-7 text-sm font-extrabold text-white shadow-xl shadow-orange-500/25 transition hover:brightness-105 active:scale-95"
                >
                  <Play className="h-4 w-4 fill-white" />
                  <span>Launch coding.smartpathtutor.ph</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#worlds"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-6 text-sm font-extrabold text-slate-800 backdrop-blur-sm transition hover:bg-white hover:text-slate-900 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
                >
                  <span>Explore the 7 Worlds</span>
                  <ArrowRight className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </a>
              </motion.div>

              {/* Quick Trust Chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-500 dark:text-slate-400"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Prepaid Access &middot; From ₱149/mo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  GCash &amp; Maya Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No Auto-Renewals &middot; Safe Parent PIN Gate
                </span>
              </motion.div>
            </div>

            {/* Right Interactive Visual: Codi Robot Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
                className="card-premium relative w-full max-w-md p-6 sm:p-7 border-2 border-purple-500/25 bg-gradient-to-b from-white via-purple-500/[0.03] to-indigo-500/[0.05] dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900"
              >
                {/* Floating Speech Bubble */}
                <div className="relative mb-4 flex items-center justify-between rounded-2xl border-2 border-purple-500/30 bg-purple-50/80 px-4 py-3 dark:border-purple-400/30 dark:bg-purple-950/40">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-purple-600 text-white shadow-xs">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="font-heading text-sm font-extrabold text-purple-950 dark:text-purple-200">
                      &quot;Hi, friend! Ready to code a game today?&quot;
                    </span>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-black text-purple-700 dark:text-purple-300">
                    Codi
                  </span>
                </div>

                {/* Codi Robot Illustration */}
                <div className="relative flex justify-center py-4">
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/coding/codi_celebrate.png"
                      alt="Codi the Coding Robot"
                      width={288}
                      height={288}
                      className="h-full w-full object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                {/* 4 Feature Counters under mascot */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-950/60">
                    <div className="font-heading text-2xl font-black text-purple-600 dark:text-purple-400">
                      147
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Video Lessons
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-950/60">
                    <div className="font-heading text-2xl font-black text-sky-600 dark:text-sky-400">
                      771
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Hands-on Tasks
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-950/60">
                    <div className="font-heading text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      7 Worlds
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Blocks to Python
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-950/60">
                    <div className="font-heading text-2xl font-black text-amber-600 dark:text-amber-400">
                      6 Engines
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Creative Playgrounds
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-purple-600/30 transition hover:bg-purple-700"
                  >
                    <span>Open Web App at coding.smartpathtutor.ph</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Learning Loop */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Pedagogical Method
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              The 4-step loop that makes{" "}
              <span className="text-gradient-sunset">coding click.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Every lesson is structured for zero intimidation and maximum accomplishment. Children never get lost or stuck.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="card-premium relative p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-black text-purple-700 dark:text-purple-300">
                    Step 01
                  </span>
                  <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                  Watch Concept Video
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Short, cheerful animated videos where Codi explains the core idea — algorithms, loops, conditionals, or variables — with everyday real-life examples.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400">
                1080p Animated HD · Voice guided
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-premium relative p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-black text-sky-700 dark:text-sky-300">
                    Step 02
                  </span>
                  <Code2 className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                  Solve Guided Mission
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  4 to 6 step-by-step interactive tasks. Codi provides instant audio hints when a child makes a mistake, celebrating correct solutions with up to 3 stars.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400">
                771 tasks · Instant feedback
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-premium relative p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-700 dark:text-emerald-300">
                    Step 03
                  </span>
                  <Gamepad2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                  Creative Playground
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  An open sandbox engine where kids apply what they learned! Remix games, animate sprites, write Python scripts, or construct rovers and save their projects.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400">
                6 Sandbox Engines · Cloud project saves
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-premium relative p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-black text-amber-700 dark:text-amber-300">
                    Step 04
                  </span>
                  <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                  Earn Digital Badges
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Kids proudly collect colorful badges and capstone trophies on their personal digital shelf, fueling intrinsic motivation and consistent daily habits.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400">
                Unit Badges · Capstone Trophies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Adventure Worlds (Interactive Explorer) */}
      <section id="worlds" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Compass className="h-3.5 w-3.5 text-orange-500" /> 7 Adventure Worlds
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Explore the <span className="text-gradient-sunset">coding universe.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Each track is a distinct world that unlocks as kids master core concepts, advancing from gentle visual blocks to typed Python, AI, and web development.
            </p>
          </div>

          {/* World Selector Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {WORLDS.map((w) => {
              const active = w.id === activeWorldId;
              return (
                <button
                  key={w.id}
                  onClick={() => setActiveWorldId(w.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition-all ${
                    active
                      ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 dark:bg-slate-800/80 dark:text-slate-300 dark:border-white/10 dark:hover:bg-slate-800"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: w.color }}
                  />
                  <span>{w.level}: {w.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active World Spotlight Card */}
          <div className="mt-8">
            <motion.div
              key={activeWorld.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="card-premium overflow-hidden border-2 border-slate-200/80 p-0 dark:border-slate-800"
            >
              <div className="grid gap-0 lg:grid-cols-12 items-stretch">
                {/* World Card Cover Image */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-900 overflow-hidden">
                  <Image
                    src={activeWorld.coverImage}
                    alt={activeWorld.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-black uppercase tracking-wider text-white border border-white/20">
                      {activeWorld.level} · {activeWorld.ages.split("·")[0].trim()}
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-black text-white drop-shadow-md">
                      {activeWorld.title}
                    </h3>
                  </div>
                </div>

                {/* World Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wider ${activeWorld.badgeBg} ${activeWorld.badgeBorder} ${activeWorld.badgeText}`}
                      >
                        {activeWorld.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {activeWorld.ages}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
                      {activeWorld.description}
                    </p>

                    {/* 4 Units in this World */}
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        4 Comprehensive Units in this World:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {activeWorld.units.map((u, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-50/60 p-2.5 text-xs font-bold text-slate-800 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200"
                          >
                            <span
                              className="h-2 w-2 rounded-full shrink-0"
                              style={{ backgroundColor: activeWorld.color }}
                            />
                            <span>Unit {i + 1}: {u}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What Your Child Learns */}
                    <div className="pt-2">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Key Learning Outcomes:
                      </p>
                      <div className="space-y-1.5">
                        {activeWorld.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      21 Lessons &amp; Capstone Project
                    </span>
                    <a
                      href="https://coding.smartpathtutor.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      <span>Try {activeWorld.title} on coding.smartpathtutor.ph</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Creative Playground Engines */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Zap className="h-3.5 w-3.5 text-orange-500" /> Open Sandbox Technology
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              6 creative engines built for{" "}
              <span className="text-gradient-sunset">limitless play.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Not just multiple-choice quizzes! SmartPath Coding runs authentic engineering tools in the browser where kids invent, experiment, and save their own software creations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGINES.map((eng, idx) => {
              const Icon = eng.icon;
              return (
                <div key={idx} className="card-premium p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${eng.color} shadow-xs`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                        {eng.level}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-xl font-black text-slate-900 dark:text-white">
                      {eng.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {eng.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Free creative sandbox included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Parent Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-500" /> Child Safety &amp; Parent Control
              </span>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Safe for kids.{" "}
                <span className="text-gradient-sunset">Peace of mind for parents.</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                We believe young children should create technology, not get consumed by it. SmartPath Coding is built from the ground up as a closed, safe educational playground.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
                    <Lock className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Parent-Only Account with PIN Gate
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
                      Account settings, passes, and preferences are locked behind a 4-digit PIN. Children can never make unintended purchases or change account details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      100% Ad-Free &middot; No Open Chat
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
                      Zero commercial advertisements, zero tracking pixels, and no unmoderated chat rooms with strangers. A safe, focused environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
                    <MonitorSmartphone className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Automated Weekly Progress Summaries
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
                      Know exactly how your child is doing: concepts mastered, missions completed, time spent, and new badges collected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic: Codi Think & Safety Callout */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="card-premium relative w-full max-w-lg p-6 sm:p-8 border-2 border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.04] to-purple-500/[0.04] dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className="h-28 w-28 shrink-0 relative">
                    <Image
                      src="/images/coding/codi_think.png"
                      alt="Codi Thinking"
                      width={112}
                      height={112}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Safe Walled Garden
                    </span>
                    <h4 className="mt-2 font-heading text-xl font-black text-slate-900 dark:text-white">
                      Designed for Filipino Homes
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 font-sans">
                      Runs smoothly on laptops, tablets, and budget phones across the Philippines.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 rounded-2xl bg-white/80 p-4 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Child Profile Security</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">COPPA &amp; DPA Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Third-Party Tracking</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">Zero Trackers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Outside Web Links</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">Blocked for Kids</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    <span>Get started on coding.smartpathtutor.ph &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Passes Section */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Simple Prepaid Access
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Affordable plans.{" "}
              <span className="text-gradient-sunset">GCash &amp; Maya ready.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Simple prepaid passes with zero automatic renewal traps. Pay only for what you need via GCash, Maya, or Card.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CODING_PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`card-premium relative flex flex-col justify-between p-6 sm:p-7 transition-all ${
                  plan.popular
                    ? "border-2 border-purple-500 ring-4 ring-purple-500/10 shadow-xl"
                    : "hover:border-purple-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${
                        plan.popular
                          ? "bg-purple-600 text-white"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    {plan.popular && (
                      <span className="flex items-center gap-1 text-xs font-extrabold text-purple-600 dark:text-purple-400">
                        <Flame className="h-3.5 w-3.5" /> Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-black text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-black text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                    {plan.desc}
                  </p>

                  <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-xs sm:text-sm font-extrabold transition active:scale-95 ${
                      plan.popular
                        ? "bg-gradient-sunset text-white shadow-md shadow-orange-500/25 hover:brightness-105"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    }`}
                  >
                    <span>Get Started on Coding App</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-bold text-slate-500 dark:text-slate-400">
            Pay safely via GCash, Maya, Bank Transfer, or Debit/Credit Cards. No automatic recurring charges.
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
              SmartPath Coding <span className="text-gradient-sunset">Questions &amp; Answers.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Everything you need to know about getting your child started on computer science and coding.
            </p>
          </div>

          <div className="mt-10">
            <Accordion className="space-y-3">
              {CODING_FAQS.map((faq) => (
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
        </div>
      </section>

      {/* Final Launch Banner */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-700 p-8 sm:p-12 text-white text-center shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-white opacity-10 blur-2xl"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ready to create?</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Start your child&apos;s coding journey today.
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                Open <strong>coding.smartpathtutor.ph</strong> in your web browser. 7 days of free play, 147 video lessons, and fun missions waiting to be unlocked.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://coding.smartpathtutor.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-black text-purple-900 shadow-xl transition hover:bg-slate-100 hover:scale-105 active:scale-95"
                >
                  <Play className="h-4 w-4 fill-purple-900" />
                  <span>Launch coding.smartpathtutor.ph</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <Link
                  href="/partner-with-us"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span>Schools &amp; Community Partnerships</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
