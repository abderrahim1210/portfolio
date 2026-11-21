import { useMemo, useState } from "react";
import Section from "./Section";
import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";
import { projects, kindLabel, statusLabel, type ProjectKind } from "../data/projects";

type Filter = "all" | ProjectKind;
const filters: Filter[] = ["all", "fullstack", "cms"];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(() => projects.filter((p) => filter === "all" || p.kind === filter), [filter]);

  return (
    <Section id="projects" title={t(ui.projects.title)}>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${filter === f ? "border-accent bg-accent text-white" : "border-neutral-300 text-neutral-600 hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-400"}`}
          >
            {f === "all" ? t(ui.projects.all) : t(kindLabel[f])}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <article key={p.id} className="flex flex-col rounded-xl border border-neutral-200 bg-white/60 p-6 transition-colors hover:border-accent/60 dark:border-neutral-800 dark:bg-white/[0.02]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <span className="chip whitespace-nowrap">{t(statusLabel[p.status])}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t(p.summary)}</p>

            <h4 className="mt-5 text-sm font-medium">{t(ui.projects.features)}</h4>
            <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-neutral-600 marker:text-accent dark:text-neutral-400">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>

            <div className="mt-auto flex gap-4 pt-6 text-sm">
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-accent hover:underline">{t(ui.projects.repo)}</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-accent hover:underline">{t(ui.projects.live)}</a>}
              {!p.repo && !p.live && <span className="text-neutral-500">{t(ui.projects.soon)}</span>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
