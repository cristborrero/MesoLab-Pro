import type { Metadata } from "next";
import { products, categories } from "@/lib/data";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata: Metadata = {
  title: "Catálogo de Suministros Clínicos | Tienda MesoLab Pro",
  description: "Explora nuestro catálogo de insumos de mesoterapia certificados en Colombia. Fórmulas puras: lipolíticos, vitamínicos y anestésicos locales para cabina.",
};

export default function TiendaPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <nav className="mb-4 font-label text-xs text-muted">
            <a href="/" className="hover:text-teal-dark">
              Inicio
            </a>{" "}
            / <span className="text-navy">Tienda</span>
          </nav>
          <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Catálogo de Precisión
          </h1>
          <p className="mt-2 text-sm text-muted">
            {products.length} insumos clínicos certificados y disponibles hoy en Colombia.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-24">
        <ShopContent products={products} categories={categories} />
      </div>
    </>
  );
}
