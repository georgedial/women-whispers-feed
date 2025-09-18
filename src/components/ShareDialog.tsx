import { useState } from "react";
import { Copy, Mail, MessageCircle, Link, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    category: string;
    author: string;
  };
  articleUrl: string;
}

const ShareDialog = ({ isOpen, onClose, article, articleUrl }: ShareDialogProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(`Hi! I thought you might find this article interesting: "${article.title}"`);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your friend's email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate email sending (in a real app, you'd integrate with an email service)
    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent(`Check out this article: ${article.title}`);
      const body = encodeURIComponent(`${message}\n\nRead it here: ${articleUrl}\n\nShared from Diane Health`);
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the article details.",
      });
      
      // Reset form
      setEmail("");
      setMessage(`Hi! I thought you might find this article interesting: "${article.title}"`);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try copying the link instead.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`${message}\n\nRead it here: ${articleUrl}`);
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialShare = (platform: string) => {
    const text = encodeURIComponent(`Check out this article: ${article.title}`);
    const url = encodeURIComponent(articleUrl);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Article</DialogTitle>
          <DialogDescription>
            Share "{article.title}" with your friends
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleCopyLink}
              className="flex items-center gap-2"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Link"}
            </Button>
            <Button
              variant="outline"
              onClick={handleWhatsAppShare}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          <Separator />

          {/* Email Form */}
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Friend's Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="friend@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Personal Message</Label>
              <Textarea
                id="message"
                placeholder="Add a personal note..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              {isLoading ? "Opening email..." : "Send via Email"}
            </Button>
          </form>

          <Separator />

          {/* Social Media */}
          <div className="space-y-3">
            <Label>Share on Social Media</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare('twitter')}
                className="text-xs"
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare('facebook')}
                className="text-xs"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare('linkedin')}
                className="text-xs"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Article Preview */}
          <div className="bg-accent/50 p-3 rounded-lg">
            <div className="text-sm">
              <p className="font-medium">{article.title}</p>
              <p className="text-muted-foreground text-xs">
                {article.category} • By {article.author}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;