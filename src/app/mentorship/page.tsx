import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Mentorship",
  description:
    "Mentorship and guidance focus areas for engineers working on AI, platform systems, interviews, and career direction.",
};

export default function MentorshipPage() {
  const focusAreas = [
    "AI systems thinking and evaluation",
    "RAG concepts, failure modes, and trust surfaces",
    "Backend and platform engineering career direction",
    "Resume, portfolio, and interview positioning",
    "Moving from execution to influence without formal authority",
  ];

  return (
    <>
      <PageHeader
        eyebrow="Mentorship"
        title="Practical guidance for engineers building stronger judgment."
        description="Book through Topmate while keeping direct contact details off the open web."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {focusAreas.map((area) => (
          <article className="surface rounded-lg p-6" key={area}>
            <h2 className="text-xl font-black">{area}</h2>
          </article>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
