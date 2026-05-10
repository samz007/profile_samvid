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
