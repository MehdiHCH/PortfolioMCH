import { useState } from "react";
import {
  Activity,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Database,
  Layers3,
  MonitorPlay,
  ShieldCheck,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";
import { TactiVisionPipeline } from "@/components/TactiVisionPipeline";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const sectionLinks = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["modules", "Modules"],
  ["evidence", "Evidence"],
  ["demo", "Demo"],
];

const moduleIcons = [Cpu, ShieldCheck, Workflow, Activity, MonitorPlay];

const humanize = (value) =>
  value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
    <p className="pt-1 text-xs font-bold uppercase tracking-[0.22em] text-primary">
      {eyebrow}
    </p>
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </div>
  </div>
);

const ResultsBand = ({ results }) => (
  <div className="mt-8 grid grid-cols-2 border-l border-t border-border/70 md:grid-cols-4">
    {Object.entries(results).map(([key, value]) => (
      <div
        key={key}
        className="min-h-28 border-b border-r border-border/70 bg-surface/20 p-4 md:p-5"
      >
        <p className="text-2xl font-bold text-foreground md:text-3xl">{value}</p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {humanize(key)}
        </p>
      </div>
    ))}
  </div>
);

const Contributions = ({ items }) => (
  <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 md:grid-cols-2">
    {items.map((item, index) => (
      <div key={item} className="flex gap-4 bg-background p-5 md:p-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/35 bg-primary/10 text-xs font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
      </div>
    ))}
  </div>
);

const ModuleExplorer = ({ modules }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModule = modules[activeIndex];
  const ActiveIcon = moduleIcons[activeIndex] || Layers3;

  return (
    <div className="mt-8 border border-border/70 bg-surface/15">
      <div className="overflow-x-auto border-b border-border/70">
        <div className="flex min-w-max">
          {modules.map((module, index) => {
            const Icon = moduleIcons[index] || Layers3;
            const isActive = index === activeIndex;

            return (
              <button
                key={module.id || module.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-16 items-center gap-3 border-r border-border/70 px-5 text-left transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-background text-muted-foreground hover:bg-surface/40 hover:text-foreground"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                    Module {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">{module.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)] lg:p-8">
        <div>
          <div className="flex h-11 w-11 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
            <ActiveIcon className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-2xl font-bold text-foreground">{activeModule.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {activeModule.description}
          </p>
          {activeModule.details && (
            <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/75">
              {activeModule.details}
            </p>
          )}
        </div>

        <div className="grid content-start grid-cols-2 border-l border-t border-border/60">
          {Object.entries(activeModule.metrics || {}).map(([key, value]) => (
            <div key={key} className="border-b border-r border-border/60 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {humanize(key)}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VisualEvidence = ({ visualizations }) => (
  <div className="mt-8 grid gap-5 lg:grid-cols-2">
    {visualizations.map((item) => (
      <figure key={item.image} className="overflow-hidden rounded-lg border border-border/70 bg-surface/20">
        <img
          src={assetUrl(item.image)}
          alt={item.title}
          loading="lazy"
          className="aspect-video w-full bg-white object-contain"
        />
        <figcaption className="border-t border-border/60 p-5">
          <p className="text-base font-bold text-foreground">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </figcaption>
      </figure>
    ))}
  </div>
);

const ProjectDemo = ({ demos, poster }) => {
  if (!demos?.length) return null;
  const demo = demos[0];

  return (
    <section id="demo" className="border-t border-border/60 py-12 md:py-16">
      <SectionHeading
        eyebrow="Live system"
        title="Watch the full pipeline operate as one product."
        description="The end-to-end demo combines detection, identity, pitch projection, event extraction, and the synchronized analytics dashboard in one continuous output."
      />
      <div className="mt-8 overflow-hidden rounded-lg border border-border/70 bg-black">
        <video
          controls
          playsInline
          preload="metadata"
          poster={assetUrl(poster)}
          className="aspect-video w-full object-contain"
        >
          <source src={assetUrl(demo.video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid gap-3 border-x border-b border-border/70 bg-surface/20 p-5 md:grid-cols-[220px_minmax(0,1fr)] md:p-6">
        <p className="text-sm font-bold text-foreground">{demo.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{demo.description}</p>
      </div>
    </section>
  );
};

export const TactiVisionProjectStory = ({ project }) => {
  const overview = project.overview || {};
  const challenges = project.problemStatement?.challenges || [];

  return (
    <div className="mx-auto max-w-6xl">
      <nav
        aria-label="TactiVision project sections"
        className="-mx-6 overflow-x-auto border-y border-border/70 bg-surface/15 px-6"
      >
        <div className="flex min-w-max items-center">
          <span className="mr-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Project index
          </span>
          {sectionLinks.map(([target, label]) => (
            <button
              key={target}
              type="button"
              onClick={() => {
                document
                  .getElementById(target)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="border-b-2 border-transparent px-4 py-4 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-32 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Product overview
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              One match video. One synchronized source of tactical truth.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>
        </div>
        {project.results && <ResultsBand results={project.results} />}
      </section>

      <section id="architecture" className="scroll-mt-32 border-t border-border/60 py-12 md:py-16">
        <SectionHeading
          eyebrow="System architecture"
          title={overview.animatedPipeline?.title || "How the system works"}
          description={overview.animatedPipeline?.description}
        />

        {overview.animatedPipeline && (
          <div className="mt-8">
            <TactiVisionPipeline />
          </div>
        )}

        {overview.architectureImage && (
          <figure className="mt-8 overflow-hidden rounded-lg border border-border/70 bg-[#0b1115] p-3 md:p-5">
            <img
              src={assetUrl(overview.architectureImage)}
              alt="TactiVision system architecture"
              className="h-auto w-full object-contain"
            />
            <figcaption className="border-t border-white/10 px-2 pb-1 pt-4 text-xs uppercase tracking-[0.16em] text-white/50">
              Production architecture from video ingest to structured analytics and presentation
            </figcaption>
          </figure>
        )}
      </section>

      {project.problemStatement && (
        <section className="border-t border-border/60 py-12 md:py-16">
          <SectionHeading
            eyebrow="Engineering problem"
            title={project.problemStatement.title}
            description={project.problemStatement.description}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.75fr)]">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-2">
              {challenges.map((challenge, index) => (
                <div key={challenge} className="bg-background p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Constraint {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>

            <aside className="border-l-2 border-primary bg-primary/5 p-6">
              <div className="flex items-center gap-3 text-primary">
                <Workflow className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Architecture response
                </p>
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                {project.solution}
              </p>
            </aside>
          </div>
        </section>
      )}

      {overview.keyContributions?.length > 0 && (
        <section className="border-t border-border/60 py-12 md:py-16">
          <SectionHeading
            eyebrow="Engineering decisions"
            title="The work behind a reliable match-intelligence pipeline."
            description="Each contribution closes a production constraint: GPU budget, identity continuity, metric geometry, temporal event validation, or frame-accurate presentation."
          />
          <Contributions items={overview.keyContributions} />
        </section>
      )}

      {project.modules?.length > 0 && (
        <section id="modules" className="scroll-mt-32 border-t border-border/60 py-12 md:py-16">
          <SectionHeading
            eyebrow="Technical modules"
            title="Inspect the platform one subsystem at a time."
            description="Select a module to review its role, implementation detail, and production characteristics without losing the end-to-end context."
          />
          <ModuleExplorer modules={project.modules} />
        </section>
      )}

      {project.keyAchievements?.length > 0 && (
        <section className="border-t border-border/60 py-12 md:py-16">
          <SectionHeading
            eyebrow="Delivery record"
            title="Validated outcomes, not isolated experiments."
            description="The system has progressed from model training into a connected product that produces stable identities, spatial data, tactical events, and presentation-ready outputs."
          />
          <div className="mt-8 grid gap-x-8 gap-y-1 md:grid-cols-2">
            {project.keyAchievements.map((achievement) => (
              <div key={achievement} className="flex gap-3 border-b border-border/60 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.visualizations?.length > 0 && (
        <section id="evidence" className="scroll-mt-32 border-t border-border/60 py-12 md:py-16">
          <SectionHeading
            eyebrow="Visual evidence"
            title="Outputs designed for analysis, review, and communication."
            description="The live match centre and report views expose the same synchronized state, from annotated detections to tactical maps and decision-ready KPIs."
          />
          <VisualEvidence visualizations={project.visualizations} />
        </section>
      )}

      <ProjectDemo demos={project.demos} poster={project.image} />

      <section className="border-t border-border/60 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Technology stack</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="border-b border-border pb-1 text-sm font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-l border-border/70 pl-6">
            <div className="flex items-center gap-3 text-primary">
              <Users className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.18em]">Ownership</p>
            </div>
            <p className="mt-4 text-xl font-bold text-foreground">{project.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.team?.join(", ") || project.company}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <CircleDot className="h-3.5 w-3.5 text-emerald-500" />
              {project.period} | {project.location}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <Trophy className="h-4 w-4 text-highlight" />
          <span>Built as an independent end-to-end sports intelligence product.</span>
          <ChevronRight className="h-4 w-4" />
          <span className="hidden sm:inline">Detection to decision support.</span>
        </div>
      </section>
    </div>
  );
};
