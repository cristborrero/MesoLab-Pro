import { type Product, type CategoryInfo, type ProductCategory } from "./types";
import { products as fallbackProducts, categories as fallbackCategories } from "./data";

const WC_URL = process.env.NEXT_PUBLIC_WC_URL;
const KEY = process.env.WC_CONSUMER_KEY;
const SECRET = process.env.WC_CONSUMER_SECRET;

const auth = Buffer.from(`${KEY}:${SECRET}`).toString("base64");

// ── WooCommerce Interfaces for Strong Typing ──────────────────────────────
export interface WooCommerceImage {
  src: string;
}

export interface WooCommerceCategory {
  slug: string;
  name: string;
}

export interface WooCommerceProduct {
  id: number;
  slug: string;
  name: string;
  type: string;
  price: string;
  sku: string;
  featured: boolean;
  stock_status: string;
  short_description: string;
  description: string;
  images?: WooCommerceImage[];
  categories?: WooCommerceCategory[];
  variations?: number[];
  meta_data?: Array<{ id?: number; key: string; value: string }>;
}

export interface WooCommerceVariationAttribute {
  name?: string;
  option: string;
}

export interface WooCommerceVariation {
  id: number;
  status: string;
  purchasable: boolean;
  menu_order: number;
  name?: string;
  price: string;
  sku: string;
  stock_status: string;
  image?: WooCommerceImage;
  attributes?: WooCommerceVariationAttribute[];
}

export interface WooCommerceCategoryResponse {
  slug: string;
  name: string;
  description: string;
  count?: number;
  image?: WooCommerceImage;
}

export async function wcFetch(endpoint: string): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(`${WC_URL}${endpoint}`, {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`WC API error: ${res.status}`);
    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

/** Limpia etiquetas HTML para texto plano */
const stripHtml = (html: string) =>
  html ? html.replace(/(<([^>]+)>)/gi, "").trim() : "";

/**
 * Mapeo Híbrido: WooCommerce -> Frontend Product
 * Usa WC como fuente de la verdad para inventario, precio, imágenes y variaciones.
 * Si WooCommerce tiene campos vacíos (descripción clínica, specs), usa el fallback de data.ts.
 */
export function mapWooCommerceProductToFrontend(
  wcProduct: WooCommerceProduct,
  wcVariations?: WooCommerceVariation[]
): Product {
  const fallback = fallbackProducts.find((p) => p.slug === wcProduct.slug);

  // Parse images
  let image = fallback?.image || "";
  let images: string[] = fallback?.images || [];
  if (wcProduct.images && wcProduct.images.length > 0) {
    image = wcProduct.images[0].src;
    images = wcProduct.images.map((img: WooCommerceImage) => img.src);
  }

  // Parse category
  let categorySlug = fallback?.category || "insumos";
  let categoryLabel = fallback?.categoryLabel || "Insumos";
  if (wcProduct.categories && wcProduct.categories.length > 0) {
    const wcCat = wcProduct.categories[0];
    categorySlug = wcCat.slug as ProductCategory;
    categoryLabel = wcCat.name;
  }

  // Presentaciones / Variaciones
  let presentations: Product["presentations"] = [];
  if (wcVariations && wcVariations.length > 0) {
    presentations = wcVariations
      .filter((v: WooCommerceVariation) => v.status === "publish" || v.purchasable)
      .sort((a: WooCommerceVariation, b: WooCommerceVariation) => a.menu_order - b.menu_order)
      .map((v: WooCommerceVariation) => ({
        id: `var-${v.id}`,
        variationId: v.id,
        label: v.attributes?.[0]?.option || v.name || "Unidad",
        price: parseInt(v.price) || 0,
        sku: v.sku || "",
        image: v.image?.src || undefined,
        inStock: v.stock_status === "instock",
      }));
    // Agregar imágenes de variación al array de imágenes del producto
    const varImages = wcVariations
      .map((v: WooCommerceVariation) => v.image?.src)
      .filter(Boolean) as string[];
    images = [image, ...varImages.filter((src) => src !== image)];
  }

  // Si no hay variaciones, usar fallback o precio base del producto simple
  if (presentations.length === 0) {
    const fallbackPres = fallback?.presentations;
    if (fallbackPres && fallbackPres.length > 0) {
      presentations = fallbackPres;
    } else if (wcProduct.price) {
      presentations = [
        {
          id: `pres-${wcProduct.id}`,
          label: "Unidad",
          price: parseInt(wcProduct.price) || 0,
          sku: wcProduct.sku || "",
          inStock: wcProduct.stock_status === "instock",
        },
      ];
    }
  }
  
  const wcShortDesc = stripHtml(wcProduct.short_description);
  const wcDesc = wcProduct.description; // Preserve rich text HTML from WordPress/WooCommerce

  const getMeta = (key: string) => wcProduct.meta_data?.find((m) => m.key === key)?.value;
  let specs = fallback?.specs || {};
  if (Object.keys(specs).length === 0) {
    const specsRaw = getMeta("_specs_json");
    if (specsRaw) {
      try {
        specs = JSON.parse(specsRaw);
      } catch {
        // Ignorar error de parsing si el formato no es JSON
      }
    }
  }

  const subcategory = fallback?.subcategory || getMeta("_subcategory") || undefined;
  const isFreeShipping = getMeta("_free_shipping") === "yes" ? true : (fallback?.freeShipping ?? true);
  const isCodAvailable = getMeta("_cod_available") === "yes" ? true : (fallback?.codAvailable ?? true);

  return {
    id: String(wcProduct.id),
    slug: wcProduct.slug,
    name: wcProduct.name || fallback?.name || "",
    category: categorySlug,
    categoryLabel: categoryLabel,
    shortDescription: wcShortDesc || fallback?.shortDescription || "",
    description: wcDesc || fallback?.description || "",
    indications: fallback?.indications || "",
    certifications: fallback?.certifications || "",
    specs,
    presentations,
    image,
    images,
    subcategory,
    tags: fallback?.tags || [],
    freeShipping: isFreeShipping,
    codAvailable: isCodAvailable,
    featured: wcProduct.featured || fallback?.featured || false,
    inStock: wcProduct.stock_status === "instock",
  };
}

export function mapWooCommerceCategoryToFrontend(wcCategory: WooCommerceCategoryResponse): CategoryInfo {
  const fallback = fallbackCategories.find((c) => c.slug === wcCategory.slug);
  const wcDesc = stripHtml(wcCategory.description);

  return {
    slug: (wcCategory.slug as ProductCategory) || fallback?.slug || "insumos",
    name: wcCategory.name || fallback?.name || "",
    description: wcDesc || fallback?.description || "",
    productCount: wcCategory.count ?? fallback?.productCount ?? 0,
    icon: fallback?.icon || "📦",
    // Imagen real de la categoría desde WooCommerce
    image: wcCategory.image?.src || undefined,
  };
}

// ── Helpers tipados para Server Components ────────────────────────────────

/**
 * Lista todos los productos con sus variaciones resueltas.
 * Para productos "variable", hace un fetch adicional a /products/{id}/variations.
 */
export const getProducts = async (): Promise<Product[]> => {
  try {
    let page = 1;
    const wcProducts: WooCommerceProduct[] = [];
    while (true) {
      const batch = (await wcFetch(`/products?per_page=100&page=${page}&status=publish`)) as WooCommerceProduct[];
      if (!batch || !Array.isArray(batch) || batch.length === 0) break;
      wcProducts.push(...batch);
      if (batch.length < 100) break;
      page++;
    }

    const productsWithVariations = await Promise.all(
      wcProducts.map(async (wcProduct: WooCommerceProduct) => {
        if (wcProduct.type === "variable" && wcProduct.variations && wcProduct.variations.length > 0) {
          try {
            const variations = (await wcFetch(
              `/products/${wcProduct.id}/variations?per_page=100`
            )) as WooCommerceVariation[];
            return mapWooCommerceProductToFrontend(wcProduct, variations);
          } catch {
            // Si falla el fetch de variaciones, mapear sin ellas
            return mapWooCommerceProductToFrontend(wcProduct);
          }
        }
        return mapWooCommerceProductToFrontend(wcProduct);
      })
    );

    // Catálogo 100% WooCommerce: usar exclusivamente productos reales de la API
    return productsWithVariations;
  } catch (error) {
    console.error("Error fetching products from WC", error);
    return [];
  }
};

/**
 * Obtiene un producto por ID numérico o slug, con sus variaciones.
 */
export const getProduct = async (
  idOrSlug: string | number
): Promise<Product | null> => {
  try {
    let wcProduct: WooCommerceProduct | null = null;
    if (typeof idOrSlug === "number" || !isNaN(Number(idOrSlug))) {
      wcProduct = (await wcFetch(`/products/${idOrSlug}`)) as WooCommerceProduct;
    } else {
      const results = (await wcFetch(`/products?slug=${idOrSlug}`)) as WooCommerceProduct[];
      if (results && results.length > 0) wcProduct = results[0];
    }

    if (!wcProduct) return null;

    // Resolver variaciones si el producto es variable
    let variations: WooCommerceVariation[] = [];
    if (wcProduct.type === "variable" && wcProduct.variations && wcProduct.variations.length > 0) {
      try {
        variations = (await wcFetch(
          `/products/${wcProduct.id}/variations?per_page=100`
        )) as WooCommerceVariation[];
      } catch {
        // silencioso: usar fallback de presentaciones
      }
    }

    return mapWooCommerceProductToFrontend(wcProduct, variations);
  } catch (error) {
    console.error(
      `Error fetching product ${idOrSlug} from WC`,
      error
    );
    return null;
  }
};

export const getCategories = async (): Promise<CategoryInfo[]> => {
  try {
    const wcCats = (await wcFetch(
      "/products/categories?per_page=100&hide_empty=false"
    )) as WooCommerceCategoryResponse[];
    // Filtrar "Sin categorizar" que WooCommerce incluye por defecto
    const mappedWcCats = wcCats
      .filter((c: WooCommerceCategoryResponse) => c.slug !== "sin-categorizar" && c.slug !== "uncategorized")
      .map(mapWooCommerceCategoryToFrontend);

    // Fusión híbrida: asegurar que las nuevas colecciones (facial, beauty-tech, etc.) estén siempre disponibles
    const wcSlugs = new Set(mappedWcCats.map((c) => c.slug));
    const extraCategories = fallbackCategories.filter((c) => !wcSlugs.has(c.slug));

    return [...extraCategories, ...mappedWcCats];
  } catch (error) {
    console.error("Error fetching categories from WC, using fallback", error);
    return fallbackCategories;
  }
};

export const getOrders = (): Promise<unknown> => wcFetch("/orders");
