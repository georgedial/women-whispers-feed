import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  title?: string;
}

const MobileHeader = ({ title = "Diane Health" }: MobileHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between p-4 pt-12">
      <Button variant="ghost" size="icon">
        <Menu className="h-8 w-8" />
      </Button>
      
      <h1 className="text-4xl font-bold gradient-text">
        {title}
      </h1>
      
      <Button variant="ghost" size="icon" onClick={() => navigate('/search')}>
        <Search className="h-8 w-8" />
      </Button>
    </header>
  );
};

export default MobileHeader;