import { Users, Heart, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Team Bonding",
    description: "Strengthen workplace relationships through shared challenges and fun activities that bring teams closer together.",
  },
  {
    icon: Heart,
    title: "Employee Wellness",
    description: "Show your team you care with engaging wellness programs that reduce stress and boost morale.",
  },
  {
    icon: Target,
    title: "Build Confidence",
    description: "Help your team overcome challenges together, building confidence and trust in a supportive environment.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Energized, connected teams perform better. Our sessions create lasting positive impacts on workplace culture.",
  },
];

const suitableFor = [
  "Both males and females",
  "All fitness levels welcome",
  "Ages 18 to 65+",
  "Groups of 8-20 people",
];

const CorporateTeamBuilding = () => {
  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Corporate <span className="text-gradient-cyan">Team Building</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your team with an unforgettable bungee fitness experience! Perfect for team bonding, 
            staff appreciation events, and corporate wellness programs in Singapore.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Benefits */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold mb-8">Why Choose Bungee for Team Building?</h3>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Details & Suitability */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Suitable For Card */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Perfect For Everyone</h3>
              <div className="space-y-4">
                {suitableFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-cyan rounded-full" />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Maximum weight:</strong> 100kg per participant
                </p>
              </div>
            </div>

            {/* Corporate Packages */}
            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10">
              <h3 className="text-2xl font-bold mb-4">Corporate Packages Include:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Professional instructors and safety equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Customizable sessions for your team's goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Fun, energizing activities that feel like play</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Memorable experience your team will rave about</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                className="bg-gradient-cyan hover:glow-cyan text-white font-semibold px-8 py-6 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Corporate Session
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Contact us for group rates and custom packages
              </p>
            </div>
          </div>
        </div>

        {/* Themes Section */}
        <div className="glass-card p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6">Choose Your Theme</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Corporate Wellness", desc: "Health-focused activities" },
              { title: "Stress Relief", desc: "Unwind and recharge" },
              { title: "Team Bonding", desc: "Build stronger connections" },
              { title: "Fitness Challenge", desc: "Fun competitive activities" },
            ].map((theme, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-xl hover:from-primary/20 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{theme.title}</h4>
                <p className="text-sm text-muted-foreground">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Trusted By Leading Companies</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg italic text-foreground mb-6">
                "Love the bungee fitness session at Elin Dance studio. All my friends and colleagues enjoyed the session. 
                The instructors were very patient to guide us through in a fun way. Definitely, a great choice for team 
                bonding and gathering activities for friends & family. Check it out now!"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-cyan rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Corporate Client</p>
                  <p className="text-sm text-muted-foreground">Team Building Session</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Join the growing list of Singapore companies who have chosen us for their team building and wellness programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Corporate Events", "Team Building", "Wellness Programs", "Staff Appreciation"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTeamBuilding;
