import { CountryFlags } from "@/components/CountryFlags";

const experiences = [
  {
    period: "October 2026 — Present",
    role: "Computer Vision Engineer",
    organization: "Company name withheld",
    organizationDetails: "3D Football Officiating & Spatial Analysis · Morocco",
    countries: ["ma"],
    organizationColor: "text-primary",
    organizationLogoClass: "border-primary/40",
    description:
      "Working on computer vision for 3D football officiating and spatial analysis, combining player and ball tracking, camera calibration, geometric understanding, and reliable video-processing pipelines.",
    technologies: ["Computer Vision", "Player & Ball Tracking", "Camera Calibration", "3D Geometry", "Spatial Analysis"],
    current: true,
  },

  {
    period: "Jul 2026 — Sep 2026 · 3 mos",
    role: "Computer Vision Engineer & Sports AI Consultant",
    organization: "SolveXI, TechnologyOne & Multiple Global Clients",
    organizationDetails: "Freelance · Australia & New Zealand · Croatia · Remote",
    countries: ["au", "nz", "hr"],
    organizationColor: "text-primary hover:text-secondary-foreground",
    organizationLogoClass: "border-primary/40",
    description:
      "Selected international Computer Vision & Sports AI engagements across Australia, New Zealand, and Croatia:",
    descriptionItems: [
      "SolveXI / Goran Mandic — Integrated SkillCorner tracking, events, and phase-of-play data into a tactical analysis pipeline, producing coach-readable insights on team shape, width/depth, possession structure, passing options, pressing behaviour, and cross-match patterns.",
      "TechnologyOne / Eugene Luongo — Evaluated football footage quality, detection/tracking feasibility, and camera calibration requirements; provided technical guidance on Computer Vision architecture, model adaptation, VEO-camera workflows, and reliable homography/pitch-mapping.",
      "Technical Advisory Engagements — Supported clients with Computer Vision system design, feasibility assessment, model selection, deployment strategy, and development planning.",
      "Worked across player/ball detection and tracking, homography, pitch-coordinate reconstruction, tactical analytics, model adaptation, and performance benchmarking.",
      "Scoped technical projects into clear milestones, deliverables, implementation phases, and technical recommendations.",
    ],
    technologies: [
      "Computer Vision",
      "Sports Analytics",
      "SkillCorner",
      "Homography",
      "Sports AI",
    ],
    media: [
      "assets/img/projects/tactivision-insight/skillcorner/consulting-dashboard.png",
      "assets/img/projects/tactivision-insight/video-stills/psg-bayern-pressing.webp",
      "assets/img/projects/tactivision-insight/skillcorner/consulting-report.png",
    ],
    current: false,
  },
  {
    period: "May 2026 — June 2026",
    role: "Computer Vision Engineer (Contract)",
    organization: "Priori Sports, Inc.",
    organizationDetails: "San Francisco, USA (Remote)",
    countries: ["us"],
    organizationLogo: "assets/img/companies/priori-sports-logo.png",
    organizationUrl:
      "https://www.linkedin.com/company/priori-sports-performance/",
    organizationColor: "text-sky-400 hover:text-sky-300",
    organizationLogoClass: "border-sky-400/50",
    description:
      "Developed football spatial tracking components, calibrated spatial projection, and tracking-data processing. Built ball-height and trajectory estimation from 2D observations and camera-calibration data, including temporal smoothing, airborne detection, and spatial correction.",
    technologies: ["Python", "OpenCV", "Camera Calibration", "3D Geometry", "NumPy", "SciPy", "Signal Processing"],
    current: false,
  },
  {
    period: "January 2026 — Present",
    role: "Independent R&D Project",
    organization: "TactiVision",
    organizationDetails:
      "Football Video Analysis Pipeline · Morocco",
    countries: ["ma"],
    organizationLogo: "assets/img/companies/tactivision-logo.png",
    organizationColor: "text-emerald-400",
    organizationLogoClass: "border-lime-400/50",
    organizationLogoSizeClass: "h-16 w-28 sm:w-36",
    description:
      "Developing an independent football video analytics R&D pipeline combining player, goalkeeper, referee, and ball detection; field keypoints and homography; pose estimation; jersey OCR; and player ReID. Engineering work includes parallel TensorRT inference, CUDA Streams, and structured video/JSON/CSV outputs. Research priorities include identity recovery after long occlusions, stable calibration during camera motion, ball tracking, and longer-sequence reliability. Evaluation is ongoing on selected tactical and broadcast match sequences.",
    technologies: ["TensorRT", "ONNX", "CUDA Streams", "Ultralytics YOLO", "ByteTrack", "OSNet", "OpenCV", "PyTorch"],
    current: true,
  },
  {
    period: "September 2025 — October 2025",
    role: "Computer Vision Engineer (Freelance)",
    organization: "SportScore",
    organizationDetails: "Football Analytics · Paris, France (Remote)",
    countries: ["fr"],
    organizationLogo: "assets/img/companies/sportscore-logo.png",
    organizationUrl: "https://www.linkedin.com/company/sport-score/",
    organizationColor: "text-emerald-400 hover:text-emerald-300",
    organizationLogoClass: "border-emerald-400/50",
    description:
      "Continued after the internship to restructure and optimize the inference pipeline. Separated model loading, pre/post-processing, and inference into independent stages to remove serial bottlenecks. Reduced processing time by 46.7% on the measured test sequence through CUDA Streams, TensorRT FP16, batched ReID, and asynchronous processing.",
    technologies: ["TensorRT FP16", "CUDA Streams", "ONNX", "PyTorch", "Python", "Batch ReID"],
    current: false,
  },
  {
    period: "April 2025 — September 2025",
    role: "R&D Intern — Applied AI & Computer Vision",
    organization: "SportScore",
    organizationDetails: "Football Analytics · Paris, France (Remote)",
    countries: ["fr"],
    organizationLogo: "assets/img/companies/sportscore-logo.png",
    organizationUrl: "https://www.linkedin.com/company/sport-score/",
    organizationColor: "text-emerald-400 hover:text-emerald-300",
    organizationLogoClass: "border-emerald-400/50",
    description:
      "Built a YOLO11 frame classifier achieving 99.95% accuracy for main-view vs. other-view filtering. Developed player/ball detection, tracking, OSNet ReID, team assignment, jersey OCR, pose estimation, and pitch mapping. Implemented action detection for passes, shots, dribbles, interceptions, and goals. Delivered heatmaps, pass maps, JSON/CSV outputs, and match statistics, while helping coordinate implementation and code consistency across the intern team.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "CUDA", "TensorRT", "Docker", "FastAPI"],
    current: false,
  },
  {
    period: "October 2024 — January 2025",
    role: "Machine Learning Intern — Research & Experimental Evaluation",
    organization: "SETIME Lab",
    organizationDetails: "Ibn Tofail University · Kenitra, Morocco",
    countries: ["ma"],
    organizationLogo: "assets/img/companies/ibn-tofail-university-logo.webp",
    organizationUrl:
      "https://www.linkedin.com/school/ibntofailuniversity-itu/",
    organizationColor: "text-blue-400 hover:text-blue-300",
    organizationLogoClass: "border-blue-400/50",
    description:
      "Designed reproducible ML pipelines on a 40GB dataset (2024 Futsal World Cup, 7 matches), conducting controlled experiments with benchmarking and ablation studies. Achieved 0.93 recall using RegNet-Y + Bi-GRU through hyperparameter tuning and architecture exploration.",
    technologies: ["Python", "PyTorch", "RegNet-Y", "ResNet-50", "Bi-GRU", "OpenCV", "NumPy", "Pandas"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Master's Degree in Artificial Intelligence & Virtual Reality",
    organization: "Ibn Tofail University",
    organizationDetails: "Kenitra, Morocco",
    countries: ["ma"],
    organizationLogo: "assets/img/companies/ibn-tofail-university-logo.webp",
    organizationUrl:
      "https://www.linkedin.com/school/ibntofailuniversity-itu/",
    organizationColor: "text-blue-400 hover:text-blue-300",
    organizationLogoClass: "border-blue-400/50",
    description:
      "Specialized in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI. Key projects: Autonomous Driving with ROS2 & TD3 deep reinforcement learning, hybrid CRNN OCR for handwritten Tifinagh, Diabetic Retinopathy Detection.",
    technologies: ["ML/DL", "Computer Vision", "NLP", "ROS2", "PyTorch"],
    current: false,
  },
  {
    period: "2020 — 2023",
    role: "Bachelor's Degree in Physics (Theoretical & Mathematical)",
    organization: "Ibn Tofail University",
    organizationDetails: "Kenitra, Morocco",
    countries: ["ma"],
    organizationLogo: "assets/img/companies/ibn-tofail-university-logo.webp",
    organizationUrl:
      "https://www.linkedin.com/school/ibntofailuniversity-itu/",
    organizationColor: "text-blue-400 hover:text-blue-300",
    organizationLogoClass: "border-blue-400/50",
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
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(139,92,246,0.8)]" />

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
                    <div
                      className={`mt-3 flex items-center gap-3 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.organizationLogo && (
                        <img
                          src={`${import.meta.env.BASE_URL}${exp.organizationLogo}`}
                          alt={`${exp.organization} logo`}
                          className={`${
                            exp.organizationLogoSizeClass || "h-16 w-16"
                          } shrink-0 rounded-lg border bg-black/30 object-contain p-1 ${exp.organizationLogoClass}`}
                        />
                      )}
                      <div className={idx % 2 === 0 ? "md:text-right" : ""}>
                        {exp.organizationUrl ? (
                          <a
                            href={exp.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xl font-bold leading-tight transition-colors ${exp.organizationColor}`}
                          >
                            {exp.organization}
                          </a>
                        ) : (
                          <p
                            className={`text-xl font-bold leading-tight ${exp.organizationColor}`}
                          >
                            {exp.organization}
                          </p>
                        )}
                        <div className={`mt-1 flex flex-wrap items-center gap-2 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                          <CountryFlags countries={exp.countries || []} />
                          <p className="text-sm text-muted-foreground">
                            {exp.organizationDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-justify text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                    {exp.descriptionItems?.length > 0 && (
                      <ul className="mt-3 space-y-3 text-justify text-sm leading-relaxed text-muted-foreground">
                        {exp.descriptionItems.map((item, itemIdx) => (
                          <li key={itemIdx} className="relative pl-4">
                            <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-primary/80" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.media?.length > 0 && (
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {exp.media.map((mediaPath, mediaIdx) => (
                          <img
                            key={mediaPath}
                            src={`${import.meta.env.BASE_URL}${mediaPath}`}
                            alt={`${exp.organization} work sample ${mediaIdx + 1}`}
                            loading="lazy"
                            className="aspect-[16/10] w-full rounded-md border border-border/70 bg-background object-cover"
                          />
                        ))}
                      </div>
                    )}
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
