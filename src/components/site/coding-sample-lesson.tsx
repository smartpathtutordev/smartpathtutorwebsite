"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  RotateCw,
  ArrowUp,
  Delete,
  Sparkles,
  CheckCircle2,
  Trophy,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

type Direction = "E" | "S" | "W" | "N";
type BlockType = "F" | "L" | "R";

interface Level {
  id: number;
  title: string;
  badge: string;
  objective: string;
  story: string;
  rows: number;
  cols: number;
  start: { r: number; c: number; dir: Direction };
  goal: { r: number; c: number; img: string; name: string };
  obstacles: Array<{ r: number; c: number; img?: string; emoji?: string; name: string }>;
  allowedBlocks: BlockType[];
  hint: string;
  expectedMin: number;
}

const SAMPLE_LEVELS: Level[] = [
  {
    id: 1,
    title: "Level 1: Sari-Sari Store Run",
    badge: "Step-by-Step Sequence",
    objective: "Move Codi straight to the sari-sari store for hot morning pandesal!",
    story: "In computing, an algorithm is simply a step-by-step recipe. Tap Forward 3 times!",
    rows: 1,
    cols: 4,
    start: { r: 0, c: 0, dir: "E" },
    goal: { r: 0, c: 3, img: "/images/coding/props/sari_sari.png", name: "Sari-Sari Store" },
    obstacles: [],
    allowedBlocks: ["F"],
    hint: "The store is 3 squares to the right. Add 3 Forward blocks, then press Run Code!",
    expectedMin: 3,
  },
  {
    id: 2,
    title: "Level 2: Puppy's Tasty Bone",
    badge: "Turning Corners",
    objective: "Help the puppy walk forward, turn the corner, and fetch the bone!",
    story: "Computers don't know where to turn unless you tell them. Use a Turn Right block!",
    rows: 3,
    cols: 3,
    start: { r: 0, c: 0, dir: "E" },
    goal: { r: 2, c: 2, img: "/images/coding/props/bone.png", name: "Bone" },
    obstacles: [
      { r: 1, c: 1, emoji: "🌳", name: "Garden Bush" },
    ],
    allowedBlocks: ["F", "R", "L"],
    hint: "Try: Forward 2 times ➔ Turn Right ➔ Forward 2 times!",
    expectedMin: 5,
  },
  {
    id: 3,
    title: "Level 3: Secret Island Treasure",
    badge: "Obstacle Navigation",
    objective: "Plan an algorithm around the rocks to unlock the golden chest!",
    story: "Real programmers test, fix bugs, and try again. Navigate around both obstacles!",
    rows: 3,
    cols: 4,
    start: { r: 0, c: 0, dir: "E" },
    goal: { r: 2, c: 3, img: "/images/coding/props/treasure.png", name: "Treasure Chest" },
    obstacles: [
      { r: 0, c: 1, emoji: "🪨", name: "Big Rock" },
      { r: 1, c: 2, emoji: "🌴", name: "Palm Tree" },
    ],
    allowedBlocks: ["F", "L", "R"],
    hint: "Turn Right first to avoid the rock, then weave your way to the chest!",
    expectedMin: 6,
  },
];

// Audio chime helper using Web Audio API (zero external assets)
function playTone(freq: number, type: OscillatorType = "sine", duration = 0.15) {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
    // Ignore audio permission/context errors
  }
}

function playSuccessChime() {
  playTone(523.25, "sine", 0.12); // C5
  setTimeout(() => playTone(659.25, "sine", 0.12), 120); // E5
  setTimeout(() => playTone(783.99, "sine", 0.15), 240); // G5
  setTimeout(() => playTone(1046.5, "sine", 0.35), 360); // C6
}

function playStepSound() {
  playTone(440, "triangle", 0.08);
}

function playErrorSound() {
  playTone(220, "sawtooth", 0.2);
}

export function CodingSampleLesson() {
  const [levelIdx, setLevelIdx] = useState(0);
  const level = SAMPLE_LEVELS[levelIdx];

  const [program, setProgram] = useState<BlockType[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [robotPos, setRobotPos] = useState<{ r: number; c: number; dir: Direction }>(level.start);
  const [status, setStatus] = useState<"idle" | "running" | "success" | "bump">("idle");
  const [message, setMessage] = useState<string>(level.hint);

  const runAbortRef = useRef(false);

  // Reset when level changes
  useEffect(() => {
    runAbortRef.current = true;
    setIsRunning(false);
    setActiveStep(null);
    setRobotPos(level.start);
    setProgram([]);
    setStatus("idle");
    setMessage(level.hint);
  }, [levelIdx, level]);

  const addBlock = (block: BlockType) => {
    if (isRunning || program.length >= 12) return;
    setProgram((prev) => [...prev, block]);
    playStepSound();
  };

  const removeLastBlock = () => {
    if (isRunning || program.length === 0) return;
    setProgram((prev) => prev.slice(0, -1));
  };

  const clearProgram = () => {
    if (isRunning) return;
    setProgram([]);
    setRobotPos(level.start);
    setStatus("idle");
    setMessage(level.hint);
  };

  const resetSimulation = useCallback(() => {
    runAbortRef.current = true;
    setIsRunning(false);
    setActiveStep(null);
    setRobotPos(level.start);
    setStatus("idle");
    setMessage(level.hint);
  }, [level.hint, level.start]);

  const runCode = async () => {
    if (isRunning || program.length === 0) return;

    setIsRunning(true);
    setStatus("running");
    setMessage("Codi is running your algorithm step by step...");
    runAbortRef.current = false;

    let curr = { ...level.start };
    setRobotPos(curr);

    const DIRS: Direction[] = ["E", "S", "W", "N"];

    for (let i = 0; i < program.length; i++) {
      if (runAbortRef.current) break;

      setActiveStep(i);
      const cmd = program[i];

      if (cmd === "L") {
        const idx = DIRS.indexOf(curr.dir);
        const nextDir = DIRS[(idx + 3) % 4];
        curr = { ...curr, dir: nextDir };
        setRobotPos(curr);
        playStepSound();
      } else if (cmd === "R") {
        const idx = DIRS.indexOf(curr.dir);
        const nextDir = DIRS[(idx + 1) % 4];
        curr = { ...curr, dir: nextDir };
        setRobotPos(curr);
        playStepSound();
      } else if (cmd === "F") {
        let { r, c } = curr;
        if (curr.dir === "E") c += 1;
        else if (curr.dir === "S") r += 1;
        else if (curr.dir === "W") c -= 1;
        else if (curr.dir === "N") r -= 1;

        // Check bounds
        if (r < 0 || r >= level.rows || c < 0 || c >= level.cols) {
          playErrorSound();
          setStatus("bump");
          setMessage("Oops! Codi hit the edge of the world. Check your steps and try again!");
          setIsRunning(false);
          setActiveStep(null);
          return;
        }

        // Check obstacle collision
        const hitObstacle = level.obstacles.find((obs) => obs.r === r && obs.c === c);
        if (hitObstacle) {
          playErrorSound();
          setStatus("bump");
          setMessage(`Bump! Codi ran into the ${hitObstacle.name}. Coders debug and try again!`);
          setIsRunning(false);
          setActiveStep(null);
          return;
        }

        curr = { ...curr, r, c };
        setRobotPos(curr);
        playStepSound();
      }

      // Check if reached goal
      if (curr.r === level.goal.r && curr.c === level.goal.c) {
        await new Promise((resolve) => setTimeout(resolve, 350));
        playSuccessChime();
        setStatus("success");
        setMessage(`🎉 Congratulations! You guided Codi to the ${level.goal.name} with a working algorithm!`);
        setIsRunning(false);
        setActiveStep(null);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 450));
    }

    // Finished program without reaching goal
    if (!runAbortRef.current) {
      if (curr.r !== level.goal.r || curr.c !== level.goal.c) {
        playTone(330, "sine", 0.2);
        setStatus("idle");
        setMessage("Almost there! Codi didn't quite reach the goal. Add more steps!");
      }
      setIsRunning(false);
      setActiveStep(null);
    }
  };

  // Direction rotation angles
  const getRotationDeg = (dir: Direction) => {
    switch (dir) {
      case "E": return 0;
      case "S": return 90;
      case "W": return 180;
      case "N": return 270;
    }
  };

  return (
    <div className="card-premium relative overflow-hidden rounded-3xl border-2 border-purple-500/30 bg-gradient-to-b from-purple-500/[0.04] via-white to-purple-500/[0.02] p-5 sm:p-8 shadow-2xl dark:border-purple-400/20 dark:from-purple-950/20 dark:via-slate-900/90 dark:to-slate-950">
      
      {/* Decorative Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-500/10"
      />

      {/* Header bar: Level selector & instructions */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Sample Lesson Demo
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs font-bold text-purple-700 dark:text-purple-300">
              {level.badge}
            </span>
          </div>
          <h3 className="mt-2 font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {level.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {level.objective}
          </p>
        </div>

        {/* Level Switcher Tabs */}
        <div className="flex items-center gap-1.5 self-start md:self-center rounded-2xl bg-slate-100 p-1.5 dark:bg-slate-800/80">
          {SAMPLE_LEVELS.map((lvl, idx) => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => setLevelIdx(idx)}
              disabled={isRunning}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all ${
                levelIdx === idx
                  ? "bg-white text-purple-700 shadow-md dark:bg-slate-900 dark:text-purple-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              } ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Mission {lvl.id}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Play Area */}
      <div className="relative z-10 mt-6 grid items-center gap-8 lg:grid-cols-12">
        
        {/* Left: The Visual Grid Maze */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Codi Speech / Status Bubble */}
          <div className="w-full max-w-md mb-4 flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-white/90 p-3.5 shadow-sm dark:bg-slate-900/90">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-purple-500/30 bg-purple-100 dark:bg-purple-950/50">
              <Image
                src={
                  status === "success"
                    ? "/images/coding/codi_celebrate.png"
                    : status === "bump"
                    ? "/images/coding/codi_surprised.png"
                    : "/images/coding/codi_point.png"
                }
                alt="Codi the Robot"
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              <span className="text-purple-600 dark:text-purple-400 font-extrabold">Codi: </span>
              {message}
            </div>
          </div>

          {/* Maze Grid Container */}
          <div className="relative rounded-3xl border-4 border-purple-500/20 bg-gradient-to-b from-sky-50 to-indigo-50/50 p-4 sm:p-6 shadow-inner dark:from-slate-900 dark:to-slate-950">
            <div
              className="grid gap-2.5 sm:gap-3.5"
              style={{
                gridTemplateRows: `repeat(${level.rows}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${level.cols}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: level.rows }).map((_, r) =>
                Array.from({ length: level.cols }).map((_, c) => {
                  const isRobotHere = robotPos.r === r && robotPos.c === c;
                  const isGoalHere = level.goal.r === r && level.goal.c === c;
                  const obstacle = level.obstacles.find((obs) => obs.r === r && obs.c === c);

                  return (
                    <div
                      key={`${r}-${c}`}
                      className={`relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border-2 transition-colors ${
                        isRobotHere
                          ? "border-purple-500 bg-purple-500/15 shadow-md dark:bg-purple-500/20"
                          : isGoalHere
                          ? "border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/15"
                          : obstacle
                          ? "border-amber-500/40 bg-amber-500/10 dark:bg-amber-500/15"
                          : "border-slate-300/60 bg-white/80 dark:border-slate-700/60 dark:bg-slate-800/60"
                      }`}
                    >
                      {/* Grid Coordinate watermark */}
                      <span className="absolute bottom-1 right-1.5 text-[10px] font-mono text-slate-400/60 dark:text-slate-500/60">
                        {r},{c}
                      </span>

                      {/* Goal Item */}
                      {isGoalHere && (
                        <motion.div
                          animate={{ scale: isRobotHere ? 1.15 : [1, 1.06, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="relative h-11 w-11 sm:h-14 sm:w-14"
                        >
                          <Image
                            src={level.goal.img}
                            alt={level.goal.name}
                            fill
                            sizes="56px"
                            className="object-contain drop-shadow"
                          />
                        </motion.div>
                      )}

                      {/* Obstacle Item */}
                      {obstacle && !isRobotHere && (
                        <div className="flex flex-col items-center">
                          <span className="text-2xl sm:text-3xl select-none drop-shadow">
                            {obstacle.emoji || "🚧"}
                          </span>
                        </div>
                      )}

                      {/* Codi the Robot Avatar */}
                      {isRobotHere && (
                        <motion.div
                          initial={false}
                          animate={{ rotate: getRotationDeg(robotPos.dir) }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="relative h-12 w-12 sm:h-14 sm:w-14 z-20"
                        >
                          <Image
                            src={
                              status === "success"
                                ? "/images/coding/codi_celebrate.png"
                                : status === "bump"
                                ? "/images/coding/codi_surprised.png"
                                : "/images/coding/app-icon.png"
                            }
                            alt="Codi"
                            fill
                            sizes="56px"
                            className="object-contain drop-shadow-md"
                          />
                          {/* Compass indicator pointing forward */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-500 shadow-sm" />
                        </motion.div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Green dot on Codi shows facing direction
            </span>
          </div>
        </div>

        {/* Right: Coding Block Palette & Program Sequence */}
        <div className="lg:col-span-5 flex flex-col space-y-5">
          
          {/* Blocks Palette */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                1. Tap blocks to build code
              </span>
              <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400">
                {program.length}/12 blocks
              </span>
            </div>

            <div className="mt-2.5 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => addBlock("F")}
                disabled={isRunning || program.length >= 12}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-indigo-500/30 bg-indigo-500/10 p-3 text-indigo-700 transition hover:bg-indigo-500/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-indigo-500/20 dark:text-indigo-300"
              >
                <ArrowUp className="h-5 w-5" />
                <span className="text-xs font-black">Forward</span>
              </button>

              <button
                type="button"
                onClick={() => addBlock("L")}
                disabled={isRunning || program.length >= 12 || !level.allowedBlocks.includes("L")}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-purple-500/30 bg-purple-500/10 p-3 text-purple-700 transition hover:bg-purple-500/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-purple-500/20 dark:text-purple-300"
              >
                <RotateCcw className="h-5 w-5" />
                <span className="text-xs font-black">Turn Left</span>
              </button>

              <button
                type="button"
                onClick={() => addBlock("R")}
                disabled={isRunning || program.length >= 12 || !level.allowedBlocks.includes("R")}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-amber-500/30 bg-amber-500/10 p-3 text-amber-700 transition hover:bg-amber-500/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-amber-500/20 dark:text-amber-300"
              >
                <RotateCw className="h-5 w-5" />
                <span className="text-xs font-black">Turn Right</span>
              </button>
            </div>
          </div>

          {/* Program Sequence Tray */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                2. Your Program Sequence
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={removeLastBlock}
                  disabled={isRunning || program.length === 0}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-rose-600 disabled:opacity-40 dark:text-slate-400"
                  title="Remove last step"
                >
                  <Delete className="h-3 w-3" />
                  <span>Undo</span>
                </button>
                <button
                  type="button"
                  onClick={clearProgram}
                  disabled={isRunning || program.length === 0}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-rose-600 disabled:opacity-40 dark:text-slate-400"
                  title="Clear all steps"
                >
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <div className="mt-2.5 min-h-[72px] rounded-2xl border-2 border-dashed border-slate-300 bg-white/70 p-2.5 dark:border-slate-700 dark:bg-slate-900/60">
              {program.length === 0 ? (
                <div className="flex h-12 items-center justify-center text-xs font-semibold text-slate-400">
                  Tap blocks above to write Codi&apos;s code!
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-1.5">
                  {program.map((cmd, idx) => {
                    const isStepActive = activeStep === idx;
                    const label = cmd === "F" ? "Forward" : cmd === "L" ? "Turn L" : "Turn R";
                    const color =
                      cmd === "F"
                        ? "bg-indigo-600 text-white"
                        : cmd === "L"
                        ? "bg-purple-600 text-white"
                        : "bg-amber-600 text-white";

                    return (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                          scale: isStepActive ? 1.15 : 1,
                          opacity: 1,
                        }}
                        className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-black shadow-sm transition-all ${color} ${
                          isStepActive ? "ring-4 ring-emerald-400" : ""
                        }`}
                      >
                        <span className="text-[10px] opacity-75">{idx + 1}.</span>
                        <span>{label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Action Execution Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={runCode}
              disabled={isRunning || program.length === 0}
              className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>{isRunning ? "Running Algorithm..." : "▶ Run Code"}</span>
            </button>

            <button
              type="button"
              onClick={resetSimulation}
              disabled={isRunning && !status}
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-4 text-xs font-extrabold text-slate-700 hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              title="Reset Codi position"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>

          {/* Success Banner & Next Steps */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-900 dark:text-emerald-200"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-heading font-black text-sm">
                    Awesome job! You solved Mission {level.id}!
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-emerald-800 dark:text-emerald-300">
                  You just used sequential logic and spatial debugging — the exact fundamentals taught in computer science.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {levelIdx < SAMPLE_LEVELS.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setLevelIdx((prev) => prev + 1)}
                      className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-black text-white shadow hover:bg-emerald-700"
                    >
                      <span>Try Mission {level.id + 1}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                  <a
                    href="https://coding.smartpathtutor.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-black text-white shadow hover:bg-purple-700"
                  >
                    <span>Play 771 More Missions ↗</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
