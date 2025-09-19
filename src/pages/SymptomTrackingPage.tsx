import { ArrowLeft, Plus, TrendingUp, Calendar, Activity, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const SymptomTrackingPage = () => {
  const navigate = useNavigate();

  const symptoms = [
    {
      id: 1,
      name: "Menstrual Cycle",
      status: "Currently on day 12",
      progress: 40,
      color: "from-pink-400 to-pink-600",
      lastUpdated: "2 hours ago",
      frequency: "Daily tracking",
      trend: "improving"
    },
    {
      id: 2,
      name: "Mood Tracking",
      status: "Currently feeling good",
      progress: 75,
      color: "from-blue-400 to-blue-600",
      lastUpdated: "5 hours ago",
      frequency: "3x daily",
      trend: "stable"
    },
    {
      id: 3,
      name: "Energy Levels",
      status: "Currently moderate",
      progress: 60,
      color: "from-green-400 to-green-600",
      lastUpdated: "1 day ago",
      frequency: "Daily tracking",
      trend: "declining"
    },
    {
      id: 4,
      name: "Sleep Quality",
      status: "Good rest last night",
      progress: 85,
      color: "from-purple-400 to-purple-600",
      lastUpdated: "8 hours ago",
      frequency: "Daily tracking",
      trend: "improving"
    },
    {
      id: 5,
      name: "Headaches",
      status: "No headaches today",
      progress: 20,
      color: "from-orange-400 to-orange-600",
      lastUpdated: "3 days ago",
      frequency: "When occurs",
      trend: "improving"
    }
  ];

  const recentEntries = [
    {
      id: 1,
      symptom: "Mood Tracking",
      value: "Good",
      time: "2:30 PM",
      date: "Today",
      notes: "Feeling energetic after lunch"
    },
    {
      id: 2,
      symptom: "Energy Levels",
      value: "Moderate",
      time: "9:00 AM",
      date: "Today",
      notes: "Slow start to the morning"
    },
    {
      id: 3,
      symptom: "Sleep Quality",
      value: "8.5/10",
      time: "7:00 AM",
      date: "Today",
      notes: "Slept well, 7.5 hours"
    }
  ];

  return (
    <div className="mobile-container flex flex-col h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 bg-background/80 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate('/care')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">Symptom Tracking</h1>
        </div>
        
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-6">
            <div className="grid gap-4">
              {symptoms.map((symptom) => (
                <Card key={symptom.id} className="bg-background/60 backdrop-blur-sm border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{symptom.name}</CardTitle>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{symptom.status}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${symptom.color}`}
                        style={{ width: `${symptom.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Updated {symptom.lastUpdated}</span>
                      <span className={`flex items-center ${
                        symptom.trend === 'improving' ? 'text-green-500' : 
                        symptom.trend === 'declining' ? 'text-red-500' : 'text-blue-500'
                      }`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {symptom.trend}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4 mt-6">
            <Card className="bg-background/60 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Improving Trends</h4>
                    <p className="text-sm text-green-600 dark:text-green-300">Sleep Quality, Headaches</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Stable Trends</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-300">Mood Tracking</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Needs Attention</h4>
                    <p className="text-sm text-orange-600 dark:text-orange-300">Energy Levels</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4 mt-6">
            <div className="space-y-3">
              {recentEntries.map((entry) => (
                <Card key={entry.id} className="bg-background/60 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Activity className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-sm">{entry.symptom}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{entry.value}</p>
                        {entry.notes && (
                          <p className="text-xs text-muted-foreground mb-2">{entry.notes}</p>
                        )}
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{entry.date}</span>
                          <span>•</span>
                          <span>{entry.time}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Extra bottom padding for navigation */}
        <div className="h-20" />
      </div>

      <BottomNavigation currentPage="care" />
    </div>
  );
};

export default SymptomTrackingPage;