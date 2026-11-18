import { useT } from "../i18n/LanguageContext";

export function About() {
  const { t } = useT();

  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="eyebrow mb-4 text-5xl">{t("about.title")}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-2xl">
            {t("about.intro")}
          </p>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-2xl">
            {t("about.current")}
          </p>

          <div className="mt-16">
            <h2 className="eyebrow mb-8 text-3xl">{t("about.languages")}</h2>

            <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-line-strong bg-white/5 p-5 text-left transition-all duration-300 hover:border-accent">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-2xl">
                  🇧🇷
                </div>

                <div>
                  <h3 className="font-semibold text-ink">{t("about.portuguese")}</h3>
                  <p className="mt-1 text-sm text-muted">{t("about.native")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-line-strong bg-white/5 p-5 text-left transition-all duration-300 hover:border-accent">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-2xl">
                  🇬🇧
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{t("about.english")}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {t("about.englishLevel")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
