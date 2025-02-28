
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Esim from "./pages/Esim";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import FaqPage from "./pages/FQA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import WhatsAppButton from "./components/WhatsAppButton";


const queryClient = new QueryClient();
const pageTitles: { [key: string]: string } = {
  "/": "Commbitz | Global eSim Solution for Travel Connectivity",
  "/about": "About Commbitz | Simplyfying Global Connectivity",
  "/blog": "Commbitz Blog | Insights on Global Connectivity and eSim",
  "/contact": "Contact Commbitz | Support for Global Traveller",
  "/esim": "Commbitz eSIM Services | Connect Anywhere, Anytime",
  "/login": "commbitz.com/login",
  "/signup": "commbitz.com/signup",
  "/faqs": "Commbitz FAQs | Answer to Your eSIM Questions",
  "/privacypolicy": "commbitz.com/privacypolicy",
  "/termsconditions": "commbitz.com/termsconditions",
  "/shippingpolicy": "commbitz.com/shippingpolicy",
  "/refundpolicy": "commbitz.com/refundpolicy",
};

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || "My Website";
  }, [location]);

  return null; // This component only updates the title
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <PageTitleUpdater />
      <WhatsAppButton/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/esim" element={<Esim />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/faqs" element={<FaqPage/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsconditions" element={<TermsandConditions/>} />
          <Route path="/shippingpolicy" element={<ShippingPolicy/>} />
          <Route path="/refundpolicy" element={<RefundPolicy/>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
