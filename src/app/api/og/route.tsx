import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") || "Bedriftsavtale.no"
  const subtitle = searchParams.get("subtitle") || "Norges portal for bedriftsavtaler"

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F6B5E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: 44,
            height: 44,
            background: "white",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 800,
            color: "#0F6B5E",
          }}>
            B
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            Bedriftsavtale.no
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "6px 16px",
            width: "fit-content",
            fontSize: 13,
            fontWeight: 700,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {subtitle}
          </div>
          <div style={{
            fontSize: title.length > 40 ? 42 : 52,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: 900,
          }}>
            {title}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {["40+ avtaletyper", "8 bransjer", "Norges største"].map((item) => (
            <div key={item} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}>
              <div style={{
                width: 8,
                height: 8,
                background: "rgba(255,255,255,0.5)",
                borderRadius: "50%",
              }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
