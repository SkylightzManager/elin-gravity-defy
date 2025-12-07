import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, Award } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const HeartOfSociety = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const highlights = [
    { icon: Heart, title: "Community Focus", description: "Supporting local community wellness" },
    { icon: Users, title: "Inclusive Pricing", description: "Special rates for community members" },
    { icon: Handshake, title: "Partnerships", description: "Collaborating with local organizations" },
    { icon: Award, title: "Impact Driven", description: "Making fitness accessible to all" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Heart of <span className="text-primary">Society</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Our commitment to giving back. The Heart of Society program makes bungee 
              fitness accessible to everyone, with special initiatives for community 
              wellness and inclusion.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Community Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Making a Difference</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The Heart of Society program is our way of ensuring that the joy and 
                benefits of bungee fitness are available to everyone in Singapore. 
                We believe that wellness should not be a privilege but a right.
              </p>
              <p>
                Through partnerships with community centers, schools, and non-profit 
                organizations, we offer subsidized classes, free workshops, and special 
                programs for underserved communities.
              </p>
              <p>
                Want to participate or support our community initiatives? Contact us 
                to learn how you can get involved or benefit from this program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppDownload />
      <Footer />
    </div>
  );
};

export default HeartOfSociety;
