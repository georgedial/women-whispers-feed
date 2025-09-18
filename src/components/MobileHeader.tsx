import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  title?: string;
}

const MobileHeader = ({ title = "Diane Health" }: MobileHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between responsive-padding pt-4 md:pt-6 lg:pt-8">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text">
        {title}
      </h1>
      
      <Button variant="ghost" size="icon" onClick={() => navigate('/search')}>
        <Search className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
    </header>
  );
};

export default MobileHeader;