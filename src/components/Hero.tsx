import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bungee.jpg";
import logo from "@/assets/logo.png";
import { getBookingUrl } from "@/lib/platformDetect";
import AppDownload from "@/components/AppDownload";

const Hero = () => {
  const handleBooking = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Bungee fitness workout in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <img 
            src={logo} 
            alt="Elin Dance Studio Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="block text-gradient-cyan">BUNGEE FITNESS SINGAPORE</span>
          <span className="block text-foreground mt-2">DEFY GRAVITY. DISCOVER STRENGTH.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Singapore's Premier Bungee Workout Studio Near Alexandra & Labrador Park MRT
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in script-font" style={{ animationDelay: '0.4s' }}>
          Low-Impact, High-Intensity Bungee Fitness Classes for Ages 4-66 | Every Mind Matters, Every Dream Counts
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            onClick={handleBooking}
            className="bg-gradient-cyan hover:glow-cyan-strong text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            Book Your Bungee Fitness Trial
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="glass-card border-primary text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 group bg-background/80 backdrop-blur-sm"
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            Watch Bungee Workout Video
          </Button>
        </div>

        {/* App Download Buttons */}
        <div className="mt-8 animate-fade-in flex justify-center" style={{ animationDelay: '0.8s' }}>
          <AppDownload />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
