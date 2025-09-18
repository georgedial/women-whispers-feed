import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 pt-12">
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
      </Button>
      
      <h1 className="text-xl font-bold gradient-text">
        Diane Health
      </h1>
      
      <Button variant="ghost" size="icon">
        <Search className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default MobileHeader;