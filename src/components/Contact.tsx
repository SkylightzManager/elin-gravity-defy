import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Fitness Avenue, Singapore 123456",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+65 1234 5678",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@elindance.sg",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon-Sun: 8am - 10pm",
  },
];

const Contact = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Ready to <span className="text-gradient-cyan">Take Flight</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch to book your first class or ask us anything
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Full Name
                </label>
                <Input 
                  placeholder="Your name"
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  placeholder="+65 1234 5678"
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your fitness goals or any questions you have..."
                  rows={4}
                  className="bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold py-6 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-lg font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-cyan rounded-full flex items-center justify-center hover:glow-cyan transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-cyan rounded-full flex items-center justify-center hover:glow-cyan transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card rounded-xl overflow-hidden h-64">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-background flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
