import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Nunito — the primary UI and body font of SmartPath Tutor (clean, modern, highly legible).
const nunito = localFont({
  src: [
    { path: "../../public/fonts/Nunito-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nunito-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Nunito-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Nunito-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

// Baloo 2 — the brand display font used for impactful headings, hero titles, and badges.
const baloo = localFont({
  src: [
    { path: "../../public/fonts/Baloo2-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Baloo2-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Baloo2-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartpathtutor.ph"),
  title: {
    default: "SmartPath Tutor — DepEd MATATAG Grades 1–3 Learning Platform",
    template: "%s · SmartPath Tutor",
  },
  description:
    "DepEd MATATAG-aligned Math, English, and Science for Grades 1 to 3. Adaptive Today's Path, 100% free for teachers, and affordable per-family subscriptions.",
  openGraph: {
    title: "SmartPath Tutor — DepEd Grades 1–3 Learning Platform",
    description:
      "Empowering Filipino learners with personalized guided sessions, Today's Path daily learning, and DepEd MATATAG curriculum alignment.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${baloo.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Apply saved theme before paint to avoid a flash of the wrong mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}

