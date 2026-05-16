import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { notes } from "@/data/content";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((entry) => entry.slug === slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((entry) => entry.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={note.status}
        title={note.title}
        description={note.summary}
      />
      <main className="section-shell space-y-4 pb-20">
        {note.body.map((paragraph, index) => (
          <SimpleCard
            title={index === 0 ? "Start Here" : `Part ${index + 1}`}
            key={paragraph}
          >
            <p>{paragraph}</p>
          </SimpleCard>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
