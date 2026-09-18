import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

// The waitlist page that used to be the front door.
//
// Kept because it works and collects signups, and because taking a page away
// entirely is harder to undo than moving it. If the site ever needs to go back
// behind a waitlist, point app/page.tsx at ComingSoon again.
export const metadata: Metadata = {
  title: "SmartPath Tutor — Launching soon",
  description:
    "SmartPath Tutor is a playful, DepEd-aligned learning app for Filipino kids in Grades 1–3. Launching soon — sign up to be the first to know.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
