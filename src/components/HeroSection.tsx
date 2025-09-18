import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold leading-tight">
          Your Health,
        </h2>
        <h2 className="text-4xl font-bold leading-tight gradient-text">
          Your Knowledge
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Welcome to Diane Health, empowering women with expert-backed health information, and guidance
        </p>
        
        <div className="relative mt-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder='Try searching for "depression"'
            className="pl-12 py-6 text-lg rounded-2xl border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;