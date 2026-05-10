import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { RecognitionCard } from "@/components/recognition-card";
import { SiteFooter } from "@/components/site-footer";
import { recognitionItems } from "@/data/recognition";

const categories = Array.from(new Set(recognitionItems.map((item) => item.category)));

export const metadata = {
  title: "Selected Work & Recognition",
  description:
    "Selected work, judging, reviewing, teaching, and mentorship recognition for Samvid Zare.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work & Recognition"
        title="Places where my engineering judgment has been trusted."
        description="I build production AI and platform systems, and I also contribute outside day-to-day product work through judging, reviewing, teaching, and mentorship."
      />
      <main className="section-shell space-y-12 pb-20">
        <section className="surface rounded-lg p-7 md:p-9">
          <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
            Recognition
          </p>
          <h2 className="text-3xl font-black">
            A record of trusted judgment across technical communities.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--muted)]">
            This page highlights places where my engineering judgment has been
            trusted across technical communities, student innovation, research
            review, production systems, and career mentorship.
          </p>
        </section>

        {categories.map((category) => (
          <section key={category}>
            <h2 className="mb-5 text-3xl font-black">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recognitionItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <RecognitionCard
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
