import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";
import { profile } from "../data/profile";

const highlights = ["Laravel", "React", "TypeScript", "Node.js", "NestJS"];

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-12 pt-24 sm:px-8 sm:pt-32">
      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-6xl">{t(ui.hero.title)}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">{t(ui.hero.lead)}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">{t(ui.hero.viewProjects)}</a>
        <a href="#contact" className="btn btn-ghost">{t(ui.hero.contactMe)}</a>
        <a href={profile.cvUrl} download className="btn btn-ghost">{t(ui.hero.downloadCv)}</a>
      </div>
      <ul className="mt-12 flex flex-wrap gap-2" aria-label="Core technologies">
        {highlights.map((h) => <li key={h} className="chip">{h}</li>)}
      </ul>
    </section>
  );
}
