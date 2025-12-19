import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Dumbbell, Zap, Activity, Users, Heart } from "lucide-react";

const classData = [
  {
    title: "Bungee Workout",
    description: "Low impact, high intensity cardio workout that enables you to fly",
    icon: Dumbbell,
    link: "/classes/bungee-workout"
  },
  {
    title: "Bungee HIIT",
    description: "High-intensity interval training with bungee resistance for maximum results",
    icon: Zap,
    link: "/classes/bungee-hiit"
  },
  {
    title: "Bungee Oscillate",
    description: "Rhythmic fluid movements for balance, coordination and agility",
    icon: Activity,
    link: "/classes/bungee-oscillate"
  },
  {
    title: "Kids Bungee",
    description: "Fun and energetic fitness program designed specifically for children",
    icon: Heart,
    link: "/classes/kids-bungee"
  },
  {
    title: "Family Bungee",
    description: "Bounce, bond and build strength together as a family",
    icon: Users,
    link: "/classes/family-bungee"
  }
];

const ClassCards = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient-cyan">Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect bungee fitness class for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {classData.map((classItem, index) => (
            <Link to={classItem.link} key={index}>
              <Card 
                className="glass-card p-6 rounded-2xl hover:glow-cyan transition-all duration-500 transform hover:-translate-y-2 animate-fade-in cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-cyan rounded-full flex items-center justify-center mb-4">
                    <classItem.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{classItem.title}</h3>
                  <p className="text-sm text-muted-foreground">{classItem.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassCards;
