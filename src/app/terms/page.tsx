import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

// One source of truth: every SmartPath app links here. When this changes,
// bump the version in legal-page.tsx AND kLegalVersion in the apps.
export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms are an agreement between you and SmartPath-Tutor Tutorial Services (“SmartPath”, “we”) for the use of SmartPath Tutor, SmartPath Parent, SmartPath Teacher and this website. By creating an account or using the apps you agree to these terms and to our Privacy Policy (smartpathtutor.ph/privacy). If you do not agree, please do not use SmartPath."
      sections={[
        { h: "Who can use SmartPath", p: [
          "Family accounts are for parents and legal guardians aged 18 or older. You may add children you are the parent or legal guardian of, or are authorised by their parent or guardian to enrol, and you consent to their use of SmartPath Tutor on their behalf.",
          "Children use SmartPath Tutor through their family’s account, under the supervision of a parent or guardian.",
          "Teacher accounts are for teachers and school staff. A teacher may add a child to a class only through SmartPath’s class invitation, which the child’s parent must approve. The teacher and school are responsible for using class information only for teaching.",
        ] },
        { h: "Your account", p: [
          "Give accurate information and keep it up to date. Keep your password and parent PIN private; you are responsible for what happens under your account. Tell us at sptutor.ph@gmail.com straight away if you think someone else has used it.",
          "One family account covers one household. Do not share an account between families.",
        ] },
        { h: "What SmartPath provides", p: [
          "Lessons, assessments and practice for Grades 1 to 3 aligned with the DepEd MATATAG curriculum — currently Math and English, with Science at Grade 3 — plus progress reports and coaching help for parents, and class tools for teachers. We add and improve content over time, and subjects without lessons yet are shown as “Coming soon”.",
          "SmartPath supports learning at home and in class; it is not a school and does not replace one. It does not issue grades or certificates recognised by DepEd. Scores and suggestions are guides; a parent or teacher always decides.",
          "We work to keep SmartPath available, but it may sometimes be unavailable for maintenance or because of problems outside our control, such as internet or provider outages.",
        ] },
        { h: "Teacher Saje and AI hints", p: [
          "Teacher Saje is an AI helper for parents. It gives teaching ideas and hints; it can be wrong, so use your own judgement. It is not meant for doing a child’s assignments. Do not type sensitive personal information (such as health details or ID numbers) into it.",
          "Monthly question allowances depend on your plan. Extra questions can be bought and are used before the next allowance.",
        ] },
        { h: "Plans, payment and renewal", p: [
          "A plan covers the whole household and the number of child seats you pay for, up to 5 children. Everything in the household ends on one date: the plan’s end date. A child added beyond the paid seats cannot use lessons until a seat is added. A seat added during a plan costs only the days left.",
          "Pay online through PayMongo (GCash, Maya, QR Ph or card) and the plan opens right away, or pay by GCash, bank transfer or cash and give us the reference; the plan opens once our team confirms the payment. Prices are shown in the Parent app and on our website, in Philippine pesos.",
          "We do not charge you automatically. With auto-renew on, we remind you 7, 3 and 1 day before your plan is due, and you pay to renew. Paying early adds the days to the end of your plan. Turn auto-renew off and the plan simply ends on its date; you keep every day you paid for.",
        ] },
        { h: "Refunds", p: [
          "If you were charged by mistake — a double payment, a wrong amount, or a payment we could not apply — tell us within 30 days and we refund it in full to the original payment method.",
          "Otherwise, payments for a plan or seats that have started are not refundable, except where Philippine law (including the Consumer Act, Republic Act No. 7394) gives you a right to a refund. If SmartPath is unavailable for a long period through our fault, we extend your plan by the time lost.",
        ] },
        { h: "Acceptable use", p: [
          "Use SmartPath only for learning and teaching. Do not: copy, download, record, share, sell or publish the lessons or other content; share access with people outside your household or class; try to get into accounts or data that are not yours, or test or bypass our security; upload anything unlawful, harmful, or that infringes someone else’s rights; or use SmartPath to harass anyone.",
          "We may suspend or close an account that breaks these rules or puts children or other users at risk. Where we can, we will tell you why first and give you a chance to respond.",
        ] },
        { h: "Content and copyright", p: [
          "The lessons, videos, narration, characters (including Tala and Teacher Saje), artwork, assessments, software and the SmartPath name belong to SmartPath-Tutor Tutorial Services or its licensors and are protected by the Intellectual Property Code of the Philippines (Republic Act No. 8293). © 2026 SmartPath-Tutor Tutorial Services. All rights reserved.",
          "While your plan is active we give you a personal, non-transferable licence to use the content for your household’s learning, or, for teachers, for your class. Nothing else is granted.",
          "What you create — a child’s drawings, a teacher’s posts and questions — stays yours. You give us permission to store and show it inside SmartPath to the people you chose, only to run the service.",
        ] },
        { h: "Ending your account", p: [
          "You can delete your account at any time in the Parent app (Settings → Delete Account) or by emailing us; see smartpathtutor.ph/data-deletion. Deleting the account ends access for every child in the household. Days already paid for are not refunded, except as described under Refunds.",
        ] },
        { h: "Our responsibility", p: [
          "We provide SmartPath with reasonable care and skill. To the extent the law allows, we are not liable for indirect or consequential loss, and our total liability for any claim about the service is limited to what you paid us in the 12 months before the claim. Nothing in these terms limits rights you have under Philippine law that cannot be limited, including under the Consumer Act and the Data Privacy Act, or our liability for fraud or gross negligence.",
        ] },
        { h: "Changes to these terms", p: [
          "We may update these terms. We change the version and date at the top, and when a change is significant, parents and teachers are asked to read and agree to the new version the next time they open their app. If you do not agree, you may stop using SmartPath and delete your account.",
        ] },
        { h: "Law and disputes", p: [
          "These terms are governed by the laws of the Republic of the Philippines. Please contact us first at sptutor.ph@gmail.com so we can try to fix the problem. If we cannot, disputes go to the proper courts of the Philippines, without affecting your right to file a complaint with the Department of Trade and Industry or the National Privacy Commission.",
        ] },
        { h: "Contact", p: [
          "SmartPath-Tutor Tutorial Services — sptutor.ph@gmail.com.",
        ] },
      ]}
    />
  );
}
