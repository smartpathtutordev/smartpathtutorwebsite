import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { AboutContent } from "@/components/site/about-content";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet SmartPath Tutor — Filipino educators making adaptive, personalized, DepEd-aligned learning affordable for every Grade 1–3 family.",
  // Staged for launch — keep out of search until we go live.
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
