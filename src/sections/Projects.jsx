import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projectsData";
import ProjectsConstellation from "@/components/ProjectsConstellation";
import { useEffect, useRef } from "react";

const ProjectCardMedia = ({ project }) => {
  const videoRef = useRef(null);
  const previewVideo =
    project.cardVideo ?? project.demos?.find((demo) => demo.video)?.video;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !previewVideo) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      video.pause();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [previewVideo]);

  return (
    <div className="relative aspect-video overflow-hidden bg-card">
      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {previewVideo && (
        <video
          ref={videoRef}
          className="project-card-video absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}${project.image}`}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src={`${import.meta.env.BASE_URL}${previewVideo}`}
            type="video/mp4"
          />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent opacity-50" />
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <ProjectsConstellation />
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            AI Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              drive innovation.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work in Computer Vision, Deep Learning, and AI — 
            from sports analytics to medical imaging and robotics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const hasPreview =
              Boolean(project.cardVideo) ||
              project.demos?.some((demo) => demo.video);

            return (
              <article
                key={project.id}
                className="group glass relative overflow-hidden rounded-2xl animate-fade-in md:row-span-1 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <Link
                  to={project.link}
                  aria-label={`View ${project.title}`}
                  className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                />

                <ProjectCardMedia project={project} />

                {hasPreview && (
                  <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary" />
                    Moving preview
                  </div>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View on GitHub"
                    className="glass absolute right-4 top-4 z-20 rounded-full p-3 transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link
            to="/demos"
            className="animated-border inline-flex items-center justify-center gap-2 rounded-full border border-primary px-8 py-4 text-lg font-medium text-foreground transition-all duration-500 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View All Projects & Demos
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
