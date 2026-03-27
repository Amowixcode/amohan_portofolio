"use client";

import Container from "@/components/container";
import ContactSection from "@/components/contact-section";
import ExperienceCard from "@/components/experience-card";
import { useLanguage } from "@/components/language-context";
import FadeIn from "@/components/motion/fade-in";
import ProjectCard from "@/components/project-card";
import SectionShell from "@/components/section-shell";
import { experiences } from "@/data/site-content";
import { type Project } from "@/types/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePageContent({
  projects,
  experienceItems,
}: {
  projects: Project[];
  experienceItems: typeof experiences;
}) {
  const { t } = useLanguage();

  return (
    <main>
      <Container>
        <section className="section-spacing pt-12 sm:pt-16">
          <FadeIn className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              {t("hero_eyebrow")}
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {t("hero_title")}
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                {t("hero_description_one")}
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                {t("hero_description_two")}
              </p>
            </div>
          </FadeIn>
        </section>

        <SectionShell
          id="about"
          eyebrow={t("about_title")}
          title={t("about_title")}
          description={t("about_description")}
        >
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <FadeIn>
              <p>{t("about_body_one")}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p>{t("about_body_two")}</p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p>{t("about_body_three")}</p>
            </FadeIn>
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow={t("projects_title")}
          title={t("projects_title")}
          description={t("projects_description")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((item, index) => (
              <ProjectCard
                key={item.id}
                project={item}
                delay={index * 0.08}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="experience"
          eyebrow={t("experience_title")}
          title={t("experience_title")}
          description={t("experience_description")}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experienceItems.map((experience, index) => {
              const isTeaching = experience.id === "teaching-assistant";

              return (
                <ExperienceCard
                  key={experience.id}
                  image={experience.image}
                  subtitle={experience.organization}
                  title={
                    isTeaching
                      ? t("experience_card_teaching_title")
                      : t("experience_card_tsat_title")
                  }
                  description={
                    isTeaching
                      ? t("experience_card_teaching_description")
                      : t("experience_card_tsat_description")
                  }
                  delay={index * 0.08}
                />
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="skills"
          eyebrow={t("skills_title")}
          title={t("skills_title")}
          description={t("skills_description")}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: t("skills_frontend"),
                items: t("skills_frontend_items"),
              },
              {
                title: t("skills_backend"),
                items: t("skills_backend_items"),
              },
              {
                title: t("skills_other"),
                items: t("skills_other_items"),
              },
            ].map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.08}>
                <Card className="h-full border-white/10 bg-white/5">
                  <CardHeader>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-base leading-8 text-muted-foreground">
                    {group.items}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <ContactSection />
      </Container>
    </main>
  );
}
