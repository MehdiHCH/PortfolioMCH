import {
  ArrowRight,
  BadgeDollarSign,
  BrainCircuit,
  CodeXml,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/Button";

const advisoryTopics = [
  {
    icon: BrainCircuit,
    title: "AI & CV Strategy",
    description:
      "Turn an idea into a practical roadmap with the right models, data, tools, and milestones.",
  },
  {
    icon: CodeXml,
    title: "Technical Review",
    description:
      "Review your architecture, model pipeline, performance bottlenecks, or deployment approach.",
  },
  {
    icon: MessagesSquare,
    title: "1:1 Problem Solving",
    description:
      "Get focused guidance on computer vision, sports analytics, real-time inference, and MLOps.",
  },
];

export const Services = () => {
  const bookAdvisoryCall = () => {
    window.dispatchEvent(
      new CustomEvent("portfolio:select-service", {
        detail: {
          message:
            "Hi El Mehdi, I'm interested in your AI & Computer Vision Advisory service at €50/hour. I'd like to discuss the scope and level of involvement...",
        },
      })
    );

    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
            Advisory Service
          </span>
          <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
            Expert guidance for your
            <span className="font-serif font-normal italic text-foreground">
              {" "}AI vision project.
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Bring your technical challenge, product idea, or computer vision
            pipeline. We&apos;ll use a focused one-on-one session to identify the
            clearest path forward.
          </p>
        </div>

        <div className="glass glow-border mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                {advisoryTopics.map((topic) => (
                  <div key={topic.title}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-primary/20 bg-primary/5 p-8 md:p-10 lg:w-72 lg:border-l lg:border-t-0">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                <BadgeDollarSign className="h-5 w-5" />
                Standard advisory rate
              </div>
              <div className="mb-1 flex items-end gap-2">
                <span className="text-5xl font-bold text-foreground">€50</span>
                <span className="pb-1 text-muted-foreground">/ hour</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                For technical advisory work, my standard rate is €50/hour,
                depending on the scope and level of involvement.
              </p>
              <Button onClick={bookAdvisoryCall} aria-label="Book technical advisory work at 50 euros per hour">
                Book a Call
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
