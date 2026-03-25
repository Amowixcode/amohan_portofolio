import Image from "next/image";
import FadeIn from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Experience = {
  title: string;
  image: string;
  description: string[];
};

type ExperienceCardProps = {
  experience: Experience;
  delay?: number;
};

export default function ExperienceCard({
  experience,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="h-full overflow-hidden border-white/10 bg-white/5">
        <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <CardTitle className="text-lg leading-7">{experience.title}</CardTitle>
        </div>

        <CardHeader className="sr-only">
          <CardTitle>{experience.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-6 pt-6 text-base leading-8 text-muted-foreground">
          {experience.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>
    </FadeIn>
  );
}
