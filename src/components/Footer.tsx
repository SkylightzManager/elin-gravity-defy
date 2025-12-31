import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import AppDownload from "@/components/AppDownload";
import lazadaLogo from "@/media/lazada-logo-transparent-background-701751694712252ldbkvt14lk-removebg-preview.png";
import famveusLogo from "@/media/famveus.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 mb-8">
          {/* Brand & Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Elin Dance Studio - Singapore Bungee Fitness Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">
                Elin Dance <span className="text-primary">Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Singapore's #1 bungee fitness and aerial workout studio near Alexandra. Low-impact, high-intensity training for all ages 4-66.
            </p>
            <div className="flex gap-2 flex-wrap">
              <a 
                href="https://www.instagram.com/elin.dancestudio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Follow Elin Dance Studio on Instagram"
              >
                <Instagram className="w-4 h-4 text-primary hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/ElinDanceStudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Like Elin Dance Studio on Facebook"
              >
                <Facebook className="w-4 h-4 text-primary hover:text-white" />
              </a>
              <a 
                href="https://www.tiktok.com/@elindancestudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Follow Elin Dance Studio on TikTok"
              >
                <svg className="w-4 h-4 text-primary hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCyEJbt7np1KFCDemQZ7Eoxw" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Subscribe to Elin Dance Studio on YouTube"
              >
                <Youtube className="w-4 h-4 text-primary hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/elindancestudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center hover:bg-gradient-cyan transition-all duration-300"
                aria-label="Follow Elin Dance Studio on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-primary hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  All Classes
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
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-foreground font-bold mb-4 text-base">Our Classes</h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/classes/bungee-workout" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee Fitness
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes/bungee-oscillate" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee Yoga
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes/bungee-hiit" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Bungee HiiT
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes/kids-bungee" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Kids Bungee
                </Link>
              </li>
              <li>
                <Link 
                  to="/classes/family-bungee" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Family Bungee
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4 text-base">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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

        {/* Download & Partners Section */}
        <div className="border-t border-primary/20 pt-6 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Download Buttons */}
            <div className="flex-shrink-0 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
              <p className="text-foreground font-bold text-base text-center md:text-left">Download Now</p>
              <AppDownload size="large" />
            </div>

            {/* Our Partners Text */}
            <div className="flex-shrink-0 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
              <h3 className="text-foreground font-bold text-base text-center md:text-left">Our Partners</h3>
              <div className="flex items-center gap-4">
              <a 
                href="https://www.lazada.sg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white p-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <img 
                  src={lazadaLogo} 
                  alt="Lazada" 
                  className="h-10 w-auto object-contain max-w-[120px]"
                />
              </a>
              <a 
                href="https://www.famvues.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white p-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <img 
                  src={famveusLogo} 
                  alt="Famveus" 
                  className="h-10 w-auto object-contain max-w-[120px]"
                />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Elin Dance Studio - Singapore's Premier Bungee Fitness & Aerial Workout Centre. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
