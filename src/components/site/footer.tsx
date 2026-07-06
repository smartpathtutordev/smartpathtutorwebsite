import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
              <Image
                src="/spt_icon.png"
                alt="SmartPath Tutor logo"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
            </span>
            SmartPath Tutor
          </Link>
          <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
            DepEd-aligned Grades 1–3 lessons in Math, Science, and English — built
            for Filipino learners. Personalized, affordable, and made to fit
            real family life.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
            Product
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="/#subjects" className="hover:text-foreground">Subjects</a></li>
            <li><a href="/#how-it-works" className="hover:text-foreground">How it works</a></li>
            <li><a href="/#app" className="hover:text-foreground">Get the app</a></li>
            <li><a href="/#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="/programs" className="hover:text-foreground">Programs</a></li>
            <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
            Company
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="/about" className="hover:text-foreground">About</a></li>
            <li><a href="/#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} SmartPath Tutor. All rights reserved.</span>
          <span>Built with care in the Philippines.</span>
        </div>
      </div>
    </footer>
  );
}
