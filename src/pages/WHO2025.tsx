import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Calendar, Percent, Clock, CheckCircle } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const WHO2025 = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const highlights = [
    { icon: Percent, title: "Special Discount", description: "Exclusive rates for WHO2025" },
    { icon: Calendar, title: "Limited Time", description: "Promotion valid for 2025" },
    { icon: Clock, title: "Flexible Schedule", description: "Choose any class that suits you" },
    { icon: CheckCircle, title: "All Classes Included", description: "Valid for any bungee program" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">WHO</span>2025
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Celebrate wellness in 2025 with our special WHO promotion. Get exclusive 
              discounts on bungee fitness classes and start your health journey today.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Claim Your Discount
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Promotion Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Promotion Details</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The WHO2025 promotion is our way of supporting the World Health Organization's 
                mission to promote health and wellness globally. We're offering special rates 
                on all our bungee fitness programs throughout 2025.
              </p>
              <p>
                This promotion applies to all new and existing customers. Whether you're 
                trying bungee fitness for the first time or you're a regular, you can 
                take advantage of these special rates.
              </p>
              <p>
                Contact us or book online to learn more about the specific discounts 
                and how to apply them to your booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppDownload />
      <Footer />
    </div>
  );
};

export default WHO2025;
