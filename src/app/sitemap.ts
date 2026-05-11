import type { MetadataRoute } from "next";
import { notes, recognitionItems, site } from "@/data/content";

const baseUrl = site.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
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
    ...notes.map((note) => ({
      url: `${baseUrl}/notes/${note.slug}`,
      lastModified: new Date(),
    })),
  ];
}
