import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mesolabpro.com.co";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/checkout",
        "/carrito",
        "/api/",
        "/wp-admin/",
        "/search",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
