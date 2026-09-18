import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Subjects } from "@/components/site/subjects";
import { AppShowcase } from "@/components/site/app-showcase";
import { Pricing } from "@/components/site/pricing";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

// The real site, at the address people actually type.
//
// This used to render <ComingSoon /> while the finished site sat at /preview.
// That is fine as a staging arrangement and broken as a live one, because
// every link in the nav is an anchor on THIS page — /#how-it-works,
// /#subjects, /#pricing, /#contact. Read the site at /preview, click anything,
// and you were thrown back to the launching-soon page. Every link led away
// from the thing it was pointing at.
//
// The coming-soon component is kept, not deleted: it is still reachable at
// /soon if the waitlist page is ever wanted again.
export const metadata: Metadata = {
  title: "SmartPath Tutor — DepEd-aligned learning for Grades 1–3",
  description:
    "Personalized Math, Science, and English lessons aligned with the DepEd " +
    "curriculum. Bite-sized videos, instant quizzes, and progress you can see " +
    "— built for Filipino learners in Grades 1 to 3.",
};

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Subjects />
        <AppShowcase />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
