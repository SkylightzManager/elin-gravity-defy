import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PartyPopper, Gift, Sparkles, Heart } from "lucide-react";

const Anniversary = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-background to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <PartyPopper className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Anniversary <span className="text-gradient-cyan">Celebration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Celebrating years of transforming lives through bungee fitness. Join us in this special milestone with exclusive anniversary packages and surprises!
            </p>
          </div>
        </div>
      </section>

      {/* Anniversary Offers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Anniversary Special Offers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gift, title: "Bonus Classes", desc: "Buy 10, get 2 free on all packages" },
              { icon: Sparkles, title: "Exclusive Merchandise", desc: "Limited edition anniversary gear" },
              { icon: Heart, title: "Bring a Friend Free", desc: "Share the joy with someone special" },
              { icon: PartyPopper, title: "Prize Draws", desc: "Win free packages and workshops" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover-lift text-center">
                <item.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey So Far</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              From a small studio with a big dream to becoming Singapore's premier bungee fitness destination, Elin Dance Studio has been transforming lives through the joy of movement. We've helped thousands discover their strength, build their confidence, and find their community.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-8">
              {[
                { number: "5000+", label: "Classes Taught" },
                { number: "2000+", label: "Happy Members" },
                { number: "50+", label: "Certified Instructors" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-gradient-cyan mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for being part of our story. This anniversary is as much yours as it is ours. Here's to many more years of flying together!
            </p>
          </div>
        </div>
      </section>

      {/* Celebration Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Join Our Celebration</h2>
          <div className="glass-card p-8 rounded-2xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Anniversary Open House</h3>
                  <p className="text-muted-foreground">Free demo classes, studio tours, and meet the instructors</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Special Workshops</h3>
                  <p className="text-muted-foreground">Advanced techniques and specialty classes</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Celebration</h3>
                  <p className="text-muted-foreground">Party with your bungee fitness family</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Claim Your Anniversary Offer</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Anniversary Offer Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <select name="interest" className="w-full p-3 rounded-lg border border-input bg-background" required>
              <option value="">What are you interested in?</option>
              <option value="package">Anniversary package offer</option>
              <option value="event">Celebration events</option>
              <option value="both">Both packages and events</option>
            </select>
            <Textarea name="message" placeholder="Any questions?" rows={4} className="bg-background" />
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

export default Anniversary;
