import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { MetricCard } from "@/components/metric-card";
import { ProofCard } from "@/components/proof-card";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { principles } from "@/data/principles";
import { metrics, profile, proofSignals } from "@/data/profile";
import { proofItems } from "@/data/proof";
import { writing } from "@/data/writing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-20 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {profile.location} · AI Systems · Writing · Mentorship
            </p>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.92] tracking-normal md:text-8xl">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
              {profile.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/proof" variant="primary">
                See Proof Ledger
              </ButtonLink>
              <ButtonLink href="/writing">Read Writing Topics</ButtonLink>
              <ButtonLink href="/contact">Contact Options</ButtonLink>
            </div>
          </div>

          <aside className="surface rounded-lg">
            <div className="border-b border-[var(--line)] p-5">
              <p className="mono text-xs font-black uppercase text-[var(--accent-2)]">
                Profile Signal
              </p>
              <p className="mt-2 text-2xl font-black">Public credibility system</p>
            </div>
            <div className="grid grid-cols-2">
              {metrics.map((metric) => (
                <MetricCard key={metric.value} {...metric} />
              ))}
            </div>
          </aside>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035]">
          <div className="section-shell flex flex-wrap gap-3 py-5">
            {proofSignals.map((signal) => (
              <span
                className="rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-sm font-bold text-[var(--muted)]"
                key={signal}
              >
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="Positioning"
            title="A public profile without employer-specific project detail."
            description="The site focuses on independent signals: writing, reviewing, judging, teaching, mentorship, and principles for thoughtful AI and systems work."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article className="surface rounded-lg p-6" key={principle.title}>
                <h3 className="text-2xl font-black leading-tight tracking-normal">
                  {principle.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {principle.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Proof Ledger"
              title="External recognition, teaching, mentorship, and leadership signals."
              description="A public-facing record of evidence that compounds over time without turning the site into an immigration packet."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {proofItems.slice(0, 3).map((item) => (
                <ProofCard item={item} key={`${item.title}-${item.organization}`} />
              ))}
            </div>
            <Link
              className="mt-7 inline-flex font-black text-[var(--accent)]"
              href="/proof"
            >
              View full proof ledger
            </Link>
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="Writing"
            title="A public technical voice around production AI systems."
            description="The writing layer is designed to support speaking, mentoring, search visibility, and long-term reputation."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {writing.map((item) => (
              <article className="surface rounded-lg p-6" key={item.title}>
                <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent)]">
                  {item.status}
                </p>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
