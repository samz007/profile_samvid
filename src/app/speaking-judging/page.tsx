import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { RecognitionCard } from "@/components/recognition-card";
import { SiteFooter } from "@/components/site-footer";
import { recognitionItems } from "@/data/recognition";

export const metadata = {
  title: "Speaking & Judging",
  description:
    "Speaking, judging, reviewing, and event participation profile for Samvid Zare.",
};

export default function SpeakingJudgingPage() {
  const items = recognitionItems.filter((item) => item.category === "Judging & Reviewing");

  return (
    <>
      <PageHeader
        eyebrow="Speaking & Judging"
        title="Available for public AI, systems, hackathon, and review opportunities."
        description="This page gives organizers a quick read on relevant technical domains, selection signals, and prior judging or reviewing work."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-3">
        {items.map((item) => (
          <RecognitionCard item={item} key={`${item.title}-${item.organization}`} />
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
