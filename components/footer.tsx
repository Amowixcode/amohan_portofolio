import Link from "next/link";
import Container from "@/components/container";
import { socialLinks } from "@/data/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed for clarity, speed, and a calm developer-first experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
