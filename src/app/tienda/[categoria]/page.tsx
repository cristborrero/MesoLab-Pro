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
    title: `${category.name} | Catálogo MesoLab Pro Colombia`,
    description: `${category.description} Encuentra los mejores dispositivos y activos con Pago Contra Entrega.`,
    alternates: {
      canonical: `https://mesolabpro.com.co/tienda/${categoria}`,
    },
    openGraph: {
      title: `${category.name} | MesoLab Pro Colombia`,
      description: category.description,
      url: `https://mesolabpro.com.co/tienda/${categoria}`,
      siteName: "MesoLab Pro",
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: category.image || "/images/hero-clinical-treatment.webp",
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: category.name,
      description: category.description,
      images: [category.image || "/images/hero-clinical-treatment.webp"],
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

  // Schema.org CollectionPage & BreadcrumbList
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} — MesoLab Pro`,
    "description": category.description,
    "url": `https://mesolabpro.com.co/tienda/${categoria}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": categoryProducts.length,
      "itemListElement": categoryProducts.map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://mesolabpro.com.co/producto/${p.slug}`,
        "name": p.name,
      })),
    },
  };

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
        "name": category.name,
        "item": `https://mesolabpro.com.co/tienda/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

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
