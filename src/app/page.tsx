import { ButtonLink } from "@/components/button-link";
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
        <section className="section-shell py-20 md:py-28">
          <div>
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {site.location} · Public Products · AI-Assisted Development
            </p>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.92] tracking-normal md:text-8xl">
              {site.hero}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
              {site.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="primary">
                View Projects
              </ButtonLink>
              <ButtonLink href="/recognition">See Recognition</ButtonLink>
              <ButtonLink href="/contact">Contact</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <SectionHeader
            eyebrow="Featured Project"
            title="RoleTrails"
            description="A free job discovery platform helping people explore roles, companies, and career paths in one place."
          />
          <div className="surface rounded-lg p-7 md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <h2 className="text-3xl font-black">{roletrails.project.title}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
                {roletrails.project.shortDescription}
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/projects/roletrails" variant="primary">
                View project
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Recognition"
              title="Selected reviewing and judging work across AI, engineering, and student innovation."
            />
            <div className="grid gap-3 md:grid-cols-3">
              {recognitionItems.map((item) => (
                <a
                  className="surface rounded-lg p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
                  href={`/recognition/${item.slug}`}
                  key={item.slug}
                >
                  <p className="font-black">{item.organization}</p>
                  <p className="mt-2 text-sm font-bold text-[var(--muted)]">
                    {item.title}
                  </p>
                </a>
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
            title="Writing on public products, AI-assisted development, career access, and engineering judgment."
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
              title="Practical guidance for engineers, students, and builders navigating career, projects, resumes, interviews, and AI-assisted building."
            />
            <div className="mt-7">
              <ButtonLink href="/mentorship">View mentorship</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="surface rounded-lg p-8 md:flex md:items-center md:justify-between md:gap-8">
            <p className="max-w-3xl text-2xl font-black leading-tight">
              Open to thoughtful conversations around public products,
              mentorship, judging, reviewing, and career access.
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
