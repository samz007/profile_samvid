import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { MetricCard } from "@/components/metric-card";
import { RecognitionCard } from "@/components/recognition-card";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudyThemes } from "@/data/case-studies";
import { principles } from "@/data/principles";
import { credibilitySignals, metrics, profile } from "@/data/profile";
import { recognitionItems } from "@/data/recognition";
import { writing } from "@/data/writing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-20 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {profile.location} · AI Systems · Platform Engineering
            </p>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.92] tracking-normal md:text-8xl">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
              {profile.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/case-studies" variant="primary">
                View Case Studies
              </ButtonLink>
              <ButtonLink href="/recognition">See Recognition</ButtonLink>
              <ButtonLink href="/contact">Contact Me</ButtonLink>
            </div>
          </div>

          <aside className="surface rounded-lg">
            <div className="border-b border-[var(--line)] p-5">
              <p className="mono text-xs font-black uppercase text-[var(--accent-2)]">
                Profile Signal
              </p>
              <p className="mt-2 text-2xl font-black">AI systems engineer</p>
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
            {credibilitySignals.map((signal) => (
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
            eyebrow="Selected Work"
            title="Case-study themes from AI, platforms, and systems work."
            description="A high-level view of the work areas behind my judgment, written with enough context to be useful without turning the site into a project dump."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudyThemes.map((theme) => (
              <article className="surface rounded-lg p-6" key={theme.title}>
                <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent-2)]">
                  {theme.organization}
                </p>
                <h3 className="text-2xl font-black leading-tight tracking-normal">
                  {theme.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {theme.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Recognition"
              title="Places where my engineering judgment has been trusted."
              description="Judging, reviewing, teaching, and mentorship across technical communities, student innovation, and engineering growth."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {recognitionItems.slice(0, 3).map((item) => (
                <RecognitionCard item={item} key={`${item.title}-${item.organization}`} />
              ))}
            </div>
            <Link
              className="mt-7 inline-flex font-black text-[var(--accent)]"
              href="/recognition"
            >
              View recognition
            </Link>
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="Operating Principles"
            title="Calm confidence, useful context, and sharp judgment."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article className="surface rounded-lg p-6" key={principle.title}>
                <h3 className="text-2xl font-black">{principle.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {principle.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pb-24">
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
