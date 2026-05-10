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
        eyebrow="Writing"
        title="A public technical voice around AI systems and engineering judgment."
        description="Notes on production AI, RAG systems, platform design, technical judgment, and career growth."
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
