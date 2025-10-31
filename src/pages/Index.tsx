import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
