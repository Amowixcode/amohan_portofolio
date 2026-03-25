import Link from "next/link";
import { Code2 } from "lucide-react";
import Container from "@/components/container";
import NavLinks from "@/components/nav-links";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-primary/10">
            <Code2 className="size-5 text-accent" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Portfolio
            </p>
            <p className="text-sm text-muted-foreground">NTNU Informatics Student</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <NavLinks />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
