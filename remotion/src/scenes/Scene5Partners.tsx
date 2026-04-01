import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const partners = [
  { name: "Uber", role: "Courier Fleet Partner", color: "#000" },
  { name: "Checkers Sixty60", role: "Grocery Delivery", color: "#e11d48" },
  { name: "Famous Brands", role: "Debonairs · Steers · Wimpy", color: "#f59e0b" },
  { name: "Engen · Shell · Sasol", role: "Swap Station Hosts", color: "#3b82f6" },
];

const metrics = [
  { value: "24M km", label: "Covered in 18 months" },
  { value: "2,000", label: "Daily battery swaps" },
  { value: "R0.20/km", label: "Operating cost" },
  { value: "43,795 km", label: "Covered per day" },
];

export const Scene5Partners = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0a1628",
      background: "linear-gradient(180deg, #0a1628 0%, #0f2035 100%)",
    }}>
      <div style={{
        position: "absolute", top: 80, left: 120,
        opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
      }}>
        <div style={{ fontSize: 18, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
          Strategic Partners
        </div>
        <div style={{ fontSize: 48, color: "white", fontFamily: "sans-serif", fontWeight: 800, marginTop: 8 }}>
          Trusted by Industry Leaders
        </div>
      </div>

      {/* Partner logos/cards */}
      <div style={{
        position: "absolute", top: 240, left: 120, right: 120,
        display: "flex", gap: 24,
      }}>
        {partners.map((p, i) => {
          const delay = 15 + i * 12;
          const op = interpolate(frame, [delay, delay + 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const y = interpolate(spring({ frame: frame - delay, fps, config: { damping: 15 } }), [0, 1], [30, 0]);
          return (
            <div key={i} style={{
              flex: 1, borderRadius: 16, padding: "28px 24px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(16,185,129,0.15)",
              opacity: op, transform: `translateY(${y}px)`,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "white", fontFamily: "sans-serif" }}>{p.name}</div>
              <div style={{ fontSize: 16, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 8, fontWeight: 500 }}>{p.role}</div>
            </div>
          );
        })}
      </div>

      {/* Metrics row */}
      <div style={{
        position: "absolute", bottom: 100, left: 120, right: 120,
        display: "flex", gap: 40,
      }}>
        {metrics.map((m, i) => {
          const delay = 55 + i * 10;
          const op = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, textAlign: "center", opacity: op }}>
              <div style={{ fontSize: 42, fontWeight: 800, color: "#10b981", fontFamily: "sans-serif" }}>{m.value}</div>
              <div style={{ fontSize: 16, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 4, fontWeight: 500 }}>{m.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
