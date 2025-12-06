import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Gift, Sparkles } from "lucide-react";

const HeartOfSociety = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-50 via-background to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Heart className="w-20 h-20 text-destructive mx-auto mb-6 fill-current" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-cyan">Heart of Society</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Supporting community wellness and giving back to Singapore. Join us in making fitness accessible to everyone through our social impact initiative.
            </p>
          </div>
        </div>
      </section>

      {/* About the Initiative */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">About Heart of Society</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Heart of Society is Elin Dance Studio's commitment to social responsibility and community wellness. We believe that fitness should be accessible to all Singaporeans, regardless of their background or circumstances.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through this initiative, we partner with community organizations, charities, and social enterprises to provide subsidized bungee fitness classes, wellness workshops, and instructor training programs. A portion of every class booking goes directly to supporting these community programs.
            </p>
          </div>
        </div>
      </section>

      {/* How We Give Back */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How We Give Back</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Community Classes", desc: "Subsidized sessions for underserved communities" },
              { icon: Heart, title: "Charity Partnerships", desc: "President's Star Charity supporter" },
              { icon: Gift, title: "Scholarship Programs", desc: "Free training for aspiring instructors" },
              { icon: Sparkles, title: "Wellness Outreach", desc: "Mobile programs for seniors and youth" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover-lift">
                <item.icon className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">How to Get Involved</h2>
          <div className="glass-card p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Book Regular Classes</h3>
                  <p className="text-muted-foreground">Every class booking contributes to our community programs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Donate Directly</h3>
                  <p className="text-muted-foreground">Make a direct contribution to our community fund</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                  <p className="text-muted-foreground">Help us run community classes and events</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cyan text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
                  <p className="text-muted-foreground">Share our mission with your community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Join Our Initiative</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Heart of Society Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <select name="interest" className="w-full p-3 rounded-lg border border-input bg-background" required>
              <option value="">How would you like to help?</option>
              <option value="attend">Attend community classes</option>
              <option value="donate">Make a donation</option>
              <option value="volunteer">Volunteer my time</option>
              <option value="partner">Partner with my organization</option>
            </select>
            <Textarea name="message" placeholder="Tell us more about your interest..." rows={4} className="bg-background" />
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

export default HeartOfSociety;
