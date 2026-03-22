import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sun, Battery, RefreshCw, ShieldCheck, Gauge, Camera, Smartphone, Clock } from "lucide-react";
import batteryStation from "@/assets/battery-swap-station.jpg";
import swapInAction from "@/assets/solar-swap-hub.jpg";
import fleetWarehouse from "@/assets/fleet-warehouse.jpg";

const stationSpecs = [
  { icon: Battery, label: "Cabinets", value: "8–12 slots", detail: "Per Station" },
  { icon: RefreshCw, label: "Swap Time", value: "<60 seconds", detail: "Full Process" },
  { icon: Sun, label: "Power Source", value: "5–10kW Solar PV", detail: "With Battery Storage" },
  { icon: Smartphone, label: "Access", value: "App / Facial ID", detail: "Secure Authentication" },
  { icon: Camera, label: "Security", value: "CCTV Monitored", detail: "24/7 Surveillance" },
  { icon: Clock, label: "Availability", value: "24/7", detail: "Grid-Independent" },
  { icon: ShieldCheck, label: "Design", value: "IP65 Rated", detail: "Weatherproof" },
  { icon: Gauge, label: "Monitoring", value: "IoT Dashboard", detail: "Real-Time Tracking" },
];

const uptimeFeatures = [
  "Predictive maintenance software — bikes fixed in under 2 hours",
  "On-site repair units at delivery hubs",
  "24/7 fleet tracking via IoT digital dashboard",
  "Battery health monitoring ensures sufficient charged packs",
  "99% target fleet availability",
];

export default function SolarStationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="operations" className="section-padding bg-surface">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Operational Excellence</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            Solar Swapping Stations & Fleet Reliability
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A 3-minute battery swap beats a 4-hour charge. Our cabinet-based swapping system, powered 
            by solar PV arrays, keeps riders moving — even during load-shedding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div
            className={`space-y-4 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="rounded-md overflow-hidden border border-border">
              <img src={batteryStation} alt="Valternative Battery Charging Station lockers" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <img src={swapInAction} alt="Checkers Sixty60 driver swapping battery at Valternative station" className="w-full aspect-[16/9] object-cover" />
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <img src={fleetWarehouse} alt="Valternative e-bike fleet lined up at warehouse with charging stations" className="w-full aspect-[16/9] object-cover" />
            </div>
          </div>

          {/* Station Specs */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Swap Station Specifications</h3>
            <div className="border border-border rounded-md overflow-hidden">
              {stationSpecs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    i < stationSpecs.length - 1 ? "border-b border-border" : ""
                  } ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}
                >
                  <s.icon size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{s.label}</div>
                    <div className="text-xs text-text-secondary">{s.detail}</div>
                  </div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{s.value}</div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-8 p-6 rounded-md border border-primary/20 bg-primary/5">
              <h4 className="text-sm font-semibold text-foreground mb-3">How Battery Swapping Works</h4>
              <ol className="space-y-2 text-sm text-text-secondary">
                <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">1</span>Driver arrives at station, authenticates via app or facial recognition</li>
                <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">2</span>Empty cabinet opens — depleted battery is inserted</li>
                <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">3</span>Fully charged battery cabinet opens — driver installs and rides</li>
              </ol>
              <p className="text-xs text-primary mt-3 font-semibold">Total process: under 60 seconds</p>
            </div>

            {/* Uptime strategy */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Fleet Reliability Strategy</h4>
              <ul className="space-y-2">
                {uptimeFeatures.map((f) => (
                  <li key={f} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
