import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import backgroundImage from "@/assets/diane-health-background.jpg";
import SignUpFlow from "@/components/SignUpFlow";

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  if (showSignUp) {
    return <SignUpFlow />;
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Back button */}
      <div className="relative z-10 p-4">
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Logo/Brand area - Top Middle */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center pt-20 pb-8">
        <div className="text-center mb-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Diane Health</h1>
          <p className="text-white/90 text-lg">Your wellness journey starts here</p>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-6 pb-12">
        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Button 
            size="lg" 
            className="w-full h-14 text-lg font-semibold bg-white text-black hover:bg-white/90 rounded-full"
          >
            Sign In
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full h-14 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black rounded-full bg-transparent"
            onClick={() => setShowSignUp(true)}
          >
            Create Account
          </Button>
        </div>

        {/* Terms and Conditions */}
        <div className="text-center text-white/80 text-sm leading-relaxed">
          <p className="mb-2">
            By continuing, you agree to our{" "}
            <button className="underline hover:text-white transition-colors">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="underline hover:text-white transition-colors">
              Privacy Policy
            </button>
          </p>
          <p className="text-xs text-white/60">
            We're committed to protecting your health data and privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;