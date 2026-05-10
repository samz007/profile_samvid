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
    "Samvid Zare builds production AI systems for enterprise workflows and contributes through judging, reviewing, teaching, writing, and mentorship.",
  openGraph: {
    title: "Samvid Zare | Enterprise AI Systems",
    description:
      "Production AI systems, engineering judgment, writing, mentorship, and recognition.",
    type: "website",
    url: profile.siteUrl,
    images: [
      {
        url: "/og.svg",
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
      "Production AI systems, engineering judgment, writing, mentorship, and recognition.",
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
    name: profile.name,
    url: profile.siteUrl,
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
    sameAs: [profile.links.github],
    knowsAbout: [
      "Enterprise AI",
      "Generative AI",
      "Distributed Systems",
      "Platform Engineering",
      "Technical Writing",
      "Mentorship",
      "RAG Systems",
      "Support Automation",
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
