import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import MilestoneJourney from "@/components/MilestoneJourney";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="classes">
        <Classes />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="why-choose">
        <WhyChoose />
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
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;
