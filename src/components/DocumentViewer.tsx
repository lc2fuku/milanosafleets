import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Shield, Eye, X, Presentation } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Document {
  name: string;
  file: string;
  type: "pdf" | "pptx";
  icon: "file" | "presentation";
  description: string;
}

const documents: Document[] = [
  {
    name: "Business Plan",
    file: "/documents/Business_Plan.pdf",
    type: "pdf",
    icon: "file",
    description: "Electric Scooter Fleet Funding Proposal",
  },
  {
    name: "Pitch Deck",
    file: "/documents/Solar_Fleet_Pitch_Deck.pptx",
    type: "pptx",
    icon: "presentation",
    description: "Solar Fleet Investment Presentation",
  },
  {
    name: "COR14.3 Company Registration",
    file: "/documents/COR14.3_Company_Registration.pdf",
    type: "pdf",
    icon: "file",
    description: "CIPC Registration Certificate",
  },
  {
    name: "B-BBEE Certificate",
    file: "/documents/BEE_Certificate.pdf",
    type: "pdf",
    icon: "file",
    description: "Broad-Based Black Economic Empowerment Level 1",
  },
  {
    name: "Tax Clearance Certificate",
    file: "/documents/Tax_Clearance_Certificate.pdf",
    type: "pdf",
    icon: "file",
    description: "SARS Tax Compliance Status",
  },
  {
    name: "Signed Lease Agreement",
    file: "/documents/Signed_Lease_Agreement.pdf",
    type: "pdf",
    icon: "file",
    description: "Business Premises Lease Contract",
  },
  {
    name: "FNB Account Confirmation",
    file: "/documents/FNB_Business_Account_Confirmation.pdf",
    type: "pdf",
    icon: "file",
    description: "Banking Details Verification Letter",
  },
];

export default function DocumentViewer() {
  const { ref, isVisible } = useScrollReveal();
  const [activeDoc, setActiveDoc] = useState<Document | null>(null);

  // Disable right-click on the viewer
  useEffect(() => {
    if (!activeDoc) return;
    const handler = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, [activeDoc]);

  const getViewerUrl = (doc: Document) => {
    if (doc.type === "pptx") {
      // Use Microsoft Office Online viewer for PPTX
      const fullUrl = `${window.location.origin}${doc.file}`;
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullUrl)}`;
    }
    // PDF with toolbar disabled
    return `${doc.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container-narrow" ref={ref}>
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield size={18} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Secure Viewer
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Compliance Documents
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg">
            Read-only access to verified company documents. Contact{" "}
            <a href="mailto:milano-sa@outlook.com" className="text-primary hover:underline">
              milano-sa@outlook.com
            </a>{" "}
            for certified copies.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, i) => (
            <button
              key={doc.name}
              onClick={() => setActiveDoc(doc)}
              className={`group text-left p-5 rounded-md border border-border bg-card transition-all duration-500 active:scale-[0.98] hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${150 + i * 80}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                {doc.icon === "presentation" ? (
                  <Presentation size={20} className="text-primary" />
                ) : (
                  <FileText size={20} className="text-primary" />
                )}
                <Eye
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">{doc.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{doc.description}</p>
              <span className="inline-block mt-3 text-[10px] font-medium tracking-wider uppercase text-primary/70 border border-primary/20 rounded px-2 py-0.5">
                {doc.type === "pptx" ? "PPTX" : "PDF"}
              </span>
            </button>
          ))}
        </div>

        {/* Document Viewer Dialog */}
        <Dialog open={!!activeDoc} onOpenChange={(open) => !open && setActiveDoc(null)}>
          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden bg-card border-border">
            <DialogHeader className="px-6 pt-5 pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                <DialogTitle className="text-base font-semibold text-foreground">
                  {activeDoc?.name}
                </DialogTitle>
              </div>
              <DialogDescription className="text-xs text-muted-foreground">
                Secure read-only viewer • No downloads permitted
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 h-full min-h-0" style={{ height: "calc(85vh - 80px)" }}>
              {activeDoc && (
                <iframe
                  src={getViewerUrl(activeDoc)}
                  className="w-full h-full border-0"
                  title={activeDoc.name}
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  style={{ pointerEvents: "auto", userSelect: "none" }}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
