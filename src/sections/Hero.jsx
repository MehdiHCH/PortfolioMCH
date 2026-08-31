import { Button } from "@/components/Button";
import { Suspense, lazy, useEffect, useState } from "react";
import { CalendarDays, ChevronDown, FileText } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// separate chunk: only fetched once we know WebGPU is available
const HeroDepthScene = lazy(() => import("@/components/HeroDepthScene"));

const skills = [
  "Python",
  "C/C++",
  "PyTorch",
  "TensorFlow",
  "YOLOv8/11",
  "ByteTrack",
  "DeepSORT",
  "OSNet ReID",
  "OpenCV",
  "Pose Estimation",
  "Segmentation",
  "Homography",
  "Camera Calibration",
  "CUDA Streams",
  "TensorRT",
  "ONNX",
  "Docker",
  "MLOps",
  "AWS",
  "FastAPI",
  "PaddleOCR",
  "ROS2",
  "Git",
];

const accentDots = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  duration: 15 + ((index * 7) % 20),
  delay: (index * 3) % 5,
}));

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

export const Hero = () => {
  const [depthReady, setDepthReady] = useState(false);

  const bookAdvisoryCall = () => {
    window.dispatchEvent(
      new CustomEvent("portfolio:select-service", {
        detail: {
          message:
            "Hi El Mehdi, I'm interested in your AI & Computer Vision Advisory service at €50/hour. I'd like to discuss the scope and level of involvement...",
        },
      }),
    );

    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Desktop only: a phone with WebGPU would still pay 1.5MB and burn battery
    // running the shader, and the looping clip reads just as well at that size.
    if (window.innerWidth < 1024) return;
    if (!navigator.gpu) return;
    let cancelled = false;
    navigator.gpu
      .requestAdapter()
      .then((adapter) => {
        if (adapter && !cancelled) setDepthReady(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background: the tracker's own output.
          Where WebGPU exists we render the frame with its depth map so the
          tracking labels parallax against the pitch; everywhere else the
          looping clip plays instead. three.js only downloads in the first
          case, so nobody pays for a renderer they cannot run. */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-loop-poster.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {depthReady ? (
          <div className="absolute inset-0 opacity-40">
            <Suspense fallback={null}>
              <HeroDepthScene />
            </Suspense>
          </div>
        ) : (
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}hero-loop-poster.webp`}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src={`${import.meta.env.BASE_URL}hero-loop.mp4`}
              type="video/mp4"
            />
          </video>
        )}

        <div className="hero-atmosphere absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/55 to-background" />
        {/* keeps the headline column readable over the busy tracking overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/65 to-transparent lg:to-background/5" />
      </div>

      {/* Signal-red tracking particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {accentDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-24 pt-32 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          {/* Left Column - Text Content */}
          <div className="space-y-7">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Vision Engineer • AI Engineer • Sports Analytics
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="animate-fade-in text-5xl font-bold leading-[1.08] animation-delay-100 md:text-6xl xl:text-[5rem]">
                Designing intelligent
                <br />
                <span className="text-primary glow-text">vision systems</span>
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  for real-world impact.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm EL MEHDI HICHAM — a Computer Vision Engineer
                specialized in real-time sports analytics and multi-object
                tracking. Builder of TactiVision, an independent R&amp;D project
                that turns broadcast video into structured tactical data using
                TensorRT, CUDA Streams, homography, pose estimation, OCR, and
                re-identification. Previously contributed to AI systems at{" "}
                <a
                  href="https://www.linkedin.com/company/sport-score/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle text-[1.16em] font-bold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/img/companies/sportscore-logo.png`}
                    alt=""
                    className="h-7 w-7 rounded-md border border-emerald-400/50 bg-black object-contain p-0.5"
                  />
                  SportScore
                </a>
                and{" "}
                <a
                  href="https://www.linkedin.com/company/priori-sports-performance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-flex items-center gap-1.5 whitespace-nowrap align-middle text-[1.16em] font-bold text-sky-400 transition-colors hover:text-sky-300"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/img/companies/priori-sports-logo.png`}
                    alt=""
                    className="h-7 w-7 rounded-md border border-sky-400/40 bg-black object-contain p-0.5"
                  />
                  Priori Sports
                </a>
                {", "}with a strong focus on scalable, production-ready
                computer vision pipelines.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href={`${import.meta.env.BASE_URL}CV.pdf`}
                download="EL_MEHDI_HICHAM_CV.pdf"
                aria-label="Download EL MEHDI HICHAM resume"
                className="flex min-w-60 items-center justify-center gap-2 rounded-full border border-primary px-8 py-4 text-lg font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FileText className="h-5 w-5" />
                Resume
              </a>
              <Button
                size="lg"
                onClick={bookAdvisoryCall}
                className="min-w-72 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <CalendarDays className="h-5 w-5" />
                Book Advisor
              </Button>
            </div>

            {/* Social Links */}
            <nav
              aria-label="Social media"
              className="flex flex-wrap items-center gap-2.5 pt-1 animate-fade-in animation-delay-400"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${social.brandClass}`}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column - Profile Image */}
            <div className="relative animate-fade-in animation-delay-300">
            <div className="relative mx-auto max-w-[39rem]">
              <div className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl" />
              <div className="portrait-halo relative aspect-square rounded-full border border-primary/90 bg-surface/35 p-2.5">
                <img
                  src={`${import.meta.env.BASE_URL}me.webp`}
                  alt="EL MEHDI HICHAM"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
               bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
               bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
