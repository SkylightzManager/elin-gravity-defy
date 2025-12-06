import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Zap, Heart, Building2, Star } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const CorporateTeamBuilding = () => {
  const bookingUrl = getBookingUrl();

  const themes = [
    { title: "Theme 1", description: "Placeholder description", icon: Zap },
    { title: "Theme 2", description: "Placeholder description", icon: Heart },
    { title: "Theme 3", description: "Placeholder description", icon: Trophy },
    { title: "Theme 4", description: "Placeholder description", icon: Star },
  ];

  const suitableFor = [
    "Corporate Teams",
    "Small Businesses",
    "Startups",
    "Schools",
    "Community Groups",
    "Family Events",
  ];

  const benefits = [
    { title: "Benefit 1", description: "Placeholder benefit description", icon: Users },
    { title: "Benefit 2", description: "Placeholder benefit description", icon: Trophy },
    { title: "Benefit 3", description: "Placeholder benefit description", icon: Zap },
    { title: "Benefit 4", description: "Placeholder benefit description", icon: Heart },
  ];

  const testimonials = [
    { name: "Client 1", company: "Company A", quote: "Placeholder testimonial" },
    { name: "Client 2", company: "Company B", quote: "Placeholder testimonial" },
    { name: "Client 3", company: "Company C", quote: "Placeholder testimonial" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-cyan">Corporate Teambuilding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Singapore's Most Unique Corporate Workshop Experience
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-cyan hover:opacity-90 text-white px-8 py-6 text-lg"
            onClick={() => window.open(bookingUrl, '_blank')}
          >
            Book Corporate Session
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Corporate Workshop Overview</span>
          </h2>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg text-center">
              Placeholder content for corporate workshop overview. Add your detailed description here.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Workshop Themes</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="glass-card p-6 text-center hover-lift">
                <theme.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Suitable For</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {suitableFor.map((item, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-foreground font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Corporate Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 text-center hover-lift">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Trusted By</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Client Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-cyan">Book Your Corporate Session</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://formsubmit.co/imperialgamerop@gmail.com" 
              method="POST"
              className="glass-card p-8 space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Corporate Teambuilding Enquiry - Elin Dance Studio" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Participants</label>
                  <input 
                    type="number" 
                    name="participants" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-cyan hover:opacity-90 text-white py-6 text-lg">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
};

export default CorporateTeamBuilding;
