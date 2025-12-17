import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dumbbell, Brain, Heart, Flame, Feather, Award, Shield } from "lucide-react";
import { getBookingUrl } from "@/lib/platformDetect";

const BungeeWorkout = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Dumbbell, title: "Strength Building", description: "Build upper body, leg, and core body strengths" },
    { icon: Brain, title: "Psychomotor", description: "Body and mind coordination" },
    { icon: Heart, title: "Stress Relieve", description: "Improves your mental well-being" },
    { icon: Flame, title: "Weight Loss", description: "Burns on average 500 calories in an hour session" },
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
              Bungee <span className="text-primary">Workout</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              Defy Gravity, Redefine Fitness.
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

      {/* What is Bungee Workout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is Bungee Workout?</h2>
            <p className="text-xl text-primary font-medium text-center mb-8">
              Low Impact, High Intensity cardio workout that enables you to fly
            </p>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Bungee Workout involves being attached to a harness and bungee cord that is in turn attached to a structure mounted to the ceiling. The bungee cord supports your weight while you jump, fly and dive, allowing you to leap into the air like you never thought possible!
              </p>
              <p>
                Bungee Workout is a combination of cardio exercise, strength training, and full body-workout all lumped into one workout session. At Elin Dance Studio, we have specially curated classes to tone up your entire body from the core to your arms to your calves.
              </p>
              <p>
                And aside from working those muscles, you get the sensation of flying just like with Bungee Jumping, albeit without the freefall sensation, where you have so much fun and forget that you are working those muscles.
              </p>
              <p>
                Our 1-star classes are beginner-friendly and the beginner set keeps you active and constantly moving in different directions. Exercising with the bungee cord enables your body to do exercises that could be too difficult or impossible without the bungee.
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

      {/* Testimonial */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">★</span>
                ))}
              </div>
              <blockquote className="text-lg italic text-foreground mb-6">
                "I've been doing bungee (fitness) this class since the start of the year and I'm glad there is now different levels so that you can see your progress each session. Super happy to have found a unique exercise that combines choreo and cardio, yet not too dance-y. Plus, you get to fly! Like literally. 👍"
              </blockquote>
              <p className="font-semibold text-foreground">Nadia B</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center mt-8">
              <blockquote className="text-lg italic text-foreground mb-4">
                "The "fitness" option, which is described as stress-relieving, incorporates movements like jumps and dives. For those who just want to have fun, there's a "family" option where parents and children can exercise together, as well as a rhythmic "bungee dance" class that is for more experienced participants."
              </blockquote>
              <p className="text-primary font-semibold">Read More at: Channel News Asia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16">
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
              <input type="hidden" name="_subject" value="Bungee Workout Enquiry" />
              
              <div>
                <Input name="name" placeholder="Name" required className="bg-card" />
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

export default BungeeWorkout;
