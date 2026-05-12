import { ButtonLink } from "@/components/button-link";

export function CTASection() {
  return (
    <section className="section-shell py-16">
      <div className="surface grid gap-8 rounded-lg p-8 md:grid-cols-[1fr_360px] md:p-10">
        <div>
          <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
            Contact
          </p>
          <h2 className="text-balance text-4xl font-black leading-none tracking-normal">
            Open to thoughtful conversations around career clarity and useful product building.
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            I’m especially interested in conversations around RoleTrails,
            AI-assisted development, mentorship, judging, reviewing, writing,
            and selected collaboration opportunities.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <ButtonLink href="/contact" variant="primary">
            Contact me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
