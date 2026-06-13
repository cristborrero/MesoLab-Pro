import { MetadataRoute } from "next";
import { getProducts, getCategories } from "@/lib/woocommerce";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mesolabpro.com.co";

  // 1. Páginas estáticas del sitio web
  const staticUrls = [
    "",
    "/nosotros",
    "/contacto",
    "/privacidad",
    "/cookies",
    "/terminos",
    "/tienda",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Productos dinámicos de WooCommerce
  let productUrls: any[] = [];
  try {
    const products = await getProducts();
    productUrls = products.map((product) => ({
      url: `${baseUrl}/producto/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error al obtener productos para el sitemap:", error);
  }

  // 3. Categorías dinámicas de WooCommerce
  let categoryUrls: any[] = [];
  try {
    const categories = await getCategories();
    categoryUrls = categories.map((category) => ({
      url: `${baseUrl}/tienda/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error al obtener categorías para el sitemap:", error);
  }

  return [...staticUrls, ...productUrls, ...categoryUrls];
}
