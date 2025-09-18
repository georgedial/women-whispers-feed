import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileHeaderProps {
  title?: string;
}

const MobileHeader = ({ title = "Diane Health" }: MobileHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between p-4 pt-12">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="py-6">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <nav className="space-y-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-lg h-12"
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-lg h-12"
                onClick={() => navigate('/discovery')}
              >
                Discovery
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-lg h-12"
                onClick={() => navigate('/care')}
              >
                Care
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-lg h-12"
                onClick={() => navigate('/chat')}
              >
                Chat
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-lg h-12"
                onClick={() => navigate('/profile')}
              >
                Profile
              </Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      
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