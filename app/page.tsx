import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import EyewearHighlights from "@/components/EyewearHighlights";
import MapSection from "@/components/MapSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <EyewearHighlights />
      <MapSection />
      <CTABanner />
    </>
  );
}
