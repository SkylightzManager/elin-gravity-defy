import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { getBookingUrl } from "@/lib/platformDetect";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
  ];

  const classesDropdown = [
    { label: "Bungee Workout", href: "#classes" },
    { label: "Bungee HiiT", href: "#classes" },
    { label: "Bungee Oscillate", href: "#classes" },
    { label: "Kids Bungee", href: "#classes" },
    { label: "Family Bungee", href: "#classes" },
    { label: "Trial Classes", href: "#classes" },
  ];

  const promotionsDropdown = [
    { label: "WHO2025", href: "#promotions" },
    { label: "Anniversary", href: "#promotions" },
    { label: "Heart of Society", href: "#promotions" },
  ];

  const handleBookNow = () => {
    const bookingUrl = getBookingUrl();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card border-b border-primary/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Elin Dance Studio" 
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Elin Dance <span className="text-primary">Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Classes Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
                Classes
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {classesDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Promotions Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
                Promotions
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {promotionsDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#corporate"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Corporate Teambuilding
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleBookNow}
              className="bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-primary/30 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Classes Dropdown */}
            <div className="border-t border-border pt-2">
              <p className="font-semibold text-foreground mb-2">Classes</p>
              {classesDropdown.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-1 pl-4"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Promotions Dropdown */}
            <div className="border-t border-border pt-2">
              <p className="font-semibold text-foreground mb-2">Promotions</p>
              {promotionsDropdown.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-1 pl-4"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#corporate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 border-t border-border pt-2"
            >
              Corporate Teambuilding
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              Contact Us
            </a>

            <Button 
              onClick={handleBookNow}
              className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
