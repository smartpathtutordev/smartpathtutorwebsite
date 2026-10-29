import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart, GraduationCap, ShieldCheck, ArrowRight, Mail } from "lucide-react";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "About Us — SmartPath Educational Technologies",
  description:
    "Learn about SmartPath Educational Technologies and our mission to give every Filipino child a strong start in Grades 1–3.",
};

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Built for DepEd MATATAG",
    detail: "Aligned with Grades 1–3 Math, English, and Grade 3 Science for Filipino learners.",
  },
  {
    icon: Heart,
    title: "Connected with families",
    detail: "Parents see live progress and get step-by-step homework coaching with Teacher Saje.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & ad-free",
    detail: "No ads, no open AI chat for children, and parent-controlled screen-time limits.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              About Us
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-5xl dark:text-white">
              A strong start for every <span className="text-gradient-sunset">Filipino child.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              SmartPath Educational Technologies builds connected learning tools for children, parents, and teachers across the Philippines.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3 text-left">
              {PILLARS.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="card-premium p-5 sm:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-heading text-lg font-extrabold text-slate-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
              >
                See Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:sptutor.ph@gmail.com"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-900/15 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Mail className="h-4 w-4" />
                sptutor.ph@gmail.com
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
