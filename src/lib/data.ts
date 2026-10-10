import type { Product, CategoryInfo } from "./types";

/* ─── Categories ─── */

export const categories: CategoryInfo[] = [
  {
    slug: "facial",
    name: "Cuidado Facial",
    description:
      "Sueros dermo-activos con ácido hialurónico, niacinamida, tónicos y mascarillas de bio-colágeno para una piel luminosa, hidratada y uniforme.",
    productCount: 2,
    icon: "droplet",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/vitaminicos-mesolabpro.webp",
  },
  {
    slug: "beauty-tech",
    name: "Beauty Tech",
    description:
      "Aparatología estética portátil de última generación: depilación láser IPL definitiva en casa, masajeadores Gua Sha LED y limpieza sónica.",
    productCount: 3,
    icon: "device",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/insumos-mesolabpro.webp",
  },
  {
    slug: "corporal",
    name: "Cuidado Corporal",
    description:
      "Tratamientos termoactivos reductores, geles moldeadores de silueta con cafeína y centella asiática, y complementos para firmeza.",
    productCount: 1,
    icon: "silhouette",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
  },
  {
    slug: "capilar",
    name: "Cuidado Capilar",
    description:
      "Tónicos estimulantes de biotina y romero anticaída, cepillos secadores y voluminizadores multifunción para un cabello radiante.",
    productCount: 2,
    icon: "leaf",
  },
  {
    slug: "profesional",
    name: "Línea Profesional",
    description:
      "Insumos y soluciones de mesoterapia certificados con registro INVIMA para uso en centros de estética, reducción localizada y revitalización.",
    productCount: 8,
    icon: "flask",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/L-Carnitina-5ml-mesolabpro.webp",
  },
  // Categorías de compatibilidad / legado
  {
    slug: "lipoliticos",
    name: "Lipolíticos",
    description: "Soluciones inyectables para procedimientos de reducción localizada y lipólisis.",
    productCount: 5,
    icon: "flask",
  },
  {
    slug: "vitaminicos",
    name: "Vitamínicos",
    description: "Complejos vitamínicos y antioxidantes para protocolos de biorevitalización.",
    productCount: 2,
    icon: "capsule",
  },
  {
    slug: "anestesicos",
    name: "Anestésicos",
    description: "Anestésicos locales de uso profesional para procedimientos en centros de estética.",
    productCount: 1,
    icon: "syringe",
  },
  {
    slug: "insumos",
    name: "Insumos",
    description: "Material complementario y consumibles para procedimientos estéticos y centros de cosmetología.",
    productCount: 0,
    icon: "box",
  },
];

/* ─── Products ─── */

export const products: Product[] = [];

/* ─── Helpers ─── */

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
