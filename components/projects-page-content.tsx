"use client";

import Container from "@/components/container";
import FadeIn from "@/components/motion/fade-in";
import ProjectsEmptyState from "@/components/projects-empty-state";
import ProjectsGrid from "@/components/projects-grid";
import SectionShell from "@/components/section-shell";
import { useLanguage } from "@/components/language-context";
import type { Project } from "@/types/project";

export default function ProjectsPageContent({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  return (
    <main>
      <Container>
        <SectionShell
          eyebrow={t("projects_page_eyebrow")}
          title={t("projects_page_title")}
          description={t("projects_page_description")}
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
