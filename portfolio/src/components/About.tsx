import Section from "./Section";
import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";

export default function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t(ui.about.title)}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>{t(ui.about.p1)}</p>
          <p>{t(ui.about.p2)}</p>
          <p>{t(ui.about.p3)}</p>
        </div>
        <dl className="h-fit space-y-4 rounded-xl border border-neutral-200 p-5 text-sm dark:border-neutral-800">
          <div><dt className="text-neutral-500">Diploma</dt><dd className="mt-0.5 font-medium">{t(ui.about.degree)}</dd></div>
          <div><dt className="text-neutral-500">Honors</dt><dd className="mt-0.5 font-medium text-accent">{t(ui.about.honors)}</dd></div>
          <div><dt className="text-neutral-500">Interests</dt><dd className="mt-0.5 font-medium">{t(ui.about.interests)}</dd></div>
        </dl>
      </div>
    </Section>
  );
}
