"use client";

import Image from "next/image";
import Container from "@/components/container";
import ContactSection from "@/components/contact-section";
import ExperienceCard from "@/components/experience-card";
import { useLanguage } from "@/components/language-context";
import FadeIn from "@/components/motion/fade-in";
import ProjectCard from "@/components/project-card";
import SectionShell from "@/components/section-shell";
import { experiences, heroImage } from "@/data/site-content";
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
        <section className="section-spacing pt-10 sm:pt-14">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12">
            <FadeIn className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                {t("hero_eyebrow")}
              </p>
              <div className="space-y-4">
                <div className="mb-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[3.2rem]">
                  {t("hero_title")}
                </h1>
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {t("hero_description_one")}
                </p>
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {t("hero_description_two")}
                </p>
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {t("hero_description_three")}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="w-full">
              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/28 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/24 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/20 via-black/8 to-transparent" />
                <div className="relative aspect-[4/4.8] md:aspect-[4/4.4]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    className="object-cover object-center opacity-90 saturate-[0.92] brightness-[0.96] contrast-[1.03]"
                    sizes="(min-width: 1024px) 42vw, (min-width: 768px) 70vw, 100vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <SectionShell
          id="about"
          eyebrow={t("about_title")}
          title={t("about_title")}
          description={t("about_description")}
        >
          <div className="space-y-5 text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
            <FadeIn>
              <p>{t("about_body_one")}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p>{t("about_body_two")}</p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p>{t("about_body_three")}</p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <p>{t("about_body_four")}</p>
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
