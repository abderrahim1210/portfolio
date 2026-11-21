import { LANGS, useLang } from "../lib/i18n";
import { useTheme } from "../lib/useTheme";
import { ui } from "../data/ui";
import { profile } from "../data/profile";

const links = ["about", "skills", "projects", "experience", "contact"] as const;

export default function Header() {
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/70 bg-paper/85 backdrop-blur dark:border-neutral-800/70 dark:bg-ink/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold">{profile.name}</a>
        <nav className="hidden gap-6 text-sm md:flex" aria-label="Primary">
          {links.map((k) => (
            <a key={k} href={`#${k}`} className="text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400">
              {t(ui.nav[k])}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-neutral-300 p-0.5 text-xs dark:border-neutral-700" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`rounded-md px-2 py-1 transition-colors ${lang === l.code ? "bg-accent text-white" : "text-neutral-600 hover:text-accent dark:text-neutral-400"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label={t(ui.theme)}
            className="rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-300"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
