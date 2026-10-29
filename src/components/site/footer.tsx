import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-900/5 bg-[#fbf8f2] dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-4">
          <Link href="/" className="group flex min-h-11 items-center gap-2.5 font-bold">
            <span className="grid h-11 w-11 place-items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/spt_icon.png"
                alt="SmartPath Tutor logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <span className="font-heading font-black text-xl tracking-tight text-slate-900 dark:text-white">
              SmartPath<span className="text-orange-500">.</span> Tutor
            </span>
          </Link>
          <p className="max-w-sm text-[15px] font-medium text-slate-600 dark:text-slate-400">
            By SmartPath Educational Technologies. A strong start for every Filipino child.
          </p>
          <p className="max-w-sm text-sm font-semibold text-slate-500 dark:text-slate-400">
            Use it in your phone, tablet or computer browser at smartpathtutor.ph.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            Learn More
          </h4>
          <ul className="mt-4 space-y-3 text-[15px] font-semibold text-slate-700 dark:text-slate-300 font-sans">
            <li><Link href="/tutor-app" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Tutor App Showcase</Link></li>
            <li><Link href="/parent-app" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Parent App Showcase</Link></li>
            <li><Link href="/teacher-app" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Teacher App Showcase</Link></li>
            <li><Link href="/pricing" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Pricing &amp; Plans</Link></li>
            <li><Link href="/about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            Community
          </h4>
          <ul className="mt-4 space-y-3 text-[15px] font-semibold text-slate-700 dark:text-slate-300 font-sans">
            <li><a href="/#contact" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contact Us</a></li>
            <li><a href="mailto:sptutor.ph@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">sptutor.ph@gmail.com</a></li>
            <li><Link href="/privacy" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs text-slate-500 dark:text-slate-400 font-sans">
          <span>© {new Date().getFullYear()} SmartPath Educational Technologies. DepEd MATATAG Grades 1–3. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>GCash · Bank transfer · Cash</span>
            <span className="hidden sm:inline">·</span>
            <Link href="/privacy" className="hover:text-orange-600">Privacy</Link><span>·</span><Link href="/terms" className="hover:text-orange-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
