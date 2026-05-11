import type { ReactNode } from "react";

type SimpleCardProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function SimpleCard({ eyebrow, title, children }: SimpleCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      {eyebrow ? (
        <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-2xl font-black leading-tight tracking-normal">{title}</h3>
      <div className="mt-4 leading-7 text-[var(--muted)]">{children}</div>
    </article>
  );
}
