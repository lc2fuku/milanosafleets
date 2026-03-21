import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Gem } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Vision",
    text: "To become South Africa's leading provider of solar-powered last-mile delivery infrastructure, replacing fossil-fuel dependency with clean, predictable energy systems.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "Integrate electric vehicle fleets charged by solar micro-depots into existing high-demand retail delivery networks, starting with a proven 90-day pilot model.",
  },
  {
    icon: Gem,
    title: "Core Values",
    text: "Operational efficiency over ideology. Measurable R/km savings. Job creation through sustainable infrastructure. Transparent governance and B-BBEE Level 1 compliance.",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-surface-alt">
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">About Milano SA</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The Infrastructure for Carbon-Neutral Delivery
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.15);
            return (
              <div
                key={item.title}
                ref={cardRef}
                className={`p-8 rounded-md border border-border bg-surface hover:border-primary/50 transition-all duration-500 ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <item.icon size={28} className="text-primary mb-6" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
