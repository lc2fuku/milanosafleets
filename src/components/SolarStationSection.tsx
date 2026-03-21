import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sun, Zap, Battery, Plug, ShieldCheck, Gauge, Cable, Warehouse } from "lucide-react";
import solarStation from "@/assets/solar-charging-station.jpg";

const solarSpecs = [
  { icon: Sun, label: "System Type", value: "Hybrid (On/Off-Grid)" },
  { icon: Zap, label: "Rated Output", value: "10 kW" },
  { icon: Battery, label: "Battery Storage", value: "10.24 kWh LiFePO₄" },
  { icon: Gauge, label: "Panel Capacity", value: "12 × 450W Mono" },
  { icon: Plug, label: "Charging Ports", value: "10 × 220V AC" },
  { icon: Cable, label: "Inverter", value: "10kW MPPT Hybrid" },
  { icon: ShieldCheck, label: "Protection", value: "IP65 Weatherproof" },
  { icon: Warehouse, label: "Mounting", value: "Carport Structure" },
];

export default function SolarStationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solar-station" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Infrastructure</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            10kW Hybrid Solar Charging Station
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
            A purpose-built solar carport powers the entire fleet from clean energy, 
            eliminating grid dependency and per-trip fuel costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="rounded-md overflow-hidden border border-border">
              <img src={solarStation} alt="10kW Hybrid Solar Charging Station for electric scooter fleet" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          {/* Specifications */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Station Specifications</h3>
            <div className="border border-border rounded-md overflow-hidden">
              {solarSpecs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    i < solarSpecs.length - 1 ? "border-b border-border" : ""
                  } ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
                >
                  <s.icon size={18} className="text-primary shrink-0" />
                  <div className="flex-1 text-sm font-medium text-foreground">{s.label}</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-md border border-primary/20 bg-primary/5">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-semibold text-primary">Estimated cost: R150,000</span> — includes panels, 
                inverter, LiFePO₄ battery bank, carport structure, and professional installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
