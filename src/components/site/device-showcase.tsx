"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Laptop,
  LayoutGrid,
  ArrowRight,
  ExternalLink,
  Download,
  Sparkles,
  Calculator,
  BookOpen,
  PenTool,
  FlaskConical,
  Target,
  Gamepad2,
  Radio,
  Bot,
  TrendingUp,
  Users,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Megaphone,
  GraduationCap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export type AppKey = "tutor" | "parent" | "teacher";
type DeviceFilter = "all" | "mobile" | "tablet" | "laptop";

interface ShowcaseItem {
  title: string;
  tag: string;
  detail: string;
  icon: typeof Smartphone;
  iconColor: string;
}

const APP_DATA: Record<
  AppKey,
  {
    name: string;
    accentWord: string;
    appUrl: string;
    apkUrl: string;
    ctaLabel: string;
    ctaHref: string;
    screens: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
    showcaseTitle: string;
    showcaseAccent: string;
    showcaseItems: ShowcaseItem[];
  }
> = {
  tutor: {
    name: "SmartPath",
    accentWord: "Tutor",
    appUrl: "https://smartpathtutor.ph/app/tutor/",
    apkUrl: "/downloads/smartpath-tutor.apk",
    ctaLabel: "Subscribe",
    ctaHref: "/pricing",
    screens: {
      mobile: "/images/tutor-mobile.png?v=3",
      tablet: "/images/tutor-tablet.png?v=3",
      laptop: "/images/tutor-laptop.png?v=3",
    },
    showcaseTitle: "Inside",
    showcaseAccent: "SmartPath Tutor.",
    showcaseItems: [
      {
        title: "Daily Math Trips",
        tag: "Grades 1–3 · MATATAG",
        detail: "Visual counting, shapes, and Philippine real-world problems in 10-minute guided trips.",
        icon: Calculator,
        iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
      },
      {
        title: "Reading & Stories",
        tag: "English & Filipino",
        detail: "Every lesson reads aloud clearly with phonics, vocabulary, and illustrated stories.",
        icon: BookOpen,
        iconColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
      },
      {
        title: "Guided Writing & Tracing",
        tag: "Stroke-by-Stroke",
        detail: "Interactive letter and word tracing with finger or stylus and instant visual guidance.",
        icon: PenTool,
        iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
      },
      {
        title: "Science Simulations",
        tag: "Grade 3 · Interactive",
        detail: "Hands-on discovery labs exploring islands, matter, weather, and living things.",
        icon: FlaskConical,
        iconColor: "bg-violet-500/10 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
      },
      {
        title: "Math & Reading Practice",
        tag: "Anytime Drills",
        detail: "Self-paced practice doors for number fluency, sight words, and creative coloring.",
        icon: Target,
        iconColor: "bg-rose-500/10 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
      },
      {
        title: "FunZone & My Room",
        tag: "Ticket Rewards",
        detail: "Finishing lessons earns tickets for Luzon, Visayas & Mindanao games and room items.",
        icon: Gamepad2,
        iconColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
      },
    ],
  },
  parent: {
    name: "SmartPath",
    accentWord: "Parent",
    appUrl: "https://smartpathtutor.ph/app/parent/",
    apkUrl: "/downloads/smartpath-parent.apk",
    ctaLabel: "See Plans",
    ctaHref: "/pricing",
    screens: {
      mobile: "/images/parent-mobile.png?v=2",
      tablet: "/images/parent-tablet.png?v=2",
      laptop: "/images/parent-laptop.png?v=2",
    },
    showcaseTitle: "Inside",
    showcaseAccent: "SmartPath Parent.",
    showcaseItems: [
      {
        title: "Live Lesson Status",
        tag: "No Refresh Needed",
        detail: "Watch Today's Path fill in live the moment your child opens Tutor and completes lessons.",
        icon: Radio,
        iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
      },
      {
        title: "Teacher Saje AI Coach",
        tag: "English & Filipino",
        detail: "Ask any homework question or snap a worksheet to get simple steps to teach your child.",
        icon: Bot,
        iconColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
      },
      {
        title: "Progress & Weak Spots",
        tag: "Before Exams",
        detail: "Track completed Math, Reading, Writing, and Science topics and see what to practice next.",
        icon: TrendingUp,
        iconColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
      },
      {
        title: "Up to 5 Children",
        tag: "1 Family Account",
        detail: "Add siblings in seconds — each child gets their own grade level and personalized path.",
        icon: Users,
        iconColor: "bg-violet-500/10 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
      },
      {
        title: "1-Tap Classroom Link",
        tag: "Parent Consent",
        detail: "Scan or enter your teacher's class code once and choose what progress to share.",
        icon: QrCode,
        iconColor: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
      },
      {
        title: "Screen-Time & Bedtime",
        tag: "Ad-Free & Private",
        detail: "Set daily time limits and bedtime lockouts. No ads and no open AI chat for children.",
        icon: ShieldCheck,
        iconColor: "bg-rose-500/10 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
      },
    ],
  },
  teacher: {
    name: "SmartPath",
    accentWord: "Teacher",
    appUrl: "https://smartpathtutor.ph/app/teacher/",
    apkUrl: "/downloads/smartpath-teacher.apk",
    ctaLabel: "Free Access",
    ctaHref: "/#contact",
    screens: {
      mobile: "/images/teacher-mobile.png?v=2",
      tablet: "/images/teacher-tablet.png?v=2",
      laptop: "/images/teacher-laptop.png?v=2",
    },
    showcaseTitle: "Inside",
    showcaseAccent: "SmartPath Teacher.",
    showcaseItems: [
      {
        title: "1-Time Class Code",
        tag: "Quick Setup",
        detail: "Create a class for your section and share one code — families scan once and you admit them.",
        icon: QrCode,
        iconColor: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
      },
      {
        title: "Recommend Lessons",
        tag: "DepEd MATATAG",
        detail: "Assign specific Math, Reading, Writing, or Science topics to match your weekly lesson plan.",
        icon: BookOpen,
        iconColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
      },
      {
        title: "Custom Class Questions",
        tag: "Multiple Choice",
        detail: "Write quick check-for-understanding questions that appear directly in your students' Tutor app.",
        icon: CheckCircle2,
        iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
      },
      {
        title: "Section Topic Progress",
        tag: "Real-Time View",
        detail: "See which MATATAG topics your class has finished, plus individual scores with parent consent.",
        icon: BarChart3,
        iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
      },
      {
        title: "Post to Families",
        tag: "Direct Updates",
        detail: "Share class announcements and study reminders straight to connected parents.",
        icon: Megaphone,
        iconColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
      },
      {
        title: "Try a Sample Class",
        tag: "100% Free Forever",
        detail: "Explore a ready-made sample section right away before setting up your own classroom.",
        icon: GraduationCap,
        iconColor: "bg-violet-500/10 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
      },
    ],
  },
};

function DeviceActions({
  webUrl,
  installLabel,
}: {
  webUrl: string;
  installLabel: string;
}) {
  return (
    <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 border-t border-slate-900/5 pt-4 dark:border-white/10">
      <a
        href={webUrl}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-slate-900 px-3.5 text-xs font-extrabold text-white shadow-xs transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        Open on Web
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
      <button
        type="button"
        disabled
        title="Installable app coming soon"
        className="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-100 px-3.5 text-xs font-extrabold text-slate-400 opacity-75 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-500"
      >
        <Download className="h-3.5 w-3.5" />
        {installLabel}
      </button>
    </div>
  );
}

function MobileFrame({ src, alt, large }: { src: string; alt: string; large?: boolean }) {
  return (
    <div className={`relative mx-auto w-full ${large ? "max-w-[290px]" : "max-w-[175px]"}`}>
      <div className="relative rounded-[34px] bg-slate-900 px-2 pt-3.5 pb-2 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-slate-800">
        <div className="absolute top-1.5 left-1/2 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-700/80" />
        <div className="relative overflow-hidden rounded-[26px] bg-white">
          <Image
            src={src}
            alt={alt}
            width={480}
            height={1020}
            unoptimized
            className="block h-auto w-full select-none object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function TabletFrame({ src, alt, large }: { src: string; alt: string; large?: boolean }) {
  return (
    <div className={`relative mx-auto w-full ${large ? "max-w-[700px]" : "max-w-[360px]"}`}>
      <div className="relative rounded-[24px] bg-slate-900 p-2.5 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-slate-800 sm:p-3">
        <div className="absolute top-1.5 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-600" />
        <div className="relative overflow-hidden rounded-[16px] bg-white">
          <Image
            src={src}
            alt={alt}
            width={1024}
            height={590}
            unoptimized
            className="block h-auto w-full select-none"
          />
        </div>
      </div>
    </div>
  );
}

function LaptopFrame({ src, alt, large }: { src: string; alt: string; large?: boolean }) {
  return (
    <div className={`relative mx-auto w-full ${large ? "max-w-[760px]" : "max-w-[420px]"}`}>
      <div className="relative mx-auto w-[92%] rounded-t-[18px] bg-slate-900 px-2 pt-3.5 pb-2 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-slate-800 sm:px-2.5 sm:pt-4 sm:pb-2.5">
        <div className="absolute top-1.5 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-600" />
        <div className="relative overflow-hidden rounded-[9px] bg-white">
          <Image
            src={src}
            alt={alt}
            width={1024}
            height={590}
            unoptimized
            className="block h-auto w-full select-none"
          />
        </div>
      </div>
      <div className="relative mx-auto h-3 w-full rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md dark:from-slate-700 dark:to-slate-800">
        <div className="absolute top-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-b-md bg-slate-400/80 dark:bg-slate-600" />
      </div>
    </div>
  );
}

export function DeviceShowcase({ appKey }: { appKey: AppKey }) {
  const [filter, setFilter] = useState<DeviceFilter>("all");
  const data = APP_DATA[appKey];

  const tabs: { id: DeviceFilter; label: string; icon: typeof Smartphone }[] = [
    { id: "all", label: "All 3 Devices", icon: LayoutGrid },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "laptop", label: "Laptop", icon: Laptop },
    { id: "tablet", label: "Tablet", icon: Tablet },
  ];

  return (
    <section className="relative overflow-hidden py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Single-Row Compact Header */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h1 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-3xl dark:text-white">
            {data.name} <span className="text-gradient-sunset">{data.accentWord}</span>
          </h1>

          {/* Device Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-slate-900/10 bg-white p-1 shadow-xs dark:border-white/10 dark:bg-slate-900">
            {tabs.map(({ id, label, icon: Icon }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition ${
                    active
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Primary Plan CTA */}
          <Link
            href={data.ctaHref}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-sunset px-4 text-xs font-extrabold text-white shadow-sm transition hover:brightness-105"
          >
            {data.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3 Devices Side-by-Side Row */}
        {filter === "all" ? (
          <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-12">
            {/* Mobile Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="card-premium flex flex-col items-center justify-between p-5 lg:col-span-3"
            >
              <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-extrabold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <Smartphone className="h-3.5 w-3.5 text-orange-500" />
                Mobile
              </span>
              <div className="my-4 flex flex-1 items-center justify-center w-full">
                <MobileFrame src={data.screens.mobile} alt={`${data.name} ${data.accentWord} on Mobile`} />
              </div>
              <DeviceActions webUrl={data.appUrl} installLabel="Install APK" />
            </motion.div>

            {/* Laptop Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06, ease }}
              className="card-premium flex flex-col items-center justify-between p-5 lg:col-span-5"
            >
              <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-extrabold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <Laptop className="h-3.5 w-3.5 text-orange-500" />
                Laptop
              </span>
              <div className="my-4 flex flex-1 items-center justify-center w-full">
                <LaptopFrame src={data.screens.laptop} alt={`${data.name} ${data.accentWord} on Laptop`} />
              </div>
              <DeviceActions webUrl={data.appUrl} installLabel="Install App" />
            </motion.div>

            {/* Tablet Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease }}
              className="card-premium flex flex-col items-center justify-between p-5 lg:col-span-4"
            >
              <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-extrabold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <Tablet className="h-3.5 w-3.5 text-orange-500" />
                Tablet
              </span>
              <div className="my-4 flex flex-1 items-center justify-center w-full">
                <TabletFrame src={data.screens.tablet} alt={`${data.name} ${data.accentWord} on Tablet`} />
              </div>
              <DeviceActions webUrl={data.appUrl} installLabel="Install APK" />
            </motion.div>
          </div>
        ) : (
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="card-premium mt-6 flex flex-col items-center p-6 sm:p-8"
          >
            {filter === "mobile" && (
              <>
                <MobileFrame src={data.screens.mobile} alt={`${data.name} ${data.accentWord} on Mobile`} large />
                <DeviceActions webUrl={data.appUrl} installLabel="Install APK" />
              </>
            )}
            {filter === "laptop" && (
              <>
                <LaptopFrame src={data.screens.laptop} alt={`${data.name} ${data.accentWord} on Laptop`} large />
                <DeviceActions webUrl={data.appUrl} installLabel="Install App" />
              </>
            )}
            {filter === "tablet" && (
              <>
                <TabletFrame src={data.screens.tablet} alt={`${data.name} ${data.accentWord} on Tablet`} large />
                <DeviceActions webUrl={data.appUrl} installLabel="Install APK" />
              </>
            )}
          </motion.div>
        )}

        {/* Simplified Feature Showcase Below the Devices */}
        <div className="mt-14 sm:mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              What&apos;s Inside
            </span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-4xl dark:text-white">
              {data.showcaseTitle} <span className="text-gradient-sunset">{data.showcaseAccent}</span>
            </h2>
          </div>

          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.showcaseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: idx * 0.05, ease }}
                  className="card-premium flex h-full flex-col justify-between p-5"
                >
                  <div>
                    <div className="mb-3.5 flex items-center justify-between gap-2">
                      <span className={`grid h-10 w-10 place-items-center rounded-xl ${item.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-slate-900/5 px-2.5 py-1 text-[11px] font-extrabold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
