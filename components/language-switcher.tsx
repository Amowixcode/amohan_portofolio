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
  const activeOption = options.find((option) => option.value === language) ?? options[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 text-sm text-foreground shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.08] hover:shadow-[0_26px_70px_-36px_rgba(79,209,255,0.16)]"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={t("language_switcher_label")}
      >
        <Globe className="size-4" />
        <span>{activeOption.label}</span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 min-w-28 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] backdrop-blur-xl">
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
                  "flex w-full rounded-xl border border-transparent px-3 py-2 text-left text-sm text-slate-200 transition-[background-color,border-color,color,box-shadow] duration-300 hover:bg-white/[0.08]",
                  isActive &&
                    "border-accent/20 bg-white/[0.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_-28px_rgba(79,209,255,0.35)]",
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
