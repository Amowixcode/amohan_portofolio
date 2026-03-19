import type { Metadata } from "next";
import Container from "@/components/container";
import FadeIn from "@/components/motion/fade-in";
import SectionShell from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "About Amohan Kannan, frontend developer focused on clear UX, maintainable systems, and modern web products.",
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        <SectionShell
          eyebrow="About"
          title="I enjoy frontend work that feels calm on the surface and solid underneath."
          description="My interests sit at the intersection of product thinking, UI engineering, and systems that are pleasant for both users and developers."
          className="pt-16 sm:pt-24"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Background",
                copy: "I am drawn to modern web development because it combines technical problem-solving with visual communication and interaction design.",
              },
              {
                title: "Approach",
                copy: "I prefer clean abstractions, strong defaults, and interfaces that feel polished without becoming noisy or over-designed.",
              },
              {
                title: "What I am building toward",
                copy: "Projects where frontend quality matters, product decisions are thoughtful, and the developer experience is treated as part of the product.",
              },
              {
                title: "Why this portfolio exists",
                copy: "To present projects clearly, show how I think about structure and UX, and create a professional home base for future work.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <Card className="h-full border-white/10 bg-white/5">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">
                    {item.copy}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SectionShell>
      </Container>
    </main>
  );
}
