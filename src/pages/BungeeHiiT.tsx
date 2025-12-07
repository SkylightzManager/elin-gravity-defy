import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Flame, Timer, TrendingUp, Dumbbell } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const BungeeHiiT = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const features = [
    { icon: Flame, title: "Maximum Burn", description: "High-intensity intervals for maximum calorie burn" },
    { icon: Timer, title: "HIIT Format", description: "Work hard, rest, repeat for optimal results" },
    { icon: TrendingUp, title: "Afterburn Effect", description: "Continue burning calories hours after class" },
    { icon: Dumbbell, title: "Strength + Cardio", description: "Build muscle while improving endurance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bungee <span className="text-primary">HiiT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Take your fitness to the next level with our high-intensity interval training 
              on bungees. Push your limits, break through plateaus, and achieve results 
              faster than ever before.
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
          <h2 className="text-3xl font-bold text-center mb-12">The HiiT Difference</h2>
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
            <h2 className="text-3xl font-bold text-center mb-8">Class Details</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bungee HiiT is designed for those who want to challenge themselves and see 
                rapid improvements in their fitness. This 50-minute class alternates between 
                intense bursts of bungee exercises and short recovery periods.
              </p>
              <p>
                The high-intensity intervals spike your heart rate and metabolism, while the 
                bungee support allows you to perform explosive movements with reduced impact 
                on your joints.
              </p>
              <p>
                Recommended for those with some fitness experience. However, modifications 
                are available for all exercises.
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

export default BungeeHiiT;
