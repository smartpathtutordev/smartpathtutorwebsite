import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PartnerDashboard } from "@/components/site/partner-dashboard";

// A partner agency's live count of families using their discount code. The
// secret is in the address after "#", so it never reaches a server log.
export const metadata: Metadata = {
  title: "Partner families",
  robots: { index: false, follow: false },
  alternates: { canonical: "/partner" },
};

export default function Partner() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-8 sm:px-6 sm:py-12">
        <PartnerDashboard />
      </main>
      <SiteFooter />
    </>
  );
}
