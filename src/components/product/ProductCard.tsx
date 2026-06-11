"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/cart/CartProvider";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedPresentation, setSelectedPresentation] = useState(
    product.presentations[0]
  );

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col rounded-[var(--radius-lg)] border border-border bg-white transition-colors duration-300 hover:border-teal/30"
    >
      {/* Product Image */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-t-[var(--radius-lg)] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]">
        <Link href={`/producto/${product.slug}`} className="relative flex h-full w-full items-center justify-center p-4">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <svg
              className="h-28 w-28 text-navy/15 transition-transform duration-500 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M38 52h24v28H38z" className="fill-teal/10 transition-colors group-hover:fill-teal/15" />
              <path d="M36 28h28v6H36v-6z" className="fill-navy/20 group-hover:fill-navy/35" />
              <path d="M44 34h12v12h-12V34z" className="fill-navy/10 group-hover:fill-navy/20" />
              <path
                d="M36 46c0-2 2-4 4-4h20c2 0 4 2 4 4v36c0 3-3 6-6 6H42c-3 0-6-3-6-6V46z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="42" y1="52" x2="48" y2="52" stroke="currentColor" strokeWidth="1.5" />
              <line x1="42" y1="60" x2="52" y2="60" stroke="currentColor" strokeWidth="1.5" />
              <line x1="42" y1="68" x2="48" y2="68" stroke="currentColor" strokeWidth="1.5" />
              <line x1="42" y1="76" x2="52" y2="76" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}

          {/* Clinical certification watermark — only when no real image */}
          {!product.image && (
            <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-wider text-navy/20">
              Certified ISO 13485
            </span>
          )}
        </Link>

        {/* Specs Hover Overlay (reveals technical specifications cleanly only when needed) */}
        <div className="absolute inset-0 flex flex-col justify-end bg-navy/90 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px] pointer-events-none">
          <span className="font-label text-[10px] uppercase tracking-widest text-teal font-bold mb-2">Ficha Técnica</span>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-white">
            {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
              <div key={key}>
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-label">{key}</span>
                <span className="block text-[11px] font-medium leading-tight text-white/95">{val}</span>
              </div>
            ))}
          </div>
          <Link href={`/producto/${product.slug}`} className="mt-3 block border-t border-white/10 pt-2 text-center font-label text-[10px] uppercase tracking-wider text-teal hover:text-white pointer-events-auto">
            Detalles completos →
          </Link>
        </div>

        {/* Real-time Stock Badge */}
        {product.inStock ? (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-border font-label text-[9px] font-bold uppercase tracking-wider text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Disponible
          </span>
        ) : (
          <span className="absolute top-3 right-3 rounded-[var(--radius-sm)] bg-error/10 px-2.5 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-error">
            Agotado
          </span>
        )}
      </div>

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

        {/* Presentation Dropdown Selector */}
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

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product, selectedPresentation.id)}
            disabled={!product.inStock}
            className="rounded-[var(--radius-md)] bg-teal px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
          >
            Agregar
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
