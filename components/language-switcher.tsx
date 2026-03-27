"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

const options = [
  { value: "en", label: "EN" },
  { value: "no", label: "NO" },
] as const;

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-foreground transition hover:bg-white/10"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={t("language_switcher_label")}
      >
        <Globe className="size-4" />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 min-w-28 rounded-2xl border border-white/10 bg-background/95 p-2 shadow-xl backdrop-blur">
          {options.map((option) => {
            const isActive = option.value === language;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setLanguage(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10",
                  isActive && "bg-primary/10 text-foreground",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
