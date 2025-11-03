import { Award, Shield, Users, Sparkles } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const reasons = [
  {
    icon: Award,
    title: "Professional Certification",
    description: "All instructors are internationally certified and trained in bungee fitness safety protocols",
  },
  {
    icon: Shield,
    title: "Premium Equipment",
    description: "State-of-the-art bungee systems with the highest safety standards and regular maintenance",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Small class sizes ensure personalized attention and proper technique guidance for every member",
  },
  {
    icon: Sparkles,
    title: "Proven Results",
    description: "Members see visible results within weeks - improved fitness, strength, and confidence",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-gradient-cyan">Elin Dance Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Singapore's trusted name in bungee fitness with unmatched expertise and dedication
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Reasons Grid */}
          <div className="space-y-6 order-2 lg:order-1">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 transform hover:translate-x-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden glow-cyan-strong">
              <img 
                src={instructorImage} 
                alt="Professional bungee fitness instructor helping a student"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-6 -left-6 glass-card p-4 rounded-xl border-2 border-primary animate-float">
              <p className="text-primary font-bold text-sm">First in Singapore</p>
              <p className="text-foreground text-xs">Since 2019</p>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-6 -right-6 glass-card p-4 rounded-xl border-2 border-primary animate-float" style={{ animationDelay: '2s' }}>
              <p className="text-primary font-bold text-sm">Safety First</p>
              <p className="text-foreground text-xs">100% Track Record</p>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="glass-card p-8 rounded-2xl text-center max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Internationally Recognized & Certified
          </h3>
          <p className="text-muted-foreground mb-6">
            Our instructors hold certifications from leading fitness organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary font-semibold">
            <span>• ACE Certified</span>
            <span>• AFAA Certified</span>
            <span>• Bungee Fitness International</span>
            <span>• First Aid & CPR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
