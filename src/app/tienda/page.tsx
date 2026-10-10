import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { getProducts, getCategories } from "@/lib/woocommerce";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata: Metadata = {
  title: "Tienda MesoLab Pro | Belleza, Skincare Activo y Beauty Tech en Colombia",
  description:
    "Descubre dispositivos de belleza en casa, fórmulas activas para el rostro, cuidado corporal y línea profesional. Envíos nacionales con Pago Contra Entrega.",
  alternates: {
    canonical: "/tienda",
  },
};

export default async function TiendaPage() {
  const products = await getProducts();
  const categories = await getCategories();
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
            <span className="text-navy">Tienda Oficial</span>
          </nav>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-block rounded-full bg-navy/5 px-2.5 py-0.5 font-label text-[10px] font-bold uppercase tracking-widest text-navy mb-2">
                Catálogo Beauty &amp; Wellness
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Catálogo &amp; Dispositivos
              </h1>
              <p className="mt-1.5 max-w-xl text-xs text-muted sm:text-sm">
                Tecnología estética en casa, fórmulas activas y suministros profesionales certificados. Pago Contra Entrega y despacho a toda Colombia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-24">
        <Suspense fallback={<div className="py-20 text-center text-sm text-muted">Cargando catálogo...</div>}>
          <ShopContent products={products} categories={categories} />
        </Suspense>
      </div>
    </>
  );
}
