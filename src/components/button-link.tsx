import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "secondary",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-black transition hover:-translate-y-0.5",
        variant === "primary"
          ? "border-[var(--accent)] bg-[var(--accent)] text-slate-950"
          : "border-[var(--line)] bg-white/7 text-white hover:bg-white/11"
      )}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
