"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    a: "Yes. Verified Philippine teachers get 30 free credits to start, and editing and slide exports are always free.",
  },
  {
    q: "How does family pricing work?",
    a: "Per child, not per device. The Parents app is free. Pro is ₱399 a month for one child, and each extra child is ₱199 a month. Term and school-year plans cost less per month.",
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
    <section id="faq" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow">
            <span aria-hidden>❓</span> Questions &amp; Answers
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
            Frequently asked <span className="text-gradient-sunset">questions.</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Quick answers about kid safety, plans and pricing, teacher access, and GCash payment.
          </p>
          <div className="mt-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Have more questions?{" "}
            <a href="mailto:smartpathtutor.dev@gmail.com" className="group inline-flex min-h-11 items-center gap-1 font-extrabold text-orange-700 hover:underline dark:text-orange-300">
              Email our Filipino educator team <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <Accordion className="space-y-3">
            {FAQS.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="card-premium border-0 px-5 transition-shadow hover:shadow-lg sm:px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-extrabold text-slate-900 hover:no-underline sm:text-lg dark:text-white">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
