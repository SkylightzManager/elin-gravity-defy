import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedMedia from "@/components/FeaturedMedia";
import { Tv, Newspaper, Video } from "lucide-react";

const Media = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Tv className="w-20 h-20 text-primary mx-auto mb-6 animate-fade-in" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Featured <span className="text-gradient-cyan">In Media</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Singapore's most recognized bungee fitness studio. See what the media says about Elin Dance Studio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <FeaturedMedia />
      </section>

      {/* Media Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Tv, title: "Television Features", desc: "CNA, Mediacorp, 8World" },
              { icon: Newspaper, title: "Print & Online", desc: "AsiaOne, Shin Min, ConfirmGood" },
              { icon: Video, title: "Video Content", desc: "Studio tours, class highlights, testimonials" }
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

      {/* Video Section Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Video Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden hover-lift">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Video className="w-16 h-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Media Feature {i}</h3>
                  <p className="text-muted-foreground">Featured content from leading Singapore media outlets</p>
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

export default Media;
