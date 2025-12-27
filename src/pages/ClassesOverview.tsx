import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { classNavItems } from "@/lib/navItems";
import { useSeo } from "@/hooks/useSeo";
import bungeeWorkoutImage from "@/media/Elin Dance Studio Singapore - Bungee Workout Our Team SelectedPhotos-09214.avif";
import bungeeHiiTImage from "@/media/Bungee HiiT.avif";
import bungeeOscillateImage from "@/media/Bungee Oscillation.avif";
import kidsBungeeImage from "@/media/kids bungee.avif";
import familyBungeeImage from "@/media/family bungee.avif";

// Map class hrefs to their background images
const classImageMap: Record<string, string> = {
  "/classes/bungee-workout": bungeeWorkoutImage,
  "/classes/bungee-hiit": bungeeHiiTImage,
  "/classes/bungee-oscillate": bungeeOscillateImage,
  "/classes/kids-bungee": kidsBungeeImage,
  "/classes/family-bungee": familyBungeeImage,
};

const ClassesOverview = () => {
  useSeo({
    title: "Bungee Fitness Classes Singapore | Elin Dance Studio",
    description:
      "Explore 5 bungee fitness classes in Singapore near Alexandra & Labrador Park MRT—workout, HIIT, oscillate, kids and family bungee. Book today.",
    canonicalPath: "/classes",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Bungee Fitness Classes in Singapore
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
            Choose your perfect bungee workout—low-impact, high-intensity training for all levels, near Alexandra and Labrador Park MRT.
          </p>
        </header>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12" aria-label="Bungee fitness class cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classNavItems.map((item) => {
              const backgroundImage = classImageMap[item.href];
              return (
                <Link key={item.href} to={item.href} className="block group" aria-label={`Open ${item.label} page`}>
                  <Card className="relative overflow-hidden h-full min-h-[320px] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 rounded-2xl">
                    {/* Background Image */}
                    {backgroundImage && (
                      <div className="absolute inset-0">
                        <img 
                          src={backgroundImage} 
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <CardHeader className="p-0 space-y-3 mb-4">
                        <CardTitle className="text-2xl font-bold text-foreground drop-shadow-lg">{item.label}</CardTitle>
                        <CardDescription className="text-base text-foreground/90 font-medium drop-shadow-md">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold" variant="default">
                          View class details
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <article className="mt-10 rounded-xl border bg-card text-card-foreground p-6">
            <h2 className="text-xl font-semibold">New to bungee fitness?</h2>
            <p className="mt-2 text-muted-foreground">
              Start with a trial session and experience Singapore’s signature bungee workout safely with our instructors.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link to="/classes/trial-classes">Book a trial class</Link>
              </Button>
            </div>
          </article>
        </section>
      </main>

      <AppDownload />
      <Footer />
    </div>
  );
};

export default ClassesOverview;
