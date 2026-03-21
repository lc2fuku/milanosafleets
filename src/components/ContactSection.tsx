import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch.");
      setForm({ name: "", email: "", mobile: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-alt">
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
             style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Get In Touch</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">Contact Us</h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-surface border border-border text-foreground text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-surface border border-border text-foreground text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-surface border border-border text-foreground text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message *"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-surface border border-border text-foreground text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.98] disabled:opacity-50 transition-all duration-200"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Person</h3>
              <p className="text-sm text-text-secondary">Luthando C Fuku</p>
            </div>

            <div className="space-y-3">
              <a href="tel:0816713007" className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> 081 671 3007
              </a>
              <a href="mailto:milano-sa@outlook.com" className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> milano-sa@outlook.com
              </a>
              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>10521 Tsotsobe Street, Kwazakhele,<br />Gqeberha, 6205</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <SocialLink href="https://www.facebook.com/share/1CLQuyMd4e/?mibextid=wwXIfr" icon={Facebook} />
                <SocialLink href="https://www.instagram.com/milanosa_" icon={Instagram} />
                <SocialLink href="https://www.youtube.com/@milanosa" icon={Youtube} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-md border border-border text-text-secondary hover:text-primary hover:border-primary/50 active:scale-[0.98] transition-all duration-200"
    >
      <Icon size={18} />
    </a>
  );
}
