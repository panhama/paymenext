import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import Feature from "@/components/ui/Feature";
import HowItWorksSection from "@/components/ui/HowItWorks";
import DashboardPreview from "@/components/ui/DashboardPreview";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import PricingPreview from "@/components/ui/PricingPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
        <HeroSection  />
        <Feature/>
        <HowItWorksSection/>
        <DashboardPreview/>
        <TestimonialsSection/>
        <PricingPreview/>
    </div>  );
}
