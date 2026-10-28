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
        { h: "Plans and payment", p: ["Plans and child seats apply to the whole household, up to 5 children. You pay manually by GCash, bank transfer or cash and give us the reference or receipt. Your plan is activated once our team confirms the payment. Plans do not renew automatically: you pay again only if you want to continue. You can stop your plan any time in the Parent app. Prices are listed on our home page."] },
        { h: "Changes to these terms", p: ["We will communicate any changes to these terms or to subscription policies clearly within the apps."] },
      ]}
    />
  );
}
