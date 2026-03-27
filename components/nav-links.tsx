"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { href: "/#about", label: t("nav_about"), exact: "/" },
    { href: "/#experience", label: t("nav_experience"), exact: "/" },
    { href: "/#projects", label: t("nav_projects"), exact: "/" },
    { href: "/#skills", label: t("nav_skills"), exact: "/" },
    { href: "/#contact", label: t("nav_contact"), exact: "/" },
  ];

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
