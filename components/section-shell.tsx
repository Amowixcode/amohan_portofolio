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
    <section id={id} className={cn("section-spacing scroll-mt-24", className)}>
      <div className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
