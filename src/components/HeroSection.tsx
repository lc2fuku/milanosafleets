import heroImage from "@/assets/hero-scooter.jpg";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Electric delivery scooter at solar charging station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="relative container-narrow pt-32 pb-24">
        <div className="max-w-2xl">
          <div
            className="animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6 border border-primary/30 rounded-sm px-3 py-1.5">
              B2B Investment Opportunity
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Solar-Powered<br />
            Delivery Fleet<br />
            <span className="text-gradient">Integration</span>
          </h1>

          <p
            className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            Transitioning high-demand retail delivery fleets from volatile fuel costs
            to a predictable, solar-charged electric model. R650,000 pilot. Measurable ROI.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="#financials"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              View ROI Projections
              <ArrowDown size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border text-foreground font-semibold text-sm tracking-wide hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
