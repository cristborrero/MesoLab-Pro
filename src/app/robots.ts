import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mesolabpro.com.co";

  const aiUserAgents = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "cohere-ai",
    "Bytespider",
  ];

  return {
    rules: [
      // Regla general para todos los motores de búsqueda (Google, Bing, Yahoo, DuckDuckGo)
      {
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
      // Reglas específicas para permitir indexación y citación en modelos de IA
      ...aiUserAgents.map((agent) => ({
        userAgent: agent,
        allow: "/",
        disallow: [
          "/checkout",
          "/carrito",
          "/api/",
          "/wp-admin/",
          "/search",
        ],
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
