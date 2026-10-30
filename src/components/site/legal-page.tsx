import Link from "next/link";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export function LegalPage({ title, intro, sections }: { title: string; intro?: string; sections: { h: string; p: string[] }[] }) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-6 sm:py-20">
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20">
          Effective 31 October 2026 · Version 2026-10-31
        </p>
        <h1 className="mt-6 font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl dark:text-white">{title}</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">SmartPath-Tutor Tutorial Services</p>
        {intro && <p className="mt-6 text-[16px] leading-relaxed text-slate-700 dark:text-slate-200">{intro}</p>}
        <nav className="mt-8 rounded-xl bg-slate-50 p-4 text-sm ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10" aria-label="Contents">
          <ol className="grid gap-1 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.h}><a className="font-semibold text-orange-700 hover:underline dark:text-orange-300" href={`#s${i + 1}`}>{i + 1}. {s.h}</a></li>
            ))}
          </ol>
        </nav>
        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <section key={s.h} id={`s${i + 1}`} className="scroll-mt-24">
              <h2 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white">{i + 1}. {s.h}</h2>
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
