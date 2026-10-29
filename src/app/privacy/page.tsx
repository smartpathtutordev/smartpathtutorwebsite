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
          "Google Sign-In (Google LLC) and Facebook Login (Meta Platforms) are used only if you choose to sign in that way. We receive your name and email address from them, nothing else. Policies: policies.google.com/privacy and facebook.com/privacy/policy.",
          "Sentry tells us when the app crashes. It receives the error and the device model, never your name or email, and we turn off the options that would send your IP address or a screenshot. Policy: sentry.io/privacy.",
          "PayMongo (PayMongo Philippines, Inc.) handles online payment by GCash, Maya, QR Ph or card on its own secure page. We receive the payment reference, amount and method, never your card number or wallet login. Policy: paymongo.com/privacy. You can also pay by GCash, bank transfer or cash and give us the reference; we store that reference and the amount.",
        ] },
        { h: "Children", p: ["The child app has no ads, no social feed and no outside links. Children cannot chat with an AI. Teacher Saje, the AI helper, answers parents only. When a child is stuck on a question, Tala may show a short AI-written hint about that question; nothing the child types is sent, and there is no open chat. A teacher can only add a child to a class after the parent approves it."] },
        { h: "No selling, no ad tracking", p: ["We never sell or commercialize student or parent data. The apps use no analytics or advertising service, and learning reminders are generated on your own device. We email you before your plan is due or ends; weekly digest emails are optional and can be turned off in Settings."] },
        { h: "Security", p: ["Data is protected in transit by HTTPS/TLS. Row-level security in the database restricts every record to the account that owns it."] },
        { h: "Your rights", p: ["You can unlink a child or delete your account at any time (Parent app → Settings → Delete Account). Under the Data Privacy Act of 2012 (RA 10173), you may access, correct or delete your data. To make a request, use Support in the Parent app or email us. How to delete your data, including data from Google or Facebook sign-in: smartpathtutor.ph/data-deletion."] },
        { h: "This website", p: ["This website has no sign-in and sets no tracking cookies. When you use the contact form, it opens your own email app, so your message is sent from your email account to ours."] },
      ]}
    />
  );
}
