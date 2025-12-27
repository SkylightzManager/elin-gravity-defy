import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
              Privacy <span className="text-gradient-cyan">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p>
                  Welcome to Elin Dance Studio! We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.elindancestudio.com. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the site includes:
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, address, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat, site forms, message boards.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Derivative Data</h3>
                <p>
                  Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Financial Data</h3>
                <p>
                  Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site. We store only very limited, if any, financial information that we collect.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Your Information</h2>
                <p className="mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create and manage your account.</li>
                  <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                  <li>Personalize and improve the site and our services.</li>
                  <li>Communicate with you about promotions, upcoming events, and other news about our products and services.</li>
                  <li>Protect the security and integrity of the site and our business.</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclosure of Your Information</h2>
                <p className="mb-4">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">By Law or to Protect Rights</h3>
                <p>
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Third-Party Service Providers</h3>
                <p>
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Policy for Children</h2>
                <p>
                  We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;

