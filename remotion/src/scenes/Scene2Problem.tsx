import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const stats = [
  { label: "Fuel Cost / km", old: "R0.65", next: "R0.20", icon: "⛽" },
  { label: "Charge Time", old: "4 hours", next: "< 60 sec", icon: "⏱" },
  { label: "Grid Dependency", old: "100%", next: "70% Solar", icon: "☀️" },
];

export const Scene2Problem = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headOp = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const headY = interpolate(spring({ frame, fps, config: { damping: 20 } }), [0, 1], [50, 0]);

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0a1628",
      background: "linear-gradient(135deg, #0a1628 0%, #0f2035 100%)",
    }}>
      {/* Title */}
      <div style={{
        position: "absolute", top: 100, left: 120,
        opacity: headOp, transform: `translateY(${headY}px)`,
      }}>
        <div style={{ fontSize: 18, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
          The Problem & Our Solution
        </div>
        <div style={{ fontSize: 52, color: "white", fontFamily: "sans-serif", fontWeight: 800, marginTop: 12, lineHeight: 1.15 }}>
          Fuel Costs. Load-Shedding.{"\n"}Delivery Downtime.
        </div>
      </div>

      {/* Comparison cards */}
      <div style={{
        position: "absolute", bottom: 120, left: 120, right: 120,
        display: "flex", gap: 40, justifyContent: "space-between",
      }}>
        {stats.map((s, i) => {
          const delay = 30 + i * 15;
          const cardOp = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const cardY = interpolate(spring({ frame: frame - delay, fps, config: { damping: 18 } }), [0, 1], [40, 0]);
          return (
            <div key={i} style={{
              flex: 1, borderRadius: 16, padding: 40,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(16,185,129,0.2)",
              opacity: cardOp, transform: `translateY(${cardY}px)`,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
            }}>
              <div style={{ fontSize: 48 }}>{s.icon}</div>
              <div style={{ fontSize: 18, color: "#94a3b8", fontFamily: "sans-serif", fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: 28, color: "#ef4444", fontFamily: "sans-serif", fontWeight: 700, textDecoration: "line-through" }}>{s.old}</div>
              <div style={{ fontSize: 36, color: "#10b981", fontFamily: "sans-serif", fontWeight: 800 }}>{s.next}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
