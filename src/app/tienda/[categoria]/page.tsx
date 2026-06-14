import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategories, getProducts } from "@/lib/woocommerce";
import { ShopContent } from "@/components/shop/ShopContent";

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({
    categoria: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === categoria);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === categoria);

  if (!category) {
    notFound();
  }

  const allProducts = await getProducts();
  const categoryProducts = allProducts.filter((p) => p.category === categoria);

  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <nav className="mb-4 font-label text-xs text-muted">
            <Link href="/" className="hover:text-teal-dark">
              Inicio
            </Link>{" "}
            /{" "}
            <Link href="/tienda" className="hover:text-teal-dark">
              Tienda
            </Link>{" "}
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
