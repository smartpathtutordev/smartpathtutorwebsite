import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Delete your data", alternates: { canonical: "/data-deletion" } };

// Linked from the Google and Facebook sign-in settings and from Google Play:
// all three require a public page that says how to delete an account.
export default function DataDeletion() {
  return (
    <LegalPage
      title="Delete your data"
      sections={[
        { h: "Delete it yourself, right away", p: [
          "Open the SmartPath Parent app (smartpathtutor.ph/app/parent), go to Settings, and tap Delete Account. It works the same whether you signed in with email, Google or Facebook.",
          "If you are the only parent in your family, this deletes your account, every child in the family and all of their learning progress. If another parent shares the family, only you are removed and the children stay with them.",
          "This cannot be undone.",
        ] },
        { h: "Or ask us", p: [
          "Email sptutor.ph@gmail.com from the address on your account, with the subject \"Delete my data\". We reply to confirm it is you, then delete it.",
        ] },
        { h: "Signed in with Google or Facebook", p: [
          "Deleting your SmartPath account removes the name and email we received from Google or Facebook. You can also remove SmartPath from your Google account (myaccount.google.com → Security → Third-party apps) or from Facebook (Settings → Apps and websites).",
        ] },
        { h: "What we keep", p: [
          "Payment records (amount, date, reference and the email they were paid from) are kept for our accounting and tax records. They contain no children's data. Nothing else is kept.",
        ] },
      ]}
    />
  );
}
