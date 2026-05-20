import { site } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="section-shell py-8 text-sm text-[var(--faint)]">
        {site.name} · {site.location}
      </div>
    </footer>
  );
}
