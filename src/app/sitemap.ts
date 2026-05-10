import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

const baseUrl = "https://samvid.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/case-studies",
    "/proof",
    "/writing",
    "/mentorship",
    "/speaking-judging",
    "/recruiters",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(),
    })),
  ];
}
