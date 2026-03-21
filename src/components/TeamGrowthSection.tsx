import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Briefcase, Wrench } from "lucide-react";

const phases = [
  {
    phase: "Pilot Phase",
    icon: Users,
    roles: [
      "10 Delivery Riders (Contractors/Partners)",
      "1 Dedicated Route/Fleet Manager",
      "1 Specialized EV Mechanic",
    ],
  },
  {
    phase: "Year 2–3",
    icon: Briefcase,
    roles: [
      "50–150 Delivery Riders",
      "3–5 Regional Depot Managers",
      "1 Data Analyst (route efficiency & battery health)",
      "3 In-house EV Technicians",
    ],
  },
  {
    phase: "Year 4–5",
    icon: Wrench,
    roles: [
      "400+ Riders",
      "15+ Management & Operations Staff",
      "Joint ventures with solar installation partners",
      "Commercial real estate partnerships for micro-depot leasing",
    ],
  },
];

export default function TeamGrowthSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-2">Economic Impact & Team Growth</h3>
      <p className="text-sm text-text-secondary mb-8">Job creation through sustainable infrastructure investment.</p>

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
    </div>
  );
}
