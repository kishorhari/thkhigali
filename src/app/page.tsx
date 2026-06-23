import HeroSection from "@/components/sections/HeroSection";
import StatsBand from "@/components/sections/StatsBand";
import ChefLessSection from "@/components/sections/ChefLessSection";
import GallerySection from "@/components/sections/GallerySection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import SupportPillars from "@/components/sections/SupportPillars";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EnquiryForm from "@/components/sections/EnquiryForm";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <ChefLessSection />
      <GallerySection />
      <FranchiseSection />
      <SupportPillars />
      <TestimonialsSection />
      <EnquiryForm />
      <ContactSection />
    </>
  );
}
