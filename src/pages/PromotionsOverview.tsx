import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { promotionNavItems } from "@/lib/navItems";
import { useSeo } from "@/hooks/useSeo";

const PromotionsOverview = () => {
  useSeo({
    title: "Bungee Fitness Promotions Singapore | Elin Dance Studio",
    description:
      "See current bungee fitness promotions in Singapore—WHO2025, Anniversary specials and Heart of Society community offers. Limited-time deals.",
    canonicalPath: "/promotions",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Bungee Fitness Promotions in Singapore
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
            Discover limited-time offers and community initiatives from Elin Dance Studio—near Alexandra and Labrador Park MRT.
          </p>
        </header>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12" aria-label="Promotion cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotionNavItems.map((item) => (
              <Link key={item.href} to={item.href} className="block group" aria-label={`Open ${item.label} promotion page`}>
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
                      View promotion
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PromotionsOverview;
