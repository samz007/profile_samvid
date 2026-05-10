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
            Contact for senior roles, speaking, judging, or mentorship.
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            Direct contact details stay private. Use verified channels and I can
            route the conversation from there.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <ButtonLink href="/contact" variant="primary">
            Contact Options
          </ButtonLink>
          <ButtonLink href="/proof">See Proof Ledger</ButtonLink>
        </div>
      </div>
    </section>
  );
}
