import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

const baseUrl = profile.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/case-studies",
    "/recognition",
    "/writing",
    "/mentorship",
    "/speaking-judging",
    "/profile",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
  ];
}
