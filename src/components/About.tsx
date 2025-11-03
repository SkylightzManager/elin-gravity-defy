import { Heart, Zap, Dumbbell, Smile } from "lucide-react";
import classImage from "@/assets/class-action.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Full-Body Cardio",
    description: "High intensity cardio that gets your heart pumping and burns calories fast",
  },
  {
    icon: Zap,
    title: "Low Impact",
    description: "Gentle on joints while delivering maximum results - perfect for all fitness levels",
  },
  {
    icon: Dumbbell,
    title: "Strength & Toning",
    description: "Build core strength and tone arms, legs, and calves with every movement",
  },
  {
    icon: Smile,
    title: "Pure Joy",
    description: "Experience the sensation of flying without the freefall - fun guaranteed!",
  },
];

const About = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            What is <span className="text-gradient-cyan">Bungee Workout</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Low Impact, High Intensity Cardio Workout that enables you to <span className="text-primary font-semibold">fly!</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden glow-cyan">
              <img 
                src={classImage} 
                alt="Bungee fitness class in action with multiple participants"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl border-2 border-primary animate-pulse-glow">
              <p className="text-primary font-bold text-lg">Singapore's Only</p>
              <p className="text-foreground font-semibold">Bungee Fitness Training Centre</p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-cyan rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
