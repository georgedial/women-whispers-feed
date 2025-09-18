import { ArrowLeft, Plus, Calendar, TrendingUp, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const CarePage = () => {
  const navigate = useNavigate();
  const [isSymptomDialogOpen, setIsSymptomDialogOpen] = useState(false);
  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
  
  const [symptoms] = useState([
    {
      id: 1,
      name: "Menstrual Cycle",
      status: "Currently on day 12",
      progress: 40,
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 2,
      name: "Mood Tracking",
      status: "Currently feeling good",
      progress: 75,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      name: "Energy Levels",
      status: "Currently moderate",
      progress: 60,
      color: "from-green-400 to-green-600"
    }
  ]);

  const [notes] = useState([
    {
      id: 1,
      title: "Morning symptoms",
      content: "Mild headache, feeling tired",
      date: "Today",
      time: "8:30 AM"
    },
    {
      id: 2,
      title: "Exercise session",
      content: "30 min yoga, felt energized after",
      date: "Yesterday", 
      time: "6:00 PM"
    }
  ]);

  return (
    <div className="mobile-container flex flex-col h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 bg-background/80 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">Care</h1>
        </div>
        
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome to your care
          </h2>
          <p className="text-muted-foreground">
            A space to track all your symptoms, notes, and health information in one place.
          </p>
        </section>

        {/* Symptom Tracking */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Symptom tracking</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              <TrendingUp className="h-4 w-4 mr-1" />
              View all
            </Button>
          </div>
          
          <div className="space-y-4">
            {symptoms.map((symptom) => (
              <div
                key={symptom.id}
                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{symptom.name}</h4>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{symptom.status}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${symptom.color}`}
                    style={{ width: `${symptom.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent notes</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              <Calendar className="h-4 w-4 mr-1" />
              View all
            </Button>
          </div>
          
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4"
              >
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
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Quick actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Dialog open={isSymptomDialogOpen} onOpenChange={setIsSymptomDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="h-20 flex flex-col items-center justify-center space-y-2 rounded-2xl bg-background/60 backdrop-blur-sm border-border/50"
                >
                  <Plus className="h-6 w-6" />
                  <span className="text-sm">Add symptom</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-4 rounded-2xl w-[calc(100vw-2rem)] max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Symptom</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="symptom-name">Symptom Name</Label>
                    <Input id="symptom-name" placeholder="e.g., Headache, Fatigue" />
                  </div>
                  <div>
                    <Label htmlFor="severity">Severity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mild">Mild</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="symptom-notes">Notes (Optional)</Label>
                    <Textarea id="symptom-notes" placeholder="Any additional details..." />
                  </div>
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button className="w-full" onClick={() => setIsSymptomDialogOpen(false)}>
                      Add Symptom
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setIsSymptomDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isNoteDialogOpen} onOpenChange={setIsNoteDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="h-20 flex flex-col items-center justify-center space-y-2 rounded-2xl bg-background/60 backdrop-blur-sm border-border/50"
                >
                  <Edit3 className="h-6 w-6" />
                  <span className="text-sm">Add note</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-4 rounded-2xl w-[calc(100vw-2rem)] max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Note</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="note-title">Title</Label>
                    <Input id="note-title" placeholder="e.g., Morning routine, Doctor visit" />
                  </div>
                  <div>
                    <Label htmlFor="note-content">Note</Label>
                    <Textarea 
                      id="note-content" 
                      placeholder="Write your note here..." 
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button className="w-full" onClick={() => setIsNoteDialogOpen(false)}>
                      Save Note
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setIsNoteDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Extra bottom padding for navigation */}
        <div className="h-20" />
      </div>

      <BottomNavigation currentPage="care" />
    </div>
  );
};

export default CarePage;