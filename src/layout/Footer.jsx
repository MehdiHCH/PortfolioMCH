import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/MehdiHCH",
    label: "GitHub",
    brandClass:
      "border-slate-400/70 bg-slate-700 text-white hover:border-slate-300 hover:bg-slate-600",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/elmehdihicham",
    label: "LinkedIn",
    brandClass:
      "border-[#2a7fc7] bg-[#0a66c2] text-white hover:border-[#5ba0dc] hover:bg-[#0757a8]",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Mehdi_Hch_____",
    label: "X",
    brandClass:
      "border-white/30 bg-black text-white hover:border-white/60 hover:bg-zinc-900",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@ElMehdi_Vision",
    label: "YouTube",
    brandClass:
      "border-[#ff3333] bg-[#ff0000] text-white hover:border-[#ff6666] hover:bg-[#e60000]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/elmehdi_ia_vision/",
    label: "Instagram",
    brandClass:
      "border-pink-400/60 text-white [background:linear-gradient(135deg,#833AB4_0%,#E1306C_55%,#F77737_100%)] hover:brightness-110",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
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
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${social.brandClass}`}
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
