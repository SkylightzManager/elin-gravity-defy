import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Smile, Feather, Heart, Scale, Dumbbell, Leaf, Shield } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";
import { useSeo } from "@/hooks/useSeo";

const FamilyBungee = () => {
  useSeo({
    title: "Family Bungee Classes Singapore | Family Fitness Bonding | Elin Dance Studio",
    description: "Family bungee fitness classes in Singapore. Bond together while getting fit! Low-impact workout for all ages. Strengthen family bonds through fun bungee exercises. Book now!",
    keywords: "family bungee singapore, family fitness singapore, family dance classes singapore, family workout singapore, bungee for families singapore, family bonding activities singapore",
    canonicalPath: "/classes/family-bungee",
  });
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Smile, title: "Fun for All", description: "Enjoyable for the whole family." },
    { icon: Feather, title: "Low Impact", description: "Gentle on joints for all fitness levels." },
    { icon: Heart, title: "Strengthen Bonds", description: "Strengthens and tones for all." },
    { icon: Scale, title: "Improves Coordination", description: "Boosts balance and body awareness." },
    { icon: Dumbbell, title: "Better Fitness", description: "Low impact on joint and ligaments" },
    { icon: Leaf, title: "Healthy Habits", description: "Encourages lifelong fitness for everyone." },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Family <span className="text-primary">Bungee Singapore</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-4">
              Bounce, Bond, and
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              Build Strength Together!
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Let your kids soar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Let your kids soar at Elin Dance Studio</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                A Family Bungee Workout is a fun, dynamic fitness experience designed to bring family members of all ages together for an active, engaging workout. Using bungee cords to assist and resist movements, this workout offers a low-impact yet high-energy way to build strength, endurance, and coordination. Whether you're bouncing, jumping, or swinging through exercises, the bungee system provides support, making it easier on joints while still delivering an intense workout.
              </p>
              <p>
                This family-friendly workout is perfect for fostering teamwork, as participants work together to complete exercises, cheer each other on, and challenge one another in a playful and motivating environment. It's an excellent way for parents, kids, and even grandparents to bond while staying active and healthy. From improving flexibility and balance to burning calories, a Family Bungee Workout helps everyone develop better fitness habits, all while having fun in a safe and supportive atmosphere. Whether you're looking to get your kids moving or enjoy a unique fitness routine together, the Family Bungee Workout is an exciting way to make fitness a family affair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-card">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary" />
              <h2 className="text-3xl font-bold">Safety at Elin Dance Studio</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Custom made for Bungee Workout and not the normal ceiling structure that is similar to those that are being used for Aerial Yoga
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Enquire With Us!</h2>
            <form
              action="https://formsubmit.co/skylightzmanager@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Family Bungee Class Booking - Elin Dance Studio" />
              <input type="hidden" name="class_type" value="Family Bungee" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?submitted=true`} />
              
              <div>
                <Input name="parent_name" placeholder="Parent Name" required className="bg-card" />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Email Address" required className="bg-card" />
              </div>
              <div>
                <select 
                  name="time_slot" 
                  className="w-full h-10 px-3 rounded-md border border-input bg-card text-foreground"
                  required
                >
                  <option value="">Preferred Time Slot</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div>
                <Input name="phone" type="tel" placeholder="Phone" required className="bg-card" />
              </div>
              <div>
                <Input name="number_of_children" type="number" placeholder="Number of Children" min="1" required className="bg-card" />
              </div>
              
              <div>
                <p className="text-sm font-medium mb-3">Choose your preferred Days *Required</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {days.map((day) => (
                    <label key={day} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox name="days" value={day} />
                      <span className="text-sm">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold">
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyBungee;
