type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="border-r border-[var(--line)] p-5 last:border-r-0 md:p-7">
      <strong className="mono block text-3xl font-black text-white">{value}</strong>
      <span className="mt-3 block text-sm leading-6 text-[var(--muted)]">{label}</span>
    </article>
  );
}
