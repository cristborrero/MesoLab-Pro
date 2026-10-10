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

  const price = product.presentations[0]?.price || 0;
  const ogImages = product.image
    ? [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ]
    : [
        {
          url: "/images/hero-clinical-treatment.webp",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ];

  return {
    title: `${product.name} | MesoLab Pro Colombia`,
    description: `${product.shortDescription} Disponible con Pago Contra Entrega y despacho a toda Colombia.`,
    alternates: {
      canonical: `https://mesolabpro.com.co/producto/${slug}`,
    },
    openGraph: {
      title: `${product.name} | MesoLab Pro`,
      description: product.shortDescription,
      url: `https://mesolabpro.com.co/producto/${slug}`,
      siteName: "MesoLab Pro",
      locale: "es_CO",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: ogImages.map((img) => img.url),
    },
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": "COP",
      "product:availability": product.inStock ? "in stock" : "out of stock",
    },
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

  const primaryPrice = product.presentations[0]?.price || 0;

  // Schema.org Product Rich Snippet
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || product.shortDescription,
    "image": product.image ? [product.image] : ["https://mesolabpro.com.co/images/hero-clinical-treatment.webp"],
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": "MesoLab Pro",
    },
    "category": product.categoryLabel,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "COP",
      "price": primaryPrice,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      "url": `https://mesolabpro.com.co/producto/${product.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "MesoLab Pro",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "18",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  // Schema.org Breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://mesolabpro.com.co",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tienda",
        "item": "https://mesolabpro.com.co/tienda",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.categoryLabel.split(" / ")[0],
        "item": `https://mesolabpro.com.co/tienda/${product.category}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://mesolabpro.com.co/producto/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-8">
          <nav className="font-label text-xs text-muted" aria-label="Ruta de navegación">
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
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">
              Recomendados
            </span>
            <h2 className="font-display text-xl font-extrabold text-navy sm:text-2xl mt-1">
              Productos Relacionados
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
