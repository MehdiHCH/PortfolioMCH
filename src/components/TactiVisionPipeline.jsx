const stages = [
  {
    number: "01",
    title: "Video Ingest",
    detail: "Full HD tactical-camera frames on the source clock",
  },
  {
    number: "02",
    title: "Perception",
    detail: "6 TensorRT engines in parallel under one CUDA context",
  },
  {
    number: "03",
    title: "Identity",
    detail: "Deep-EIoU tracking, ReID and jersey-OCR locking",
  },
  {
    number: "04",
    title: "Projection",
    detail: "Keypoint homography onto the 105 × 68 m pitch",
  },
  {
    number: "05",
    title: "Intelligence",
    detail: "Temporal events — passes, shots, goals, PPDA",
  },
  {
    number: "06",
    title: "Presentation",
    detail: "Live dashboard + AI match-report video",
  },
];

const StageNumber = ({ x, number }) => (
  <g>
    <circle cx={x} cy="92" r="18" fill="#101a1f" stroke="#20b2a6" strokeWidth="1.5" />
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

const FlowPacket = ({ path, begin = "0s", color = "#8ee8df" }) => (
  <circle className="pipeline-packet" r="5" fill={color}>
    <animateMotion dur="1.45s" begin={begin} repeatCount="indefinite">
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
      <div className="pipeline-canvas overflow-hidden rounded-lg border border-border/70 bg-[#0b1115]">
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
              <stop offset="0" stopColor="#172229" />
              <stop offset="1" stopColor="#10171c" />
            </linearGradient>
            <linearGradient id="pipeline-accent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#20b2a6" />
              <stop offset="1" stopColor="#f5a623" />
            </linearGradient>
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

            <clipPath id="ticker-clip">
              <rect x="168" y="444" width="986" height="34" rx="8" />
            </clipPath>
          </defs>

          <rect width="1200" height="500" fill="#0b1115" />
          <rect width="1200" height="500" fill="url(#pipeline-grid)" opacity="0.48" />

          {/* Header */}
          <path d="M 42 48 L 210 48" stroke="url(#pipeline-accent)" strokeWidth="3" />
          <text x="42" y="35" fill="#f0f2f5" fontSize="17" fontWeight="700" letterSpacing="2">
            FRAME-ACCURATE INFERENCE GRAPH
          </text>
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
            <rect x="38" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
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
            <text x="176" y="157" fill="#e25567" fontSize="7.5" fontWeight="700" textAnchor="end">● 00:12</text>
            <rect x="58" y="146" width="124" height="2.5" fill="#20b2a6" opacity="0.8">
              <animate attributeName="y" values="146;215.5;146" dur="2.8s" repeatCount="indefinite" />
            </rect>
            <StageCaption cx="120" title="VIDEO INGEST" subtitle="Tactical camera frames" chip="FULL HD · SOURCE CLOCK" />
          </g>

          {/* 02 — PERCEPTION: six engine lanes with live GPU activity */}
          <g className="pipeline-stage pipeline-stage-delay-1">
            <rect x="230" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
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
            <rect x="422" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="422" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <path className="pipeline-flow" d="M 438 158 C 462 144, 494 156, 514 150" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeDasharray="5 4" />
            <path className="pipeline-flow" d="M 438 202 C 468 190, 498 206, 532 197" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeDasharray="5 4" />
            <path className="pipeline-flow" d="M 574 226 C 560 234, 546 238, 478 234" fill="none" stroke="#e25567" strokeWidth="1.5" strokeDasharray="5 4" />
            <circle cx="520" cy="150" r="10" fill="#3178c6" stroke="#0b1115" strokeWidth="1.5" />
            <text x="520" y="151" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle" dominantBaseline="middle">17</text>
            <circle cx="538" cy="197" r="10" fill="#3178c6" stroke="#0b1115" strokeWidth="1.5" />
            <text x="538" y="198" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2</text>
            <circle cx="470" cy="234" r="9" fill="#e25567" stroke="#0b1115" strokeWidth="1.5" />
            <text x="470" y="235" fill="#fff" fontSize="8.5" fontWeight="700" textAnchor="middle" dominantBaseline="middle">11</text>
            <rect x="466" y="160" width="96" height="16" rx="3" fill="#111a20" stroke="#4f616c" />
            <text x="514" y="169" fill="#f5a623" fontSize="8" fontWeight="700" textAnchor="middle" dominantBaseline="middle">ID 17 · VITINHA ✓</text>
            <StageCaption cx="504" title="IDENTITY" subtitle="Deep-EIoU · ReID · OCR lock" chip="TEMPORAL CONTINUITY" />
          </g>

          {/* 04 — PROJECTION: camera view dropping onto the top-down metric pitch */}
          <g className="pipeline-stage pipeline-stage-delay-3">
            <rect x="614" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
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
            <circle cx="668" cy="232" r="4" fill="#e25567" />
            <StageCaption cx="696" title="PROJECTION" subtitle="Camera → metric pitch" chip="105 × 68 M GRID" />
          </g>

          {/* 05 — INTELLIGENCE: live event feed from the real clip + xThreat spark */}
          <g className="pipeline-stage pipeline-stage-delay-4">
            <rect x="806" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="806" y="122" width="164" height="4" rx="2" fill="#f5a623" />
            <EventRow y="152" tag="PASS" tagFill="#17312f" tagColor="#8ee8df" label="Hakimi → Vitinha" begin="0s" />
            <EventRow y="174" tag="THRU" tagFill="#3a2920" tagColor="#ffc971" label="Vitinha → Neves" begin="2s" />
            <EventRow y="196" tag="INT" tagFill="#38181e" tagColor="#ff8fa0" label="Bayern #11" begin="4s" />
            <text x="822" y="219" fill="#7f909a" fontSize="7.5" fontWeight="700" letterSpacing="1">xTHREAT</text>
            <path d="M 822 240 L 844 234 L 866 238 L 890 222 L 916 228 L 946 208" fill="none" stroke="#f5a623" strokeWidth="2" />
            <circle cx="946" cy="208" r="4" fill="#f5a623" className="pipeline-node-pulse" filter="url(#pipeline-glow)" />
            <StageCaption cx="888" title="INTELLIGENCE" subtitle="Temporal event engine" chip="15 PASSES · 6 TYPES" chipColor="#ffc971" chipFill="#3a2920" />
          </g>

          {/* 06 — PRESENTATION: mini AI match report with real KPI values */}
          <g className="pipeline-stage pipeline-stage-delay-5">
            <rect x="998" y="122" width="164" height="215" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
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
            <circle cx="1140" cy="152" r="4" fill="#20b2a6" className="pipeline-node-pulse" />
            <StageCaption cx="1080" title="PRESENTATION" subtitle="Dashboard + AI report" chip="LIVE UI + FULL HD MP4" chipColor="#ffc971" chipFill="#3a2920" />
          </g>

          {/* Inter-stage flows */}
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

          {/* GPU orchestration layer */}
          <g>
            <rect x="230" y="372" width="740" height="52" rx="8" fill="#101a1f" stroke="#26363e" />
            <rect x="230" y="372" width="5" height="52" rx="2" fill="#20b2a6" />
            <text x="255" y="393" fill="#dce5e9" fontSize="12" fontWeight="700" letterSpacing="1">GPU ORCHESTRATION LAYER</text>
            <text x="255" y="410" fill="#71808a" fontSize="10">thread-pool × 4 TRT engines  /  pycuda keypoints on main thread  /  frame-similarity caching  /  one synchronized state</text>
            <circle cx="940" cy="398" r="6" fill="#20b2a6" className="pipeline-node-pulse" />
            <text x="925" y="402" fill="#8ee8df" fontSize="9" fontWeight="700" textAnchor="end">RUNNING</text>
          </g>

          {[312, 504, 696, 888].map((x, index) => (
            <path
              key={x}
              className="pipeline-runtime-flow"
              d={`M ${x} 337 L ${x} 372`}
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
        {stages.map((stage) => (
          <div key={stage.number} className="flex min-w-0 items-start gap-3 border-l-2 border-primary/50 py-1 pl-3">
            <span className="font-mono text-xs font-bold text-primary">{stage.number}</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{stage.title}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
