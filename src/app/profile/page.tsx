import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { metrics } from "@/data/profile";

export const metadata = {
  title: "Profile",
  description:
    "Public-safe profile for AI systems, engineering judgment, writing, mentorship, and external recognition.",
};

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="A public-safe summary for people evaluating fit."
        description="This page intentionally avoids employer-specific project detail. It gives a clean overview of public interests, recognition signals, and collaboration lanes."
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
          <h2 className="text-3xl font-black">Public collaboration lanes</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">
            Detailed professional background can be shared privately through
            verified channels where confidentiality and context are easier to
            manage.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "AI systems thinking",
              "Technical writing and communication",
              "Mentorship and engineering guidance",
              "Judging and reviewing opportunities",
              "Teaching and concept explanation",
              "Technical leadership conversations",
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
            <ButtonLink href="/proof" variant="primary">
              Review Proof Ledger
            </ButtonLink>
            <ButtonLink href="/contact">Contact Options</ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
