import { useT } from "../i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, toggleLang, t } = useT();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("language.switch")}
      className="rounded-full border border-accent px-5 py-2 text-sm font-semibold tracking-wider text-accent transition-colors hover:bg-accent hover:text-white"
    >
      {lang === "pt" ? "PT" : "EN"}
    </button>
  );
}