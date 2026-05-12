import { site } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="section-shell flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-[var(--faint)]">
        <span>{site.name}</span>
        <span>Building tools, notes, and mentorship around career clarity.</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
