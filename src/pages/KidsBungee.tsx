import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBookingUrl } from "@/lib/platformDetect";
import { Baby, Heart, Shield, Star } from "lucide-react";

const KidsBungee = () => {
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
              Kids <span className="text-gradient-cyan">Bungee</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Singapore's safest and most fun bungee fitness program for children aged 4-12. Build confidence, strength, and coordination through play.
            </p>
            <Button onClick={handleBookNow} size="lg" className="bg-gradient-cyan hover:glow-cyan text-white">
              Book for Your Child
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Kids Love Bungee Fitness</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Fun & Engaging", desc: "Exercise feels like playtime" },
              { icon: Shield, title: "100% Safe", desc: "Age-appropriate equipment and supervision" },
              { icon: Heart, title: "Confidence Building", desc: "Kids achieve new heights literally" },
              { icon: Baby, title: "Ages 4-12", desc: "Programs tailored to age groups" }
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
          <h2 className="text-4xl font-bold text-center mb-12">Enroll Your Child Today</h2>
          <form action="https://formsubmit.co/enquiry@elindance.com.sg" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Kids Bungee Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="parent_name" placeholder="Parent Name" required className="bg-background" />
            <Input type="text" name="child_name" placeholder="Child Name" required className="bg-background" />
            <Input type="number" name="child_age" placeholder="Child Age" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <Textarea name="message" placeholder="Any special requirements or questions?" rows={4} className="bg-background" />
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

export default KidsBungee;
