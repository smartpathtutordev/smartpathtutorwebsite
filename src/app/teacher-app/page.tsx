import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { DeviceShowcase } from "@/components/site/device-showcase";

export const metadata: Metadata = {
  title: "SmartPath Teacher App — Mobile, Laptop & Tablet Showcase",
  description:
    "See how SmartPath Teacher works on mobile phones, tablets, and laptops — 100% free for teachers.",
};

export default function TeacherAppPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <DeviceShowcase appKey="teacher" />
      </main>
      <SiteFooter />
    </>
  );
}
