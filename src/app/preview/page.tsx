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

// Full site, staged for launch. Hidden from search engines until we go live.
export const metadata: Metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
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
