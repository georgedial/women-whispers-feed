import { ArrowLeft, Plus, Search, Calendar, Edit3, FileText, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";

const NotesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const allNotes = [
    {
      id: 1,
      title: "Morning symptoms",
      content: "Mild headache, feeling tired. Started around 7 AM after waking up. Might be dehydration related.",
      date: "Today",
      time: "8:30 AM",
      category: "symptoms",
      tags: ["headache", "fatigue"]
    },
    {
      id: 2,
      title: "Exercise session",
      content: "30 min yoga, felt energized after. Did some breathing exercises and stretching. Heart rate felt good.",
      date: "Yesterday",
      time: "6:00 PM",
      category: "wellness",
      tags: ["exercise", "yoga", "energy"]
    },
    {
      id: 3,
      title: "Doctor appointment notes",
      content: "Discussed monthly cycle irregularities. Doctor recommended tracking for next 3 months. Blood work scheduled.",
      date: "3 days ago",
      time: "2:15 PM",
      category: "medical",
      tags: ["appointment", "cycle", "bloodwork"]
    },
    {
      id: 4,
      title: "Sleep pattern observation",
      content: "Been having trouble falling asleep lately. Takes about 45 minutes. Might try reducing screen time before bed.",
      date: "4 days ago",
      time: "11:30 PM",
      category: "sleep",
      tags: ["sleep", "insomnia", "screen-time"]
    },
    {
      id: 5,
      title: "Medication reminder",
      content: "Started new vitamin D supplement today. Take with breakfast. Monitor energy levels over next few weeks.",
      date: "1 week ago",
      time: "9:00 AM",
      category: "medication",
      tags: ["vitamins", "supplement", "energy"]
    },
    {
      id: 6,
      title: "Mood tracking",
      content: "Feeling much better today compared to yesterday. Weather is nice and spent time outdoors. Social activities helped.",
      date: "1 week ago",
      time: "4:20 PM",
      category: "mood",
      tags: ["mood", "outdoors", "social"]
    }
  ];

  const categories = [
    { key: "all", label: "All Notes", count: allNotes.length },
    { key: "symptoms", label: "Symptoms", count: allNotes.filter(n => n.category === "symptoms").length },
    { key: "medical", label: "Medical", count: allNotes.filter(n => n.category === "medical").length },
    { key: "wellness", label: "Wellness", count: allNotes.filter(n => n.category === "wellness").length },
    { key: "mood", label: "Mood", count: allNotes.filter(n => n.category === "mood").length }
  ];

  const filteredNotes = allNotes.filter(note => 
    searchQuery === "" || 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      symptoms: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      medical: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      wellness: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      sleep: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      medication: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      mood: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <div className="mobile-container flex flex-col h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 bg-background/80 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate('/care')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">All Notes</h1>
        </div>
        
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </header>

      {/* Search Bar */}
      <div className="p-4 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notes, tags, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/60 backdrop-blur-sm border-border/50"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pt-2">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-6">
            <div className="space-y-3">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="bg-background/60 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-foreground">{note.title}</h4>
                          <Badge variant="secondary" className={getCategoryColor(note.category)}>
                            {note.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{note.content}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{note.date}</span>
                          <span>•</span>
                          <span>{note.time}</span>
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

          <TabsContent value="recent" className="space-y-4 mt-6">
            <div className="space-y-3">
              {filteredNotes.slice(0, 4).map((note) => (
                <Card key={note.id} className="bg-background/60 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{note.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{note.content}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{note.date}</span>
                          <span>•</span>
                          <span>{note.time}</span>
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

          <TabsContent value="categories" className="space-y-4 mt-6">
            <div className="grid gap-3">
              {categories.filter(cat => cat.key !== "all").map((category) => (
                <Card key={category.key} className="bg-background/60 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(category.key).split(' ')[0]}`} />
                        <div>
                          <h4 className="font-semibold capitalize">{category.label}</h4>
                          <p className="text-sm text-muted-foreground">{category.count} notes</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Filter className="h-4 w-4" />
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

export default NotesPage;