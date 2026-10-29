import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        { h: "Who can use SmartPath", p: ["By using SmartPath Parent, you confirm that you are a parent, legal guardian or designated caregiver for the household. Teachers use the SmartPath Teacher app for their classes."] },
        { h: "What the service covers", p: ["SmartPath Tutor currently covers Grades 1 to 3: Math and English, with Science at Grade 3. The Parent app lets you oversee your children's learning and get coaching help."] },
        { h: "Parent AI (Teacher Saje)", p: ["Teacher Saje gives parents teaching strategies and hints for coaching their children. It is not meant for completing assignments automatically. Monthly question allowances depend on your plan, and extra questions can be added."] },
        { h: "Plans and payment", p: ["Plans and child seats apply to the whole household, up to 5 children, and everything ends on one date: your plan's end date. Pay online through PayMongo (GCash, Maya, QR Ph or card) and your plan opens right away, or pay by GCash, bank transfer or cash and give us the reference; your plan opens once our team confirms it. A child seat added during a plan costs only the days left. Each renewal covers the plan and one seat for each enrolled child beyond the first. Paying early adds the days to the end of your plan. We do not charge you automatically: with auto-renew on, we remind you 7, 3 and 1 day before your plan is due; turn auto-renew off in the Parent app and your plan simply ends on its date. You keep every day you paid for. Prices are listed on our home page."] },
        { h: "Changes to these terms", p: ["We will communicate any changes to these terms or to subscription policies clearly within the apps."] },
      ]}
    />
  );
}
