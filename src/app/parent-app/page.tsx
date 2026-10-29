import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { DeviceShowcase } from "@/components/site/device-showcase";

export const metadata: Metadata = {
  title: "SmartPath Parent App — Mobile, Laptop & Tablet Showcase",
  description:
    "See how SmartPath Parent works on mobile phones, tablets, and laptops for families.",
};

export default function ParentAppPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <DeviceShowcase appKey="parent" />
      </main>
      <SiteFooter />
    </>
  );
}
