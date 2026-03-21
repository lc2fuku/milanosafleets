import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import ROICalculator from "./ROICalculator";
import TimelineSection from "./TimelineSection";
import TeamGrowthSection from "./TeamGrowthSection";

const fundData = [
  { name: "Vehicles (10x)", value: 350000, color: "hsl(160, 84%, 39%)" },
  { name: "Solar Infrastructure", value: 150000, color: "hsl(174, 100%, 24%)" },
  { name: "Hardware & Setup", value: 30000, color: "hsl(215, 25%, 63%)" },
  { name: "Working Capital (3mo)", value: 120000, color: "hsl(217, 19%, 40%)" },
];

const cumulativeCost = [
  { month: "M1", ice: 24000, ev: 3200 },
  { month: "M3", ice: 72000, ev: 9600 },
  { month: "M6", ice: 144000, ev: 19200 },
  { month: "M9", ice: 216000, ev: 28800 },
  { month: "M12", ice: 288000, ev: 38400 },
  { month: "M18", ice: 432000, ev: 57600 },
  { month: "M24", ice: 576000, ev: 76800 },
];

export default function FinancialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: chartRef, isVisible: chartVisible } = useScrollReveal(0.1);

  return (
    <section id="financials" className="section-padding bg-surface-alt">
      <div className="container-narrow">
        {/* Header */}
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Pilot Financial Projections</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            90-Day Pilot · R650,000 Total Ask
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            A controlled pilot to validate R/km savings against petrol, establish the primary
            charging depot, and prove the model for scale.
          </p>
        </div>

        {/* Use of Funds + Cumulative Cost */}
        <div ref={chartRef} className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 ${chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Use of Funds</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {fundData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: number) => `R${val.toLocaleString()}`}
                    contentStyle={{
                      background: "hsl(217, 33%, 17%)",
                      border: "1px solid hsl(217, 19%, 27%)",
                      borderRadius: "6px",
                      color: "hsl(210, 40%, 98%)",
                      fontSize: "13px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {fundData.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ background: d.color }} />
                    <span className="text-text-secondary">{d.name}</span>
                  </div>
                  <span className="font-semibold tabular-nums text-foreground">R{d.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 delay-100 ${chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Cumulative Operating Cost: ICE vs EV</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cumulativeCost}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 19%, 27%)" />
                  <XAxis dataKey="month" stroke="hsl(215, 25%, 63%)" fontSize={12} />
                  <YAxis stroke="hsl(215, 25%, 63%)" fontSize={12} tickFormatter={(v) => `R${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    formatter={(val: number) => `R${val.toLocaleString()}`}
                    contentStyle={{
                      background: "hsl(217, 33%, 17%)",
                      border: "1px solid hsl(217, 19%, 27%)",
                      borderRadius: "6px",
                      color: "hsl(210, 40%, 98%)",
                      fontSize: "13px",
                    }}
                  />
                  <Area type="monotone" dataKey="ice" name="ICE (Petrol)" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="ev" name="EV (Solar)" stroke="hsl(160, 84%, 39%)" fill="hsl(160, 84%, 39%)" fillOpacity={0.15} strokeWidth={2} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Startup Capital Table */}
        <div className="mt-16">
          <StartupCapitalTable />
        </div>

        {/* ROI Calculator */}
        <div className="mt-16">
          <ROICalculator />
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <TimelineSection />
        </div>

        {/* Team Growth */}
        <div className="mt-16">
          <TeamGrowthSection />
        </div>
      </div>
    </section>
  );
}

function StartupCapitalTable() {
  const { ref, isVisible } = useScrollReveal();
  const rows = [
    { item: "10 × Big Boy D-Lite E 3000W Scooters", cost: "R350,000" },
    { item: "10kW Hybrid Solar Charging Station", cost: "R150,000" },
    { item: "Telematics, GPS & Depot Hardware", cost: "R30,000" },
    { item: "Working Capital & Labour (3 months)", cost: "R120,000" },
  ];

  return (
    <div ref={ref} className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Startup Capital Estimation</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-text-secondary font-medium">Item</th>
              <th className="text-right py-3 text-text-secondary font-medium">Estimated Cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} className="border-b border-border/50">
                <td className="py-3 text-foreground">{r.item}</td>
                <td className="py-3 text-right font-semibold tabular-nums text-foreground">{r.cost}</td>
              </tr>
            ))}
            <tr>
              <td className="py-4 text-foreground font-bold">Total Initial Capital</td>
              <td className="py-4 text-right font-bold tabular-nums text-primary text-lg">R650,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
