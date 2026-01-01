import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FeaturedMedia from "@/components/FeaturedMedia";
import { useSeo } from "@/hooks/useSeo";

const AboutUs = () => {
  useSeo({
    title: "About Elin Dance Studio Singapore | Singapore's Premier Bungee Fitness Studio",
    description: "Learn about Elin Dance Studio, Singapore's #1 bungee fitness studio near Alexandra. Expert instructors, certified training, premium equipment. Building community through fitness since 2022.",
    keywords: "elin dance studio singapore, about elin dance studio, bungee fitness studio singapore, dance studio singapore, fitness studio near alexandra, bungee workout instructors singapore",
    canonicalPath: "/about",
  });
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
