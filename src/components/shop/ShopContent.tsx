"use client";

import { useState } from "react";
import type { Product, CategoryInfo } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

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
        <button
          onClick={() => setActiveCategory("todos")}
          className={`shrink-0 rounded-full px-4 py-2 font-label text-sm font-medium transition-colors ${
            activeCategory === "todos"
              ? "bg-teal text-white"
              : "bg-surface text-navy hover:bg-border"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`shrink-0 rounded-full px-4 py-2 font-label text-sm font-medium transition-colors ${
              activeCategory === cat.slug
                ? "bg-teal text-white"
                : "bg-surface text-navy hover:bg-border"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-navy/40">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <p className="text-muted text-sm">
            Aún no hay productos cargados en esta categoría.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
