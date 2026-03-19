import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-spacing scroll-mt-28", className)}>
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
