import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ROICalculator() {
  const { ref, isVisible } = useScrollReveal();
  const [fleetSize, setFleetSize] = useState(20);
  const [dailyKm, setDailyKm] = useState(80);
  const [petrolPrice, setPetrolPrice] = useState(20.3);

  // ICE 125cc ~30km/L, EV costs R0.50/km (R50 per swap, ~100km per battery)
  const iceCostPerKm = petrolPrice / 30;
  const evCostPerKm = 0.50;
  const workingDays = 7; // weekly model

  const weeklyIceCost = fleetSize * dailyKm * workingDays * iceCostPerKm;
  const weeklyEvCost = fleetSize * dailyKm * workingDays * evCostPerKm;
  const weeklySavings = weeklyIceCost - weeklyEvCost;
  const monthlySavings = weeklySavings * 4;
  const monthlyIceCost = weeklyIceCost * 4;
  const monthlyEvCost = weeklyEvCost * 4;
  const savingsPercent = ((weeklySavings / weeklyIceCost) * 100).toFixed(0);

  // Revenue from rentals + swaps
  const weeklyRentalRevenue = fleetSize * 1250;
  const dailySwaps = fleetSize * 2; // ~2 swaps per bike per day
  const weeklySwapRevenue = dailySwaps * workingDays * 50;
  const monthlyRentalRevenue = weeklyRentalRevenue * 4;
  const monthlySwapRevenue = weeklySwapRevenue * 4;
  const totalMonthlyRevenue = monthlyRentalRevenue + monthlySwapRevenue;

  return (
    <div
      ref={ref}
      className={`p-8 rounded-md border border-primary/30 bg-surface transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-2">Interactive ROI Calculator</h3>
      <p className="text-sm text-text-secondary mb-8">
        Compare ICE fleet fuel costs against EV operating costs, and see projected revenue from rental + swap fees.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <SliderInput label="Fleet Size" value={fleetSize} min={10} max={100} step={5} unit=" bikes" onChange={setFleetSize} />
        <SliderInput label="Daily Distance / Bike" value={dailyKm} min={30} max={150} step={10} unit=" km" onChange={setDailyKm} />
        <SliderInput label="Petrol Price" value={petrolPrice} min={15} max={30} step={0.5} unit=" R/L" onChange={setPetrolPrice} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResultCard label="Monthly ICE Fuel Cost" value={`R${Math.round(monthlyIceCost).toLocaleString()}`} variant="destructive" />
        <ResultCard label="Monthly EV Swap Cost" value={`R${Math.round(monthlyEvCost).toLocaleString()}`} variant="primary" />
        <ResultCard label="Monthly Savings" value={`R${Math.round(monthlySavings).toLocaleString()}`} sub={`${savingsPercent}% reduction`} variant="highlight" />
        <ResultCard label="Monthly Revenue" value={`R${Math.round(totalMonthlyRevenue).toLocaleString()}`} sub={`R1,250/wk rental + R50/swap`} variant="primary" />
      </div>
    </div>
  );
}

function SliderInput({ label, value, min, max, step, unit, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-text-secondary">{label}</span>
        <span className="font-semibold tabular-nums text-foreground">{value}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
      />
    </div>
  );
}

function ResultCard({ label, value, sub, variant }: {
  label: string; value: string; sub?: string; variant: "destructive" | "primary" | "highlight";
}) {
  const borderClass = variant === "destructive" ? "border-destructive/30" : variant === "highlight" ? "border-primary" : "border-border";
  const valueClass = variant === "destructive" ? "text-destructive" : "text-primary";

  return (
    <div className={`p-5 rounded-md border ${borderClass} bg-background`}>
      <div className="text-xs text-text-secondary mb-2">{label}</div>
      <div className={`text-2xl font-bold tabular-nums ${valueClass}`}>{value}</div>
      {sub && <div className="text-xs text-primary mt-1">{sub}</div>}
    </div>
  );
}
