import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Code2,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Container from "@/components/container";
import FadeIn from "@/components/motion/fade-in";
import ProjectsGrid from "@/components/projects-grid";
import SectionShell from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getFeaturedProjects } from "@/lib/projects";
import { skills, socialLinks } from "@/data/site-content";

const skillIcons = {
  code: Code2,
  braces: Braces,
  layers: Layers3,
  sparkles: Sparkles,
  palette: Palette,
  shield: ShieldCheck,
};

export default async function Home() {
  const featuredProjects = await getFeaturedProjects(3);

  return (
    <main>
      <Container>
        <section className="section-spacing pt-16 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <FadeIn className="space-y-8">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">
                  Frontend Developer Portfolio
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  Building polished digital products with{" "}
                  <span className="gradient-text">clean systems and clear UX</span>.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  I am Amohan Kannan, a developer focused on modern frontend engineering,
                  maintainable UI systems, and product experiences that feel calm,
                  fast, and intentional.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#projects">
                    View projects
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["3+", "Featured builds"],
                  ["Type-safe", "UI systems"],
                  ["Dark mode", "Default-first UX"],
                ].map(([value, label]) => (
                  <Card key={label} className="border-white/10 bg-white/5">
                    <CardContent className="p-5">
                      <p className="text-2xl font-semibold text-foreground">{value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <Card className="relative overflow-hidden border-white/10 bg-white/6 p-1">
                <div className="rounded-[1.2rem] border border-white/10 bg-surface/80 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-accent">Current Focus</p>
                      <p className="text-sm text-muted-foreground">
                        Frontend architecture and product-minded UI
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="size-3 rounded-full bg-primary/80" />
                      <span className="size-3 rounded-full bg-accent/80" />
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-sm text-muted-foreground">
                    <div className="rounded-2xl border border-white/10 bg-background/80 p-4">
                      <p className="text-foreground">const profile = {`{`}</p>
                      <p className="pl-4">name: &quot;Amohan Kannan&quot;,</p>
                      <p className="pl-4">role: &quot;Frontend Developer&quot;,</p>
                      <p className="pl-4">stack: [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Framer Motion&quot;],</p>
                      <p className="pl-4">focus: &quot;Developer-friendly product experiences&quot;,</p>
                      <p className="text-foreground">{`}`}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Card className="border-white/10 bg-white/5">
                        <CardContent className="p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Location
                          </p>
                          <p className="mt-2 text-base font-medium text-foreground">
                            Norway
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-white/10 bg-white/5">
                        <CardContent className="p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Availability
                          </p>
                          <p className="mt-2 text-base font-medium text-foreground">
                            Open to opportunities
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

        <SectionShell
          id="about"
          eyebrow="About"
          title="A frontend-focused developer who cares about clarity, quality, and momentum."
          description="I enjoy turning technical complexity into interfaces that feel smooth, understandable, and reliable. My favorite work lives where product thinking, system design, and visual polish meet."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "How I work",
                description:
                  "I like clean architecture, strong defaults, and iterating in a way that keeps teams unblocked.",
              },
              {
                title: "What I optimize for",
                description:
                  "Readable code, thoughtful interactions, accessible styling, and product experiences that feel intentional.",
              },
              {
                title: "What this site shows",
                description:
                  "Selected projects, the tools I work with, and the kind of developer experience I aim to create.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <Card className="h-full border-white/10 bg-white/5">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Projects"
          title="Selected work with a product-first and developer-first mindset."
          description="A few examples of the interfaces and systems I am interested in building. The content is static by design so updates stay simple and code-driven."
        >
          <ProjectsGrid projects={featuredProjects} />
          <FadeIn delay={0.18} className="mt-8">
            <Button asChild variant="secondary">
              <Link href="/projects">
                See all projects
                <ArrowRight />
              </Link>
            </Button>
          </FadeIn>
        </SectionShell>

        <SectionShell
          id="skills"
          eyebrow="Skills"
          title="Tools and strengths I use to ship polished frontend work."
          description="I care most about the combination of implementation quality, maintainable structure, and visual confidence."
        >
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.icon as keyof typeof skillIcons];

              return (
                <FadeIn key={skill.name} delay={index * 0.06}>
                  <Card className="h-full border-white/10 bg-white/5">
                    <CardHeader className="space-y-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-7 text-muted-foreground">
                      {skill.description}
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Let&apos;s build something useful, elegant, and well-structured."
          description="If you are looking for a developer who values clean execution, thoughtful UI, and maintainable systems, I would love to hear from you."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <Card className="border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle>Start a conversation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input defaultValue="amohan@example.com" aria-label="Email" />
                  <Input defaultValue="Frontend role, internship, or freelance project" aria-label="Subject" />
                  <Textarea
                    defaultValue="Hi Amohan, I came across your portfolio and wanted to talk about..."
                    aria-label="Message"
                  />
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="mailto:amohan@example.com">Send email</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-4">
              {socialLinks.map((link) => (
                <Card key={link.label} className="border-white/10 bg-white/5">
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="mt-1 text-base font-medium text-foreground">{link.href}</p>
                    </div>
                    <Button asChild variant="secondary" size="icon">
                      <Link href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </FadeIn>
          </div>
        </SectionShell>
      </Container>
    </main>
  );
}
