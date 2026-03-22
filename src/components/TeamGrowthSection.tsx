import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Briefcase, Wrench, Leaf } from "lucide-react";

const phases = [
  {
    phase: "Pilot Phase (Year 1)",
    icon: Users,
    roles: [
      "20 Delivery Riders (Contractors/Partners)",
      "1 Route/Fleet Manager",
      "2 EV Technicians (local training)",
      "1 Admin/Operations Coordinator",
    ],
  },
  {
    phase: "Year 2–3 Growth",
    icon: Briefcase,
    roles: [
      "50–150 Delivery Riders",
      "3–5 Regional Depot Managers",
      "1 Data Analyst (route efficiency & battery health)",
      "5 In-house EV Technicians",
      "1 Solar Installation Partner (JV)",
    ],
  },
  {
    phase: "Year 4–5 Scale",
    icon: Wrench,
    roles: [
      "400+ Riders nationally",
      "15+ Management & Operations Staff",
      "Battery recycling/second-life team",
      "Joint ventures with real estate for micro-depot leasing",
    ],
  },
];

const esgImpact = [
  { icon: Leaf, title: "Carbon Reduction", text: "24M km on clean energy = thousands of tonnes of CO₂ avoided" },
  { icon: Users, title: "Green Job Creation", text: "Training township youth as EV technicians and fleet managers" },
  { icon: Briefcase, title: "SMME Empowerment", text: "Enabling local delivery businesses with affordable fleet access" },
];

export default function TeamGrowthSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-2">Economic Impact & Team Growth</h3>
      <p className="text-sm text-text-secondary mb-8">Job creation and ESG impact through sustainable infrastructure investment.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((p, i) => (
          <div
            key={p.phase}
            className={`p-6 rounded-md border border-border bg-surface hover:border-primary/50 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${200 + i * 100}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p.icon size={22} className="text-primary mb-4" />
            <h4 className="font-semibold text-foreground mb-4">{p.phase}</h4>
            <ul className="space-y-2">
              {p.roles.map((r) => (
                <li key={r} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ESG Impact */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {esgImpact.map((e, i) => (
          <div
            key={e.title}
            className={`p-6 rounded-md border border-primary/20 bg-primary/5 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${500 + i * 100}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <e.icon size={20} className="text-primary mb-3" />
            <h4 className="text-sm font-semibold text-foreground mb-2">{e.title}</h4>
            <p className="text-xs text-text-secondary leading-relaxed">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
