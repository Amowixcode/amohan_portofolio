import Container from "@/components/container";
import FadeIn from "@/components/motion/fade-in";
import ProjectCard from "@/components/project-card";
import SectionShell from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();
  const project = projects[0]
    ? { ...projects[0], description: "" }
    : null;

  return (
    <main>
      <Container>
        <section className="section-spacing pt-12 sm:pt-16">
          <FadeIn className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Portfolio
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hi, I&apos;m [Your Name] 👋
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                I&apos;m an Informatics student at NTNU who enjoys building web
                applications and solving real problems through code.
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                I have experience with backend development and an interest in
                creating systems that are both reliable and easy to use.
              </p>
            </div>
          </FadeIn>
        </section>

        <SectionShell
          id="about"
          eyebrow="About"
          title="About"
          description="A short introduction to my background and what I am building experience in."
        >
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <FadeIn>
              <p>
                I&apos;m currently studying Informatics at NTNU in Trondheim,
                where I&apos;m building a strong foundation in programming and
                system development.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p>
                I&apos;ve worked with backend development using Java and Spring
                Boot, focusing on building structured and maintainable systems.
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p>
                Alongside my studies, I work as a teaching assistant in
                Human-Computer Interaction, which has strengthened my
                understanding of how design decisions affect users.
              </p>
            </FadeIn>
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Projects"
          title="Projects"
          description="A selected university project that highlights how I work with backend systems and team collaboration."
        >
          {project ? <ProjectCard project={project} /> : null}
        </SectionShell>

        <SectionShell
          id="experience"
          eyebrow="Experience"
          title="Experience"
          description="Roles that have helped me grow both academically and through student leadership."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Teaching Assistant – Human-Computer Interaction (NTNU)",
              "Leader – Tamil Student Association Trondheim (TSAT)",
            ].map((item, index) => (
              <FadeIn key={item} delay={index * 0.08}>
                <Card className="h-full border-white/10 bg-white/5">
                  <CardContent className="p-6 text-base leading-8 text-foreground">
                    {item}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="skills"
          eyebrow="Skills"
          title="Skills"
          description="The main tools and areas I have worked with so far."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: "React, Next.js, TypeScript, Tailwind",
              },
              {
                title: "Backend",
                items: "Java, Spring Boot, REST APIs",
              },
              {
                title: "Other",
                items: "Git, User-centered design",
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

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Contact"
          description="I&apos;m currently looking for internships and part-time opportunities."
        >
          <FadeIn>
            <Card className="border-white/10 bg-white/5">
              <CardContent className="space-y-3 p-6 text-base leading-8 text-muted-foreground">
                <p>
                  I&apos;m currently looking for internships and part-time
                  opportunities.
                </p>
                <p>
                  If you think I could be a good fit, feel free to reach out.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </SectionShell>
      </Container>
    </main>
  );
}
