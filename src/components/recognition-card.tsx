import { ButtonLink } from "@/components/button-link";
import type { RecognitionItem } from "@/data/content";

type RecognitionCardProps = {
  item: RecognitionItem;
};

export function RecognitionCard({ item }: RecognitionCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
        {item.category} · {item.year}
      </p>
      <h3 className="text-xl font-black">{item.title}</h3>
      <p className="mt-1 font-bold text-[var(--gold)]">{item.role}</p>
      <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
      <span className="mt-5 inline-flex rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-xs font-bold text-[var(--muted)]">
        {item.verificationLabel}
      </span>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={item.internalHref} variant="primary">
          View details
        </ButtonLink>
        {item.eventUrl ? (
          <ButtonLink href={item.eventUrl}>Visit event</ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
