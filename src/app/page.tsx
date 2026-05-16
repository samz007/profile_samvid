import { ButtonLink } from "@/components/button-link";
import { RecognitionCard } from "@/components/recognition-card";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  notes,
  recognitionItems,
  roletrails,
  site,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-shell grid items-center gap-10 py-14 md:py-18 lg:grid-cols-[minmax(0,720px)_minmax(320px,420px)] lg:justify-between lg:py-20">
          <div className="max-w-[720px]">
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {site.location} · Product Builder · AI-Assisted Development
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-normal md:text-5xl lg:text-6xl">
              {site.hero}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects/roletrails" variant="primary">
                Explore RoleTrails
              </ButtonLink>
              <ButtonLink href="/projects">View Projects</ButtonLink>
              <ButtonLink href="/contact">Contact</ButtonLink>
            </div>
          </div>

          <aside className="surface w-full max-w-[420px] rounded-lg p-6 lg:justify-self-end">
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent-2)]">
              Currently Building
            </p>
            <h2 className="text-3xl font-black">{roletrails.project.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {roletrails.project.shortDescription}
            </p>
            <div className="mt-6 grid gap-3 border-y border-[var(--line)] py-5 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-[var(--faint)]">Status</span>
                <span className="font-black">Active project</span>
              </div>
              <div>
                <span className="font-bold text-[var(--faint)]">Focus</span>
                <p className="mt-1 font-black">
                  Career Access · Job Discovery · AI-Assisted Development
                </p>
              </div>
            </div>
            <div className="mt-6">
              <ButtonLink href="/projects/roletrails" variant="primary">
                View project
              </ButtonLink>
            </div>
          </aside>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Recognition"
              title="Places where I’ve been trusted to review, judge, or support technical work."
            />
            <div className="grid gap-3 md:grid-cols-3">
              {recognitionItems.map((item) => (
                <RecognitionCard item={item} key={item.slug} />
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href="/recognition">View recognition</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <SectionHeader
            eyebrow="Notes"
            title="Writing from building, mentoring, and learning in public."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {notes.slice(0, 2).map((note) => (
              <a
                className="surface rounded-lg p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
                href={`/notes/${note.slug}`}
                key={note.slug}
              >
                <h3 className="text-xl font-black">{note.title}</h3>
                <p className="mono mt-3 text-xs font-black uppercase text-[var(--accent)]">
                  {note.status}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink href="/notes">View notes</ButtonLink>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Mentorship"
              title="Practical guidance for engineers, students, and builders working through career moves, projects, resumes, interviews, and AI-assisted building."
            />
            <div className="mt-7">
              <ButtonLink href="/mentorship">View mentorship</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="surface rounded-lg p-8 md:flex md:items-center md:justify-between md:gap-8">
            <p className="max-w-3xl text-2xl font-black leading-tight">
              Building something around careers, AI-assisted products, judging,
              reviewing, or mentorship?
            </p>
            <div className="mt-7 md:mt-0">
              <ButtonLink href="/contact" variant="primary">
                Contact me
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
