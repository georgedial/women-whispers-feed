import { Home, MessageCircle, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: MessageCircle, label: "Chat", active: false },
    { icon: Heart, label: "Care", active: false },
    { icon: User, label: "Profile", active: false }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`flex flex-col items-center space-y-1 py-3 px-4 ${
              item.active ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;