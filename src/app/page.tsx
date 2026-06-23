import HeroSection from "@/components/sections/HeroSection";
import BusinessOverview from "@/components/sections/BusinessOverview";
import ChefLessSection from "@/components/sections/ChefLessSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import SupportPillars from "@/components/sections/SupportPillars";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EnquiryForm from "@/components/sections/EnquiryForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessOverview />
      <ChefLessSection />
      <FranchiseSection />
      <SupportPillars />
      <TestimonialsSection />
      <EnquiryForm />
    </>
  );
}
