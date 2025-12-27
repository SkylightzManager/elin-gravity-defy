import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Gift, Clock, CheckCircle, Rocket } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const TrialClasses = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const features = [
    { icon: Gift, title: "Special Pricing", description: "Try bungee fitness at a discounted rate" },
    { icon: Clock, title: "Full Session", description: "Experience a complete 45-minute class" },
    { icon: CheckCircle, title: "No Commitment", description: "No obligation to sign up after" },
    { icon: Rocket, title: "First-Timer Focus", description: "Extra attention for beginners" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trial <span className="text-primary">Classes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Curious about bungee fitness? Try before you commit! Our trial classes 
              give you the full Elin Dance Studio experience at a special introductory rate.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book Your Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
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

      {/* Details Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Your First Flight</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Your trial class includes everything you need to experience bungee fitness: 
                harness fitting, safety briefing, warm-up, main workout, and cool-down. 
                Our instructors will ensure you feel comfortable and supported throughout.
              </p>
              <p>
                We offer trial classes for all our programs - Bungee Workout, Bungee HiiT, 
                Bungee Oscillate, and more. Let us know which style interests you when you book!
              </p>
              <p>
                <strong>Duration:</strong> 45 minutes + 15 minutes for fitting/briefing
                <br />
                <strong>What to Bring:</strong> Comfortable workout clothes, water bottle
                <br />
                <strong>Limit:</strong> One trial class per person
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

export default TrialClasses;
