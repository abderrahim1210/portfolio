import type { L } from "../lib/i18n";

/** All interface strings. Add a key here, then use t(ui.key). */
export const ui = {
  nav: {
    about: { en: "About", fr: "À propos", ar: "نبذة" },
    skills: { en: "Skills", fr: "Compétences", ar: "المهارات" },
    projects: { en: "Projects", fr: "Projets", ar: "المشاريع" },
    experience: { en: "Experience", fr: "Parcours", ar: "المسار" },
    contact: { en: "Contact", fr: "Contact", ar: "تواصل" },
  },
  hero: {
    title: {
      en: "Full-stack web developer building complete products, from API to interface.",
      fr: "Développeur web full-stack : des produits complets, de l'API à l'interface.",
      ar: "مطوّر ويب Full-Stack أبني منتجات متكاملة، من الـ API إلى الواجهة.",
    },
    lead: {
      en: "I build with Laravel, React, TypeScript and Node.js / NestJS. I care about clear data models, readable code and interfaces that feel fast.",
      fr: "Je développe avec Laravel, React, TypeScript et Node.js / NestJS. J'accorde de l'importance aux modèles de données clairs, au code lisible et aux interfaces rapides.",
      ar: "أطوّر باستخدام Laravel وReact وTypeScript وNode.js / NestJS، مع اهتمام بنماذج بيانات واضحة وكود مقروء وواجهات سريعة.",
    },
    viewProjects: { en: "View projects", fr: "Voir les projets", ar: "عرض المشاريع" },
    downloadCv: { en: "Download CV", fr: "Télécharger le CV", ar: "تحميل السيرة الذاتية" },
    contactMe: { en: "Get in touch", fr: "Me contacter", ar: "تواصل معي" },
  },
  about: {
    title: { en: "About", fr: "À propos", ar: "نبذة عني" },
    p1: {
      en: "I hold a Bac+2 in Digital Development (Full Stack Web), graduating with Mention Très Bien. My training was project-driven, so I learned by shipping: REST APIs, authentication, file uploads, real-time features and deployable front ends.",
      fr: "Titulaire d'un Bac+2 en Développement Digital (Full Stack Web), obtenu avec Mention Très Bien. Ma formation était orientée projets : j'ai appris en livrant des API REST, de l'authentification, de l'upload de fichiers, du temps réel et des interfaces déployables.",
      ar: "حاصل على دبلوم Bac+2 في التطوير الرقمي (Full Stack Web) بميزة «حسن جدًا». كان تكويني قائمًا على المشاريع، فتعلّمت عبر البناء: واجهات REST وتسجيل الدخول ورفع الملفات والوقت الحقيقي وواجهات جاهزة للنشر.",
    },
    p2: {
      en: "I've built full-stack applications end to end, completed an end-of-studies internship and worked in a bookstore, which taught me how real users and customers behave.",
      fr: "J'ai réalisé des applications full-stack de bout en bout, effectué un stage de fin d'études et travaillé dans une librairie, ce qui m'a appris comment les vrais utilisateurs et clients se comportent.",
      ar: "أنجزت تطبيقات Full-Stack كاملة، وأتممت تدريب نهاية الدراسة، وعملت في مكتبة، وهو ما علّمني كيف يتصرف المستخدمون والزبناء الحقيقيون.",
    },
    p3: {
      en: "Away from the keyboard I do photography and drawing. They shape how I think about composition, spacing and detail in interfaces.",
      fr: "Hors du clavier, je pratique la photographie et le dessin. Ils influencent ma façon de penser la composition, l'espacement et le détail dans les interfaces.",
      ar: "خارج الكيبورد أمارس التصوير الفوتوغرافي والرسم، وهما يؤثران في نظرتي للتركيب والمسافات والتفاصيل في الواجهات.",
    },
    degree: { en: "Bac+2 Digital Development, Full Stack Web", fr: "Bac+2 Développement Digital, Full Stack Web", ar: "Bac+2 تطوير رقمي، Full Stack Web" },
    honors: { en: "Mention Très Bien", fr: "Mention Très Bien", ar: "ميزة حسن جدًا" },
    interests: { en: "Photography, drawing", fr: "Photographie, dessin", ar: "التصوير، الرسم" },
  },
  skills: { title: { en: "Skills & stack", fr: "Compétences & stack", ar: "المهارات والتقنيات" } },
  projects: {
    title: { en: "Featured projects", fr: "Projets sélectionnés", ar: "مشاريع مختارة" },
    all: { en: "All", fr: "Tous", ar: "الكل" },
    features: { en: "Key features", fr: "Fonctionnalités clés", ar: "أهم المزايا" },
    repo: { en: "Source", fr: "Code source", ar: "الكود" },
    live: { en: "Live demo", fr: "Démo", ar: "عرض مباشر" },
    soon: { en: "Links coming soon", fr: "Liens bientôt disponibles", ar: "الروابط قريبًا" },
  },
  experience: { title: { en: "Experience & education", fr: "Parcours & formation", ar: "المسار والتكوين" } },
  contact: {
    title: { en: "Contact", fr: "Contact", ar: "تواصل" },
    lead: {
      en: "Have a project, an internship or a job in mind? Send a message and I'll reply as soon as I can.",
      fr: "Un projet, un stage ou un poste en vue ? Envoyez un message, je réponds dès que possible.",
      ar: "لديك مشروع أو تدريب أو فرصة عمل؟ أرسل رسالة وسأردّ في أقرب وقت.",
    },
    name: { en: "Name", fr: "Nom", ar: "الاسم" },
    email: { en: "Email", fr: "E-mail", ar: "البريد الإلكتروني" },
    message: { en: "Message", fr: "Message", ar: "الرسالة" },
    send: { en: "Send message", fr: "Envoyer le message", ar: "إرسال الرسالة" },
    sending: { en: "Sending…", fr: "Envoi…", ar: "جارٍ الإرسال…" },
    errName: { en: "Enter your name.", fr: "Saisissez votre nom.", ar: "أدخل اسمك." },
    errEmail: { en: "Enter a valid email address.", fr: "Saisissez une adresse e-mail valide.", ar: "أدخل بريدًا إلكترونيًا صحيحًا." },
    errMsg: { en: "Write at least 10 characters.", fr: "Écrivez au moins 10 caractères.", ar: "اكتب 10 أحرف على الأقل." },
    ok: { en: "Message sent. Thank you, I'll get back to you soon.", fr: "Message envoyé. Merci, je reviens vers vous rapidement.", ar: "تم إرسال الرسالة. شكرًا، سأتواصل معك قريبًا." },
    fail: { en: "The message could not be sent. Try again or email me directly.", fr: "Le message n'a pas pu être envoyé. Réessayez ou écrivez-moi directement.", ar: "تعذّر إرسال الرسالة. حاول مجددًا أو راسلني مباشرة." },
  },
  theme: { en: "Toggle theme", fr: "Changer de thème", ar: "تبديل المظهر" },
} satisfies Record<string, L | Record<string, L>>;
