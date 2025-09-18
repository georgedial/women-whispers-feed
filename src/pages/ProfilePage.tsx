import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, Moon, Globe, Heart, Settings, Edit, ChevronRight, User, Mail, Phone, MapPin } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import MobileHeader from "@/components/MobileHeader";
import SideNavigation from "@/components/SideNavigation";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background mobile-container">
      <SideNavigation currentPage="profile" />
      <MobileHeader title="Profile" />
      
      <main className="flex-1 responsive-padding pb-24 md:pb-8 space-y-6 md:ml-56">
        {/* User Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">Sarah Johnson</h2>
                <p className="text-muted-foreground">Member since March 2024</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    <Heart className="h-3 w-3 mr-1" />
                    Health Enthusiast
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">sarah.johnson@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </CardContent>
        </Card>

        {/* Health Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Health Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="responsive-grid">
              <div className="text-center p-4 md:p-6 bg-muted/50 rounded-lg">
                <div className="text-xl md:text-2xl font-semibold text-primary">24</div>
                <p className="text-xs md:text-sm text-muted-foreground">Articles Read</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-muted/50 rounded-lg">
                <div className="text-xl md:text-2xl font-semibold text-primary">12</div>
                <p className="text-xs md:text-sm text-muted-foreground">Chat Sessions</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-muted/50 rounded-lg">
                <div className="text-xl md:text-2xl font-semibold text-primary">8</div>
                <p className="text-xs md:text-sm text-muted-foreground">Care Plans</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-muted/50 rounded-lg">
                <div className="text-xl md:text-2xl font-semibold text-primary">95%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Goal Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Push Notifications</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Dark Mode</span>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Privacy Mode</span>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">English</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Button>
            
            <Separator />
            
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center space-x-3">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Advanced Settings</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Button>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full">
            Edit Profile
          </Button>
          <Button variant="ghost" className="w-full text-destructive hover:text-destructive">
            Sign Out
          </Button>
        </div>
      </main>

      <BottomNavigation currentPage="profile" />
    </div>
  );
};

export default ProfilePage;