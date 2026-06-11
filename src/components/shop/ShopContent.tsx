"use client";

import { useState } from "react";
import type { Product, CategoryInfo } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

interface ShopContentProps {
  products: Product[];
  categories: CategoryInfo[];
  initialCategory?: string;
}

export function ShopContent({
  products,
  categories,
  initialCategory,
}: ShopContentProps) {
  const [activeCategory, setActiveCategory] = useState(
    initialCategory ?? "todos"
  );

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter Pills */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setActiveCategory("todos")}
          className={`shrink-0 rounded-full px-5 py-2 font-label text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeCategory === "todos"
              ? "bg-teal text-white shadow-sm"
              : "bg-surface text-navy hover:bg-border"
          }`}
        >
          Todos
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            whileTap={{ scale: 0.97 }}
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`shrink-0 rounded-full px-5 py-2 font-label text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeCategory === cat.slug
                ? "bg-teal text-white shadow-sm"
                : "bg-surface text-navy hover:bg-border"
            }`}
          >
            {cat.name}
          </motion.button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-navy/40">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <p className="text-muted text-sm">
              Aún no hay productos cargados en esta categoría.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
