import type { Metadata } from "next";

import { SiteNav } from "@/components/site/nav";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Pricing — SmartPath Tutor",
  description:
    "Simple plans per child starting at ₱399/month, with sibling discounts and free classroom tools for teachers.",
};

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
