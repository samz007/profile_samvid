import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/content";

export const metadata = {
  title: "Projects | Samvid Zare",
  description: "Public products and experiments by Samvid Zare.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="Public products and experiments."
      />
      <main className="section-shell pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article className="surface rounded-lg p-7" key={project.slug}>
              <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
                {project.status}
              </p>
              <h2 className="text-3xl font-black">{project.title}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.externalUrl ? (
                  <ButtonLink href={project.externalUrl} variant="primary">
                    Visit product
                  </ButtonLink>
                ) : null}
                <ButtonLink href={project.internalHref}>View project</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
