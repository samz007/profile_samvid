import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links, mentorshipTopics } from "@/data/content";

export const metadata = {
  title: "Mentorship | Samvid Zare",
  description:
    "Mentorship on career direction, profile positioning, interviews, AI-assisted building, and technical communication.",
};

export default function MentorshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentorship"
        title="I help engineers, students, and builders make sharper career and technical decisions."
        description="I mentor people on career direction, profile positioning, interviews, project choices, AI-assisted building, backend/system design thinking, and technical communication."
      />
      <main className="section-shell space-y-8 pb-20">
        <SimpleCard title="Practical Clarity">
          <p>
            The goal is practical clarity: understand the situation, identify
            the real constraint, and leave with concrete next steps.
          </p>
        </SimpleCard>
        <section className="grid gap-3 md:grid-cols-3">
          {mentorshipTopics.map((topic) => (
            <div
              className="rounded-md border border-[var(--line)] bg-white/6 p-4 font-bold"
              key={topic}
            >
              {topic}
            </div>
          ))}
        </section>
        <SimpleCard title="RoleTrails tie-in">
          <p>
            I also build RoleTrails, a free job discovery platform focused on
            making career exploration more organized and accessible.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/roletrails">View RoleTrails</ButtonLink>
            <ExternalLinkButton link={links.linkedin} />
            <ExternalLinkButton link={links.topmate} variant="primary" />
          </div>
        </SimpleCard>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
