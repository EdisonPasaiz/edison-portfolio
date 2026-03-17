import ScrollPlayhead from "@/components/ScrollPlayhead";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoShowcase from "@/components/VideoShowcase";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ScrollPlayhead />
      <HeroSection />
      <AboutSection />
      <VideoShowcase />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
};

export default Index;
