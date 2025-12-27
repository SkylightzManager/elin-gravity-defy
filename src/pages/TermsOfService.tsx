import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
              Terms of <span className="text-gradient-cyan">Service</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Elin Dance Studio website (www.elindancestudio.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily access the materials on Elin Dance Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Class Bookings and Payments</h2>
                <p>
                  All class bookings are subject to availability. Payment must be made in advance to secure your booking. Cancellations and refunds are subject to our cancellation policy as outlined at the time of booking.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Health and Safety</h2>
                <p>
                  Participants must disclose any medical conditions or physical limitations before participating in classes. Elin Dance Studio reserves the right to refuse participation if we believe it may be unsafe for the individual or others.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p>
                  Elin Dance Studio shall not be liable for any damages arising out of your use of the website or participation in our classes, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to Terms</h2>
                <p>
                  Elin Dance Studio may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Elin Dance Studio</p>
                  <p>Email: <a href="mailto:enquiry@elindance.com.sg" className="text-primary hover:underline">enquiry@elindance.com.sg</a></p>
                  <p>Address: 450 Alexandra Road, #02-01, Singapore 119960</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;

