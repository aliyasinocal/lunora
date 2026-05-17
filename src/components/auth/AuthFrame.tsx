import Image from "next/image";
import Link from "next/link";
import Logo from "../ui/Logo";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  altText: string;
  altHref: string;
  altLabel: string;
};

export default function AuthFrame({
  title,
  subtitle,
  children,
  altText,
  altHref,
  altLabel,
}: Props) {
  return (
    <section className="grid md:grid-cols-2 min-h-[80vh]">
      <div className="relative hidden md:block">
        <Image
          src="/images/products/essence-set-navy.jpg"
          alt="Lunora ritüel anı"
          fill
          sizes="50vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-sand">
          <p className="font-display text-3xl leading-tight italic">
            "Dur. Nefes al.
            <br />
            Kendine dön."
          </p>
          <div className="gold-line w-12 mt-6" />
          <p className="text-[10px] uppercase tracking-wider-3 mt-4 text-sand/60">
            Lunora · Sakinliğin Özü
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-6 md:px-16 py-16">
        <div className="w-full max-w-sm">
          <Link href="/" className="block mb-10">
            <Logo />
          </Link>
          <h1 className="font-display text-3xl md:text-4xl mb-2">{title}</h1>
          {subtitle && <p className="text-sm text-ink/60 mb-7">{subtitle}</p>}
          {children}
          <div className="gold-line w-full my-7" />
          <p className="text-sm text-center text-ink/65">
            {altText}{" "}
            <Link href={altHref} className="text-ink underline-offset-4 underline hover:text-gold">
              {altLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
