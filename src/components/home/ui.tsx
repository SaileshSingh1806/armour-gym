import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Shared layout primitives for the homepage so every section uses the same
 * container width, heading scale and button styles.
 *
 * Tokens
 *   ink      #0a0a0a   page + dark bands
 *   concrete #e7e8e6   light bands
 *   signal   #C8010A   brand red: buttons, rules, and text on light backgrounds (AA)
 *   signal-l #E33B42   brand red for small text/icons on dark backgrounds (AA)
 *   Corners are square throughout; only pills and avatars are rounded.
 */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export type Tone = "dark" | "light";

export function SectionTitle({
  title,
  lead,
  tone = "dark",
  className = "",
}: {
  title: string;
  lead?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2
        className={`font-oswald text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
          tone === "dark" ? "text-white" : "text-[#0a0a0a]"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-[58ch] font-body text-base leading-relaxed md:text-lg ${
            tone === "dark" ? "text-gray-300" : "text-[#41454a]"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

type Variant = "primary" | "outline" | "light" | "outline-ink";

const variants: Record<Variant, string> = {
  primary: "bg-[#C8010A] text-white hover:bg-[#A80008]",
  outline: "border border-white/35 text-white hover:bg-white hover:text-[#0a0a0a]",
  light: "bg-white text-[#0a0a0a] hover:bg-[#C8010A] hover:text-white",
  "outline-ink":
    "border border-black/30 text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2  px-6 py-3.5 font-body text-[0.95rem] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
