import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links, roletrails } from "@/data/content";

const project = roletrails.project;

export const metadata = {
  title: "RoleTrails | Job Discovery Platform by Samvid Zare",
  description:
    "RoleTrails is a free job discovery platform helping people explore roles, companies, and career paths in one place.",
};

export default function RoleTrailsProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow={project.type}
        title={project.title}
        description={project.shortDescription}
      />
      <main className="section-shell space-y-4 pb-20">
        <SimpleCard title="Overview">
          <p>{project.longDescription}</p>
        </SimpleCard>
        <SimpleCard title="What I’m Building">
          <ul className="grid gap-3 md:grid-cols-2">
            {roletrails.whatBuilding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SimpleCard>
        <SimpleCard title="Why It Matters">
          <p>{roletrails.whyItMatters}</p>
        </SimpleCard>
        <SimpleCard title="How I’m Building It">
          <p>{roletrails.howBuilding}</p>
        </SimpleCard>
        <SimpleCard title="What I’m Measuring">
          <ul className="grid gap-3 md:grid-cols-2">
            {project.metrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SimpleCard>
        <SimpleCard title="What This Shows">
          <p>{roletrails.whatThisShows}</p>
        </SimpleCard>
        <section className="surface rounded-lg p-7">
          <h2 className="text-2xl font-black">Next Steps</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.externalUrl ? (
              <ExternalLinkButton link={links.roletrails} variant="primary" />
            ) : null}
            {project.feedbackUrl ? (
              <ButtonLink href={project.feedbackUrl}>Share Feedback</ButtonLink>
            ) : null}
            {project.notesUrl ? (
              <ButtonLink href={project.notesUrl}>Read Build Notes</ButtonLink>
            ) : null}
            <ButtonLink href="/contact" variant="primary">
              Contact Me
            </ButtonLink>
          </div>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
