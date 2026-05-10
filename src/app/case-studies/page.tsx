import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudyThemes } from "@/data/case-studies";

export const metadata = {
  title: "Case Studies",
  description:
    "High-level case-study themes across AI systems, platform engineering, optimization, and teaching.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Selected work across AI systems, platforms, and engineering judgment."
        description="A focused view of the systems and experiences behind my technical judgment, from enterprise GenAI workflows to pricing platforms, support automation, and computer science teaching."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {caseStudyThemes.map((theme) => (
          <article className="surface rounded-lg p-7" key={theme.title}>
            <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
              {theme.organization}
            </p>
            <h2 className="text-2xl font-black">{theme.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{theme.summary}</p>
          </article>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
