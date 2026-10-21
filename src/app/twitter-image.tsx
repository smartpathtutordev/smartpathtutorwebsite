import { ImageResponse } from "next/og";
export const alt = "SmartPath Tutor — DepEd MATATAG Grades 1–3";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#fff7ed,#fed7aa)", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: "#ea580c" }}>SmartPath Tutor</div>
        <div style={{ fontSize: 76, fontWeight: 900, color: "#0f172a", marginTop: 20, lineHeight: 1.05 }}>The smart path to confident learning.</div>
        <div style={{ fontSize: 32, color: "#334155", marginTop: 28 }}>DepEd MATATAG · Grades 1–3 · Works offline · From ₱399/mo</div>
      </div>
    ),
    size,
  );
}
