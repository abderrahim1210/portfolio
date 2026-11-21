import type { L } from "../lib/i18n";

export type ProjectKind = "fullstack" | "cms";
export interface Project {
  id: string;
  name: string;
  kind: ProjectKind;
  summary: L;
  features: string[];
  stack: string[];
  status: "in-progress" | "completed" | "prototype";
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "wallgo", name: "WallGo", kind: "fullstack", status: "in-progress",
    summary: {
      en: "A full-stack social media platform where people share posts and reels, join groups, follow pages and chat in real time.",
      fr: "Une plateforme sociale full-stack : publications, reels, groupes, pages, et messagerie en temps réel.",
      ar: "منصة تواصل اجتماعي متكاملة: منشورات وريلز ومجموعات وصفحات ومراسلة في الوقت الحقيقي.",
    },
    features: ["Posts, reels, groups and pages", "Notifications and search", "Real-time messaging", "REST API consumed by a typed React client"],
    stack: ["Laravel API", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    repo:"https://github.com/abderrahim1210/wallgo"
  },
  {
    id: "pixora", name: "Pixora", kind: "fullstack", status: "completed",
    summary: {
      en: "A photography sharing and editing platform. Photographers upload, edit and publish images, with no AI features involved.",
      fr: "Une plateforme de partage et d'édition de photos. Les photographes importent, retouchent et publient leurs images, sans IA.",
      ar: "منصة لمشاركة الصور وتعديلها، يرفع المصورون صورهم ويعدّلونها وينشرونها، دون أي ذكاء اصطناعي.",
    },
    features: ["Google OAuth sign-in", "Server-side image processing with Intervention Image", "Cloud media storage and delivery via Cloudinary"],
    stack: ["Laravel", "React", "MySQL", "Cloudinary", "Intervention Image", "Google OAuth"],
    repo:"https://github.com/abderrahim1210/pixora"
  },
  {
    id: "iwaco", name: "IWACO Showcase & Catalog", kind: "fullstack", status: "completed",
    summary: {
      en: "A corporate showcase website with a dynamic product catalog that the company can keep up to date.",
      fr: "Un site vitrine d'entreprise avec un catalogue de produits dynamique, facile à mettre à jour.",
      ar: "موقع تعريفي لشركة مع كتالوج منتجات ديناميكي يسهل تحديثه.",
    },
    features: ["Dynamic product catalog", "Structured SCSS on top of Bootstrap", "Laravel back end with a MariaDB database"],
    stack: ["Laravel", "React", "SCSS", "Bootstrap", "MariaDB"],
    repo:"https://github.com/abderrahim1210/iwaco"
  },
  {
    id: "deluxeupload", name: "DeluxeUpload", kind: "fullstack", status: "completed",
    summary: {
      en: "A cloud file-storage web app to upload, organize and share files through links.",
      fr: "Une application web de stockage cloud pour importer, organiser et partager des fichiers par lien.",
      ar: "تطبيق ويب للتخزين السحابي لرفع الملفات وتنظيمها ومشاركتها عبر روابط.",
    },
    features: ["File upload and storage", "Sharing flow", "Plain PHP and JavaScript, no framework"],
    stack: ["PHP", "JavaScript"],
    repo:"https://github.com/abderrahim1210/deluxeupload"
  },
  {
    id: "bookly", name: "Bookly", kind: "cms", status: "prototype",
    summary: {
      en: "An online bookstore prototype with a catalog, cart and checkout, configured on WooCommerce.",
      fr: "Un prototype de librairie en ligne avec catalogue, panier et paiement, configuré avec WooCommerce.",
      ar: "نموذج أولي لمكتبة إلكترونية بكتالوج وسلة مشتريات ودفع، مبني على WooCommerce.",
    },
    features: ["Product catalog and cart", "Checkout flow", "Store configuration in WooCommerce"],
    stack: ["WordPress", "WooCommerce"],
    repo:"https://github.com/abderrahim1210"
  },
];

export const statusLabel: Record<Project["status"], L> = {
  "in-progress": { en: "In progress", fr: "En cours", ar: "قيد التطوير" },
  completed: { en: "Completed", fr: "Terminé", ar: "مكتمل" },
  prototype: { en: "Prototype", fr: "Prototype", ar: "نموذج أولي" },
};
export const kindLabel: Record<ProjectKind, L> = {
  fullstack: { en: "Full-stack", fr: "Full-stack", ar: "Full-Stack" },
  cms: { en: "CMS / e-commerce", fr: "CMS / e-commerce", ar: "CMS / تجارة إلكترونية" },
};
