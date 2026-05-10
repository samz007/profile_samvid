import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      className="surface group flex min-h-80 flex-col justify-between rounded-lg p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]"
      href={`/case-studies/${study.slug}`}
    >
      <div>
        <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent-2)]">
          {study.company} · {study.domain}
        </p>
        <h3 className="text-2xl font-black leading-tight tracking-normal">
          {study.title}
        </h3>
        <p className="mt-4 leading-7 text-[var(--muted)]">{study.summary}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {study.stack.slice(0, 3).map((item) => (
          <span
            className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-bold text-[var(--muted)]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
