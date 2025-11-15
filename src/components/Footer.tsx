import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Elin Dance Studio - Singapore Bungee Fitness Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">
                Elin Dance <span className="text-primary">Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Singapore's #1 bungee fitness and aerial workout studio near Alexandra. Low-impact, high-intensity training for all ages 4-66.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/elindancestudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Follow Elin Dance Studio on Instagram"
              >
                <Instagram className="w-5 h-5 text-primary hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/elindancestudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Like Elin Dance Studio on Facebook"
              >
                <Facebook className="w-5 h-5 text-primary hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Bungee Fitness Studio</h3>
            <ul className="space-y-2">
              {[
                { name: "About Bungee Workout", href: "#about" },
                { name: "Bungee Fitness Classes", href: "#classes" },
                { name: "Why Choose Us", href: "#why-choose" },
                { name: "FAQ", href: "#faq" },
                { name: "Book Trial Class", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Classes in Singapore</h3>
            <ul className="space-y-2">
              {[
                "Bungee Fitness Workout",
                "Bungee Yoga Classes",
                "Aerial Fitness Training",
                "Kids Fitness (Age 4+)",
                "Family Bungee Classes"
              ].map((classType) => (
                <li key={classType}>
                  <a 
                    href="#classes" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {classType}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Visit Our Studio</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Near Alexandra & Labrador Park MRT, Singapore</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+6512345678" className="hover:text-primary transition-colors">+65 1234 5678</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@elindance.sg" className="hover:text-primary transition-colors">hello@elindance.sg</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Elin Dance Studio - Singapore's Premier Bungee Fitness & Aerial Workout Centre. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
