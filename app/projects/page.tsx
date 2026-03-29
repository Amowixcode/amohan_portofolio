import type { Metadata } from "next";
import ProjectsPageContent from "@/components/projects-page-content";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project work across frontend systems, polished UI, and developer-focused product experiences.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsPageContent projects={projects} />;
}
