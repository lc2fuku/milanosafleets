import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const fundBreakdown = [
  { label: "Fleet Acquisition", pct: 50, color: "#10b981" },
  { label: "Solar Charging Infra", pct: 20, color: "#007a78" },
  { label: "Working Capital", pct: 20, color: "#3b82f6" },
  { label: "Tech & Software", pct: 10, color: "#8b5cf6" },
];

export const Scene6Financials = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const amountOp = interpolate(frame, [10, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const amountScale = interpolate(spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 80 } }), [0, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={{ position: "absolute", top: 80, left: 120 }}>
        <div style={{
          fontSize: 18, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase",
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          Financial Projections
        </div>
      </div>

      {/* Big ask number */}
      <div style={{
        position: "absolute", top: 160, left: 120,
        opacity: amountOp, transform: `scale(${amountScale})`, transformOrigin: "left center",
      }}>
        <div style={{ fontSize: 80, fontWeight: 900, color: "white", fontFamily: "sans-serif" }}>
          R3,000,000
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", fontFamily: "sans-serif", fontWeight: 500, marginTop: 4 }}>
          Total Capital Requirement · Break-even at Month 14–18
        </div>
      </div>

      {/* Use of funds bars */}
      <div style={{
        position: "absolute", top: 380, left: 120, right: 120,
        display: "flex", flexDirection: "column", gap: 20,
      }}>
        {fundBreakdown.map((f, i) => {
          const delay = 30 + i * 12;
          const barWidth = interpolate(frame, [delay, delay + 30], [0, f.pct], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const op = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: op }}>
              <div style={{
                display: "flex", justifyContent: "space-between", marginBottom: 8,
              }}>
                <span style={{ fontSize: 20, color: "#e2e8f0", fontFamily: "sans-serif", fontWeight: 600 }}>{f.label}</span>
                <span style={{ fontSize: 20, color: f.color, fontFamily: "sans-serif", fontWeight: 700 }}>{f.pct}%</span>
              </div>
              <div style={{
                height: 24, borderRadius: 12, background: "rgba(255,255,255,0.06)", overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 12, background: f.color,
                  width: `${barWidth}%`,
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue model */}
      <div style={{
        position: "absolute", bottom: 80, left: 120, right: 120,
        display: "flex", gap: 40,
        opacity: interpolate(frame, [75, 95], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        {[
          { title: "Bike Rental", desc: "R1,200/month per unit" },
          { title: "Swap Fee", desc: "R20 per battery swap" },
          { title: "White-Label", desc: "Branded fleet marketing" },
          { title: "Solar Surplus", desc: "Phone charging & Wi-Fi" },
        ].map((r, i) => (
          <div key={i} style={{
            flex: 1, padding: "20px 16px", borderRadius: 12,
            background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#10b981", fontFamily: "sans-serif" }}>{r.title}</div>
            <div style={{ fontSize: 15, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 6 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
