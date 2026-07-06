"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, FlaskConical, Languages } from "lucide-react";

import { cn } from "@/lib/utils";

type Grade = "1" | "2" | "3";

const subjects = [
  {
    icon: Calculator,
    title: "Math",
    colour: "from-[#8b5cf6] to-[#a78bfa]",
    topics: {
      "1": ["Numbers to 100", "Addition & subtraction", "Basic shapes", "Telling time"],
      "2": ["Numbers to 1,000", "Money: peso & centavo", "Intro to multiplication", "Length & mass"],
      "3": ["Numbers to 10,000", "Multiplication & division", "Intro to fractions", "Area & perimeter"],
    },
  },
  {
    icon: FlaskConical,
    title: "Science",
    colour: "from-[#10b981] to-[#34d399]",
    topics: {
      "1": ["My body & senses", "Plants & animals", "Weather", "Day & night"],
      "2": ["Living & non-living", "Animal habitats", "Materials around us", "Taking care of nature"],
      "3": ["Parts of a plant", "Animal life cycles", "States of matter", "Earth & sky"],
    },
  },
  {
    icon: Languages,
    title: "English",
    colour: "from-[#3b82f6] to-[#60a5fa]",
    topics: {
      "1": ["Alphabet & sounds", "Sight words", "Simple sentences", "Listening skills"],
      "2": ["Reading short stories", "Nouns & verbs", "Spelling", "Writing sentences"],
      "3": ["Reading comprehension", "Grammar & tenses", "Paragraph writing", "Building vocabulary"],
    },
  },
] satisfies {
  icon: typeof Calculator;
  title: string;
  colour: string;
  topics: Record<Grade, string[]>;
}[];

const grades: Grade[] = ["1", "2", "3"];

export function Subjects() {
  const [grade, setGrade] = useState<Grade>("1");

  return (
    <section id="subjects" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three subjects. Grades 1 to 3. One clear path.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every lesson is mapped to a DepEd competency code — so you know
            exactly what your child is learning, and why.
          </p>
        </div>

        {/* Grade selector — pick a grade to see what's covered. */}
        <div
          role="tablist"
          aria-label="Choose a grade level"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {grades.map((g) => {
            const active = g === grade;
            return (
              <button
                key={g}
                role="tab"
                aria-selected={active}
                onClick={() => setGrade(g)}
                className={cn(
                  "rounded-full border px-5 py-1.5 text-sm font-bold transition-colors",
                  active
                    ? "border-transparent bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                Grade {g}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {subjects.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.colour} opacity-15 blur-2xl transition-opacity group-hover:opacity-25`}
              />
              <div className="flex items-center justify-between">
                <div className={`inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.colour} text-white shadow-sm`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground">
                  Grade {grade}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>

              {/* Topics animate when the grade changes. */}
              <AnimatePresence mode="wait">
                <motion.ul
                  key={grade}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="mt-4 space-y-2 text-sm text-muted-foreground"
                >
                  {s.topics[grade].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${s.colour}`} />
                      {t}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
