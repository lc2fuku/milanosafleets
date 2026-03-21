import { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Business Plan", href: "#business-plan" },
  { label: "Financials", href: "#financials" },
  { label: "Business Info", href: "#business-info" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/1CLQuyMd4e/?mibextid=wwXIfr" },
  { icon: Instagram, href: "https://www.instagram.com/milanosa_" },
  { icon: Youtube, href: "https://www.youtube.com/@milanosa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-alt/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-foreground">
          MILANO<span className="text-primary">SA</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-all duration-200"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-text-secondary hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-alt border-t border-border">
          <div className="container-narrow py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
