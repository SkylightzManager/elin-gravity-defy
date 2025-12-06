import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import AppDownload from "@/components/AppDownload";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Corporate Teambuilding", path: "/corporate-teambuilding-singapore" },
  ];

  const classesDropdown = [
    { label: "Bungee Workout", path: "/classes/bungee-workout-singapore" },
    { label: "Bungee HIIT", path: "/classes/bungee-hiit-singapore" },
    { label: "Bungee Oscillate", path: "/classes/bungee-oscillate-singapore" },
    { label: "Kids Bungee", path: "/classes/kids-bungee-singapore" },
    { label: "Family Bungee", path: "/classes/family-bungee-singapore" },
  ];

  const promotionsDropdown = [
    { label: "WHO2025", path: "/promotions/who2025-bungee-fitness" },
    { label: "Anniversary", path: "/promotions/anniversary-deals" },
    { label: "Heart of Society", path: "/promotions/heart-of-society" },
    { label: "Kids Bungee", path: "/promotions/kids-bungee-promo" },
    { label: "Trial Class", path: "/promotions/bungee-trial-class-singapore" },
    { label: "Instructor Certification", path: "/bungee-instructor-certification-singapore" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20' 
          : 'bg-background/80 backdrop-blur-sm border-b border-primary/10'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logo} 
                alt="Elin Dance Studio - Bungee Fitness Singapore" 
                className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="hidden lg:block">
                <h1 className="text-xl font-bold text-gradient-cyan">Elin Dance Studio</h1>
                <p className="text-xs text-muted-foreground">Singapore's Premier Bungee Fitness Studio</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              {/* Classes Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <span>Classes</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {classesDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Promotions Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <span>Promotions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {promotionsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about-elin-dance-studio"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                to="/contact-us"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* App Download Buttons */}
              <div className="flex items-center space-x-2">
                <AppDownload />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-primary/20 shadow-lg animate-slide-in-right max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Classes Dropdown (Mobile) */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold text-muted-foreground mb-2">CLASSES</p>
                {classesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 pl-4 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Promotions Dropdown (Mobile) */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold text-muted-foreground mb-2">PROMOTIONS</p>
                {promotionsDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 pl-4 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/about-elin-dance-studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium border-t border-border pt-4"
              >
                About Us
              </Link>

              <Link
                to="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </Link>

              {/* App Download Buttons (Mobile) */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-bold text-muted-foreground mb-3">DOWNLOAD APP</p>
                <AppDownload />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
