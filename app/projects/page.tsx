import type { Metadata } from "next";
import Container from "@/components/container";
import FadeIn from "@/components/motion/fade-in";
import ProjectsEmptyState from "@/components/projects-empty-state";
import ProjectsGrid from "@/components/projects-grid";
import SectionShell from "@/components/section-shell";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project work across frontend systems, polished UI, and developer-focused product experiences.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <Container>
        <SectionShell
          eyebrow="Projects"
          title="A closer look at the work and systems behind the portfolio."
          description="These projects are presented as static content on purpose, making the site easy to maintain while still feeling structured and scalable."
          className="pt-16 sm:pt-24"
        >
          <FadeIn>
            {projects.length > 0 ? <ProjectsGrid projects={projects} /> : <ProjectsEmptyState />}
          </FadeIn>
        </SectionShell>
      </Container>
    </main>
  );
}
