import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="section-shell flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-[var(--faint)]">
        <span>{profile.name}</span>
        <span>{profile.positioning}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
