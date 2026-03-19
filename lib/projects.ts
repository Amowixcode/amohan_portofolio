import { cache } from "react";
import { staticProjects } from "@/data/projects";
import type { Project } from "@/types/project";

export const getProjects = cache(async (): Promise<Project[]> => staticProjects);

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  return projects.slice(0, limit);
}
