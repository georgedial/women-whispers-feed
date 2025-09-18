import { Home, MessageCircle, Compass, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavigationProps {
  currentPage?: string;
}

const BottomNavigation = ({ currentPage }: BottomNavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { icon: Home, label: "Home", path: "/", key: "home" },
    { icon: MessageCircle, label: "Chat", path: "/chat", key: "chat" },
    { icon: Compass, label: "Discovery", path: "/discovery", key: "discovery" },
    { icon: Heart, label: "Care", path: "/care", key: "care" },
    { icon: User, label: "Profile", path: "/profile", key: "profile" }
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (currentPage) return currentPage === item.key;
    return location.pathname === item.path;
  };

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around py-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center py-4 px-4 ${
              isActive(item) ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;