import { Github, Linkedin, Twitter } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MehdiHCH",
    label: "GitHub",
    color: "border-slate-400/40 bg-slate-700 text-white hover:bg-slate-600",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/elmehdihicham",
    label: "LinkedIn",
    color: "border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-[#0958a8]",
  },
  {
    icon: Twitter,
    href: "https://x.com/Mehdi_Hch_____",
    label: "Twitter / X",
    color: "border-slate-500 bg-black text-white hover:bg-slate-900",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@ElMehdi_Vision",
    label: "YouTube",
    color: "border-[#FF0000] bg-[#FF0000] text-white hover:bg-[#d90000]",
    brandIcon: true,
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/elmehdi_ia_vision/",
    label: "Instagram",
    color:
      "border-[#E1306C] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white hover:brightness-110",
    brandIcon: true,
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
              aria-label="Back to the top"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              EL MEHDI <span className="text-primary">HICHAM</span>
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
                title={social.label}
                className={`border p-2.5 rounded-full shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${social.color}`}
              >
                <social.icon
                  className="h-5 w-5"
                  strokeWidth={social.brandIcon ? undefined : 2.2}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
