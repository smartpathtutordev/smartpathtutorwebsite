import Link from "next/link";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string[] }[] }) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-6 sm:py-20">
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20">
          Draft, pending legal review. Last updated October 2026.
        </p>
        <h1 className="mt-6 font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl dark:text-white">{title}</h1>
        <p className="mt-2 text-slate-500">SmartPath Educational Technologies</p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white">{s.h}</h2>
              {s.p.map((t, i) => <p key={i} className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{t}</p>)}
            </section>
          ))}
        </div>
        <p className="mt-12 text-[15px] text-slate-600 dark:text-slate-300">
          Questions? Email <a className="font-bold text-orange-700 underline dark:text-orange-300" href="mailto:sptutor.ph@gmail.com">sptutor.ph@gmail.com</a> or <Link className="font-bold text-orange-700 underline dark:text-orange-300" href="/#contact">contact us</Link>.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
