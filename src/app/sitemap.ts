import type { MetadataRoute } from "next";
import { recognitionItems, site } from "@/data/content";

const baseUrl = site.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/roletrails",
    "/recognition",
    "/notes",
    "/mentorship",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...recognitionItems.map((item) => ({
      url: `${baseUrl}/recognition/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
