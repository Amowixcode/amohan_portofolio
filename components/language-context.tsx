"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  translations,
  type Language,
  type TranslationKey,
} from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "no";
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(savedLanguage) ? savedLanguage : "en";
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
        window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
      },
      t: (key) => translations[language][key],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
