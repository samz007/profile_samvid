type ProofCardProps = {
  item: {
    category: string;
    title: string;
    organization: string;
    date: string;
    signal: string;
  };
};

export function ProofCard({ item }: ProofCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
        {item.category} · {item.date}
      </p>
      <h3 className="text-xl font-black">{item.title}</h3>
      <p className="mt-1 font-bold text-[var(--gold)]">{item.organization}</p>
      <p className="mt-4 leading-7 text-[var(--muted)]">{item.signal}</p>
    </article>
  );
}
