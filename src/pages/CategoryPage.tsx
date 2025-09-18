import { ArrowLeft, Search, Clock, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const CategoryPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get category from URL params (in a real app, you'd use useParams)
  const categoryName = "Pregnancy"; // This would come from URL params
  
  const categoryArticles = [
    {
      id: 1,
      title: "First Trimester: What to Expect",
      readTime: "12 min",
      author: "Dr. Sarah Johnson",
      summary: "A comprehensive guide to the first three months of pregnancy, covering symptoms, nutrition, and important milestones.",
      featured: true
    },
    {
      id: 2,
      title: "Pregnancy Nutrition Guide",
      readTime: "8 min",
      author: "Nutritionist Mary Chen",
      summary: "Essential nutrients and foods to eat during pregnancy for optimal health.",
      featured: false
    },
    {
      id: 3,
      title: "Exercise During Pregnancy",
      readTime: "10 min",
      author: "Dr. Lisa Martinez",
      summary: "Safe exercises and activities to maintain fitness throughout pregnancy.",
      featured: false
    },
    {
      id: 4,
      title: "Common Pregnancy Symptoms",
      readTime: "6 min",
      author: "Dr. Emily Rodriguez",
      summary: "Understanding normal pregnancy symptoms and when to consult your doctor.",
      featured: false
    }
  ];

  const relatedTopics = [
    "Baby Development", "Morning Sickness", "Prenatal Vitamins", "Labor Preparation"
  ];

  return (
    <div className="mobile-container flex flex-col h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <Button variant="ghost" size="icon" onClick={() => navigate('/discovery')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">{categoryName}</h1>
        </div>
        
        <div className="w-10" />
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Category Info */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">
              🤰
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{categoryName}</h2>
              <p className="text-sm text-muted-foreground">24 articles available</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Everything you need to know about pregnancy, from conception to delivery.
          </p>
        </section>

        {/* Search within category */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${categoryName}...`}
            className="pl-10 rounded-full bg-background/60 backdrop-blur-sm border-border/50"
          />
        </div>

        {/* Related Topics */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {relatedTopics.map((topic, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-background/60 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {categoryArticles.filter(article => article.featured).map((article) => (
          <section key={article.id}>
            <h3 className="text-lg font-semibold mb-3">Featured Article</h3>
            <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-background/80 transition-all duration-200 cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{article.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{article.summary}</p>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <span>By {article.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-3" />
              </div>
            </div>
          </section>
        ))}

        {/* All Articles */}
        <section>
          <h3 className="text-lg font-semibold mb-3">All Articles</h3>
          <div className="space-y-3">
            {categoryArticles.filter(article => !article.featured).map((article) => (
              <div
                key={article.id}
                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-background/80 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{article.summary}</p>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>By {article.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extra bottom padding for navigation */}
        <div className="h-20" />
      </div>

      <BottomNavigation currentPage="discovery" />
    </div>
  );
};

export default CategoryPage;