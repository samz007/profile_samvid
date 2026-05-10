import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description:
    "Verified contact channels for Samvid Zare without exposing a public email address.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reach out through verified channels."
        description="Use LinkedIn, GitHub, or Topmate booking for the right kind of conversation."
      />
      <main className="section-shell pb-20">
        <section className="mb-4 grid gap-4 md:grid-cols-3">
          <ContactOption
          title="Professional conversations"
          description="Professional conversations can start here when there is a clear fit or thoughtful reason to connect."
            href="/profile"
            label="Profile Summary"
          />
          <ContactOption
            title="Speaking & judging"
            description="AI, systems, hackathons, paper reviewing, judging, and panel opportunities."
            href="/speaking-judging"
            label="Organizer Profile"
          />
          <ContactOption
            title="Mentorship"
            description="Career guidance, AI productivity, system design, portfolio, and interview positioning."
            href={profile.links.topmate}
            label="Book on Topmate"
          />
        </section>

        <section className="surface rounded-lg p-7">
          <h2 className="text-2xl font-black">Verified links</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={profile.links.linkedin} variant="primary">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.topmate}>Topmate</ButtonLink>
            <ButtonLink href={profile.links.github}>GitHub</ButtonLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ContactOption({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <article className="surface flex min-h-72 flex-col justify-between rounded-lg p-7">
      <div>
        <h2 className="text-2xl font-black">{title}</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">{description}</p>
      </div>
      <div className="mt-8">
        {href ? (
          <ButtonLink href={href} variant="primary">
            {label}
          </ButtonLink>
        ) : (
          <span className="inline-flex min-h-11 items-center rounded-md border border-[var(--line)] bg-white/6 px-5 text-sm font-black text-[var(--muted)]">
            {label}
          </span>
        )}
      </div>
    </article>
  );
}
