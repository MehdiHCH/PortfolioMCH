export const tactiVisionProject = {
  id: 6,
  slug: "tactivision-football-analytics",
  title: "TactiVision - AI Football Analytics Platform",
  description:
    "An end-to-end GPU computer-vision platform that turns single-camera football video into tracked players, a metric pitch projection, 60+ validated tactical KPIs, and a broadcast-style live analytics dashboard — all running on a single consumer GPU.",
  image: "assets/img/projects/tactivision-cover.png",
  tags: ["YOLO", "TensorRT", "Multi-Object Tracking", "Football Analytics"],
  link: "/projects/tactivision-football-analytics",
  github: null,
  company: "Independent Product Project",
  period: "2025 — Present",
  location: "Morocco",
  role: "Founder & Lead Engineer",
  overview: {
    animatedPipeline: {
      title: "How TactiVision Works",
      description:
        "Six TensorRT perception engines fire on every frame — player, ball, pose, pitch keypoints, goal-net segmentation, and jersey OCR — feeding a tracking and identity layer, a homography projection onto a 105 × 68 m metric pitch, and a temporal event engine. The animated graph below is driven by real output from a processed Bayern Munich vs Paris Saint-Germain sequence: the engine lanes, tracked identities, event feed, and KPI ticker all show data the pipeline actually produced for that clip.",
    },
    keyContributions: [
      "Architected a 7-model GPU perception stack — player/GK/referee detection, a dedicated small-ball detector at 1280 px, a 58-channel pitch-keypoint network, pose estimation, goal-net segmentation, jersey OCR, and OSNet ReID — all compiled to TensorRT FP16 engines running on a single RTX 4060 (8 GB).",
      "Trained the detection stack on 140,000+ annotated images spanning 7 competitions (LaLiga, Premier League, Ligue 1, Bundesliga, UCL, Botola Pro, FIFA World Cup 2026), reaching 93.9–98.2% precision and ~96% accuracy on unseen footage.",
      "Engineered parallel GPU inference by unifying PyTorch/TensorRT and pycuda under one shared primary CUDA context, dispatching four engines to a thread pool while the keypoint engine runs on the main thread — cutting per-frame latency from the sum of all models toward the slowest single model, with a sequential mode kept as a guaranteed fallback.",
      "Built the goal-detection model end to end: bootstrapped a segmentation dataset by prompting SAM 3 with the text concept \"goal net\" refined against existing boxes, then trained a YOLO-seg model with a leakage-free clip-wise split to ~0.97 mask mAP50. Goals are confirmed by a 12-frame majority vote of the ball inside the net polygon, automatically promoting the last key pass to an assist.",
      "Maintained player identity across occlusions and camera motion with Deep-EIoU tracking, appearance ReID, team-color classification, throttled jersey OCR, goalkeeper handling, and guarded jersey-based re-linking that never merges simultaneous detections.",
      "Projected every detection onto a metric 105 × 68 m pitch via keypoint-driven homography, unlocking speeds, distances covered, zone entries, Voronoi pitch control, and team-shape metrics (formation, compactness, width, depth).",
      "Designed a temporal event engine classifying 12 pass types (progressive, smart, through, cross, switch, key, assist…), shots with an xG proxy, interceptions, recoveries, counter-attacks, and PPDA pressing intensity — 60+ KPIs streamed to a live dashboard and a deterministic 1080p MP4 export.",
    ],
  },
  problemStatement: {
    title: "Turning Broadcast Video into Structured Tactical Data",
    description:
      "Single-camera football footage is hostile input: constant camera motion, a tiny fast-moving ball, dense occlusions, identity switches, changing scale, and a pitch that is never fully visible. A useful analytics product must resolve all of that uncertainty in one pass — while keeping every map, event, and KPI synchronized with the exact source frame.",
    challenges: [
      "Running six neural networks per frame within an 8 GB consumer-GPU budget",
      "Detecting and tracking a small football across wide tactical views",
      "Maintaining player identity through occlusion, scale change, and camera movement",
      "Recovering metric pitch coordinates when most of the field is off-screen",
      "Validating passes, shots, assists, and goals from temporal context instead of single frames",
      "Rendering live analytics and a deterministic Full HD dashboard video from the same state",
    ],
  },
  solution:
    "TactiVision compiles its entire perception stack to TensorRT FP16 and schedules it in parallel under a single shared CUDA context. Detections flow through ReID-backed tracking, keypoint homography onto a metric pitch, and a temporal event engine that confirms goals against a learned goal-net mask. The output is structured match data — events, tracking CSVs, per-player stats — plus a live dashboard and a Full HD match-report video that stay frame-accurate to the source.",
  keyAchievements: [
    "Unified 7 neural models — detection, dedicated ball detection, pose, 58-channel pitch keypoints, goal-net segmentation, jersey OCR, and OSNet ReID — into one real-time TensorRT pipeline on a single RTX 4060",
    "Trained on 140,000+ annotated images across 7 competitions (LaLiga, Premier League, Ligue 1, Bundesliga, UCL, Botola Pro, FIFA World Cup 2026) — 93.9–98.2% precision and ~96% accuracy on unseen footage",
    "Built a dedicated goalkeeper model outputting GK position in real-world metres, speed, skeleton pose, and spatial goal coverage on every frame",
    "Solved the multi-threaded CUDA-context problem (PyTorch + TensorRT + pycuda in one process), enabling parallel model execution with per-frame result caching for slow-changing models",
    "Trained the goal-net segmentation model to ~0.97 mask mAP50 on a SAM 3-bootstrapped dataset with a clip-wise split that eliminates near-duplicate-frame leakage",
    "Implemented goal confirmation from ball trajectory, pitch geometry, and the segmented net polygon with a 12-frame majority vote, plus automatic assist attribution",
    "Classified 12 pass types and a full defensive event set (interceptions, recoveries, counter-attacks, blocks) from spatio-temporal rules over tracked trajectories",
    "Delivered 60+ synchronized KPIs — possession, territory, xThreat, PPDA by match phase, pass accuracy, progressive passes, dangerous entries, per-player distance and top speed",
    "Produced pass maps, pass networks, heatmaps, top-down projection, Voronoi pitch control, and team-shape visualizations on the metric pitch",
    "Generated a clean broadcast-style dashboard MP4 frame by frame at the exact timing of the source video",
  ],
  techStack: [
    "Python", "PyTorch", "Ultralytics YOLO", "SAM 3", "TensorRT", "ONNX",
    "CUDA", "OpenCV", "Deep-EIoU", "OSNet ReID", "OCR", "Homography",
    "Flask", "JavaScript", "FFmpeg",
  ],
  modules: [
    {
      id: 1,
      name: "GPU Perception Engine",
      description:
        "Runs six perception models on every frame — player/GK/referee detection, dedicated ball detection at 1280 px, pose estimation, 58-channel pitch keypoints, goal-net segmentation, and jersey OCR — all as TensorRT FP16 engines.",
      details:
        "A shared primary CUDA context lets PyTorch, TensorRT, and pycuda coexist across threads: four engines run in a thread pool while the keypoint engine executes on the main thread. Slow-changing outputs (keypoints, goal mask) are cached when consecutive frames are nearly identical.",
      metrics: {
        engines: "6 per frame",
        precision: "TensorRT FP16",
        scheduling: "Parallel + shared CUDA ctx",
        hardware: "RTX 4060 8 GB",
        caching: "Frame-similarity reuse",
        fallback: "Sequential V0 mode",
      },
    },
    {
      id: 2,
      name: "Identity & Tracking",
      description:
        "Keeps every player's identity stable across occlusion and camera motion by fusing Deep-EIoU tracking, appearance ReID, team-color classification, and jersey-number OCR.",
      details:
        "Jersey OCR is throttled to every 6 frames and used as a guarded re-linking signal — it can restore a lost identity but never merges two players detected simultaneously. Goalkeepers are handled explicitly and manual tags can pin known players.",
      metrics: {
        tracker: "Deep-EIoU",
        reid: "OSNet embeddings",
        jerseyOcr: "Guarded re-linking",
        teams: "Color classification",
        goalkeeper: "Dedicated handling",
      },
    },
    {
      id: 3,
      name: "Spatial Intelligence",
      description:
        "Projects every tracked object from image space onto a standardized 105 × 68 m pitch using homography estimated from a 58-channel keypoint network — no field mask required.",
      details:
        "Metric positions power speed and distance estimation, zone-entry logic (final third, penalty area, central channel), Voronoi pitch control, and team-shape analytics: detected formation with confidence, compactness, width, and depth.",
      metrics: {
        projection: "Keypoint homography",
        pitch: "105 × 68 m metric",
        control: "Dynamic Voronoi",
        shape: "Formation + compactness",
        physical: "Speed & distance",
      },
    },
    {
      id: 4,
      name: "Event & Goal Intelligence",
      description:
        "Derives match events from temporal context over tracked trajectories: possession, 12 pass types, shots with an xG proxy, dribbles, interceptions, recoveries, counter-attacks, and pressing intensity.",
      details:
        "Goals are confirmed by testing the ball centre against the segmented goal-net polygon with a 12-frame majority vote; a confirmed goal automatically promotes the scoring team's last key/smart/through/cross pass into an assist. PPDA is tracked per half and in 15-minute phases.",
      metrics: {
        passTypes: "12 classified",
        goalCheck: "Net mask + 12-frame vote",
        assists: "Automatic promotion",
        pressing: "PPDA by phase",
        xgProxy: "Distance-angle model",
      },
    },
    {
      id: 5,
      name: "Analytics Presentation",
      description:
        "Streams the annotated match, tactical maps, and 60+ KPIs to a live web dashboard, and renders the same state into a deterministic broadcast-style Full HD match-report video.",
      details:
        "Both surfaces share identical match state, so every KPI tile, momentum chart, and tactical map stays frame-accurate to the source video. Exports include events JSON, tracking and pass CSVs, and per-team map PNGs.",
      metrics: {
        dashboard: "Live web UI",
        export: "1920 × 1080 MP4",
        timing: "Source-frame accurate",
        kpis: "60+ synchronized",
        data: "JSON + CSV exports",
      },
    },
  ],
  results: {
    detectionPrecision: "93.9–98.2%",
    trainingImages: "140K+",
    competitionsCovered: "7",
    neuralModels: "7",
    passTypesClassified: "12",
    kpisTracked: "60+",
    goalSegMap50: "~0.97",
    videoExport: "Full HD",
  },
  visualizations: [
    {
      title: "TactiVision Match Centre",
      description:
        "Live annotated football analysis with synchronized tactical maps and match KPIs.",
      image: "assets/img/projects/tactivision-cover.png",
    },
    {
      title: "AI Match Report Views",
      description:
        "Broadcast-style report generated by the pipeline: executive KPI summary, match momentum timeline, team-shape analysis, and cinematic key-event replays with per-player tracking overlays.",
      image: "assets/img/projects/tactivision-report-views.jpg",
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
    {
      id: 2,
      title: "AI Match Report — Dashboard V2",
      video: "assets/videos/tactivision-dashboard-v2.mp4",
      description:
        "Auto-generated broadcast-style match report of a Paris Saint-Germain attacking sequence: executive KPI summary, match momentum, tactical shape, and cinematic key-event replays — rendered frame-accurately by the pipeline from the live dashboard state.",
      category: "Sports Analytics",
    },
  ],
};
