import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { RecognitionCard } from "@/components/recognition-card";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { notes, recognitionItems, roletrails } from "@/data/content";

export const metadata = {
  title: "Recognition | Samvid Zare",
  description:
    "Public reviewing, judging, mentorship, and community contribution across AI, engineering, and career access.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="External roles where my technical judgment has been used to review, evaluate, teach, and mentor."
        description="This page highlights public and independently shareable roles across reviewing, judging, mentorship, and technical community contribution."
      />
      <main className="section-shell space-y-12 pb-20">
        <section>
          <h2 className="mb-5 text-3xl font-black">Judging & Reviewing</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {recognitionItems.map((item) => (
              <RecognitionCard item={item} key={item.slug} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-3xl font-black">Teaching & Mentorship</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <SimpleCard title="Mentorship">
              <p>
                I mentor engineers, students, and early-career builders on
                applied AI, backend systems, career strategy, profile positioning,
                interviews, and technical judgment.
              </p>
            </SimpleCard>
            <SimpleCard title="Teaching & Community">
              <p>
                Teaching and mentorship are part of how I clarify technical
                ideas and help people make better decisions.
              </p>
            </SimpleCard>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-3xl font-black">Public Products</h2>
          <SimpleCard title="RoleTrails">
            <p>{roletrails.project.longDescription}</p>
          </SimpleCard>
        </section>

        <section>
          <h2 className="mb-5 text-3xl font-black">Writing & Notes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {notes.slice(0, 2).map((note) => (
              <SimpleCard eyebrow={note.status} title={note.title} key={note.title}>
                <p>{note.summary}</p>
              </SimpleCard>
            ))}
          </div>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
