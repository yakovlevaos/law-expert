import type { MetadataRoute } from "next";

import { ORG } from "@/data/site";

/** Generated so the sitemap URL cannot drift from the site's own origin. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${ORG.siteUrl}/sitemap.xml`,
  };
}
