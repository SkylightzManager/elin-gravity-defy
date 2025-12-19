import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
  {
    name: "Nadia B",
    role: "Regular Member",
    rating: 10,
    text: "I've been doing bungee fitness since the start of the year and I'm glad there is now different levels so that you can see your progress each session. Super happy to have found a unique exercise that combines choreo and cardio. Plus, you get to fly!",
    image: "NB",
  },
  {
    name: "Joey LH",
    role: "Corporate Team",
    rating: 10,
    text: "Love the bungee fitness session at Elin Dance studio. All my friends and colleagues enjoyed the session. The instructors were very patient to guide us through in a fun way. Definitely a great choice for team bonding!",
    image: "JL",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-light relative overflow-hidden">
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

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card p-8 rounded-2xl">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(testimonial.rating / 2) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                        />
                      ))}
                      <span className="ml-2 text-primary font-bold">{testimonial.rating}/10</span>
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-center text-lg">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.image}</span>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{testimonial.name}</p>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
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
