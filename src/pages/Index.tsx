import MobileHeader from "@/components/MobileHeader";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import SuggestedSection from "@/components/SuggestedSection";
import BottomNavigation from "@/components/BottomNavigation";
import SideNavigation from "@/components/SideNavigation";

const Index = () => {
  return (
    <div className="mobile-container">
      <SideNavigation />
      <MobileHeader />
      <main className="pb-20 md:pb-8 md:ml-56">
        <HeroSection />
        <TrendingSection />
        <SuggestedSection />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
