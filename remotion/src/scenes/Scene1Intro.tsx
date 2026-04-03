import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";

export const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 15, stiffness: 80 } });
  const titleY = interpolate(spring({ frame: frame - 30, fps, config: { damping: 20 } }), [0, 1], [60, 0]);
  const titleOp = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subOp = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY = interpolate(spring({ frame: frame - 60, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  // Tagline fade
  const tagOp = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagY = interpolate(spring({ frame: frame - 120, fps, config: { damping: 20 } }), [0, 1], [30, 0]);

  const bgX = interpolate(frame, [0, 450], [0, -50]);
  
  // Pulsing green glow
  const glowOp = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.1, 0.25]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Background with slow pan */}
      <div style={{ position: "absolute", inset: -80, opacity: 0.2 }}>
        <Img
          src={staticFile("images/hero-ev-fleet.jpg")}
          style={{ width: "120%", height: "120%", objectFit: "cover", transform: `translateX(${bgX}px)` }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 60%, rgba(16,185,129,${glowOp}) 0%, transparent 70%)`,
      }} />

      {/* Logo */}
      <div style={{
        position: "absolute", top: 160, left: 0, right: 0,
        display: "flex", justifyContent: "center",
        transform: `scale(${logoScale})`,
      }}>
        <Img src={staticFile("images/milano-logo.png")} style={{ width: 220, height: 220, objectFit: "contain" }} />
      </div>

      {/* Title */}
      <div style={{
        position: "absolute", top: 420, left: 0, right: 0, textAlign: "center",
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <div style={{
          fontSize: 82, fontWeight: 900, color: "white",
          fontFamily: "sans-serif", letterSpacing: -3,
          lineHeight: 1.0,
        }}>
          MILANO SA FLEETS
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        position: "absolute", top: 530, left: 0, right: 0, textAlign: "center",
        opacity: subOp, transform: `translateY(${subY}px)`,
      }}>
        <div style={{
          fontSize: 30, color: "#10b981", fontWeight: 600,
          fontFamily: "sans-serif", letterSpacing: 6, textTransform: "uppercase",
        }}>
          EV Fleet Innovation
        </div>
        <div style={{
          fontSize: 22, color: "#94a3b8", fontWeight: 400,
          fontFamily: "sans-serif", marginTop: 20,
        }}>
          Solar-Powered Battery Swap Network · Gqeberha, South Africa
        </div>
      </div>

      {/* Proudly SA tagline */}
      <div style={{
        position: "absolute", top: 700, left: 0, right: 0, textAlign: "center",
        opacity: tagOp, transform: `translateY(${tagY}px)`,
      }}>
        <div style={{
          display: "inline-block",
          padding: "12px 40px",
          borderRadius: 40,
          background: "rgba(16,185,129,0.15)",
          border: "1px solid rgba(16,185,129,0.3)",
        }}>
          <span style={{ fontSize: 20, color: "#10b981", fontFamily: "sans-serif", fontWeight: 600 }}>
            🇿🇦 Proudly South African
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};