"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Volume2,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Play,
} from "lucide-react";

interface LessonDemoProps {
  className?: string;
}

export function LessonDemo({ className = "" }: LessonDemoProps) {
  const [language, setLanguage] = useState<"english" | "tagalog">("english");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const demoUrl =
    language === "tagalog"
      ? "/demo/math-g1-w1-d1/tagalog"
      : "/demo/math-g1-w1-d1/";

  const handleReset = () => {
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Browser permissions or mobile fallbacks
    }
  };

  return (
    <section
      id="live-demo"
      className={`relative py-16 sm:py-24 overflow-hidden bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-900/10 dark:border-white/10 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Sample Lesson Demo</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Try a Real SmartPath Lesson{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
              Right Now.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Grade 1 Math • Quarter 1 · Week 1 · Day 1:{" "}
            <strong className="text-slate-900 dark:text-white">
              {language === "english"
                ? "“What is a rectangle?”"
                : "“Ano ang parihaba?”"}
            </strong>
            . No app download or sign-up needed — let your child tap, explore,
            and hear Teacher Saje guide them step by step.
          </p>
        </div>

        {/* Control Bar & Language Switcher */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-900/10 bg-white p-3 sm:px-5 sm:py-3.5 shadow-sm dark:border-white/10 dark:bg-slate-900">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Language:
            </span>
            <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setLanguage("english")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                  language === "english"
                    ? "bg-white text-slate-900 shadow-sm dark:bg-amber-500 dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("tagalog")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${
                  language === "tagalog"
                    ? "bg-white text-slate-900 shadow-sm dark:bg-amber-500 dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                Tagalog (Filipino)
              </button>
            </div>
          </div>

          {/* Quick Lesson Info */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="grid h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Narrated by Teacher Saje • DepEd MATATAG Aligned</span>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleReset}
              title="Restart Lesson from Beginning"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Restart</span>
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="h-3.5 w-3.5" />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>Fullscreen</span>
                </>
              )}
            </button>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-extrabold text-slate-950 transition hover:bg-amber-400"
            >
              <span>Open Full Tab</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive Lesson Frame */}
        <div
          ref={containerRef}
          className="relative mt-6 rounded-3xl border-4 border-slate-900/10 bg-slate-950 shadow-2xl p-2 sm:p-3 overflow-hidden dark:border-white/10 dark:bg-slate-950"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 hidden sm:inline text-[11px] font-mono text-slate-400 truncate max-w-md">
                SmartPath Tutor • Grade 1 Math Q1 W1 D1 • {language.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                <Volume2 className="h-3.5 w-3.5" />
                <span>Teacher Saje Voice Active • Tap Screen to Hear</span>
              </span>
            </div>
          </div>

          {/* Responsive 16:9 Aspect Ratio Iframe Wrapper */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] rounded-2xl overflow-hidden bg-slate-900">
            <iframe
              key={`${language}-${iframeKey}`}
              ref={iframeRef}
              src={demoUrl}
              title="SmartPath Interactive Lesson Demo - Grade 1 Math"
              allow="autoplay; fullscreen"
              className="absolute inset-0 h-full w-full border-0 bg-slate-900"
            />
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300">
              <Volume2 className="h-5 w-5" />
            </div>
            <h3 className="mt-3.5 font-heading text-base font-extrabold text-slate-900 dark:text-white">
              Teacher Saje Voice
            </h3>
            <p className="mt-1 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Clear Phonics Read-Aloud
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Every sentence, shape name, and question is spoken aloud in warm,
              clear English and Filipino, helping non-readers learn independently.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-3.5 font-heading text-base font-extrabold text-slate-900 dark:text-white">
              Touch & Trace Drills
            </h3>
            <p className="mt-1 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Active Kinesthetic Learning
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Children count 4 straight sides, tap 4 sharp corners, and spot
              real-world rectangles in doors, windows, and Philippine classrooms.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-3.5 font-heading text-base font-extrabold text-slate-900 dark:text-white">
              DepEd MATATAG Aligned
            </h3>
            <p className="mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Grade 1 Math • Quarter 1
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              100% matched to the Department of Education MATATAG curriculum so
              lessons reinforce exactly what teachers teach in class.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-3.5 font-heading text-base font-extrabold text-slate-900 dark:text-white">
              Zero Homework Tears
            </h3>
            <p className="mt-1 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Joyful, Self-Paced Progress
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              10-minute micro-lessons reward every small step with celebration,
              turning stressful evening math drills into positive daily wins.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-12 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-500/5 p-6 sm:p-10 text-center dark:border-white/10 dark:from-amber-400/10 dark:via-orange-400/5 dark:to-transparent">
          <h3 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            Give Your Child All 36 Weeks of Guided Lessons
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Full access includes Grades 1 to 3 Math, Reading, English, Filipino,
            and Science — complete with parent dashboard tracking and live teacher
            progress reports.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 hover:shadow-amber-500/35"
            >
              <span>Get Started & Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/parent-app"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <span>See Parent Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
