import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Classes from "./pages/Classes";
import BungeeWorkout from "./pages/BungeeWorkout";
import BungeeHIIT from "./pages/BungeeHIIT";
import BungeeOscillate from "./pages/BungeeOscillate";
import KidsBungee from "./pages/KidsBungee";
import FamilyBungee from "./pages/FamilyBungee";
import Promotions from "./pages/Promotions";
import WHO2025 from "./pages/WHO2025";
import HeartOfSociety from "./pages/HeartOfSociety";
import KidsBungeePromo from "./pages/KidsBungeePromo";
import TrialClass from "./pages/TrialClass";
import Anniversary from "./pages/Anniversary";
import InstructorCertification from "./pages/InstructorCertification";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Media from "./pages/Media";
import CorporateTeamBuilding from "./pages/CorporateTeamBuilding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Classes Routes */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/bungee-workout-singapore" element={<BungeeWorkout />} />
          <Route path="/classes/bungee-hiit-singapore" element={<BungeeHIIT />} />
          <Route path="/classes/bungee-oscillate-singapore" element={<BungeeOscillate />} />
          <Route path="/classes/kids-bungee-singapore" element={<KidsBungee />} />
          <Route path="/classes/family-bungee-singapore" element={<FamilyBungee />} />
          {/* Promotions Routes */}
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/promotions/who2025-bungee-fitness" element={<WHO2025 />} />
          <Route path="/promotions/heart-of-society" element={<HeartOfSociety />} />
          <Route path="/promotions/kids-bungee-promo" element={<KidsBungeePromo />} />
          <Route path="/promotions/bungee-trial-class-singapore" element={<TrialClass />} />
          <Route path="/promotions/anniversary-deals" element={<Anniversary />} />
          {/* Other Routes */}
          <Route path="/corporate-teambuilding-singapore" element={<CorporateTeamBuilding />} />
          <Route path="/bungee-instructor-certification-singapore" element={<InstructorCertification />} />
          <Route path="/about-elin-dance-studio" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/media" element={<Media />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
