import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

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

const greenDots = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  duration: 15 + ((index * 7) % 20),
  delay: (index * 3) % 5,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {greenDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Vision Engineer • AI Engineer • Sports Analytics
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
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
                tracking. Founder and Lead Engineer of TactiVision, an
                end-to-end football intelligence platform that turns broadcast
                video into tactical insights. Previously at SportScore and
                Priori Sports, building production-ready vision pipelines.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = `${import.meta.env.BASE_URL}CV.pdf`;
                  link.download = "EL_MEHDI_HICHAM_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/MehdiHCH",
                  label: "GitHub",
                  color:
                    "border-slate-400/40 bg-slate-700 text-white hover:bg-slate-600",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/elmehdihicham",
                  label: "LinkedIn",
                  color:
                    "border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-[#0958a8]",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/Mehdi_Hch_____",
                  label: "Twitter / X",
                  color: "border-slate-500 bg-black text-white hover:bg-slate-900",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@ElMehdi_Vision",
                  label: "YouTube",
                  color:
                    "border-[#FF0000] bg-[#FF0000] text-white hover:bg-[#d90000]",
                  fillIcon: true,
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${social.color}`}
                >
                  <social.icon
                    className={`h-5 w-5 ${social.fillIcon ? "fill-current" : ""}`}
                    strokeWidth={2.2}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={`${import.meta.env.BASE_URL}Me.jpeg`}
                  alt="EL MEHDI HICHAM"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge - Availability */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge - Experience */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary"> </div>
                  <div className="text-xs text-muted-foreground">
                  
                  </div>
                </div>
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
