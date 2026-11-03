export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://smartpathtutor.ph";
  return [
    { url: `${b}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${b}/pricing`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${b}/partner-with-us`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${b}/tutor-app`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${b}/parent-app`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${b}/teacher-app`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${b}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${b}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${b}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${b}/data-deletion`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
