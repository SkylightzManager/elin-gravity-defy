import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Zap, Heart, Users, Clock } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const BungeeWorkout = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Zap, title: "High Energy", description: "Burn up to 400 calories in just 45 minutes" },
    { icon: Heart, title: "Low Impact", description: "80% less impact on joints compared to regular exercise" },
    { icon: Users, title: "All Fitness Levels", description: "Suitable for beginners to advanced" },
    { icon: Clock, title: "45-Minute Sessions", description: "Efficient workout that fits your schedule" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bungee <span className="text-primary">Workout</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the thrill of flying while getting an incredible full-body workout. 
              Our signature Bungee Workout combines cardio, strength, and flexibility training 
              in one exhilarating session.
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bungee Workout?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What to Expect</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our Bungee Workout class is a 45-minute session that will transform the way you 
                think about exercise. You'll be securely harnessed to a bungee cord attached to 
                the ceiling, allowing you to bounce, fly, and move in ways you never thought possible.
              </p>
              <p>
                Each class includes a warm-up, cardio sequences, strength exercises, and a cool-down. 
                Our certified instructors will guide you through every movement, ensuring proper form 
                and maximum results.
              </p>
              <p>
                No prior experience is needed! We welcome participants of all fitness levels and 
                provide modifications for every exercise.
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

export default BungeeWorkout;
