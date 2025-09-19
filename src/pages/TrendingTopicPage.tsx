import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";

const TrendingTopicPage = () => {
  const { topicName } = useParams();
  const navigate = useNavigate();

  // Sample articles data for the trending topic
  const articles = [
    {
      id: 1,
      title: `Understanding ${topicName}: A Complete Guide`,
      category: topicName,
      readTime: "8 min read",
      image: "/src/assets/women-laughing.jpg",
      featured: true
    },
    {
      id: 2,
      title: `5 Essential Tips for ${topicName}`,
      category: topicName,
      readTime: "5 min read",
      image: "/src/assets/happy-woman-smiling.jpg",
      featured: true
    },
    {
      id: 3,
      title: `Common Myths About ${topicName} Debunked`,
      category: topicName,
      readTime: "6 min read",
      image: "/src/assets/health-woman-phone.jpg",
      featured: false
    },
    {
      id: 4,
      title: `Latest Research on ${topicName}`,
      category: topicName,
      readTime: "10 min read",
      image: "/src/assets/mother-child.jpg",
      featured: false
    },
    {
      id: 5,
      title: `Personal Stories: Living with ${topicName}`,
      category: topicName,
      readTime: "7 min read",
      image: "/src/assets/women-laughing.jpg",
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const allArticles = articles.filter(article => !article.featured);

  const relatedTopics = [
    "Wellness Tips",
    "Expert Advice", 
    "Research Updates",
    "Community Stories",
    "Treatment Options"
  ];

  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b bg-background">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">{topicName}</h1>
            <p className="text-sm text-muted-foreground">{articles.length} articles</p>
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={`Search in ${topicName}...`}
              className="pl-10"
            />
          </div>
        </div>

        {/* Related Topics */}
        <section className="px-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-2 min-w-max">
              {relatedTopics.map((topic, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="px-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Featured Articles</h3>
          <div className="space-y-3">
            {featuredArticles.map((article) => (
              <Card 
                key={article.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <CardContent className="p-0">
                  <div className="flex gap-3 p-3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section className="px-4">
          <h3 className="text-lg font-semibold mb-4">All Articles</h3>
          <div className="space-y-3">
            {allArticles.map((article) => (
              <Card 
                key={article.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <CardContent className="p-0">
                  <div className="flex gap-3 p-3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default TrendingTopicPage;