import { ButtonLink } from "@/components/button-link";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links } from "@/data/content";

export const metadata = {
  title: "Contact | Samvid Zare",
  description:
    "Contact Samvid Zare for RoleTrails feedback, mentorship, judging, reviewing, writing, and selected collaboration opportunities.",
};

const contactCategories = [
  "RoleTrails feedback or collaboration",
  "Mentorship",
  "Judging or reviewing opportunities",
  "Speaking or panel opportunities",
  "Public product collaboration",
  "General professional contact",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Open to thoughtful conversations around career clarity, AI-assisted products, and technical communities."
        description="The best reasons to reach out are RoleTrails feedback, mentorship, judging or reviewing opportunities, writing, and selected collaboration."
      />
      <main className="section-shell space-y-8 pb-20">
        <section className="grid gap-3 md:grid-cols-3">
          {contactCategories.map((category) => (
            <div
              className="rounded-md border border-[var(--line)] bg-white/6 p-4 font-bold"
              key={category}
            >
              {category}
            </div>
          ))}
        </section>
        <SimpleCard title="Verified links">
          <div className="flex flex-wrap gap-3">
            <ExternalLinkButton link={links.linkedin} variant="primary" />
            <ExternalLinkButton link={links.topmate} />
            <ExternalLinkButton link={links.github} />
            <ExternalLinkButton link={links.email} />
            <ButtonLink href="/projects/roletrails">RoleTrails</ButtonLink>
          </div>
        </SimpleCard>
      </main>
      <SiteFooter />
    </>
  );
}
