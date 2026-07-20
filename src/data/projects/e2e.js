export const e2eProject = {
  id: 2,
  slug: "2-e2e-spotting",
  title: "E2E-Spot - Temporal Event Detection in Sports Videos",
  description:
    "End-to-end architecture for frame-precise temporal event detection in futsal videos. The system automatically localizes key player actions (passes, dribbles, shots) at 1-second precision using efficient visual feature extraction combined with bidirectional temporal modeling on 40GB of 2024 FIFA Futsal World Cup footage.",
  image: "assets/img/projects/e2e_spot_architecture.jpg",
  tags: ["RegNet-Y", "Action Spotting", "Deep Learning", "Temporal Detection"],
  link: "/projects/2-e2e-spotting",
  github: "https://github.com/MehdiHCH/End-to-End-Temporal-Event-Spotting-in-Videos",
  company: "Université Ibn Tofail - Laboratoire SETIME",
  period: "October 2024 — January 2025",
  location: "Kenitra, Morocco",
  role: "Machine Learning Intern — Research & Experimental Evaluation",
  overview: {
    architectureImage: "assets/img/projects/architecture/e2e_architecture.png",
    keyContributions: [
      "Designed a RegNet-Y backbone augmented with Gate Shift Modules (GSM) for efficient local temporal modeling — capturing motion patterns without the computational cost of 3D convolutions.",
      "Implemented a Bidirectional GRU on top of extracted features to model both past and future context simultaneously, enabling precise frame-level action localization at ±1-second accuracy.",
      "Built and managed the full data engineering pipeline: frame extraction, JSON annotation parsing, temporal normalization, and augmentation over 40 GB of 2024 FIFA Futsal World Cup footage (7 matches, 14 halves).",
      "Conducted systematic ablation studies comparing clip lengths of 16 and 50 frames to determine optimal temporal context windows for each action class.",
      "Applied Weighted Cross-Entropy Loss to address class imbalance, achieving 0.93 recall on the dribble detection class (DRIVE).",
      "Optimized training on RTX 4060 using mixed precision (FP16) and checkpointing, keeping a 450-hour training workload manageable across iterations.",
    ],
  },
  problemStatement: {
    title: "Temporal Event Detection Challenges",
    description:
      "Detecting key player actions at frame-level with sub-second precision in sports videos requires both efficient visual perception and sophisticated temporal modeling.",
    challenges: [
      "Ultra-precise temporal detection at frame level (±1 second)",
      "Contextual understanding to differentiate similar actions",
      "Temporal relationships across long sequences",
      "Computational efficiency for real-time processing",
      "Class imbalance in training data",
    ],
  },
  solution:
    "Implemented RegNet-Y with Gate Shift Modules for efficient feature extraction combined with Bidirectional GRU for global temporal reasoning.",
  keyAchievements: [
    "Developed full temporal event detection pipeline from video to frame-level predictions",
    "Implemented RegNet-Y with Gate Shift Modules (GSM) for local temporal modeling",
    "Achieved 0.93 recall on DRIVE class (dribble detection)",
    "RegNet-Y (10M parameters) outperformed ResNet-50 (25M parameters)",
    "Frame extraction, JSON annotations, temporal normalization, data augmentation",
    "Tested multiple configurations: clip_len 16/50 on 40GB dataset",
    "Worked with 7 matches from 2024 Futsal World Cup (14 halves)",
    "Lightweight architecture: 2.5x fewer parameters than ResNet-50",
  ],
  techStack: [
    "Python", "PyTorch", "RegNet-Y", "Gate Shift Modules",
    "Bi-GRU", "OpenCV", "GPU (RTX 4060)", "TensorFlow",
  ],
  modules: [
    {
      id: 1,
      name: "Feature Extraction (Module F)",
      description: "RegNet-Y with Gate Shift Modules for efficient visual feature extraction",
      metrics: {
        model: "RegNet-Y + GSM",
        parameters: "10M (vs 25M ResNet-50)",
        efficiency: "2.5x lighter",
        processing: "Ultra-efficient single-pass",
      },
    },
    {
      id: 2,
      name: "Temporal Reasoning (Module G)",
      description: "Bidirectional GRU for modeling past and future context",
      metrics: {
        architecture: "Bidirectional GRU",
        context: "Past + Future",
        output: "Frame-wise classification",
      },
    },
  ],
  results: {
    recallDrive: "93%",
    f1Score: "0.36",
    parameters: "10M",
    trainingTime: "450h (18.7 days)",
    hardwareUsed: "RTX 4060",
  },
  visualizations: [
    {
      title: "RegNet-Y Architecture with Gate Shift Modules",
      description: "Efficient feature extraction with local temporal modeling",
      image: "assets/img/projects/gsm.png",
    },
    {
      title: "Bidirectional GRU Temporal Reasoning",
      description: "Global temporal context modeling for frame-wise classification",
      image: "assets/img/projects/gru.png",
    },
    {
      title: "E2E-Spot Pipeline Architecture",
      description: "End-to-end temporal event detection framework",
      image: "assets/img/projects/e2e_spot_architecture.jpg",
    },
  ],
  challenges: {
    classImbalance: {
      problem: "PASS class underrepresented → low recall",
      solution: "Weighted Cross-Entropy Loss, PASS oversampling",
    },
    trainingTime: {
      problem: "450h for optimal config",
      solution: "Checkpointing, Mixed Precision (FP16)",
    },
    temporalCapture: {
      problem: "clip_len=50 too long, clip_len=16 sometimes insufficient",
      solution: "Multi-scale temporal fusion (8/16/32 frames)",
    },
  },
  team: ["Hicham El Mehdi", "Mohammed Imrane GRICH"],
  supervisor: "Prof. Noureddine MOHTARAM",
  demos: [
    {
      id: 1,
      title: "Temporal Event Detection",
      video: "assets/videos/E2E_spot.mp4",
      description: "Frame-level temporal event detection with RegNet-Y and Bi-GRU for action spotting at ±1 second precision",
      category: "Temporal Analysis",
    },
  ],
};