"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthFrame from "@/components/auth/AuthFrame";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email);
    router.push("/hesabim");
  };

  return (
    <AuthFrame
      title="Hoş geldin."
      subtitle="Lunora ritüel hesabına giriş yap."
      altText="Henüz Lunora ailesinde değil misin?"
      altHref="/uyelik"
      altLabel="Üye Ol"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
            E-posta
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
            placeholder="seninadres@ornek.com"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
            Şifre
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <label className="flex items-center gap-2 text-ink/60 cursor-pointer">
            <input type="checkbox" className="accent-ink" />
            Beni hatırla
          </label>
          <Link href="#" className="text-ink/60 hover:text-gold transition">
            Şifremi unuttum
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-ink text-sand hover:bg-ink-soft py-3.5 text-[11px] uppercase tracking-wider-2 font-medium transition mt-2"
        >
          Giriş Yap
        </button>
        <p className="text-[10px] text-ink/45 text-center pt-2">
          Bu bir demo sitedir. Herhangi bir e-posta ile giriş yapabilirsin.
        </p>
      </form>
    </AuthFrame>
  );
}
