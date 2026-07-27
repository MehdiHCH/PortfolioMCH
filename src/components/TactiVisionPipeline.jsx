const stages = [
  {
    number: "01",
    title: "Video Ingest",
    detail: "Full HD tactical-camera frames on the source clock",
    metric: "59.94 FPS",
    tone: "teal",
  },
  {
    number: "02",
    title: "Perception",
    detail: "6 TensorRT engines in parallel under one CUDA context",
    metric: "FP16 TRT",
    tone: "teal",
  },
  {
    number: "03",
    title: "Identity",
    detail: "Deep-EIoU tracking, ReID and jersey-OCR locking",
    metric: "ID LOCKED",
    tone: "blue",
  },
  {
    number: "04",
    title: "Projection",
    detail: "Keypoint homography onto the 105 × 68 m pitch",
    metric: "METRIC XY",
    tone: "blue",
  },
  {
    number: "05",
    title: "Intelligence",
    detail: "Temporal events — passes, shots, goals, PPDA",
    metric: "LIVE EVENTS",
    tone: "amber",
  },
  {
    number: "06",
    title: "Presentation",
    detail: "Live dashboard + AI match-report video",
    metric: "1080P MP4",
    tone: "amber",
  },
];

const stageToneStyles = {
  teal: {
    border: "border-primary/35 hover:border-primary/65",
    number: "border-primary/40 bg-primary/10 text-primary",
    metric: "bg-primary/10 text-primary",
  },
  blue: {
    border: "border-blue-400/30 hover:border-blue-400/60",
    number: "border-blue-400/40 bg-blue-400/10 text-blue-300",
    metric: "bg-blue-400/10 text-blue-300",
  },
  amber: {
    border: "border-amber-400/30 hover:border-amber-400/60",
    number: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    metric: "bg-amber-400/10 text-amber-300",
  },
};

const StageNumber = ({ x, number }) => (
  <g>
    <circle cx={x} cy="92" r="23" fill="none" stroke="#20b2a6" strokeWidth="0.8" opacity="0.22" strokeDasharray="5 7">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 ${x} 92`}
        to={`360 ${x} 92`}
        dur="14s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={x} cy="92" r="18" fill="#0c171b" stroke="#20b2a6" strokeWidth="1.5" />
    <circle cx={x} cy="92" r="3" fill="#20b2a6" opacity="0.18" className="pipeline-node-pulse" />
    <text
      x={x}
      y="93"
      fill="#8ee8df"
      fontSize="11"
      fontWeight="700"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {number}
    </text>
  </g>
);

const HudPill = ({ x, label, value, color = "#20b2a6", width = 88 }) => (
  <g>
    <rect
      x={x}
      y="18"
      width={width}
      height="28"
      rx="6"
      fill="#101a1f"
      stroke="#26363e"
    />
    <circle cx={x + 12} cy="32" r="3" fill={color} />
    <text x={x + 20} y="29" fill="#71808a" fontSize="6.5" fontWeight="700" letterSpacing="0.7">
      {label}
    </text>
    <text x={x + 20} y="39" fill="#e6eef1" fontSize="8.5" fontWeight="700">
      {value}
    </text>
  </g>
);

const ConnectorLabel = ({ x, label, color = "#8ee8df" }) => (
  <g>
    <rect x={x - 25} y="174" width="50" height="13" rx="6.5" fill="#0b1115" stroke="#26363e" />
    <text x={x} y="183" fill={color} fontSize="6.5" fontWeight="700" textAnchor="middle" letterSpacing="0.6">
      {label}
    </text>
  </g>
);

const RuntimeMetric = ({ x, label, value, color = "#8ee8df" }) => (
  <g>
    <rect x={x} y="369" width="98" height="39" rx="6" fill="#0b1418" stroke="#26363e" />
    <text x={x + 10} y="383" fill="#667781" fontSize="6.5" fontWeight="700" letterSpacing="0.7">
      {label}
    </text>
    <text x={x + 10} y="398" fill={color} fontSize="11" fontWeight="700">
      {value}
    </text>
  </g>
);

const FlowPacket = ({ path, begin = "0s", color = "#8ee8df", r = 5, dur = "1.45s", opacity = 1 }) => (
  <circle className="pipeline-packet" r={r} fill={color} opacity={opacity}>
    <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
      <mpath href={`#${path}`} />
    </animateMotion>
  </circle>
);

const StageCaption = ({ cx, title, subtitle, chip, chipColor = "#8ee8df", chipFill = "#17312f" }) => (
  <g>
    <text x={cx} y="266" fill="#f0f2f5" fontSize="15" fontWeight="700" textAnchor="middle">
      {title}
    </text>
    <text x={cx} y="285" fill="#7f909a" fontSize="10.5" textAnchor="middle">
      {subtitle}
    </text>
    <rect x={cx - 60} y="294" width="120" height="17" rx="8.5" fill={chipFill} />
    <text x={cx} y="306" fill={chipColor} fontSize="8.5" fontWeight="700" textAnchor="middle">
      {chip}
    </text>
  </g>
);

// Utilization lane for the perception stage: label + animated activity bar.
const EngineLane = ({ y, label, values, dur, color = "#20b2a6", textColor = "#9de9e2" }) => (
  <g>
    <text x="246" y={y + 1} fill={textColor} fontSize="7.5" fontWeight="700" dominantBaseline="middle">
      {label}
    </text>
    <rect x="298" y={y - 4} width="74" height="8" rx="2" fill="#0a1418" stroke="#1f2e35" strokeWidth="0.5" />
    <rect x="298" y={y - 4} height="8" rx="2" fill={color} opacity="0.85">
      <animate attributeName="width" values={values} dur={dur} repeatCount="indefinite" />
    </rect>
  </g>
);

const EventRow = ({ y, tag, tagFill, tagColor, label, begin }) => (
  <g>
    <rect x="822" y={y - 11} width="132" height="18" rx="3" fill="#111a20" stroke="#26363e" />
    <rect x="827" y={y - 8} width="36" height="12" rx="2" fill={tagFill} />
    <text x="845" y={y + 1} fill={tagColor} fontSize="7" fontWeight="700" textAnchor="middle" dominantBaseline="middle">
      {tag}
    </text>
    <text x="869" y={y + 1} fill="#c7d2d8" fontSize="8" dominantBaseline="middle">
      {label}
    </text>
    <animate attributeName="opacity" values="0.25;1;1;0.25" keyTimes="0;0.08;0.55;1" dur="6s" begin={begin} repeatCount="indefinite" />
  </g>
);

const TICKER_TEXT =
  "POSSESSION 100% PSG · TERRITORY 76% PSG · PASS ACCURACY 83% · PASSES 15 / 6 TYPES · FINAL-THIRD ENTRIES 25 · BOX ENTRIES 10 · INTERCEPTIONS 1 · THROUGH BALL VITINHA → NEVES · ";

export const TactiVisionPipeline = () => {
  return (
    <div className="space-y-5">
      <div className="pipeline-canvas overflow-hidden rounded-xl border border-primary/20 bg-[#0b1115] ring-1 ring-white/[0.03]">
        <svg
          viewBox="0 0 1200 500"
          className="block h-auto w-full"
          role="img"
          aria-labelledby="tactivision-pipeline-title tactivision-pipeline-description"
        >
          <title id="tactivision-pipeline-title">TactiVision processing pipeline</title>
          <desc id="tactivision-pipeline-description">
            Animated flow from tactical-camera video through parallel perception, identity
            tracking, pitch homography, event intelligence, and dashboard delivery, driven by
            real data from a processed Bayern Munich versus Paris Saint-Germain sequence.
          </desc>

          <defs>
            <linearGradient id="pipeline-card" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#19262d" />
              <stop offset="0.55" stopColor="#121d22" />
              <stop offset="1" stopColor="#0d1519" />
            </linearGradient>
            <linearGradient id="pipeline-accent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#20b2a6" />
              <stop offset="1" stopColor="#f5a623" />
            </linearGradient>
            <radialGradient id="pipeline-teal-halo">
              <stop offset="0" stopColor="#20b2a6" stopOpacity="0.13" />
              <stop offset="1" stopColor="#20b2a6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pipeline-amber-halo">
              <stop offset="0" stopColor="#f5a623" stopOpacity="0.11" />
              <stop offset="1" stopColor="#f5a623" stopOpacity="0" />
            </radialGradient>
            <pattern id="pipeline-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#25323a" strokeWidth="0.6" />
            </pattern>
            <filter id="pipeline-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pipeline-card-shadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#000000" floodOpacity="0.45" />
            </filter>
            <marker id="pipeline-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#20b2a6" />
            </marker>

            <path id="flow-1" d="M 202 195 L 230 195" />
            <path id="flow-2" d="M 394 195 L 422 195" />
            <path id="flow-3" d="M 586 195 L 614 195" />
            <path id="flow-4" d="M 778 195 L 806 195" />
            <path id="flow-5" d="M 970 195 L 998 195" />
            <path id="projection-drop" d="M 700 168 C 706 186, 708 200, 702 222" />
            <path id="momentum-line" d="M 1024 226 L 1040 224 L 1056 212 L 1072 214 L 1090 208 L 1108 210 L 1136 204" />
            <path id="xthreat-line" d="M 822 240 L 844 234 L 866 238 L 890 222 L 916 228 L 946 208" />
            <path id="runtime-1" d="M 312 337 L 312 356" />
            <path id="runtime-2" d="M 504 337 L 504 356" />
            <path id="runtime-3" d="M 696 337 L 696 356" />
            <path id="runtime-4" d="M 888 337 L 888 356" />

            <clipPath id="ticker-clip">
              <rect x="168" y="444" width="986" height="34" rx="8" />
            </clipPath>
          </defs>

          <rect width="1200" height="500" fill="#0b1115" />
          <rect width="1200" height="500" fill="url(#pipeline-grid)" opacity="0.48" />
          <ellipse cx="370" cy="210" rx="430" ry="255" fill="url(#pipeline-teal-halo)" />
          <ellipse cx="1030" cy="230" rx="310" ry="230" fill="url(#pipeline-amber-halo)" />
          <path d="M 42 63 H 1158" stroke="#26363e" strokeWidth="0.8" opacity="0.8" />

          {/* Header */}
          <path d="M 42 51 L 250 51" stroke="url(#pipeline-accent)" strokeWidth="3" />
          <rect y="49.5" width="26" height="3" rx="1.5" fill="#ffffff" className="pipeline-packet">
            <animate attributeName="x" values="42;224;42" dur="5.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.75;0;0;0.75;0" dur="5.2s" repeatCount="indefinite" />
          </rect>
          <text x="42" y="35" fill="#f0f2f5" fontSize="17" fontWeight="700" letterSpacing="2">
            FRAME-ACCURATE INFERENCE GRAPH
          </text>
          <text x="42" y="48" fill="#657781" fontSize="7.5" fontWeight="600" letterSpacing="1">
            ONE BROADCAST FEED · ONE SYNCHRONIZED MATCH STATE
          </text>
          <HudPill x={386} label="SOURCE CLOCK" value="59.94 FPS" />
          <HudPill x={482} label="COMPUTE" value="TENSORRT FP16" color="#3178c6" width={104} />
          <HudPill x={594} label="DEVICE" value="RTX 4060" color="#f5a623" />
          <g>
            <rect x="806" y="16" width="356" height="32" rx="16" fill="#101a1f" stroke="#26363e" />
            <circle cx="826" cy="32" r="4" fill="#e25567" />
            <text x="836" y="36" fill="#c7d2d8" fontSize="9" fontWeight="600">BAYERN MUNICH</text>
            <text x="938" y="36" fill="#f0f2f5" fontSize="10" fontWeight="700" textAnchor="middle">0 – 0</text>
            <circle cx="962" cy="32" r="4" fill="#3178c6" />
            <text x="972" y="36" fill="#c7d2d8" fontSize="9" fontWeight="600">PARIS SAINT-GERMAIN</text>
            <circle cx="1126" cy="32" r="4.5" fill="#f5a623" className="pipeline-node-pulse" />
            <text x="1136" y="36" fill="#ffc971" fontSize="8.5" fontWeight="700">LIVE</text>
          </g>

          {[120, 312, 504, 696, 888, 1080].map((x, index) => (
            <StageNumber key={x} x={x} number={stages[index].number} />
          ))}

          {/* 01 — VIDEO INGEST: screen with pitch scene + sweeping scanline */}
          <g className="pipeline-stage">
            <rect x="38" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="38" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <rect x="58" y="146" width="124" height="72" rx="4" fill="#0a0f12" stroke="#5d717d" />
            <path d="M 120 150 L 120 214 M 66 182 L 174 182" stroke="#1d3a2f" strokeWidth="1" />
            <circle cx="120" cy="182" r="10" fill="none" stroke="#1d3a2f" strokeWidth="1" />
            <rect x="80" y="168" width="9" height="15" rx="1.5" fill="#e25567" />
            <rect x="134" y="184" width="9" height="15" rx="1.5" fill="#3178c6" />
            <circle r="3" fill="#f5a623" filter="url(#pipeline-glow)">
              <animate attributeName="cx" values="96;140;118;96" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="196;192;178;196" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <text x="176" y="157" fill="#e25567" fontSize="7.5" fontWeight="700" textAnchor="end">
              ● 00:12
              <animate attributeName="opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite" />
            </text>
            <rect x="58" y="146" width="124" height="2.5" fill="#20b2a6" opacity="0.8">
              <animate attributeName="y" values="146;215.5;146" dur="2.8s" repeatCount="indefinite" />
            </rect>
            <StageCaption cx="120" title="VIDEO INGEST" subtitle="Tactical camera frames" chip="FULL HD · SOURCE CLOCK" />
          </g>

          {/* 02 — PERCEPTION: six engine lanes with live GPU activity */}
          <g className="pipeline-stage pipeline-stage-delay-1">
            <rect x="230" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="230" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <EngineLane y="152" label="PLAYER" values="24;66;38;58;24" dur="2.3s" />
            <EngineLane y="168" label="BALL" values="50;20;64;30;50" dur="2.7s" />
            <EngineLane y="184" label="POSE" values="34;56;26;60;34" dur="2.1s" />
            <EngineLane y="200" label="PITCH KP" values="60;40;68;36;60" dur="3.1s" />
            <EngineLane y="216" label="GOAL NET" values="18;44;24;40;18" dur="2.9s" />
            <EngineLane
              y="232"
              label="OCR"
              values="6;6;66;6;6"
              dur="3.2s"
              color="#f5a623"
              textColor="#ffc971"
            />
            <StageCaption cx="312" title="PERCEPTION" subtitle="6 TensorRT engines in parallel" chip="SHARED CUDA CONTEXT" chipColor="#ffc971" chipFill="#3a2920" />
          </g>

          {/* 03 — IDENTITY: tracked players with trails and a locked jersey ID */}
          <g className="pipeline-stage pipeline-stage-delay-2">
            <rect x="422" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="422" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <path className="pipeline-flow" d="M 438 158 C 462 144, 494 156, 514 150" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeDasharray="5 4" />
            <path className="pipeline-flow" d="M 438 202 C 468 190, 498 206, 532 197" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeDasharray="5 4" />
            <path className="pipeline-flow" d="M 574 226 C 560 234, 546 238, 478 234" fill="none" stroke="#e25567" strokeWidth="1.5" strokeDasharray="5 4" />
            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0; 4 -3; 1 2; 0 0" dur="5s" repeatCount="indefinite" />
              <circle cx="520" cy="150" r="10" fill="#3178c6" stroke="#0b1115" strokeWidth="1.5" />
              <text x="520" y="151" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle" dominantBaseline="middle">17</text>
            </g>
            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0; -3 3; 2 -2; 0 0" dur="6.2s" repeatCount="indefinite" />
              <circle cx="538" cy="197" r="10" fill="#3178c6" stroke="#0b1115" strokeWidth="1.5" />
              <text x="538" y="198" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2</text>
            </g>
            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0; 3 2; -2 -2; 0 0" dur="5.6s" repeatCount="indefinite" />
              <circle cx="470" cy="234" r="9" fill="#e25567" stroke="#0b1115" strokeWidth="1.5" />
              <text x="470" y="235" fill="#fff" fontSize="8.5" fontWeight="700" textAnchor="middle" dominantBaseline="middle">11</text>
            </g>
            <g>
              <animate attributeName="opacity" values="0.75;1;0.75" dur="2.4s" repeatCount="indefinite" />
              <rect x="466" y="160" width="96" height="16" rx="3" fill="#111a20" stroke="#4f616c" />
              <text x="514" y="169" fill="#f5a623" fontSize="8" fontWeight="700" textAnchor="middle" dominantBaseline="middle">ID 17 · VITINHA ✓</text>
            </g>
            <StageCaption cx="504" title="IDENTITY" subtitle="Deep-EIoU · ReID · OCR lock" chip="TEMPORAL CONTINUITY" />
          </g>

          {/* 04 — PROJECTION: camera view dropping onto the top-down metric pitch */}
          <g className="pipeline-stage pipeline-stage-delay-3">
            <rect x="614" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="614" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <path d="M 640 146 L 752 146 L 736 184 L 656 184 Z" fill="#0f211c" stroke="#4b8d6d" />
            <circle cx="702" cy="163" r="4" fill="#3178c6" />
            <circle cx="668" cy="172" r="4" fill="#e25567" />
            <path className="pipeline-runtime-flow" d="M 700 168 C 706 186, 708 200, 702 222" fill="none" stroke="#20b2a6" strokeWidth="1.2" strokeDasharray="3 4" />
            <circle className="pipeline-packet" r="3" fill="#8ee8df">
              <animateMotion dur="1.8s" repeatCount="indefinite">
                <mpath href="#projection-drop" />
              </animateMotion>
            </circle>
            <rect x="634" y="206" width="124" height="42" rx="3" fill="#0c1f16" stroke="#2f5d43" />
            <path d="M 696 206 L 696 248" stroke="#2f5d43" strokeWidth="1" />
            <circle cx="696" cy="227" r="7" fill="none" stroke="#2f5d43" strokeWidth="1" />
            <rect x="634" y="216" width="12" height="22" fill="none" stroke="#2f5d43" strokeWidth="1" />
            <rect x="746" y="216" width="12" height="22" fill="none" stroke="#2f5d43" strokeWidth="1" />
            <circle cy="224" r="4" fill="#3178c6">
              <animate attributeName="cx" values="702;730;714;702" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#e25567">
              <animate attributeName="cx" values="668;650;660;668" dur="6.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="232;236;226;232" dur="6.4s" repeatCount="indefinite" />
            </circle>
            <StageCaption cx="696" title="PROJECTION" subtitle="Camera → metric pitch" chip="105 × 68 M GRID" />
          </g>

          {/* 05 — INTELLIGENCE: live event feed from the real clip + xThreat spark */}
          <g className="pipeline-stage pipeline-stage-delay-4">
            <rect x="806" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="806" y="122" width="164" height="4" rx="2" fill="#f5a623" />
            <EventRow y="152" tag="PASS" tagFill="#17312f" tagColor="#8ee8df" label="Hakimi → Vitinha" begin="0s" />
            <EventRow y="174" tag="THRU" tagFill="#3a2920" tagColor="#ffc971" label="Vitinha → Neves" begin="2s" />
            <EventRow y="196" tag="INT" tagFill="#38181e" tagColor="#ff8fa0" label="Bayern #11" begin="4s" />
            <text x="822" y="219" fill="#7f909a" fontSize="7.5" fontWeight="700" letterSpacing="1">xTHREAT</text>
            <path d="M 822 240 L 844 234 L 866 238 L 890 222 L 916 228 L 946 208" fill="none" stroke="#f5a623" strokeWidth="2" opacity="0.35" />
            <path
              d="M 822 240 L 844 234 L 866 238 L 890 222 L 916 228 L 946 208"
              fill="none"
              stroke="#f5a623"
              strokeWidth="2"
              strokeDasharray="140"
            >
              <animate attributeName="stroke-dashoffset" values="140;0;0" keyTimes="0;0.55;1" dur="4.5s" repeatCount="indefinite" />
            </path>
            <circle r="3.5" fill="#f5a623" filter="url(#pipeline-glow)" className="pipeline-packet">
              <animateMotion dur="4.5s" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear" repeatCount="indefinite">
                <mpath href="#xthreat-line" />
              </animateMotion>
            </circle>
            <circle cx="946" cy="208" r="4" fill="#f5a623" className="pipeline-node-pulse" filter="url(#pipeline-glow)" />
            <StageCaption cx="888" title="INTELLIGENCE" subtitle="Temporal event engine" chip="15 PASSES · 6 TYPES" chipColor="#ffc971" chipFill="#3a2920" />
          </g>

          {/* 06 — PRESENTATION: mini AI match report with real KPI values */}
          <g className="pipeline-stage pipeline-stage-delay-5">
            <rect x="998" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" filter="url(#pipeline-card-shadow)" />
            <rect x="998" y="122" width="164" height="4" rx="2" fill="#f5a623" />
            <rect x="1014" y="146" width="132" height="96" rx="4" fill="#e9edef" />
            <rect x="1014" y="146" width="132" height="14" rx="4" fill="#f7f9fa" />
            <text x="1020" y="156" fill="#1a7a4f" fontSize="6.5" fontWeight="700" letterSpacing="0.5">TACTIVISION</text>
            <text x="1120" y="156" fill="#3c464c" fontSize="6.5" fontWeight="700">BAY 0–0 PSG</text>
            {[
              [1020, "POS", "100%"],
              [1061, "TER", "76%"],
              [1102, "ACC", "83%"],
            ].map(([x, label, value]) => (
              <g key={label}>
                <rect x={x} y="164" width="38" height="26" rx="2" fill="#ffffff" stroke="#d8dfe2" strokeWidth="0.75" />
                <text x={x + 19} y="172" fill="#8a969c" fontSize="5.5" fontWeight="700" textAnchor="middle">{label}</text>
                <text x={x + 19} y="184" fill="#3178c6" fontSize="8.5" fontWeight="700" textAnchor="middle">{value}</text>
              </g>
            ))}
            <rect x="1020" y="196" width="120" height="40" rx="2" fill="#ffffff" stroke="#d8dfe2" strokeWidth="0.75" />
            <path d="M 1024 226 L 1040 224 L 1056 212 L 1072 214 L 1090 208 L 1108 210 L 1136 204 L 1136 232 L 1024 232 Z" fill="#3178c6" opacity="0.22" />
            <path d="M 1024 226 L 1040 224 L 1056 212 L 1072 214 L 1090 208 L 1108 210 L 1136 204" fill="none" stroke="#3178c6" strokeWidth="1.5" />
            <circle className="pipeline-packet" r="2.5" fill="#3178c6">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#momentum-line" />
              </animateMotion>
            </circle>
            <rect x="1014" y="236" width="132" height="3" fill="#dfe6e9" />
            <rect x="1014" y="236" height="3" fill="#1a7a4f">
              <animate attributeName="width" values="0;132" dur="6s" repeatCount="indefinite" />
            </rect>
            <circle cx="1140" cy="152" r="4" fill="#20b2a6" className="pipeline-node-pulse" />
            <StageCaption cx="1080" title="PRESENTATION" subtitle="Dashboard + AI report" chip="LIVE UI + FULL HD MP4" chipColor="#ffc971" chipFill="#3a2920" />
          </g>

          {/* Inter-stage flows */}
          {[
            [216, "FRAME", "#8ee8df"],
            [408, "DETECTIONS", "#8ee8df"],
            [600, "TRACKS", "#8ee8df"],
            [792, "METRIC XY", "#ffc971"],
            [984, "EVENTS", "#ffc971"],
          ].map(([x, label, color]) => (
            <ConnectorLabel key={label} x={x} label={label} color={color} />
          ))}

          {[
            [202, 230],
            [394, 422],
            [586, 614],
            [778, 806],
            [970, 998],
          ].map(([x1, x2]) => (
            <path
              key={x1}
              className="pipeline-flow"
              d={`M ${x1} 195 L ${x2} 195`}
              fill="none"
              stroke="#20b2a6"
              strokeWidth="2"
              markerEnd="url(#pipeline-arrow)"
            />
          ))}

          <FlowPacket path="flow-1" />
          <FlowPacket path="flow-2" begin="0.25s" />
          <FlowPacket path="flow-3" begin="0.5s" />
          <FlowPacket path="flow-4" begin="0.75s" color="#f5a623" />
          <FlowPacket path="flow-5" begin="1s" color="#f5a623" />
          <FlowPacket path="flow-1" begin="0.72s" r={2.5} opacity={0.55} />
          <FlowPacket path="flow-2" begin="0.97s" r={2.5} opacity={0.55} />
          <FlowPacket path="flow-3" begin="1.22s" r={2.5} opacity={0.55} />
          <FlowPacket path="flow-4" begin="1.47s" r={2.5} color="#f5a623" opacity={0.55} />
          <FlowPacket path="flow-5" begin="1.72s" r={2.5} color="#f5a623" opacity={0.55} />
          <FlowPacket path="runtime-1" begin="0s" r={2.5} dur="1.1s" opacity={0.8} />
          <FlowPacket path="runtime-2" begin="0.35s" r={2.5} dur="1.1s" opacity={0.8} />
          <FlowPacket path="runtime-3" begin="0.7s" r={2.5} dur="1.1s" opacity={0.8} />
          <FlowPacket path="runtime-4" begin="1.05s" r={2.5} dur="1.1s" color="#f5a623" opacity={0.8} />

          {/* GPU orchestration layer */}
          <g>
            <rect
              x="38"
              y="356"
              width="1124"
              height="68"
              rx="9"
              fill="#101a1f"
              stroke="#2b3d45"
              filter="url(#pipeline-card-shadow)"
            />
            <rect x="38" y="356" width="5" height="68" rx="2" fill="#20b2a6" />
            <text x="60" y="378" fill="#dce5e9" fontSize="12" fontWeight="700" letterSpacing="1">
              GPU ORCHESTRATION LAYER
            </text>
            <text x="60" y="396" fill="#71808a" fontSize="8.5">
              shared CUDA context · parallel inference · similarity cache · synchronized frame state
            </text>
            <text x="60" y="411" fill="#4f626c" fontSize="7.5" fontWeight="600" letterSpacing="0.5">
              ZERO-COPY HANDOFFS BETWEEN DETECTION, TRACKING AND ANALYTICS
            </text>
            <RuntimeMetric x={590} label="THROUGHPUT" value="13 FPS" />
            <RuntimeMetric x={696} label="GPU MEMORY" value="5.8 GB" color="#70aef0" />
            <RuntimeMetric x={802} label="ENGINES" value="6 × FP16" color="#ffc971" />
            <rect x="916" y="369" width="222" height="39" rx="6" fill="#0b1418" stroke="#26363e" />
            <circle cx="936" cy="388" r="6" fill="#20b2a6" className="pipeline-node-pulse" />
            <text x="952" y="385" fill="#71808a" fontSize="6.5" fontWeight="700" letterSpacing="0.7">
              PIPELINE STATE
            </text>
            <text x="952" y="398" fill="#8ee8df" fontSize="10" fontWeight="700">
              RUNNING · SYNCED
            </text>
            {[
              [1082, "0.9s", "10;3;12;6;10"],
              [1090, "1.2s", "5;13;4;11;5"],
              [1098, "1.05s", "12;6;9;3;12"],
              [1106, "1.35s", "7;12;5;10;7"],
              [1114, "0.95s", "11;4;13;7;11"],
            ].map(([x, dur, heights]) => (
              <rect key={x} x={x} width="4" rx="1" fill="#20b2a6" opacity="0.85">
                <animate attributeName="height" values={heights} dur={dur} repeatCount="indefinite" />
                <animate
                  attributeName="y"
                  values={heights
                    .split(";")
                    .map((h) => 401 - Number(h))
                    .join(";")}
                  dur={dur}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>

          {[312, 504, 696, 888].map((x, index) => (
            <path
              key={x}
              className="pipeline-runtime-flow"
              d={`M ${x} 337 L ${x} 356`}
              fill="none"
              stroke={index === 3 ? "#f5a623" : "#20b2a6"}
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          ))}

          {/* Live match-state ticker fed by the processed clip */}
          <g>
            <rect x="38" y="444" width="1124" height="34" rx="8" fill="#101a1f" stroke="#26363e" />
            <rect x="38" y="444" width="5" height="34" rx="2" fill="#f5a623" />
            <text x="58" y="465" fill="#dce5e9" fontSize="10" fontWeight="700" letterSpacing="1">MATCH STATE BUS</text>
            <g clipPath="url(#ticker-clip)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-1160 0"
                  dur="33s"
                  repeatCount="indefinite"
                />
                <text x="178" y="465" fill="#8ee8df" fontSize="10" letterSpacing="1">{TICKER_TEXT}</text>
                <text x="1338" y="465" fill="#8ee8df" fontSize="10" letterSpacing="1">{TICKER_TEXT}</text>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage) => {
          const tone = stageToneStyles[stage.tone];

          return (
            <div
              key={stage.number}
              className={`group flex min-w-0 items-start gap-3 rounded-lg border bg-surface/20 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface/35 ${tone.border}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${tone.number}`}
              >
                {stage.number}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                  <span
                    className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wide ${tone.metric}`}
                  >
                    {stage.metric}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
