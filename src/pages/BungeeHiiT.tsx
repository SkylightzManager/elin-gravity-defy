import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dumbbell, Flame, Heart, Zap, Target, Smile, Shield } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";
import { useSeo } from "@/hooks/useSeo";

const BungeeHiiT = () => {
  useSeo({
    title: "Bungee HIIT Singapore | High-Intensity Bungee Training | Elin Dance Studio",
    description: "High-intensity interval bungee training in Singapore. Full-body HIIT workout with low joint impact. Build stamina, burn calories, improve cardiovascular health. Book now!",
    keywords: "bungee hiit singapore, high intensity bungee training singapore, hiit bungee workout singapore, bungee fitness hiit, cardio bungee workout singapore, high intensity interval training singapore",
    canonicalPath: "/classes/bungee-hiit",
  });
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Dumbbell, title: "Full-Body Workout", description: "Targets core, arms, legs, and glutes for total-body strength." },
    { icon: Flame, title: "High-Intensity", description: "Intense but gentle on the joints, reducing injury risk." },
    { icon: Heart, title: "Cardio Boost", description: "High-intensity intervals improve heart health with low joint impact." },
    { icon: Zap, title: "Power & Agility", description: "Enhances explosive strength, speed, and agility." },
    { icon: Target, title: "Calorie Burn", description: "Explosive movements and resistance burns fat effectively." },
    { icon: Smile, title: "Fun & Motivating", description: "The bouncy, dynamic workout keeps you engaged and energized." },
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
              Bungee <span className="text-primary">HiiT Singapore</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-4">
              Turn your Fitness Routine
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              into a Soaring Adventure!
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

      {/* What is Bungee HiiT */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Bungee HiiT?</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bungee HIIT (High-Intensity Interval Training) is a dynamic and exhilarating workout that combines the power of bungee cords with high-intensity intervals to deliver a full-body fitness experience like no other. Participants are harnessed into specially designed bungee cords, which provide both resistance and assistance during each movement, allowing for explosive jumps, sprints, and dynamic exercises that challenge strength, flexibility, and endurance.
              </p>
              <p>
                The unique nature of the bungee system engages muscles in new ways, offering a low-impact alternative to traditional high-intensity workouts while still delivering maximum calorie burn and muscle toning. Whether you're aiming to build strength, improve cardiovascular health, or simply add excitement to your fitness routine, Bungee HIIT is an energizing and fun way to achieve your fitness goals while soaring through the air.
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
              <input type="hidden" name="_subject" value="Bungee HiiT Class Booking - Elin Dance Studio" />
              <input type="hidden" name="class_type" value="Bungee HiiT" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?submitted=true`} />
              
              <div>
                <Input name="name" placeholder="Name" required className="bg-card" />
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

export default BungeeHiiT;
