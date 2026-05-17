import Link from "next/link";
import { cn } from "@/lib/format";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type Props = ButtonProps | LinkProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-sand hover:bg-ink-soft border border-ink",
  secondary:
    "bg-sand text-ink border border-ink hover:bg-ink hover:text-sand",
  outline:
    "bg-transparent text-current border border-current/40 hover:border-current",
  ghost: "bg-transparent text-current hover:opacity-70",
  gold: "bg-gold text-ink hover:bg-gold-deep hover:text-sand border border-gold",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[11px]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

export default function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    fullWidth,
  } = props;

  const cls = cn(
    "inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider-2 transition-all duration-300 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={cls}>
      {children}
    </button>
  );
}
