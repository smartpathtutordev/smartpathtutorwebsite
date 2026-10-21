import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "SmartPath Tutor: DepEd MATATAG learning for Grades 1–3";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pub = (p: string) => join(process.cwd(), "public", p);
const dataUrl = async (p: string) => `data:image/png;base64,${(await readFile(pub(p))).toString("base64")}`;

export default async function OG() {
  const [logo, tala, baloo, nunito] = await Promise.all([
    dataUrl("spt_icon.png"),
    dataUrl("assets/characters/tala_celebrate.png"),
    readFile(pub("fonts/Baloo2-ExtraBold.ttf")),
    readFile(pub("fonts/Nunito-ExtraBold.ttf")),
  ]);
  const chips = ["DepEd MATATAG", "Grades 1–3", "Works offline", "From ₱399/mo"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#f59e0b 0%,#f97316 45%,#ea580c 100%)", fontFamily: "Nunito" }}>
        <div style={{ position: "absolute", top: -180, right: -120, width: 620, height: 620, borderRadius: 9999, background: "rgba(255,255,255,0.16)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -220, left: -160, width: 520, height: 520, borderRadius: 9999, background: "rgba(124,45,18,0.18)", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", width: 76, height: 76, borderRadius: 22, background: "#fff", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(124,45,18,0.3)" }}>
              <img src={logo} width={60} height={60} alt="" />
            </div>
            <div style={{ display: "flex", fontFamily: "Baloo", fontSize: 44, color: "#fff", letterSpacing: -1 }}>SmartPath Tutor</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Baloo", fontSize: 78, lineHeight: 0.98, color: "#fff", letterSpacing: -2.5 }}>The smart path to</div>
            <div style={{ display: "flex", fontFamily: "Baloo", fontSize: 78, lineHeight: 0.98, color: "#431407", letterSpacing: -2.5 }}>confident learning.</div>
            <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.95)", marginTop: 18 }}>Daily Math &amp; English for Filipino kids.</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {chips.map((c, i) => (
              <div key={c} style={{ display: "flex", padding: "10px 20px", borderRadius: 9999, fontSize: 23, background: i === 3 ? "#431407" : "#fff", color: i === 3 ? "#fff" : "#9a3412", boxShadow: "0 6px 18px rgba(124,45,18,0.25)" }}>{c}</div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: 30, bottom: 20, display: "flex", width: 380, height: 380, borderRadius: 9999, background: "rgba(255,255,255,0.22)", alignItems: "center", justifyContent: "center" }}>
          <img src={tala} width={360} height={360} alt="" />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Baloo", data: baloo, weight: 800 }, { name: "Nunito", data: nunito, weight: 800 }] },
  );
}
