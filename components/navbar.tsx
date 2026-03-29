"use client";

import Link from "next/link";
import Container from "@/components/container";
import { useLanguage } from "@/components/language-context";
import LanguageSwitcher from "@/components/language-switcher";
import NavLinks from "@/components/nav-links";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/[0.045] shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/68">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              {t("nav_brand")}
            </p>
            <p className="text-sm text-muted-foreground">{t("nav_subtitle")}</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <NavLinks />
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
