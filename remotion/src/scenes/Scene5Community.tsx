import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene5Community = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOp = interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(spring({ frame: frame - 10, fps, config: { damping: 20 } }), [0, 1], [50, 0]);

  const stats = [
    { value: "20+", label: "Jobs Created Year 1", delay: 30 },
    { value: "3", label: "Training Programmes", delay: 45 },
    { value: "100%", label: "Local Hiring", delay: 60 },
    { value: "B-BBEE 1", label: "Certification Target", delay: 75 },
  ];

  const skills = [
    { name: "EV Maintenance & Repair", delay: 90 },
    { name: "Solar Energy Systems", delay: 105 },
    { name: "Fleet Logistics Management", delay: 120 },
    { name: "Battery Technology", delay: 135 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      {/* Warm gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 70%, rgba(234,179,8,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(16,185,129,0.1) 0%, transparent 60%)",
      }} />

      {/* Header */}
      <div style={{
        position: "absolute", top: 120, left: 120, right: 120,
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <div style={{ fontSize: 18, color: "#eab308", fontWeight: 600, letterSpacing: 6, textTransform: "uppercase", fontFamily: "sans-serif" }}>
          Community Impact
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "white", fontFamily: "sans-serif", lineHeight: 1.1, marginTop: 16 }}>
          Empowering Through
          <br />Skills & Training
        </div>
      </div>

      {/* Stats grid */}
      <div style={{
        position: "absolute", top: 380, left: 120, right: 120,
        display: "flex", gap: 32,
      }}>
        {stats.map((stat, i) => {
          const s = spring({ frame: frame - stat.delay, fps, config: { damping: 15 } });
          const op = interpolate(frame, [stat.delay, stat.delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              flex: 1, padding: 32, borderRadius: 12,
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
              opacity: op, transform: `scale(${s})`,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#10b981", fontFamily: "sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 16, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 8 }}>{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Skills list */}
      <div style={{ position: "absolute", bottom: 160, left: 120, right: 120 }}>
        <div style={{
          fontSize: 22, color: "#e2e8f0", fontWeight: 600, fontFamily: "sans-serif", marginBottom: 24,
          opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          Training & Development Programmes
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {skills.map((skill, i) => {
            const op = interpolate(frame, [skill.delay, skill.delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const x = interpolate(spring({ frame: frame - skill.delay, fps, config: { damping: 20 } }), [0, 1], [40, 0]);
            return (
              <div key={i} style={{
                flex: 1, padding: "20px 24px", borderRadius: 8,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                opacity: op, transform: `translateX(${x}px)`,
              }}>
                <div style={{ fontSize: 18, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};