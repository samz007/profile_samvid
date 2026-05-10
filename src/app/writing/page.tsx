import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { writing } from "@/data/writing";

export const metadata = {
  title: "Writing",
  description:
    "Technical writing topics on AI systems, RAG, reliability, human judgment, and engineering communication.",
};

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notes"
        title="Writing on production AI, platform engineering, and technical judgment."
        description="Essays and notes designed to turn practical engineering experience into useful public thinking."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {writing.map((item) => (
          <article className="surface rounded-lg p-7" key={item.title}>
            <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
              {item.status}
            </p>
            <h2 className="text-2xl font-black">{item.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{item.summary}</p>
          </article>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
