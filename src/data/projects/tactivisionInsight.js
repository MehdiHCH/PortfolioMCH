export const tactiVisionInsightProject = {
  id: 7,
  slug: "tactivision-insight",
  title: "TactiVision Insight - Explainable Tactical Intelligence",
  description:
    "An explainable football-intelligence engine that transforms TactiVision Core tracking, pitch coordinates, and match events into evidence-backed tactical recommendations, receiver scores, passing-lane risk, defensive-line analysis, and a synchronized analyst workspace.",
  image: "assets/img/projects/tactivision-insight/cover.webp",
  cardVideo: "assets/videos/tactivision-insight-card-preview.mp4",
  tags: ["Explainable AI", "Tactical Intelligence", "Football Analytics", "React"],
  link: "/projects/tactivision-insight",
  github: null,
  company: "Independent Product Project",
  period: "August 15, 2026 — Present",
  location: "Morocco",
  role: "Founder & Lead Engineer",
  overview: {
    keyContributions: [
      "Designed a bridge that consumes TactiVision Core tracking CSV and event JSON exports without rerunning GPU inference.",
      "Built a temporal tactical-state layer for possession, attacking direction, match phase, player orientation, pressure, and confidence-aware spatial reasoning.",
      "Implemented defensive-line estimation with a six-way context classifier so pressing and covering actions are distinguished from genuine line breaks.",
      "Created a nine-factor receiver model combining space, lane openness, progression, pressure, orientation, numerical advantage, centrality, future space, and interception risk.",
      "Delivered an explainability contract in which every recommendation includes evidence, sub-scores, confidence, and interpretation limits.",
      "Built a React and TypeScript analyst workspace synchronized with video, a metric tactical map, and a clickable insight timeline over REST and WebSocket APIs.",
    ],
  },
  problemStatement: {
    title: "Moving from Tracking Data to Explainable Decisions",
    description:
      "Detection and tracking explain where players are, but coaches need to understand why a situation matters and what decision the evidence supports. Tactical conclusions must account for time, geometry, pressure, movement, data quality, and match context without presenting uncertain estimates as objective truth.",
    challenges: [
      "Converting frame-level tracking into stable temporal tactical states",
      "Separating intentional pressing or covering from defensive-line errors",
      "Estimating passing-lane interception risk from player position and velocity",
      "Ranking receivers using multiple competing tactical factors",
      "Attaching transparent evidence and confidence to every recommendation",
      "Keeping video, metric pitch, explanations, and the event timeline synchronized",
    ],
  },
  solution:
    "TactiVision Insight consumes structured Core exports and builds a temporal state for each moment of play. Spatial reasoning modules estimate defensive lines, pressure, between-the-lines space, receiver quality, and velocity-aware passing lanes. A decision engine converts those signals into confidence-gated insights, then streams a shared InsightState contract to a synchronized analyst workspace where every recommendation exposes its WHY explanation.",
  keyAchievements: [
    "Implemented a six-class defensive-line action model with persistent-condition timing and evidence in metres",
    "Built OPEN, CONTESTED, and BLOCKED passing-lane classification using corridor geometry and velocity-aware interception risk",
    "Created a normalized 0–100 receiver score from nine transparent tactical factors",
    "Added confidence gating from homography plausibility and ball provenance, returning LIMITED when evidence quality is insufficient",
    "Converted sustained tactical conditions into clickable timeline events with minimum-duration and cooldown controls",
    "Centralized all tactical thresholds and scoring weights in a configurable YAML policy layer",
    "Validated geometry, scoring, hysteresis, direction inference, and the complete state pipeline with synthetic and end-to-end tests",
  ],
  techStack: [
    "Python",
    "Pydantic",
    "Starlette",
    "Uvicorn",
    "WebSocket",
    "React",
    "TypeScript",
    "Zustand",
    "OpenCV",
    "NumPy",
    "PyYAML",
    "Pytest",
  ],
  modules: [
    {
      name: "Core Data Bridge",
      description:
        "Loads TactiVision Core tracking and event exports into a stable tactical-analysis contract without repeating perception inference.",
      details:
        "The bridge normalizes player identities, teams, ball state, metric coordinates, events, and calibration confidence for downstream reasoning.",
      metrics: {
        inputs: "Tracking CSV + event JSON",
        inference: "No GPU rerun",
        coordinates: "105 × 68 m pitch",
      },
    },
    {
      name: "Temporal Tactical State",
      description:
        "Builds possession, ball-carrier, attacking-direction, match-phase, orientation, and pressure state across time rather than treating frames independently.",
      details:
        "Hysteresis, temporal windows, persistence thresholds, and cooldowns prevent noisy frame-level changes from becoming false insights.",
      metrics: {
        state: "Frame synchronized",
        stability: "Hysteresis + windows",
        direction: "Inferred + override",
      },
    },
    {
      name: "Spatial Reasoning",
      description:
        "Analyzes defensive lines, between-the-lines receivers, pressure, numerical advantage, future space, and passing corridors in metric coordinates.",
      details:
        "Velocity-aware corridor geometry estimates interception risk while contextual line classification distinguishes tactical actions from potential errors.",
      metrics: {
        lineClasses: "6",
        laneStates: "3",
        receiverFactors: "9",
      },
    },
    {
      name: "Decision & Explainability Engine",
      description:
        "Turns tactical signals into scored recommendations with evidence, sub-scores, confidence, and human-readable reasoning.",
      details:
        "Calibration and ball-quality checks cap confidence so weak evidence produces a LIMITED conclusion instead of an unsupported recommendation.",
      metrics: {
        receiverScore: "0–100",
        evidence: "WHY attached",
        confidence: "Quality gated",
      },
    },
    {
      name: "Analyst Workspace",
      description:
        "Presents synchronized match video, a metric tactical map, explainable recommendations, team shape, and a clickable insight timeline.",
      details:
        "The React workspace consumes one Pydantic-mirrored InsightState contract through REST and WebSocket endpoints.",
      metrics: {
        frontend: "React + TypeScript",
        transport: "REST + WebSocket",
        timeline: "Video seeking",
      },
    },
  ],
  results: {
    receiverFactors: "9",
    receiverScore: "0–100",
    defensiveLineClasses: "6",
    passingLaneStates: "3",
    delivery: "REST + WS",
    validation: "Synthetic + E2E",
  },
  visualizationsLayout: "grid",
  visualizations: [
    {
      title: "Attack Intelligence",
      match: "Netherlands vs Tunisia",
      description:
        "Attacking-phase output with possession, final-third presence, open lanes, option value, and team-shape metrics.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/netherlands-tunisia-attack.webp",
    },
    {
      title: "Defensive Intelligence",
      match: "Netherlands vs Tunisia",
      description:
        "Defensive organization view exposing the active structure and contextual defensive indicators.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/netherlands-tunisia-defence.webp",
    },
    {
      title: "Passing Intelligence",
      match: "Netherlands vs Tunisia",
      description:
        "Passing-phase analysis showing synchronized structure and decision-support KPIs from the clip.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/netherlands-tunisia-passes.webp",
    },
    {
      title: "Pressing Intelligence",
      match: "Netherlands vs Tunisia",
      description:
        "Live pressing output with pressers, pressing frames, players under pressure, and defensive-line height.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/netherlands-tunisia-pressing.webp",
    },
    {
      title: "Space Intelligence",
      match: "Netherlands vs Tunisia",
      description:
        "Spatial output measuring free space, overloads, team area, spacing, and width in real time.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/netherlands-tunisia-spaces.webp",
    },
    {
      title: "Attack Intelligence",
      match: "PSG vs Bayern Munich",
      description:
        "Attacking-phase output with live option and team-shape indicators over the broadcast sequence.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-attack.webp",
    },
    {
      title: "Annotated Goal Sequence",
      match: "PSG vs Bayern Munich",
      description:
        "Representative frame from the fully annotated PSG goal sequence used for tactical review.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-annotated-goal.webp",
    },
    {
      title: "Defensive Intelligence",
      match: "PSG vs Bayern Munich",
      description:
        "Defensive organization and phase context generated from the tracked PSG and Bayern structure.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-defence.webp",
    },
    {
      title: "Passing Intelligence",
      match: "PSG vs Bayern Munich",
      description:
        "Passing-phase decision support with synchronized team structure and live tactical indicators.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-passes.webp",
    },
    {
      title: "Pressing Intelligence",
      match: "PSG vs Bayern Munich",
      description:
        "Pressing intensity, active pressers, pressure exposure, and defensive-line position in one output.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-pressing.webp",
    },
    {
      title: "Space Intelligence",
      match: "PSG vs Bayern Munich",
      description:
        "Live free-space, overload, team-shape, spacing, and width measurements from the match sequence.",
      image:
        "assets/img/projects/tactivision-insight/video-stills/psg-bayern-spaces.webp",
    },
  ],
  team: ["Hicham El Mehdi"],
  demos: [
    {
      id: 1,
      title: "TactiVision Insight Broadcast Intelligence",
      video: "assets/videos/tactivision-insight-demo.mp4?v=20260829",
      description:
        "An end-to-end output combining tracked team structure, passing relationships, tactical overlays, and decision-ready football intelligence.",
      category: "Explainable Sports AI",
    },
  ],
};
