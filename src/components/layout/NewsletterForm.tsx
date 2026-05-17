"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 border-b border-gold pb-4">
        <span className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
          <Check size={16} className="text-gold" />
        </span>
        <div>
          <p className="text-sm">Sakinliğe abone oldun.</p>
          <p className="text-[10px] uppercase tracking-wider-2 text-sand/55 mt-0.5">
            Bir sonraki notumuz {email.split("@")[1] ? "kutu"+"na " : ""}gelecek.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex items-center gap-0 border-b border-sand/30 focus-within:border-gold transition"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e-posta adresin"
        className="flex-1 bg-transparent py-4 text-sm placeholder:text-sand/40 outline-none"
      />
      <button
        type="submit"
        className="flex items-center gap-2 text-[11px] uppercase tracking-wider-2 text-gold hover:text-sand transition py-4 px-2"
      >
        Abone Ol <Send size={14} />
      </button>
    </form>
  );
}
