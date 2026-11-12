"use client";

// Floating "Ask Tala" chat for parents. Runs entirely in the browser: answers come
// from src/lib/tala-kb.ts by keyword match (the site is a static export, no server).

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Send, X } from "lucide-react";
import {
  TALA_GREETING,
  TALA_START_CHIPS,
  talaAnswer,
  topicById,
  type TalaLink,
} from "@/lib/tala-kb";

type Msg =
  | { from: "user"; text: string }
  | { from: "tala"; paras: string[]; links?: TalaLink[] };

const TEASER_KEY = "tala_chat_teaser_seen";

// **bold** → <strong>. Everything else is plain text (no HTML from strings).
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-extrabold">{p.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

function Para({ text }: { text: string }) {
  const lines = text.split("\n");
  if (lines.every((l) => l.startsWith("• "))) {
    return (
      <ul className="space-y-1">
        {lines.map((l, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span><Rich text={l.slice(2)} /></span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      {lines.map((l, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <Rich text={l} />
        </Fragment>
      ))}
    </p>
  );
}

export function TalaChat() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<string[]>(TALA_START_CHIPS);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "tala", paras: TALA_GREETING }]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show the "May tanong ka?" bubble once per visitor, a few seconds in.
  useEffect(() => {
    let seen = false;
    try { seen = localStorage.getItem(TEASER_KEY) === "1"; } catch {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const last = list.lastElementChild as HTMLElement | null;
    // A long answer from Tala should be read from its start, not its end.
    const top =
      !typing && msgs[msgs.length - 1]?.from === "tala" && msgs.length > 1 && last
        ? last.offsetTop - list.offsetTop - 8
        : list.scrollHeight;
    list.scrollTo({ top, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    // Focus only on devices with a real keyboard; on phones it would pop the keyboard over the answers.
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const dismissTeaser = () => {
    setTeaser(false);
    try { localStorage.setItem(TEASER_KEY, "1"); } catch {}
  };

  const openChat = () => {
    dismissTeaser();
    setOpen(true);
  };

  const reply = (paras: string[], links: TalaLink[] | undefined, next: string[]) => {
    setTyping(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "tala", paras, links }]);
      setChips(next.length ? next : TALA_START_CHIPS);
    }, 550);
  };

  const ask = (text: string) => {
    const q = text.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setInput("");
    const r = talaAnswer(q);
    reply(r.answer, r.links, r.next);
  };

  const askTopic = (id: string) => {
    const t = topicById(id);
    if (!t || typing) return;
    setMsgs((m) => [...m, { from: "user", text: t.chip }]);
    reply(t.answer, t.links, t.next ?? []);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Chat with Tala"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex h-[min(620px,calc(100dvh-6.5rem))] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-[#FFF9F0] shadow-2xl shadow-slate-900/20 sm:w-[390px] dark:border-white/10 dark:bg-slate-900"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-amber-300 to-amber-400 px-4 py-3 text-slate-900">
              <Image unoptimized src="/assets/tala-chat/tala_wave_192.png" alt="" width={44} height={44} className="h-11 w-11 rounded-full bg-white/70 object-contain p-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-heading text-lg font-extrabold leading-tight">Tala</p>
                <p className="flex items-center gap-1.5 text-xs font-bold text-slate-800/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" /> Sasagutin ang mga tanong mo
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Isara ang chat"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/50 transition hover:bg-white/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4" aria-live="polite">
              {msgs.map((m, i) =>
                m.from === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-violet-600 px-3.5 py-2 text-[15px] font-semibold leading-snug text-white">
                      {m.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-end gap-2">
                    <Image unoptimized src="/assets/tala-chat/tala_idle_192.png" alt="" width={28} height={28} className="mb-1 h-7 w-7 shrink-0 rounded-full bg-amber-100 object-contain" />
                    <div className="max-w-[86%] space-y-2 rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[15px] leading-relaxed text-slate-700 shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-800 dark:text-slate-200 dark:ring-white/10">
                      {m.paras.map((p, j) => <Para key={j} text={p} />)}
                      {m.links && m.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {m.links.map((l) => {
                            const external = l.href.startsWith("http");
                            return (
                              <a
                                key={l.href}
                                href={l.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener" : undefined}
                                onClick={() => { if (l.href.startsWith("/#")) setOpen(false); }}
                                className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-slate-900 px-3.5 text-xs font-extrabold text-white transition hover:bg-slate-700 dark:bg-amber-400 dark:text-slate-900 dark:hover:bg-amber-300"
                              >
                                {l.label}
                                {external && <ExternalLink className="h-3 w-3" />}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
              {typing && (
                <div className="flex items-end gap-2">
                  <Image unoptimized src="/assets/tala-chat/tala_idle_192.png" alt="" width={28} height={28} className="mb-1 h-7 w-7 shrink-0 rounded-full bg-amber-100 object-contain" />
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-800">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-amber-500"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion chips */}
            <div className="flex gap-2 overflow-x-auto border-t border-slate-900/5 px-3.5 py-2.5 [scrollbar-width:none] dark:border-white/10">
              {chips.map((id) => {
                const t = topicById(id);
                if (!t) return null;
                return (
                  <button
                    key={id}
                    onClick={() => askTopic(id)}
                    disabled={typing}
                    className="min-h-9 shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-amber-300 bg-amber-50 px-3 text-[13px] font-bold text-amber-900 transition hover:bg-amber-100 disabled:opacity-50 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200"
                  >
                    {t.chip}
                  </button>
                );
              })}
              {chips !== TALA_START_CHIPS && (
                <button
                  onClick={() => setChips(TALA_START_CHIPS)}
                  className="min-h-9 shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-slate-300 px-3 text-[13px] font-bold text-slate-600 transition hover:bg-slate-100 dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/5"
                >
                  Iba pang tanong…
                </button>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); ask(input); }}
              className="flex items-center gap-2 border-t border-slate-900/5 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-slate-950"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Itanong mo kay Tala…"
                aria-label="Ang tanong mo"
                maxLength={300}
                className="min-h-11 flex-1 rounded-full bg-slate-100 px-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400 dark:bg-slate-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Ipadala"
                className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full bg-violet-600 text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            key="teaser"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="relative max-w-[240px] rounded-2xl rounded-br-md bg-white py-3 pl-4 pr-9 text-sm font-semibold leading-snug text-slate-700 shadow-xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <button onClick={openChat} className="cursor-pointer text-left">
              Hi po! Ako si <strong className="text-violet-700 dark:text-violet-300">Tala</strong> 👋 May tanong ka tungkol sa presyo o paano magsimula?
            </button>
            <button
              onClick={dismissTeaser}
              aria-label="Isara"
              className="absolute right-1.5 top-1.5 grid h-7 w-7 cursor-pointer place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Isara ang chat ni Tala" : "Magtanong kay Tala"}
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-16 w-16 cursor-pointer place-items-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-xl shadow-amber-600/30 ring-4 ring-white dark:ring-slate-900"
      >
        {open ? (
          <X className="h-7 w-7 text-slate-900" />
        ) : (
          <>
            <Image unoptimized src="/assets/tala-chat/tala_wave_192.png" alt="" width={56} height={56} className="h-14 w-14 object-contain" />
            <span className="absolute -top-1 -left-1 rounded-full bg-violet-600 px-2 py-0.5 text-[11px] font-black text-white shadow">
              Ask
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
