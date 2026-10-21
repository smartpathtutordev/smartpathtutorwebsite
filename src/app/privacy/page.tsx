import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "What we collect", p: ["SmartPath Tutor (for children) and SmartPath Parent (for households) store your account email, your household settings, and your linked children's learning progress so you can coach them. Guardians linked to the same household can see each learner's progress, daily activity and earned certificates."] },
        { h: "Who processes this data", p: [
          "Supabase (Supabase Inc.) handles sign-in and the database that holds account and learning data. Policy: supabase.com/privacy.",
          "Google Sign-In (Google LLC) is used only if you choose to sign in that way. Policy: policies.google.com/privacy.",
          "Sentry tells us when the app crashes. It receives the error and the device model, never your name or email, and we turn off the options that would send your IP address or a screenshot. Policy: sentry.io/privacy.",
          "Payment is manual. You pay by GCash, bank transfer or cash and give us the reference. We store that reference and the amount. We never take a card number.",
        ] },
        { h: "Children", p: ["The child app has no ads, no social feed and no outside links. The AI helper (Teacher Saje) answers parents only; children never chat with an AI. A teacher can only add a child to a class after the parent approves it."] },
        { h: "No selling, no ad tracking", p: ["We never sell or commercialize student or parent data. The apps use no analytics or advertising service, and reminders are generated on your own device. Weekly digest emails are optional and can be turned off in Settings."] },
        { h: "Security", p: ["Data is protected in transit by HTTPS/TLS. Row-level security in the database restricts every record to the account that owns it."] },
        { h: "Your rights", p: ["You can unlink a child or delete your parent profile at any time. Under the Data Privacy Act of 2012 (RA 10173), you may access, correct or delete your data. To make a request, use Support in the Parent app or email us."] },
        { h: "This website", p: ["This website has no sign-in and sets no tracking cookies. When you use the contact form, it opens your own email app, so your message is sent from your email account to ours."] },
      ]}
    />
  );
}
