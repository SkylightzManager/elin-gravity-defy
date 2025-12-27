import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const HeartOfSociety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Banner */}
      <section className="pt-24 pb-4 bg-primary">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-semibold tracking-[0.3em] uppercase">
            E L I N &nbsp; D A N C E &nbsp; S T U D I O
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              HEART OF SOCIETY
            </h1>
            <p className="text-2xl md:text-3xl text-primary italic">
              Free Sessions
            </p>
          </div>

          {/* Content Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Row */}
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl mb-4">🤸‍♀️</p>
                    <p className="text-muted-foreground">Bungee Fitness Class</p>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8 bg-primary/10 flex items-center">
                <p className="text-foreground text-lg leading-relaxed">
                  Elin Dance Studio's "Heart of Society Package" offers a bungee fitness class for kids with developmental needs, promoting physical, emotional, and social growth through fun, dynamic exercises that encourage inclusion and empowerment.
                </p>
              </div>

              {/* Second Row */}
              <div className="glass-card rounded-2xl p-8 bg-primary/10 flex items-center">
                <p className="text-foreground text-lg leading-relaxed">
                  Our class offers a safe, inclusive space for the children, focusing on motor skills, confidence, and social connections through playful, adaptive fitness activities in small groups.
                </p>
              </div>
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl mb-4">🎈</p>
                    <p className="text-muted-foreground">Inclusive Fitness Activities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Sign Up */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">HOW TO SIGN UP</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                To apply for our bungee fitness class, contact us via WhatsApp or visit our website.
                <br />
                Limited spots are available so do apply soon to secure a place!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <a 
            href="https://wa.me/6588799689" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="w-8 h-8" />
            <span>8879 9689</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeartOfSociety;
