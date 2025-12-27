import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/platformDetect";

const WHO2025 = () => {
  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">WHO</span>2025
            </h1>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-4">ONE SESSION BUNGEE WORKOUT</h2>
              <p className="text-xl text-muted-foreground mb-2">
                <span className="line-through">Original Price: $55</span>
              </p>
              <p className="text-3xl font-bold text-primary">
                First-Timers Trial Price: $30
              </p>
            </div>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* What is WHO2025 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is WHO2025?</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                WHO2025 is an exciting fitness campaign that brings together the best of Bungee Workout, Bungee HIIT, and Bungee Oscillate to transform the way we approach fitness. With a focus on fun, inclusivity, and effective results, WHO2025 encourages people of all ages and fitness levels to jump in and defy gravity.
              </p>
              <p>
                Bungee Workout offers a low-impact, full-body workout that improves strength, flexibility, and coordination using bungee cords for support. For a more intense challenge, Bungee HIIT combines high-intensity intervals with bungee resistance to burn fat, build muscle, and boost cardiovascular health—without stressing your joints. Bungee Oscillate adds fluid, swinging motions that enhance balance, core strength, and mobility while keeping things playful.
              </p>
              <p>
                WHO2025 is about empowering individuals to push their limits, stay motivated, and enjoy fitness like never before. It's not just a workout—it's a movement that makes fitness fun and accessible to everyone. Join us as we soar into a healthier, more active future!
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm subject="WHO2025 Enquiry" />
      <Footer />
    </div>
  );
};

export default WHO2025;
