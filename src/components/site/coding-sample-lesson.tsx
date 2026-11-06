"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  ArrowUp,
  Delete,
  Sparkles,
  CheckCircle2,
  Trophy,
  Video,
  Gamepad2,
  Palette,
  ChevronRight,
} from "lucide-react";

type Direction = "E" | "S" | "W" | "N";
type BlockType = "F" | "L" | "R";
type LessonStep = "watch" | "mission" | "playground";

// Official signed Supabase video URL for Lesson 0.1.4 (Step Forward!)
const VIDEO_014_URL =
  "https://wfojmcuwgxwiawhmitjs.supabase.co/storage/v1/object/sign/coding-videos/en/0.1.4.mp4?token=eyJraWQiOiI0YzFmMDgyOC00YmUxLTQ4ODMtYTk4Yy1iNGIzYmU2ZTI1YzMiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJjb2RpbmctdmlkZW9zL2VuLzAuMS40Lm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTM5NzYzODIsImV4cCI6MjEwOTMzNjM4Mn0.eKFmZj9AhKMQckSHb5VxfJ9HnS18AScgUO1hNhPOvI_66Ev3WIfdHQ06qtmPpBY606Q9dapfMKjs5cEqEyZaQQ";

// Audio sound helper using Web Audio API
function playTone(freq: number, type: OscillatorType = "sine", duration = 0.15) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Graceful silence if audio blocked
  }
}

function playSuccessChime() {
  playTone(523.25, "sine", 0.12);
  setTimeout(() => playTone(659.25, "sine", 0.12), 120);
  setTimeout(() => playTone(783.99, "sine", 0.15), 240);
  setTimeout(() => playTone(1046.5, "sine", 0.35), 360);
}

function playStepSound() {
  playTone(440, "triangle", 0.08);
}

function playErrorSound() {
  playTone(220, "sawtooth", 0.2);
}

export function CodingSampleLesson() {
  const [currentStep, setCurrentStep] = useState<LessonStep>("watch");

  // Step 2 Mission State (Lesson 0.1.4: Step Forward!)
  const [missionProgram, setMissionProgram] = useState<BlockType[]>([]);
  const [missionActiveIdx, setMissionActiveIdx] = useState<number | null>(null);
  const [missionRobotCol, setMissionRobotCol] = useState<number>(0);
  const [missionRunning, setMissionRunning] = useState(false);
  const [missionDone, setMissionDone] = useState(false);
  const [missionMsg, setMissionMsg] = useState(
    "Count the squares to the sari-sari store! Add 3 Forward blocks, then press Run Code."
  );

  const missionAbortRef = useRef(false);

  // Step 3 Playground State (Custom street sandbox)
  const [pgDestination, setPgDestination] = useState<"sari_sari" | "lola_house" | "school">("sari_sari");
  const [pgDistance, setPgDistance] = useState<number>(4);
  const [pgProgram, setPgProgram] = useState<BlockType[]>([]);
  const [pgActiveIdx, setPgActiveIdx] = useState<number | null>(null);
  const [pgRobotCol, setPgRobotCol] = useState<number>(0);
  const [pgRunning, setPgRunning] = useState(false);
  const [pgDone, setPgDone] = useState(false);
  const [pgMsg, setPgMsg] = useState(
    "Custom Street Sandbox: Choose your destination and write your own algorithm!"
  );

  const pgAbortRef = useRef(false);

  // --- Mission Functions ---
  const addMissionBlock = (b: BlockType) => {
    if (missionRunning || missionProgram.length >= 6) return;
    setMissionProgram((prev) => [...prev, b]);
    playStepSound();
  };

  const removeMissionLast = () => {
    if (missionRunning || missionProgram.length === 0) return;
    setMissionProgram((prev) => prev.slice(0, -1));
  };

  const resetMission = () => {
    missionAbortRef.current = true;
    setMissionRunning(false);
    setMissionActiveIdx(null);
    setMissionRobotCol(0);
    setMissionDone(false);
    setMissionMsg("Count the squares to the sari-sari store! Add 3 Forward blocks, then press Run Code.");
  };

  const runMission = async () => {
    if (missionRunning || missionProgram.length === 0) return;

    setMissionRunning(true);
    setMissionDone(false);
    setMissionMsg("Codi is running your algorithm step by step...");
    missionAbortRef.current = false;

    let col = 0;
    setMissionRobotCol(0);

    for (let i = 0; i < missionProgram.length; i++) {
      if (missionAbortRef.current) break;
      setMissionActiveIdx(i);

      const cmd = missionProgram[i];
      if (cmd === "F") {
        col += 1;
        if (col > 3) {
          playErrorSound();
          setMissionMsg("Oops! Codi walked past the store. Try exactly 3 Forward steps!");
          setMissionRunning(false);
          setMissionActiveIdx(null);
          return;
        }
        setMissionRobotCol(col);
        playStepSound();
      }

      if (col === 3) {
        await new Promise((r) => setTimeout(r, 350));
        playSuccessChime();
        setMissionDone(true);
        setMissionMsg("🎉 You made it! Yummy hot pandesal from the sari-sari store!");
        setMissionRunning(false);
        setMissionActiveIdx(null);
        return;
      }

      await new Promise((r) => setTimeout(r, 450));
    }

    if (!missionAbortRef.current) {
      if (col < 3) {
        playTone(330, "sine", 0.2);
        setMissionMsg(`Almost there! Codi is at square ${col + 1} of 4. Add more Forward blocks!`);
      }
      setMissionRunning(false);
      setMissionActiveIdx(null);
    }
  };

  // --- Playground Functions ---
  const addPgBlock = (b: BlockType) => {
    if (pgRunning || pgProgram.length >= 8) return;
    setPgProgram((prev) => [...prev, b]);
    playStepSound();
  };

  const removePgLast = () => {
    if (pgRunning || pgProgram.length === 0) return;
    setPgProgram((prev) => prev.slice(0, -1));
  };

  const resetPg = () => {
    pgAbortRef.current = true;
    setPgRunning(false);
    setPgActiveIdx(null);
    setPgRobotCol(0);
    setPgDone(false);
    setPgMsg(`Move Codi ${pgDistance} steps forward to reach your custom destination!`);
  };

  const runPg = async () => {
    if (pgRunning || pgProgram.length === 0) return;

    setPgRunning(true);
    setPgDone(false);
    setPgMsg("Testing your custom sandbox program...");
    pgAbortRef.current = false;

    let col = 0;
    setPgRobotCol(0);

    for (let i = 0; i < pgProgram.length; i++) {
      if (pgAbortRef.current) break;
      setPgActiveIdx(i);

      const cmd = pgProgram[i];
      if (cmd === "F") {
        col += 1;
        if (col > pgDistance) {
          playErrorSound();
          setPgMsg(`Oops! You walked ${col} steps, but the goal was at step ${pgDistance}!`);
          setPgRunning(false);
          setPgActiveIdx(null);
          return;
        }
        setPgRobotCol(col);
        playStepSound();
      }

      if (col === pgDistance) {
        await new Promise((r) => setTimeout(r, 350));
        playSuccessChime();
        setPgDone(true);
        setPgMsg("🌟 Outstanding! Your custom sandbox algorithm worked perfectly!");
        setPgRunning(false);
        setPgActiveIdx(null);
        return;
      }

      await new Promise((r) => setTimeout(r, 450));
    }

    if (!pgAbortRef.current) {
      if (col < pgDistance) {
        setPgMsg(`You took ${col} step(s). You need ${pgDistance} steps to reach the destination!`);
      }
      setPgRunning(false);
      setPgActiveIdx(null);
    }
  };

  const destImages = {
    sari_sari: "/images/coding/props/sari_sari.png",
    lola_house: "/images/coding/props/lola_house.png",
    school: "/images/coding/props/school_building.png",
  };

  const destNames = {
    sari_sari: "Sari-Sari Store",
    lola_house: "Lola's House",
    school: "Elementary School",
  };

  return (
    <div className="card-premium relative overflow-hidden rounded-3xl border-2 border-purple-500/30 bg-gradient-to-b from-purple-500/[0.04] via-white to-purple-500/[0.02] p-5 sm:p-8 shadow-2xl dark:border-purple-400/20 dark:from-purple-950/20 dark:via-slate-900/90 dark:to-slate-950">
      
      {/* Decorative Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-500/10"
      />

      {/* Top Pedagogical Loop Stepper */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Full Lesson Demo
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Lesson 0.1.4 · Step Forward!
            </span>
          </div>
          <h3 className="mt-1.5 font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            The SmartPath 3-Step Learning Loop
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Every lesson follows this proven mastery structure: <strong>Video ➔ Mission ➔ Playground</strong>.
          </p>
        </div>

        {/* 3 Step Flow Tabs */}
        <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100 p-1.5 dark:bg-slate-800/80 self-start sm:self-center">
          <button
            type="button"
            onClick={() => setCurrentStep("watch")}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
              currentStep === "watch"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
            }`}
          >
            <Video className="h-3.5 w-3.5" />
            <span>1. Watch Video</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentStep("mission")}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
              currentStep === "mission"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>2. Guided Mission</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentStep("playground")}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-black transition-all ${
              currentStep === "playground"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300"
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            <span>3. Playground</span>
          </button>
        </div>
      </div>

      {/* STEP 1: WATCH (CONCEPT VIDEO) */}
      {currentStep === "watch" && (
        <div className="relative z-10 mt-6 grid items-center gap-8 lg:grid-cols-12">
          
          {/* Video Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-orange-500/30 bg-black shadow-xl">
              <video
                src={VIDEO_014_URL}
                controls
                playsInline
                preload="metadata"
                poster="/images/coding/cover_l0.jpg"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 pointer-events-none rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                ▶ Official Concept Video · Lesson 0.1.4
              </div>
            </div>
            <p className="mt-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
              Press play to watch Codi introduce step-by-step algorithms! (1 min)
            </p>
          </div>

          {/* Video Explanation & Next Action */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-orange-950 dark:text-orange-200">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="font-heading font-black text-sm uppercase tracking-wide">
                  Step 1: Concept Video
                </span>
              </div>
              <h4 className="mt-1 font-heading text-lg font-black">
                How Computers Follow Steps
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-orange-900 dark:text-orange-300">
                In this animated lesson, Codi explains that computers are super fast, but they don&apos;t know what to do without instructions from a programmer.
              </p>
            </div>

            <div className="space-y-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Clear spoken narration with friendly robot visuals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Zero reading required for early learners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Connects daily Filipino life (sari-sari store) to computer science</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep("mission")}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 px-6 text-sm font-black text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-700 active:scale-95"
              >
                <span>Continue to Step 2: Guided Mission</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: GUIDED MISSION (INTERACTIVE PUZZLE) */}
      {currentStep === "mission" && (
        <div className="relative z-10 mt-6 grid items-center gap-8 lg:grid-cols-12">
          
          {/* Left: The Mission Grid */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Codi Speech Bubble */}
            <div className="w-full max-w-md mb-4 flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-white/90 p-3.5 shadow-sm dark:bg-slate-900/90">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-purple-500/30 bg-purple-100 dark:bg-purple-950/50">
                <Image
                  src={
                    missionDone
                      ? "/images/coding/codi_celebrate.png"
                      : "/images/coding/codi_point.png"
                  }
                  alt="Codi"
                  fill
                  sizes="44px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                <span className="text-purple-600 dark:text-purple-400 font-extrabold">Codi: </span>
                {missionMsg}
              </div>
            </div>

            {/* 1x4 Grid Street */}
            <div className="relative rounded-3xl border-4 border-purple-500/20 bg-gradient-to-r from-sky-50 to-indigo-50/50 p-4 sm:p-6 shadow-inner dark:from-slate-900 dark:to-slate-950">
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
                {[0, 1, 2, 3].map((c) => {
                  const isRobot = missionRobotCol === c;
                  const isGoal = c === 3;

                  return (
                    <div
                      key={c}
                      className={`relative flex h-20 w-16 sm:h-24 sm:w-20 items-center justify-center rounded-2xl border-2 transition-colors ${
                        isRobot
                          ? "border-purple-500 bg-purple-500/15 shadow-md dark:bg-purple-500/20"
                          : isGoal
                          ? "border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/15"
                          : "border-slate-300/60 bg-white/80 dark:border-slate-700/60 dark:bg-slate-800/60"
                      }`}
                    >
                      <span className="absolute bottom-1 right-1.5 text-[10px] font-mono text-slate-400">
                        {c + 1}
                      </span>

                      {/* Goal: Sari-Sari Store */}
                      {isGoal && (
                        <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                          <Image
                            src="/images/coding/props/sari_sari.png"
                            alt="Sari-Sari Store"
                            fill
                            sizes="64px"
                            className="object-contain drop-shadow"
                          />
                        </div>
                      )}

                      {/* Codi Avatar */}
                      {isRobot && (
                        <motion.div
                          layout
                          className="relative h-14 w-14 sm:h-16 sm:w-16 z-20"
                        >
                          <Image
                            src={
                              missionDone
                                ? "/images/coding/codi_celebrate.png"
                                : "/images/coding/app-icon.png"
                            }
                            alt="Codi"
                            fill
                            sizes="64px"
                            className="object-contain drop-shadow-md"
                          />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 text-xs font-semibold text-slate-500">
              Goal: Walk from Square 1 to Square 4 (3 steps forward)
            </div>
          </div>

          {/* Right: Mission Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Tap Block to Add
                </span>
                <span className="text-[11px] font-bold text-purple-600">
                  {missionProgram.length}/6 steps
                </span>
              </div>

              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => addMissionBlock("F")}
                  disabled={missionRunning || missionProgram.length >= 6}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-indigo-500/30 bg-indigo-500/10 p-3 text-indigo-700 transition hover:bg-indigo-500/20 active:scale-95 disabled:opacity-40"
                >
                  <ArrowUp className="h-5 w-5" />
                  <span className="text-sm font-black">⬆ Forward Block</span>
                </button>
              </div>
            </div>

            {/* Sequence Tray */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Your Code Sequence
                </span>
                <button
                  type="button"
                  onClick={removeMissionLast}
                  disabled={missionRunning || missionProgram.length === 0}
                  className="text-[11px] font-bold text-slate-500 hover:text-rose-600 disabled:opacity-40"
                >
                  <Delete className="h-3 w-3 inline mr-1" />
                  Undo
                </button>
              </div>

              <div className="mt-2 min-h-[58px] rounded-2xl border-2 border-dashed border-slate-300 bg-white/70 p-2.5 dark:border-slate-700 dark:bg-slate-900/60 flex flex-wrap items-center gap-1.5">
                {missionProgram.length === 0 ? (
                  <div className="text-xs font-medium text-slate-400">
                    Tap &quot;Forward Block&quot; 3 times to build code!
                  </div>
                ) : (
                  missionProgram.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`rounded-xl px-2.5 py-1 text-xs font-black text-white bg-indigo-600 shadow-sm ${
                        missionActiveIdx === idx ? "ring-4 ring-emerald-400" : ""
                      }`}
                    >
                      {idx + 1}. Forward
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Run / Reset */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={runMission}
                disabled={missionRunning || missionProgram.length === 0}
                className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-105 active:scale-95 disabled:opacity-50"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>{missionRunning ? "Walking..." : "▶ Run Code"}</span>
              </button>

              <button
                type="button"
                onClick={resetMission}
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-4 text-xs font-extrabold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Mission Done Badge & Next Action */}
            <AnimatePresence>
              {missionDone && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-950 dark:text-emerald-200 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-heading font-black text-sm">
                      Badge Earned: Forward Walker!
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    You coded your first linear algorithm! Now let&apos;s experiment freely in the Playground.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCurrentStep("playground")}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow hover:bg-emerald-700"
                  >
                    <span>Proceed to Step 3: Playground ➔</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* STEP 3: CREATIVE PLAYGROUND (SANDBOX MODE) */}
      {currentStep === "playground" && (
        <div className="relative z-10 mt-6 grid items-center gap-8 lg:grid-cols-12">
          
          {/* Playground Sandbox Display */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Codi Speech Bubble */}
            <div className="w-full max-w-md mb-4 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-white/90 p-3.5 shadow-sm dark:bg-slate-900/90">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50">
                <Image
                  src={
                    pgDone
                      ? "/images/coding/codi_celebrate.png"
                      : "/images/coding/codi_wave.png"
                  }
                  alt="Codi"
                  fill
                  sizes="44px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Codi: </span>
                {pgMsg}
              </div>
            </div>

            {/* Dynamic Grid: 1 row, 5 cols */}
            <div className="relative rounded-3xl border-4 border-emerald-500/20 bg-gradient-to-r from-emerald-50/60 to-teal-50/60 p-4 sm:p-6 shadow-inner dark:from-slate-900 dark:to-slate-950">
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {[0, 1, 2, 3, 4].map((c) => {
                  const isRobot = pgRobotCol === c;
                  const isGoal = c === pgDistance;

                  return (
                    <div
                      key={c}
                      className={`relative flex h-20 w-14 sm:h-24 sm:w-16 items-center justify-center rounded-2xl border-2 transition-colors ${
                        isRobot
                          ? "border-purple-500 bg-purple-500/15 shadow-md"
                          : isGoal
                          ? "border-emerald-500 bg-emerald-500/20 ring-2 ring-emerald-500/30"
                          : "border-slate-300/60 bg-white/80 dark:border-slate-700/60 dark:bg-slate-800/60"
                      }`}
                    >
                      <span className="absolute bottom-1 right-1.5 text-[9px] font-mono text-slate-400">
                        {c}
                      </span>

                      {/* Selected Destination Goal */}
                      {isGoal && (
                        <div className="relative h-11 w-11 sm:h-14 sm:w-14">
                          <Image
                            src={destImages[pgDestination]}
                            alt={destNames[pgDestination]}
                            fill
                            sizes="56px"
                            className="object-contain drop-shadow"
                          />
                        </div>
                      )}

                      {/* Codi Avatar */}
                      {isRobot && (
                        <motion.div
                          layout
                          className="relative h-12 w-12 sm:h-14 sm:w-14 z-20"
                        >
                          <Image
                            src={
                              pgDone
                                ? "/images/coding/codi_celebrate.png"
                                : "/images/coding/app-icon.png"
                            }
                            alt="Codi"
                            fill
                            sizes="56px"
                            className="object-contain drop-shadow"
                          />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 text-xs font-semibold text-slate-500">
              Destination: <strong className="text-slate-800 dark:text-slate-200">{destNames[pgDestination]}</strong> at Square {pgDistance}
            </div>
          </div>

          {/* Right: Sandbox Controls */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Destination Chooser */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                1. Choose Goal Building
              </span>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {(["sari_sari", "lola_house", "school"] as const).map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => {
                      setPgDestination(dest);
                      resetPg();
                    }}
                    className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-2 text-center text-xs font-bold transition ${
                      pgDestination === dest
                        ? "border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200"
                        : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
                    }`}
                  >
                    <div className="relative h-7 w-7">
                      <Image
                        src={destImages[dest]}
                        alt={destNames[dest]}
                        fill
                        sizes="28px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] leading-tight font-extrabold">{destNames[dest]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-black text-slate-600 dark:text-slate-400">
                <span>2. Distance: {pgDistance} steps away</span>
                <div className="flex gap-1.5">
                  {[2, 3, 4].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setPgDistance(d);
                        resetPg();
                      }}
                      className={`h-7 w-7 rounded-lg text-xs font-black ${
                        pgDistance === d
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Code Sequence */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  3. Program Sequence ({pgProgram.length} steps)
                </span>
                <button
                  type="button"
                  onClick={removePgLast}
                  disabled={pgRunning || pgProgram.length === 0}
                  className="text-[11px] font-bold text-slate-500 hover:text-rose-600"
                >
                  Undo
                </button>
              </div>

              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => addPgBlock("F")}
                  disabled={pgRunning || pgProgram.length >= 8}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 py-2.5 text-xs font-black text-indigo-700 hover:bg-indigo-500/20"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span>Add Forward Step</span>
                </button>
              </div>

              <div className="mt-2 min-h-[48px] rounded-xl border border-dashed border-slate-300 bg-white/70 p-2 flex flex-wrap gap-1 dark:border-slate-700 dark:bg-slate-900/60">
                {pgProgram.length === 0 ? (
                  <span className="text-[11px] text-slate-400">Add steps matching your distance ({pgDistance})!</span>
                ) : (
                  pgProgram.map((_, i) => (
                    <span
                      key={i}
                      className={`rounded-lg px-2 py-0.5 text-[11px] font-black text-white bg-indigo-600 ${
                        pgActiveIdx === i ? "ring-2 ring-emerald-400" : ""
                      }`}
                    >
                      F
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Run / Reset */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={runPg}
                disabled={pgRunning || pgProgram.length === 0}
                className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-105 active:scale-95 disabled:opacity-50"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>{pgRunning ? "Running..." : "▶ Test Playground"}</span>
              </button>

              <button
                type="button"
                onClick={resetPg}
                className="inline-flex h-12 items-center justify-center gap-1 rounded-2xl border border-slate-300 bg-white px-4 text-xs font-extrabold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Sandbox Complete Banner */}
            <AnimatePresence>
              {pgDone && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border-2 border-purple-500/40 bg-purple-500/10 p-4 text-purple-950 dark:text-purple-200 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-heading font-black text-sm">
                      Complete Lesson Finished!
                    </span>
                  </div>
                  <p className="text-xs text-purple-900 dark:text-purple-300 leading-relaxed">
                    You experienced the full loop: <strong>1. Watch Video</strong> ➔ <strong>2. Guided Mission</strong> ➔ <strong>3. Creative Playground</strong>! In the full app, projects are saved to each child&apos;s digital portfolio.
                  </p>
                  <div className="pt-1">
                    <a
                      href="https://coding.smartpathtutor.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-4 py-2 text-xs font-black text-white shadow hover:bg-purple-700"
                    >
                      <span>Explore All 147 Lessons at coding.smartpathtutor.ph ↗</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
