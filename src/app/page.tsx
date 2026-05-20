import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { notes, projects, recognitionItems, site } from "@/data/content";

const featuredProject = projects[0];

export default function Home() {
  const roleTrailsHref = featuredProject.externalUrl || featuredProject.internalHref;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-shell grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,680px)_minmax(300px,380px)] lg:justify-between">
          <div>
            <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
              {site.location} · Product Builder
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-normal md:text-6xl">
              {site.hero}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-black leading-tight text-[var(--muted)] md:text-3xl">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={roleTrailsHref} variant="primary">
                Explore RoleTrails
              </ButtonLink>
              <ButtonLink href="/notes">Read notes</ButtonLink>
              <ButtonLink href="/contact">Contact</ButtonLink>
            </div>
          </div>

          <aside className="surface rounded-lg p-6">
            <p className="mono mb-4 text-xs font-black uppercase text-[var(--accent-2)]">
              Current project
            </p>
            <h2 className="text-3xl font-black">{featuredProject.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              {featuredProject.description}
            </p>
            <div className="mt-6">
              <ButtonLink href={featuredProject.internalHref} variant="primary">
                View project
              </ButtonLink>
            </div>
          </aside>
        </section>

        <section className="border-y border-[var(--line)] bg-white/[0.035] py-14">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Notes"
              title="Short writing from building RoleTrails and mentoring people through career moves."
            />
            <div className="grid gap-3 md:grid-cols-2">
              {notes.slice(0, 2).map((note) => (
                <Link
                  className="surface rounded-lg p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
                  href={`/notes/${note.slug}`}
                  key={note.slug}
                >
                  <h3 className="text-xl font-black">{note.title}</h3>
                  <p className="mono mt-3 text-xs font-black uppercase text-[var(--accent)]">
                    {note.status}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-14">
          <SectionHeader
            eyebrow="Recognition"
            title="Trusted to review, judge, and support technical work."
          />
          <div className="flex flex-wrap gap-3">
            {recognitionItems.map((item) => (
              <Link
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-bold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-white"
                href={item.internalHref}
                key={item.slug}
              >
                {item.title} · {item.role}
              </Link>
            ))}
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="border-t border-[var(--line)] pt-10">
            <p className="max-w-2xl text-2xl font-black leading-tight">
              Building around jobs, career tools, AI-assisted products, or
              mentorship?
            </p>
            <div className="mt-7">
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
