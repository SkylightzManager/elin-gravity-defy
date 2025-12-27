import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import Contact from "@/components/Contact";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <AppDownload />
      <Footer />
    </div>
  );
};

export default ContactUs;
