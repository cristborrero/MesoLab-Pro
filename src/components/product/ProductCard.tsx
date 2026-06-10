"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/cart/CartProvider";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedPresentation, setSelectedPresentation] = useState(
    product.presentations[0]
  );

  return (
    <article className="group flex flex-col rounded-[var(--radius-lg)] border border-border bg-white transition-all hover:-translate-y-[2px] hover:border-teal/30 hover:shadow-elevated">
      {/* Product Image Beaker/Vial SVG Container */}
      <Link
        href={`/producto/${product.slug}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-t-[var(--radius-lg)] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] p-8"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Medical Grade Vial SVG */}
          <svg
            className="h-28 w-28 text-navy/15 transition-transform duration-500 group-hover:scale-105"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Liquid inside beaker */}
            <path
              d="M38 52h24v28H38z"
              className="fill-teal/10 transition-colors group-hover:fill-teal/15"
            />
            {/* Beaker / vial outline */}
            <path
              d="M36 28h28v6H36v-6z"
              className="fill-navy/20 group-hover:fill-navy/35"
            />
            <path
              d="M44 34h12v12h-12V34z"
              className="fill-navy/10 group-hover:fill-navy/20"
            />
            <path
              d="M36 46c0-2 2-4 4-4h20c2 0 4 2 4 4v36c0 3-3 6-6 6H42c-3 0-6-3-6-6V46z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Volumetric measurement marks */}
            <line x1="42" y1="52" x2="48" y2="52" stroke="currentColor" strokeWidth="1.5" />
            <line x1="42" y1="60" x2="52" y2="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="42" y1="68" x2="48" y2="68" stroke="currentColor" strokeWidth="1.5" />
            <line x1="42" y1="76" x2="52" y2="76" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Clinical certification watermark */}
          <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-wider text-navy/20">
            Certified ISO 13485
          </span>
        </div>

        {!product.inStock && (
          <span className="absolute top-3 right-3 rounded-[var(--radius-sm)] bg-error/10 px-2.5 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-error">
            Agotado
          </span>
        )}
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col gap-2 p-4 pt-5">
        <span className="font-label text-[10px] font-bold uppercase tracking-wider text-teal-dark">
          {product.categoryLabel}
        </span>

        <Link
          href={`/producto/${product.slug}`}
          className="font-display text-base font-semibold text-navy leading-tight transition-colors hover:text-teal-dark"
        >
          {product.name}
        </Link>

        {/* Presentation Dropdown Selector (solves variant selection critique) */}
        {product.presentations.length > 1 ? (
          <div className="mt-1">
            <select
              value={selectedPresentation.id}
              onChange={(e) => {
                const found = product.presentations.find(
                  (p) => p.id === e.target.value
                );
                if (found) setSelectedPresentation(found);
              }}
              className="w-full rounded-[var(--radius-sm)] border border-border bg-white px-2 py-1.5 font-label text-[11px] text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            >
              {product.presentations.map((pres) => (
                <option key={pres.id} value={pres.id}>
                  {pres.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p className="font-label text-xs text-muted">
            {selectedPresentation.label}
          </p>
        )}

        {/* Price + Cart Action */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="font-mono text-base font-semibold text-navy">
            {formatPrice(selectedPresentation.price)}
          </span>

          <button
            onClick={() => addItem(product, selectedPresentation.id)}
            disabled={!product.inStock}
            className="rounded-[var(--radius-md)] bg-teal px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
