import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ExternalLinkButton } from "@/components/external-link-button";
import { PageHeader } from "@/components/page-header";
import { SimpleCard } from "@/components/simple-card";
import { SiteFooter } from "@/components/site-footer";
import { links, roletrails } from "@/data/content";

export const metadata = {
  title: "Products | Samvid Zare",
  description:
    "Public product experiments by Samvid Zare, starting with RoleTrails.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Public product experiments around career access and practical AI workflows."
        description="This is the home for public products I am building around career access, product learning, and practical AI workflows. RoleTrails is the first featured product."
      />
      <main className="section-shell pb-20">
        <SimpleCard eyebrow="Featured Product" title={roletrails.name}>
          <p>{roletrails.summary}</p>
          <p className="mt-4">{roletrails.buildNote}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/roletrails" variant="primary">
              View RoleTrails
            </ButtonLink>
            <ExternalLinkButton link={links.roletrails} />
          </div>
        </SimpleCard>
      </main>
      <CTASection />
      <SiteFooter />
    </>
  );
}
