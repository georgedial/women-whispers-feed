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
    <section className="responsive-padding py-3 md:py-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Trending</h3>
      
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-4">
        <div className="flex gap-3 min-w-max md:flex-wrap md:min-w-0">
          {trendingTopics.map((topic, index) => (
            <span key={index} className="trend-tag whitespace-nowrap md:whitespace-normal">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;