import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { notes } from "@/data/content";

export const metadata = {
  title: "Notes | Samvid Zare",
  description:
    "Writing on public products, AI-assisted development, career access, and engineering judgment.",
};

export default function NotesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notes"
        title="Writing on public products, AI-assisted development, career access, and engineering judgment."
        description="Notes focus on general lessons, public product thinking, and useful technical judgment."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {notes.map((note) => (
          <SimpleCard eyebrow={note.status} title={note.title} key={note.title}>
            <p>{note.summary}</p>
          </SimpleCard>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
