"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is it safe for young kids?",
    a: "Yes. SmartPath is built for Grades 1–3 — there are no ads, no open chat, and no links out to the wider internet. Kids only ever see lessons, quizzes, and the Fun Zone.",
  },
  {
    q: "How much screen time does it take?",
    a: "Lessons are deliberately bite-sized — a few focused minutes each. Parents can set daily limits, and the app nudges kids to take breaks, so it fits between school and family time.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Lessons can be downloaded for offline use, so your child can keep learning on long commutes or when the connection drops — common across the Philippines.",
  },
  {
    q: "Is the content aligned with DepEd?",
    a: "Every lesson maps to a DepEd competency for Grades 1 to 3, in Math, Science, and English. What your child learns at home matches what they meet in class.",
  },
  {
    q: "What languages is it available in?",
    a: "SmartPath supports English, Filipino, Cebuano, and Hiligaynon — so children can learn in the language they're most comfortable with.",
  },
  {
    q: "Can I track my child's progress?",
    a: "The parent dashboard shows mastery per topic, streaks, and weekly progress — plus an email summary so you always know how your child is doing.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Start with a free week (no card required), and switch or cancel your plan whenever you like — no lock-in.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions parents ask
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before your child&rsquo;s first lesson.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl border border-border/60 bg-card px-5 shadow-sm sm:px-7"
        >
          <Accordion>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
