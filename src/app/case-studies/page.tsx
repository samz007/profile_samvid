import { CaseStudyCard } from "@/components/case-study-card";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Production work across GenAI, context platforms, pricing, and modernization."
        description="Each case study is structured around problem, role, system design, decisions, reliability, metrics, tradeoffs, and what I would improve next."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
