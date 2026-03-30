"use client";

import ProjectCard from "@/components/project-card";
import { useLanguage } from "@/components/language-context";
import { localizeProject } from "@/lib/localize-project";
import type { Project } from "@/types/project";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  const localizedProjects = projects.map((project) => localizeProject(project, t));

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {localizedProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} delay={index * 0.08} />
      ))}
    </div>
  );
}
