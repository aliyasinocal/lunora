import { cn } from "@/lib/format";
import MoonIcon from "./MoonIcon";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  showMoon?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  showMoon = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {showMoon && (
        <MoonIcon
          size={20}
          className={cn(
            "mb-1",
            light ? "text-gold" : "text-gold"
          )}
        />
      )}
      {eyebrow && (
        <span
          className={cn(
            "text-[10px] uppercase tracking-wider-3 font-medium",
            light ? "text-sand/70" : "text-ink/60"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl leading-[1.05]",
          light ? "text-sand" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-sm md:text-base leading-relaxed mt-2",
            light ? "text-sand/70" : "text-ink/65"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "gold-line w-16 mt-2",
          align === "center" ? "" : "mr-auto"
        )}
      />
    </div>
  );
}
