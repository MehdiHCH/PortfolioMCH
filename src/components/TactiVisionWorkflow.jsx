import {
  Activity,
  ArrowDown,
  ChartNoAxesCombined,
  CheckCircle2,
  ExternalLink,
  ScanSearch,
  Waypoints,
} from "lucide-react";

const iconByKind = {
  perception: ScanSearch,
  projection: Waypoints,
  intelligence: ChartNoAxesCombined,
};

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const StepMedia = ({ step }) => (
  <div className="relative overflow-hidden rounded-lg border border-border/70 bg-black shadow-2xl shadow-black/20">
    <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between border-b border-white/10 bg-black/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
      <span>Live pipeline output</span>
      <span className="flex items-center gap-2 text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Frame synchronized
      </span>
    </div>
    <video
      controls
      playsInline
      preload="metadata"
      poster={assetUrl(step.poster)}
      className="aspect-video w-full object-contain"
    >
      <source src={assetUrl(step.video)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const StepCopy = ({ step }) => {
  const Icon = iconByKind[step.kind] || Activity;

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Step {step.number}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">
            {step.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {step.subtitle}
          </p>
        </div>
      </div>

      <p className="text-base leading-relaxed text-muted-foreground">
        {step.description}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {step.outcomes.map((outcome) => (
          <div key={outcome} className="flex items-start gap-2 text-sm text-foreground/90">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{outcome}</span>
          </div>
        ))}
      </div>

      {step.sourceUrl && (
        <a
          href={step.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary hover:text-primary/80"
        >
          {step.sourceLabel || "View original release"}
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

const EvidenceGrid = ({ visualizations }) => (
  <div className="mt-7 grid gap-4 sm:grid-cols-2">
    {visualizations.map((item) => (
      <figure
        key={item.image}
        className="overflow-hidden rounded-lg border border-border/70 bg-surface/40"
      >
        <img
          src={assetUrl(item.image)}
          alt={item.title}
          loading="lazy"
          className="aspect-[16/10] w-full bg-white object-contain"
        />
        <figcaption className="border-t border-border/60 px-4 py-3">
          <p className="text-sm font-bold text-foreground">{item.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </figcaption>
      </figure>
    ))}
  </div>
);

export const TactiVisionWorkflow = ({ workflow }) => {
  if (!workflow?.steps?.length) return null;

  return (
    <section className="mb-16 border-y border-border/60 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {workflow.eyebrow}
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {workflow.title}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {workflow.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 border-y border-border/60 bg-surface/30">
          {workflow.steps.map((step, index) => (
            <div
              key={step.number}
              className={`px-3 py-4 md:px-6 ${index > 0 ? "border-l border-border/60" : ""}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                0{step.number}
              </p>
              <p className="mt-1 text-xs font-semibold text-foreground md:text-sm">
                {step.shortTitle}
              </p>
            </div>
          ))}
        </div>

        <div>
          {workflow.steps.map((step, index) => (
            <div key={step.number}>
              <article className="grid gap-8 border-b border-border/60 py-10 lg:grid-cols-12 lg:items-center lg:gap-12 md:py-14">
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
                  <StepCopy step={step} />
                </div>
                <div className={`lg:col-span-7 ${index % 2 ? "lg:order-1" : ""}`}>
                  <StepMedia step={step} />
                  {step.visualizations?.length > 0 && (
                    <EvidenceGrid visualizations={step.visualizations} />
                  )}
                </div>
              </article>

              {index < workflow.steps.length - 1 && (
                <div className="flex h-0 justify-center">
                  <div className="relative z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
