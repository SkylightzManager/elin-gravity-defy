import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import FeaturedMedia from "@/components/FeaturedMedia";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <About />
        <FeaturedMedia />
        <WhyChoose />
      </div>
      <AppDownload />
      <Footer />
    </div>
  );
};

export default AboutUs;
