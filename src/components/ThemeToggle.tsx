import { Sun, Moon } from "lucide-react";
import { useTheme } from "../data/useTheme";
import { useT } from "../i18n/LanguageContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useT();

  return (
    <button
      onClick={toggleTheme}
      aria-label={t("theme.toggle")}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-accent transition-colors"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}