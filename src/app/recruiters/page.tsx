import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { metrics } from "@/data/profile";

export const metadata = {
  title: "Recruiters",
  description:
    "Recruiter-focused summary for senior AI, platform engineering, and technical leadership opportunities.",
};

export default function RecruitersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recruiters"
        title="Senior engineer for enterprise AI, data platforms, and high-scale decision systems."
        description="Best fit: teams building production GenAI workflows, support intelligence, RAG platforms, internal productivity tools, pricing/optimization systems, or platform modernization."
      />
      <main className="section-shell pb-20">
        <section className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <article className="surface rounded-lg p-6" key={metric.value}>
              <strong className="mono block text-3xl font-black">
                {metric.value}
              </strong>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {metric.label}
              </p>
            </article>
          ))}
        </section>
        <section className="surface mt-8 rounded-lg p-8">
          <h2 className="text-3xl font-black">Role targets</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Senior / Staff-leaning Software Engineer",
              "AI Platform Engineer",
              "Backend / Distributed Systems Engineer",
              "GenAI Product Infrastructure",
              "Enterprise Support Automation",
              "Technical Lead without direct management",
            ].map((role) => (
              <p
                className="rounded-md border border-[var(--line)] bg-white/6 p-4 font-bold"
                key={role}
              >
                {role}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/case-studies" variant="primary">
              Review Case Studies
            </ButtonLink>
            <ButtonLink href="/contact">Contact Options</ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
