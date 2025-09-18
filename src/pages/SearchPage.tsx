import { ArrowLeft, Search, Clock, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavigation from "@/components/SideNavigation";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
    "menstrual cycle",
    "pregnancy symptoms", 
    "birth control",
    "mental health",
    "nutrition"
  ]);
  
  const [trendingTopics] = useState([
    "Women's Health",
    "Pregnancy",
    "Mental Wellness",
    "Nutrition Tips",
    "Exercise",
    "Sleep Health"
  ]);

  const [searchResults] = useState([
    {
      id: 1,
      title: "Understanding Your Menstrual Cycle",
      type: "Article",
      description: "A comprehensive guide to tracking and understanding your monthly cycle.",
      category: "Women's Health"
    },
    {
      id: 2,
      title: "Early Pregnancy Symptoms",
      type: "Article", 
      description: "Learn about the first signs of pregnancy and when to take a test.",
      category: "Pregnancy"
    },
    {
      id: 3,
      title: "Mental Health Chat",
      type: "Chat",
      description: "Talk to Dr. Diane about anxiety and stress management.",
      category: "Mental Health"
    }
  ]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Here you would typically perform the actual search
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background mobile-container">
      <SideNavigation />
      {/* Header */}
      <header className="flex items-center responsive-padding pt-4 md:pt-6 lg:pt-8 bg-background border-b md:ml-56">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="md:hidden">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 mx-4 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              placeholder="Search health topics, articles..."
              className="pl-10 pr-10 rounded-full"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="responsive-padding space-y-6 md:ml-56">
        {!searchQuery ? (
          <>
            {/* Recent Searches */}
            <section>
              <div className="flex items-center mb-3 md:mb-6">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Recent</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-muted"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Trending Topics */}
            <section>
              <div className="flex items-center mb-3 md:mb-6">
                <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Trending</h2>
              </div>
              <div className="responsive-grid">
                {trendingTopics.map((topic, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 md:p-6 text-center">
                      <p className="responsive-text font-medium">{topic}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Search Suggestions */}
            <section>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Popular searches</h2>
              <div className="space-y-2">
                {["Birth control options", "Prenatal vitamins", "Exercise during pregnancy", "Postpartum depression"].map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => handleSearch(suggestion)}
                  >
                    <Search className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>{suggestion}</span>
                  </Button>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Search Results */
          <section>
            <h2 className="text-lg font-semibold mb-4">
              Results for "{searchQuery}"
            </h2>
            <div className="space-y-4">
              {searchResults
                .filter(result => 
                  result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  result.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((result) => (
                  <Card key={result.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {result.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{result.title}</h3>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default SearchPage;