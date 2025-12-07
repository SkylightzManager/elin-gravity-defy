import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Users, Heart, Home, Sparkles } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const FamilyBungee = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const features = [
    { icon: Users, title: "All Ages Welcome", description: "From kids to grandparents (4-66)" },
    { icon: Heart, title: "Quality Bonding", description: "Share laughter and achievements" },
    { icon: Home, title: "Private Sessions", description: "Exclusive family-only classes available" },
    { icon: Sparkles, title: "Special Packages", description: "Family rates and bundles" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Family <span className="text-primary">Bungee</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Bond together while flying together. Singapore's premier family fitness 
              experience for ages 4-66. Create unforgettable memories with your loved ones.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book Family Session
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Families That Fly Together, Stay Together</h2>
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
            <h2 className="text-3xl font-bold text-center mb-8">Create Lasting Memories</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our Family Bungee sessions are designed to bring families together through 
                the shared experience of bungee fitness. Whether you're celebrating a special 
                occasion or just looking for quality time together, this is the perfect activity.
              </p>
              <p>
                Our instructors are experienced in working with multi-generational groups, 
                ensuring everyone gets a workout suited to their fitness level while having 
                fun together.
              </p>
              <p>
                <strong>Age Range:</strong> 4 to 66 years
                <br />
                <strong>Session Duration:</strong> 60 minutes
                <br />
                <strong>Recommended:</strong> 3-8 family members per session
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

export default FamilyBungee;
