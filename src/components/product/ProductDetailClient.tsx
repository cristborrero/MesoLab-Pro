"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/cart/CartProvider";

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20consultar%20sobre%20";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [selectedPresentation, setSelectedPresentation] = useState(
    product.presentations[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "descripcion" | "indicaciones" | "certificaciones"
  >("descripcion");

  const currentPresentation = product.presentations.find(
    (p) => p.id === selectedPresentation
  )!;

  // Imagen activa: primero la de la variación, luego la del producto, luego placeholder
  const activeImage =
    currentPresentation?.image || product.image || null;

  const handleAddToCart = () => {
    addItem(product, selectedPresentation, quantity);
    setQuantity(1);
  };

  return (
    <>
      {/* Product Info */}
      <section className="bg-white py-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Image */}
          <div className="flex items-center justify-center rounded-[var(--radius-xl)] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] lg:aspect-square border border-border/40 overflow-hidden relative min-h-[320px]">
            {activeImage ? (
              <Image
                src={activeImage}
                alt={`${product.name} - ${currentPresentation?.label || ""}`}
                fill
                className="object-contain p-6 mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <svg
                className="h-48 w-48 text-navy/10"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M35 25h30v6H35v-6z" fill="currentColor" />
                <path d="M42 31h16v16h-12V31z" fill="currentColor" opacity="0.5" />
                <path
                  d="M32 47c0-3 3-5 5-5h26c2 0 5 2 5 5v36c0 4-4 8-8 8H40c-4 0-8-4-8-8V47z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="40" y1="55" x2="48" y2="55" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="63" x2="54" y2="63" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="71" x2="48" y2="71" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="79" x2="54" y2="79" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </div>

          {/* Info Column */}
          <div className="flex flex-col gap-4">
            {/* Category Badge */}
            <span className="inline-flex w-fit rounded-[var(--radius-sm)] bg-teal-light px-3 py-1 font-label text-xs font-medium text-teal-dark">
              {product.categoryLabel}
            </span>

            {/* Name */}
            <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-muted leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Specs Block */}
            <div className="rounded-[var(--radius-lg)] bg-surface p-4">
              <h3 className="mb-3 font-label text-xs font-medium uppercase tracking-wider text-muted">
                Especificaciones
              </h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-label text-xs text-muted">{key}</dt>
                    <dd className="font-label text-sm font-medium text-navy">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Presentation Selector */}
            <div>
              <label className="mb-2 block font-label text-xs font-medium uppercase tracking-wider text-muted">
                Presentación
              </label>
              <div className="flex gap-2">
                {product.presentations.map((pres) => (
                  <button
                    key={pres.id}
                    onClick={() => setSelectedPresentation(pres.id)}
                    className={`rounded-[var(--radius-md)] border px-4 py-2.5 font-label text-sm font-medium transition-colors ${
                      selectedPresentation === pres.id
                        ? "border-teal bg-teal-light text-teal-dark"
                        : "border-border text-navy hover:border-teal/30"
                    }`}
                  >
                    {pres.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-label text-3xl font-bold text-navy">
                {formatPrice(currentPresentation.price)}
              </span>
              <span className="font-label text-sm text-muted">COP</span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Quantity Stepper */}
              <div className="flex items-center rounded-[var(--radius-md)] border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center text-lg text-muted transition-colors hover:bg-surface"
                  aria-label="Reducir cantidad"
                >
                  −
                </button>
                <span className="flex h-12 w-12 items-center justify-center font-label text-base font-medium text-navy">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center text-lg text-muted transition-colors hover:bg-surface"
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex h-12 flex-1 items-center justify-center rounded-[var(--radius-md)] bg-teal font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
              >
                Agregar al carrito
              </button>
            </div>

            {/* WhatsApp Link */}
            <a
              href={`${WHATSAPP_URL}${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:underline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-whatsapp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-t border-border bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex gap-6 border-b border-border">
            {(
              [
                { key: "descripcion", label: "Descripción" },
                { key: "indicaciones", label: "Indicaciones" },
                { key: "certificaciones", label: "Certificaciones" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`border-b-2 pb-3 font-label text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "border-teal text-navy"
                    : "border-transparent text-muted hover:text-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 max-w-3xl leading-relaxed text-muted">
            {activeTab === "descripcion" && (
              <div 
                className="prose-wp"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            {activeTab === "indicaciones" && <p>{product.indications}</p>}
            {activeTab === "certificaciones" && (
              <p>{product.certifications}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
