import { useScrollReveal } from "@/hooks/useScrollReveal";
import solarStation from "@/assets/solar-station.jpg";
import { Battery, Zap, Weight, Route } from "lucide-react";

const specs = [
  { icon: Battery, label: "Battery", value: "72V 45Ah", sub: "Lithium" },
  { icon: Zap, label: "Motor", value: "3,000W", sub: "Continuous" },
  { icon: Weight, label: "Payload", value: "110kg", sub: "Max Load" },
  { icon: Route, label: "Range", value: "130km", sub: "Max Range" },
];

export default function BusinessPlanSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="business-plan" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Business Plan</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
              Solar-Powered Delivery Fleet
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Our pilot fleet leverages the Big Boy D-Lite E 3000W platform — purpose-built for 
              urban last-mile delivery with a lithium battery system designed for commercial duty 
              cycles. Solar-charged at depot, eliminating per-trip fuel costs entirely.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-5 rounded-md border border-border bg-surface transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: `${300 + i * 80}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <s.icon size={20} className="text-primary mb-3" />
                  <div className="text-2xl font-bold tabular-nums text-foreground">{s.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <div className="rounded-md overflow-hidden border border-border">
              <img src={solarStation} alt="Solar charging infrastructure" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
