import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessPlanSection from "@/components/BusinessPlanSection";
import FinancialsSection from "@/components/FinancialsSection";
import BusinessInfoSection from "@/components/BusinessInfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BusinessPlanSection />
      <FinancialsSection />
      <BusinessInfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
