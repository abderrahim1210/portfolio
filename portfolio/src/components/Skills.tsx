import Section from "./Section";
import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";
import { skillGroups } from "../data/skills";

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" title={t(ui.skills.title)}>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.id} className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <h3 className="mb-3 text-base font-medium">{t(g.title)}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => <li key={i} className="chip text-sm">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
