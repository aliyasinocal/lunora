import Link from "next/link";
import MoonIcon from "./MoonIcon";
import { cn } from "@/lib/format";

type Props = {
  variant?: "default" | "compact" | "stacked" | "footer";
  className?: string;
};

export default function Logo({ variant = "default", className }: Props) {
  if (variant === "stacked") {
    return (
      <Link
        href="/"
        aria-label="Lunora anasayfa"
        className={cn("group inline-flex flex-col items-center gap-1 text-current", className)}
      >
        <MoonIcon
          size={26}
          className="transition-transform duration-700 group-hover:rotate-[20deg]"
        />
        <span className="font-display text-2xl tracking-wider-2 leading-none" style={{ fontWeight: 400 }}>
          LUNORA
        </span>
        <span className="text-[9px] uppercase tracking-wider-3 opacity-70 leading-none">
          Sakinliğin Özü
        </span>
      </Link>
    );
  }

  const isCompact = variant === "compact";
  return (
    <Link
      href="/"
      aria-label="Lunora anasayfa"
      className={cn(
        "group inline-flex items-center gap-2.5 text-current",
        className
      )}
    >
      <MoonIcon
        size={isCompact ? 16 : 22}
        className="transition-transform duration-700 group-hover:rotate-[20deg]"
      />
      <span
        className={cn(
          "font-display tracking-wider-2 leading-none",
          isCompact ? "text-base" : "text-xl md:text-2xl"
        )}
        style={{ fontWeight: 400 }}
      >
        LUNORA
      </span>
    </Link>
  );
}
