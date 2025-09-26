import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, Moon, Globe, Heart, Settings, Edit, ChevronRight, User, Mail, Phone, MapPin } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import MobileHeader from "@/components/MobileHeader";
import EditProfileDialog from "@/components/EditProfileDialog";
import sarahProfileImage from "@/assets/sarah-profile-distorted.png";

const ProfilePage = () => {
  return (
    <div className="mobile-container">
      <MobileHeader title="Profile" />
      
      <main className="p-4 pb-24 space-y-6">
        {/* User Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20 relative overflow-hidden">
                <AvatarImage 
                  src={sarahProfileImage} 
                  alt="Sarah Johnson profile picture" 
                  className="object-cover transform hover:scale-110 transition-transform duration-300 filter brightness-105 contrast-110 saturate-110 hue-rotate-3 hover:hue-rotate-6"
                />
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
              <EditProfileDialog>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </EditProfileDialog>
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
            <CardTitle className="text-lg">Health Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-semibold text-primary">24</div>
                <p className="text-xs text-muted-foreground">Articles Read</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-semibold text-primary">12</div>
                <p className="text-xs text-muted-foreground">Chat Sessions</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-semibold text-primary">8</div>
                <p className="text-xs text-muted-foreground">Care Plans</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-semibold text-primary">95%</div>
                <p className="text-xs text-muted-foreground">Goal Progress</p>
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
          <EditProfileDialog>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </EditProfileDialog>
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