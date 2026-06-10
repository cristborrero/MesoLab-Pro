import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
  products,
} from "@/lib/data";
import { ShopContent } from "@/components/shop/ShopContent";

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    categoria: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(categoria);

  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <nav className="mb-4 font-label text-xs text-muted">
            <a href="/" className="hover:text-teal-dark">
              Inicio
            </a>{" "}
            /{" "}
            <a href="/tienda" className="hover:text-teal-dark">
              Tienda
            </a>{" "}
            / <span className="text-navy">{category.name}</span>
          </nav>
          <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-24">
        <ShopContent
          products={categoryProducts}
          categories={categories}
          initialCategory={categoria}
        />
      </div>
    </>
  );
}
