import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    year: "Year 1",
    title: "Proof of Concept",
    fleet: "10–20 scooters",
    goal: "Validate 90-day pilot metrics with Checkers Sixty60. Prove R/km savings. Establish primary charging depot.",
    revenue: "Break-even on operational costs by Month 6.",
  },
  {
    year: "Year 2",
    title: "Cluster Rollout",
    fleet: "50 scooters",
    goal: "Expand to 3–5 high-density Checkers delivery hubs in the Eastern Cape. Implement secondary solar micro-depots.",
    revenue: "15% net profit margin as economies of scale kick in.",
  },
  {
    year: "Year 3",
    title: "Regional Domination",
    fleet: "150 scooters",
    goal: "Full regional integration. Begin offering Fleet-as-a-Service white-label solutions to other local logistics partners.",
    revenue: "Diversified revenue streams.",
  },
  {
    year: "Year 4–5",
    title: "National Expansion",
    fleet: "400+ scooters",
    goal: "Expand into Western Cape and Gauteng. Establish centralized fleet maintenance and battery recycling hub.",
    revenue: "National footprint with sustainable unit economics.",
  },
];

export default function TimelineSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-8">5-Year Expansion Plan</h3>
      <div className="space-y-6">
        {timeline.map((t, i) => (
          <TimelineItem key={t.year} item={t} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`flex gap-6 transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
      style={{ transitionDelay: `${index * 80}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary tabular-nums shrink-0">
          {index + 1}
        </div>
        {index < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
      </div>
      <div className="pb-8">
        <div className="text-xs text-primary font-semibold tracking-widest uppercase">{item.year}</div>
        <h4 className="text-foreground font-semibold mt-1">{item.title}</h4>
        <div className="text-sm text-text-secondary mt-1">Fleet: {item.fleet}</div>
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.goal}</p>
        <p className="text-sm text-primary mt-1">{item.revenue}</p>
      </div>
    </div>
  );
}
