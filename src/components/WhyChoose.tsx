import { Award, Shield, Users } from "lucide-react";
import whyMainImage from "@/assets/why-main.jpg";
import whyCertificationImage from "@/assets/why-certification.jpg";
import whyEquipmentImage from "@/assets/why-equipment.jpg";
import whyGuidanceImage from "@/assets/why-guidance.jpg";

const reasons = [
  {
    icon: Award,
    title: "International Certification",
    description: "All bungee fitness instructors at our Singapore studio are internationally certified and trained in the highest safety protocols",
    image: whyCertificationImage,
  },
  {
    icon: Shield,
    title: "Premium Bungee Equipment",
    description: "State-of-the-art bungee systems meeting international safety standards with regular maintenance - Singapore's safest aerial fitness studio",
    image: whyEquipmentImage,
  },
  {
    icon: Users,
    title: "Expert Personal Guidance",
    description: "Small bungee fitness class sizes ensure personalized attention and proper technique guidance for every member in Singapore",
    image: whyGuidanceImage,
  },
];

interface WhyChooseProps {
  showFullContent?: boolean;
}

const WhyChoose = ({ showFullContent = true }: WhyChooseProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-gradient-cyan">Elin Dance Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Singapore's most trusted bungee fitness studio since 2019 - unmatched expertise, certified instructors, and proven results near Alexandra
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
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
                src={whyMainImage} 
                alt="Certified bungee fitness instructor at Elin Dance Studio Singapore guiding student in aerial workout near Alexandra"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-6 -left-6 glass-card p-4 rounded-xl border-2 border-primary animate-float hidden sm:block">
              <p className="text-primary font-bold text-sm">Singapore's First Bungee Fitness</p>
              <p className="text-foreground text-xs">Established 2019</p>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-6 -right-6 glass-card p-4 rounded-xl border-2 border-primary animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
              <p className="text-primary font-bold text-sm">100% Safety Record</p>
              <p className="text-foreground text-xs">Certified Instructors</p>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        {showFullContent && (
          <div className="glass-card p-8 rounded-2xl text-center max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Internationally Recognized Bungee Fitness Certifications in Singapore
            </h3>
            <p className="text-muted-foreground mb-6">
              Our bungee workout instructors hold certifications from leading global fitness organizations
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary font-semibold">
              <span>• ACE Certified Trainer</span>
              <span>• AFAA Fitness Professional</span>
              <span>• Bungee Fitness International</span>
              <span>• First Aid & CPR Certified</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChoose;