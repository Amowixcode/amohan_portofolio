import ProjectCard from "@/components/project-card";
import type { Project } from "@/types/project";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} delay={index * 0.08} />
      ))}
    </div>
  );
}
