import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = {
  title: "SmartPath Tutor — Launching soon",
  description:
    "SmartPath Tutor is a playful, DepEd-aligned learning app for Filipino kids in Grades 1–3. Launching soon — sign up to be the first to know.",
};

export default function HomePage() {
  return <ComingSoon />;
}
