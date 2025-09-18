import { Home, MessageCircle, Compass, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface SideNavigationProps {
  currentPage?: string;
}

const SideNavigation = ({ currentPage }: SideNavigationProps) => {
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
    <nav className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <Card className="p-2">
        <div className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={isActive(item) ? "default" : "ghost"}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-start gap-3 w-48 px-4 py-3"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </Card>
    </nav>
  );
};

export default SideNavigation;