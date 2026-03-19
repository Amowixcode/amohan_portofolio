import type { Project } from "@/types/project";

export const staticProjects: Project[] = [
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "A polished dashboard concept for product teams to track model quality, usage trends, and release insights in one place.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    link: "https://example.com/ai-dashboard",
    image: "/projects/ai-dashboard.svg",
  },
  {
    id: "devflow",
    title: "DevFlow Workspace",
    description:
      "A developer-focused workspace for documenting tasks, shipping updates, and keeping team communication lightweight and visible.",
    techStack: ["React", "App Router", "Framer Motion", "Design Systems"],
    link: "https://example.com/devflow",
    image: "/projects/devflow.svg",
  },
  {
    id: "portfolio-engine",
    title: "Portfolio Engine",
    description:
      "The system behind this portfolio, designed to stay maintainable with reusable sections, static content, and fast visual iteration.",
    techStack: ["Next.js", "Static Data", "SEO", "UI Architecture"],
    link: "https://example.com/portfolio-engine",
    image: "/projects/portfolio-engine.svg",
  },
];
