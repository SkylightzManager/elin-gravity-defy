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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/bungee-workout" element={<BungeeWorkout />} />
          <Route path="/bungee-hiit" element={<BungeeHIIT />} />
          <Route path="/bungee-oscillate" element={<BungeeOscillate />} />
          <Route path="/kids-bungee" element={<KidsBungee />} />
          <Route path="/family-bungee" element={<FamilyBungee />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/who2025" element={<WHO2025 />} />
          <Route path="/heart-of-society" element={<HeartOfSociety />} />
          <Route path="/kids-bungee-promo" element={<KidsBungeePromo />} />
          <Route path="/trial-class" element={<TrialClass />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/instructor-certification" element={<InstructorCertification />} />
          <Route path="/about-us" element={<AboutUs />} />
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
