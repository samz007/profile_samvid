import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/content";

export const metadata = {
  title: "Projects | Samvid Zare",
  description:
    "Public products, experiments, and tools around career access, AI-assisted workflows, and practical decision-making.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Public products, experiments, and tools I’m building around career access, AI-assisted workflows, and practical decision-making."
        description="A growing public body of products and experiments, starting with RoleTrails."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            className="surface group rounded-lg p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]"
            href={`/projects/${project.slug}`}
            key={project.slug}
          >
            <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
              {project.type} · {project.status}
            </p>
            <h2 className="text-3xl font-black">{project.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {project.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.focusTags.map((tag) => (
                <span
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-bold text-[var(--muted)]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-7 inline-flex font-black text-[var(--accent)]">
              View project →
            </span>
          </Link>
        ))}
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
