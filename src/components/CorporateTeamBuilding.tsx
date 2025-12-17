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

        {/* Collaborated With */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Collaborated with:</h3>
          <p className="text-muted-foreground">(Partner logos would be displayed here)</p>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">★</span>
              ))}
            </div>
            <blockquote className="text-lg italic text-foreground text-center mb-6">
              "Love the bungee fitness session at Elin Dance studio. All my friends and colleagues enjoyed the session. 
              The instructors were very patient to guide us through in a fun way. Definitely, a great choice for team 
              bonding and gathering activities for friends & family. Check it out now!"
            </blockquote>
            <p className="text-center font-semibold text-foreground">- Joey LH, from Sisley Singapore Pte Ltd</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">Book a Session</h2>
          <form
            action="https://formsubmit.co/enquiry@elindance.com.sg"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Corporate Teambuilding Booking" />
            
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Name" required className="bg-card" />
              <Input name="email" type="email" placeholder="Email" required className="bg-card" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select 
                name="time_slot" 
                className="w-full h-10 px-3 rounded-md border border-input bg-card text-foreground"
                required
              >
                <option value="">Time Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
              <Input name="phone" type="tel" placeholder="Phone" required className="bg-card" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="date" type="date" placeholder="Select a date" required className="bg-card" />
              <Input name="group_size" type="number" placeholder="Group Size" min="1" required className="bg-card" />
            </div>
            <div>
              <Input name="company" placeholder="Company" required className="bg-card" />
            </div>

            <p className="text-sm text-muted-foreground">
              Disclaimer: Class availability depends on the number of pax.
            </p>
            
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CorporateTeamBuilding;
