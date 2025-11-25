import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBookingUrl } from "@/lib/platformDetect";
import { Check, Shield, Heart, Zap } from "lucide-react";
import classAction from "@/assets/class-action.jpg";

const BungeeWorkout = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Heart, title: "Full Body Transformation", desc: "Engage every muscle group for complete fitness" },
    { icon: Zap, title: "Low-Impact, High Results", desc: "Protect your joints while burning calories" },
    { icon: Shield, title: "Core Strength Building", desc: "Develop stability and balance" },
    { icon: Check, title: "Cardiovascular Endurance", desc: "Boost stamina and heart health" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bungee Fitness <span className="text-gradient-cyan">Workout</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience Singapore's most exhilarating full-body workout. Suspended by bungee cords, you'll defy gravity while building strength, endurance, and confidence.
              </p>
              <Button onClick={handleBookNow} size="lg" className="bg-gradient-cyan hover:glow-cyan text-white">
                Book Your Flight Now
              </Button>
            </div>
            <div className="animate-scale-in">
              <img src={classAction} alt="Bungee Fitness Workout Singapore" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Bungee Workout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">What is Bungee Fitness Workout?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bungee Fitness is Singapore's most innovative aerial workout that combines resistance training with cardiovascular exercise. Secured in a harness attached to bungee cords from the ceiling, you'll experience the thrill of flying while engaging your entire body in dynamic movements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This low-impact, high-intensity training method is perfect for all fitness levels. Whether you're a beginner or an experienced athlete, bungee fitness delivers an effective workout that burns up to 800 calories per session while protecting your joints and building functional strength.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Transform Your Fitness Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Your Safety is Our Priority</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Elin Dance Studio, we use professional-grade equipment and certified instructors ensure every session is safe and effective. Our bungee systems are regularly inspected and maintained to the highest standards.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Bungee Workout</h2>
          <form action="https://formsubmit.co/enquiry@elindance.com.sg" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Bungee Workout Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <div>
              <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            </div>
            <div>
              <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            </div>
            <div>
              <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            </div>
            <div>
              <Textarea name="message" placeholder="Tell us about your fitness goals..." rows={4} className="bg-background" />
            </div>
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white">
              Submit Enquiry
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BungeeWorkout;
