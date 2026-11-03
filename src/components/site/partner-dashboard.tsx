"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Copy, Check, RefreshCw, Users, ArrowRight } from "lucide-react";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase-public";

type Family = { n: number; joined: string; status: "paid" | "reserved" | "lapsed"; paid_on: string | null };
type Dashboard = {
  ok: boolean;
  name: string;
  code: string;
  pct: number;
  status: "open" | "paused" | "ended";
  join_until: string | null;
  max: number;
  used: number;
  held: number;
  remaining: number;
  payments: number;
  as_of: string;
  families: Family[];
};

const REFRESH_MS = 15000;

async function load(token: string): Promise<Dashboard | null> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/partner_dashboard`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_token: token }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(String(res.status));
  const d = (await res.json()) as Dashboard;
  return d.ok ? d : null;
}

const statusText: Record<Dashboard["status"], string> = {
  open: "Open: families can join",
  paused: "Paused: no new families",
  ended: "Ended",
};

export function PartnerDashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<Dashboard | null | undefined>(undefined);
  const [offline, setOffline] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const read = () => setToken(window.location.hash.replace(/^#/, "").trim() || null);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const refresh = useCallback(async () => {
    if (!token) return;
    try {
      setData(await load(token));
      setOffline(false);
    } catch {
      setOffline(true);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setData(null);
      return;
    }
    refresh();
    const t = setInterval(refresh, REFRESH_MS);
    const onFocus = () => refresh();
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(t);
      window.removeEventListener("focus", onFocus);
    };
  }, [token, refresh]);

  if (data === undefined) {
    return <p className="text-muted-foreground">Loading…</p>;
  }
  if (data === null) {
    return (
      <div className="rounded-2xl border p-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Partner Portal &amp; Families</h1>
          <p className="mt-2 text-muted-foreground">
            This live dashboard requires your organization&apos;s secret link. If you are an active partner and need your link, email SmartPath at{" "}
            <a href="mailto:sptutor.ph@gmail.com" className="font-semibold text-primary underline">
              sptutor.ph@gmail.com
            </a>.
          </p>
        </div>

        <div className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-4 dark:bg-orange-500/15">
          <p className="text-sm font-bold text-orange-800 dark:text-orange-300">
            Looking to partner with SmartPath for your school or community?
          </p>
          <p className="mt-1 text-xs text-orange-700 dark:text-orange-200">
            Learn about our 20% family discount codes, free teacher tools, and community learning hub sponsorships.
          </p>
          <div className="mt-3">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <span>Explore Partner Programs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const taken = data.used + data.held;
  const pctTaken = data.max > 0 ? Math.min(100, Math.round((taken / data.max) * 100)) : 0;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">SmartPath partner</p>
        <h1 className="mt-1 text-3xl font-bold">{data.name}</h1>
        <p className="mt-2 text-muted-foreground">
          {data.pct}% off the SmartPath plan for your families, at every renewal. {statusText[data.status]}
          {data.join_until ? `, until ${data.join_until}` : ""}.
        </p>
      </div>

      <div className="rounded-2xl border p-5">
        <p className="text-sm text-muted-foreground">Code for your families</p>
        <div className="mt-1 flex items-center gap-3">
          <span className="font-mono text-2xl font-bold tracking-wider">{data.code}</span>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm"
            onClick={async () => {
              await navigator.clipboard.writeText(data.code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Families enter it in the SmartPath Parent app: Plan → Have a code?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Places left", data.remaining],
          ["Paid", data.used],
          ["Reserved", data.held],
          ["Of", data.max],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-2xl border p-4">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 text-3xl font-bold tabular-nums">{n}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-muted" aria-label={`${pctTaken}% of places taken`}>
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pctTaken}%` }} />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          A place is reserved for 3 days when a family enters the code, and kept once they pay. A reservation that is
          not paid frees the place again.
        </p>
      </div>

      <div className="rounded-2xl border">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <span className="inline-flex items-center gap-2 font-semibold">
            <Users className="size-4" /> Families ({data.families.length})
          </span>
          <button type="button" onClick={refresh} className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <RefreshCw className="size-4" /> {offline ? "Offline, retrying" : "Updates by itself"}
          </button>
        </div>
        {data.families.length === 0 ? (
          <p className="px-5 py-4 text-muted-foreground">No family has used the code yet.</p>
        ) : (
          <ul className="divide-y">
            {data.families.map((f) => (
              <li key={f.n} className="flex items-center justify-between px-5 py-3 text-sm">
                <span>Family #{f.n}</span>
                <span className="text-muted-foreground">joined {f.joined}</span>
                <span
                  className={
                    f.status === "paid"
                      ? "font-semibold text-green-700"
                      : f.status === "reserved"
                        ? "font-semibold text-amber-700"
                        : "text-muted-foreground"
                  }
                >
                  {f.status === "paid" ? `Paid ${f.paid_on ?? ""}` : f.status === "reserved" ? "Reserved" : "Not paid"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        For privacy, family names are not shown. Last updated {new Date(data.as_of).toLocaleTimeString()}. Questions:
        sptutor.ph@gmail.com
      </p>
    </div>
  );
}
