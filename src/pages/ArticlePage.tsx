import { ArrowLeft, Clock, MessageCircle, Heart, Share } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BottomNavigation from "@/components/BottomNavigation";

const ArticlePage = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();

  // Mock article data - in a real app, this would come from an API
  const articles = {
    "understanding-menstrual-cycle": {
      title: "Understanding Your Menstrual Cycle",
      category: "Women's Health",
      readTime: "8 m",
      author: "Dr. Sarah Johnson",
      publishedDate: "March 15, 2024",
      image: "/api/placeholder/400/200",
      content: `
        <h2>What is a Menstrual Cycle?</h2>
        <p>Your menstrual cycle is a monthly series of changes your body goes through to prepare for the possibility of pregnancy. Each month, one of the ovaries releases an egg — a process called ovulation. At the same time, hormonal changes prepare the uterus for pregnancy.</p>
        
        <h3>The Four Phases</h3>
        <p>Understanding the four phases of your menstrual cycle can help you better track your health and plan your activities:</p>
        
        <h4>1. Menstrual Phase (Days 1-5)</h4>
        <p>This is when you have your period. The lining of your uterus (endometrium) sheds through your vagina. This phase typically lasts 3-7 days.</p>
        
        <h4>2. Follicular Phase (Days 1-13)</h4>
        <p>This phase overlaps with your period. Your pituitary gland releases follicle-stimulating hormone (FSH), which stimulates your ovaries to produce follicles.</p>
        
        <h4>3. Ovulation Phase (Around Day 14)</h4>
        <p>A mature egg is released from the ovary and moves into the fallopian tube. This is your most fertile time.</p>
        
        <h4>4. Luteal Phase (Days 15-28)</h4>
        <p>The egg travels down the fallopian tube. If pregnancy doesn't occur, hormone levels drop and the cycle begins again.</p>
        
        <h3>Tracking Your Cycle</h3>
        <p>Keeping track of your menstrual cycle can help you:</p>
        <ul>
          <li>Predict when your next period will start</li>
          <li>Identify your fertile window if you're trying to conceive</li>
          <li>Notice any irregularities that might need medical attention</li>
          <li>Plan important events around your cycle</li>
        </ul>
        
        <h3>When to See a Doctor</h3>
        <p>Contact your healthcare provider if you experience:</p>
        <ul>
          <li>Periods that suddenly stop for more than 90 days</li>
          <li>Periods that become erratic after being regular</li>
          <li>Bleeding for more than seven days</li>
          <li>Bleeding between periods</li>
          <li>Severe pain during your period</li>
        </ul>
        
        <p>Remember, every woman's cycle is different. What's normal for you might not be normal for someone else, and that's perfectly okay.</p>
      `
    },
    "postpartum-depression": {
      title: "Postpartum Depression: Signs and Support",
      category: "Mental Health",
      readTime: "12 m",
      author: "Dr. Emily Chen",
      publishedDate: "March 10, 2024",
      image: "/api/placeholder/400/200",
      content: `
        <h2>Understanding Postpartum Depression</h2>
        <p>Postpartum depression is a serious mood disorder that affects women after childbirth. It's much more than the "baby blues" that many new mothers experience.</p>
        
        <h3>Recognizing the Signs</h3>
        <p>Symptoms of postpartum depression may include:</p>
        <ul>
          <li>Persistent sadness or low mood</li>
          <li>Loss of interest in activities you once enjoyed</li>
          <li>Difficulty bonding with your baby</li>
          <li>Overwhelming fatigue or loss of energy</li>
          <li>Feelings of worthlessness or guilt</li>
          <li>Difficulty concentrating or making decisions</li>
        </ul>
        
        <h3>Getting Support</h3>
        <p>If you're experiencing these symptoms, know that you're not alone and help is available. Reach out to your healthcare provider, family, or friends for support.</p>
        
        <p>Treatment options include therapy, support groups, and in some cases, medication that's safe during breastfeeding.</p>
      `
    },
    "nutrition-during-pregnancy": {
      title: "Nutrition During Pregnancy",
      category: "Pregnancy",
      readTime: "6 m",
      author: "Nutritionist Lisa Park",
      publishedDate: "March 8, 2024",
      image: "/api/placeholder/400/200",
      content: `
        <h2>Eating for Two: Pregnancy Nutrition Basics</h2>
        <p>Good nutrition during pregnancy is crucial for both you and your developing baby. Here's what you need to know about eating well during this important time.</p>
        
        <h3>Key Nutrients</h3>
        <h4>Folic Acid</h4>
        <p>Essential for preventing birth defects. Take 400-800 mcg daily before and during pregnancy.</p>
        
        <h4>Iron</h4>
        <p>Prevents anemia and supports your baby's growth. Aim for 27 mg daily from sources like lean meat, beans, and fortified cereals.</p>
        
        <h4>Calcium</h4>
        <p>Builds strong bones and teeth. You need 1,000 mg daily from dairy products, leafy greens, and fortified foods.</p>
        
        <h3>Foods to Avoid</h3>
        <ul>
          <li>Raw or undercooked meats and eggs</li>
          <li>High-mercury fish</li>
          <li>Unpasteurized dairy products</li>
          <li>Alcohol</li>
          <li>Excessive caffeine</li>
        </ul>
      `
    }
  };

  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    return (
      <div className="mobile-container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Share className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <main className="pb-20">
        {/* Hero Image */}
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-xl"></div>
        </div>

        <div className="p-4">
          {/* Article Meta */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-3">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>By {article.author}</span>
              <span>{article.publishedDate}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} read</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>Chat about this</span>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.7',
            }}
          />

          <Separator className="my-8" />

          {/* Actions */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Save Article
            </Button>
            <Button className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat About This
            </Button>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default ArticlePage;