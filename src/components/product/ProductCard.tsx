"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedPresentation, setSelectedPresentation] = useState(
    product.presentations[0]
  );

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(38, 55, 59, 0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col rounded-2xl border border-border bg-white transition-all duration-300 hover:border-teal/40 overflow-hidden"
    >
      {/* Product Image Container */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-surface p-6">
        <Link
          href={`/producto/${product.slug}`}
          className="relative flex h-full w-full items-center justify-center"
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <svg
                className="h-20 w-20 text-navy/20 transition-transform duration-500 group-hover:scale-105"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path d="M38 52h24v28H38z" className="fill-teal/10" />
                <path d="M36 28h28v6H36v-6z" className="fill-navy/20" />
                <path d="M44 34h12v12h-12V34z" className="fill-navy/10" />
                <path
                  d="M36 46c0-2 2-4 4-4h20c2 0 4 2 4 4v36c0 3-3 6-6 6H42c-3 0-6-3-6-6V46z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </Link>

        {/* Real-time Stock Badge */}
        {product.inStock ? (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 shadow-sm border border-border font-label text-[10px] font-bold uppercase tracking-wider text-emerald-700 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Disponible
          </span>
        ) : (
          <span className="absolute top-3 left-3 rounded-full bg-red-50 border border-red-200 px-2.5 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-red-600">
            Agotado
          </span>
        )}

        {/* Pago Contra Entrega Trust Badge */}
        {product.codAvailable !== false && (
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-navy/80 px-2.5 py-1 font-label text-[9px] font-medium text-white shadow-sm backdrop-blur-sm">
            <svg className="h-3 w-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Contra Entrega
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Star Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-label text-[10px] font-bold uppercase tracking-wider text-teal-accessible">
            {product.categoryLabel}
          </span>
          {/* 5-Star Rating Preview */}
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-[10px] text-muted font-medium">5.0</span>
          </div>
        </div>

        {/* Name */}
        <Link
          href={`/producto/${product.slug}`}
          className="mt-2 font-display text-sm sm:text-base font-bold text-navy leading-snug transition-colors hover:text-teal-dark line-clamp-2"
        >
          {product.name}
        </Link>

        {/* Presentation Selector */}
        {product.presentations.length > 1 ? (
          <div className="mt-2.5">
            <label htmlFor={`presentation-${product.id}`} className="sr-only">
              Presentación de {product.name}
            </label>
            <select
              id={`presentation-${product.id}`}
              aria-label={`Presentación de ${product.name}`}
              value={selectedPresentation.id}
              onChange={(e) => {
                const found = product.presentations.find(
                  (p) => p.id === e.target.value
                );
                if (found) setSelectedPresentation(found);
              }}
              className="w-full rounded-lg border border-border bg-surface/50 px-2.5 py-1.5 font-label text-[11px] text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            >
              {product.presentations.map((pres) => (
                <option key={pres.id} value={pres.id}>
                  {pres.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p className="mt-2 font-label text-[11px] text-muted">
            {selectedPresentation.label}
          </p>
        )}

        {/* Price + Action */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="font-mono text-base sm:text-lg font-bold text-navy">
            {formatPrice(selectedPresentation.price)}
          </span>

          {product.inStock ? (
            <Link
              href={`/producto/${product.slug}`}
              className="rounded-full bg-teal-accessible px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-[0_4px_12px_rgba(0,122,119,0.25)]"
            >
              Ver producto
            </Link>
          ) : (
            <span className="rounded-full bg-border px-4 py-2 text-xs font-semibold text-muted cursor-not-allowed">
              Agotado
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
