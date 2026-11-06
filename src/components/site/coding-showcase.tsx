"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Play,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Bot,
  Gamepad2,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CodingSampleLesson } from "@/components/site/coding-sample-lesson";

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
  units: string[];
  description: string;
  skills: string[];
}

const WORLDS: WorldTrack[] = [
  {
    id: "L0",
    level: "Level 0",
    title: "Picture Park",
    ages: "Ages 5–6 · K to Grade 1",
    tag: "Zero Reading Required · Picture Blocks",
    color: "#FFB300",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/20",
    badgeText: "text-amber-700 dark:text-amber-300",
    units: ["Algorithms", "Debugging", "Loops", "Computer Thinking"],
    description:
      "Guide Codi through colorful mazes with picture-arrow blocks and cheerful spoken audio.",
    skills: ["Step-by-step algorithms", "Visual debugging", "Pattern repeats", "Full audio voiceover"],
  },
  {
    id: "L1",
    level: "Level 1",
    title: "Story Studio",
    ages: "Ages 6–8 · Grades 1–2",
    tag: "Interactive Stories & Cartoons",
    color: "#FF7043",
    badgeBg: "bg-orange-500/10",
    badgeBorder: "border-orange-500/20",
    badgeText: "text-orange-700 dark:text-orange-300",
    units: ["Events", "Motion & Loops", "Looks & Sounds", "Storytelling"],
    description:
      "Bring characters to life on stage! Learn event triggers ('when tapped'), glide motions, dialogue, and costume changes.",
    skills: ["Event listeners", "Speech bubbles & audio", "Costume animations", "Story sequencing"],
  },
  {
    id: "L2",
    level: "Level 2",
    title: "Game Arcade",
    ages: "Ages 8–10 · Grades 3–4",
    tag: "Arcade & Platformer Physics",
    color: "#22C55E",
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    units: ["Decisions", "Variables", "Game Mechanics", "Game Design"],
    description:
      "Turn gamers into game makers! Build playable arcade platformers with coin scoring, jump physics, and health bars.",
    skills: ["If/Then conditionals", "Score & timer variables", "Collision physics", "Win/Lose screens"],
  },
  {
    id: "L3",
    level: "Level 3",
    title: "Python Plaza",
    ages: "Ages 10–12 · Grades 5–6",
    tag: "Real Typed Python Coding",
    color: "#2EA8F5",
    badgeBg: "bg-sky-500/10",
    badgeBorder: "border-sky-500/20",
    badgeText: "text-sky-700 dark:text-sky-300",
    units: ["Blocks to Python", "Numbers & Logic", "Loops & Lists", "Functions"],
    description:
      "Bridge from visual blocks to real written code in our gentle browser Python sandbox.",
    skills: ["Real Python syntax", "Variables & arithmetic", "For/While loops", "Custom functions"],
  },
  {
    id: "A",
    level: "Elective A",
    title: "AI Explorers",
    ages: "Ages 8–12",
    tag: "Machine Learning & Smart Vision",
    color: "#A855F7",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    badgeText: "text-purple-700 dark:text-purple-300",
    units: ["How AI Sees", "Training Models", "Smart Games", "AI Ethics"],
    description:
      "Kid-friendly artificial intelligence: train computer vision models and program smart game characters.",
    skills: ["Image classification", "Dataset training", "Autonomous behavior", "Safe AI usage"],
  },
  {
    id: "B",
    level: "Elective B",
    title: "Virtual Robotics",
    ages: "Ages 8–12",
    tag: "Simulated Circuits & Motors",
    color: "#14B8A6",
    badgeBg: "bg-teal-500/10",
    badgeBorder: "border-teal-500/20",
    badgeText: "text-teal-700 dark:text-teal-300",
    units: ["Virtual Breadboards", "LEDs & Buzzers", "Distance Sensors", "Robotic Rover"],
    description:
      "Learn physical computing on a virtual hardware simulator with zero wires to buy or lose.",
    skills: ["Breadboard wiring", "Sensor inputs", "Motor speed outputs", "Obstacle rovers"],
  },
  {
    id: "C",
    level: "Elective C",
    title: "Web Creators",
    ages: "Ages 9–12",
    tag: "Real HTML, CSS & JavaScript",
    color: "#F43F5E",
    badgeBg: "bg-rose-500/10",
    badgeBorder: "border-rose-500/20",
    badgeText: "text-rose-700 dark:text-rose-300",
    units: ["HTML Skeleton", "CSS Styling", "JavaScript Clicks", "Publish a Site"],
    description:
      "Build real web pages with split-screen preview and export ready-to-share mini-sites.",
    skills: ["HTML tags & structure", "Colors, fonts & CSS", "Button interactions", "Web publishing"],
  },
];

const CODING_PLANS = [
  {
    name: "1-Month Pass",
    price: "₱249",
    period: "/month (30 days)",
    badge: "Flexible Starter",
    desc: "Full access to all 147 lessons, 7 worlds, and 6 creative playground engines.",
    features: [
      "All 7 Worlds: Picture Park to Python, AI, and Web",
      "771 hands-on guided missions with Codi the Robot",
      "6 creative playground engines with project saving",
      "Parent PIN dashboard with weekly progress reports",
      "Prepaid: zero sneaky auto-renewals or cancellation traps",
    ],
    popular: false,
  },
  {
    name: "3-Month Pass",
    price: "₱649",
    period: "/term (90 days)",
    badge: "Most Popular · Save 13%",
    desc: "Just ~₱216/month. Perfect for a full school term or vacation project.",
    features: [
      "Everything in the 1-Month Pass",
      "Ideal duration to complete 2 full Adventure Worlds",
      "Uninterrupted coding streak & badge collection",
      "Weekly parent email digests with skill breakdowns",
      "Pay securely with GCash, Maya, Bank Transfer, or Cards",
    ],
    popular: true,
  },
  {
    name: "12-Month Pass",
    price: "₱1,999",
    period: "/year (365 days)",
    badge: "Best Value · Save 33%",
    desc: "Just ~₱166/month for an entire year of world-class computer science.",
    features: [
      "Everything in the 3-Month Pass",
      "Full 1-year mastery path from early blocks to typed Python",
      "All newly released bonus coding missions & playgrounds",
      "Priority customer & curriculum support",
      "Single annual prepaid pass — no unexpected auto-debits",
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
    q: "Is there a free trial, and how does payment work?",
    a: "There is no free trial — lessons and creative playgrounds unlock immediately once a prepaid pass is activated. Passes start at just ₱249/month, payable with GCash, Maya, bank transfer, or card. There are no recurring subscriptions or surprise charges — passes never renew automatically, so there is nothing to cancel.",
  },
  {
    q: "What devices are supported?",
    a: "SmartPath Coding runs directly in modern web browsers on laptops, desktop computers, Chromebooks, iPads, and Android tablets or phones. You can open coding.smartpathtutor.ph immediately with nothing to install.",
  },
  {
    q: "How does SmartPath Coding relate to SmartPath Tutor?",
    a: "SmartPath Tutor is our core DepEd MATATAG curriculum platform for Grades 1–3 Math, English, and Science. SmartPath Coding is our specialized STEM & Computer Science sister platform for ages 5–12, providing early computational thinking, game design, and real Python coding.",
  },
];

// High-fidelity, representative UI Mockup Component for each world
function WorldAppMockup({ worldId }: { worldId: string }) {
  switch (worldId) {
    case "L0":
      // Level 0: Picture Park (Visual Arrow Block Maze)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 p-4 border border-amber-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
            <span className="text-[11px] font-black text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              Picture Park · Level 0 Maze
            </span>
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-300">
              Voice Guided 🔊
            </span>
          </div>

          {/* Maze Grid Simulation */}
          <div className="my-2 grid grid-cols-4 gap-2 rounded-xl bg-white/90 p-3 shadow-inner dark:bg-slate-900">
            <div className="flex h-14 items-center justify-center rounded-lg border-2 border-purple-500 bg-purple-500/15">
              <div className="relative h-9 w-9">
                <Image src="/images/coding/app-icon.png" alt="Codi" fill className="object-contain" />
              </div>
            </div>
            <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
              <span className="text-amber-500 text-lg">⭐</span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
              <span className="text-amber-500 text-lg">⭐</span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-lg border-2 border-emerald-500/40 bg-emerald-500/10">
              <div className="relative h-9 w-9">
                <Image src="/images/coding/props/sari_sari.png" alt="Store" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Block Palette */}
          <div className="flex items-center gap-2 pt-1 border-t border-amber-500/20">
            <span className="text-[10px] font-black text-slate-500">Program:</span>
            <span className="rounded-lg bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">⬆ Forward</span>
            <span className="rounded-lg bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">⬆ Forward</span>
            <span className="rounded-lg bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">⬆ Forward</span>
          </div>
        </div>
      );

    case "L1":
      // Level 1: Story Studio (Animation Stage & Event Blocks)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50/60 p-4 border border-orange-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-2">
            <span className="text-[11px] font-black text-orange-700 dark:text-orange-300 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Story Studio · Stage &amp; Events
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
              ⚑ Green Flag Active
            </span>
          </div>

          {/* Stage View with Character and Speech */}
          <div className="relative my-2 h-28 rounded-xl bg-gradient-to-b from-sky-100 to-indigo-50 p-3 shadow-inner dark:from-slate-950 dark:to-slate-900 flex items-end justify-between">
            <div className="space-y-1">
              <div className="rounded-xl border border-purple-500/30 bg-white px-2.5 py-1 text-[11px] font-extrabold text-purple-900 shadow-sm dark:bg-slate-900 dark:text-purple-200">
                &quot;Kumusta, kaibigan!&quot;
              </div>
              <div className="relative h-12 w-12 ml-2">
                <Image src="/images/coding/codi_wave.png" alt="Codi" fill className="object-contain" />
              </div>
            </div>
            <div className="text-right space-y-1">
              <span className="rounded-lg bg-amber-500 px-2 py-0.5 text-[9px] font-black text-white">
                Sound: 🎵 Meow!
              </span>
            </div>
          </div>

          {/* Event Blocks Tray */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-orange-500/20 text-[10px] font-black text-white">
            <span className="rounded-md bg-emerald-600 px-2 py-0.5">When ⚑ Clicked</span>
            <span className="rounded-md bg-purple-600 px-2 py-0.5">Say &quot;Kumusta!&quot;</span>
            <span className="rounded-md bg-sky-600 px-2 py-0.5">Glide 1s to center</span>
          </div>
        </div>
      );

    case "L2":
      // Level 2: Game Arcade (Platformer & Physics)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/60 p-4 border border-emerald-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
            <span className="text-[11px] font-black text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <Gamepad2 className="h-3.5 w-3.5" />
              Game Arcade · 2D Physics Canvas
            </span>
            <span className="font-mono text-[11px] font-black text-emerald-800 dark:text-emerald-300">
              SCORE: 340 · ♥♥♥
            </span>
          </div>

          {/* Arcade Game Canvas */}
          <div className="relative my-2 h-28 rounded-xl bg-slate-900 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
              <span>🪙 × 14 COINS</span>
              <span>TIME: 42s</span>
            </div>
            <div className="relative flex items-center justify-between px-4">
              <div className="h-7 w-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs shadow-lg">
                👾
              </div>
              <div className="h-4 w-12 rounded bg-emerald-600/60" />
              <div className="text-amber-400 text-lg">🪙</div>
            </div>
            <div className="h-2 w-full rounded bg-emerald-800" />
          </div>

          {/* Game Logic Blocks */}
          <div className="flex items-center gap-1.5 pt-1 border-t border-emerald-500/20 text-[10px] font-black text-white">
            <span className="rounded-md bg-amber-600 px-2 py-0.5">If Touches 🪙</span>
            <span className="rounded-md bg-emerald-600 px-2 py-0.5">Score +10</span>
            <span className="rounded-md bg-purple-600 px-2 py-0.5">Play Jump SFX</span>
          </div>
        </div>
      );

    case "L3":
      // Level 3: Python Plaza (Real Typed Python IDE)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50/60 p-4 border border-sky-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-sky-500/20 pb-2">
            <span className="text-[11px] font-black text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5" />
              Python Plaza · main.py
            </span>
            <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-bold text-sky-700 dark:text-sky-300">
              Python 3.12 Web Sandbox
            </span>
          </div>

          {/* Real Python Code Editor Mockup */}
          <div className="my-2 grid grid-cols-12 gap-2 h-28 rounded-xl bg-slate-950 p-2.5 font-mono text-[10px] text-slate-300 shadow-inner overflow-hidden">
            <div className="col-span-7 space-y-1 border-r border-slate-800 pr-2">
              <div className="text-slate-500"># Draw glowing star pattern</div>
              <div><span className="text-purple-400">import</span> turtle</div>
              <div>codi = turtle.<span className="text-sky-400">Turtle</span>()</div>
              <div><span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-amber-400">range</span>(8):</div>
              <div className="pl-3">codi.<span className="text-sky-400">forward</span>(60)</div>
              <div className="pl-3">codi.<span className="text-sky-400">right</span>(135)</div>
            </div>
            <div className="col-span-5 flex flex-col items-center justify-center bg-slate-900/60 rounded-lg p-1 text-center">
              <span className="text-sky-400 text-xl font-bold animate-spin" style={{ animationDuration: "12s" }}>
                ✳️
              </span>
              <span className="text-[9px] text-slate-400 mt-1 font-sans font-bold">Canvas Output</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-sky-500/20 text-[10px] font-mono text-slate-500">
            <span>&gt; Python execution: 0 errors</span>
            <span className="text-emerald-500 font-bold">Output: 100% OK</span>
          </div>
        </div>
      );

    case "A":
      // Elective A: AI Explorers (Machine Learning Vision Scanner)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50/60 p-4 border border-purple-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
            <span className="text-[11px] font-black text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
              <Bot className="h-3.5 w-3.5" />
              AI Explorers · Vision Model Trainer
            </span>
            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-700 dark:text-purple-300">
              Neural Net Live
            </span>
          </div>

          {/* AI Vision Scanner View */}
          <div className="relative my-2 h-28 rounded-xl bg-slate-950 p-3 shadow-inner flex items-center justify-between">
            <div className="relative h-20 w-24 rounded-lg border-2 border-dashed border-purple-400 bg-purple-950/40 flex items-center justify-center">
              <span className="text-3xl">🥭</span>
              <div className="absolute top-1 left-1 text-[8px] font-mono bg-purple-600 text-white px-1 rounded">
                OBJECT_TRACK
              </div>
            </div>

            <div className="space-y-1.5 pl-3 flex-1 font-mono text-[10px]">
              <div className="text-slate-300 font-sans font-bold">Class Predictions:</div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>1. Fresh Mango</span>
                <span className="font-black">98.4%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[98%]" />
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>2. Banana</span>
                <span>1.6%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-purple-500/20 text-[10px] font-bold text-purple-700 dark:text-purple-300">
            <span>Status: Model trained with 100 photo samples</span>
          </div>
        </div>
      );

    case "B":
      // Elective B: Virtual Robotics (Circuit Breadboard & Rover)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50/60 p-4 border border-teal-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-2">
            <span className="text-[11px] font-black text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5" />
              Virtual Robotics · Hardware Simulator
            </span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
              Circuit Live ⚡
            </span>
          </div>

          {/* Virtual Breadboard Simulation */}
          <div className="my-2 h-28 rounded-xl bg-slate-900 p-2.5 shadow-inner flex items-center justify-around font-mono text-[10px]">
            <div className="flex flex-col items-center gap-1 bg-slate-800 p-2 rounded-lg border border-slate-700">
              <span className="text-xs text-teal-300 font-bold">MicroController</span>
              <span className="text-[9px] text-emerald-400">Pin 2: HIGH (5V)</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-ping" />
              <span className="text-[9px] text-slate-400 mt-1">LED Glowing</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-slate-800 p-2 rounded-lg border border-slate-700">
              <span className="text-xs text-sky-300 font-bold">Distance Sensor</span>
              <span className="text-[9px] text-amber-400">18 cm (Clear)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-teal-500/20 text-[10px] font-black text-teal-800 dark:text-teal-300">
            <span>Obstacle Avoidance Logic: Active</span>
            <span className="text-emerald-500">Rover Motors: ON</span>
          </div>
        </div>
      );

    case "C":
    default:
      // Elective C: Web Creators (Real Split-Screen HTML/CSS Web Workstation)
      return (
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/60 p-4 border border-rose-500/20 flex flex-col justify-between dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
            <span className="text-[11px] font-black text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              Web Creators · index.html + Live Preview
            </span>
            <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-700 dark:text-rose-300">
              Split Screen Editor
            </span>
          </div>

          {/* Split Screen Web Workstation */}
          <div className="my-2 grid grid-cols-12 gap-2 h-28 rounded-xl bg-slate-950 p-2.5 font-mono text-[10px] shadow-inner overflow-hidden">
            {/* Left: Real HTML/CSS Code */}
            <div className="col-span-6 space-y-0.5 text-slate-300 border-r border-slate-800 pr-2">
              <div className="text-slate-500">&lt;!-- Kid Web Project --&gt;</div>
              <div>&lt;<span className="text-rose-400">div</span> <span className="text-sky-300">class</span>=<span className="text-amber-300">&quot;shop&quot;</span>&gt;</div>
              <div className="pl-2">&lt;<span className="text-rose-400">h1</span>&gt;🍧 Lola&apos;s Treats&lt;/<span className="text-rose-400">h1</span>&gt;</div>
              <div className="pl-2">&lt;<span className="text-rose-400">button</span>&gt;Order&lt;/<span className="text-rose-400">button</span>&gt;</div>
              <div>&lt;/<span className="text-rose-400">div</span>&gt;</div>
            </div>

            {/* Right: Real Rendered Webpage Preview */}
            <div className="col-span-6 rounded-lg bg-white p-2.5 flex flex-col justify-between text-slate-900 shadow font-sans">
              <div className="border-b border-slate-100 pb-1 flex items-center justify-between">
                <span className="font-heading font-black text-xs text-purple-900">🍧 Lola&apos;s Treats</span>
                <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1 rounded font-bold">LIVE</span>
              </div>
              <p className="text-[9px] text-slate-600 leading-tight">Fresh halo-halo &amp; warm pandesal!</p>
              <button type="button" className="rounded-md bg-purple-600 py-1 text-center text-[9px] font-extrabold text-white shadow-sm">
                Order Online ➔
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-rose-500/20 text-[10px] font-bold text-rose-700 dark:text-rose-300">
            <span>Real HTML5 tags &middot; CSS styling &middot; JavaScript buttons</span>
            <span className="text-emerald-500 font-extrabold">Instant Export</span>
          </div>
        </div>
      );
  }
}

export function CodingShowcase() {
  const [activeWorldId, setActiveWorldId] = useState<string>("L0");
  const activeWorld = WORLDS.find((w) => w.id === activeWorldId) || WORLDS[0];

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-sky-500/20 opacity-30 blur-3xl dark:opacity-20"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            
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
                Meet <strong>Codi</strong>, your child&apos;s friendly robot tutor! 147 video lessons, 771 guided missions, and 6 creative coding playgrounds across 7 adventure worlds. From zero reading required to real Python, AI, and game building.
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
                  href="#sample-lesson"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 text-sm font-extrabold text-purple-700 hover:bg-purple-500/20 dark:border-purple-400/30 dark:bg-purple-400/15 dark:text-purple-300"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Play Full Lesson Demo ↓</span>
                </a>
              </motion.div>

              {/* Quick Trust Chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-bold text-slate-500 dark:text-slate-400"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Prepaid Access &middot; From ₱249/mo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  GCash &amp; Maya Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No Auto-Renewals &middot; Safe Parent PIN
                </span>
              </motion.div>
            </div>

            {/* Right Codi Mascot Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="card-premium relative w-full max-w-sm p-6 text-center shadow-xl border-purple-500/20"
              >
                <div className="relative mx-auto h-56 w-56 transition-transform hover:scale-105">
                  <Image
                    src="/images/coding/codi_celebrate.png"
                    alt="Codi the Robot"
                    width={224}
                    height={224}
                    className="h-full w-full object-contain drop-shadow-lg"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-900/60">
                    <div className="font-heading text-lg font-black text-purple-600 dark:text-purple-400">147</div>
                    <div className="text-[10px] font-bold text-slate-500">Videos</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-900/60">
                    <div className="font-heading text-lg font-black text-sky-600 dark:text-sky-400">771</div>
                    <div className="text-[10px] font-bold text-slate-500">Missions</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-900/60">
                    <div className="font-heading text-lg font-black text-emerald-600 dark:text-emerald-400">7</div>
                    <div className="text-[10px] font-bold text-slate-500">Worlds</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-900/60">
                    <div className="font-heading text-lg font-black text-amber-600 dark:text-amber-400">6</div>
                    <div className="text-[10px] font-bold text-slate-500">Engines</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED: Complete Lesson Demo (Video -> Mission -> Playground) */}
      <section id="sample-lesson" className="py-12 sm:py-16 bg-purple-500/[0.03] border-y border-purple-500/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" /> Real Lesson Showcase
            </span>
            <h2 className="mt-2 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              No free trial? <span className="text-gradient-sunset">Experience a full lesson right here!</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              See the complete 3-step learning loop: <strong>1. Watch Concept Video</strong> ➔ <strong>2. Guided Mission</strong> ➔ <strong>3. Creative Playground</strong>!
            </p>
          </div>

          <CodingSampleLesson />
        </div>
      </section>

      {/* 7 Adventure Worlds (Interactive Curriculum with Representative Mockups) */}
      <section id="worlds" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <BookOpen className="h-3.5 w-3.5 text-orange-500" /> Complete Curriculum
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              7 Adventure Worlds. <span className="text-gradient-sunset">Ages 5 to 12.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              A continuous mastery path from picture blocks to real written Python, AI, and game building.
            </p>
          </div>

          {/* Quick World Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {WORLDS.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setActiveWorldId(w.id)}
                className={`rounded-2xl px-4 py-2 text-xs font-black transition-all ${
                  activeWorldId === w.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                <span>{w.level}: {w.title}</span>
              </button>
            ))}
          </div>

          {/* Active World Card with Representative Code Mockup */}
          <div className="mt-8">
            <div className="card-premium grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-12 border-purple-500/20 shadow-xl">
              
              {/* Left: Authentic Representative Workstation Mockup */}
              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900 shadow-md">
                <WorldAppMockup worldId={activeWorld.id} />
              </div>

              {/* Right: World Details */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-extrabold ${activeWorld.badgeBg} ${activeWorld.badgeText} border ${activeWorld.badgeBorder}`}>
                      {activeWorld.ages}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      {activeWorld.level} · {activeWorld.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {activeWorld.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeWorld.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {activeWorld.skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Units: <span className="font-bold text-slate-800 dark:text-slate-200">{activeWorld.units.join(" · ")}</span>
                  </div>
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-purple-600 hover:text-purple-700 dark:text-purple-400"
                  >
                    <span>Open in Web App ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Passes Section */}
      <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" /> Straightforward Access
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Affordable prepaid plans. <span className="text-gradient-sunset">GCash &amp; Maya ready.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Simple prepaid passes with zero automatic renewals or hidden charges. Pay only for the duration you want.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                    <span className="text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      {plan.badge}
                    </span>
                    {plan.popular && (
                      <span className="rounded-full bg-purple-600 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-heading text-2xl font-black text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {plan.desc}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4">
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs sm:text-sm font-extrabold transition ${
                      plan.popular
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    }`}
                  >
                    <span>Get {plan.name} ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            School or barangay bulk lab access?{" "}
            <a href="/partner-with-us" className="text-purple-600 hover:underline dark:text-purple-400 font-extrabold">
              Explore 20% Partner Programs &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Simplified FAQs */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center mb-8">
            <span className="eyebrow">
              <HelpCircle className="h-3.5 w-3.5 text-purple-600" /> Quick Answers
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Coding FAQ
            </h2>
          </div>

          <Accordion className="space-y-3">
            {CODING_FAQS.map((faq) => (
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

      {/* Final Launch Callout */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                <Code2 className="h-3.5 w-3.5" /> Start Coding Today
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black">
                Ready to inspire your little programmer?
              </h2>
              <p className="text-sm sm:text-base text-purple-100">
                147 lessons and 771 missions waiting on <strong>coding.smartpathtutor.ph</strong>. Works in any web browser with instant prepaid GCash &amp; Maya activation starting at just ₱249/month.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://coding.smartpathtutor.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-black text-purple-700 shadow-xl transition hover:bg-slate-100 active:scale-95"
                >
                  <Play className="h-4 w-4 fill-purple-700" />
                  <span>Launch coding.smartpathtutor.ph</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
