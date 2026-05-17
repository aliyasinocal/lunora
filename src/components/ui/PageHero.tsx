import MoonIcon from "./MoonIcon";
import Container from "./Container";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "sand" | "ink";
};

export default function PageHero({ eyebrow, title, subtitle, variant = "sand" }: Props) {
  const isInk = variant === "ink";
  return (
    <section className={isInk ? "bg-ink text-sand" : "bg-sand-soft text-ink"}>
      <Container size="wide" className="py-24 md:py-32 text-center">
        <MoonIcon size={22} className="text-gold mx-auto mb-5" />
        {eyebrow && (
          <span className={`text-[10px] uppercase tracking-wider-3 ${isInk ? "text-sand/60" : "text-ink/55"}`}>
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05] max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 max-w-2xl mx-auto leading-relaxed ${isInk ? "text-sand/70" : "text-ink/65"}`}>
            {subtitle}
          </p>
        )}
        <div className="gold-line w-16 mx-auto mt-8" />
      </Container>
    </section>
  );
}
