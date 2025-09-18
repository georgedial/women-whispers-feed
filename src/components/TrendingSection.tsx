const TrendingSection = () => {
  const trendingTopics = [
    "Hormonal Balance",
    "Pregnancy Care",
    "Mental Wellness",
    "Nutrition",
    "Menopause Support",
    "Self Care"
  ];

  return (
    <section className="px-4 py-6">
      <h3 className="text-2xl font-bold mb-4">Trending</h3>
      
      <div className="flex flex-wrap gap-3">
        {trendingTopics.map((topic, index) => (
          <span key={index} className="trend-tag">
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;