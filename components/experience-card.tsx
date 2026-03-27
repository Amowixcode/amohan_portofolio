import Image from "next/image";
import FadeIn from "@/components/motion/fade-in";

type ExperienceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  delay?: number;
};

export default function ExperienceCard({
  title,
  subtitle,
  description,
  image,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black/15">
        <div className="relative mb-5 h-40 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <p className="text-sm leading-6 text-muted-foreground/90">
            {description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}
