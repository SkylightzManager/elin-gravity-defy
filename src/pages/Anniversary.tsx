import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Anniversary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              ELIN DANCE STUDIO <span className="text-primary">4 YEARS</span> ANNIVERSARY
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-9xl font-bold text-gradient-cyan mb-4">4</div>
                <p className="text-2xl font-semibold text-foreground">Years of Flying High</p>
                <p className="text-muted-foreground mt-4">
                  Thank you for being part of our incredible journey. Here's to many more years of defying gravity together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anniversary;
