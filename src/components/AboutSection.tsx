import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Users, ShieldCheck, Fuel, Zap, MapPin } from "lucide-react";

const painPoints = [
  { icon: Fuel, title: "Rising Fuel Costs", text: "South African petrol prices continue to climb, squeezing margins for delivery fleets operating 125cc ICE bikes at ~R0.65/km." },
  { icon: Zap, title: "Grid Unreliability", text: "Load-shedding disrupts standard EV charging. Solar-powered battery swapping operates independently of the grid." },
  { icon: MapPin, title: "Underserved Markets", text: "While Cape Town and Joburg are saturated, the Eastern Cape and PE delivery corridors remain underserved for EV fleet solutions." },
];

const metrics = [
  { value: "24M km", label: "Covered by Valternative fleet in 18 months" },
  { value: "100+", label: "Swapping stations deployed nationally" },
  { value: "2,000/day", label: "Battery swaps processed daily" },
  { value: "R50/swap", label: "Fully charged battery swap cost" },
];

const targets = [
  { icon: Users, name: "Food Delivery", detail: "Checkers Sixty60, Mr D Food, Uber Eats" },
  { icon: TrendingUp, name: "Quick Service Restaurants", detail: "Debonairs, Steers, Wimpy (Famous Brands)" },
  { icon: ShieldCheck, name: "E-Commerce Logistics", detail: "Takealot, local SMME couriers" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="opportunity" className="section-padding bg-surface-alt">
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Market & Opportunity</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            South Africa's last-mile delivery sector is trapped between rising fuel costs, traffic congestion, 
            and an unreliable grid — creating a massive opening for off-grid, solar-powered EV fleet management.
          </p>
        </div>

        {/* Pain points */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {painPoints.map((item, i) => (
            <div
              key={item.title}
              className={`p-8 rounded-md border border-border bg-surface hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${200 + i * 100}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <item.icon size={28} className="text-primary mb-6" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Market proof metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-6 rounded-md border border-border bg-surface text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${500 + i * 80}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="text-2xl font-bold tabular-nums text-primary">{m.value}</div>
              <div className="text-xs text-text-secondary mt-2 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Target clients */}
        <div className="mt-16">
          <h3 className={`text-lg font-semibold text-foreground mb-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Target Clients & Sectors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {targets.map((t, i) => (
              <div
                key={t.name}
                className={`flex items-start gap-4 p-6 rounded-md border border-border bg-surface transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${700 + i * 100}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <t.icon size={22} className="text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-text-secondary mt-1">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className={`mt-16 p-8 rounded-md border border-primary/20 bg-primary/5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionDelay: "900ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <h3 className="text-lg font-semibold text-foreground mb-3">Competitive Advantage</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Local maintenance and repair hubs — bikes fixed in under 2 hours</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Solar swapping hubs operate during load-shedding — grid-independent</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Operating in Nelson Mandela Bay SEZ priority area — regional development incentives</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />B-BBEE Level 1 certified — eligible for government procurement and grants</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
