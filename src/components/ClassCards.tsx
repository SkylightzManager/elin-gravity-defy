import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import bungeeWorkoutImage from "@/media/Elin Dance Studio Singapore - Bungee Workout Our Team SelectedPhotos-09214.avif";
import bungeeHiiTImage from "@/media/Bungee HiiT.avif";
import bungeeOscillateImage from "@/media/Bungee Oscillation.avif";
import kidsBungeeImage from "@/media/kids bungee.avif";
import familyBungeeImage from "@/media/family bungee.avif";

const classData = [
  {
    title: "Bungee Workout",
    description: "Low impact, high intensity cardio workout that enables you to fly",
    link: "/classes/bungee-workout",
    image: bungeeWorkoutImage
  },
  {
    title: "Bungee HIIT",
    description: "High-intensity interval training with bungee resistance for maximum results",
    link: "/classes/bungee-hiit",
    image: bungeeHiiTImage
  },
  {
    title: "Bungee Oscillate",
    description: "Rhythmic fluid movements for balance, coordination and agility",
    link: "/classes/bungee-oscillate",
    image: bungeeOscillateImage
  },
  {
    title: "Kids Bungee",
    description: "Fun and energetic fitness program designed specifically for children",
    link: "/classes/kids-bungee",
    image: kidsBungeeImage
  },
  {
    title: "Family Bungee",
    description: "Bounce, bond and build strength together as a family",
    link: "/classes/family-bungee",
    image: familyBungeeImage
  }
];

const ClassCards = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient-cyan">Classes</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover the perfect bungee fitness class for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {classData.map((classItem, index) => (
            <Link to={classItem.link} key={index} className="group">
              <Card 
                className="relative overflow-hidden rounded-2xl hover:glow-cyan transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in cursor-pointer h-full min-h-[280px] sm:min-h-[320px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Text at bottom */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2 drop-shadow-lg">{classItem.title}</h3>
                    <p className="text-sm text-foreground/90 font-medium drop-shadow-md">{classItem.description}</p>
                  </div>
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
