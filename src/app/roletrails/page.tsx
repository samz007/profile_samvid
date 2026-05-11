import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links, roletrails } from "@/data/content";

export const metadata = {
  title: "RoleTrails | Job Discovery Platform by Samvid Zare",
  description:
    "RoleTrails is a free job discovery platform helping people explore roles, companies, and career paths in one place.",
};

export default function RoleTrailsPage() {
  return (
    <>
      <PageHeader
        eyebrow="RoleTrails"
        title={roletrails.tagline}
        description={roletrails.summary}
      />
      <main className="section-shell space-y-4 pb-20">
        <SimpleCard title="Problem">
          <p>{roletrails.problem}</p>
        </SimpleCard>
        <SimpleCard title="Product Idea">
          <p>{roletrails.productIdea}</p>
        </SimpleCard>
        <SimpleCard title="What I Built">
          <ul className="grid gap-3 md:grid-cols-2">
            {roletrails.whatIBuilt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SimpleCard>
        <SimpleCard title="Why I Built It">
          <p>{roletrails.whyIBuilt}</p>
        </SimpleCard>
        <SimpleCard title="AI-Assisted Development">
          <p>{roletrails.aiAssistedDevelopment}</p>
        </SimpleCard>
        <SimpleCard title="What I’m Measuring">
          <ul className="grid gap-3 md:grid-cols-2">
            {roletrails.measuring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SimpleCard>
        <SimpleCard title="What This Shows">
          <p>{roletrails.whatThisShows}</p>
        </SimpleCard>
        <section className="surface rounded-lg p-7">
          <h2 className="text-2xl font-black">Links / Feedback</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLinkButton link={links.roletrails} variant="primary" />
            <ButtonLink href="/notes">Read Build Notes</ButtonLink>
            <ButtonLink href="/contact">Share Feedback</ButtonLink>
          </div>
        </section>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
