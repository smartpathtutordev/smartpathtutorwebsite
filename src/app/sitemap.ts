export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://smartpathtutor.ph";
  return [
    { url: `${b}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${b}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${b}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${b}/data-deletion`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
