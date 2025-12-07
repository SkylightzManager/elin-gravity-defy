import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Smile, Shield, Star, PartyPopper } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const KidsBungee = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const features = [
    { icon: Smile, title: "Fun First", description: "Exercise disguised as playtime" },
    { icon: Shield, title: "Safe Environment", description: "Certified instructors and safety equipment" },
    { icon: Star, title: "Confidence Building", description: "Develop motor skills and self-esteem" },
    { icon: PartyPopper, title: "Party Options", description: "Perfect for birthday celebrations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kids <span className="text-primary">Bungee</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let your children experience the joy of flying! Our Kids Bungee program 
              is designed specifically for children ages 4-12, combining fun, fitness, 
              and skill development.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book a Kids Session
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Kids Love It</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Program Details</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our Kids Bungee program is specially designed with children's development 
                in mind. Each 45-minute session includes games, challenges, and activities 
                that help children develop coordination, strength, and confidence.
              </p>
              <p>
                All equipment is sized appropriately for children, and our instructors are 
                trained in child safety and engagement. Parents are welcome to watch from 
                our viewing area.
              </p>
              <p>
                <strong>Age Groups:</strong> 4-7 years and 8-12 years
                <br />
                <strong>Session Duration:</strong> 45 minutes
                <br />
                <strong>Minimum Participants:</strong> 4 kids per session
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

export default KidsBungee;
