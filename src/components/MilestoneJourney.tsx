import { CheckCircle } from "lucide-react";

const MilestoneJourney = () => {
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
      footer: "This phase successfully cemented our studio's ethos and prepared us for expansion."
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
      footer: "Thanks to the dedication of our community, these three areas are now the strong, diverse foundation Elin Dance Studio stands on today."
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
      footer: "Join us as we continue to grow and make EVE 2026 our most vital and exhilarating year yet!"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-gradient-cyan">🌟 Our Milestone Journey:</span>
            <br />
            Building Community, From FIT to EVE
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Elin Dance Studio, our journey is a story of continuous growth, built on a strong foundation and fueled by the support of our incredible members. Every theme represents a significant step we've taken together to redefine fitness and well-being.
          </p>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:glow-cyan-strong transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Phase Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-cyan rounded-full text-white text-sm font-semibold mb-4">
                {milestone.phase}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {milestone.title}
              </h3>
              <p className="text-primary font-semibold text-lg mb-4">
                {milestone.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {milestone.description}
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-6">
                {milestone.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{highlight.label}:</span>{" "}
                      <span className="text-muted-foreground text-sm">{highlight.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  {milestone.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneJourney;
