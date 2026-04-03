import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene9ProudlySA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const flagColors = ["#007749", "#FFB81C", "#000000", "#DE3831", "#002395", "#FFFFFF"];
  
  const titleOp = interpolate(frame, [10, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleScale = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 100 } });

  const pillars = [
    { text: "Local Assembly", delay: 30 },
    { text: "Local Hiring", delay: 45 },
    { text: "Local Partnerships", delay: 60 },
    { text: "Local Economy Growth", delay: 75 },
  ];

  // SA flag stripe animation
  const stripeWidth = interpolate(frame, [0, 40], [0, 1920], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Animated flag stripes */}
      {flagColors.map((color, i) => (
        <div key={i} style={{
          position: "absolute",
          top: i * (1080 / 6),
          left: 0,
          width: stripeWidth,
          height: 1080 / 6,
          backgroundColor: color,
          opacity: 0.06,
        }} />
      ))}

      {/* Center content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          opacity: titleOp, transform: `scale(${titleScale})`,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 80, fontWeight: 900, color: "white",
            fontFamily: "sans-serif", letterSpacing: -2, lineHeight: 1.0,
          }}>
            🇿🇦 PROUDLY
          </div>
          <div style={{
            fontSize: 80, fontWeight: 900,
            fontFamily: "sans-serif", letterSpacing: -2, lineHeight: 1.0,
            background: "linear-gradient(90deg, #007749, #FFB81C, #DE3831)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            SOUTH AFRICAN
          </div>
        </div>

        {/* Pillars */}
        <div style={{
          display: "flex", gap: 20, marginTop: 60,
        }}>
          {pillars.map((p, i) => {
            const op = interpolate(frame, [p.delay, p.delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const y = interpolate(spring({ frame: frame - p.delay, fps, config: { damping: 18 } }), [0, 1], [25, 0]);
            return (
              <div key={i} style={{
                padding: "20px 36px", borderRadius: 40,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                opacity: op, transform: `translateY(${y}px)`,
              }}>
                <div style={{ fontSize: 20, color: "white", fontFamily: "sans-serif", fontWeight: 600 }}>
                  {p.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* B-BBEE badge */}
        <div style={{
          marginTop: 50,
          opacity: interpolate(frame, [100, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${spring({ frame: frame - 100, fps, config: { damping: 12 } })})`,
        }}>
          <div style={{
            padding: "16px 40px", borderRadius: 12,
            background: "linear-gradient(135deg, #007749, #10b981)",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: "white", fontFamily: "sans-serif" }}>
              B-BBEE Level 1 Enterprise
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};