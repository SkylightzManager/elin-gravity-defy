import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Target, Users } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-gradient-cyan">Elin Dance Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Singapore's pioneer in bungee fitness and aerial workouts. Transforming lives through gravity-defying movement since our inception.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Our Mission", desc: "To make fitness fun, accessible, and transformative for every Singaporean through innovative bungee training." },
              { icon: Heart, title: "Our Vision", desc: "To be Singapore's leading wellness destination where every individual discovers their strength and confidence." },
              { icon: Users, title: "Our Values", desc: "Safety, inclusivity, excellence, and joy in every class. Every mind matters, every dream counts." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl text-center hover-lift">
                <item.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Elin Dance Studio was born from a vision to revolutionize fitness in Singapore. As the city-state's premier bungee fitness facility, we've created a space where individuals of all ages and fitness levels can experience the joy of defying gravity while achieving their health goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Located near Alexandra and Labrador Park MRT, our state-of-the-art studio features professional bungee equipment, expert instructors, and a welcoming community. We're proud to serve families, corporate teams, fitness enthusiasts, and everyone in between.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recognized by CNA, Mediacorp, AsiaOne, and other leading media outlets, Elin Dance Studio continues to set the standard for innovative fitness solutions in Singapore. We're honored to be a President's Star Charity partner and to support initiatives like Heart of Society.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Instructors</h2>
          <div className="max-w-3xl mx-auto text-center">
            <img src={instructorImg} alt="Elin Dance Studio Instructor" className="rounded-2xl shadow-2xl mb-8 mx-auto" />
            <p className="text-lg text-muted-foreground mb-8">
              Our certified instructors bring expertise in bungee fitness, aerial training, dance, and wellness. Each team member is passionate about helping you achieve your fitness goals safely and joyfully.
            </p>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Bungee Fitness", "Aerial Training", "HIIT", "Kids Fitness", "Corporate Wellness", "Injury Prevention", "Nutrition Guidance"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Recognized Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured by CNA, Mediacorp, AsiaOne, 8World, ConfirmGood, Shin Min, and more. Proud partner of President's Star Charity and supporter of Heart of Society initiatives.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
