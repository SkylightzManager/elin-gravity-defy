import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import AppDownload from "@/components/AppDownload";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Elin Dance Studio - Singapore Bungee Fitness Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">
                Elin Dance <span className="text-primary">Studio</span>
              </span>
            </Link>
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
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  About Bungee Workout
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee Fitness Classes
                </Link>
              </li>
              <li>
                <Link 
                  to="/#why-choose" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/#faq" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Book Trial Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Classes in Singapore</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/bungee-workout" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee Fitness Workout
                </Link>
              </li>
              <li>
                <Link 
                  to="/bungee-oscillate" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee Yoga Classes
                </Link>
              </li>
              <li>
                <Link 
                  to="/bungee-hiit" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Aerial Fitness Training
                </Link>
              </li>
              <li>
                <Link 
                  to="/kids-bungee" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Kids Fitness (Age 4+)
                </Link>
              </li>
              <li>
                <Link 
                  to="/family-bungee" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Family Bungee Classes
                </Link>
              </li>
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

        {/* App Download Section */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Download Our App</h3>
            <p className="text-muted-foreground text-sm">Book classes on the go</p>
          </div>
          <div className="flex justify-center">
            <AppDownload />
          </div>
        </div>

        {/* Partnership Section */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">We Are Also On:</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.lazada.sg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-500 to-purple-600 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <span className="text-white font-bold">Lazada</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">In support of:</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.famvues.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-400 to-orange-400 px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Heart className="w-5 h-5 text-white" fill="white" />
                  <span className="text-white font-bold">Famvues</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Elin Dance Studio - Singapore's Premier Bungee Fitness & Aerial Workout Centre. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;