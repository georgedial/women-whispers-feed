import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import SideNavigation from "@/components/SideNavigation";

const ChatPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr.Diane",
      text: "Hi Alex, I just wanted to check in on you and see how the home...",
      time: "Apr 10",
      isAI: true
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        text: message,
        time: "Now",
        isAI: false
      }]);
      setMessage("");
    }
  };

  const startConversation = () => {
    setMessages([...messages, {
      id: messages.length + 1,
      sender: "You",
      text: "Hello Dr. Diane, I'd like to start a conversation",
      time: "Now",
      isAI: false
    }]);
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      <SideNavigation currentPage="chat" />
      {/* Header */}
      <header className="flex items-center responsive-padding pt-4 md:pt-6 border-b border-border md:ml-56">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="md:hidden">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex-1 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Chat with AI Dr.Diane</h1>
        </div>
        
        <div className="w-10" />
      </header>

      {/* Chat Messages */}
      <div className="flex-1 responsive-padding space-y-4 overflow-y-auto md:ml-56">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] md:max-w-[70%] lg:max-w-[60%] rounded-3xl p-3 md:p-4 ${
              msg.isAI 
                ? 'bg-white border border-gray-100 shadow-sm' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {msg.isAI && (
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">👩🏻‍⚕️</span>
                  </div>
                  <span className="responsive-text font-semibold text-gray-900">Dr.Diane</span>
                </div>
              )}
              <p className={`responsive-text leading-relaxed ${msg.isAI ? 'text-gray-700' : ''}`}>{msg.text}</p>
              <div className="flex justify-end mt-3">
                <span className={`text-xs ${msg.isAI ? 'text-gray-500' : 'text-primary-foreground/70'}`}>{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Start Conversation Button */}
        {messages.length === 1 && (
          <div className="flex justify-center pt-8">
            <Button 
              onClick={startConversation}
              className="rounded-full px-6 py-4 md:px-8 md:py-6 responsive-text font-medium bg-foreground text-background hover:bg-foreground/90"
            >
              Start a conversation
            </Button>
          </div>
        )}
      </div>

      {/* Emergency Notice */}
      <div className="responsive-padding py-2 text-center md:ml-56">
        <p className="text-xs text-muted-foreground">
          In a medical emergency, please call 911
        </p>
      </div>

      {/* Message Input */}
      <div className="responsive-padding border-t border-border bg-background md:ml-56">
        <div className="flex items-center space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full responsive-text"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage}
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