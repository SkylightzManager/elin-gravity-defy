import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Tan",
    role: "First-time Participant",
    rating: 9,
    text: "An extremely fun and new way to exercise! The sensation of flying is incredible. The instructors are professional and make you feel safe throughout. Highly recommend for anyone looking to try something different!",
    image: "DT",
  },
  {
    name: "Sarah Lim",
    role: "Regular Member",
    rating: 10,
    text: "Best workout studio in Singapore! I've tried many fitness classes but nothing compares to the energy and excitement of bungee fitness. Lost 5kg in 2 months and had so much fun doing it.",
    image: "SL",
  },
  {
    name: "Marcus Wong",
    role: "Bungee Yoga Enthusiast",
    rating: 10,
    text: "The bungee yoga sessions have transformed my flexibility and core strength. The combination of yoga and bungee support allows for poses I never thought possible. Absolutely addictive!",
    image: "MW",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-cyan rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            What Our <span className="text-gradient-cyan">Flyers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our amazing community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card-dark p-8 rounded-2xl hover:glow-cyan transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(testimonial.rating / 2) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  />
                ))}
                <span className="ml-2 text-primary font-bold">{testimonial.rating}/10</span>
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.image}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Happy Flyers" },
            { value: "1000+", label: "Classes Conducted" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl text-center animate-fade-in hover:glow-cyan transition-all duration-300"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-gradient-cyan mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
