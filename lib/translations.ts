export const translations = {
  en: {
    nav_brand: "Portfolio",
    nav_subtitle: "NTNU Informatics Student",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_eyebrow: "Portfolio",
    hero_title: "Hi, I'm Amohan Kannan",
    hero_description_one:
      "I'm an Informatics student at NTNU who enjoys building web applications and solving real problems through code.",
    hero_description_two:
      "I have experience with backend development and an interest in creating systems that are both reliable and easy to use.",
    about_title: "About",
    about_description:
      "A short introduction to my background and what I am building experience in.",
    about_body_one:
      "I'm currently studying Informatics at NTNU in Trondheim, where I'm building a strong foundation in programming and system development.",
    about_body_two:
      "I've worked with backend development using Java and Spring Boot, focusing on building structured and maintainable systems.",
    about_body_three:
      "Alongside my studies, I work as a teaching assistant in Human-Computer Interaction, which has strengthened my understanding of how design decisions affect users.",
    projects_title: "Projects",
    projects_description:
      "A selected university project that highlights how I work with backend systems and team collaboration.",
    experience_title: "Experience",
    experience_description:
      "A few roles that reflect how I work with people, design, and collaboration.",
    experience_card_teaching_title: "Teaching Assistant",
    experience_card_teaching_subtitle: "NTNU",
    experience_card_teaching_description:
      "Guided students in usability and user-centered design. Helped bridge the gap between design and development.",
    experience_card_tsat_title: "Leader",
    experience_card_tsat_subtitle: "Tamil Student Association Trondheim (TSAT)",
    experience_card_tsat_description:
      "Led a student organization, coordinating events and managing team collaboration.",
    skills_title: "Skills",
    skills_description: "The main tools and areas I have worked with so far.",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_other: "Other",
    skills_frontend_items: "React, Next.js, TypeScript, Tailwind",
    skills_backend_items: "Java, Spring Boot, REST APIs",
    skills_other_items: "Git, User-centered design",
    contact_title: "Get in touch",
    contact_description:
      "I'm currently looking for internships and part-time opportunities. Feel free to reach out.",
    contact_text:
      "I'm currently looking for internships and part-time opportunities.",
    contact_text_secondary:
      "If you think I could be a good fit, feel free to reach out.",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",
    contact_email: "Email",
    contact_phone: "Phone",
    language_switcher_label: "Select language",
  },
  no: {
    nav_brand: "Portefolje",
    nav_subtitle: "Informatikkstudent ved NTNU",
    nav_about: "Meg",
    nav_experience: "Erfaring",
    nav_projects: "Prosjekter",
    nav_skills: "Ferdigheter",
    nav_contact: "Kontakt",
    hero_eyebrow: "Portefolje",
    hero_title: "Hei, jeg er Amohan Kannan",
    hero_description_one:
      "Jeg er informatikkstudent ved NTNU og liker \u00E5 bygge webapplikasjoner og l\u00F8se ekte problemer med kode.",
    hero_description_two:
      "Jeg har erfaring med backend-utvikling og er opptatt av \u00E5 lage systemer som er b\u00E5de p\u00E5litelige og enkle \u00E5 bruke.",
    about_title: "Om meg",
    about_description:
      "En kort introduksjon til bakgrunnen min og hva jeg bygger erfaring innen.",
    about_body_one:
      "Jeg studerer informatikk ved NTNU i Trondheim, hvor jeg bygger et solid grunnlag i programmering og systemutvikling.",
    about_body_two:
      "Jeg har jobbet med backend-utvikling i Java og Spring Boot, med fokus p\u00E5 \u00E5 bygge strukturerte og vedlikeholdbare systemer.",
    about_body_three:
      "Ved siden av studiene jobber jeg som studentassistent i menneske-maskin-interaksjon, noe som har styrket forst\u00E5elsen min av hvordan designvalg p\u00E5virker brukere.",
    projects_title: "Prosjekter",
    projects_description:
      "Et utvalgt universitetsprosjekt som viser hvordan jeg jobber med backend-systemer og teamsamarbeid.",
    experience_title: "Erfaring",
    experience_description:
      "Noen roller som viser hvordan jeg jobber med mennesker, design og samarbeid.",
    experience_card_teaching_title: "Studentassistent",
    experience_card_teaching_subtitle: "NTNU",
    experience_card_teaching_description:
      "Veiledet studenter i brukervennlighet og brukersentrert design. Bidro til a bygge bro mellom design og utvikling.",
    experience_card_tsat_title: "Leder",
    experience_card_tsat_subtitle: "Tamil Student Association Trondheim (TSAT)",
    experience_card_tsat_description:
      "Ledet en studentorganisasjon, koordinerte arrangementer og fulgte opp samarbeid i teamet.",
    skills_title: "Ferdigheter",
    skills_description:
      "De viktigste verkt\u00F8yene og omr\u00E5dene jeg har jobbet med s\u00E5 langt.",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_other: "Annet",
    skills_frontend_items: "React, Next.js, TypeScript, Tailwind",
    skills_backend_items: "Java, Spring Boot, REST API-er",
    skills_other_items: "Git, brukersentrert design",
    contact_title: "Ta kontakt",
    contact_description:
      "Jeg ser etter internship og deltidsjobber. Ta gjerne kontakt.",
    contact_text: "Jeg ser etter internship og deltidsjobber.",
    contact_text_secondary:
      "Ta gjerne kontakt hvis du tror jeg kan passe godt inn.",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",
    contact_email: "E-post",
    contact_phone: "Telefon",
    language_switcher_label: "Velg spr\u00E5k",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];
