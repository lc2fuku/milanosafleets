import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import AboutSection from "@/components/AboutSection";
import BusinessPlanSection from "@/components/BusinessPlanSection";
import SolarStationSection from "@/components/SolarStationSection";
import VideoDemoSection from "@/components/VideoDemoSection";
import FinancialsSection from "@/components/FinancialsSection";
import FundingAskSection from "@/components/FundingAskSection";
import BusinessInfoSection from "@/components/BusinessInfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShopSection />
      <AboutSection />
      <BusinessPlanSection />
      <SolarStationSection />
      <VideoDemoSection />
      <FinancialsSection />
      <FundingAskSection />
      <BusinessInfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
