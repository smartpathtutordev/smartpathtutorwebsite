import { redirect } from "next/navigation";

// /preview was where the finished site lived while the front door showed a
// waitlist. The site is now at /, so leaving this as-is would mean the same
// content at two addresses — which splits search ranking, and means a shared
// link may or may not be the one that gets updated later.
//
// Redirects rather than 404s, because this address has been passed around.
export default function PreviewPage() {
  redirect("/");
}
