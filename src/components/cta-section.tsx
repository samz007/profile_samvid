import { ButtonLink } from "@/components/button-link";

export function CTASection() {
  return (
    <section className="section-shell py-16">
      <div className="surface grid gap-8 rounded-lg p-8 md:grid-cols-[1fr_360px] md:p-10">
        <div>
          <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
            Next Step
          </p>
          <h2 className="text-balance text-4xl font-black leading-none tracking-normal">
            Open to thoughtful conversations around AI systems and engineering leadership.
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            I am especially interested in selected speaking, judging, reviewing,
            mentorship, and technical community opportunities.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <ButtonLink href="/contact" variant="primary">
            Contact Me
          </ButtonLink>
          <ButtonLink href="/recognition">See Recognition</ButtonLink>
        </div>
      </div>
    </section>
  );
}
