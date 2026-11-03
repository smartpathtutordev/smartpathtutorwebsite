import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PartnerWithUs } from "@/components/site/partner-with-us";

export const metadata: Metadata = {
  title: "Partner With Us — School & Community Programs | 20% Group Discounts",
  description:
    "Partner with SmartPath Tutor to bring DepEd MATATAG Math, Reading, and Science to Grades 1–3 learners in your school or community. Get 20% family discounts, 100% free teacher dashboards, and personalized support.",
  alternates: { canonical: "/partner-with-us" },
  openGraph: {
    title: "Partner With Us — SmartPath Tutor School & Community Programs",
    description:
      "20% family discounts, 100% free teacher app, and community learning hub sponsorships for DepEd MATATAG Grades 1–3.",
    url: "https://smartpathtutor.ph/partner-with-us",
  },
};

export default function PartnerWithUsPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PartnerWithUs />
      </main>
      <SiteFooter />
    </>
  );
}
