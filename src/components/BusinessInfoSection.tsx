import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, CreditCard } from "lucide-react";
import DocumentViewer from "./DocumentViewer";

export default function BusinessInfoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="business-info" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Business Information</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Governance & Compliance
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className={`p-8 rounded-md border border-border bg-card transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <Building2 size={22} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-6">Company Details</h3>
            <div className="space-y-3 text-sm">
              <InfoRow label="Entity" value="Milano SA (Pty) Ltd" />
              <InfoRow label="Registration" value="2025/667/578/07" />
              <InfoRow label="B-BBEE Level 1" value="9442206276" />
              <InfoRow label="Tax Reference" value="9986070192" />
              <InfoRow label="Tax Pin" value="9GG63532DZ" />
              <InfoRow label="CSD Supplier No" value="MAAA1655870" />
            </div>
          </div>

          <div className={`p-8 rounded-md border border-border bg-card transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
               style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <CreditCard size={22} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-6">Banking Details</h3>
            <div className="space-y-3 text-sm">
              <InfoRow label="Bank" value="FNB" />
              <InfoRow label="Account Type" value="Current Account" />
              <InfoRow label="Account No" value="63202529088" />
              <InfoRow label="Branch" value="My Branch" />
              <InfoRow label="Branch No" value="255355" />
            </div>
          </div>
        </div>

        <DocumentViewer />
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border/50">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
}
