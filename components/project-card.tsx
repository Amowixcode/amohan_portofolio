import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="group overflow-hidden border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:shadow-primary/15">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 transition duration-300 group-hover:opacity-100" />
          <Image
            src={project.image}
            alt={project.title}
            width={960}
            height={640}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <CardHeader className="space-y-3">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
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

        <CardFooter>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href={project.link} target="_blank" rel="noreferrer">
              View project
              <ArrowUpRight />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}
