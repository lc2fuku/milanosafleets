import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";

export const Scene7CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame: frame - 10, fps, config: { damping: 15 } });
  const titleOp = interpolate(frame, [20, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagOp = interpolate(frame, [40, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const contactOp = interpolate(frame, [55, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Subtle shimmer on the green line
  const shimmerX = interpolate(frame, [0, 140], [-200, 2200]);

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0a1628",
      background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.1) 0%, #0a1628 70%)",
    }}>
      {/* Logo */}
      <div style={{
        position: "absolute", top: 200, left: 0, right: 0,
        display: "flex", justifyContent: "center",
        transform: `scale(${logoScale})`,
      }}>
        <Img src={staticFile("images/milano-logo.png")} style={{ width: 160, height: 160, objectFit: "contain" }} />
      </div>

      {/* Title */}
      <div style={{
        position: "absolute", top: 400, left: 0, right: 0, textAlign: "center",
        opacity: titleOp,
      }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: "white", fontFamily: "sans-serif" }}>
          Invest in South Africa's Green Future
        </div>
      </div>

      {/* Tagline */}
      <div style={{
        position: "absolute", top: 500, left: 0, right: 0, textAlign: "center",
        opacity: tagOp,
      }}>
        <div style={{ fontSize: 24, color: "#10b981", fontFamily: "sans-serif", fontWeight: 600, letterSpacing: 2 }}>
          MILANO SA · EV FLEET INNOVATION · GQEBERHA
        </div>
      </div>

      {/* Contact */}
      <div style={{
        position: "absolute", top: 580, left: 0, right: 0, textAlign: "center",
        opacity: contactOp,
      }}>
        <div style={{ fontSize: 20, color: "#94a3b8", fontFamily: "sans-serif" }}>
          www.smartdevice.co.za · info@milanosa.co.za
        </div>
      </div>
    </AbsoluteFill>
  );
};
