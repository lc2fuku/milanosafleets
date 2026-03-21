import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Battery, Zap, Weight, Route, Gauge, Timer, Disc, Plug } from "lucide-react";
import scooterSide from "@/assets/scooter-side.jpg";
import scooterFront from "@/assets/scooter-front.jpg";
import scooterRear from "@/assets/scooter-rear.jpg";

const images = [
  { src: scooterSide, alt: "Big Boy D-Lite E 3000W — Side Profile" },
  { src: scooterFront, alt: "Big Boy D-Lite E 3000W — Front Three-Quarter" },
  { src: scooterRear, alt: "Big Boy D-Lite E 3000W — Rear Three-Quarter" },
];

const specs = [
  { icon: Battery, label: "Battery", value: "72V 45Ah", detail: "Lithium-Ion" },
  { icon: Zap, label: "Motor", value: "3,000W", detail: "Continuous Rated" },
  { icon: Gauge, label: "Top Speed", value: "75 km/h", detail: "Electronically Limited" },
  { icon: Route, label: "Max Range", value: "130 km", detail: "Single Charge" },
  { icon: Weight, label: "Max Payload", value: "110 kg", detail: "Rider + Cargo" },
  { icon: Timer, label: "Charge Time", value: "4–6 hrs", detail: "Standard Charge" },
  { icon: Disc, label: "Brakes", value: "Disc / Disc", detail: "Front & Rear" },
  { icon: Plug, label: "Charger", value: "220V AC", detail: "Standard Outlet" },
];

export default function ScooterShowcase() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="scooter-showcase" className="section-padding bg-surface">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Fleet Vehicle</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            Big Boy D-Lite E 3000W
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
            Purpose-built for urban last-mile delivery. Solar-charged at depot, eliminating per-trip fuel costs entirely.
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
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-surface active:scale-95 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-surface active:scale-95 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
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

          {/* Specifications Table */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Technical Specifications</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}
