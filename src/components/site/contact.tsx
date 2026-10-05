"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TOPICS = [
  "Free 7-Day Trial",
  "Prepaid Voucher / GCash / Maya",
  "Family Plan (3+ Learners)",
  "Free Teacher Access & Slides",
  "DepEd MATATAG Grades 1–3",
  "Today's Path & App Support",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [selectedTopic, setSelectedTopic] = useState("Free Week Trial");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const program = new URLSearchParams(window.location.search).get("program");
    if (program) {
      setSelectedTopic("Prepaid Voucher / GCash / Maya");
      setMessage(`Hi! I'm interested in the ${program} program. Please guide me on getting started.`);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
    setMessage("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Human Touch Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs gap-1.5 font-bold border border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              Filipino Educator Support
            </Badge>

            <h2 className="mt-4 font-heading font-black text-3xl tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              We&rsquo;re here to guide every step.
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Have questions about specific DepEd MATATAG competencies, GCash or Maya vouchers, classroom presentation export, or family household plans? Send a message — our local team usually responds within a few hours.
            </p>

            <div className="mt-8 space-y-3.5 text-xs sm:text-sm font-sans">
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Support</div>
                  <a href="mailto:smartpathtutor.dev@gmail.com" className="font-bold text-slate-900 dark:text-slate-100 hover:text-orange-600 transition-colors">
                    smartpathtutor.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-[#7c3aed]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Hours &amp; Coverage</div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">Mon–Sat, 8:00 AM – 6:00 PM PHT</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Headquarters</div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">Cebu &amp; Manila · Serving learners nationwide</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Already have an active account?</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">View real-time child mastery and attendance.</p>
              </div>
              <a
                href="https://portal.smartpathtutor.ph/portal"
                className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline shrink-0"
              >
                Portal →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Card */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl shadow-slate-200/40 dark:shadow-none lg:col-span-7"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
              <div>
                <h3 className="font-heading font-black text-lg text-slate-900 dark:text-white">Send a Quick Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Select a topic to speed up assistance</p>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Rapid Reply
              </span>
            </div>

            {/* Topic Quick Chips */}
            <div className="mb-5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Inquiry Topic
              </label>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => {
                  const isSelected = selectedTopic === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`rounded-full px-3 py-1.5 text-xs transition-all ${
                        isSelected
                          ? "bg-gradient-sunset text-white shadow-xs font-bold scale-[1.02]"
                          : "border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Parent / Guardian Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 text-sm text-slate-900 dark:text-white outline-none transition-colors focus:border-orange-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 text-sm text-slate-900 dark:text-white outline-none transition-colors focus:border-orange-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="juan@gmail.com"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                How can we help your learner?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-3.5 text-sm text-slate-900 dark:text-white outline-none transition-colors focus:border-orange-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-orange-500/20"
                placeholder="What grade is your child in? Ask anything about subjects, trials, or payment..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-gradient-sunset text-white font-bold shadow-lg shadow-orange-500/20 hover:opacity-95 transition-transform active:scale-[0.98]"
            >
              <Send className="mr-2 h-4 w-4" />
              {status === "sent" ? "Salamat! We'll reply within a few hours." : "Send Message"}
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
