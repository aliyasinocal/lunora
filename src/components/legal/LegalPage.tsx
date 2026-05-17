import Container from "../ui/Container";
import PageHero from "../ui/PageHero";

type Section = {
  title: string;
  body: string[];
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  effectiveDate?: string;
  sections: Section[];
};

export default function LegalPage({
  eyebrow,
  title,
  subtitle,
  effectiveDate,
  sections,
}: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Container size="narrow" className="py-16 md:py-20">
        {effectiveDate && (
          <p className="text-[11px] uppercase tracking-wider-2 text-ink/55 mb-10">
            Yürürlük tarihi: {effectiveDate}
          </p>
        )}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-2xl md:text-3xl mb-4">
                {i + 1}. {s.title}
              </h2>
              <div className="space-y-3 text-sm md:text-[15px] text-ink/75 leading-[1.85]">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
