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
  { href: "/#features", label: "Features" },
  { href: "/#teachers", label: "Teachers" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "Questions" },
  { href: "/#contact", label: "Contact" },
  // TEMPORARY (UAT pilot): remove with src/app/testers when testing ends.
  { href: "/testers", label: "Testers" },
];

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
        // Height must never depend on scroll position: a sticky header that
        // shrinks past the threshold moves the page, which flips the threshold
        // back, and the page shakes. Only colours change on scroll.
        "sticky top-0 z-50 w-full border-b py-3 transition-colors duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 border-slate-900/5 dark:border-white/10 backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group flex min-h-11 items-center gap-2.5">
          <div className="relative grid h-10 w-10 place-items-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/spt_icon.png"
              alt="SmartPath logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-lg font-black tracking-tight text-slate-900 dark:text-white">
              Smart<span className="text-orange-500">Path</span>
            </span>
            <span className="hidden rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-bold text-slate-600 ring-1 ring-slate-900/10 sm:inline dark:bg-white/10 dark:text-slate-300 dark:ring-white/10">
              Grades 1–3
            </span>
          </div>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 transition-colors hover:text-slate-900 hover:bg-slate-900/5 dark:hover:text-white dark:hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/#contact"
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-extrabold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden mt-3 border-y border-slate-900/5 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 px-5 py-5 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
            <div className="my-2 border-t border-slate-100 dark:border-slate-800" />
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 text-center rounded-full bg-gradient-sunset text-white py-3.5 text-base font-extrabold shadow-lg shadow-orange-500/25"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
