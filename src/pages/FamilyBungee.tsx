import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBookingUrl } from "@/lib/platformDetect";
import { Users, Heart, Home, Sparkles } from "lucide-react";

const FamilyBungee = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Family <span className="text-gradient-cyan">Bungee</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bond together while flying together. Singapore's premier family fitness experience for ages 4-66. Create unforgettable memories with your loved ones.
            </p>
            <Button onClick={handleBookNow} size="lg" className="bg-gradient-cyan hover:glow-cyan text-white">
              Book Family Session
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Families That Fly Together, Stay Together</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "All Ages Welcome", desc: "From kids to grandparents (4-66)" },
              { icon: Heart, title: "Quality Bonding", desc: "Share laughter and achievements" },
              { icon: Home, title: "Private Sessions", desc: "Exclusive family-only classes available" },
              { icon: Sparkles, title: "Special Packages", desc: "Family rates and bundles" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover-lift">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Family Adventure</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Family Bungee Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <Input type="number" name="family_size" placeholder="Number of Family Members" required className="bg-background" />
            <Textarea name="message" placeholder="Tell us about your family (ages, experience level, etc.)" rows={4} className="bg-background" />
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

export default FamilyBungee;
