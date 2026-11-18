import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useT } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

const NAV_LINKS: { href: string; labelKey: TranslationKey }[] = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useT();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Jorge <span className="text-blue-500 inline-block mt-3">Preisler.</span>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />

            <button
              className="text-ink md:hidden"
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-surface px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}