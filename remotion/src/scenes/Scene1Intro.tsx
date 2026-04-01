import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";

export const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 15, stiffness: 80 } });
  const titleY = interpolate(spring({ frame: frame - 20, fps, config: { damping: 20 } }), [0, 1], [60, 0]);
  const titleOp = interpolate(frame, [20, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subOp = interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY = interpolate(spring({ frame: frame - 40, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  const bgX = interpolate(frame, [0, 160], [0, -30]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Background image with slow pan */}
      <div style={{ position: "absolute", inset: -60, opacity: 0.25 }}>
        <Img
          src={staticFile("images/hero-ev-fleet.jpg")}
          style={{ width: "120%", height: "120%", objectFit: "cover", transform: `translateX(${bgX}px)` }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 60%, rgba(16,185,129,0.15) 0%, transparent 70%)",
      }} />

      {/* Logo */}
      <div style={{
        position: "absolute", top: 180, left: 0, right: 0,
        display: "flex", justifyContent: "center",
        transform: `scale(${logoScale})`,
      }}>
        <Img src={staticFile("images/milano-logo.png")} style={{ width: 200, height: 200, objectFit: "contain" }} />
      </div>

      {/* Title */}
      <div style={{
        position: "absolute", top: 420, left: 0, right: 0, textAlign: "center",
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <div style={{
          fontSize: 72, fontWeight: 800, color: "white",
          fontFamily: "sans-serif", letterSpacing: -2,
          lineHeight: 1.1,
        }}>
          MILANO SA
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        position: "absolute", top: 520, left: 0, right: 0, textAlign: "center",
        opacity: subOp, transform: `translateY(${subY}px)`,
      }}>
        <div style={{
          fontSize: 28, color: "#10b981", fontWeight: 600,
          fontFamily: "sans-serif", letterSpacing: 4, textTransform: "uppercase",
        }}>
          EV Fleet Innovation
        </div>
        <div style={{
          fontSize: 20, color: "#94a3b8", fontWeight: 400,
          fontFamily: "sans-serif", marginTop: 16,
        }}>
          Solar-Powered Battery Swap Network · Gqeberha, South Africa
        </div>
      </div>
    </AbsoluteFill>
  );
};
