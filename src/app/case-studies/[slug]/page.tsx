import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={`${study.company} · ${study.domain}`}
        title={study.title}
        description={study.summary}
      />
      <main className="section-shell pb-20">
        <section className="surface mb-8 grid gap-4 rounded-lg p-6 md:grid-cols-4">
          {[
            ["Role", study.role],
            ["Year", study.year],
            ["Scale", study.scale],
            ["Stack", study.stack.join(" · ")],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="mono mb-2 text-xs font-black uppercase text-[var(--accent)]">
                {label}
              </p>
              <p className="text-sm leading-6 text-[var(--muted)]">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="surface h-fit rounded-lg p-6">
            <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent-2)]">
              Impact
            </p>
            <ul className="space-y-4">
              {study.impact.map((item) => (
                <li className="text-sm leading-6 text-[var(--muted)]" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <article className="surface rounded-lg p-7 md:p-10">
            <CaseBlock title="Problem" body={study.sections.problem} />
            <CaseBlock title="Why it mattered" body={study.sections.mattered} />
            <CaseBlock title="My role" body={study.sections.role} />
            <CaseBlock title="Architecture" body={study.sections.architecture} />

            <div className="mb-9">
              <h2 className="mb-4 text-2xl font-black">Key technical decisions</h2>
              <ul className="space-y-3 text-[var(--muted)]">
                {study.sections.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>

            <div className="mb-9">
              <h2 className="mb-4 text-2xl font-black">Reliability and risk controls</h2>
              <ul className="space-y-3 text-[var(--muted)]">
                {study.sections.riskControls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>

            <CaseBlock title="Tradeoffs" body={study.sections.tradeoffs} />
            <CaseBlock
              title="What I would improve now"
              body={study.sections.improve}
            />
          </article>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="mb-9">
      <h2 className="mb-4 text-2xl font-black">{title}</h2>
      <p className="leading-8 text-[var(--muted)]">{body}</p>
    </section>
  );
}
