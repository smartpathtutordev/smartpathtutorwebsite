import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

// One source of truth: every SmartPath app links here. When this changes,
// bump the version in legal-page.tsx AND kLegalVersion in the apps
// (lib/core/legal/legal.dart) so signed-in parents and teachers are asked to
// agree to the new version.
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="SmartPath-Tutor Tutorial Services (“SmartPath”, “we”) runs SmartPath Tutor for children, SmartPath Parent for families, and SmartPath Teacher for schools. Most of the people we serve are children in Grades 1 to 3, so we collect as little as we can, we never sell data, and a parent or guardian decides what happens to a child’s information. This policy follows the Data Privacy Act of 2012 (Republic Act No. 10173), its Implementing Rules and Regulations, and the issuances of the National Privacy Commission (NPC)."
      sections={[
        { h: "Who is responsible for your data", p: [
          "SmartPath-Tutor Tutorial Services is the personal information controller for the SmartPath apps and this website.",
          "Data Protection Officer: email sptutor.ph@gmail.com with the subject “Data Privacy”. We answer within 15 working days.",
          "When a school uses SmartPath Teacher for a class, the school also decides how class information is used for its own teaching. We process that class information for the school, under this policy.",
        ] },
        { h: "What we collect", p: [
          "Parent or guardian: name, email address, and mobile number if you give it (for sign-in codes and plan reminders); your sign-in method (email and password, or Google); household settings and the parent PIN (stored only in scrambled, one-way form).",
          "Each child you add: first name (a last name and nickname are optional), grade level, avatar, language choice, and the learning record — lessons opened and finished, how much of a lesson was watched, answers and scores in assessments and practice, reading accuracy, writing and tracing results, badges, tickets and streaks, and time spent. We do not ask for a child’s photo, address, school ID or birth certificate.",
          "Teachers: name, email, school name, and the classes you create, your posts and attendance records.",
          "Payments: plan, amount, date, method and reference. For a manual GCash, bank or cash payment you may attach a receipt screenshot so our staff can confirm it. Card and wallet details are entered only on PayMongo’s secure page; we never see or store them.",
          "Things you send us: support messages and any images you attach; questions you ask Teacher Saje (the parent AI helper); a child’s drawings saved in the app.",
          "Device and technical data: device type, browser, app version, and error reports needed to keep the apps working and secure.",
        ] },
        { h: "Voice and the microphone", p: [
          "The reading activities can listen to a child read aloud, to check each word. This only happens after a tap on the microphone button, and the browser or device asks you for permission first.",
          "The sound is turned into text by the speech service built into the device or browser — Google for Chrome and Android, Apple for Safari, iPhone and iPad — under that company’s own privacy terms. SmartPath receives only the words that were recognised and the reading score. We do not record, keep or upload your child’s voice.",
          "You can say no to the microphone. The reading activities then work by tapping, and a grown-up can mark each word.",
        ] },
        { id: "tutoring", h: "One-on-one tutoring and live video", p: [
          "When you book a session we keep: the child it is for (first name and grade), the teacher, the time, what the session is for, any notes, and any homework photos or PDF you upload; the payment details listed above; that you agreed to the tutoring terms, with the version and time.",
          "During a session: the video and sound travel between the child’s device, the teacher and anyone else in the call through our video service. We do not record them. The whiteboard is shared live and is not kept after the session. We keep a log of the session — who joined and left and when, which lessons the teacher showed, when it started and ended — and, if someone asks for help or the app hits a problem, technical details of the device (type, browser, app version, connection) so we can fix it.",
          "After a session: the teacher’s report to you, any rating you give (seen only by SmartPath), and any report about conduct.",
          "Who sees what: the teacher sees the child’s first name and grade, the purpose and notes, the homework you uploaded, and the lessons in the session — never your contact details or payment details. SmartPath staff see what they need to run sessions, keep them safe, check payments and answer help requests. Staff may join a session, always shown in the call; each time is logged.",
          "Homework files are private to your family, your child’s teacher and SmartPath staff. You can remove them before the session, and ask us to delete them at any time.",
        ] },
        { id: "teachers", h: "Teachers who tutor", p: [
          "If you apply to tutor we keep: your name, photo (checked by our team before families see it), short bio, subjects and grades, years teaching, optional licence number, the region, province and town you give (shown to families only if you choose), the GCash number and name for your payouts, your open hours, sessions, reports, payouts and their references, agreement to the Teacher Agreement, ratings (you see only the average once there are five), and any conduct reports and decisions.",
          "Families see your public profile only. Your GCash number, licence and payout details are seen only by you and SmartPath staff.",
        ] },
        { h: "How we use it, and our lawful basis", p: [
          "To run the service you or your school signed up for (contract): accounts, lessons, progress, reports to parents, class features, reminders, and support.",
          "With your consent: creating a child’s profile and processing the child’s learning data, the microphone, and optional emails such as weekly digests. You give consent when you create your account and add a child, and you can withdraw it at any time (see “Your rights”).",
          "Legal obligations: payment and tax records, and answering lawful requests from authorities.",
          "Legitimate interests that do not override your rights: keeping the apps secure, preventing fraud and abuse, and fixing errors.",
          "We do not use children’s data for advertising, we do not build marketing profiles, and we do not make decisions about a child by automated means that have legal or similarly serious effects. Scores and suggestions in the app help learning; a parent or teacher always decides.",
        ] },
        { h: "Children’s privacy", p: [
          "Only a parent or legal guardian aged 18 or older can create a family account and add a child. By adding a child you confirm you have the authority to consent for that child.",
          "The child app has no ads, no social feed, no chat with strangers and no links out to the internet. Children cannot chat with an AI. When a child is stuck on a question, Tala may show a short hint; only the question itself is used to write it, never the child’s name or anything the child types.",
          "A teacher can see a child only after the parent approves joining that class. Teachers see what they need to teach: the child’s name and grade, attendance, class activities and their results, and which assigned lessons are started or done.",
          "In one-on-one tutoring, the teacher sees only the child the parent booked, and only what that session needs (see “One-on-one tutoring and live video”). A parent agrees before each paid session, and can sit in on any session.",
          "A child who signs in on a family tablet does so through the parent’s account. Children cannot change parent settings, plans or privacy choices; those are protected by the parent PIN.",
        ] },
        { h: "Who we share it with", p: [
          "Inside your family: every parent or guardian linked to the household sees each child’s progress and reports.",
          "Your child’s teacher: only after you approve the class, and only the class information listed above.",
          "Service providers that process data for us, under contracts or terms that require them to protect it: Supabase (accounts and database), Cloudflare (hosting and delivery of the apps and lessons), PayMongo (online payments), Resend (email), Semaphore (SMS sign-in codes), Google (sign-in, if you choose it), DeepSeek (writes Teacher Saje’s answers, the teachers’ AI helper answers and Tala’s hints from the question text — no names or account details are sent), and Sentry (error reports, without names, emails or IP addresses, when enabled). Live tutoring video runs on Jitsi Meet through 8x8 (Jitsi as a Service), which carries the call between the child, the teacher and, if they sit in, the parent. 8x8 receives the name shown in the call, an account number (not an email or phone number) and the call itself while it happens; its servers may be outside the Philippines, under the safeguards the Data Privacy Act requires for such transfers. We do not record sessions, and recording and streaming are switched off for every call.",
          "Authorities, only when the law requires it or to protect someone’s safety.",
          "We never sell, rent or trade personal data, and we never share it for advertising.",
        ] },
        { h: "Data stored outside the Philippines", p: [
          "Some of our providers store or process data outside the Philippines — for example in Singapore, the United States, and, for DeepSeek’s answers to typed questions, China. We choose providers that protect data to the standard the Data Privacy Act requires, we send each one only what its job needs, and we remain responsible for your data while they handle it.",
        ] },
        { h: "How long we keep it", p: [
          "Account and learning data: while the account is active. If a family account is deleted, the children’s profiles and learning records are deleted from our live systems at once and from backups within 30 days.",
          "If an account has not been used for 3 years, we may delete it, after emailing the parent at least 30 days before.",
          "Payment records (amount, date, method, reference and the payer’s email) are kept for the period required by Philippine tax law. They contain no children’s learning data.",
          "Support messages and questions asked to Teacher Saje: kept with your account so you can look back at them, and deleted when the account is deleted.",
          "Class records a school needs (attendance, class activity results): for the school year and up to 1 year after, unless the school asks us to delete them sooner.",
          "Tutoring: session records, reports and payment and payout records are kept as payment records, for the period tax law requires. Session logs and technical details are kept for up to 1 year to handle disputes and safety reports. Safety reports and decisions are kept as long as needed to protect children and to answer the authorities.",
        ] },
        { h: "How we protect it", p: [
          "All data travels over HTTPS (TLS). Database rules (row-level security) let each account reach only its own family or class, and we test those rules automatically. Passwords and the parent PIN are stored only in one-way scrambled form. Lesson files are private and served only to signed-in subscribers. Staff access is limited to what each person’s job needs.",
          "No system is perfectly secure. If a personal data breach could put you at risk, we will notify the National Privacy Commission and the affected families within 72 hours of learning of it, as the law requires, and tell you what we are doing about it.",
        ] },
        { h: "Your rights", p: [
          "Under the Data Privacy Act you have the right to be informed; to access your data and your child’s; to correct it; to object to or withdraw consent for processing; to have it erased or blocked; to receive a copy in a common electronic format (data portability); to be compensated for damage caused by inaccurate or unlawfully processed data; and to file a complaint.",
          "Most of this you can do yourself in the Parent app: see and correct each child’s details, remove a child, change email choices, and delete your account (Settings → Delete Account). For anything else, email sptutor.ph@gmail.com from the address on your account. We confirm it is you, then act within 15 working days.",
          "Withdrawing consent for a child’s data means we stop processing it and delete the child’s profile; the child can no longer use SmartPath Tutor.",
          "If you are not satisfied with our answer, you may complain to the National Privacy Commission (privacy.gov.ph, complaints@privacy.gov.ph).",
        ] },
        { h: "Cookies and storage on your device", p: [
          "The apps keep your sign-in and settings in your browser’s storage, and store lesson files so they work offline. These are needed for the apps to work. We use no advertising or tracking cookies, and no analytics service. This website has no sign-in and sets no tracking cookies.",
        ] },
        { h: "Changes to this policy", p: [
          "When we change this policy we update the version and date at the top. If the change is significant, parents and teachers are asked to read and agree to the new version the next time they open their app.",
        ] },
        { h: "Contact", p: [
          "SmartPath-Tutor Tutorial Services — Data Protection Officer, sptutor.ph@gmail.com. To delete an account or data step by step, see smartpathtutor.ph/data-deletion.",
        ] },
      ]}
    />
  );
}
