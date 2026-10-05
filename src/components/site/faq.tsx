"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Is it safe for my child?",
    a: "No ads, no feed, no outside links. Nothing your child taps leaves the app.",
  },
  {
    q: "Is it really free for teachers?",
    a: "Yes. Verified Philippine teachers get lesson planners, slide exports and competency trackers, free for good.",
  },
  {
    q: "How does family pricing work?",
    a: "Per household, not per device. ₱299 for one child, ₱599 for up to three.",
  },
  {
    q: "Which grades?",
    a: "Grades 1 to 3: Math and English in every grade, Science from Grade 3. Grades 4 to 6 are being built.",
  },
  {
    q: "Can I pay without a card?",
    a: "GCash, Maya, or a prepaid code from a store. No auto-renewal, no bank account.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden bg-amber-50/30 dark:bg-slate-900/30 border-t border-amber-100/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1 text-xs font-black text-amber-800 dark:text-amber-300">
            <span>❓</span>
            <span>Questions &amp; Answers</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Frequently asked{" "}
            <span className="text-orange-500">
              questions.
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans font-medium">
            Quick answers about kid safety, family plans, free teacher access, and GCash payment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border-2 border-amber-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 sm:px-8 py-3 shadow-sm"
        >
          <Accordion>
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                <AccordionTrigger className="py-4 text-left text-sm sm:text-base font-bold hover:no-underline text-slate-900 dark:text-white">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pb-4 font-sans">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-8 text-center text-xs text-slate-500 font-semibold font-sans">
          Have more questions?{" "}
          <a href="mailto:smartpathtutor.dev@gmail.com" className="font-bold text-orange-600 hover:underline inline-flex items-center gap-1">
            Email our Filipino educator team <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
