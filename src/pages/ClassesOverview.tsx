import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { classNavItems } from "@/lib/navItems";
import { useSeo } from "@/hooks/useSeo";

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
            {classNavItems.map((item) => (
              <Link key={item.href} to={item.href} className="block group" aria-label={`Open ${item.label} page`}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-2xl">{item.label}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="secondary">
                      View class details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
