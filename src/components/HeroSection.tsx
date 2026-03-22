import heroImage from "@/assets/hero-ev-fleet.jpg";
import { ArrowDown, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Electric delivery motorcycle at battery swapping station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="relative container-narrow pt-32 pb-24">
        <div className="max-w-2xl">
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6 border border-primary/30 rounded-sm px-3 py-1.5">
              B2B Investment Opportunity
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Solar-Powered<br />
            E-Bike Fleet &<br />
            <span className="text-gradient">Battery Swapping</span>
          </h1>

          <p
            className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            Revolutionizing last-mile delivery in South Africa with off-grid, solar-powered 
            e-bike fleet management and sub-60-second battery swapping — modelled on the 
            proven Valternative Energy platform.
          </p>

          {/* Key metrics strip */}
          <div
            className="mt-8 flex flex-wrap gap-6 animate-fade-up"
            style={{ animationDelay: "700ms" }}
          >
            <Metric value="R0.20/km" label="EV cost" />
            <Metric value="R0.65/km" label="Petrol cost" />
            <Metric value="<60s" label="Battery swap" />
          </div>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="#financials"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              View ROI Projections
              <TrendingUp size={16} />
            </a>
            <a
              href="#opportunity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border text-foreground font-semibold text-sm tracking-wide hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200"
            >
              The Opportunity
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-bold tabular-nums text-primary">{value}</div>
      <div className="text-xs text-text-secondary">{label}</div>
    </div>
  );
}
