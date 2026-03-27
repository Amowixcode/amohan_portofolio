"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import FadeIn from "@/components/motion/fade-in";
import { contactInfo } from "@/data/site-content";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-spacing scroll-mt-24 py-16"
      aria-labelledby="contact-heading"
    >
      <FadeIn className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center shadow-lg shadow-black/10 backdrop-blur sm:px-10">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight text-foreground"
              >
                {t("contact_title")}
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                {t("contact_description")}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 min-w-40 items-center justify-center gap-2 rounded-xl border border-white/10 bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/10"
              >
                <Linkedin className="size-4" />
                <span>{t("contact_linkedin")}</span>
              </Link>
              <Link
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 min-w-40 items-center justify-center gap-2 rounded-xl border border-white/10 bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/10"
              >
                <Github className="size-4" />
                <span>{t("contact_github")}</span>
              </Link>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Mail className="size-4" />
                <span className="font-medium text-foreground">
                  {t("contact_email")}:
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition hover:text-foreground"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="size-4" />
                <span className="font-medium text-foreground">
                  {t("contact_phone")}:
                </span>
                <span>{contactInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
