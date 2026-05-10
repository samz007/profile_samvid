import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ProofCard } from "@/components/proof-card";
import { SiteFooter } from "@/components/site-footer";
import { proofItems } from "@/data/proof";

const categories = Array.from(new Set(proofItems.map((item) => item.category)));

export const metadata = {
  title: "Proof Ledger",
  description:
    "External recognition, judging, reviewing, teaching, mentorship, and leadership evidence for Samvid Zare.",
};

export default function ProofPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proof Ledger"
        title="A dated record of external recognition and leadership signals."
        description="Built to support jobs, speaking, reviewing, judging, mentoring, and long-term evidence organization without making the public site feel like a legal packet."
      />
      <main className="section-shell space-y-12 pb-20">
        <section className="surface rounded-lg p-7 md:p-9">
          <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
            Evidence Architecture
          </p>
          <h2 className="text-3xl font-black">
            Public proof, independent proof, dated proof.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--muted)]">
            This ledger is designed to keep external signals organized as they
            accumulate: reviewing, judging, teaching, mentoring, writing, public
            projects, and other independent recognition. The goal is simple:
            make the record easy to verify without overexplaining it.
          </p>
        </section>

        {categories.map((category) => (
          <section key={category}>
            <h2 className="mb-5 text-3xl font-black">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {proofItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <ProofCard
                    item={item}
                    key={`${item.title}-${item.organization}`}
                  />
                ))}
            </div>
          </section>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
