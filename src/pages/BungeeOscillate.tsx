import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Waves, Brain, Sparkles, Music } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const BungeeOscillate = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const features = [
    { icon: Waves, title: "Rhythmic Movement", description: "Flow with the music in continuous motion" },
    { icon: Brain, title: "Mind-Body Connection", description: "Focus on breath and movement synchronization" },
    { icon: Sparkles, title: "Core Activation", description: "Constant oscillation engages your core" },
    { icon: Music, title: "Music-Driven", description: "Move to specially curated playlists" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bungee <span className="text-primary">Oscillate</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A unique fusion of dance, fitness, and bungee movement. Experience the joy of 
              flowing through space while building strength and improving coordination.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book Your Session
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Oscillate Experience</h2>
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

      {/* Class Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Oscillate</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bungee Oscillate is our most dance-focused class. You'll learn choreographed 
                sequences that combine bouncing, swaying, and flowing movements while 
                suspended on the bungee.
              </p>
              <p>
                The continuous oscillating motion keeps your core engaged throughout the class, 
                improving balance and stability. It's like dancing in zero gravity!
              </p>
              <p>
                Perfect for those who love music and want a fun, creative workout experience. 
                No dance experience required - just bring your enthusiasm!
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

export default BungeeOscillate;
