"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/cart/CartProvider";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const defaultPresentation = product.presentations[0];

  return (
    <article className="group flex flex-col rounded-[var(--radius-lg)] border border-border bg-white transition-shadow hover:shadow-elevated">
      {/* Image */}
      <Link
        href={`/producto/${product.slug}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-t-[var(--radius-lg)] bg-surface"
      >
        <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
          🧪
        </span>
        {!product.inStock && (
          <span className="absolute top-3 right-3 rounded-[var(--radius-sm)] bg-error/10 px-2 py-0.5 font-label text-xs font-medium text-error">
            Agotado
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Category badge */}
        <span className="font-label text-[11px] font-medium uppercase tracking-wider text-muted">
          {product.categoryLabel}
        </span>

        {/* Name */}
        <Link
          href={`/producto/${product.slug}`}
          className="font-display text-base font-semibold text-navy leading-tight transition-colors hover:text-teal-dark"
        >
          {product.name}
        </Link>

        {/* Specs line */}
        <p className="font-label text-xs text-muted">
          {defaultPresentation.label}
        </p>

        {/* Price + Action */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <span className="font-label text-base font-semibold text-navy">
            {formatPrice(defaultPresentation.price)}
          </span>

          <button
            onClick={() => addItem(product, defaultPresentation.id)}
            disabled={!product.inStock}
            className="rounded-[var(--radius-md)] bg-teal px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
