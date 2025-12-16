import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { getBookingUrl } from "@/lib/platformDetect";
import { classNavItems, promotionNavItems } from "@/lib/navItems";

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

  const classesDropdown = classNavItems;
  const promotionsDropdown = promotionNavItems;

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
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Elin Dance Studio" 
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Elin Dance <span className="text-primary">Studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            
            {/* Classes Dropdown */}
            <div className="relative group">
              <Link
                to="/classes"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1"
              >
                Classes
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                <div className="grid grid-cols-2 gap-3">
                  {classesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group/card"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover/card:text-primary transition-colors">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Promotions Dropdown */}
            <div className="relative group">
              <Link
                to="/promotions"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1"
              >
                Promotions
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                <div className="grid grid-cols-1 gap-3">
                  {promotionsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group/card"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover/card:text-primary transition-colors">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/corporate-teambuilding"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Corporate Teambuilding
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
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
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              About
            </Link>
            
            {/* Mobile Classes Dropdown */}
            <div className="border-t border-border pt-4">
              <Link
                to="/classes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground mb-3 inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                Classes
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="grid grid-cols-1 gap-2">
                {classesDropdown.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Promotions Dropdown */}
            <div className="border-t border-border pt-4">
              <Link
                to="/promotions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground mb-3 inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                Promotions
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="grid grid-cols-1 gap-2">
                {promotionsDropdown.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/corporate-teambuilding"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 border-t border-border pt-2"
            >
              Corporate Teambuilding
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              Contact Us
            </Link>

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
