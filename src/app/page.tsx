import HeroSection from "@/components/sections/HeroSection";
import FeaturedMenu from "@/components/sections/FeaturedMenu";
import AboutSection from "@/components/sections/AboutSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <FranchiseSection />
      <ContactSection />
    </>
  );
}
