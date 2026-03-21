import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, CreditCard, FileText } from "lucide-react";
import { useState } from "react";

const documents = [
  "COR14.3 Company Registration",
  "BEE Certificate",
  "Tax Clearance Certificate",
  "Signed Lease Agreement",
  "FNB Business Account Confirmation Letter",
];

export default function BusinessInfoSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

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
          {/* Company Info */}
          <div className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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

          {/* Banking */}
          <div className={`p-8 rounded-md border border-border bg-surface transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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

        {/* Document Viewer */}
        <div className={`mt-12 p-8 rounded-md border border-border bg-surface transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <FileText size={22} className="text-primary mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Compliance Documents</h3>
          <p className="text-sm text-text-secondary mb-6">Secure, read-only document viewer. Contact us for verified copies.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {documents.map((doc) => (
              <button
                key={doc}
                onClick={() => setActiveDoc(activeDoc === doc ? null : doc)}
                className={`text-left p-4 rounded-md border text-sm transition-all duration-200 active:scale-[0.98] ${
                  activeDoc === doc
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-text-secondary hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <FileText size={16} className="mb-2 text-primary" />
                {doc}
              </button>
            ))}
          </div>

          {activeDoc && (
            <div className="mt-6 p-6 rounded-md border border-border bg-background min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <FileText size={32} className="mx-auto text-text-secondary mb-3" />
                <p className="text-sm text-text-secondary">
                  <span className="font-medium text-foreground">{activeDoc}</span>
                  <br />
                  Document available upon authenticated access.
                  <br />
                  <span className="text-xs">Contact milano-sa@outlook.com for verified copies.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border/50">
      <span className="text-text-secondary">{label}</span>
      <span className="font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
}
