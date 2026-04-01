import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import ROICalculator from "./ROICalculator";
import TimelineSection from "./TimelineSection";
import TeamGrowthSection from "./TeamGrowthSection";

const fundData = [
  { name: "Fleet Acquisition (60%)", value: 1800000, color: "hsl(160, 84%, 39%)" },
  { name: "Solar Charging Infrastructure (20%)", value: 600000, color: "hsl(174, 100%, 24%)" },
  { name: "Tech & Software (15%)", value: 450000, color: "hsl(215, 25%, 63%)" },
  { name: "Marketing & Working Capital (5%)", value: 150000, color: "hsl(217, 19%, 40%)" },
];

const cumulativeCost = [
  { month: "M1", ice: 24000, ev: 5600 },
  { month: "M3", ice: 72000, ev: 16800 },
  { month: "M6", ice: 144000, ev: 33600 },
  { month: "M9", ice: 216000, ev: 50400 },
  { month: "M12", ice: 288000, ev: 67200 },
  { month: "M18", ice: 432000, ev: 100800 },
  { month: "M24", ice: 576000, ev: 134400 },
];

const revenueModel = [
  { stream: "Weekly Bike Rental", price: "R1,250/bike/week", note: "From R1,000 for Uber drivers" },
  { stream: "Battery Swap Fee", price: "R50 per swap", note: "~2,000 swaps/day at scale" },
  { stream: "White-Label Fleet Branding", price: "Custom", note: "Marketing fee on branded bikes + boxes" },
  { stream: "Battery Second Life", price: "R2,000–R5,000/unit", note: "Home backup power from retired packs" },
  { stream: "Solar Surplus Services", price: "Variable", note: "Phone charging, Wi-Fi at swap hubs" },
];

export default function FinancialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: chartRef, isVisible: chartVisible } = useScrollReveal(0.1);

  return (
    <section id="financials" className="section-padding bg-surface-alt">
      <div className="container-narrow">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Financial Projections</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The ROI · Break-Even at Month 14–18
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            A rental + swap fee model with proven unit economics. R1,250/week bike rental 
            + R50 per battery swap — delivering strong margins on a proven model.
          </p>
        </div>

        {/* Revenue Model */}
        <div className="mt-16">
          <RevenueModelTable />
        </div>

        {/* Charts */}
        <div ref={chartRef} className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 ${chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Use of Funds</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={fundData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" stroke="none">
                    {fundData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
                  </Pie>
                  <Tooltip formatter={(val: number) => `R${val.toLocaleString()}`} contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 19%, 27%)", borderRadius: "6px", color: "hsl(210, 40%, 98%)", fontSize: "13px" }} />
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
                  <Tooltip formatter={(val: number) => `R${val.toLocaleString()}`} contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 19%, 27%)", borderRadius: "6px", color: "hsl(210, 40%, 98%)", fontSize: "13px" }} />
                  <Area type="monotone" dataKey="ice" name="ICE (Petrol)" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="ev" name="EV (Solar)" stroke="hsl(160, 84%, 39%)" fill="hsl(160, 84%, 39%)" fillOpacity={0.15} strokeWidth={2} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Startup Capital Table */}
        <div className="mt-16"><StartupCapitalTable /></div>

        {/* ROI Calculator */}
        <div className="mt-16"><ROICalculator /></div>

        {/* Timeline */}
        <div className="mt-16"><TimelineSection /></div>

        {/* Team Growth */}
        <div className="mt-16"><TeamGrowthSection /></div>
      </div>
    </section>
  );
}

function RevenueModelTable() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Revenue Model</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-text-secondary font-medium">Revenue Stream</th>
              <th className="text-right py-3 text-text-secondary font-medium">Price Point</th>
              <th className="text-right py-3 text-text-secondary font-medium hidden sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {revenueModel.map((r) => (
              <tr key={r.stream} className="border-b border-border/50">
                <td className="py-3 text-foreground">{r.stream}</td>
                <td className="py-3 text-right font-semibold tabular-nums text-primary">{r.price}</td>
                <td className="py-3 text-right text-text-secondary hidden sm:table-cell">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StartupCapitalTable() {
  const { ref, isVisible } = useScrollReveal();
  const rows = [
    { item: "20 × EV Motorcycles (V1 Pro Max equiv.)", cost: "R1,200,000", pct: "40%" },
    { item: "3 × Solar Battery Swapping Hubs", cost: "R600,000", pct: "20%" },
    { item: "IoT Telematics, Fleet Software & App", cost: "R450,000", pct: "15%" },
    { item: "Working Capital, Salaries & Insurance (6mo)", cost: "R450,000", pct: "15%" },
    { item: "Marketing, Branding & Launch", cost: "R150,000", pct: "5%" },
    { item: "Depot Leasehold Improvements", cost: "R150,000", pct: "5%" },
  ];

  return (
    <div ref={ref} className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
         style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Startup Capital Breakdown — The Pilot Ask</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-text-secondary font-medium">Item</th>
              <th className="text-right py-3 text-text-secondary font-medium">%</th>
              <th className="text-right py-3 text-text-secondary font-medium">Cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} className="border-b border-border/50">
                <td className="py-3 text-foreground">{r.item}</td>
                <td className="py-3 text-right text-text-secondary tabular-nums">{r.pct}</td>
                <td className="py-3 text-right font-semibold tabular-nums text-foreground">{r.cost}</td>
              </tr>
            ))}
            <tr>
              <td className="py-4 text-foreground font-bold" colSpan={2}>Total Capital Required</td>
              <td className="py-4 text-right font-bold tabular-nums text-primary text-lg">R3,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
