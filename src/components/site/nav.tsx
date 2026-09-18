"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#subjects", label: "Subjects" },
  { href: "/#app", label: "App" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

// Where a parent goes to actually start.
//
// Every route in this file was an anchor on this page, so the whole site led
// only back to itself: a parent could read all of it, decide to buy, and have
// nowhere to go. "Start free" pointed at the pricing SECTION — prices, not a
// sign-up. This is the portal, which is where the account and the payment
// really live.
const PORTAL = "https://portal.smartpathtutor.ph/portal";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            <Image
              src="/spt_icon.png"
              alt="SmartPath Tutor logo"
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
              priority
            />
          </span>
          <span className="tracking-tight">SmartPath Tutor</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {/* A family that already pays needs a way back in, and there was
              none anywhere on the site. */}
          <Button variant="ghost" size="sm" render={<a href={PORTAL} />}>
            Sign in
          </Button>
          <Button size="sm" className="rounded-full" render={<a href={PORTAL} />}>
            Start free
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="grid place-items-center h-9 w-9 rounded-md border border-border/60"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PORTAL}
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Sign in
            </a>
            <Button
              size="sm"
              className="mt-2 rounded-full w-full"
              render={<a href={PORTAL} onClick={() => setOpen(false)} />}
            >
              Start free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
