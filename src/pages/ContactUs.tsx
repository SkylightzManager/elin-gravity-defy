import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useSeo } from "@/hooks/useSeo";

const ContactUs = () => {
  useSeo({
    title: "Contact Elin Dance Studio Singapore | Bungee Fitness Near Alexandra",
    description: "Contact Elin Dance Studio in Singapore. Located near Alexandra & Labrador Park MRT. Phone, email, and location details. Book your bungee fitness class today!",
    keywords: "contact elin dance studio singapore, bungee fitness studio contact, dance studio singapore contact, elin dance studio location, bungee workout near alexandra",
    canonicalPath: "/contact",
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
