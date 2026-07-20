const stages = [
  {
    number: "01",
    title: "Video Ingest",
    detail: "Tactical camera frames",
  },
  {
    number: "02",
    title: "Perception",
    detail: "Parallel TensorRT engines",
  },
  {
    number: "03",
    title: "Identity",
    detail: "Tracking, ReID and OCR",
  },
  {
    number: "04",
    title: "Projection",
    detail: "Image-to-pitch homography",
  },
  {
    number: "05",
    title: "Intelligence",
    detail: "Events and tactical KPIs",
  },
  {
    number: "06",
    title: "Presentation",
    detail: "Live UI and Full HD export",
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

export const TactiVisionPipeline = () => {
  return (
    <div className="space-y-5">
      <div className="pipeline-canvas overflow-hidden rounded-lg border border-border/70 bg-[#0b1115]">
        <svg
          viewBox="0 0 1200 470"
          className="block h-auto w-full"
          role="img"
          aria-labelledby="tactivision-pipeline-title tactivision-pipeline-description"
        >
          <title id="tactivision-pipeline-title">TactiVision processing pipeline</title>
          <desc id="tactivision-pipeline-description">
            Animated flow from tactical-camera video through perception, identity tracking,
            homography, event intelligence, and dashboard delivery.
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

            <path id="flow-1" d="M 202 222 L 230 222" />
            <path id="flow-2" d="M 394 222 L 422 222" />
            <path id="flow-3" d="M 586 222 L 614 222" />
            <path id="flow-4" d="M 778 222 L 806 222" />
            <path id="flow-5" d="M 970 222 L 998 222" />
          </defs>

          <rect width="1200" height="470" fill="#0b1115" />
          <rect width="1200" height="470" fill="url(#pipeline-grid)" opacity="0.48" />
          <path d="M 42 48 L 210 48" stroke="url(#pipeline-accent)" strokeWidth="3" />
          <text x="42" y="35" fill="#f0f2f5" fontSize="17" fontWeight="700" letterSpacing="2">
            FRAME-ACCURATE INFERENCE GRAPH
          </text>
          <text x="1158" y="35" fill="#71808a" fontSize="11" textAnchor="end" letterSpacing="1.5">
            ONE VIDEO / ONE SYNCHRONIZED STATE
          </text>

          {[120, 312, 504, 696, 888, 1080].map((x, index) => (
            <StageNumber key={x} x={x} number={stages[index].number} />
          ))}

          <g className="pipeline-stage">
            <rect x="38" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="38" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <rect x="65" y="151" width="110" height="65" rx="5" fill="#0a0f12" stroke="#5d717d" />
            <path d="M 65 193 L 92 176 L 116 188 L 142 166 L 175 183" fill="none" stroke="#20b2a6" strokeWidth="2" />
            <circle cx="142" cy="166" r="4" fill="#f5a623" filter="url(#pipeline-glow)" />
            <rect x="76" y="158" width="24" height="39" fill="none" stroke="#e25567" strokeWidth="1.5" />
            <text x="120" y="252" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">VIDEO INGEST</text>
            <text x="120" y="275" fill="#7f909a" fontSize="11" textAnchor="middle">Frames + source timing</text>
            <rect x="69" y="292" width="102" height="18" rx="9" fill="#17312f" />
            <text x="120" y="304" fill="#8ee8df" fontSize="9" fontWeight="700" textAnchor="middle">TACTICAL CAMERA</text>
          </g>

          <g className="pipeline-stage pipeline-stage-delay-1">
            <rect x="230" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="230" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            {[
              [246, 151, "PLAYER"],
              [317, 151, "BALL"],
              [246, 184, "POSE"],
              [317, 184, "PITCH"],
            ].map(([x, y, label]) => (
              <g key={label}>
                <rect x={x} y={y} width="61" height="25" rx="4" fill="#12282a" stroke="#2d7772" />
                <text x={x + 30.5} y={y + 16} fill="#9de9e2" fontSize="8.5" fontWeight="700" textAnchor="middle">{label}</text>
              </g>
            ))}
            <path d="M 276 220 L 276 232 L 348 232 L 348 220 M 312 232 L 312 242" fill="none" stroke="#5d717d" />
            <circle cx="312" cy="242" r="7" fill="#20b2a6" className="pipeline-node-pulse" />
            <text x="312" y="270" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">PERCEPTION</text>
            <text x="312" y="291" fill="#7f909a" fontSize="11" textAnchor="middle">Parallel model ensemble</text>
            <text x="312" y="307" fill="#f5a623" fontSize="9" fontWeight="700" textAnchor="middle">TENSORRT FP16</text>
          </g>

          <g className="pipeline-stage pipeline-stage-delay-2">
            <rect x="422" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="422" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <path d="M 450 174 C 476 143, 532 143, 558 174 C 532 205, 476 205, 450 174 Z" fill="#102327" stroke="#20b2a6" />
            <circle cx="474" cy="174" r="9" fill="#e25567" />
            <circle cx="504" cy="160" r="9" fill="#3178c6" />
            <circle cx="536" cy="179" r="9" fill="#e25567" />
            <path d="M 483 171 L 495 164 M 513 164 L 528 175" stroke="#a7b5bd" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="460" y="214" width="88" height="28" rx="4" fill="#111a20" stroke="#4f616c" />
            <text x="504" y="232" fill="#f5a623" fontSize="10" fontWeight="700" textAnchor="middle">ID: 07 LOCKED</text>
            <text x="504" y="270" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">IDENTITY</text>
            <text x="504" y="291" fill="#7f909a" fontSize="11" textAnchor="middle">Tracker + ReID + jersey OCR</text>
            <text x="504" y="307" fill="#8ee8df" fontSize="9" fontWeight="700" textAnchor="middle">TEMPORAL CONTINUITY</text>
          </g>

          <g className="pipeline-stage pipeline-stage-delay-3">
            <rect x="614" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="614" y="122" width="164" height="4" rx="2" fill="#20b2a6" />
            <path d="M 636 151 L 756 151 L 743 225 L 649 225 Z" fill="#0f211c" stroke="#4b8d6d" />
            <path d="M 696 151 L 696 225 M 644 188 L 749 188" stroke="#566f64" strokeWidth="1" />
            <circle cx="668" cy="177" r="5" fill="#e25567" />
            <circle cx="721" cy="201" r="5" fill="#3178c6" />
            <path d="M 668 177 L 650 249 M 721 201 L 742 249" stroke="#f5a623" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="696" y="270" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">HOMOGRAPHY</text>
            <text x="696" y="291" fill="#7f909a" fontSize="11" textAnchor="middle">Camera to metric pitch</text>
            <text x="696" y="307" fill="#8ee8df" fontSize="9" fontWeight="700" textAnchor="middle">NORMALIZED XY</text>
          </g>

          <g className="pipeline-stage pipeline-stage-delay-4">
            <rect x="806" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="806" y="122" width="164" height="4" rx="2" fill="#f5a623" />
            <path d="M 832 225 L 854 198 L 878 209 L 903 169 L 929 184 L 948 151" fill="none" stroke="#f5a623" strokeWidth="3" />
            {[832, 854, 878, 903, 929, 948].map((x, index) => {
              const ys = [225, 198, 209, 169, 184, 151];
              return <circle key={x} cx={x} cy={ys[index]} r="4" fill="#0b1115" stroke="#f5a623" strokeWidth="2" />;
            })}
            <rect x="830" y="239" width="42" height="17" rx="3" fill="#3a2920" />
            <rect x="878" y="239" width="62" height="17" rx="3" fill="#17312f" />
            <text x="851" y="251" fill="#ffc971" fontSize="8" fontWeight="700" textAnchor="middle">SHOT</text>
            <text x="909" y="251" fill="#8ee8df" fontSize="8" fontWeight="700" textAnchor="middle">PASS</text>
            <text x="888" y="281" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">INTELLIGENCE</text>
            <text x="888" y="301" fill="#7f909a" fontSize="11" textAnchor="middle">Events + spatial analytics</text>
          </g>

          <g className="pipeline-stage pipeline-stage-delay-5">
            <rect x="998" y="122" width="164" height="200" rx="8" fill="url(#pipeline-card)" stroke="#2c3b43" />
            <rect x="998" y="122" width="164" height="4" rx="2" fill="#f5a623" />
            <rect x="1020" y="150" width="120" height="83" rx="4" fill="#e9edef" />
            <rect x="1028" y="158" width="68" height="39" fill="#3c673c" />
            <rect x="1102" y="158" width="30" height="16" rx="2" fill="#dbe2e5" />
            <rect x="1102" y="180" width="30" height="17" rx="2" fill="#dbe2e5" />
            <rect x="1028" y="203" width="32" height="22" rx="2" fill="#dfebed" />
            <rect x="1065" y="203" width="32" height="22" rx="2" fill="#dfebed" />
            <rect x="1102" y="203" width="30" height="22" rx="2" fill="#dfebed" />
            <circle cx="1138" cy="151" r="5" fill="#20b2a6" className="pipeline-node-pulse" />
            <text x="1080" y="270" fill="#f0f2f5" fontSize="16" fontWeight="700" textAnchor="middle">PRESENTATION</text>
            <text x="1080" y="291" fill="#7f909a" fontSize="11" textAnchor="middle">Live dashboard + MP4</text>
            <text x="1080" y="307" fill="#ffc971" fontSize="9" fontWeight="700" textAnchor="middle">FRAME-ACCURATE OUTPUT</text>
          </g>

          {[
            [202, 230],
            [394, 422],
            [586, 614],
            [778, 806],
            [970, 998],
          ].map(([x1, x2], index) => (
            <path
              key={x1}
              className="pipeline-flow"
              d={`M ${x1} 222 L ${x2} 222`}
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

          <g>
            <rect x="230" y="365" width="740" height="55" rx="8" fill="#101a1f" stroke="#26363e" />
            <rect x="230" y="365" width="5" height="55" rx="2" fill="#20b2a6" />
            <text x="255" y="388" fill="#dce5e9" fontSize="12" fontWeight="700" letterSpacing="1">GPU ORCHESTRATION LAYER</text>
            <text x="255" y="406" fill="#71808a" fontSize="10">CUDA streams  /  adaptive scheduling  /  cached low-frequency analytics  /  synchronized state</text>
            <circle cx="940" cy="393" r="6" fill="#20b2a6" className="pipeline-node-pulse" />
            <text x="925" y="397" fill="#8ee8df" fontSize="9" fontWeight="700" textAnchor="end">RUNNING</text>
          </g>

          {[312, 504, 696, 888].map((x, index) => (
            <path
              key={x}
              className="pipeline-runtime-flow"
              d={`M ${x} 322 L ${x} 365`}
              fill="none"
              stroke={index === 3 ? "#f5a623" : "#20b2a6"}
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          ))}
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

