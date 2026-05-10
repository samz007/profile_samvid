import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  ["Proof", "/proof"],
  ["Writing", "/writing"],
  ["Mentorship", "/mentorship"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#080c12]/78 backdrop-blur-xl">
      <div className="section-shell flex min-h-16 items-center justify-between gap-6">
        <Link className="flex items-center gap-3 font-black" href="/">
          <span className="grid size-9 place-items-center rounded-md border border-[var(--line)] bg-white/8 font-mono text-xs text-[var(--accent)]">
            SZ
          </span>
          <span>{profile.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[var(--muted)] md:flex">
          {navItems.map(([label, href]) => (
            <Link className="transition hover:text-white" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
