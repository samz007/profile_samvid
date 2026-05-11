import type { ExternalLink } from "@/data/content";

export function VerificationBadge({ link }: { link: ExternalLink }) {
  if (link.status === "public" && link.url) {
    return (
      <a
        className="inline-flex rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-sm font-bold text-[var(--accent)]"
        href={link.url}
        rel="noreferrer"
        target="_blank"
      >
        Public verification
      </a>
    );
  }

  if (link.status === "available_on_request") {
    return (
      <span className="inline-flex rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-sm font-bold text-[var(--muted)]">
        Certificate available upon request
      </span>
    );
  }

  return null;
}
