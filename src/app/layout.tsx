import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Samvid Zare | Enterprise AI Systems",
    template: "%s | Samvid Zare",
  },
  description:
    "Samvid Zare builds production AI systems, platform foundations, and enterprise workflows across support, pricing, and modernization domains.",
  openGraph: {
    title: "Samvid Zare | Enterprise AI Systems",
    description:
      "Production GenAI, platform engineering, support automation, and proof of judgment.",
    type: "website",
    url: profile.siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Samvid Zare | Enterprise AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samvid Zare | Enterprise AI Systems",
    description:
      "Production GenAI, platform engineering, support automation, and proof of judgment.",
    images: ["/opengraph-image"],
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
    name: profile.name,
    url: profile.siteUrl,
    jobTitle: "Software Development Engineer II",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: "Amazon Web Services",
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
    sameAs: [profile.links.github],
    knowsAbout: [
      "Enterprise AI",
      "Generative AI",
      "Distributed Systems",
      "Platform Engineering",
      "Support Automation",
      "Retail Pricing Systems",
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
