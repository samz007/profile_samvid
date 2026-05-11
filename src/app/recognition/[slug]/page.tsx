import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { VerificationBadge } from "@/components/verification-badge";
import { links, recognitionItems } from "@/data/content";

const verificationBySlug = {
  "ieee-southeastcon-2026": links.ieeeVerification,
  "la-hacks-2026": links.laHacksVerification,
  "live-ai-ivy-plus-2026": links.liveAiVerification,
};

export function generateStaticParams() {
  return recognitionItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = recognitionItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: item.detailTitle,
    description: item.summary,
  };
}

export default async function RecognitionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = recognitionItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const verification = verificationBySlug[item.slug as keyof typeof verificationBySlug];

  return (
    <>
      <PageHeader
        eyebrow={item.detailRole}
        title={item.detailTitle}
        description={item.summary}
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        <SimpleCard title="Role">
          <p>{item.sections.role}</p>
        </SimpleCard>
        <SimpleCard title={item.slug === "ieee-southeastcon-2026" ? "Organization" : "Event"}>
          <p>{item.sections.organization}</p>
        </SimpleCard>
        <SimpleCard
          title={
            item.slug === "ieee-southeastcon-2026"
              ? "Review Focus"
              : "Evaluation Context"
          }
        >
          <p>{item.sections.context}</p>
        </SimpleCard>
        <SimpleCard title="Why It Matters">
          <p>{item.sections.whyItMatters}</p>
        </SimpleCard>
        <section className="surface rounded-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-black">Verification</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            {item.sections.verification}
          </p>
          <div className="mt-6">
            <VerificationBadge link={verification} />
          </div>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
