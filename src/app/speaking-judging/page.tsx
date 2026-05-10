import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ProofCard } from "@/components/proof-card";
import { SiteFooter } from "@/components/site-footer";
import { proofItems } from "@/data/proof";

export const metadata = {
  title: "Speaking & Judging",
  description:
    "Speaking, judging, reviewing, and event participation profile for Samvid Zare.",
};

export default function SpeakingJudgingPage() {
  const items = proofItems.filter((item) => item.category === "Judging & Reviewing");

  return (
    <>
      <PageHeader
        eyebrow="Speaking & Judging"
        title="Available for AI, systems, hackathon, and engineering review opportunities."
        description="This page gives organizers a quick read on relevant technical domains, selection signals, and prior judging or reviewing work."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-3">
        {items.map((item) => (
          <ProofCard item={item} key={`${item.title}-${item.organization}`} />
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
