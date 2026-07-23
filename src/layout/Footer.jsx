import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/MehdiHCH", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elmehdihicham", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Mehdi_Hch_____", label: "Twitter / X" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@ElMehdi_Vision",
    label: "YouTube",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              EL<span className="text-primary">.</span>MEHDI
            </button>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} EL MEHDI Hicham. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
