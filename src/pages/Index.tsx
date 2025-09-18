import MobileHeader from "@/components/MobileHeader";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import SuggestedSection from "@/components/SuggestedSection";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="mobile-container">
      <MobileHeader />
      <main className="pb-20">
        <HeroSection />
        <TrendingSection />
        <SuggestedSection />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
