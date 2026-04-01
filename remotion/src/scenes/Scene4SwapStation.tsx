import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";

const features = [
  "8–12 cabinet battery slots per hub",
  "Solar PV powered (5kW–10kW array)",
  "CCTV security on every station",
  "App + facial recognition access",
  "100 stations live · 300K+ swaps completed",
];

export const Scene4SwapStation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Station image — right side */}
      <div style={{
        position: "absolute", right: 60, top: 80, bottom: 80, width: "48%",
        borderRadius: 20, overflow: "hidden",
        opacity: interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" }),
        transform: `scale(${interpolate(spring({ frame, fps, config: { damping: 20 } }), [0, 1], [1.08, 1])})`,
      }}>
        <Img src={staticFile("images/battery-swap-station.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Content — left side */}
      <div style={{ position: "absolute", left: 120, top: 140, width: 750 }}>
        <div style={{
          fontSize: 18, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700,
          letterSpacing: 4, textTransform: "uppercase",
          opacity: interpolate(frame, [5, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Operational Excellence
        </div>
        <div style={{
          fontSize: 44, color: "white", fontFamily: "sans-serif", fontWeight: 800, marginTop: 12, lineHeight: 1.15,
          opacity: interpolate(frame, [10, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Solar Battery Swap Network
        </div>

        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
          {features.map((f, i) => {
            const delay = 20 + i * 12;
            const op = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const x = interpolate(spring({ frame: frame - delay, fps, config: { damping: 18 } }), [0, 1], [-30, 0]);
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                opacity: op, transform: `translateX(${x}px)`,
              }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "#10b981", flexShrink: 0,
                }} />
                <span style={{ fontSize: 22, color: "#e2e8f0", fontFamily: "sans-serif", fontWeight: 500 }}>{f}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
