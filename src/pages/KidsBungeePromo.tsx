import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBookingUrl } from "@/lib/platformDetect";
import { Baby, DollarSign, Star, Shield } from "lucide-react";

const KidsBungeePromo = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-background to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Baby className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kids Bungee <span className="text-gradient-cyan">Special</span>
            </h1>
            <div className="mb-8">
              <p className="text-xl text-muted-foreground mb-4">
                Limited-time offer for young flyers aged 4-12
              </p>
              <div className="text-5xl font-bold text-gradient-cyan mb-2">Only $160</div>
              <p className="text-lg text-muted-foreground">For a complete package of classes</p>
            </div>
            <Button onClick={handleBookNow} size="lg" className="bg-gradient-cyan hover:glow-cyan text-white">
              Book for Your Child
            </Button>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What's Included for $160</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Star, title: "4 Full Classes", desc: "Complete bungee fitness experience" },
              { icon: Shield, title: "Safe Environment", desc: "Age-appropriate equipment" },
              { icon: Baby, title: "Expert Guidance", desc: "Kids-specialized instructors" },
              { icon: DollarSign, title: "Amazing Value", desc: "Save on regular pricing" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover-lift text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Kids */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Kids Love Bungee Fitness</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bungee fitness transforms exercise into an exciting adventure for children. Instead of traditional workouts, kids experience the thrill of flying, jumping, and playing while developing crucial physical and mental skills.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Physical Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Improves coordination and balance</li>
                  <li>• Builds strength naturally through play</li>
                  <li>• Develops flexibility and motor skills</li>
                  <li>• Low-impact on growing bodies</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Mental Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Boosts confidence and self-esteem</li>
                  <li>• Encourages trying new things</li>
                  <li>• Reduces screen time naturally</li>
                  <li>• Fosters social connections</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Parents love watching their children discover joy in movement while building lifelong healthy habits. Our instructors create a supportive, fun environment where every child feels like a superhero.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Secure Your $160 Package</h2>
          <form action="https://formsubmit.co/enquiry@elindance.com.sg" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Kids Bungee Promo Booking - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="parent_name" placeholder="Parent/Guardian Name" required className="bg-background" />
            <Input type="text" name="child_name" placeholder="Child's Name" required className="bg-background" />
            <Input type="number" name="child_age" placeholder="Child's Age (4-12)" min="4" max="12" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <Textarea name="message" placeholder="Any questions or special requirements?" rows={4} className="bg-background" />
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white">
              Book $160 Package Now
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KidsBungeePromo;
