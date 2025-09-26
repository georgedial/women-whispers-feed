import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatPage from "./pages/ChatPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import CarePage from "./pages/CarePage";
import SymptomTrackingPage from "./pages/SymptomTrackingPage";
import NotesPage from "./pages/NotesPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import SearchPage from "./pages/SearchPage";
import TrendingTopicPage from "./pages/TrendingTopicPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="/care/symptoms" element={<SymptomTrackingPage />} />
          <Route path="/care/notes" element={<NotesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/trending/:topicName" element={<TrendingTopicPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
