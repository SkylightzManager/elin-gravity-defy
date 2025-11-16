import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Bungee Fitness Studio",
    content: "Near Alexandra & Labrador Park MRT, Singapore",
  },
  {
    icon: Phone,
    title: "Call Elin Dance Studio",
    content: "+65 1234 5678",
  },
  {
    icon: Mail,
    title: "Email Us About Classes",
    content: "hello@elindance.sg",
  },
  {
    icon: Clock,
    title: "Bungee Workout Hours",
    content: "Mon-Sun: 8am - 10pm",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if form was submitted successfully
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [toast]);

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
            Book Your <span className="text-gradient-cyan">Bungee Fitness Trial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact Singapore's #1 bungee workout studio near Alexandra - Start your aerial fitness journey today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form 
              action="https://formsubmit.co/anshguptasjs@gmail.com" 
              method="POST"
              onSubmit={() => setIsSubmitting(true)}
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}?submitted=true`} />
              <input type="hidden" name="_subject" value="New Bungee Fitness Inquiry - Elin Dance Studio" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Full Name
                </label>
                <Input 
                  type="text"
                  name="full_name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  maxLength={255}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  name="phone"
                  placeholder="+65 1234 5678"
                  maxLength={20}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your fitness goals or any questions you have..."
                  rows={4}
                  required
                  maxLength={1000}
                  className="bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold py-6 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Book Your Bungee Fitness Trial'}
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

            {/* Google Maps */}
            <div className="glass-card rounded-xl overflow-hidden h-64">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=7RG2%2BGM%20Singapore&output=embed"
                title="Elin Dance Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
