import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UserPlus,
  CreditCard,
  SmilePlus,
  Compass,
  QrCode,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  Mail,
  MessageSquare,
} from "lucide-react";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Get Started · Parent Step-by-Step Guide",
  description:
    "Step-by-step guide to setting up your SmartPath Parent account, adding your child (Grades 1–3), and starting their first lesson.",
  alternates: { canonical: "/get-started" },
};

const PARENT_AUTH_URL = "https://smartpathtutor.ph/app/parent/#/auth";
const TUTOR_URL = "https://smartpathtutor.ph/app/tutor/";
const ASSISTED_SETUP_MAILTO =
  `mailto:sptutor.ph@gmail.com?subject=${encodeURIComponent("Assisted Parent Account Setup")}&body=${encodeURIComponent(
    "Hi SmartPath team! Please help me set up my Parent account.\n\nParent Name:\nParent Email:\nChild's Name & Grade (Grade 1, 2, or 3):\nPreferred Plan (Monthly / Quarterly / Yearly):\n",
  )}`;

const STEPS = [
  {
    step: "Step 1",
    time: "1 minute",
    title: "Create your Parent account",
    summary:
      "Every family starts in SmartPath Parent. Children never create their own account or password.",
    icon: UserPlus,
    iconColor: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-300",
    character: "/assets/characters/nanay_idle.png?v=2",
    bullets: [
      "Open the SmartPath Parent App on your phone, tablet, or computer.",
      "Tap the Create account tab and enter your name, email, and password — or tap Continue with Google.",
      "Open the confirmation email we send you and tap the verification link to sign in.",
    ],
    cta: {
      label: "Open Parent App",
      href: PARENT_AUTH_URL,
      external: true,
    },
  },
  {
    step: "Step 2",
    time: "1 minute",
    title: "Choose your family plan",
    summary:
      "Activate your subscription inside the Parent app using GCash, Maya, or card.",
    icon: CreditCard,
    iconColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    character: "/assets/characters/tatay_idle.png",
    bullets: [
      "Inside the Parent app, tap Plan and select Monthly (₱399/mo), Quarterly, or Yearly.",
      "Pay securely via PayMongo using GCash, Maya, or debit/credit card.",
      "Your plan activates automatically within seconds and unlocks Tutor access.",
    ],
    cta: {
      label: "Compare Plans",
      href: "/pricing",
      external: false,
    },
  },
  {
    step: "Step 3",
    time: "30 seconds",
    title: "Add your child (Grades 1–3)",
    summary:
      "Set up a profile for your child — or up to 5 siblings under your single family account.",
    icon: SmilePlus,
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    character: "/assets/characters/ate_idle.png",
    bullets: [
      "On the Parent Home screen, tap Add child.",
      "Enter your child's nickname, pick their avatar, and choose Grade 1, Grade 2, or Grade 3.",
      "Optional: Set daily screen-time limits or bedtime lockouts in Settings.",
    ],
  },
  {
    step: "Step 4",
    time: "Ready to learn!",
    title: "Sign in once on your child's Tutor app",
    summary:
      "Open SmartPath Tutor on your child's device. You sign in once — after that, your child simply taps their picture.",
    icon: Compass,
    iconColor: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
    character: "/assets/characters/kuya_idle.png",
    bullets: [
      "Open SmartPath Tutor on your child's phone, tablet, or laptop.",
      "Sign in one time using your Parent email and password.",
      "Your child taps their avatar to start Today's Trip (Math, English & Science with read-aloud audio).",
      "Watch their progress fill in live on your Parent app — no refresh needed!",
    ],
    cta: {
      label: "Open Tutor App",
      href: TUTOR_URL,
      external: true,
    },
  },
  {
    step: "Step 5 · Optional",
    time: "30 seconds",
    title: "Have a Class Code from your child's teacher?",
    summary:
      "Connect your child to their school classroom with one code — always with your consent.",
    icon: QrCode,
    iconColor: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
    character: "/assets/characters/teacher_idle.png",
    bullets: [
      "In the Parent app, open the Classroom tab.",
      "Scan the QR code or type the 1-time Class Code shared by your child's teacher.",
      "Once the teacher approves, recommended class lessons appear right inside your child's Tutor app.",
    ],
  },
];

export default function GetStartedPage() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-hidden py-10 sm:py-16">
        {/* Background Glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-background to-background dark:from-slate-900/50" />
          <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />
        </div>

        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          {/* Header */}
          <div className="text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Parent Setup Guide · 3 Minutes
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.025em] text-slate-900 sm:text-5xl dark:text-white">
              How to get started in{" "}
              <span className="text-gradient-sunset">SmartPath Parent.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              Follow these simple steps in the Parent app to set up your family account and launch your child&apos;s first lesson.
            </p>

            {/* Primary Top Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={PARENT_AUTH_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-extrabold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Create Parent Account
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 text-sm font-extrabold text-slate-700 shadow-xs transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <HelpCircle className="h-4 w-4 text-orange-500" />
                We&apos;ll Set It Up for You
              </a>
            </div>
          </div>

          {/* Step-by-Step Cards */}
          <div className="mt-10 space-y-5">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <section
                  key={item.step}
                  className="card-premium relative overflow-hidden p-5 sm:p-7"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {/* Left Character + Number Badge */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-center">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white p-1 shadow-xs dark:border-white/10 dark:bg-slate-800">
                        <Image
                          src={item.character}
                          alt={item.title}
                          width={64}
                          height={64}
                          unoptimized
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[11px] font-extrabold text-white dark:bg-white dark:text-slate-900">
                        {idx + 1} of {STEPS.length}
                      </span>
                    </div>

                    {/* Right Step Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-extrabold ${item.iconColor}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {item.step}
                        </span>
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                          · {item.time}
                        </span>
                      </div>

                      <h2 className="mt-1.5 font-heading text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {item.summary}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {item.cta && (
                        <div className="mt-5">
                          {item.cta.external ? (
                            <a
                              href={item.cta.href}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-slate-900 px-4 text-xs font-extrabold text-white shadow-xs transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                            >
                              {item.cta.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            <Link
                              href={item.cta.href}
                              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-100 px-4 text-xs font-extrabold text-slate-800 transition hover:bg-slate-200 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                            >
                              {item.cta.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Safety & Support Box Connected to Email & Chat */}
          <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white sm:p-8 dark:bg-slate-800/90">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-extrabold sm:text-xl">
                    Want us to set up your Parent account for you?
                  </h3>
                  <p className="mt-1 max-w-lg text-sm text-slate-300">
                    Email or message us your name and your child&apos;s grade level — our team will set up your Parent account and reply right away.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={ASSISTED_SETUP_MAILTO}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-900 transition hover:bg-amber-50"
                >
                  <Mail className="h-4 w-4 text-orange-600" />
                  Email Us
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-extrabold text-white transition hover:bg-white/20"
                >
                  <MessageSquare className="h-4 w-4" />
                  Message Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Contact / Chat Form */}
        <div className="mt-14">
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
