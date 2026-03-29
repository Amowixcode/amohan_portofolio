"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import FadeIn from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
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
        <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.045] px-6 py-10 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:px-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
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

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-w-44 rounded-xl bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 hover:shadow-sky-500/30"
              >
                <Link href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="size-4" />
                  <span>{t("contact_linkedin")}</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="min-w-44 rounded-xl">
                <Link href={contactInfo.github} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  <span>{t("contact_github")}</span>
                </Link>
              </Button>
            </div>

            <div className="grid w-full gap-3 text-left sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  <span className="font-medium text-foreground">
                    {t("contact_email")}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  {contactInfo.email}
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="size-4" />
                  <span className="font-medium text-foreground">
                    {t("contact_phone")}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  {contactInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
