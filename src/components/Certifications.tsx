import { certifications } from "../data/certifications";
import { CertificationCard } from "./CertificationCard";
import { useT } from "../i18n/LanguageContext";

export function Certifications() {
  const { t } = useT();

  return (
    <section
      id="certifications"
      className="border-y border-line bg-surface py-24 md:py-32"
    >
      <div className="container-page">
        <p className="eyebrow mb-4 text-center">{t("certifications.title")}</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.slug} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}