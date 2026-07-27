import {
  ChevronDown,
  CircleDot,
  Clapperboard,
  Cpu,
  Database,
  FileJson2,
  Goal,
  Layers,
  MonitorPlay,
  PersonStanding,
  Radar,
  Route,
  ScanText,
  Users,
  Video,
  Zap,
} from "lucide-react";

const engines = [
  {
    icon: Users,
    name: "Player Detection",
    spec: "players · GKs · referees",
  },
  {
    icon: CircleDot,
    name: "Ball Detection",
    spec: "dedicated model · 1280 px",
  },
  {
    icon: PersonStanding,
    name: "Pose Estimation",
    spec: "17 body keypoints",
  },
  {
    icon: Radar,
    name: "Pitch Keypoints",
    spec: "58-ch heatmaps · geometry",
  },
  {
    icon: Goal,
    name: "Goal-Net Segmentation",
    spec: "SAM 3-bootstrapped seg",
  },
  {
    icon: ScanText,
    name: "Jersey OCR",
    spec: "throttled · every 6 frames",
  },
];

const understanding = [
  {
    icon: Layers,
    name: "Tracking & Identity",
    points: [
      "Deep-EIoU multi-object tracker",
      "OSNet appearance re-identification",
      "Guarded jersey-OCR identity lock",
      "Team colours + goalkeeper handling",
    ],
    chip: "temporal continuity",
  },
  {
    icon: Route,
    name: "Metric Projection",
    points: [
      "Keypoint-driven homography",
      "105 × 68 m metric pitch plane",
      "Speed, distance and zone entries",
      "Voronoi pitch control · team shape",
    ],
    chip: "camera → pitch",
  },
  {
    icon: Zap,
    name: "Event Intelligence",
    points: [
      "12 classified pass types",
      "Shots with xG proxy · PPDA",
      "Goal vote: ball ∩ net polygon ×12",
      "Automatic assist promotion",
    ],
    chip: "temporal rules",
  },
];

const outputs = [
  {
    icon: MonitorPlay,
    name: "Live Match Centre",
    spec: "web dashboard · Flask",
  },
  {
    icon: Clapperboard,
    name: "AI Match Report",
    spec: "Full HD dashboard MP4",
  },
  {
    icon: Video,
    name: "Tactical Views",
    spec: "annotated + top-down video",
  },
  {
    icon: FileJson2,
    name: "Data Exports",
    spec: "events JSON · CSV · map PNGs",
  },
];

const cudaChips = ["thread-pool × 4 engines", "pycuda on main thread", "frame-similarity cache"];

const LayerShell = ({ number, name, children }) => (
  <div className="grid gap-3 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-8">
    <div className="flex items-baseline gap-3 lg:block">
      <p className="font-mono text-xs font-bold text-primary">{number}</p>
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground lg:mt-1">
        {name}
      </p>
      <div className="hidden h-px w-10 bg-border lg:mt-3 lg:block" />
    </div>
    <div className="min-w-0">{children}</div>
  </div>
);

const LayerConnector = () => (
  <div className="grid lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-8" aria-hidden="true">
    <div className="hidden lg:block" />
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center">
        <div className="h-4 w-px bg-gradient-to-b from-primary/60 to-primary/20" />
        <ChevronDown className="h-3.5 w-3.5 text-primary/70" />
      </div>
    </div>
  </div>
);

export const TactiVisionArchitecture = () => {
  return (
    <div className="glass space-y-0 rounded-2xl border border-border/50 p-5 md:p-8">
      {/* 01 — Input */}
      <LayerShell number="01" name="Input">
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border/70 bg-surface/40 px-5 py-4 transition-colors hover:border-primary/40">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Video className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground">Broadcast Match Video</p>
            <p className="text-xs text-muted-foreground">
              single tactical camera · Full HD · source clock
            </p>
          </div>
          <span className="rounded-full border border-border/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            One feed
          </span>
        </div>
      </LayerShell>

      <LayerConnector />

      {/* 02 — GPU Perception */}
      <LayerShell number="02" name="Perception">
        <div className="overflow-hidden rounded-xl border border-primary/30">
          <div className="flex flex-wrap items-center gap-3 border-b border-primary/20 bg-primary/10 px-5 py-3">
            <Cpu className="h-4 w-4 shrink-0 text-primary" />
            <p className="min-w-0 flex-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Shared CUDA context — TensorRT FP16 · RTX 4060 (8 GB)
            </p>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Parallel
            </span>
          </div>
          <div className="grid gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
            {engines.map((engine) => (
              <div
                key={engine.name}
                className="group bg-background/80 px-5 py-4 transition-colors hover:bg-primary/5"
              >
                <engine.icon className="h-5 w-5 text-primary/80 transition-colors group-hover:text-primary" />
                <p className="mt-2.5 text-sm font-bold text-foreground">{engine.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{engine.spec}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border/50 bg-surface/30 px-5 py-3">
            {cudaChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/90"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </LayerShell>

      <LayerConnector />

      {/* 03 — Understanding */}
      <LayerShell number="03" name="Understanding">
        <div className="grid gap-3 md:grid-cols-3">
          {understanding.map((block) => (
            <div
              key={block.name}
              className="flex flex-col rounded-xl border border-border/70 bg-surface/40 p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <block.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold leading-snug text-foreground">{block.name}</p>
              </div>
              <ul className="mt-4 flex-1 space-y-2">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-4 w-fit rounded-full border border-border/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {block.chip}
              </span>
            </div>
          ))}
        </div>
      </LayerShell>

      <LayerConnector />

      {/* 04 — Match state */}
      <LayerShell number="04" name="State">
        <div className="glow-border flex flex-wrap items-center gap-4 rounded-xl border border-primary/40 bg-primary/5 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 text-primary">
            <Database className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground">One Synchronized Match State</p>
            <p className="text-xs text-muted-foreground">
              60+ KPIs · per-player statistics · frame-accurate to the source video
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Live
          </span>
        </div>
      </LayerShell>

      <LayerConnector />

      {/* 05 — Delivery */}
      <LayerShell number="05" name="Delivery">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outputs.map((output) => (
            <div
              key={output.name}
              className="group rounded-xl border border-border/70 bg-surface/40 p-5 transition-colors hover:border-primary/40"
            >
              <output.icon className="h-5 w-5 text-primary/80 transition-colors group-hover:text-primary" />
              <p className="mt-3 text-sm font-bold text-foreground">{output.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{output.spec}</p>
            </div>
          ))}
        </div>
      </LayerShell>
    </div>
  );
};
