import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { Features, TeacherSaje, HowItWorks, Safety, Teachers } from "@/components/site/startup-sections";
import { FAQS } from "@/lib/faqs";

/**
 * The landing page carried 1,052 words. A parent deciding whether to spend
 * ₱399 a month does not read 1,052 words; they skim for what it is, what it
 * costs, and whether it is real, and they do it on a phone between other
 * things.
 *
 * What came off:
 *   StatsBar        33 words of numbers with nothing behind them.
 *   HowItWorks     231 words describing a routine that DailyPath now shows.
 *   Subjects       111 words naming the three subjects the phone already
 *                      shows on screen, and the day strip names again.
 *   BentoFeatures  218 words of feature prose, none of which a parent needs
 *                      before deciding to look at the price.
 *
 * DailyPath — the six illustrated steps — came off too, at your request. Its
 * component is still in the repo.
 *
 * Those components are still there, untouched and importable. Nothing was
 * deleted — it stopped being the first thing a tired parent has to get
 * through. The FAQ stays because an accordion is closed by default: its words
 * cost a skimmer nothing and answer the person who does want detail.
 *
 * WHAT IS LEFT OWNS THE ANCHORS. Removing a section also removes its id, and
 * a nav link to a missing id scrolls nowhere and reports no error. The nav
 * below is kept to the ids this page still renders — #pricing and #faq — and
 * must be cut back again if another section goes.
 */

export const metadata: Metadata = {
  title: "SmartPath Tutor — DepEd MATATAG for Grades 1 to 3",
  description:
    "DepEd MATATAG Math and English for Grades 1–3, with Science from Grade 3. Reads aloud, works offline, and comes with a Parent app with homework coaching. Free to start for teachers.",
};

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <Hero />
        <Features />
        <TeacherSaje />
        <HowItWorks />
        <Safety />
        <Teachers />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
