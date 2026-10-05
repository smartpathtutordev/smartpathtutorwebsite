import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { AboutContent } from "@/components/site/about-content";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "About SmartPath Tutor — Filipino Educators & AI Companion Tala",
  description:
    "Meet SmartPath Tutor — Filipino educators making adaptive, personalized, DepEd MATATAG Grades 1–3 learning accessible and affordable for every Filipino family with Tala and 100% free teacher tools.",
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <AboutContent />
      <SiteFooter />
    </>
  );
}
