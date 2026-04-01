import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";

const specs = [
  ["Motor", "3kW – 4.5kW"],
  ["Range", "100 km"],
  ["Top Speed", "80 km/h"],
  ["Battery", "Swappable Li-ion"],
  ["Swap Time", "< 60 seconds"],
];

export const Scene3Fleet = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const imgScale = interpolate(spring({ frame, fps, config: { damping: 20, stiffness: 80 } }), [0, 1], [1.1, 1]);
  const imgOp = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Bike image — left side */}
      <div style={{
        position: "absolute", left: 60, top: 80, bottom: 80, width: "50%",
        borderRadius: 20, overflow: "hidden",
        opacity: imgOp, transform: `scale(${imgScale})`,
      }}>
        <Img src={staticFile("images/ev-bike-side.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Specs — right side */}
      <div style={{ position: "absolute", right: 80, top: 120, width: 700 }}>
        <div style={{
          fontSize: 18, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700,
          letterSpacing: 4, textTransform: "uppercase",
          opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          The Fleet
        </div>
        <div style={{
          fontSize: 44, color: "white", fontFamily: "sans-serif", fontWeight: 800, marginTop: 12, lineHeight: 1.15,
          opacity: interpolate(frame, [15, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Valternative V1 Pro Max
        </div>

        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
          {specs.map(([label, value], i) => {
            const delay = 25 + i * 10;
            const op = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const x = interpolate(spring({ frame: frame - delay, fps, config: { damping: 20 } }), [0, 1], [30, 0]);
            return (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 24px", borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(16,185,129,0.15)",
                opacity: op, transform: `translateX(${x}px)`,
              }}>
                <span style={{ fontSize: 20, color: "#94a3b8", fontFamily: "sans-serif", fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: 24, color: "#10b981", fontFamily: "sans-serif", fontWeight: 700 }}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
