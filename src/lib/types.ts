/* ─── Product Types ─── */

export type ProductCategory =
  | "lipoliticos"
  | "vitaminicos"
  | "anestesicos"
  | "insumos";

export interface ProductPresentation {
  id: string;
  label: string; // "Ampolleta 5ml", "Frasco 10ml"
  price: number; // COP
  sku: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string; // "Lipolítico / Reductor"
  shortDescription: string;
  description: string;
  indications: string;
  certifications: string;
  specs: Record<string, string>;
  presentations: ProductPresentation[];
  image: string; // URL or path to product image
  images?: string[];
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  presentationId: string;
  quantity: number;
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  description: string;
  productCount: number;
  icon: string; // Emoji or icon identifier
}
