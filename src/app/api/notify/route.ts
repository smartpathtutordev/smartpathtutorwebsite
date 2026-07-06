import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Local dev backup only. The real delivery to smartpathtutor.dev@gmail.com happens
// client-side via Web3Forms (its free plan blocks server-side calls). This just
// keeps a running list in dev so nothing is lost while testing.
export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    const entry = { email: email.trim().toLowerCase(), at: new Date().toISOString() };
    console.log("[notify] signup:", entry);
    try {
      const file = path.join(process.cwd(), "subscribers.json");
      let list: unknown[] = [];
      try {
        list = JSON.parse(await fs.readFile(file, "utf8"));
      } catch {
        // no file yet
      }
      list.push(entry);
      await fs.writeFile(file, JSON.stringify(list, null, 2));
    } catch {
      // non-fatal — serverless hosts don't persist the filesystem
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 400 });
  }
}
