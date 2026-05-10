import { SiteHeader } from "@/components/site-header";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <>
      <SiteHeader />
      <section className="section-shell py-20 md:py-28">
        <p className="mono mb-5 text-xs font-black uppercase text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-balance text-5xl font-black leading-none tracking-normal md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          {description}
        </p>
      </section>
    </>
  );
}
