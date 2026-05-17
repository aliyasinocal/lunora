import Link from "next/link";
import MoonIcon from "./MoonIcon";

type Props = {
  variant?: "default" | "compact" | "footer";
  className?: string;
};

export default function Logo({ variant = "default", className = "" }: Props) {
  const isCompact = variant === "compact";
  const isFooter = variant === "footer";
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center gap-1 text-current ${className}`}
      aria-label="Lunora anasayfa"
    >
      <MoonIcon
        size={isCompact ? 18 : 26}
        className={`transition-transform duration-700 group-hover:rotate-[20deg] ${
          isFooter ? "text-gold" : ""
        }`}
      />
      <span
        className={`font-display ${
          isCompact ? "text-lg tracking-wider-2" : "text-2xl tracking-wider-2"
        }`}
        style={{ fontWeight: 400 }}
      >
        LUNORA
      </span>
      {!isCompact && (
        <span className="text-[9px] uppercase tracking-wider-3 opacity-70">
          Sakinliğin Özü
        </span>
      )}
    </Link>
  );
}
