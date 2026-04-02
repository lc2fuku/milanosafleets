import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-ev-fleet.jpg";
import { ArrowDown, TrendingUp, Zap, Battery, Timer } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Valternative V1 Pro Max electric scooter at solar-powered battery swapping station"
          className="w-full h-full object-cover transition-transform duration-[20s] ease-linear"
          style={{ transform: loaded ? "scale(1.08)" : "scale(1)" }}
          width={1920}
          height={1080}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      {/* Accent glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="relative container-narrow pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "200ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-6 border border-primary/30 rounded-sm px-3 py-1.5">
              <Zap size={14} className="animate-pulse" />
              B2B Investment Opportunity
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-foreground transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ animationDelay: "400ms", transitionDelay: "400ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", lineHeight: 1.05 }}
          >
            Solar-Powered{" "}
            <span className="text-primary">EV Fleet</span>
            <br />
            & Battery
            <br />
            <span className="relative inline-block">
              <span className="text-gradient">Swapping Network</span>
              <span
                className={`absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full transition-all duration-1000 ${loaded ? "w-full" : "w-0"}`}
                style={{ transitionDelay: "1200ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "600ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Revolutionizing last-mile delivery in South Africa with off-grid, solar-powered 
            EV fleet management and sub-60-second battery swapping — powered by the 
            proven Valternative Energy platform.
          </p>

          {/* Key metrics strip */}
          <div
            className={`mt-8 flex flex-wrap gap-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "700ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <Metric icon={<TrendingUp size={16} />} value="R1,250/wk" label="Bike rental" />
            <Metric icon={<Battery size={16} />} value="R50/swap" label="Battery swap" />
            <Metric icon={<Timer size={16} />} value="<60s" label="Swap time" />
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "800ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <a
              href="#financials"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/25"
            >
              View ROI Projections
              <TrendingUp size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#opportunity"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border text-foreground font-semibold text-sm tracking-wide hover:border-primary hover:text-primary active:scale-[0.97] transition-all duration-200"
            >
              The Opportunity
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? "opacity-60" : "opacity-0"}`}
        style={{ transitionDelay: "1400ms" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-xl font-bold tabular-nums text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
