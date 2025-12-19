import { Users, User, Baby, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const suitableFor = [
  { icon: Users, text: "Both Females and Males" },
  { icon: User, text: "Beginners & Physically inactive" },
  { icon: Baby, text: "Young or Old, For all ages" },
  { icon: Scale, text: "Max weight: 100kg" },
];

const themes = [
  "Corporate Wellness",
  "Stress Relieve",
  "Fitness Regime",
  "Team Bonding",
];

const CorporateTeamBuilding = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
          <p className="text-primary font-semibold mb-2">CORPORATE TEAMBUILDING | TEAM BONDING</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            An Unforgettable Teambuilding <span className="text-gradient-cyan">Fun for Everyone</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground">Corporate Workshop for Team Building and Bonding!</h2>
            <p className="text-lg">Bungee Workout away all the stress and build stronger bonds with your employees!</p>
            <p>
              At Elin Dance Studio, we offer corporate workshops for team bonding, staff appreciation, corporate milestone celebrations or just simply to boost staff morale!
            </p>
            <p>
              Our most popular class, Bungee Workout, appeals to a wide range of participants - from energetic young adults to vibrant seniors over 65.
            </p>
            <p className="font-medium text-foreground">
              Many rave about how enjoyable it is, feeling more like play than exercise!
            </p>
          </div>

          {/* Themes */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold mb-4">Themes to choose from:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {themes.map((theme, index) => (
                <span key={index} className="px-4 py-2 bg-primary/10 rounded-full text-foreground font-medium">
                  • {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Suitable For Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Suitable for:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suitableFor.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateTeamBuilding;
