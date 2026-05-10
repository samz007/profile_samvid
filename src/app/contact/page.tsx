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
        description="To avoid public email spam, direct contact details are intentionally not posted here. Use LinkedIn, GitHub, or Topmate-style booking once linked."
      />
      <main className="section-shell grid gap-4 pb-20 md:grid-cols-3">
        <ContactOption
          title="Recruiting & roles"
          description="Senior engineering, AI platform, backend, and leadership-without-authority conversations."
          href="/recruiters"
          label="Recruiter Summary"
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
          label="Topmate coming soon"
        />
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
