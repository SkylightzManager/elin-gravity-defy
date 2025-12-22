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
import Chatbot from "@/components/Chatbot";

const Index = () => {
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
      <Chatbot />
    </main>
  );
};

export default Index;
