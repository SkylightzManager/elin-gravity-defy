import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClassesOverview from "./pages/ClassesOverview";
import PromotionsOverview from "./pages/PromotionsOverview";
import BungeeWorkout from "./pages/BungeeWorkout";
import BungeeHiiT from "./pages/BungeeHiiT";
import BungeeOscillate from "./pages/BungeeOscillate";
import KidsBungee from "./pages/KidsBungee";
import FamilyBungee from "./pages/FamilyBungee";
import TrialClasses from "./pages/TrialClasses";
import WHO2025 from "./pages/WHO2025";
import Anniversary from "./pages/Anniversary";
import HeartOfSociety from "./pages/HeartOfSociety";
import CorporateTeambuilding from "./pages/CorporateTeambuilding";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Milestone from "./pages/Milestone";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<ClassesOverview />} />
          <Route path="/classes/bungee-workout" element={<BungeeWorkout />} />
          <Route path="/classes/bungee-hiit" element={<BungeeHiiT />} />
          <Route path="/classes/bungee-oscillate" element={<BungeeOscillate />} />
          <Route path="/classes/kids-bungee" element={<KidsBungee />} />
          <Route path="/classes/family-bungee" element={<FamilyBungee />} />
          <Route path="/classes/trial-classes" element={<TrialClasses />} />
          <Route path="/promotions" element={<PromotionsOverview />} />
          <Route path="/promotions/who2025" element={<WHO2025 />} />
          <Route path="/promotions/anniversary" element={<Anniversary />} />
          <Route path="/promotions/heart-of-society" element={<HeartOfSociety />} />
          <Route path="/corporate-teambuilding" element={<CorporateTeambuilding />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
