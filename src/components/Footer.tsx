import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { useT } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

const NAV_LINKS: { href: string; labelKey: TranslationKey }[] = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div className="flex gap-3">
          <a
            href="https://github.com/preislerbtw"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-preisler-2b206341b/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://x.com/preislerbtw"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <XIcon size={18} />
          </a>
        </div>

        <nav className="flex gap-6 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <p className="text-xs text-faint">
          © {new Date().getFullYear()} Jorge Preisler - {t("footer.location")}
        </p>
      </div>
    </footer>
  );
}
