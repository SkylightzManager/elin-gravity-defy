import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBookingUrl } from "@/lib/platformDetect";
import { Gift, DollarSign, Clock, CheckCircle } from "lucide-react";

const TrialClass = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-background to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Gift className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trial Class <span className="text-gradient-cyan">Special</span>
            </h1>
            <div className="mb-8">
              <p className="text-xl text-muted-foreground mb-4">
                Experience bungee fitness for yourself
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl line-through text-muted-foreground">$55</span>
                <span className="text-5xl font-bold text-gradient-cyan">$30</span>
              </div>
              <p className="text-lg text-destructive font-semibold mt-2">Save $25 on your first class!</p>
            </div>
            <Button onClick={handleBookNow} size="lg" className="bg-gradient-cyan hover:glow-cyan text-white">
              Book Your Trial Now
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What's Included in Your Trial</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Clock, title: "45-Minute Session", desc: "Full bungee fitness experience" },
              { icon: Gift, title: "Equipment Provided", desc: "All harnesses and safety gear" },
              { icon: CheckCircle, title: "Expert Guidance", desc: "Certified instructor support" },
              { icon: DollarSign, title: "No Commitment", desc: "Just $30, no strings attached" }
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

      {/* Why Try Bungee Fitness */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Try Bungee Fitness?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bungee fitness is Singapore's most exciting workout trend, and for good reason. It's low-impact yet high-intensity, protecting your joints while delivering incredible results. Whether you're a fitness enthusiast or complete beginner, bungee fitness adapts to your level.
            </p>
            <div className="glass-card p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold mb-4">What You'll Experience:</h3>
              <ul className="space-y-3">
                {[
                  "The thrill of defying gravity",
                  "Full-body workout that feels like play",
                  "Burn up to 800 calories in 45 minutes",
                  "Build strength, flexibility, and confidence",
                  "Join Singapore's friendliest fitness community"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our trial class is designed to give you the complete experience with no pressure. Come see why thousands of Singaporeans have fallen in love with bungee fitness at Elin Dance Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your $30 Trial Class</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Trial Class Booking - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <Input type="date" name="preferred_date" placeholder="Preferred Date" className="bg-background" />
            <Textarea name="message" placeholder="Any questions or special requirements?" rows={4} className="bg-background" />
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white">
              Book Trial Class - $30
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TrialClass;
