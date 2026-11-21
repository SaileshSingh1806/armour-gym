"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, LogIn, AlertTriangle } from "lucide-react";

export default function AdminLoginForm({ isConfigured = true }: { isConfigured?: boolean }) {
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
      {!isConfigured && (
        <div className="border border-amber-500/40 bg-amber-950/20 p-4 rounded-sm text-sm text-amber-200 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <AlertTriangle className="size-4 shrink-0" />
            <span>Admin Credentials Not Configured</span>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Environment variables <code>MEDIA_ADMIN_EMAIL</code>, <code>MEDIA_ADMIN_PASSWORD_HASH</code>, and <code>MEDIA_ADMIN_SESSION_SECRET</code> are missing. Configure them in Vercel or <code>.env.local</code> to enable login.
          </p>
        </div>
      )}
      <label className="block text-sm font-medium text-white/80">
        Admin email
        <input
          type="email" required autoComplete="username" value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-white/20 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-[#FF858A]"
          placeholder="admin@example.com"
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
        type="submit" disabled={busy || !isConfigured}
        className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#C8010A] px-5 py-3 font-oswald text-sm font-bold uppercase tracking-wider text-white hover:bg-[#AE0E16] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {busy ? <LockKeyhole className="size-4" /> : <LogIn className="size-4" />}
        {busy ? "Signing in…" : "Sign in securely"}
      </button>
    </form>
  );
}
