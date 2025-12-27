import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Scale, Move, Heart, Feather, Smile, Shield } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const BungeeOscillate = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Target, title: "Improved Core", description: "Engages abs and back for better stability." },
    { icon: Scale, title: "Balance Stability", description: "Enhances body awareness and coordination" },
    { icon: Move, title: "Flexibility", description: "Improves joint mobility and range of motion." },
    { icon: Heart, title: "Cardio Endurance", description: "Boosts heart health with varied intensity" },
    { icon: Feather, title: "Low-Impact", description: "Intense but gentle on joints" },
    { icon: Smile, title: "Fun", description: "Playful and motivating for better results" },
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
              Bungee <span className="text-primary">Oscillate</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-4">
              Bounce into Balance,
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              Flow into Fitness!
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

      {/* What is Bungee Oscillate */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Bungee Oscillate?</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bungee Oscillate is a cutting-edge workout that fuses the power of bungee cords with rhythmic, fluid movements to create a unique blend of strength, mobility, and cardio. In this workout, participants are harnessed into bungee cords that allow them to experience oscillating motions, which means you'll be swinging, bouncing, and gliding through exercises that focus on balance, coordination, and agility.
              </p>
              <p>
                The bungee's dynamic resistance offers a fun and effective way to challenge your core stability while also improving flexibility and joint mobility. As you move through controlled oscillations, you engage both fast- and slow-twitch muscle fibers, enhancing muscle tone and endurance. With its low-impact nature, Bungee Oscillate provides a safe yet intense workout for all fitness levels, making it ideal for anyone looking to build functional strength, improve posture, or just enjoy a playful and energizing fitness experience.
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
              <input type="hidden" name="_subject" value="Bungee Oscillate Class Booking - Elin Dance Studio" />
              <input type="hidden" name="class_type" value="Bungee Oscillate" />
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

export default BungeeOscillate;
