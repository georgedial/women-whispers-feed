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
    <section className="responsive-padding py-3 md:py-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Suggested</h3>
      
      <div className="responsive-grid space-y-4 md:space-y-0">
        {suggestedArticles.map((article, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/article/${article.id}`)}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-4">
                <div className="w-20 h-20 md:w-full md:h-48 rounded-2xl overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-2 md:text-center">
                  <h4 className="font-semibold responsive-text leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {article.category}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground md:justify-center">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
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