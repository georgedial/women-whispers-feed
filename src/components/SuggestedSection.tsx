import { MessageCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import healthWomanPhone from "@/assets/health-woman-phone.jpg";
import happyWomanSmiling from "@/assets/happy-woman-smiling.jpg";
import motherChild from "@/assets/mother-child.jpg";

const SuggestedSection = () => {
  const navigate = useNavigate();
  
  const suggestedArticles = [
    {
      id: "understanding-menstrual-cycle",
      title: "Understanding Your Menstrual Cycle",
      category: "Women's Health",
      readTime: "8 m",
      image: happyWomanSmiling
    },
    {
      id: "postpartum-depression",
      title: "Postpartum Depression: Signs and Support",
      category: "Mental Health",
      readTime: "12 m",
      image: healthWomanPhone
    },
    {
      id: "nutrition-during-pregnancy",
      title: "Nutrition During Pregnancy",
      category: "Pregnancy",
      readTime: "6 m",
      image: motherChild
    }
  ];

  return (
    <section className="px-4 py-3">
      <h3 className="text-2xl font-bold mb-4">Suggested</h3>
      
      <div className="space-y-4">
        {suggestedArticles.map((article, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/article/${article.id}`)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold text-lg leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {article.category}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div 
                      className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/chat?article=${encodeURIComponent(article.title)}`);
                      }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SuggestedSection;