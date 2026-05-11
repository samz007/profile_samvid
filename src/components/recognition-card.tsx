type RecognitionCardProps = {
  item: {
    slug?: string;
    category: string;
    title: string;
    organization: string;
    summary: string;
  };
};

export function RecognitionCard({ item }: RecognitionCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
        {item.category}
      </p>
      <h3 className="text-xl font-black">{item.title}</h3>
      <p className="mt-1 font-bold text-[var(--gold)]">{item.organization}</p>
      <p className="mt-4 leading-7 text-[var(--muted)]">{item.summary}</p>
      {item.slug ? (
        <a
          className="mt-6 inline-flex font-black text-[var(--accent)]"
          href={`/recognition/${item.slug}`}
        >
          View details
        </a>
      ) : null}
    </article>
  );
}
