export const tactiVisionProject = {
  id: 6,
  slug: "tactivision-football-analytics",
  title: "TactiVision - AI Football Analytics Platform",
  description:
    "An end-to-end computer vision platform that transforms tactical-camera football video into tracked players, validated match events, spatial maps, and a presentation-ready live analytics dashboard.",
  image: "assets/img/projects/tactivision-cover.png",
  tags: ["YOLO", "TensorRT", "Multi-Object Tracking", "Football Analytics"],
  link: "/projects/tactivision-football-analytics",
  github: null,
  company: "Independent Product Project",
  period: "May 2026 - Present",
  location: "Morocco",
  role: "Creator & Computer Vision Engineer",
  overview: {
    keyContributions: [
      "Designed a modular football-video pipeline combining player, ball, pose, pitch-keypoint, goal-net, and jersey-number models.",
      "Optimized GPU inference with TensorRT FP16 engines, dedicated CUDA streams, model scheduling, and cached low-frequency analytics.",
      "Implemented multi-player tracking with ReID, team classification, goalkeeper handling, jersey OCR, manual tagging, and guarded identity continuity.",
      "Mapped camera detections onto a standardized pitch through homography for tactical maps and spatial event validation.",
      "Built a synchronized web dashboard and frame-accurate Full HD video export for analyst review and product demonstrations.",
    ],
  },
  problemStatement: {
    title: "Turning Broadcast Video into Structured Tactical Data",
    description:
      "Single-camera football footage contains camera motion, tiny fast-moving balls, occlusions, identity switches, changing scale, and incomplete pitch visibility. A useful analytics product must resolve those uncertainties while keeping every map and KPI synchronized with the source frame.",
    challenges: [
      "Detecting and tracking a small football across wide tactical views",
      "Maintaining player identity through occlusion and camera movement",
      "Projecting image coordinates onto the pitch reliably",
      "Validating passes, shots, assists, and goals from temporal context",
      "Rendering live analytics and deterministic Full HD dashboard video",
    ],
  },
  solution:
    "TactiVision combines TensorRT-accelerated perception models with tracking, homography, temporal event logic, and a synchronized analytics layer. The output is both structured match data and a live dashboard containing the annotated match, team maps, and tactical KPIs.",
  keyAchievements: [
    "Integrated player detection, dedicated ball detection, pose estimation, pitch keypoints, goal-net segmentation, ReID, and jersey OCR in one pipeline",
    "Created guarded jersey-based ID continuity without merging simultaneous player detections",
    "Implemented goal confirmation using ball trajectory, pitch geometry, and the detected goal-net mask",
    "Produced pass maps, pass networks, heatmaps, homography view, pitch control, and pressing-intensity visualizations",
    "Delivered synchronized KPI reporting for possession, territory, xThreat, dangerous entries, pass accuracy, pressure, progressive passes, and recoveries",
    "Generated a clean web-dashboard MP4 frame by frame at the source video's timing",
  ],
  techStack: [
    "Python", "PyTorch", "Ultralytics YOLO", "TensorRT", "CUDA", "OpenCV",
    "ReID", "OCR", "Homography", "Flask", "JavaScript", "FFmpeg",
  ],
  modules: [
    {
      id: 1,
      name: "Perception & Identity",
      description:
        "Detects players, the ball, pose keypoints, pitch landmarks, and the goal net while maintaining team and player identity over time.",
      metrics: {
        inference: "TensorRT FP16",
        tracking: "ReID + temporal state",
        identity: "OCR + manual tagging",
      },
    },
    {
      id: 2,
      name: "Spatial & Event Intelligence",
      description:
        "Projects detections onto the pitch and derives possession, passes, shots, assists, goals, pressure, and tactical control from temporal context.",
      metrics: {
        projection: "Homography",
        events: "Temporal validation",
        goalCheck: "Pitch + net mask",
      },
    },
    {
      id: 3,
      name: "Analytics Presentation",
      description:
        "Synchronizes the annotated match, team maps, pitch control, PPDA, and core KPIs in a live web dashboard and deterministic Full HD export.",
      metrics: {
        dashboard: "Live web UI",
        export: "1920 x 1080 MP4",
        timing: "Source-frame accurate",
      },
    },
  ],
  visualizations: [
    {
      title: "TactiVision Match Centre",
      description:
        "Live annotated football analysis with synchronized tactical maps and match KPIs.",
      image: "assets/img/projects/tactivision-cover.png",
    },
  ],
  team: ["Hicham El Mehdi"],
  demos: [
    {
      id: 1,
      title: "TactiVision End-to-End Demo",
      video: "assets/videos/tactivision-demo.mp4",
      description:
        "Tactical-camera processing with player and ball tracking, pitch projection, match events, and the live analytics dashboard.",
      category: "Sports Analytics",
    },
  ],
};
