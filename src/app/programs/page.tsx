import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { ProgramsContent } from "@/components/site/programs-content";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Flexible ways to access SmartPath Tutor — prepaid vouchers (no card), family plans, OFW gifts, sponsor-a-child, community discounts, and school partnerships for Grades 1–3.",
  // Staged for launch — keep out of search until we go live.
  robots: { index: false, follow: false },
};

export default function ProgramsPage() {
  return (
    <>
      <SiteNav />
      <ProgramsContent />
      <SiteFooter />
    </>
  );
}
