type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-none tracking-normal md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}
