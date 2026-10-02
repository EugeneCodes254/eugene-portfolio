import type { MetadataRoute } from "next";

const siteUrl = "https://eugenekinyangi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = ["secureops", "destination-bofa", "mobile-pos-billing", "bizflow"];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
