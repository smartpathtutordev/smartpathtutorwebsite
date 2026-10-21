import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-900/5 bg-[#fbf8f2] dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="group flex min-h-11 items-center gap-2.5 font-bold">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-white shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/spt_icon.png"
                alt="SmartPath Tutor logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-heading font-black text-xl tracking-tight text-slate-900 dark:text-white">
              SmartPath<span className="text-orange-500">.</span> Tutor
            </span>
          </Link>
          <p className="max-w-sm text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-medium">
            The smart path to confident learning. DepEd MATATAG curriculum for Grades 1 to 3 reimagined as an adaptive daily journey.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300 font-bold font-sans">
            <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              🇵🇭 Built for Filipino Learners
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              📚 DepEd MATATAG Grades 1–3
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              👩‍🏫 100% Free For Teachers
            </span>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            The Smart Path
          </h4>
          <ul className="mt-4 space-y-3 text-[15px] font-semibold text-slate-700 dark:text-slate-300 font-sans">
            <li><a href="/#how-it-works" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Today&apos;s Path</a></li>
            <li><a href="/about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">DepEd Curriculum</a></li>
            <li><a href="/programs" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">App Features</a></li>
            <li><a href="/#pricing" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Pricing &amp; Plans</a></li>
            <li><a href="/#faq" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Parent FAQs</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            Community
          </h4>
          <ul className="mt-4 space-y-3 text-[15px] font-semibold text-slate-700 dark:text-slate-300 font-sans">
            <li><a href="/about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About Our Educators</a></li>
            <li><a href="/programs" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Prepaid Vouchers</a></li>
            <li><a href="mailto:smartpathtutor.dev@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Educator Support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs text-slate-500 dark:text-slate-400 font-sans">
          <span>© {new Date().getFullYear()} SmartPath Tutor. DepEd MATATAG Grades 1–3. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>GCash · Maya · Cards · Load Stations</span>
            <span className="hidden sm:inline">·</span>
            <span>Cebu &amp; Manila, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
