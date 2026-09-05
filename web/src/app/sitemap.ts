import type { MetadataRoute } from "next";

import { EXPERTS, GAME_EXPERTS, expertDocPdf } from "@/data/experts";
import { FOUNDING_DOCUMENTS, ORG } from "@/data/site";

/**
 * Generated rather than kept as a file in public/. The static sitemap that
 * came over from the Vite site listed only the home page and a hand-maintained
 * list of PDFs, so it never learned about /game or /gamelib and drifted from
 * the documents actually linked on the site. Deriving it from the same data
 * the pages render keeps the two in step.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: ORG.siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${ORG.siteUrl}/game`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${ORG.siteUrl}/gamelib`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Certificates and diplomas are linked from the site and worth indexing; a
  // Set because the two staff lists share people, and so PDFs.
  const documentPaths = new Set<string>([
    ...FOUNDING_DOCUMENTS.map((doc) => doc.pdf),
    ...[...EXPERTS, ...GAME_EXPERTS].flatMap((expert) =>
      expert.docs.map((stem) => expertDocPdf(stem)),
    ),
  ]);

  const documents: MetadataRoute.Sitemap = [...documentPaths].sort().map((path) => ({
    url: `${ORG.siteUrl}${path}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...documents];
}
