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
    alternates: {
      canonical: `/tienda/${categoria}`,
    },
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
      <div className="border-b border-border/70 bg-[#FAF9F7]/60">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 flex items-center gap-1.5 font-label text-[11px] font-semibold uppercase tracking-wider text-muted">
            <Link href="/" className="transition-colors hover:text-navy">
              Inicio
            </Link>
            <span className="text-border">/</span>
            <Link href="/tienda" className="transition-colors hover:text-navy">
              Tienda
            </Link>
            <span className="text-border">/</span>
            <span className="text-navy">{category.name}</span>
          </nav>
          <span className="inline-block rounded-full bg-navy/5 px-2.5 py-0.5 font-label text-[10px] font-bold uppercase tracking-widest text-navy mb-2">
            Colección Especializada
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-1.5 max-w-2xl text-xs text-muted sm:text-sm">{category.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-24">
        <ShopContent
          products={allProducts}
          categories={categories}
          initialCategory={categoria}
        />
      </div>
    </>
  );
}
