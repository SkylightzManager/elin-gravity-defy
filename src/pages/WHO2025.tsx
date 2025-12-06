import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, DollarSign, Calendar, Gift } from "lucide-react";

const WHO2025 = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-cyan">WHO2025</span> Wellness Package
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Welcome Health Opportunities in 2025! Kickstart your wellness journey with our exclusive New Year packages designed for your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">WHO2025 Package Options</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { sessions: 5, price: "$250", savings: "Save $50" },
              { sessions: 10, price: "$450", savings: "Save $150" },
              { sessions: 20, price: "$800", savings: "Save $400" }
            ].map((pkg, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl text-center hover-lift hover:glow-cyan transition-all">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{pkg.sessions} Sessions</h3>
                <p className="text-4xl font-bold text-primary mb-2">{pkg.price}</p>
                <p className="text-destructive font-semibold">{pkg.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What WHO2025 Means */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">The Meaning of WHO2025</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>WHO2025</strong> stands for <strong>Welcome Health Opportunities 2025</strong>. It's more than a promotion—it's a commitment to prioritizing your wellness in the new year.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This initiative aligns with Singapore's national health goals and our mission to make fitness accessible, enjoyable, and transformative for everyone. Start 2025 with strength, confidence, and a supportive community at Elin Dance Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">WHO2025 Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Flexible Validity", desc: "6 months to complete your sessions" },
              { icon: Gift, title: "Bonus Classes", desc: "Free wellness workshop included" },
              { icon: Sparkles, title: "Priority Booking", desc: "Reserve your preferred time slots" },
              { icon: DollarSign, title: "Best Value", desc: "Lowest per-session rates" }
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

      {/* Enquiry Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Get Your WHO2025 Package</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New WHO2025 Package Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <select name="package" className="w-full p-3 rounded-lg border border-input bg-background" required>
              <option value="">Select Package</option>
              <option value="5-sessions">5 Sessions - $250</option>
              <option value="10-sessions">10 Sessions - $450</option>
              <option value="20-sessions">20 Sessions - $800</option>
            </select>
            <Textarea name="message" placeholder="Any questions or special requests?" rows={4} className="bg-background" />
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

export default WHO2025;
