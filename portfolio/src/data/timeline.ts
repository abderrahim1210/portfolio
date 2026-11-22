import type { L } from "../lib/i18n";

export interface TimelineItem { id: string; period: string; title: L; place: string; description: L }

// TODO: replace period and place with your real dates and organizations.
export const timeline: TimelineItem[] = [
  {
    id: "growth", period: "Now", place: "Self-directed",
    title: { en: "Ongoing growth", fr: "Progression continue", ar: "تطوّر مستمر" },
    description: {
      en: "Building WallGo and deepening NestJS, Docker and PostgreSQL.",
      fr: "Développement de WallGo et approfondissement de NestJS, Docker et PostgreSQL.",
      ar: "العمل على WallGo وتعميق المعرفة بـ NestJS وDocker وPostgreSQL.",
    },
  },
  {
    id: "internship", period: "01/04/2026 - 30/04/2026", place: "TMANDIS - IWACO",
    title: { en: "End-of-studies internship", fr: "Stage de fin d'études", ar: "تدريب نهاية الدراسة" },
    description: {
      en: "Worked on a real web application in a team, from requirements to delivery.",
      fr: "Travail sur une vraie application web en équipe, du besoin à la livraison.",
      ar: "العمل على تطبيق ويب حقيقي ضمن فريق، من تحليل الحاجة إلى التسليم.",
    },
  },
  {
    id: "bookstore", period: "24/07/2026 - 01/10/2026", place: "Izdihar",
    title: { en: "Bookstore role", fr: "Poste en librairie", ar: "العمل في مكتبة" },
    description: {
      en: "Customer-facing work that built communication skills and a feel for how people browse and buy.",
      fr: "Travail au contact des clients : communication et compréhension de la façon dont on cherche et achète.",
      ar: "عمل مباشر مع الزبناء طوّر مهارات التواصل وفهم طريقة التصفح والشراء.",
    },
  },
  {
    id: "training", period: "01/09/2024 – 01/06/2026", place: "Insitut Spécialisé de Formation de l'Offchoring Casablanca",
    title: { en: "Bac+2 Digital Development, Full Stack Web", fr: "Bac+2 Développement Digital, Full Stack Web", ar: "Bac+2 تطوير رقمي، Full Stack Web" },
    description: {
      en: "Graduated with Mention Très Bien. Project-based training in PHP/Laravel, JavaScript/React, databases and tooling.",
      fr: "Diplômé avec Mention Très Bien. Formation par projets : PHP/Laravel, JavaScript/React, bases de données et outils.",
      ar: "تخرجت بميزة حسن جدًا. تكوين بالمشاريع في PHP/Laravel وJavaScript/React وقواعد البيانات والأدوات.",
    },
  },
];
