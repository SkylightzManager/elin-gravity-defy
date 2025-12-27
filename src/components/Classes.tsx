import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingUp } from "lucide-react";
import bungeeYoga from "@/assets/bungee-yoga.jpg";
import classAction from "@/assets/class-action.jpg";
import heroImage from "@/assets/hero-bungee.jpg";
import { getBookingUrl } from "@/lib/platformDetect";

const classes = [
  {
    title: "Bungee Fitness Workout",
    image: heroImage,
    duration: "60 min",
    level: "All Levels",
    intensity: "High",
    description: "Singapore's premier high-energy bungee workout combining cardio, strength training, and the thrill of aerial fitness - perfect for weight loss and toning",
    features: ["Cardio Blast", "Core Strength", "High Calorie Burn"],
  },
  {
    title: "Bungee Yoga Singapore",
    image: bungeeYoga,
    duration: "60 min",
    level: "Beginner-Intermediate",
    intensity: "Medium",
    description: "Graceful fusion of traditional yoga poses with bungee cord support for deeper stretches and improved flexibility - Singapore's unique aerial yoga experience",
    features: ["Flexibility", "Balance", "Mindfulness"],
  },
  {
    title: "Aerial Bungee Training",
    image: classAction,
    duration: "45 min",
    level: "Intermediate-Advanced",
    intensity: "Very High",
    description: "Advanced bungee fitness training with dynamic aerial movements and techniques for experienced fitness enthusiasts in Singapore",
    features: ["Advanced Moves", "Power Training", "Endurance"],
  },
];

const Classes = () => {
  const handleBooking = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Bungee Fitness <span className="text-gradient-cyan">Classes in Singapore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our signature bungee workout classes near Alexandra & Labrador Park - from beginner-friendly sessions to advanced aerial fitness training
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-cyan transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={`${classItem.title} class`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="glass-card px-3 py-1 text-xs font-semibold text-foreground rounded-full border border-primary/30 backdrop-blur-sm bg-background/70">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {classItem.duration}
                  </span>
                  <span className="bg-gradient-cyan px-3 py-1 text-xs font-bold text-white rounded-full">
                    {classItem.intensity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{classItem.title}</h3>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{classItem.level}</span>
                </div>
                <p className="text-muted-foreground mb-4">{classItem.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {classItem.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="glass-card px-3 py-1 text-xs text-primary rounded-full border border-primary/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold group/btn"
                >
                  Book Bungee Fitness Class
                  <TrendingUp className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            Not sure which bungee fitness class is right for you in Singapore?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary hover:bg-primary/10 font-semibold px-8"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Elin Dance Studio for Guidance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
