import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { DeviceShowcase } from "@/components/site/device-showcase";

export const metadata: Metadata = {
  title: "SmartPath Tutor App — Mobile, Laptop & Tablet Showcase",
  description:
    "See how SmartPath Tutor works on mobile phones, tablets, and laptops for Grades 1–3 learners.",
};

export default function TutorAppPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <DeviceShowcase appKey="tutor" />
      </main>
      <SiteFooter />
    </>
  );
}
