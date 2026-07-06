"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [message, setMessage] = useState("");

  // When arriving from the Programs page (e.g. /?program=Prepaid%20Voucher#contact),
  // pre-fill the message so interested users don't have to explain themselves.
  useEffect(() => {
    const program = new URLSearchParams(window.location.search).get("program");
    if (program) {
      setMessage(`Hi! I'm interested in the ${program} program. Please tell me how to get started.`);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — pretend-submit so the form gives clear feedback.
    // Wire to an API route / Resend / Web3Forms when ready.
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
    setMessage("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Talk to a real human.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Questions about a specific grade, special-needs support, or how
              to start? Drop us a line — we usually reply within a day.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400/15 text-amber-600">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:smartpathtutor.dev@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  smartpathtutor.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400/15 text-amber-600">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-muted-foreground">
                  +63 9XX XXX XXXX (Mon–Sat, 9am–6pm)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400/15 text-amber-600">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-muted-foreground">
                  Cebu, Philippines · serving learners nationwide
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="h-10 rounded-md border border-border/70 bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-amber-400"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-10 rounded-md border border-border/70 bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-md border border-border/70 bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  placeholder="What grade is your child in? What do you need help with?"
                />
              </div>
              <Button type="submit" className="mt-2 rounded-full w-full">
                <Send className="mr-1.5 h-4 w-4" />
                {status === "sent" ? "Thanks — we'll be in touch" : "Send message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
