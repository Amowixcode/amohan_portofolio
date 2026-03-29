import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_26px_70px_-36px_rgba(79,209,255,0.16)]">
        <div className="flex h-full flex-col gap-6">
          <div className="space-y-4">
            <div className="space-y-2.5">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground/95">
                {project.summary}
              </p>
            </div>

            <ul className="space-y-2.5 text-sm leading-6 text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(79,209,255,0.45)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-200/90"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row">
            <Button asChild className="justify-center rounded-xl">
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                <span>GitHub</span>
              </Link>
            </Button>

            {project.demo ? (
              <Button asChild variant="secondary" className="justify-center rounded-xl">
                <Link
                  href={project.demo}
                  target={project.demo.startsWith("http") ? "_blank" : undefined}
                  rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                >
                  <ArrowUpRight className="size-4" />
                  <span>Live demo</span>
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
