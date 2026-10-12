import { MetadataRoute } from "next";
import { getSitemapData } from "@/lib/woocommerce";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mesolabpro.com.co";
  const staticFallbackDate = new Date("2026-10-10T12:00:00.000Z");

  // 1. Páginas institucionales y estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
    { route: "/tienda", priority: 0.9, changeFrequency: "daily" as const },
    { route: "/nosotros", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/contacto", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/privacidad", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/cookies", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/terminos", priority: 0.5, changeFrequency: "monthly" as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: staticFallbackDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. Carga optimizada de productos y categorías activas
  const { products, categories } = await getSitemapData();

  // Productos con su fecha real de modificación en WooCommerce
  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/producto/${product.slug}`,
    lastModified: product.date_modified ? new Date(product.date_modified) : staticFallbackDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Colecciones de tienda con productos activos (evita Soft 404 / Thin Content)
  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/tienda/${cat.slug}`,
    lastModified: staticFallbackDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...categoryUrls, ...productUrls];
}
