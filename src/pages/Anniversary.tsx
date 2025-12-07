import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { PartyPopper, Gift, Star, Users } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const Anniversary = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const highlights = [
    { icon: PartyPopper, title: "Celebration Discounts", description: "Special anniversary pricing" },
    { icon: Gift, title: "Bonus Classes", description: "Get extra sessions with packages" },
    { icon: Star, title: "VIP Perks", description: "Exclusive benefits for members" },
    { icon: Users, title: "Bring a Friend", description: "Special buddy rates available" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Anniversary</span> Celebration
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're celebrating another amazing year of flying high! Join us in our 
              anniversary celebration with exclusive offers and special events.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Join the Celebration
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Anniversary Specials</h2>
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
            <h2 className="text-3xl font-bold text-center mb-8">Thank You for Flying With Us</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                It's been an incredible journey, and we couldn't have done it without our 
                amazing community of bungee fitness enthusiasts. To show our appreciation, 
                we're offering special anniversary deals throughout the celebration period.
              </p>
              <p>
                From discounted class packages to exclusive member events, there's something 
                for everyone. New to our studio? It's the perfect time to join!
              </p>
              <p>
                Don't miss out on these limited-time offers. Book now or contact us for 
                more details about our anniversary specials.
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

export default Anniversary;
