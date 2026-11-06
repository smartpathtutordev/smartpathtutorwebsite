import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { CodingShowcase } from "@/components/site/coding-showcase";

export const metadata: Metadata = {
  title: "SmartPath Coding — Coding for Kids Ages 5–12 | Blocks, Games, Python & AI",
  description:
    "Meet Codi the Robot! 147 concept videos, 771 guided missions, and 6 creative coding playgrounds across 7 adventure worlds. From early visual blocks to typed Python, AI, and game design at coding.smartpathtutor.ph.",
  alternates: { canonical: "/coding" },
  openGraph: {
    title: "SmartPath Coding — Coding for Kids Ages 5–12",
    description:
      "147 concept videos, 771 guided missions, and 6 creative playgrounds across 7 adventure worlds for Filipino kids. Get started at coding.smartpathtutor.ph.",
    url: "https://smartpathtutor.ph/coding",
  },
};

export default function CodingPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <CodingShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
