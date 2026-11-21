"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, LogIn } from "lucide-react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/media/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json() as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Login failed");
      router.replace("/admin/media");
      router.refresh();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Could not sign in");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={login} className="mt-8 space-y-5">
      <label className="block text-sm font-medium text-white/80">
        Admin email
        <input
          type="email" required autoComplete="username" value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-[#FF858A]"
          placeholder="Admin email"
        />
      </label>
      <label className="block text-sm font-medium text-white/80">
        Password
        <input
          type="password" required autoComplete="current-password" value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-[#FF858A]"
          placeholder="Your admin password"
        />
      </label>
      {error && <p role="alert" className="text-sm text-[#FF9CA2]">{error}</p>}
      <button
        type="submit" disabled={busy}
        className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#C8010A] px-5 py-3 font-oswald text-sm font-bold uppercase tracking-wider text-white hover:bg-[#AE0E16] disabled:opacity-60"
      >
        {busy ? <LockKeyhole className="size-4" /> : <LogIn className="size-4" />}
        {busy ? "Signing in…" : "Sign in securely"}
      </button>
    </form>
  );
}
