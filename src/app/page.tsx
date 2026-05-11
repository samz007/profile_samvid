import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ExternalLinkButton } from "@/components/external-link-button";
import { RecognitionCard } from "@/components/recognition-card";
import { SectionHeader } from "@/components/section-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  credibilityChips,
  links,
  mentorshipTopics,
  notes,
  principles,
  recognitionItems,
  roletrails,
  site,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-20 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {site.location} · Public Products · AI Systems · Career Access
            </p>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.92] tracking-normal md:text-8xl">
              {site.hero}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
              {site.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/roletrails" variant="primary">
                View RoleTrails
              </ButtonLink>
              <ButtonLink href="/recognition">See Recognition</ButtonLink>
              <ButtonLink href="/contact">Contact Me</ButtonLink>
            </div>
          </div>

          <aside className="surface rounded-lg p-6">
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent-2)]">
              Featured Public Product
            </p>
            <h2 className="text-4xl font-black">{roletrails.name}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {roletrails.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/roletrails" variant="primary">
                Explore
              </ButtonLink>
              <ExternalLinkButton link={links.roletrails} />
            </div>
          </aside>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035]">
          <div className="section-shell flex flex-wrap gap-3 py-5">
            {credibilityChips.map((chip) => (
              <span
                className="rounded-full border border-[var(--line)] bg-white/6 px-3 py-2 text-sm font-bold text-[var(--muted)]"
                key={chip}
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="RoleTrails"
            title="A free job discovery platform for exploring roles, companies, and career paths."
            description={roletrails.summary}
          />
          <div className="surface rounded-lg p-7">
            <p className="max-w-4xl leading-8 text-[var(--muted)]">
              {roletrails.buildNote}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/roletrails" variant="primary">
                View RoleTrails
              </ButtonLink>
              <ButtonLink href="/notes">Read Build Notes</ButtonLink>
              <ButtonLink href="/contact">Share Feedback</ButtonLink>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Recognition"
              title="External roles where my technical judgment has been used to review, evaluate, teach, and mentor."
              description="Public and independently shareable roles across reviewing, judging, mentorship, and technical community contribution."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {recognitionItems.map((item) => (
                <RecognitionCard item={item} key={item.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="Notes"
            title="Writing on public products, AI-assisted development, career access, and engineering judgment."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((note) => (
              <SimpleCard eyebrow={note.status} title={note.title} key={note.title}>
                <p>{note.summary}</p>
              </SimpleCard>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-24">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Mentorship"
              title="Helping engineers, students, and builders make sharper career and technical decisions."
              description="The goal is practical clarity: understand the situation, identify the real constraint, and leave with concrete next steps."
            />
            <div className="grid gap-3 md:grid-cols-3">
              {mentorshipTopics.slice(0, 6).map((topic) => (
                <div
                  className="rounded-md border border-[var(--line)] bg-white/6 p-4 font-bold"
                  key={topic}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeader
            eyebrow="Operating Principles"
            title="How I approach public products, AI tools, and technical judgment."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <SimpleCard title={principle.title} key={principle.title}>
                <p>{principle.summary}</p>
              </SimpleCard>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
