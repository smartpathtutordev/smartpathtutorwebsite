import Image from "next/image";
import {
  CalendarDays, WifiOff, Volume2, PenLine, Sparkles, Gamepad2, Accessibility,
  Camera, MessageCircleHeart, ShieldCheck, Ban, UserCheck, Lock, Database,
  Smartphone, Users, Wallet, Receipt, BadgeCheck, ClipboardList, ClipboardCheck,
  ScanLine, Layers, NotebookPen, FileSpreadsheet, Mail, ArrowRight, Apple, Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Heading({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
        {title} <span className="text-gradient-sunset">{accent}</span>
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">{sub}</p>}
    </div>
  );
}

function Card({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <div className="card-premium p-5 sm:p-6">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-heading text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{body}</p>
    </div>
  );
}

const FEATURES: [LucideIcon, string, string][] = [
  [CalendarDays, "4-day MATATAG lessons", "Every lesson runs over four days: the basics, understanding, using it, then harder thinking. It follows the DepEd MATATAG curriculum for Grades 1–3."],
  [WifiOff, "Works offline", "Lessons are saved on the phone or tablet. Your child's work syncs automatically when the signal comes back, so prepaid data goes further."],
  [Volume2, "Reads aloud", "Instructions and stories are read aloud in Filipino and English, so even children who can't read yet can learn on their own. The app comes in English or Tagalog."],
  [PenLine, "Letter tracing", "Children trace letters on screen, and the app checks their strokes, not just their taps."],
  [Sparkles, "Tala, the guide", "Tala gives spoken hints and encouragement when your child gets stuck."],
  [Gamepad2, "Fun Zone rewards", "Finishing the day earns tickets and streaks for Fun Zone missions and mini-games. Learning comes first, then play."],
  [Accessibility, "Accessibility built in", "Bigger text, a dyslexia-friendly font, high contrast, colour-blind modes, reduced motion, text-to-speech and extra time."],
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading eyebrow="For kids" title="Learning that fits" accent="real Filipino homes." sub="Made for shared phones, patchy signal and young readers." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([i, t, b]) => <Card key={t} icon={i} title={t} body={b} />)}
          <div className="card-premium flex items-center justify-center overflow-hidden bg-amber-50 p-4 dark:bg-amber-500/5">
            <Image src="/assets/characters/tala_guide.png" alt="Tala, the SmartPath guide" width={220} height={220} className="h-40 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeacherSaje() {
  return (
    <section id="parents" className="scroll-mt-20 bg-amber-50/60 py-20 sm:py-28 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="eyebrow">For parents</span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Stuck on homework? <span className="text-gradient-sunset">Ask Teacher Saje.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Snap a photo of a worksheet or upload a PDF. Teacher Saje explains it step by step and gives you the words to coach your child yourself. It does the explaining, not the homework.
          </p>
          <ul className="mt-6 space-y-3 text-[15px] font-semibold text-slate-700 dark:text-slate-300">
            <li className="flex gap-3"><Camera className="h-5 w-5 shrink-0 text-orange-500" /> Photo or PDF of the homework</li>
            <li className="flex gap-3"><MessageCircleHeart className="h-5 w-5 shrink-0 text-orange-500" /> Answers in Filipino or English, either warm and encouraging or clear and step by step</li>
            <li className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-orange-500" /> Talks to you, never to your child</li>
            <li className="flex gap-3"><Sparkles className="h-5 w-5 shrink-0 text-orange-500" /> 40 questions a month on Pro, plus 40 more for ₱99</li>
          </ul>
          <p className="mt-6 text-[15px] text-slate-600 dark:text-slate-400">
            In the Parent app you can also see today&apos;s path, your child&apos;s progress and what they&apos;re learning right now.
          </p>
        </div>
        <div className="card-premium space-y-4 p-6">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            Narito ang homework. Ipaliwanag kung paano ito sagutan para maituro ko sa anak ko.
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-orange-50 px-4 py-3 text-sm leading-relaxed text-slate-700 dark:bg-orange-500/10 dark:text-slate-200">
            <p className="font-extrabold text-orange-700 dark:text-orange-300">Teacher Saje</p>
            Step 1: Start with something your child knows. Ask, “How many mangoes are in the first basket?”…
          </div>
          <p className="text-center text-xs font-semibold text-slate-400">Example</p>
        </div>
      </div>
    </section>
  );
}

const STEPS: [LucideIcon, string, string][] = [
  [Mail, "Contact us", "Tell us your child's grade and how many children you have. We'll help you set up."],
  [Smartphone, "Set up the apps", "Add your children in the Parent app, then sign in to SmartPath Tutor on their phone or tablet."],
  [Wallet, "Pay your way", "GCash, bank transfer or cash. No card needed."],
  [Receipt, "Send your receipt", "Attach a screenshot or enter the reference number in the Parent app."],
  [BadgeCheck, "We activate", "Our team checks the payment and turns on your plan. There's no auto-renewal."],
  [CalendarDays, "Learn every day", "Your child follows Today's Path, and you follow along in the Parent app."],
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading eyebrow="How it works" title="From hello to" accent="first lesson." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([Icon, t, b], i) => (
            <li key={t} className="card-premium flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-sunset font-heading font-extrabold text-white">{i + 1}</span>
              <div>
                <h3 className="flex items-center gap-2 font-heading text-lg font-extrabold text-slate-900 dark:text-white"><Icon className="h-4 w-4 text-orange-500" />{t}</h3>
                <p className="mt-1 text-[15px] text-slate-600 dark:text-slate-400">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const SAFETY: [LucideIcon, string, string][] = [
  [Ban, "No ads, no feed", "The child app has no advertising, no social feed and no links that lead out of the app."],
  [ShieldCheck, "AI talks to parents only", "Teacher Saje answers parents. Children never chat with an AI."],
  [UserCheck, "You approve teachers", "A teacher can't add your child to a class unless you approve it."],
  [Lock, "Locked to your household", "Every record is limited to the account that owns it, and all data is encrypted in transit."],
  [Database, "Never sold", "We never sell student or parent data, and we use no advertising trackers."],
  [Users, "Your data, your rights", "Under the Data Privacy Act (RA 10173) you can access, correct or delete your data at any time."],
];

export function Safety() {
  return (
    <section id="safety" className="scroll-mt-20 bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Safety &amp; privacy</span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.02em] sm:text-5xl">Built for kids <span className="text-gradient-sunset">first.</span></h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY.map(([Icon, t, b]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <Icon className="h-6 w-6 text-amber-300" />
              <h3 className="mt-3 font-heading text-lg font-extrabold">{t}</h3>
              <p className="mt-1 text-[15px] text-slate-300">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">Read our <a href="/privacy" className="font-bold text-amber-300 underline">Privacy Policy</a>.</p>
      </div>
    </section>
  );
}

const TEACH: [LucideIcon, string, string][] = [
  [Users, "Classes & students", "Set up classes and invite families. Parents approve every link."],
  [ClipboardList, "Attendance & tasks", "Take attendance, assign tasks and review submissions."],
  [ScanLine, "Paper worksheets", "Print worksheets, scan them and mark them. Scans use credits."],
  [Layers, "Differentiation", "See how each student is doing and group learners by need."],
  [NotebookPen, "Family notes & portfolios", "Share notes with families and keep a portfolio for every learner."],
  [FileSpreadsheet, "CSV export", "Export your class data as CSV files."],
];

export function Teachers() {
  return (
    <section id="teachers" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading eyebrow="For teachers" title="A classroom companion," accent="free to start." sub="Start with 30 free credits. Class tools are free to use." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEACH.map(([i, t, b]) => <Card key={t} icon={i} title={t} body={b} />)}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 font-extrabold text-white dark:bg-white dark:text-slate-900">
            <ClipboardCheck className="h-4 w-4" /> Request teacher access <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PilotAndApps() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-6 md:grid-cols-2">
        <div className="card-premium p-6 sm:p-8">
          <span className="eyebrow">Pilot schools</span>
          <h3 className="mt-3 font-heading text-2xl font-extrabold text-slate-900 dark:text-white">Stories from families and teachers are coming soon.</h3>
          <p className="mt-2 text-[15px] text-slate-600 dark:text-slate-400">We only share real feedback, with permission. Want to bring SmartPath to your school or barangay?</p>
          <a href="#contact" className="mt-4 inline-flex items-center gap-1 font-extrabold text-orange-700 dark:text-orange-300">Become a pilot school <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="card-premium p-6 sm:p-8">
          <span className="eyebrow">Get the apps</span>
          <h3 className="mt-3 font-heading text-2xl font-extrabold text-slate-900 dark:text-white">SmartPath Tutor · Parent · Teacher</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {[[Apple, "App Store"], [Play, "Google Play"]].map(([I, l]) => {
              const Icon = I as LucideIcon;
              return (
                <span key={l as string} aria-disabled className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-white opacity-80 dark:bg-white/10">
                  <Icon className="h-5 w-5" />
                  <span className="leading-tight"><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-300">Coming soon</span><span className="font-extrabold">{l as string}</span></span>
                </span>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Until the listings go live, <a href="#contact" className="font-bold text-orange-700 underline dark:text-orange-300">contact us</a> and we&apos;ll help you get set up.</p>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-900/5 py-16 sm:py-20 dark:border-white/5">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <span className="eyebrow">About us</span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">SmartPath Educational Technologies</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          We&apos;re a Filipino edtech startup on a mission to make sure every child in Grades 1–3 gets a strong start in reading and math, even on a shared phone with patchy signal, and that every parent can help.
        </p>
        <a href="mailto:smartpathtutor.dev@gmail.com" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold text-orange-700 dark:text-orange-300"><Mail className="h-4 w-4" /> smartpathtutor.dev@gmail.com</a>
      </div>
    </section>
  );
}
