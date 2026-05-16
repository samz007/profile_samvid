import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { recognitionItems } from "@/data/content";

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
    title: item.title,
    description: item.description,
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

  return (
    <>
      <PageHeader
        eyebrow={item.role}
        title={item.title}
        description={item.description}
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        <SimpleCard title="Role">
          <p>{item.role}</p>
        </SimpleCard>
        <SimpleCard title="Organization">
          <p>{item.organization}</p>
        </SimpleCard>
        <SimpleCard title="Description">
          <p>{item.description}</p>
        </SimpleCard>
        <SimpleCard title="Why It Matters">
          <p>{item.whyItMatters}</p>
        </SimpleCard>
        <section className="surface rounded-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-black">Verification</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            {item.verificationStatus === "public_event_page"
              ? "This recognition is connected to a public event page."
              : item.verificationLabel}
          </p>
          <span className="mt-5 inline-flex rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-sm font-bold text-[var(--muted)]">
            {item.verificationLabel}
          </span>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.eventUrl ? (
              <ButtonLink href={item.eventUrl} variant="primary">
                Visit event
              </ButtonLink>
            ) : null}
            {item.devpostUrl ? (
              <ButtonLink href={item.devpostUrl}>View Devpost</ButtonLink>
            ) : null}
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
