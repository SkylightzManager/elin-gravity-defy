import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClassCards from "@/components/ClassCards";
import CorporateTeamBuilding from "@/components/CorporateTeamBuilding";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import MilestoneJourney from "@/components/MilestoneJourney";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FeaturedMedia from "@/components/FeaturedMedia";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  useSeo({
    title: "Bungee Fitness Singapore | Elin Dance Studio - #1 Bungee Workout Near Alexandra",
    description: "Singapore's premier bungee fitness studio near Alexandra & Labrador Park MRT. Bungee workout classes for all ages 4-66. Low-impact, high-intensity training. Book your trial class today!",
    keywords: "bungee fitness singapore, bungee workout singapore, bungee fitness classes singapore, elin dance studio, bungee dance singapore, bungee exercise singapore, bungee class singapore, dance studio singapore, aerial fitness singapore, bungee yoga singapore, low impact workout singapore, fitness studio near alexandra",
    canonicalPath: "/",
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="classes">
        <ClassCards />
      </section>
      <section id="corporate">
        <CorporateTeamBuilding />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="why-choose">
        <WhyChoose showFullContent={false} />
      </section>
      <section id="milestone">
        <MilestoneJourney />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <FeaturedMedia />
      <Footer />
    </main>
  );
};

export default Index;
