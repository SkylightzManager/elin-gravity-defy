import { Facebook, Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import AppDownload from "@/components/AppDownload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logo} 
                alt="Elin Dance Studio - Bungee Fitness Singapore" 
                className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-bold text-gradient-cyan">Elin Dance Studio</h3>
                <p className="text-xs text-muted-foreground">Bungee Fitness Singapore</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Singapore's premier bungee fitness studio. Experience the thrill of flying while getting fit. 
              Low-impact, high-intensity workouts for all ages (4-66).
            </p>
            <p className="text-primary font-semibold text-sm italic">
              Every Mind Matters, Every Dream Counts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-muted-foreground hover:text-primary transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/instructor-certification" className="text-muted-foreground hover:text-primary transition-colors">
                  Instructor Certification
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-muted-foreground hover:text-primary transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  31 Bukit Merah Central, #04-04, Singapore 159836<br />
                  (Near Alexandra & Labrador Park MRT)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6588021827" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +65 8802 1827
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:enquiry@elindance.com.sg" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  enquiry@elindance.com.sg
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/elindancestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/elindancestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Download Our App</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Book classes, track progress, and stay updated with our mobile app.
            </p>
            <AppDownload />
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-foreground mb-3">Join Our Mailing List</h4>
              <form action="https://formsubmit.co/enquiry@elindance.com.sg" method="POST" className="flex gap-2">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Newsletter Signup - Elin Dance Studio" />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  required 
                  className="text-sm"
                />
                <Button type="submit" size="sm" className="bg-gradient-cyan hover:glow-cyan text-white">
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* We Are Also On / In Support Of Section */}
      <div className="border-t border-primary/20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            {/* We Are Also On */}
            <div>
              <h4 className="text-sm font-bold text-muted-foreground mb-3">WE ARE ALSO ON</h4>
              <a 
                href="https://www.lazada.sg/shop/elin-dance-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Lazada</span>
                </div>
              </a>
            </div>
            
            {/* In Support Of */}
            <div>
              <h4 className="text-sm font-bold text-muted-foreground mb-3">IN SUPPORT OF</h4>
              <div className="inline-block">
                <div className="bg-gradient-to-br from-pink-400 to-orange-400 px-8 py-3 rounded-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                  <div>
                    <p className="text-white font-bold">Made for Families</p>
                    <p className="text-white text-xs">By Famvues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Elin Dance Studio Pte Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
