import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Baby, Sparkles, PartyPopper } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      title: "WHO2025",
      slug: "who2025",
      icon: Sparkles,
      tagline: "Celebrate wellness with exclusive 2025 packages",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Heart of Society",
      slug: "heart-of-society",
      icon: Heart,
      tagline: "Supporting community wellness initiatives",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Kids Bungee Special",
      slug: "kids-bungee-promo",
      icon: Baby,
      tagline: "Only $160 for young flyers",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Trial Class",
      slug: "trial-class",
      icon: Gift,
      tagline: "First-time? Try for just $30 (was $55)",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Anniversary Special",
      slug: "anniversary",
      icon: PartyPopper,
      tagline: "Celebrate with us - exclusive offers",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Special <span className="text-gradient-cyan">Promotions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take advantage of our limited-time offers and special packages. Start your bungee fitness journey with incredible savings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Link key={promo.slug} to={`/${promo.slug}`} className="block">
                <div className={`glass-card rounded-2xl p-8 hover-lift animate-fade-in bg-gradient-to-br ${promo.color} bg-opacity-10`} style={{ animationDelay: `${index * 100}ms` }}>
                  <promo.icon className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="text-muted-foreground mb-6">{promo.tagline}</p>
                  <Button className="w-full bg-gradient-cyan hover:glow-cyan text-white">
                    View Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Promotions;
