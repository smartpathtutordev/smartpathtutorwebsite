"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Users,
  GraduationCap,
  ArrowLeftRight,
  Radio,
  QrCode,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Ban,
  Lock,
  Clock,
  ArrowRight,
  ExternalLink,
  Download,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const APPS = [
  {
    id: "tutor",
    step: "1",
    badge: "For Kids",
    name: "SmartPath Tutor",
    tagline: "Daily lessons that read aloud.",
    image: "/images/app-tutor.png?v=3",
    alt: "SmartPath Tutor App",
    icon: Compass,
    accentBg: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
    glowColor: "from-sky-400/25 via-amber-300/20 to-orange-400/20",
    bullets: [
      "Math, English & Science",
      "Reads aloud (EN & Filipino)",
      "FunZone & Room rewards",
    ],
  },
  {
    id: "parent",
    step: "2",
    badge: "For Parents",
    name: "SmartPath Parent",
    tagline: "Live progress + AI homework coach.",
    image: "/images/app-parent.png?v=2",
    alt: "SmartPath Parent App",
    icon: Users,
    accentBg: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
    glowColor: "from-orange-400/30 via-pink-400/20 to-violet-500/25",
    featured: true,
    bullets: [
      "Fills in live — no refresh",
      "Teacher Saje AI homework help",
      "Screen-time & bedtime limits",
    ],
  },
  {
    id: "teacher",
    step: "3",
    badge: "Free for Teachers",
    name: "SmartPath Teacher",
    tagline: "1 class code connects to families.",
    image: "/images/app-teacher.png?v=2",
    alt: "SmartPath Teacher App",
    icon: GraduationCap,
    accentBg: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
    glowColor: "from-blue-500/25 via-indigo-400/20 to-violet-500/20",
    bullets: [
      "Families scan code once",
      "Recommend class lessons",
      "See topics completed",
    ],
  },
];

const TRUST_PILLS = [
  { icon: Ban, label: "No ads" },
  { icon: ShieldCheck, label: "No open AI chat for kids" },
  { icon: Clock, label: "Screen-time limits" },
  { icon: Lock, label: "Parent-approved teachers" },
];

export function AppShowcase() {
  return (
    <section
      id="apps"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-background via-amber-50/40 to-background py-14 sm:py-20 dark:via-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Minimal Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            3 Connected Apps
          </span>
          <h2 className="mt-2.5 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Three apps. <span className="text-gradient-sunset">Connected live.</span>
          </h2>
          <p className="mt-2.5 text-sm font-semibold text-slate-600 sm:text-base dark:text-slate-400">
            Kids learn in Tutor · Parents see it live · Teachers link with 1 code
          </p>
        </div>

        {/* 3 Phones + Live Connectors */}
        <div className="relative mt-10 sm:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[225px] right-[16%] left-[16%] z-0 hidden h-1 rounded-full bg-gradient-to-r from-sky-400 via-orange-400 to-indigo-500 opacity-35 lg:block"
          />

          {/* Connector pill 1: Tutor <-> Parent */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[206px] left-[33.33%] z-20 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-orange-200 bg-white/95 px-3 py-1.5 text-xs font-extrabold text-orange-600 shadow-lg shadow-slate-900/10 backdrop-blur lg:flex dark:border-orange-500/30 dark:bg-slate-900/95 dark:text-orange-300"
          >
            <Radio className="h-3.5 w-3.5 animate-pulse text-emerald-500" />
            <span>Live sync</span>
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </div>

          {/* Connector pill 2: Parent <-> Teacher */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[206px] left-[66.66%] z-20 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-indigo-200 bg-white/95 px-3 py-1.5 text-xs font-extrabold text-indigo-600 shadow-lg shadow-slate-900/10 backdrop-blur lg:flex dark:border-indigo-500/30 dark:bg-slate-900/95 dark:text-indigo-300"
          >
            <QrCode className="h-3.5 w-3.5 text-indigo-500" />
            <span>Class code</span>
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </div>

          <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-7">
            {APPS.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  className={`card-premium relative flex h-full flex-col items-center p-5 sm:p-6 ${
                    app.featured
                      ? "ring-2 ring-orange-400/50 dark:ring-orange-400/40"
                      : ""
                  }`}
                >
                  {/* Top Role Badge */}
                  <div className="flex w-full items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold ${app.accentBg}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {app.badge}
                    </span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-900/5 text-xs font-black text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {app.step}
                    </span>
                  </div>

                  {/* Phone Mockup Frame */}
                  <div className="relative my-5 flex w-full justify-center">
                    <div
                      aria-hidden
                      className={`absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr ${app.glowColor} blur-2xl`}
                    />
                    <div className="relative w-full max-w-[235px] sm:max-w-[245px]">
                      <div className="relative rounded-[40px] bg-slate-900 px-2 pt-4 pb-2 shadow-[0_28px_60px_-15px_rgba(15,23,42,0.4),0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-slate-800">
                        <div className="absolute top-1.5 left-1/2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-700/80" />
                        <div className="relative overflow-hidden rounded-[32px] bg-white">
                          <Image
                            src={app.image}
                            alt={app.alt}
                            width={480}
                            height={1020}
                            unoptimized
                            className="block h-auto w-full select-none object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Short Title & 1-Line Tagline */}
                  <div className="w-full text-center">
                    <h3 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white">
                      {app.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-orange-600 dark:text-orange-400">
                      {app.tagline}
                    </p>
                  </div>

                  {/* 3 Short Checkmarks */}
                  <ul className="mt-4 w-full space-y-2 border-t border-slate-900/5 pt-4 text-left text-xs font-bold text-slate-700 sm:text-sm dark:border-white/10 dark:text-slate-300">
                    {app.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Web & Install Actions */}
                  <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 border-t border-slate-900/5 pt-4 dark:border-white/10">
                    <a
                      href={`https://smartpathtutor.ph/app/${app.id}/`}
                      className="inline-flex h-9 items-center gap-1.5 rounded-full bg-slate-900 px-3.5 text-xs font-extrabold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    >
                      Open on Web
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <button
                      type="button"
                      disabled
                      title="Installable APK coming soon"
                      className="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-100 px-3.5 text-xs font-extrabold text-slate-400 opacity-75 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-500"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Install APK
                    </button>
                  </div>

                  <Link
                    href={`/${app.id}-app`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-orange-600 transition hover:text-orange-700 dark:text-orange-400"
                  >
                    See on Mobile, Laptop &amp; Tablet
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compact Safety Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TRUST_PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
            >
              <Icon className="h-3.5 w-3.5 text-orange-500" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
