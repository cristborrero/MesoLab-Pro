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
        <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
          <span className="text-4xl">🔍</span>
          <p className="text-muted">
            No hay productos en esta categoría todavía.
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
