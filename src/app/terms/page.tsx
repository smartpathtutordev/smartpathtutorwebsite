import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

// One source of truth: every SmartPath app links here (#tutoring and #teachers
// are linked from the booking and Planner consent steps). When this changes,
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
          "Lessons, assessments and practice for Grades 1 to 3 aligned with the DepEd curriculum — currently Math and English, with Science at Grade 3 — plus progress reports and coaching help for parents, and class tools for teachers. We add and improve content over time, and subjects without lessons yet are shown as “Coming soon”.",
          "SmartPath supports learning at home and in class; it is not a school and does not replace one. It does not issue grades or certificates recognised by DepEd. Scores and suggestions are guides; a parent or teacher always decides.",
          "We work to keep SmartPath available, but it may sometimes be unavailable for maintenance or because of problems outside our control, such as internet or provider outages.",
        ] },
        { h: "Teacher Saje and AI hints", p: [
          "Teacher Saje is an AI helper for parents. It gives teaching ideas and hints; it can be wrong, so use your own judgement. It is not meant for doing a child’s assignments. Do not type sensitive personal information (such as health details or ID numbers) into it.",
          "Monthly question allowances depend on your plan. Extra questions can be bought and are used before the next allowance.",
          "Teachers have an AI helper in SmartPath Teacher; the same care applies (see the Teacher Agreement).",
        ] },
        { h: "Plans, payment and renewal", p: [
          "A plan covers the whole household and the number of child seats you pay for, up to 5 children. Everything in the household ends on one date: the plan’s end date. A child added beyond the paid seats cannot use lessons until a seat is added. A seat added during a plan costs only the days left.",
          "Pay online through PayMongo (GCash, Maya, QR Ph or card) and the plan opens right away, or pay by GCash, bank transfer or cash and give us the reference; the plan opens once our team confirms the payment. Prices are shown in the Parent app and on our website, in Philippine pesos.",
          "We do not charge you automatically. With auto-renew on, we remind you 7, 3 and 1 day before your plan is due, and you pay to renew. Paying early adds the days to the end of your plan. Turn auto-renew off and the plan simply ends on its date; you keep every day you paid for.",
        ] },
        { h: "Refunds", p: [
          "If you were charged by mistake — a double payment, a wrong amount, or a payment we could not apply — tell us within 30 days and we refund it in full to the original payment method.",
          "Refunds for tutoring sessions follow the tutoring rules below.",
          "Otherwise, payments for a plan or seats that have started are not refundable, except where Philippine law (including the Consumer Act, Republic Act No. 7394) gives you a right to a refund. If SmartPath is unavailable for a long period through our fault, we extend your plan by the time lost.",
        ] },
        { id: "tutoring", h: "One-on-one tutoring", p: [
          "SmartPath offers live one-on-one lessons for Grades 1 to 3 with human teachers approved by SmartPath. A session lasts one hour and happens inside SmartPath Tutor on your child’s device: the teacher uses your child’s own SmartPath lessons, a shared whiteboard and video. Tutoring is available to families with an active SmartPath plan, for children in the household. The price of a session is shown before you book; it is separate from your plan, and booking or paying for tutoring never changes your plan.",
          "When you book, you tell us what the session is for (for example homework help, a SmartPath lesson or assessment, a lesson from school, or reading) and may add notes and photos or a PDF of homework. The teacher sees these to prepare. Upload only what the session needs, and nothing that shows other children or private information.",
          "Teachers are independent tutors who have agreed to the Teacher Agreement below. SmartPath reviews each teacher before approving them, but a tutor does not replace your child’s school or teacher, and results are not guaranteed.",
        ] },
        { h: "Tutoring: booking, payment, cancellations and refunds", p: [
          "Holding a time: when you book, the time is held for you for 30 minutes while you pay. If it is not paid in time, it is released. A family can have at most three unpaid bookings at once.",
          "Paying: pay online through PayMongo and the session is confirmed when PayMongo confirms the payment; or send a GCash payment and give us its reference, and the session is confirmed once our team finds the payment. Each payment reference can pay for one thing only. If we cannot find a GCash payment, the booking is cancelled and you are told. Before your first payment for a session you agree to these tutoring terms; we record that you agreed.",
          "If you cancel at least 24 hours before the start, you get the full price back. Less than 24 hours before, a session cannot be cancelled for a refund in the app; message us and we will look at what happened. If you cancel while we are still checking a GCash payment, we refund it once we have confirmed the money arrived.",
          "You get the full price back if the teacher cancels, if the teacher is no longer available (for example their account is paused), if the session never starts because of the teacher or of SmartPath, if your payment is confirmed only after the session time has passed, or if you paid twice. If the teacher is late, SmartPath is alerted at once; if the session cannot go ahead, you are refunded in full.",
          "If your child does not join within 15 minutes of the start while the teacher waits in the room, the teacher may mark the session as missed, and it is not refunded. If something went wrong in a session that did happen, tell us: we may refund it after looking into it.",
          "“Try another teacher”: within 14 days after a paid session that ended, you may ask for one free session with a different teacher, up to two times in 90 days. It does not apply to a session that was refunded, and it is given back if the free session is cancelled.",
          "Refunds are sent back by the same way you paid. We start your refund within 2 working days. If you paid online (QR Ph or through PayMongo), PayMongo sends you a link to claim the money, valid for 3 days; it arrives as soon as you claim it. If you paid by GCash, we send it to the GCash number you paid from within 7 working days. We tell you when a refund is sent. If you dispute a payment with your bank or wallet for a session you received, we may pause tutoring bookings on your account while it is resolved.",
          "After each session the teacher writes you a short report. If they have not within a day, we send a short note saying so; the teacher can still write theirs. Ratings you give are seen only by SmartPath.",
        ] },
        { h: "Tutoring: live video, safety and conduct", p: [
          "A session is a live video call between your child and the teacher. As the parent or guardian you consent to your child taking part, you remain responsible for supervising your child, and an adult should be nearby during the session. You may sit in on the video at any time.",
          "SmartPath does not record sessions. Nobody — teacher, parent or child — may record, screenshot or photograph a session or the child. To keep children safe and sessions good, SmartPath staff may join or watch a session; when they do, they appear in the call as “SmartPath Quality Check” or “SmartPath Support”, never hidden. Each time staff join is logged.",
          "Teachers and families must not exchange personal contact details, meet or contact each other outside SmartPath, arrange or make payments outside SmartPath, or ask a child for personal information. Language and content must be suitable for young children.",
          "Anyone can report a concern from the apps. Concerns about a child’s safety are handled first. Where the law requires, or a child may be at risk, we report to the proper authorities and cooperate with them, including under the Special Protection of Children Against Abuse, Exploitation and Discrimination Act (Republic Act No. 7610) and the Anti-Online Sexual Abuse or Exploitation of Children Act (Republic Act No. 11930).",
          "If someone breaks these rules we may warn them, limit what they can do, pause or close their account, and cancel or refund affected sessions. You are told why and may appeal within 30 days; an appeal is decided by a different SmartPath staff member from the one who acted.",
        ] },
        { id: "teachers", h: "Teacher Agreement (for SmartPath tutors)", p: [
          "This part applies when you apply to tutor on SmartPath Teacher. You agree to it before you can open hours, and again when it changes.",
          "Who can tutor: teachers of Grades 1 to 3 that SmartPath approves after reviewing their application. Give accurate information. A licence or credential you give us may be checked. Approval can be paused or withdrawn.",
          "Your relationship with SmartPath: you tutor as an independent tutor on the SmartPath platform, not as an employee or agent of SmartPath. You choose the hours you open and are responsible for your own taxes and government contributions.",
          "Your hours: keep the sessions families book. Cancel only for a real reason, before the start; the family is refunded in full and told your reason, and every cancellation is recorded. Start the session on time and end it when it is over; write the family a short report.",
          "Child safety and conduct: follow the safety and conduct rules above. Teach only inside SmartPath, be kind and patient, and use the child’s information only to teach the session. Tell SmartPath at once about anything that suggests a child may be at risk.",
          "Pay: you are paid for each session you teach, at the amount shown in SmartPath Teacher before you teach (currently ₱140 per session), to the GCash number you gave us. We pay every Monday, for the sessions finished the week before (Monday to Sunday, Philippine time); if Monday is a public holiday, the next working day. A session is paid when it took place: the family attended and it ran at least 15 minutes. Otherwise the payout is held while SmartPath looks at what happened. A session that is refunded to the family is not paid; if it was already paid, the amount is taken off your next payout and you are told why. A changed GCash number is checked by our team before we send money to it. Each transfer is recorded with its reference, and you can see every payment in Earnings.",
          "SmartPath content: the lessons, lesson guides, training and materials in SmartPath Teacher (including “Teach with SmartPath”) are for teaching SmartPath sessions and your SmartPath classes only. Do not copy, share, sell or publish them.",
          "AI help: the AI helper in SmartPath Teacher gives ideas; it can be wrong. Check its answers before using them with a child, and do not type a child’s personal information into it.",
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
