"use client";

import { motion } from "framer-motion";
import { Gamepad2, WifiOff, Languages, LineChart } from "lucide-react";

const perks = [
  { icon: Gamepad2, label: "Points, streaks & badges" },
  { icon: WifiOff, label: "Works offline, anywhere" },
  { icon: Languages, label: "English, Filipino, Cebuano & Hiligaynon" },
  { icon: LineChart, label: "Parent progress dashboard" },
];

/** Apple App Store badge (links out when you have a real URL). */
function AppStoreBadge() {
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-2.5 rounded-xl bg-[#111] px-4 py-2.5 text-white shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M318.7 268c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.6 4 273.5q0 39.4 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.6zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[10px] opacity-80">Download on the</span>
        <span className="block text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}

/** Google Play badge. */
function GooglePlayBadge() {
  return (
    <a
      href="#"
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-2.5 rounded-xl bg-[#111] px-4 py-2.5 text-white shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden>
        <path fill="#00d4ff" d="M48 59.5v393c0 6 3.4 11.3 8.4 14L257 256 56.4 45.5C51.4 48.2 48 53.5 48 59.5z" />
        <path fill="#00f076" d="M338.5 175.5L257 256 56.4 45.5l254.7 144.3z" />
        <path fill="#ff3a44" d="M338.5 336.5L311.1 322.2 257 256l81.5-80.5 79.1 44.8c14.6 8.3 14.6 28.9 0 37.2z" />
        <path fill="#ffc400" d="M257 256L56.4 466.5c4.9 2.7 11 2.6 16.3-.4L338.5 336.5z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[10px] opacity-80">Get it on</span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

/** Phone frame with optional real screenshot (drop into /public/app/). */
function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[230px] shrink-0 rounded-[2.4rem] border-[7px] border-[#1f2937] bg-[#1f2937] shadow-2xl ${className}`}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-[#1f2937]" />
      <div className="aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-background">
        {children}
      </div>
    </div>
  );
}

const subjectTiles = [
  { name: "Math", emoji: "🔢", color: "#8b5cf6" },
  { name: "Science", emoji: "🔬", color: "#10b981" },
  { name: "English", emoji: "📖", color: "#3b82f6" },
];

const missions = [
  { emoji: "🚀", color: "#8b5cf6" },
  { emoji: "🧩", color: "#3b82f6" },
  { emoji: "⭐", color: "#fbbf24" },
  { emoji: "🐢", color: "#10b981" },
  { emoji: "🎨", color: "#ec4899" },
  { emoji: "🎵", color: "#06b6d4" },
];

export function AppShowcase() {
  return (
    <section id="app" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Copy + badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The whole app, right in their hands.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lessons, quizzes, and the Fun Zone — gamified so kids actually
              want to come back. Download it free and start your child&rsquo;s
              smart path today.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4">
              {perks.map((p) => (
                <li key={p.label} className="flex items-center gap-2.5 text-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-[#7c3aed]">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{p.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="flex items-end">
              {/* Home / dashboard */}
              <PhoneFrame className="z-10 -mr-12 translate-y-4 rotate-[-5deg]">
                <div className="flex h-full flex-col p-3 text-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="grid h-7 w-7 place-items-center rounded-full brand-gradient text-xs">
                        🦊
                      </span>
                      <span className="text-[11px] font-bold">Hi, Maria!</span>
                    </div>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-[#7c3aed]">
                      ⭐ 1,240
                    </span>
                  </div>

                  <div className="mt-3 rounded-2xl brand-gradient p-3 text-foreground">
                    <div className="text-[10px] font-bold">🔥 5-day streak!</div>
                    <div className="mt-0.5 text-[9px] opacity-80">
                      Keep it going today
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl bg-card p-2.5 ring-1 ring-foreground/10">
                    <div className="text-[10px] font-bold">Continue: Math</div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-3/5 rounded-full bg-[#8b5cf6]" />
                    </div>
                    <div className="mt-1 text-[8px] text-muted-foreground">
                      Lesson 6 of 10
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {subjectTiles.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-xl p-2 text-center"
                        style={{ backgroundColor: `${s.color}1a` }}
                      >
                        <div className="text-base">{s.emoji}</div>
                        <div
                          className="mt-0.5 text-[8px] font-bold"
                          style={{ color: s.color }}
                        >
                          {s.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>

              {/* Fun Zone */}
              <PhoneFrame className="rotate-[5deg]">
                <div className="flex h-full flex-col p-3 text-foreground">
                  <div className="text-[11px] font-extrabold">Fun Zone 🎮</div>
                  <div className="text-[8px] text-muted-foreground">
                    12 missions to explore
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {missions.map((m, i) => (
                      <div
                        key={i}
                        className="grid aspect-square place-items-center rounded-2xl"
                        style={{ backgroundColor: `${m.color}1f` }}
                      >
                        <span className="text-2xl">{m.emoji}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-2xl brand-gradient p-2 text-center text-[9px] font-bold text-foreground">
                    🏆 Earn badges as you play
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
