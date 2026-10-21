import Image from "next/image";
import {
  CalendarDays, WifiOff, Volume2, PenLine, Sparkles, Gamepad2, Accessibility,
  Camera, MessageCircleHeart, ShieldCheck, Ban, UserCheck, Lock,
  Mail, Receipt, BadgeCheck, Users, ClipboardList, ScanLine, FileSpreadsheet, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Head({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
        {title} <span className="text-gradient-sunset">{accent}</span>
      </h2>
      {sub && <p className="mt-3 text-base text-slate-600 sm:text-lg dark:text-slate-400">{sub}</p>}
    </div>
  );
}

function Tile({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="card-premium flex flex-col items-center gap-3 p-4 text-center sm:p-5">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-extrabold text-slate-900 sm:text-base dark:text-white">{label}</span>
    </div>
  );
}

const FEATURES: [LucideIcon, string][] = [
  [CalendarDays, "4-day MATATAG lessons"],
  [WifiOff, "Works offline"],
  [Volume2, "Reads aloud"],
  [PenLine, "Letter tracing"],
  [Sparkles, "Tala gives hints"],
  [Gamepad2, "Fun Zone rewards"],
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Head eyebrow="For kids" title="Made for" accent="Filipino kids." sub="Grades 1–3 · Filipino & English" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {FEATURES.map(([i, l]) => <Tile key={l} icon={i} label={l} />)}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Accessibility className="h-4 w-4 text-orange-500" /> Accessibility options built in
        </p>
      </div>
    </section>
  );
}

export function TeacherSaje() {
  return (
    <section id="parents" className="scroll-mt-20 bg-amber-50/60 py-16 sm:py-24 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-6 md:grid-cols-2">
        <div>
          <span className="eyebrow">For parents</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Homework help: <span className="text-gradient-sunset">Teacher Saje.</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg dark:text-slate-400">Snap the homework. Get steps to teach it.</p>
          <ul className="mt-6 space-y-3 text-[15px] font-bold text-slate-700 dark:text-slate-300">
            <li className="flex gap-3"><Camera className="h-5 w-5 text-orange-500" /> Photo or PDF</li>
            <li className="flex gap-3"><MessageCircleHeart className="h-5 w-5 text-orange-500" /> Filipino or English</li>
            <li className="flex gap-3"><Sparkles className="h-5 w-5 text-orange-500" /> 40 questions/mo on Pro</li>
          </ul>
        </div>
        <div className="card-premium space-y-3 p-5">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            Paano ko ituturo ito?
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-orange-50 px-4 py-2.5 text-sm text-slate-700 dark:bg-orange-500/10 dark:text-slate-200">
            <span className="font-extrabold text-orange-700 dark:text-orange-300">Teacher Saje · </span>Step 1: Count the first basket together…
          </div>
          <p className="text-center text-xs font-semibold text-slate-400">Example · Answers parents only</p>
        </div>
      </div>
    </section>
  );
}

const STEPS: [LucideIcon, string][] = [
  [Mail, "Contact us"],
  [Receipt, "Pay & send receipt"],
  [BadgeCheck, "We activate"],
  [CalendarDays, "Learn daily"],
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Head eyebrow="How it works" title="Start in" accent="4 steps." sub="GCash, bank or cash. No card. No auto-renewal." />
        <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STEPS.map(([Icon, l], i) => (
            <li key={l} className="card-premium flex flex-col items-center gap-3 p-4 text-center sm:p-5">
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-sunset text-white">
                <Icon className="h-5 w-5" />
                <span className="absolute -top-1.5 -right-1.5 grid h-5 w-5 place-items-center rounded-full bg-slate-900 text-[11px] font-extrabold text-white">{i + 1}</span>
              </span>
              <span className="text-sm font-extrabold text-slate-900 sm:text-base dark:text-white">{l}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const SAFETY: [LucideIcon, string][] = [
  [Ban, "No ads or links"],
  [ShieldCheck, "AI talks to parents only"],
  [UserCheck, "You approve teachers"],
  [Lock, "Data never sold"],
];

export function Safety() {
  return (
    <section id="safety" className="scroll-mt-20 bg-slate-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">Safe for kids. <span className="text-gradient-sunset">Private.</span></h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SAFETY.map(([Icon, l]) => (
            <span key={l} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold">
              <Icon className="h-4 w-4 text-amber-300" /> {l}
            </span>
          ))}
        </div>
        <a href="/privacy" className="mt-6 inline-block text-sm font-bold text-amber-300 underline">Privacy Policy</a>
      </div>
    </section>
  );
}

const TEACH: [LucideIcon, string][] = [
  [Users, "Classes"],
  [ClipboardList, "Attendance & tasks"],
  [ScanLine, "Scan worksheets"],
  [FileSpreadsheet, "CSV export"],
];

export function Teachers() {
  return (
    <section id="teachers" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Head eyebrow="For teachers" title="Teachers start" accent="free." sub="30 credits to start." />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {TEACH.map(([i, l]) => <Tile key={l} icon={i} label={l} />)}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-extrabold text-white dark:bg-white dark:text-slate-900">
            Request access <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TalaMark() {
  return <Image src="/assets/characters/tala_guide.png" alt="Tala" width={120} height={120} className="h-20 w-auto" />;
}
