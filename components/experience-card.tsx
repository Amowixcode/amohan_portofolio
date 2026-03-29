import Image from "next/image";
import FadeIn from "@/components/motion/fade-in";

type ExperienceCardProps = {
  title: string;
  subtitle: string;
  highlights: string[];
  image: string;
  delay?: number;
};

export default function ExperienceCard({
  title,
  subtitle,
  highlights,
  image,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_26px_70px_-36px_rgba(79,209,255,0.16)]">
        <div className="flex h-full flex-col gap-6">
          <div className="relative h-40 overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.04]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/8 via-transparent to-black/10" />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2 border-b border-white/8 pb-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300/80">
                {subtitle}
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-muted-foreground/95">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(79,209,255,0.45)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
