import { Brain, Crosshair, Gauge, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Computer Vision",
    description:
      "Building intelligent systems for real-time object detection, tracking, and scene understanding.",
  },
  {
    icon: Crosshair,
    title: "Geometric Vision",
    description:
      "Camera calibration, homography, and image-to-pitch coordinate mapping from a single uncalibrated camera.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing ML pipelines with TensorRT, CUDA, and asynchronous processing for real-time inference.",
  },
  {
    icon: Gauge,
    title: "Measurement Reliability",
    description:
      "Reporting coverage, missed detections, and confidence alongside every tactical metric.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Transforming video into
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                intelligent insights.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Vision Engineer specialized in real-time sports
                analytics and multi-object tracking. I build TactiVision, an
                independent R&amp;D project that turns broadcast video into
                structured tactical data using TensorRT, CUDA Streams,
                homography, pose estimation, OCR, and re-identification.
              </p>
              <p>
                I work extensively with object detection (YOLOv8/11),
                multi-object tracking (ByteTrack, DeepSORT, OSNet ReID), pose
                estimation, and temporal action recognition — deployed as
                TensorRT FP16 engines for real-time inference. Previously, I
                contributed to production AI systems at SportScore and Priori
                Sports, with a strong focus on scalable, production-ready
                computer vision pipelines.
              </p>
              <p>
                Every output is designed to expose its own limits: coverage,
                missed detections, and confidence are reported alongside
                tactical metrics so analysts can judge whether a number is
                trustworthy.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “Vision systems that report what they measured, what they
                missed, and how confident they are — because a number without
                its coverage isn't analysis.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
