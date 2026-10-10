import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/woocommerce";
import { EditorialHero } from "@/components/home/EditorialHero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProductsSection } from "@/components/home/FeaturedProducts";
import { EditorialBrandSection } from "@/components/home/EditorialBrandSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";

export const metadata: Metadata = {
  title: "MesoLab Pro | Tecnología Estética & Cosmecéutica en Colombia",
  description:
    "Tienda especializada en tecnología estética, aparatología facial y corporal, y principios activos de grado clínico en Colombia. Envíos nacionales con Pago Contra Entrega.",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.filter((p) => p.featured).slice(0, 8);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MesoLab Pro",
    "url": "https://mesolabpro.com.co",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mesolabpro.com.co/tienda?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MesoLab Pro",
    "alternateName": "MesoLabPro",
    "url": "https://mesolabpro.com.co",
    "logo": "https://mesolabpro.com.co/logo_mesolab_pro_h_web.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-313-3847436",
      "contactType": "sales",
      "areaServed": "CO",
      "availableLanguage": "Spanish",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cra. 56 #161-94, Suba",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "addressCountry": "CO",
    },
    "sameAs": ["https://instagram.com/mesolabpro"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* 1. Hero Editorial Slider (con micro-trust strip y controles integrados) */}
      <EditorialHero />

      {/* 2. Category Grid */}
      <CategoryGrid />

      {/* 4. Real Featured Products Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-teal-accessible">
                Favoritos de la Comunidad
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Tecnología &amp; Fórmulas Destacadas
              </h2>
              <p className="mt-2 text-sm sm:text-base text-secondary-text">
                Los dispositivos y tratamientos más elegidos por profesionales y usuarios en Colombia.
              </p>
            </div>

            <Link
              href="/tienda"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:text-teal transition-colors"
            >
              Explorar todos ({allProducts.length})
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <FeaturedProductsSection products={featuredProducts.length > 0 ? featuredProducts : allProducts.slice(0, 8)} />
        </div>
      </section>

      {/* 5. Brand Narrative & Stats */}
      <EditorialBrandSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Consultation Specialists Banner */}
      <ConsultationBanner />
    </>
  );
}
