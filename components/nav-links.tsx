"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

const linkTargets = [
  { href: "/#about", section: "about" },
  { href: "/#projects", section: "projects" },
  { href: "/#experience", section: "experience" },
  { href: "/#skills", section: "skills" },
  { href: "/#contact", section: "contact" },
] as const;

export default function NavLinks() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const links = [
    { href: "/#about", label: t("nav_about"), exact: "/", section: "about" },
    {
      href: "/#projects",
      label: t("nav_projects"),
      exact: "/",
      section: "projects",
    },
    {
      href: "/#experience",
      label: t("nav_experience"),
      exact: "/",
      section: "experience",
    },
    { href: "/#skills", label: t("nav_skills"), exact: "/", section: "skills" },
    {
      href: "/#contact",
      label: t("nav_contact"),
      exact: "/",
      section: "contact",
    },
  ];

  const syncActiveSection = useEffectEvent(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const viewportMarker = window.innerHeight * 0.28;
    const sections = linkTargets
      .map(({ section }) => document.getElementById(section))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const isNearPageBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;

    const currentSection = isNearPageBottom
      ? sections.at(-1) ?? sections[0]
      : sections.reduce<HTMLElement>((active, section) => {
          const sectionTop = section.getBoundingClientRect().top;
          return sectionTop <= viewportMarker ? section : active;
        }, sections[0]);

    setActiveSection(currentSection.id);
  });

  useEffect(() => {
    syncActiveSection();

    let frame = 0;
    const scheduleSync = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncActiveSection);
    };

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("hashchange", scheduleSync);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", scheduleSync);
    };
  }, [pathname]);

  return (
    <nav
      className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] md:flex"
      aria-label="Primary"
    >
      {links.map((link) => {
        const isActive = pathname === link.exact && activeSection === link.section;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full border border-transparent px-4 py-2 text-sm text-slate-300 transition-[background-color,border-color,color,box-shadow] duration-300 hover:bg-white/[0.08] hover:text-white",
              isActive &&
                "border-accent/20 bg-white/[0.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_-28px_rgba(79,209,255,0.35)]",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
