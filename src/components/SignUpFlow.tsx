import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const HEALTH_TOPICS = [
  "Maternal Health",
  "Reproductive Health",
  "Mental Wellness",
  "Nutrition & Fitness",
  "Chronic Conditions",
  "Preventive Care",
  "Sexual Health",
  "Hormonal Health",
];

const SignUpFlow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    interests: [] as string[],
  });

  const totalSteps = 4;

  const updateField = (field: string, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleInterest = (topic: string) => {
    const interests = formData.interests.includes(topic)
      ? formData.interests.filter((i) => i !== topic)
      : [...formData.interests, topic];
    updateField("interests", interests);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.firstName.trim() !== "";
      case 1:
        return formData.email.trim() !== "" && formData.phone.trim() !== "";
      case 2:
        return formData.location.trim() !== "";
      case 3:
        return formData.interests.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Account created successfully!");
    navigate("/");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">What's your name?</h2>
            <div className="space-y-4">
              <Input
                placeholder="First name (required)"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              />
              <div>
                <Input
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Last name is optional and only shared with matches.{" "}
                  <button className="text-primary hover:underline">Why?</button>
                </p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              />
              <Input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Where are you located?</h2>
            <Input
              placeholder="City, State or Zip Code"
              value={formData.location}
              onChange={(e) => updateField("location", e.target.value)}
              className="text-base h-12 border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              What information and assistance are you looking for?
            </h2>
            <p className="text-muted-foreground text-sm">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {HEALTH_TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => toggleInterest(topic)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    formData.interests.includes(topic)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with progress */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          {currentStep > 0 && (
            <button onClick={handleBack} className="p-2 hover:bg-accent rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <div className="flex-1 flex items-center gap-1">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  idx <= currentStep ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-6">
        {renderStep()}
      </div>

      {/* Next Button */}
      <div className="p-6 pt-0">
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
          size="lg"
          className="w-full h-14 rounded-full text-base font-semibold"
        >
          {currentStep === totalSteps - 1 ? "Create Account" : "Next"}
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SignUpFlow;
