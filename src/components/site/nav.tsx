"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  // Only ids the home page actually renders.
  //
  // "Today's Trip", "Curriculum" and "Features" pointed at #how-it-works,
  // #curriculum and #superpowers. Those sections are no longer on the page, so
  // all three scrolled nowhere — a click that does nothing, throws nothing and
  // logs nothing, which is the hardest kind of broken to notice.
  //
  // Anything added back here has to have a section with that id on the page.
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "Questions" },
];

const PORTAL = "https://portal.smartpathtutor.ph/portal";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 py-3 backdrop-blur-md shadow-xs"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/spt_icon.png"
              alt="SmartPath logo"
              width={36}
              height={36}
              className="h-7 w-7 object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-lg font-black tracking-tight text-slate-900 dark:text-white">
              Smart<span className="text-orange-500">Path</span>
            </span>
            <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-700 dark:text-orange-300 border border-orange-500/20">
              Grades 1–3
            </span>
          </div>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border-2 border-amber-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-1.5 backdrop-blur-md text-xs font-black text-slate-700 dark:text-slate-300 shadow-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-orange-600 dark:hover:text-white hover:bg-amber-50 dark:hover:bg-slate-800"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={PORTAL}
            className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-white transition-colors px-2 py-1.5"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-sunset px-5 py-2 text-xs font-black text-white shadow-md shadow-orange-500/20 hover:brightness-105 transition-all active:scale-95"
          >
            <span>Start Free</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-5 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
            <div className="my-2 border-t border-slate-100 dark:border-slate-800" />
            <a
              href={PORTAL}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-bold text-orange-600 dark:text-orange-400"
            >
              Sign In to Portal →
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2.5 text-sm font-bold shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
