import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessPlanSection from "@/components/BusinessPlanSection";
import ScooterShowcase from "@/components/ScooterShowcase";
import SolarStationSection from "@/components/SolarStationSection";
import VideoDemoSection from "@/components/VideoDemoSection";
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
      <ScooterShowcase />
      <SolarStationSection />
      <VideoDemoSection />
      <FinancialsSection />
      <BusinessInfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
