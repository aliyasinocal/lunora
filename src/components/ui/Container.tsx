import { cn } from "@/lib/format";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export default function Container({ children, className, size = "default" }: Props) {
  const widths = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };
  return (
    <div className={cn("mx-auto w-full px-5 md:px-10", widths[size], className)}>
      {children}
    </div>
  );
}
