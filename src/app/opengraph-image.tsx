import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #080c12 0%, #0d1420 52%, #111827 100%)",
          color: "#f7f3e8",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(247,243,232,0.24)",
              borderRadius: 12,
              color: "#69a7ff",
              fontWeight: 900,
              fontSize: 24,
            }}
          >
            SZ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#9ee6c7", fontSize: 24, fontWeight: 800 }}>
              {profile.name}
            </span>
            <span style={{ color: "#b5bdc8", fontSize: 20 }}>
              Seattle · AWS · Enterprise AI
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              maxWidth: 980,
              margin: 0,
              fontSize: 78,
              lineHeight: 0.94,
              letterSpacing: 0,
              fontWeight: 950,
            }}
          >
            Production AI systems for enterprise workflows.
          </h1>
          <p
            style={{
              maxWidth: 910,
              margin: 0,
              color: "#b5bdc8",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            GenAI platforms, support automation, context systems, and
            high-scale decision workflows.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#f3c969",
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          <span>Case Studies</span>
          <span>·</span>
          <span>Proof Ledger</span>
          <span>·</span>
          <span>Writing</span>
        </div>
      </div>
    ),
    size
  );
}
