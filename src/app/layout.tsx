import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

// Baloo 2 — the SmartPath Tutor learning-app brand font (used app-wide).
const baloo = Baloo_2({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartpathtutor.com"),
  title: {
    default: "SmartPath Tutor — Grades 1–3 online tutoring built for the Philippine curriculum",
    template: "%s · SmartPath Tutor",
  },
  description:
    "Personalized Grades 1–3 lessons in Math, Science, and English aligned with the DepEd curriculum. Learn at your pace, track progress, and grow.",
  openGraph: {
    title: "SmartPath Tutor",
    description:
      "Personalized Grades 1–3 lessons aligned with the DepEd curriculum. Learn at your pace, track progress, and grow.",
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
      className={`${baloo.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Apply saved theme before paint to avoid a flash of the wrong mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
