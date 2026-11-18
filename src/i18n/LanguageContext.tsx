import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Lang, TranslationKey } from "./translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // ignora erro de storage
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = translations[lang]["meta.title"];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[lang]["meta.description"]);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignora erro de storage
    }
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT deve ser usado dentro de <LanguageProvider>");
  return ctx;
}