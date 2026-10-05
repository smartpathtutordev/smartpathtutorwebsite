import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="group flex items-center gap-2.5 font-bold">
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
          <p className="max-w-sm text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-medium">
            The smart path to confident learning. DepEd MATATAG curriculum for Grades 1 to 3 reimagined as an adaptive daily journey.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-600 dark:text-slate-400 font-bold font-sans">
            <span className="rounded-full border border-amber-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900 px-3 py-1">
              🇵🇭 Built for Filipino Learners
            </span>
            <span className="rounded-full border border-amber-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900 px-3 py-1">
              📚 DepEd MATATAG Grades 1–3
            </span>
            <span className="rounded-full border border-amber-200 dark:border-slate-800 bg-amber-50/60 dark:bg-slate-900 px-3 py-1">
              👩‍🏫 100% Free For Teachers
            </span>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-heading font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            The Smart Path
          </h4>
          <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
            <li><a href="/#how-it-works" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Today&apos;s Path</a></li>
            <li><a href="/#curriculum" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">DepEd Curriculum</a></li>
            <li><a href="/#superpowers" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">App Features</a></li>
            <li><a href="/#pricing" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Pricing &amp; Plans</a></li>
            <li><a href="/#faq" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Parent FAQs</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-heading font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Portals &amp; Community
          </h4>
          <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
            <li><a href="/about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About Our Educators</a></li>
            <li><a href="/programs" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Prepaid Vouchers</a></li>
            <li><a href="mailto:smartpathtutor.dev@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Educator Support</a></li>
            <li>
              <a
                href="https://portal.smartpathtutor.ph/portal"
                className="inline-flex items-center gap-1 font-bold text-orange-600 dark:text-orange-400 hover:underline pt-1"
              >
                Parent Portal Login →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-sans">
          <span>© {new Date().getFullYear()} SmartPath Tutor. DepEd MATATAG Grades 1–3. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>GCash · Maya · Cards · Load Stations</span>
            <span>·</span>
            <span>Cebu &amp; Manila, Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
