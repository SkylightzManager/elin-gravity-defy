import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { CheckCircle } from "lucide-react";

import milestone1 from "@/assets/milestone-1.jpg";
import milestone2 from "@/assets/milestone-2.jpg";
import milestone3 from "@/assets/milestone-3.jpg";
import milestone4 from "@/assets/milestone-4.jpg";
import milestone5 from "@/assets/milestone-5.jpg";
import milestone6 from "@/assets/milestone-6.jpg";
import milestone7 from "@/assets/milestone-7.jpg";
import milestone8 from "@/assets/milestone-8.jpg";
import milestone9 from "@/assets/milestone-9.jpg";

const Milestone = () => {
  useSeo({
    title: "Our Milestone Journey | Elin Dance Studio Singapore",
    description: "Discover Elin Dance Studio's journey from FIT 2022-2024 to WHO 2025 and EVE 2026. Building community through bungee fitness in Singapore."
  });

  const milestones = [
    {
      phase: "Phase 1",
      title: "The Origin and Foundation",
      subtitle: "FIT 2022-2024",
      description: "Our story began with FIT 2022-2024, the crucial launchpad for Elin Dance Studio. This theme focused on establishing our core values and physical presence.",
      highlights: [
        { label: "Foundation", text: "Starting in 2022, this phase focused on building the foundation of the company, establishing robust operations, and cultivating our initial, strong community." },
        { label: "Innovation", text: "We focused on integrating bungee fitness into various class formats suitable for all ages, making unique fitness accessible to everyone." },
        { label: "Trustworthy", text: "We aimed to create strong relationships with our community through excellent service, affordable prices, and a welcoming, home-like environment." }
      ],
      footer: "This phase successfully cemented our studio's ethos and prepared us for expansion.",
      images: [milestone1, milestone2, milestone3]
    },
    {
      phase: "Phase 2",
      title: "Core Development",
      subtitle: "WHO 2025",
      description: "Building directly on our foundation, we successfully established the core programming of Elin Dance Studio with the theme WHO 2025.",
      highlights: [
        { label: "Workout", text: "Our signature bungee workout classes provided a fun, low-impact way to build strength and agility." },
        { label: "HIIT", text: "High-Intensity Interval Training focused on pure fitness, these classes elevated stamina and cardiovascular health." },
        { label: "Oscillate", text: "Dedicated dance classes allowed for rhythmic movement and creative expression." }
      ],
      footer: "Thanks to the dedication of our community, these three areas are now the strong, diverse foundation Elin Dance Studio stands on today.",
      images: [milestone4, milestone5, milestone6]
    },
    {
      phase: "Phase 3",
      title: "The Next Chapter",
      subtitle: "EVE 2026",
      description: "We are now moving to our next exciting milestone: EVE 2026. This theme is all about enriching your overall well-being and extending beyond physical fitness.",
      highlights: [
        { label: "Elevate", text: "Elevate the quality of your lifestyle and vitality. We are expanding our focus to mental health, promoting a stress-free environment, and improving overall physical health." },
        { label: "Vitality", text: "The feeling of being full of life and energy, achieved through a holistic approach." },
        { label: "Exhilarate", text: "Through our unique bungee workout activities, we focus on introducing happiness, thrill, and freedom into your fitness routine." }
      ],
      footer: "Join us as we continue to grow and make EVE 2026 our most vital and exhilarating year yet!",
      images: [milestone7, milestone8, milestone9]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-gradient-cyan">🌟 Our Milestone Journey:</span>
              <br />
              Building Community, From FIT to EVE
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Elin Dance Studio, our journey is a story of continuous growth, built on a strong foundation and fueled by the support of our incredible members. Every theme represents a significant step we've taken together to redefine fitness and well-being.
            </p>
            <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Milestone Sections */}
      {milestones.map((milestone, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-gradient-light'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Phase Badge */}
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-cyan rounded-full text-white font-bold text-lg mb-4">
                  {milestone.phase}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {milestone.title}
                </h2>
                <p className="text-primary font-semibold text-xl">
                  {milestone.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                {milestone.description}
              </p>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {milestone.images.map((img, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="rounded-2xl overflow-hidden shadow-lg hover:glow-cyan transition-all duration-300 group"
                  >
                    <img 
                      src={img} 
                      alt={`${milestone.subtitle} - Image ${imgIdx + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {milestone.highlights.map((highlight, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card p-6 rounded-xl hover:glow-cyan-strong transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-foreground text-lg">{highlight.label}</span>
                        <p className="text-muted-foreground mt-2">{highlight.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="text-center">
                <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
                  {milestone.footer}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Milestone;
