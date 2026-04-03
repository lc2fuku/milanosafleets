import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { slide } from "@remotion/transitions/slide";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Fleet } from "./scenes/Scene3Fleet";
import { Scene4SwapStation } from "./scenes/Scene4SwapStation";
import { Scene5Community } from "./scenes/Scene5Community";
import { Scene6Environment } from "./scenes/Scene6Environment";
import { Scene5Partners } from "./scenes/Scene5Partners";
import { Scene6Financials } from "./scenes/Scene6Financials";
import { Scene9ProudlySA } from "./scenes/Scene9ProudlySA";
import { Scene7CTA } from "./scenes/Scene7CTA";

const BG_COLOR = "#0a1628";
const TRANSITION_FRAMES = 25;

export const MainVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
      {/* Persistent accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #10b981, #007a78, #10b981)",
          opacity: interpolate(frame, [0, 30], [0, 0.8], { extrapolateRight: "clamp" }),
          zIndex: 100,
        }}
      />

      {/* Narration text bar */}
      <NarrationBar frame={frame} />

      <TransitionSeries>
        {/* Scene 1: Opening Hook - 15s */}
        <TransitionSeries.Sequence durationInFrames={450}>
          <Scene1Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 2: The Problem - 20s */}
        <TransitionSeries.Sequence durationInFrames={600}>
          <Scene2Problem />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 3: Our Solution - 20s */}
        <TransitionSeries.Sequence durationInFrames={600}>
          <Scene3Fleet />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 4: Solar Swap Network - 20s */}
        <TransitionSeries.Sequence durationInFrames={600}>
          <Scene4SwapStation />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 5: Community Impact - 20s */}
        <TransitionSeries.Sequence durationInFrames={600}>
          <Scene5Community />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 6: Environmental Impact - 15s */}
        <TransitionSeries.Sequence durationInFrames={450}>
          <Scene6Environment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 7: Partners & Traction - 20s */}
        <TransitionSeries.Sequence durationInFrames={600}>
          <Scene5Partners />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 8: Financials & ROI - 15s */}
        <TransitionSeries.Sequence durationInFrames={450}>
          <Scene6Financials />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 9: Proudly SA - 10s */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <Scene9ProudlySA />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Scene 10: Call to Action - 15s */}
        <TransitionSeries.Sequence durationInFrames={450}>
          <Scene7CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

// Narration subtitle bar
const narrationSegments = [
  { start: 0, end: 450, text: "In the heart of South Africa, a revolution is taking shape..." },
  { start: 450, end: 1050, text: "Rising fuel costs. Load-shedding. Delivery downtime. But there is a better way." },
  { start: 1050, end: 1650, text: "69% cost reduction. 150km range. Built for South African roads." },
  { start: 1650, end: 2250, text: "Solar-powered battery swap in under 2 minutes. R50 per swap." },
  { start: 2250, end: 2850, text: "20+ jobs in Year One. Skills training. Empowering communities." },
  { start: 2850, end: 3300, text: "Zero emissions. Clean solar energy. Carbon-neutral deliveries." },
  { start: 3300, end: 3900, text: "Uber Eats · Checkers Sixty60 · Famous Brands · Mr D Food" },
  { start: 3900, end: 4350, text: "R2.9M investment. Break-even at Month 14-18." },
  { start: 4350, end: 4650, text: "Proudly South African. B-BBEE Level 1." },
  { start: 4650, end: 5400, text: "Milano SA Fleets — Powering Deliveries. Empowering Communities." },
];

function NarrationBar({ frame }: { frame: number }) {
  const segment = narrationSegments.find(s => frame >= s.start && frame < s.end);
  if (!segment) return null;

  const relFrame = frame - segment.start;
  const segDuration = segment.end - segment.start;
  const fadeIn = interpolate(relFrame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(relFrame, [segDuration - 20, segDuration], [1, 0], { extrapolateLeft: "clamp" });
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <div style={{
      position: "absolute",
      bottom: 60,
      left: 0,
      right: 0,
      zIndex: 200,
      display: "flex",
      justifyContent: "center",
      opacity,
    }}>
      <div style={{
        background: "rgba(0,0,0,0.7)",
        padding: "16px 48px",
        borderRadius: 8,
        maxWidth: 1400,
      }}>
        <div style={{
          color: "white",
          fontSize: 32,
          fontFamily: "sans-serif",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
        }}>
          {segment.text}
        </div>
      </div>
    </div>
  );
}