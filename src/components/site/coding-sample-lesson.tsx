"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Maximize2,
  Minimize2,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  Video,
} from "lucide-react";

type StepId = "video" | "mission" | "playground";

interface AppBridgeEvent {
  type?: string;
  mission?: string;
  playground?: string;
  stars?: number;
  mistakes?: number;
  seconds?: number;
  badge?: string;
  goals?: string[];
}

const LESSON_META = {
  id: "2.2.2",
  title: "Keeping Score",
  subtitle: "Change score by one",
  track: "Level 2 · Game Creators",
  unit: "Unit 2.2 · Variables",
  badgeName: "Score Keeper",
  missionSummary: "Add 1 to score every time the basket catches a mango.",
  videoUrl: "/demo/coding-2-2-2/video.mp4",
  videoPoster: "/demo/coding-2-2-2/art/bg/l2_game_canvas.jpg",
  missionUrl: "/demo/coding-2-2-2/player/mission.html?id=2.2.2&base=../",
  playgroundUrl: "/demo/coding-2-2-2/playground/stage.html?id=2.2.2&base=../",
} as const;

const STORAGE_KEYS = [
  "spc_pg_2.2.2",
  "spc_pg_2.2.2_goals",
  "spc_pg_2.2.2_badge",
];

/**
 * Interactive preview embedding the authentic Lesson 2.2.2 ("Keeping Score")
 * assets directly from the SmartPath Coding app: concept video, guided Mission
 * player (`mission.html`), and block-coding Stage Playground (`stage.html`).
 */
export function CodingSampleLesson() {
  const [step, setStep] = useState<StepId>("video");
  const [watchedVideo, setWatchedVideo] = useState(false);
  const [missionStars, setMissionStars] = useState<number | null>(null);
  const [badgeEarned, setBadgeEarned] = useState(false);
  const [completedLoop, setCompletedLoop] = useState(false);
  const [missionRunKey, setMissionRunKey] = useState(1);
  const [playgroundRunKey, setPlaygroundRunKey] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const frameWrapRef = useRef<HTMLDivElement>(null);

  const selectStep = (nextStep: StepId) => {
    if (nextStep !== "video" && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCompletedLoop(false);
    setStep(nextStep);
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (event.origin !== window.location.origin) return;
      const payload = event.data as AppBridgeEvent | null;
      if (!payload || typeof payload !== "object") return;

      if (payload.mission === LESSON_META.id) {
        if (payload.type === "missionComplete") {
          setMissionStars(typeof payload.stars === "number" ? payload.stars : 3);
        } else if (payload.type === "next") {
          setStep("playground");
        } else if (payload.type === "close") {
          setStep("video");
        }
      }

      if (payload.playground === LESSON_META.id) {
        if (payload.type === "badgeEarned") {
          setBadgeEarned(true);
        } else if (payload.type === "next") {
          setBadgeEarned(true);
          setCompletedLoop(true);
        } else if (payload.type === "close") {
          setStep("mission");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const toggleFullscreen = async () => {
    const el = frameWrapRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      // Fallback safely when fullscreen API is blocked by browser policy.
    }
  };

  const restartActiveIframe = () => {
    if (step === "mission") {
      setMissionRunKey((k) => k + 1);
      return;
    }
    if (step === "playground") {
      try {
        for (const key of STORAGE_KEYS) {
          window.localStorage.removeItem(key);
        }
      } catch {
        // Ignore storage access errors in private browsing.
      }
      setBadgeEarned(false);
      setCompletedLoop(false);
      setPlaygroundRunKey((k) => k + 1);
    }
  };

  const steps: {
    id: StepId;
    num: string;
    label: string;
    sublabel: string;
    icon: typeof Video;
    done: boolean;
  }[] = [
    {
      id: "video",
      num: "1",
      label: "Watch Video",
      sublabel: "Concept (1:21)",
      icon: Video,
      done: watchedVideo,
    },
    {
      id: "mission",
      num: "2",
      label: "Guided Mission",
      sublabel: "6 interactive tasks",
      icon: Target,
      done: missionStars !== null,
    },
    {
      id: "playground",
      num: "3",
      label: "Creative Playground",
      sublabel: "Mango Catch game",
      icon: Gamepad2,
      done: badgeEarned,
    },
  ];

  const activeIframeUrl =
    step === "mission" ? LESSON_META.missionUrl : LESSON_META.playgroundUrl;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-purple-900/5 overflow-hidden dark:border-white/10 dark:bg-slate-900">
      {/* Header bar */}
      <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-amber-50/80 via-purple-50/70 to-sky-50/80 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between dark:border-white/10 dark:from-amber-950/30 dark:via-purple-950/30 dark:to-sky-950/30">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" /> Real App Lesson · {LESSON_META.track}
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
              {LESSON_META.unit}
            </span>
          </div>
          <h3 className="mt-1.5 font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Lesson {LESSON_META.id} · {LESSON_META.title}
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            {LESSON_META.subtitle} — {LESSON_META.missionSummary}
          </p>
        </div>

        {/* Progress badges + 3-Step Switcher */}
        <div className="flex flex-col items-start gap-2 lg:items-end">
          {(missionStars !== null || badgeEarned) && (
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold">
              {missionStars !== null && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200">
                  <Sparkles className="h-3 w-3" /> Mission Cleared ({"★".repeat(Math.max(1, missionStars))})
                </span>
              )}
              {badgeEarned && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
                  <Trophy className="h-3 w-3" /> {LESSON_META.badgeName} Badge Earned
                </span>
              )}
            </div>
          )}

          <div
            role="tablist"
            aria-label="Lesson learning steps"
            className="flex flex-wrap gap-1.5 rounded-2xl bg-white/85 p-1.5 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-950/70 dark:ring-white/10"
          >
            {steps.map((s) => {
              const Icon = s.icon;
              const active = step === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectStep(s.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-left transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="leading-tight">
                    <span className="block text-xs font-extrabold">
                      {s.num}. {s.label}
                    </span>
                    <span
                      className={`hidden sm:block text-[10px] font-semibold ${
                        active ? "text-purple-100" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {s.sublabel}
                    </span>
                  </span>
                  {s.done && (
                    <CheckCircle2
                      className={`h-4 w-4 shrink-0 ${
                        active ? "text-emerald-300" : "text-emerald-500"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-4 sm:p-6">
        {step === "video" && (
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-950 shadow-lg dark:border-white/10">
                <video
                  ref={videoRef}
                  src={LESSON_META.videoUrl}
                  poster={LESSON_META.videoPoster}
                  controls
                  playsInline
                  preload="metadata"
                  onEnded={() => setWatchedVideo(true)}
                  className="aspect-video w-full object-contain bg-black"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <Play className="h-3.5 w-3.5 text-amber-500" /> Concept Video · Lesson {LESSON_META.id}: {LESSON_META.title}
                </span>
                <span>1 min 21 sec · Codi Animated Lesson</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="rounded-2xl bg-amber-50/90 border border-amber-200/90 p-5 dark:bg-amber-950/30 dark:border-amber-800/40">
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                  Inside the Real Lesson
                </div>
                <h4 className="mt-1 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                  How games keep track of score
                </h4>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Kids learn how a <strong>variable</strong> works by catching mangoes from Lolo&apos;s tree. Start <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-xs font-bold text-orange-700 dark:bg-slate-900 dark:text-orange-300">score = 0</code> on the green flag, then change <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-xs font-bold text-orange-700 dark:bg-slate-900 dark:text-orange-300">score</code> by <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-xs font-bold text-orange-700 dark:bg-slate-900 dark:text-orange-300">1</code> each time the basket catches a mango.
                </p>

                <div className="mt-4 space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 dark:bg-slate-900/70">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white">1</span>
                    <span>Watch Codi introduce variables &amp; counting</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 dark:bg-slate-900/70">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[10px] font-black text-white">2</span>
                    <span>Solve 6 hands-on block &amp; bug-fix puzzles</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 dark:bg-slate-900/70">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-black text-white">3</span>
                    <span>Play &amp; remix the live Mango Catch game</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => selectStep("mission")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-500/20 transition-all hover:brightness-105 cursor-pointer"
              >
                {watchedVideo
                  ? "Video Complete! Continue to Step 2: Guided Mission"
                  : "Continue to Step 2: Guided Mission"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {(step === "mission" || step === "playground") && (
          <div className="space-y-3">
            {/* Control strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-white/10 dark:bg-slate-950/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                {step === "mission" ? (
                  <>
                    <Target className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>
                      Tap <strong>Let&apos;s Go! ▶</strong> inside the Mission to hear Codi&apos;s voice &amp; solve all 6 coding puzzles.
                    </span>
                  </>
                ) : (
                  <>
                    <Gamepad2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>
                      Press the <strong>Green Flag ▶</strong> in the Stage, move the Basket with arrow keys or touch arrows, then customize blocks to earn <strong>{LESSON_META.badgeName}</strong>!
                    </span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={restartActiveIframe}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Restart
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="h-3.5 w-3.5" /> Exit Fullscreen
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-3.5 w-3.5" /> Fullscreen
                    </>
                  )}
                </button>
                <a
                  href={activeIframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Open Full Tab
                </a>
              </div>
            </div>

            {/* Real App Iframe Container */}
            <div
              ref={frameWrapRef}
              className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-inner dark:border-white/15"
            >
              {step === "mission" ? (
                <iframe
                  key={`mission-${missionRunKey}`}
                  src={LESSON_META.missionUrl}
                  title={`SmartPath Coding Real Lesson ${LESSON_META.id} — Guided Mission`}
                  allow="autoplay; fullscreen"
                  className={`w-full border-0 bg-white ${
                    isFullscreen ? "h-screen" : "h-[560px] sm:h-[640px] lg:h-[680px]"
                  }`}
                />
              ) : (
                <iframe
                  key={`playground-${playgroundRunKey}`}
                  src={LESSON_META.playgroundUrl}
                  title={`SmartPath Coding Real Lesson ${LESSON_META.id} — Creative Playground`}
                  allow="autoplay; fullscreen"
                  className={`w-full border-0 bg-white ${
                    isFullscreen ? "h-screen" : "h-[620px] sm:h-[680px] lg:h-[740px]"
                  }`}
                />
              )}
            </div>

            {completedLoop && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-800/50 dark:bg-emerald-950/35">
                <div className="flex items-center gap-2.5 text-sm font-bold text-emerald-900 dark:text-emerald-100">
                  <Trophy className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    Awesome work! You completed the full Lesson {LESSON_META.id} loop (Video → Mission → Playground).
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => selectStep("video")}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-emerald-700 cursor-pointer shrink-0"
                >
                  Replay From Step 1 <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Quick step navigation footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>
                {step === "mission"
                  ? "Finished early or want to jump ahead?"
                  : "Want to revisit the guided exercises?"}
              </span>
              {step === "mission" ? (
                <button
                  type="button"
                  onClick={() => selectStep("playground")}
                  className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 dark:text-purple-400 cursor-pointer"
                >
                  Jump to Step 3: Creative Playground <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => selectStep("mission")}
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 dark:text-sky-400 cursor-pointer"
                >
                  Back to Step 2: Guided Mission
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
