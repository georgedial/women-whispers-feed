import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TrendingSection = () => {
  const navigate = useNavigate();
  
  const trendingTopics = [
    "Hormonal Balance",
    "Pregnancy Care",
    "Mental Wellness",
    "Nutrition",
    "Menopause Support",
    "Self Care"
  ];

  const handleTopicClick = (topic: string) => {
    navigate(`/trending/${encodeURIComponent(topic)}`);
  };

  return (
    <section className="px-4 py-3">
      <h3 className="text-2xl font-bold mb-4">Trending</h3>
      
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        <div className="flex gap-3 min-w-max">
          {trendingTopics.map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="trend-tag whitespace-nowrap"
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;