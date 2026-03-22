import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const milestones = [
  { week: "Week 1", title: "Digital Twin & Documentation", tasks: ["Finalize investor website & pitch deck", "Draft MoU templates for franchise partners", "Secure Letter of Intent from local QSR"] },
  { week: "Week 2", title: "Technical De-Risking", tasks: ["Get solar installer quote for PE depot", "Source EV supplier (local assembly preferred)", "Draft maintenance SLA (2-hour repair target)"] },
  { week: "Week 3", title: "Funding Push", tasks: ["Register on CSD (Central Supplier Database)", "Apply to SEFA Green Energy/Logistics fund", "Engage ECDC (Eastern Cape Development Corp)"] },
  { week: "Week 4", title: "Pitch & Presentation", tasks: ["Record 2-minute elevator pitch video", "Submit to NYDA (up to R250k starter grant)", "Submit to IDC Green Energy fund for larger ask"] },
];

export default function FundingAskSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="the-ask" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">The Ask</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Capital Requirement: R3,000,000
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            A phased funding ask to deploy 20 e-bikes and 3 solar swapping hubs in Gqeberha, 
            targeting break-even at Month 14–18 through a rental + swap fee model.
          </p>
        </div>

        {/* Key numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "R3M", label: "Total Ask" },
            { value: "14–18mo", label: "Break-Even" },
            { value: "69%", label: "Cost Reduction vs ICE" },
            { value: "20+ Jobs", label: "Created in Year 1" },
          ].map((m, i) => (
            <div
              key={m.label}
              className={`p-6 rounded-md border border-primary/30 bg-primary/5 text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="text-2xl font-bold tabular-nums text-primary">{m.value}</div>
              <div className="text-xs text-text-secondary mt-2">{m.label}</div>
            </div>
          ))}
        </div>

        {/* 30-Day Implementation */}
        <div className="mt-16">
          <h3 className={`text-lg font-semibold text-foreground mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            30-Day Implementation Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.week}
                className={`p-6 rounded-md border border-border bg-surface transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={18} className="text-primary" />
                  <div>
                    <span className="text-xs text-primary font-semibold tracking-widest uppercase">{m.week}</span>
                    <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {m.tasks.map((t) => (
                    <li key={t} className="text-sm text-text-secondary flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Profit Tactics */}
        <div className={`mt-16 p-8 rounded-md border border-primary/20 bg-primary/5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionDelay: "800ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Additional Revenue Strategies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TacticCard title="Solar as a Service" text="Sell phone charging and Wi-Fi access to drivers waiting at swap hubs — a second revenue stream from excess solar capacity." />
            <TacticCard title="White-Label Fleet" text="Offer companies branded bikes and delivery boxes. Charge a marketing fee on top of the rental for full-livery fleet branding." />
            <TacticCard title="Battery Second Life" text="When batteries hit 70% health (2–3 years), sell as home backup power for township households during load-shedding. Pure profit." />
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionDelay: "1000ms" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            Contact Us to Invest
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TacticCard({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-xs text-text-secondary leading-relaxed">{text}</p>
    </div>
  );
}
