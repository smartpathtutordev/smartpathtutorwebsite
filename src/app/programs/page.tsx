import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { ProgramsContent } from "@/components/site/programs-content";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Programs & Access — SmartPath Tutor DepEd MATATAG Grades 1–3",
  description:
    "Flexible ways to access SmartPath Tutor — GCash/Maya prepaid vouchers (no card), family plans (up to 3+ learners), 100% free teacher access, sponsor-a-child CSR, and public school scholarships.",
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
