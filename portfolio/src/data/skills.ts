import type { L } from "../lib/i18n";

export interface SkillGroup { id: string; title: L; items: string[] }

export const skillGroups: SkillGroup[] = [
  { id: "frontend", title: { en: "Frontend", fr: "Frontend", ar: "الواجهة الأمامية" }, items: ["React", "TypeScript", "Tailwind CSS", "Bootstrap", "SCSS"] },
  { id: "backend", title: { en: "Backend & APIs", fr: "Backend & API", ar: "الخلفية وواجهات API" }, items: ["Laravel / PHP", "Node.js / Express", "NestJS"] },
  { id: "db", title: { en: "Databases", fr: "Bases de données", ar: "قواعد البيانات" }, items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"] },
  { id: "tools", title: { en: "Tools & infrastructure", fr: "Outils & infrastructure", ar: "الأدوات والبنية" }, items: ["Git / GitHub", "Docker", "Linux / SSH", "Postman", "Cloudinary"] },
];
