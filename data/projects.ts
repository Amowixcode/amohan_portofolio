import type { Project } from "@/types/project";

export const staticProjects: Project[] = [
  {
    id: "fullstack-university-project",
    title: "Event Planner Platform",
    summary:
      "Fullstack event platform inspired by products like Spond, built in a collaborative university team.",
    highlights: [
      "Designed and implemented REST API endpoints in Java and Spring Boot for users, events, and groups.",
      "Built interactive frontend flows in JavaFX with FXML for event creation, group management, and event participation.",
      "Applied a layered architecture with Controller, Service, and Repository responsibilities for maintainable code.",
      "Collaborated in a team using Git and GitHub for shared development and version control.",
    ],
    tech: ["Java", "Spring Boot", "JavaFX", "FXML", "REST API", "Git", "GitHub"],
    github: "https://git.ntnu.no/IT1901-2025-groups/gr2506.git",
    image: "/projects/fullstack-university-project.svg",
  },
  {
    id: "ai-dashboard",
    title: "Student Overview Portal",
    summary:
      "Fullstack web application developed in a Scrum-based team to simulate a real-world product workflow.",
    highlights: [
      "Built frontend and backend features using React, Django, and Python across a shared fullstack codebase.",
      "Developed the application in a Scrum team with sprints, stand-ups, and structured task management.",
      "Used Git and GitHub for version control, collaboration, and coordinated team delivery.",
      "Contributed across the stack to deliver a student-focused web experience with clear team ownership.",
    ],
    tech: ["React", "Django", "Python", "Git", "GitHub"],
    github: "https://git.ntnu.no/TDT4140-2026-groups/group-47",
    image: "/projects/ai-dashboard.svg",
  },
];

