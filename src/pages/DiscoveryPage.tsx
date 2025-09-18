import { ArrowLeft, Search, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const DiscoveryPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName.toLowerCase().replace(' ', '-')}`);
  };
  
  const trendingTopics = [
    "Pregnancy", "Menopause", "PCOS", "Mental Health", "Nutrition", "Fitness"
  ];

  const suggestedArticles = [
    {
      id: 1,
      title: "Understanding PCOS: A Complete Guide",
      category: "Women's Health",
      readTime: "8 min",
      image: "🩺"
    },
    {
      id: 2,
      title: "Pregnancy Nutrition Essentials",
      category: "Pregnancy",
      readTime: "12 min",
      image: "🤰"
    },
    {
      id: 3,
      title: "Managing Menopause Naturally",
      category: "Menopause",
      readTime: "10 min",
      image: "🌸"
    }
  ];

  const categories = [
    { name: "Pregnancy", icon: "🤰", count: "24 articles" },
    { name: "Mental Health", icon: "🧠", count: "18 articles" },
    { name: "Nutrition", icon: "🥗", count: "32 articles" },
    { name: "Fitness", icon: "💪", count: "21 articles" },
    { name: "Reproductive Health", icon: "🩺", count: "15 articles" },
    { name: "Menopause", icon: "🌸", count: "12 articles" }
  ];

  return (
    <div className="mobile-container flex flex-col h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">Discovery</h1>
        </div>
        
        <div className="w-10" />
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search health topics..."
            className="pl-10 rounded-full bg-background/60 backdrop-blur-sm border-border/50"
          />
        </div>

        {/* Trending */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Trending</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic, index) => (
              <div
                key={index}
                className="trend-tag bg-background/60 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-all duration-200 cursor-pointer"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Articles */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Suggested for You</h2>
          <div className="space-y-3">
            {suggestedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-background/80 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-xl">
                    {article.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{article.title}</h3>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{article.category}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-background/80 transition-all duration-200 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </div>
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

export default DiscoveryPage;