import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { roletrails } from "@/data/content";

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
          <p>{roletrails.problem}</p>
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
            {project.metrics
              .filter((item) => item !== "Searches performed")
              .map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SimpleCard>
        <section className="surface rounded-lg p-7">
          <h2 className="text-2xl font-black">Contact / Feedback</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Contact / Feedback
            </ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
