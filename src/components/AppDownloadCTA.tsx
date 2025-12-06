import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/platformDetect";
import { Smartphone } from "lucide-react";

const AppDownloadCTA = () => {
  const bookingUrl = getBookingUrl();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download Our <span className="text-gradient-cyan">App</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book classes, track your progress, and manage your fitness journey - all from your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-cyan hover:opacity-90 text-white px-8 py-6 text-lg"
              onClick={() => window.open(bookingUrl, '_blank')}
            >
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
