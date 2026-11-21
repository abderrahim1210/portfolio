import Section from "./Section";
import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const { t } = useLang();
  return (
    <Section id="experience" title={t(ui.experience.title)}>
      <ol className="border-s border-neutral-300 dark:border-neutral-700">
        {timeline.map((item) => (
          <li key={item.id} className="relative pb-10 ps-8 last:pb-0">
            <span className="absolute -start-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
            <p className="text-sm text-neutral-500">{item.period} · {item.place}</p>
            <h3 className="mt-1 text-lg font-medium">{t(item.title)}</h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t(item.description)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
