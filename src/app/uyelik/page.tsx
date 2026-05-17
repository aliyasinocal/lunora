"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthFrame from "@/components/auth/AuthFrame";
import { useAuth } from "@/lib/auth-context";

export default function SignupPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    accept: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(form.email, `${form.name} ${form.surname}`.trim());
    router.push("/hesabim");
  };

  return (
    <AuthFrame
      title="Aramıza katıl."
      subtitle="Ritüel kartlarına, ön satışlara ve atölye notlarına ilk sen ulaş."
      altText="Zaten hesabın var mı?"
      altHref="/giris"
      altLabel="Giriş Yap"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input label="Ad" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Input label="Soyad" value={form.surname} onChange={(v) => setForm({ ...form, surname: v })} required />
        </div>
        <Input label="E-posta" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
        <Input label="Şifre" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} required />
        <label className="flex items-start gap-2 text-[11px] text-ink/65 cursor-pointer pt-2">
          <input
            type="checkbox"
            checked={form.accept}
            onChange={(e) => setForm({ ...form, accept: e.target.checked })}
            required
            className="mt-0.5 accent-ink"
          />
          <span>
            Lunora <a href="/kullanim-kosullari" className="underline">Kullanım Koşulları</a> ve{" "}
            <a href="/gizlilik" className="underline">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.
          </span>
        </label>
        <button
          type="submit"
          className="w-full bg-ink text-sand hover:bg-ink-soft py-3.5 text-[11px] uppercase tracking-wider-2 font-medium transition"
        >
          Üye Ol
        </button>
        <p className="text-[10px] text-ink/45 text-center pt-2">
          Bu bir demo sitedir. Bilgiler yalnızca tarayıcında saklanır.
        </p>
      </form>
    </AuthFrame>
  );
}

function Input({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
    </div>
  );
}
