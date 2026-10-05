"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Compass,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

type GradeTab = "1" | "2" | "3";

interface SubjectData {
  id: string;
  title: string;
  icon: typeof Calculator;
  accent: string;
  border: string;
  bg: string;
  grades: Record<
    GradeTab,
    {
      code: string;
      headline: string;
      skills: string[];
      note?: string;
    }
  >;
}

const SUBJECTS: SubjectData[] = [
  {
    id: "math",
    title: "Mathematics",
    icon: Calculator,
    accent: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    grades: {
      "1": {
        code: "M1NS-Ib-8.1",
        headline: "Place value, addition & subtraction within 100 & number patterns",
        skills: ["Place Value", "Number Bonds", "1-Step Word Problems"],
      },
      "2": {
        code: "M2NS-IIh-54.1",
        headline: "Operations within 1,000 & real-world sari-sari store peso math",
        skills: ["Mental Addition", "Store Currency Math", "2-Step Problems"],
      },
      "3": {
        code: "M3NS-IIa-41.1",
        headline: "Multiplication & division tables, fractions, and practical measurement",
        skills: ["Multiplication Tables", "Simple Fractions", "Time & Area"],
      },
    },
  },
  {
    id: "english",
    title: "English & Literacy",
    icon: BookOpen,
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    grades: {
      "1": {
        code: "EN1G-Ia-1",
        headline: "Letter-sound correspondences, phonemic blending & high-frequency sight words",
        skills: ["Phonics Blends", "Sight Words", "Rhyming Patterns"],
      },
      "2": {
        code: "EN2G-IIa-e-3.4",
        headline: "Decodable Filipino stories, action verbs, sentence structure & punctuation",
        skills: ["Action Verbs", "Sentence Building", "Context Comprehension"],
      },
      "3": {
        code: "EN3G-IIa-b-3",
        headline: "Reading fluency, vocabulary synthesis, story mapping & parts of speech",
        skills: ["Reading Fluency", "Vocabulary Expansion", "Descriptive Details"],
      },
    },
  },
  {
    id: "science",
    title: "Science & Discovery",
    icon: FlaskConical,
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    grades: {
      "1": {
        code: "Discovery",
        headline: "Observation of living things, 5 senses & local Philippine weather",
        skills: ["5 Human Senses", "Living Things", "Weather Observation"],
        note: "Foundational nature discovery preparing for formal Grade 3 science",
      },
      "2": {
        code: "Discovery",
        headline: "Plant life, animal habitats, light, shadows & material properties",
        skills: ["Plant Parts", "Animal Habitats", "Sun & Shadows"],
        note: "Everyday environment exploration aligned with MATATAG competencies",
      },
      "3": {
        code: "S3LT-IIa-b-1",
        headline: "Official DepEd Science: Human sense organs, states of matter & ecosystems",
        skills: ["States of Matter", "Sense Organs", "Ecosystem Interactions"],
        note: "DepEd MATATAG formal Science begins in Grade 3!",
      },
    },
  },
  {
    id: "makabansa",
    title: "Makabansa & Values",
    icon: Compass,
    accent: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/10",
    grades: {
      "1": {
        code: "AP1PAM-IIa-1",
        headline: "Self-identity, family roles, Philippine symbols & community helpers",
        skills: ["Family Structure", "Community Helpers", "National Symbols"],
      },
      "2": {
        code: "AP2KOM-Ia-1",
        headline: "Barangay geography, cultural traditions & respectful civic awareness",
        skills: ["Community Map", "Cultural Traditions", "Civic Habits"],
      },
      "3": {
        code: "AP3LAR-Ia-1",
        headline: "Philippine regions, provincial history, local landmarks & heritage",
        skills: ["Provincial Maps", "Natural Resources", "Filipino Heroes"],
      },
    },
  },
];

export function Subjects() {
  const [activeTab, setActiveTab] = useState<GradeTab>("2");

  const tabs: { id: GradeTab; label: string; sub: string }[] = [
    { id: "1", label: "Grade 1", sub: "Ages 6–7 · Primary" },
    { id: "2", label: "Grade 2", sub: "Ages 7–8 · Expansion" },
    { id: "3", label: "Grade 3", sub: "Ages 8–9 · Mastery" },
  ];

  return (
    <section id="curriculum" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1 text-xs font-black text-amber-800 dark:text-amber-300">
            <span>📚</span>
            <span>DepEd MATATAG Grades 1–3</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            A{" "}
            <span className="text-orange-500">
              smart path
            </span>{" "}
            for Grades 1, 2, and 3.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans font-medium">
            Every quest maps directly to official Department of Education learning standards. (Grades 4–6 in active development).
          </p>

          {/* Grade Pill Tabs */}
          <div className="mt-8 inline-flex rounded-full border-2 border-amber-200 bg-amber-50/80 dark:bg-slate-800/80 p-1.5 shadow-xs">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                    active
                      ? "bg-amber-400 text-amber-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SUBJECTS.map((s) => {
              const gradeData = s.grades[activeTab];
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="flex flex-col justify-between rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div>
                    {/* Top Row: Icon & DepEd Code */}
                    <div className="flex items-center justify-between">
                      <span className={`grid h-11 w-11 place-items-center rounded-2xl border-2 ${s.border} ${s.bg} ${s.accent}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-amber-200 dark:border-slate-800">
                        {gradeData.code}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading font-black text-xl text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed font-medium">
                      {gradeData.headline}
                    </p>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {gradeData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-amber-50 dark:bg-slate-800 px-2.5 py-1 text-[10px] font-bold text-amber-900 dark:text-amber-200 border border-amber-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
