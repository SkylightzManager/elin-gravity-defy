import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import classActionImg from "@/assets/class-action.jpg";
import bungeeYogaImg from "@/assets/bungee-yoga.jpg";

const Classes = () => {
  const classes = [
    {
      title: "Bungee Workout",
      slug: "bungee-workout",
      tagline: "Full-body transformation through aerial resistance training",
      image: classActionImg
    },
    {
      title: "Bungee HIIT",
      slug: "bungee-hiit",
      tagline: "High-intensity intervals for maximum calorie burn",
      image: bungeeYogaImg
    },
    {
      title: "Bungee Oscillate",
      slug: "bungee-oscillate",
      tagline: "Mindful movement and flowing transitions in the air",
      image: classActionImg
    },
    {
      title: "Kids Bungee",
      slug: "kids-bungee",
      tagline: "Fun, safe fitness for children aged 4-12",
      image: bungeeYogaImg
    },
    {
      title: "Family Bungee",
      slug: "family-bungee",
      tagline: "Bond together while flying together (ages 4-66)",
      image: classActionImg
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient-cyan">Classes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Singapore's most innovative bungee fitness programs. From high-intensity workouts to family fun, we have the perfect class for everyone.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls, index) => (
              <div key={cls.slug} className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-64 overflow-hidden">
                  <img src={cls.image} alt={cls.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{cls.title}</h3>
                  <p className="text-muted-foreground mb-6">{cls.tagline}</p>
                  <Link to={`/${cls.slug}`}>
                    <Button className="w-full bg-gradient-cyan hover:glow-cyan text-white group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Classes;
