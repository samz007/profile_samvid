import type { Metadata } from "next";
import "./globals.css";
import { links, site } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.title,
    template: "%s | Samvid Zare",
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: site.siteUrl,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.siteUrl,
    jobTitle: "Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "New York University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Technology Calicut",
      },
    ],
    sameAs: [links.github.url, links.linkedin.url].filter(Boolean),
    knowsAbout: [
      "Public Products",
      "Career Access",
      "AI-Assisted Product Development",
      "Engineering Judgment",
      "Mentorship",
      "Technical Notes",
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
