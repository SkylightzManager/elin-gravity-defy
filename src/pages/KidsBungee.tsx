import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dumbbell, Brain, Star, Users, Feather, Award, Shield } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const KidsBungee = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Dumbbell, title: "Improves Fitness", description: "Build upper body, leg, and core body strengths" },
    { icon: Brain, title: "Psychomotor", description: "Body and mind coordination" },
    { icon: Star, title: "Boost Confidence", description: "Builds courage and ability to conquer new challenges" },
    { icon: Users, title: "Promotes Teamwork", description: "Learn and grow together with friends" },
    { icon: Feather, title: "Gentle Workout", description: "Low impact on joint and ligaments" },
    { icon: Award, title: "Improves Posture", description: "Strengthens muscles, enhancing alignment and supporting better posture." },
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
              Kids <span className="text-primary">Bungee</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-4">
              $160 For First Four Lessons!
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              Give your little ones the gift of Fitness & Fun!
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
                Kids Bungee Workout is a thrilling and energetic fitness program specifically designed for children to get active, have fun, and build strength in a safe, supportive environment. By using bungee cords, kids can bounce, jump, and swing through exercises that challenge their coordination, balance, and flexibility—all while minimizing the risk of injury due to the low-impact nature of the bungee system.
              </p>
              <p>
                This workout helps children improve their motor skills, strengthen muscles, and enhance cardiovascular health, all while engaging in playful, high-energy movements. The resistance from the bungee cords adds an element of fun and excitement, making it feel more like play than exercise. Kids can work on jumping higher, running faster, or even mastering new moves as they build confidence in their physical abilities.
              </p>
              <p>
                With a focus on play, teamwork, and encouragement, Kids Bungee Workout is not only about fitness but also about building positive habits and social connections. It's the perfect way to get kids off the screen and onto their feet, promoting a love for movement and fitness that can last a lifetime. Whether for individual fun or as part of a group activity, this workout provides a safe, engaging, and motivational environment for kids to stay active and have a blast.
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
              action="https://formsubmit.co/enquiry@elindance.com.sg"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Kids Bungee Enquiry" />
              
              <div>
                <Input name="parent_name" placeholder="Parent Name" required className="bg-card" />
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

export default KidsBungee;
