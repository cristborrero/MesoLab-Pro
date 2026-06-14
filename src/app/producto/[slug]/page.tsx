import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, getProducts } from "@/lib/woocommerce";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} | Mesoterapia Profesional | MesoLab Pro`,
    description: `${product.shortDescription} Insumo clínico certificado con registro INVIMA y trazabilidad controlada en Colombia. Adquiérelo hoy.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-8">
          <nav className="font-label text-xs text-muted">
            <Link href="/" className="hover:text-teal-dark">
              Inicio
            </Link>{" "}
            /{" "}
            <Link href="/tienda" className="hover:text-teal-dark">
              Tienda
            </Link>{" "}
            /{" "}
            <Link
              href={`/tienda/${product.category}`}
              className="hover:text-teal-dark"
            >
              {product.categoryLabel.split(" / ")[0]}
            </Link>{" "}
            / <span className="text-navy">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <ProductDetailClient product={product} />

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Sinergia Química</span>
            <h2 className="font-display text-xl font-extrabold text-navy sm:text-2xl mt-1">
              Insumos Clínicos Relacionados
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
