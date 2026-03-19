"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About", exact: "/" },
  { href: "/#projects", label: "Projects", exact: "/" },
  { href: "/#skills", label: "Skills", exact: "/" },
  { href: "/#contact", label: "Contact", exact: "/" },
  { href: "/projects", label: "All Projects", exact: "/projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {links.map((link) => {
        const isActive = pathname === link.exact;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground",
              isActive && "bg-primary/10 text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
