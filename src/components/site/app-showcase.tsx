"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Users,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ECOSYSTEM = [
  {
    id: "learner",
    label: "For Learners",
    title: "An adventure kids look forward to.",
    icon: Gamepad2,
    image: "/assets/onboarding_learn.png",
    character: "/assets/characters/bunso_idle.png",
    characterName: "Bunso & Tala",
    bullets: [
      "20-minute daily bites with Tala",
      "12 cultural Fun Zone missions",
      "Real-time progress & streak sync",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaLink: "#pricing",
  },
  {
    id: "parent",
    label: "For Parents",
    title: "Know where your child stands before exams.",
    icon: Users,
    image: "/assets/onboarding_parents.png",
    character: "/assets/characters/nanay_idle.png",
    characterName: "Nanay & Tatay",
    bullets: [
      "Real-time mastery dashboard",
      "Early attention flags on tough topics",
      "100% ad-free & screen time caps",
    ],
    ctaText: "Open Parent Portal",
    ctaLink: "https://portal.smartpathtutor.ph/portal",
    external: true,
  },
  {
    id: "teacher",
    label: "For Teachers",
    title: "DepEd slides ready for your class in 1 click.",
    icon: GraduationCap,
    image: "/assets/onboarding_teacher.png",
    character: "/assets/characters/teacher_saje_guide.png",
    characterName: "Teacher Saje",
    bullets: [
      "1-Click .pptx export to Google Slides & Canva",
      "DepEd MATATAG module library",
      "Classroom roster tracking & assessments",
    ],
    ctaText: "Open Teacher Console",
    ctaLink: "https://portal.smartpathtutor.ph/teacher",
    external: true,
  },
];

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState("learner");
  const activeData = ECOSYSTEM.find((e) => e.id === activeTab) ?? ECOSYSTEM[0];

  return (
    <section id="ecosystem" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-700 dark:text-orange-300">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span>3-Sided Ecosystem</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            One platform.{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Three perspectives.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            Seamlessly connecting learner, parent, and teacher.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 p-1">
            {ECOSYSTEM.map((tab) => {
              const active = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl shadow-slate-200/30 dark:shadow-none"
          >
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-500/30 bg-orange-500/10">
                    <Image
                      src={activeData.character}
                      alt={activeData.characterName}
                      fill
                      sizes="40px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Perspective
                    </span>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">
                      {activeData.characterName}
                    </h4>
                  </div>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
                  {activeData.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-3">
                  {activeData.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Button
                    size="lg"
                    className="rounded-full px-6 font-bold bg-gradient-sunset text-white shadow-md shadow-orange-500/20 hover:opacity-95"
                    render={
                      <a
                        href={activeData.ctaLink}
                        target={activeData.external ? "_blank" : undefined}
                        rel={activeData.external ? "noreferrer" : undefined}
                      />
                    }
                  >
                    {activeData.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="relative flex items-center justify-center lg:col-span-6">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-orange-50/30 dark:from-slate-800 dark:to-slate-800/40 p-4">
                  <Image
                    src={activeData.image}
                    alt={activeData.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
