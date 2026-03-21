export default function Footer() {
  const legalLinks = [
    { label: "Privacy Policy", href: "https://www.termsfeed.com/live/ae979cef-93e8-4041-8867-c00859e49ae5" },
    { label: "Return & Refund", href: "https://www.termsfeed.com/live/12f810de-a4e6-4cce-853c-7f6fff1b0e24" },
    { label: "Terms & Conditions", href: "https://www.termsfeed.com/live/e9216e35-16bc-4439-a06c-0a231a6e9637" },
    { label: "Disclaimer", href: "https://www.termsfeed.com/live/cc851723-d0c9-4ab7-a0ef-a2638ab0c182" },
  ];

  return (
    <footer className="border-t border-border bg-surface-alt py-12">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-foreground mb-2">
              MILANO<span className="text-primary">SA</span>
            </div>
            <p className="text-xs text-text-secondary">
              10521 Tsotsobe Street, Kwazakhele, Gqeberha, 6205
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Milano SA (Pty) Ltd. All rights reserved. Reg: 2025/667/578/07
          </p>
        </div>
      </div>
    </footer>
  );
}
