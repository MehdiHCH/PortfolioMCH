import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/demos", label: "Demos" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Use setTimeout to ensure the section exists before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, scroll directly
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          to="/"
          aria-label="EL MEHDI HICHAM home"
          className="whitespace-nowrap text-base font-bold tracking-tight hover:text-primary sm:text-lg lg:text-xl"
        >
          EL MEHDI <span className="text-primary">HICHAM</span>
        </Link>

        {/* Center - Nav Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    navigate(link.href);
                    setIsMobileMenuOpen(false);
                  } else {
                    handleNavigation(link.href);
                  }
                }}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle - Inside glass container */}
            <ThemeToggle />
          </div>
        </div>

        {/* Right - CTA Button */}
        <div className="hidden md:block">
          <Button 
            size="sm"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    navigate(link.href);
                    setIsMobileMenuOpen(false);
                  } else {
                    handleNavigation(link.href);
                  }
                }}
                className="text-lg text-muted-foreground hover:text-foreground py-2 text-left"
              >
                {link.label}
              </button>
            ))}

            <div className="flex items-center gap-2 py-2">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>

            <Button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
