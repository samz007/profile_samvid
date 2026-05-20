import { PageHeader } from "@/components/page-header";
import { RecognitionCard } from "@/components/recognition-card";
import { SiteFooter } from "@/components/site-footer";
import { recognitionItems } from "@/data/content";

export const metadata = {
  title: "Recognition | Samvid Zare",
  description: "Reviewing, judging, and community contributions.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Recognition"
        description="Reviewing, judging, and community contributions."
      />
      <main className="section-shell pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {recognitionItems.map((item) => (
            <RecognitionCard item={item} key={item.slug} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
