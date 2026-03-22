import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoDemoSection() {
  const { ref, isVisible } = useScrollReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video-demo" className="section-padding bg-surface">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Video Demo</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            Investment Pitch Deck
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
            Watch our business plan pitch showcasing the solar-powered e-bike fleet and battery swapping opportunity.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div className="relative rounded-md overflow-hidden border border-border bg-background aspect-video">
            {playing ? (
              <video
                src="/videos/pitch-deck.mp4"
                autoPlay
                controls
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-background to-surface hover:from-surface hover:to-background transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  <Play size={32} className="text-primary-foreground ml-1" />
                </div>
                <span className="text-sm font-semibold text-text-secondary group-hover:text-foreground transition-colors">
                  Play Pitch Deck Video
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
