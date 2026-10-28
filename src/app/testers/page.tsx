import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { TestersGuide } from "@/components/site/testers-guide";

// TEMPORARY — for the UAT pilot only. Remove this page, testers-guide.tsx and
// the "Testers" link in nav.tsx when UAT ends.
export const metadata: Metadata = {
  title: "Testers · UAT",
  robots: { index: false, follow: false },
  alternates: { canonical: "/testers" },
};

export default function Testers() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-12 sm:px-6 sm:py-16">
        <TestersGuide />
      </main>
      <SiteFooter />
    </>
  );
}
