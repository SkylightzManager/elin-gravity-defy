import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FeaturedMedia from "@/components/FeaturedMedia";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <About />
        <FeaturedMedia />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
