import Image from "next/image";
import FadeIn from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="overflow-hidden border-white/10 bg-white/5">
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={960}
            height={640}
            className="h-52 w-full object-cover"
          />
        </div>

        <CardHeader className="space-y-3">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          {project.description ? (
            <p className="text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
          ) : null}
        </CardHeader>

        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
