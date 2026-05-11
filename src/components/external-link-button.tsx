import { ButtonLink } from "@/components/button-link";
import type { ExternalLink } from "@/data/content";

type ExternalLinkButtonProps = {
  link: ExternalLink;
  variant?: "primary" | "secondary";
};

export function ExternalLinkButton({
  link,
  variant = "secondary",
}: ExternalLinkButtonProps) {
  if (link.status === "public" && link.url) {
    return (
      <ButtonLink href={link.url} variant={variant}>
        {link.label}
      </ButtonLink>
    );
  }

  if (link.status === "available_on_request") {
    return (
      <span className="inline-flex min-h-11 items-center rounded-md border border-[var(--line)] bg-white/6 px-5 text-sm font-black text-[var(--muted)]">
        {link.label}: available upon request
      </span>
    );
  }

  return null;
}
