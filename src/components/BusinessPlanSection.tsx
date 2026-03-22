import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Battery, Zap, Gauge, Route, Timer, Disc, Weight, RefreshCw } from "lucide-react";
import evBikeSide from "@/assets/ev-bike-side.jpg";
import evBikeFront from "@/assets/ev-bike-front.jpg";
import batterySwapStation from "@/assets/battery-swap-station.jpg";

const images = [
  { src: evBikeSide, alt: "Valternative V1 Pro Max — Side Profile" },
  { src: evBikeFront, alt: "Electric delivery e-bike — Front View" },
  { src: batterySwapStation, alt: "Battery Swapping Station — Locker System" },
];

const specs = [
  { icon: Zap, label: "Motor Output", value: "3–4.5 kW", detail: "V1 Pro Max" },
  { icon: Gauge, label: "Top Speed", value: "80 km/h", detail: "Electronically Limited" },
  { icon: Route, label: "Range", value: "100 km", detail: "Per Battery Pack" },
  { icon: Battery, label: "Battery", value: "Swappable", detail: "Lithium-Ion Pack" },
  { icon: RefreshCw, label: "Swap Time", value: "<60 sec", detail: "At Any Station" },
  { icon: Timer, label: "Charge Time", value: "3–4 hrs", detail: "Per Pack in Locker" },
  { icon: Weight, label: "Payload", value: "110 kg", detail: "Rider + Cargo" },
  { icon: Disc, label: "Brakes", value: "Disc / Disc", detail: "Front & Rear" },
];

const models = [
  { name: "V1", output: "1.5 kW", range: "90 km", speed: "55 km/h" },
  { name: "V1 Max", output: "4 kW", range: "110 km", speed: "95 km/h" },
  { name: "V1 Pro Max", output: "3–4.5 kW", range: "100 km", speed: "80 km/h" },
];

export default function BusinessPlanSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="solution" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">The Solution</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            The E-Bike & Fleet Technology
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Based on the Valternative Energy platform — proven with Uber, Checkers Sixty60, and Famous Brands. 
            Swappable battery packs eliminate charging downtime entirely.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Carousel */}
          <div
            className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="relative rounded-md overflow-hidden border border-border bg-background">
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
              />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-surface active:scale-95 transition-all duration-200">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-surface active:scale-95 transition-all duration-200">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex gap-3 mt-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`flex-1 rounded-md overflow-hidden border-2 transition-all duration-200 active:scale-[0.97] ${
                    i === current ? "border-primary" : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">V1 Pro Max — Technical Specifications</h3>
            <div className="border border-border rounded-md overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    i < specs.length - 1 ? "border-b border-border" : ""
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

            {/* Model comparison */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground mb-4">Available Models</h4>
              <div className="grid grid-cols-3 gap-3">
                {models.map((m) => (
                  <div key={m.name} className="p-4 rounded-md border border-border bg-surface text-center">
                    <div className="text-sm font-bold text-foreground">{m.name}</div>
                    <div className="text-xs text-primary mt-1">{m.output}</div>
                    <div className="text-xs text-text-secondary mt-1">{m.range} · {m.speed}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
