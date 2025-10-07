import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SignInFlowProps {
  onBack: () => void;
}

const SignInFlow = ({ onBack }: SignInFlowProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsLoading(true);
    
    // Simulate sign in - replace with actual auth logic
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Welcome back!");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-4">
        <button onClick={onBack} className="p-2 hover:bg-accent rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-20">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground text-lg">
              Sign in to continue your wellness journey
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  autoComplete="email"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  autoComplete="current-password"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-primary hover:underline"
                onClick={() => toast.info("Password reset coming soon")}
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 rounded-full text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={onBack}
              className="text-primary font-semibold hover:underline"
            >
              Create one
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFlow;
