import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene6Environment = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOp = interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(spring({ frame: frame - 10, fps, config: { damping: 20 } }), [0, 1], [50, 0]);

  // Animated circular progress
  const co2Pct = interpolate(frame, [60, 180], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const envStats = [
    { icon: "☀️", value: "100%", label: "Solar Powered Stations", delay: 40 },
    { icon: "🔋", value: "0", label: "Carbon Emissions per Delivery", delay: 55 },
    { icon: "🌿", value: "69%", label: "Lower Operating Footprint", delay: 70 },
    { icon: "♻️", value: "2nd Life", label: "Battery Repurposing Programme", delay: 85 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Green gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
      }} />

      {/* Large animated ring */}
      <div style={{
        position: "absolute", right: 160, top: 140,
        width: 400, height: 400,
      }}>
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="8" />
          <circle
            cx="100" cy="100" r="85" fill="none" stroke="#10b981" strokeWidth="8"
            strokeDasharray={`${co2Pct * 5.34} 534`}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: "#10b981", fontFamily: "sans-serif" }}>
            {Math.round(co2Pct)}%
          </div>
          <div style={{ fontSize: 16, color: "#94a3b8", fontFamily: "sans-serif" }}>
            Carbon Reduction
          </div>
        </div>
      </div>

      {/* Title */}
      <div style={{
        position: "absolute", top: 160, left: 120, maxWidth: 800,
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <div style={{ fontSize: 18, color: "#10b981", fontWeight: 600, letterSpacing: 6, textTransform: "uppercase", fontFamily: "sans-serif" }}>
          Environmental Impact
        </div>
        <div style={{ fontSize: 58, fontWeight: 800, color: "white", fontFamily: "sans-serif", lineHeight: 1.1, marginTop: 16 }}>
          Carbon-Neutral
          <br />Deliveries
        </div>
        <div style={{ fontSize: 22, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 20, lineHeight: 1.6 }}>
          Every delivery powered by clean solar energy.
          <br />Zero tailpipe emissions. Zero compromise.
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: "absolute", bottom: 120, left: 120, right: 120,
        display: "flex", gap: 28,
      }}>
        {envStats.map((stat, i) => {
          const op = interpolate(frame, [stat.delay, stat.delay + 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const y = interpolate(spring({ frame: frame - stat.delay, fps, config: { damping: 18 } }), [0, 1], [30, 0]);
          return (
            <div key={i} style={{
              flex: 1, padding: "28px 24px", borderRadius: 12,
              background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)",
              opacity: op, transform: `translateY(${y}px)`,
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#10b981", fontFamily: "sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 4 }}>{stat.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};