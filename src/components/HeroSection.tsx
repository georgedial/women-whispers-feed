import { Search, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchResults = [
    {
      id: "postpartum-depression",
      title: "Postpartum Depression: Signs & Support",
      category: "Mental Health", 
      readTime: "12 min",
      trending: true
    },
    {
      id: "understanding-menstrual-cycle",
      title: "Understanding Your Menstrual Cycle",
      category: "Women's Health",
      readTime: "8 min",
      trending: true
    },
    {
      id: "nutrition-during-pregnancy",
      title: "Nutrition During Pregnancy",
      category: "Pregnancy",
      readTime: "6 min",
      trending: false
    }
  ];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setShowResults(value.length > 0);
  };

  const handleResultClick = (result: any) => {
    setShowResults(false);
    setSearchQuery("");
    navigate(`/article/${result.id}`);
  };

  return (
    <section className="px-4 py-8 relative">
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-5xl font-bold leading-tight">
            Your Health,
          </h2>
          <h2 className="text-5xl font-bold leading-tight gradient-text">
            Your Knowledge
          </h2>
        </div>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Welcome to Diane Health, empowering women with expert-backed health information, and guidance.
        </p>
        
        <div className="relative mt-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
          <Input 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder='Try searching for "depression"'
            className="pl-12 py-6 text-lg rounded-2xl border-border"
          />
          
          {/* Search Results Dropdown */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg z-20 max-h-80 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm text-muted-foreground">Search Results</h3>
                  <span className="text-xs text-muted-foreground">{searchResults.length} results</span>
                </div>
                
                <div className="space-y-3">
                  {searchResults
                    .filter(result => 
                      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      result.category.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((result) => (
                    <div
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg">
                        🧠
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm mb-1">{result.title}</h4>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <span>{result.category}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{result.readTime}</span>
                          </div>
                          {result.trending && (
                            <div className="flex items-center space-x-1 text-primary">
                              <TrendingUp className="h-3 w-3" />
                              <span>Trending</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {searchResults.filter(result => 
                  result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  result.category.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try searching for mental health, pregnancy, or PCOS</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;