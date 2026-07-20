const experiences = [
  {
    period: "May 2026 — June 2026",
    role: "Computer Vision Engineer (Contract)",
    company: "Priori Sports, Inc. — San Francisco, USA (Remote)",
    description:
      "Developed AI and computer vision solutions for football spatial tracking, including homography-based projection systems and tracking pipeline optimization. Built ball trajectory modeling and airborne ball localization using tracking data and spatial correction techniques, contributing to real-time sports analytics workflows and visualization tools.",
    technologies: ["Python", "PyTorch", "OpenCV", "Homography", "CUDA", "TensorRT", "Docker"],
    current: false,
  },
  {
    period: "2025 — Present",
    role: "Founder & Lead Engineer — TactiVision",
    company: "Independent Product — Real-time Football Analytics Platform",
    description:
      "Built and deployed an end-to-end CV pipeline running 7 TensorRT engines in parallel via CUDA streams on a single RTX 4060: player/GK/referee detection, ball detection, pitch keypoint homography, 17-point pose estimation, field segmentation, jersey OCR, and OSNet re-identification. Trained on 140,000+ annotated images across 7 competitions, reaching 93.9–98.2% precision and ~96% accuracy on unseen footage. Live match-centre dashboard generates possession, xThreat, pass networks, pitch control, and pressing intensity from a single broadcast feed — no stadium infrastructure required.",
    technologies: ["TensorRT", "ONNX", "CUDA Streams", "Ultralytics YOLO", "ByteTrack", "OSNet", "OpenCV", "PyTorch"],
    current: true,
  },
  {
    period: "April 2025 — October 2025",
    role: "R&D Intern — Applied AI & Computer Vision",
    company: "SportScore — Football Analytics (Paris, France - Remote)",
    description:
      "Built an automatic frame classification module (YOLOv11m-cls) achieving 99.95% accuracy, and implemented complex action detection: pass classification, shots, dribbles, interceptions, goals. Optimized the vision pipeline end-to-end — 50% latency reduction via 5 parallel CUDA streams and TensorRT FP16 across 7 models, reaching 13 FPS (+117%). Delivered automated performance analytics and AI-powered microservices integrated into production, and mentored 4 interns.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "CUDA", "TensorRT", "Docker", "FastAPI"],
    current: false,
  },
  {
    period: "October 2024 — January 2025",
    role: "Machine Learning Intern — Research & Experimental Evaluation",
    company: "SETIME Lab, Ibn Tofail University (Kenitra, Morocco)",
    description:
      "Designed reproducible ML pipelines on a 40GB dataset (2024 Futsal World Cup, 7 matches), conducting controlled experiments with benchmarking and ablation studies. Achieved 0.93 recall using RegNet-Y + Bi-GRU through hyperparameter tuning and architecture exploration.",
    technologies: ["Python", "PyTorch", "RegNet-Y", "ResNet-50", "Bi-GRU", "OpenCV", "NumPy", "Pandas"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Master's Degree in Artificial Intelligence",
    company: "Ibn Tofail University (Kenitra, Morocco)",
    description:
      "Specialized in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI. Key projects: Autonomous Driving with ROS2 & TD3 deep reinforcement learning, hybrid CRNN OCR for handwritten Tifinagh, Diabetic Retinopathy Detection.",
    technologies: ["ML/DL", "Computer Vision", "NLP", "ROS2", "PyTorch"],
    current: false,
  },
  {
    period: "2020 — 2023",
    role: "Bachelor's Degree in Physics (Theoretical & Mathematical)",
    company: "Ibn Tofail University (Kenitra, Morocco)",
    description:
      "Strong mathematical foundations powering my AI work: linear algebra, geometry, statistical analysis, signal processing, and numerical methods.",
    technologies: ["Mathematics", "Linear Algebra", "Signal Processing", "Numerical Methods"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience shaped by
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              innovation & impact.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A journey through AI research, computer vision projects, and engineering 
            excellence — from internships to leading technical initiatives.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
