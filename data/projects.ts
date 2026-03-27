import type { Project } from "@/types/project";

export const staticProjects: Project[] = [
  {
    id: "fullstack-university-project",
    title: "Fullstack University Project",
    description:
      "A backend-focused team project with clear system structure, API design, and collaboration across the stack.",
    tech: ["Java", "Spring Boot", "REST API", "Teamwork"],
    github: "https://git.ntnu.no/IT1901-2025-groups/gr2506.git",
    image: "/projects/fullstack-university-project.svg",
  },
  {
    id: "ai-dashboard",
    title: "AI Dashboard Concept",
    description:
      "A dashboard concept exploring data-heavy interfaces, component structure, and readable visual hierarchy.",
    tech: ["React", "TypeScript", "Dashboard UI", "Design Systems"],
    github: "https://github.com/Amowixcode",
    image: "/projects/ai-dashboard.svg",
  },
];

