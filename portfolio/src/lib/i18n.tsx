import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";
/** Localized string: one entry per language. */
export type L = Record<Lang, string>;
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" }, { code: "fr", label: "FR" }, { code: "ar", label: "عربي" },
];

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem("lang") as Lang) || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t: (s) => s[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang must be used inside <LangProvider>");
  return c;
}
