import { ButtonLink } from "@/components/button-link";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links, projects } from "@/data/content";

export const metadata = {
  title: "Contact | Samvid Zare",
  description:
    "Contact Samvid Zare for RoleTrails feedback, mentorship, judging, reviewing, writing, and selected collaboration opportunities.",
};

const contactCategories = [
  "Judging or reviewing opportunities",
  "RoleTrails feedback",
  "Mentorship",
  "Collaboration",
  "General professional contact",
];

const roleTrails = projects[0];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        description="RoleTrails feedback, judging or reviewing opportunities, mentorship, collaboration, and general professional contact."
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
            <ButtonLink href={roleTrails.internalHref}>RoleTrails</ButtonLink>
          </div>
        </SimpleCard>
      </main>
      <SiteFooter />
    </>
  );
}
