import { ArrowLeft, Send, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ChatPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const articleContext = searchParams.get("article");
  
  const getInitialMessage = () => {
    if (articleContext) {
      return `Hi! I'm Dr. Diane, your AI health assistant. I see you're interested in discussing "${articleContext}". I'm here to help answer any questions you might have about this topic. What would you like to know?`;
    }
    return "Hi! I'm Dr. Diane, your AI health assistant. How can I help you today?";
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr.Diane",
      text: getInitialMessage(),
      time: "Now",
      isAI: true
    }
  ]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    if (!apiKey && showApiKeyInput) {
      toast.error("Please enter your Perplexity API key first");
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      sender: "You",
      text: message,
      time: "Now",
      isAI: false
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const contextualPrompt = articleContext 
        ? `You are Dr. Diane, a helpful AI health assistant discussing the article "${articleContext}". Please provide accurate, helpful health information while being empathetic and supportive. Always remind users to consult healthcare professionals for medical advice.`
        : `You are Dr. Diane, a helpful AI health assistant. Please provide accurate, helpful health information while being empathetic and supportive. Always remind users to consult healthcare professionals for medical advice.`;

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: contextualPrompt
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";

      const aiMessage = {
        id: messages.length + 2,
        sender: "Dr.Diane",
        text: aiResponse,
        time: "Now",
        isAI: true
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling AI:', error);
      toast.error("Sorry, I couldn't process your message. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiKeyInput(false);
      toast.success("API key saved! You can now chat with Dr. Diane.");
    } else {
      toast.error("Please enter a valid API key");
    }
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center p-4 pt-12 border-b border-border">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">
            {articleContext ? `Discussing: ${articleContext}` : "Chat with AI Dr.Diane"}
          </h1>
        </div>
        
        <div className="w-10" />
      </header>

      {/* API Key Input */}
      {showApiKeyInput && (
        <div className="p-4 border-b border-border">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Key className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Perplexity API Key Required</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  To chat with Dr. Diane, please enter your Perplexity API key. Get one at perplexity.ai
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Perplexity API key..."
                    className="flex-1"
                  />
                  <Button onClick={handleApiKeySubmit} size="sm">
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] rounded-3xl p-4 ${
              msg.isAI 
                ? 'bg-white border border-gray-100 shadow-sm' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {msg.isAI && (
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">👩🏻‍⚕️</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Dr.Diane</span>
                </div>
              )}
              <p className={`text-sm leading-relaxed ${msg.isAI ? 'text-gray-700' : ''} whitespace-pre-wrap`}>{msg.text}</p>
              <div className="flex justify-end mt-3">
                <span className={`text-xs ${msg.isAI ? 'text-gray-500' : 'text-primary-foreground/70'}`}>{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-3xl p-4 bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">👩🏻‍⚕️</span>
                </div>
                <span className="text-base font-semibold text-gray-900">Dr.Diane</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Notice */}
      <div className="px-4 py-2 text-center">
        <p className="text-xs text-muted-foreground">
          In a medical emergency, please call 911
        </p>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-center space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage}
            disabled={isLoading || (showApiKeyInput && !apiKey)}
            className="rounded-full"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <BottomNavigation currentPage="chat" />
    </div>
  );
};

export default ChatPage;