import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black/15">
        <div className="relative mb-5 h-40 overflow-hidden rounded-xl border border-white/10 bg-background/60">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
          )}
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </Link>

            {project.demo ? (
              <Link
                href={project.demo}
                target={project.demo.startsWith("http") ? "_blank" : undefined}
                rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10"
              >
                <ArrowUpRight className="size-4" />
                <span>Live demo</span>
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
