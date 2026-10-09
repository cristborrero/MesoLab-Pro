"use client";

import { useState, useMemo, useEffect } from "react";
import type { Product, CategoryInfo } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

interface ShopContentProps {
  products: Product[];
  categories: CategoryInfo[];
  initialCategory?: string;
}

// ── BESPOKE PROFESSIONAL SVG ICONS (CERO EMOJIS) ──────────────────────────

function IconSearch({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconSliders({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
  );
}

function IconClose({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconGrid({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}

function IconDevice({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function IconDroplet({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 13.5a7.5 7.5 0 0 0 15 0c0-5.25-7.5-13.5-7.5-13.5Z" />
    </svg>
  );
}

function IconSilhouette({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function IconLeaf({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9c0-6-6-9-9-9s-9 3-9 9a9 9 0 0 0 9 9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    </svg>
  );
}

function IconFlask({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h4.5m-3.75 0v4.382a2.25 2.25 0 0 1-.36 1.218L5.34 16.59A3 3 0 0 0 7.89 21h8.22a3 3 0 0 0 2.55-4.41l-4.8-7.24a2.25 2.25 0 0 1-.36-1.218V3.75" />
    </svg>
  );
}

function IconShieldCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconTruck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.215-9.125m-2.45-3.001A2.25 2.25 0 0 0 14.25 3H3.375A1.125 1.125 0 0 0 2.25 4.125v10.125m15 0V7.5a2.25 2.25 0 0 0-2.25-2.25H12" />
    </svg>
  );
}

function IconStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

// ── TAXONOMÍA ESTRUCTURAL ──────────────────────────────────────────────────

interface CategoryMetaItem {
  label: string;
  renderIcon: (props: { className?: string }) => React.JSX.Element;
  subcategories: string[];
}

const CATEGORY_MAP: Record<string, CategoryMetaItem> = {
  "beauty-tech": {
    label: "Beauty Tech",
    renderIcon: IconDevice,
    subcategories: [
      "Depilación Láser IPL",
      "Lifting & Fototerapia LED",
      "Limpieza Sónica",
    ],
  },
  facial: {
    label: "Cuidado Facial",
    renderIcon: IconDroplet,
    subcategories: ["Sueros Dermo-activos", "Mascarillas & Parches"],
  },
  corporal: {
    label: "Cuidado Corporal",
    renderIcon: IconSilhouette,
    subcategories: ["Geles Reductores & Masajes"],
  },
  capilar: {
    label: "Cuidado Capilar",
    renderIcon: IconLeaf,
    subcategories: ["Cepillos & Estilizado", "Tónicos Anticaída & Biotina"],
  },
  profesional: {
    label: "Línea Profesional",
    renderIcon: IconFlask,
    subcategories: [
      "Lipolíticos & Reductores",
      "Drenaje & Depurativos",
      "Firmeza & Reafirmantes",
      "Cócteles Combinados",
    ],
  },
};

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";
type PriceFilter = "all" | "under-70k" | "70k-120k" | "over-120k";

export function ShopContent({
  products,
  initialCategory,
}: ShopContentProps) {
  // Estados de filtrado
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory ?? "todos"
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [onlyCod, setOnlyCod] = useState(false);
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false);
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceFilter>("all");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Sincronizar initialCategory si cambia la URL
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setActiveSubcategory("todos");
    }
  }, [initialCategory]);

  const handleCategorySelect = (slug: string) => {
    setActiveCategory(slug);
    setActiveSubcategory("todos");
  };

  // Subcategorías según la categoría activa
  const currentSubcategories = useMemo(() => {
    if (activeCategory === "todos") {
      return [
        { label: "Todas las áreas", value: "todos" },
        { label: "Depilación Láser IPL", value: "Depilación Láser IPL" },
        { label: "Lifting & Microcorrientes", value: "Lifting & Fototerapia LED" },
        { label: "Sueros Dermo-activos", value: "Sueros Dermo-activos" },
        { label: "Mascarillas de Colágeno", value: "Mascarillas & Parches" },
        { label: "Geles Reductores", value: "Geles Reductores & Masajes" },
        { label: "Tónicos Anticaída", value: "Tónicos Anticaída & Biotina" },
        { label: "Cepillos de Estilizado", value: "Cepillos & Estilizado" },
        { label: "Mesoterapia & Cabina", value: "Lipolíticos & Reductores" },
      ];
    }

    const meta = CATEGORY_MAP[activeCategory];
    if (!meta) return [{ label: "Todos", value: "todos" }];

    return [
      { label: `Todas en ${meta.label}`, value: "todos" },
      ...meta.subcategories.map((sub) => ({ label: sub, value: sub })),
    ];
  }, [activeCategory]);

  // Conteos dinámicos por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: products.length };
    products.forEach((p) => {
      const catKey =
        ["lipoliticos", "vitaminicos", "anestesicos", "insumos"].includes(p.category)
          ? "profesional"
          : p.category;
      counts[catKey] = (counts[catKey] || 0) + 1;
    });
    return counts;
  }, [products]);

  // Limpiar todos los filtros
  const resetAllFilters = () => {
    setSearchQuery("");
    setActiveCategory("todos");
    setActiveSubcategory("todos");
    setSortBy("featured");
    setOnlyCod(false);
    setOnlyFreeShipping(false);
    setOnlyFeatured(false);
    setPriceRange("all");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    activeCategory !== "todos" ||
    activeSubcategory !== "todos" ||
    onlyCod ||
    onlyFreeShipping ||
    onlyFeatured ||
    priceRange !== "all" ||
    sortBy !== "featured";

  const activeFiltersCount =
    (searchQuery.trim() !== "" ? 1 : 0) +
    (activeCategory !== "todos" ? 1 : 0) +
    (activeSubcategory !== "todos" ? 1 : 0) +
    (onlyCod ? 1 : 0) +
    (onlyFreeShipping ? 1 : 0) +
    (onlyFeatured ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0);

  // Filtrado y ordenamiento de productos
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Categoría
        if (activeCategory !== "todos") {
          const isProf =
            activeCategory === "profesional" &&
            ["profesional", "lipoliticos", "vitaminicos", "anestesicos", "insumos"].includes(
              p.category
            );
          if (!isProf && p.category !== activeCategory) {
            return false;
          }
        }

        // Subcategoría
        if (activeSubcategory !== "todos") {
          const matchSub =
            p.subcategory?.toLowerCase() === activeSubcategory.toLowerCase() ||
            p.categoryLabel?.toLowerCase().includes(activeSubcategory.toLowerCase()) ||
            p.tags?.some((t) => t.toLowerCase() === activeSubcategory.toLowerCase());
          if (!matchSub) return false;
        }

        // Búsqueda de texto
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase().trim();
          const matchText =
            p.name.toLowerCase().includes(query) ||
            p.shortDescription.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.categoryLabel.toLowerCase().includes(query) ||
            p.subcategory?.toLowerCase().includes(query) ||
            p.tags?.some((t) => t.toLowerCase().includes(query));
          if (!matchText) return false;
        }

        // Beneficios
        if (onlyCod && p.codAvailable === false) return false;
        if (onlyFreeShipping && !p.freeShipping) return false;
        if (onlyFeatured && !p.featured) return false;

        // Rango de Precio
        const minPrice = Math.min(...p.presentations.map((pr) => pr.price));
        if (priceRange === "under-70k" && minPrice >= 70000) return false;
        if (priceRange === "70k-120k" && (minPrice < 70000 || minPrice > 120000)) return false;
        if (priceRange === "over-120k" && minPrice <= 120000) return false;

        return true;
      })
      .sort((a, b) => {
        const priceA = Math.min(...a.presentations.map((pr) => pr.price));
        const priceB = Math.min(...b.presentations.map((pr) => pr.price));

        if (sortBy === "price-asc") return priceA - priceB;
        if (sortBy === "price-desc") return priceB - priceA;
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [
    products,
    activeCategory,
    activeSubcategory,
    searchQuery,
    onlyCod,
    onlyFreeShipping,
    onlyFeatured,
    priceRange,
    sortBy,
  ]);

  // ── SUBCOMPONENTE DE BARRA LATERAL VERTICAL ──────────────────────────────
  const renderFilterSidebar = () => (
    <div className="space-y-7">
      {/* Encabezado del Sidebar */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <IconSliders className="h-4 w-4 text-navy" />
          <span className="font-label text-xs font-bold uppercase tracking-wider text-navy">
            Filtros
          </span>
          {activeFiltersCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-navy px-1.5 text-[10px] font-bold text-white">
              {activeFiltersCount}
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetAllFilters}
            className="font-label text-[11px] font-medium text-muted transition-colors hover:text-navy underline-offset-2 hover:underline"
          >
            Restablecer
          </button>
        )}
      </div>

      {/* 1. Categorías Principales */}
      <div>
        <h4 className="mb-3 font-label text-[11px] font-bold uppercase tracking-wider text-muted">
          Categoría
        </h4>
        <nav className="flex flex-col space-y-1">
          {/* Opción Todos */}
          <button
            type="button"
            onClick={() => handleCategorySelect("todos")}
            className={`group flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-all ${
              activeCategory === "todos"
                ? "bg-navy font-semibold text-white shadow-sm"
                : "text-navy hover:bg-surface"
            }`}
          >
            <span className="flex items-center gap-2.5">
              <IconGrid
                className={`h-4 w-4 transition-colors ${
                  activeCategory === "todos" ? "text-white" : "text-muted group-hover:text-navy"
                }`}
              />
              <span>Todos los productos</span>
            </span>
            <span
              className={`font-mono text-[11px] ${
                activeCategory === "todos" ? "text-white/80" : "text-muted"
              }`}
            >
              {categoryCounts.todos || products.length}
            </span>
          </button>

          {/* Categorías mapeadas */}
          {Object.entries(CATEGORY_MAP).map(([slug, meta]) => {
            const count = categoryCounts[slug] || 0;
            const isSelected = activeCategory === slug;
            const Icon = meta.renderIcon;

            return (
              <button
                key={slug}
                type="button"
                onClick={() => handleCategorySelect(slug)}
                className={`group flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-all ${
                  isSelected
                    ? "bg-navy font-semibold text-white shadow-sm"
                    : "text-navy hover:bg-surface"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      isSelected ? "text-white" : "text-muted group-hover:text-navy"
                    }`}
                  />
                  <span>{meta.label}</span>
                </span>
                {count > 0 && (
                  <span
                    className={`font-mono text-[11px] ${
                      isSelected ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 2. Subcategorías Dinámicas */}
      <div className="border-t border-border/80 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-label text-[11px] font-bold uppercase tracking-wider text-muted">
            Subcategoría
          </h4>
          {activeSubcategory !== "todos" && (
            <button
              type="button"
              onClick={() => setActiveSubcategory("todos")}
              className="text-[10px] text-muted hover:text-navy"
            >
              Ver todas
            </button>
          )}
        </div>
        <div className="max-h-56 space-y-1 overflow-y-auto pr-1 scrollbar-thin">
          {currentSubcategories.map((sub) => {
            const isChecked = activeSubcategory === sub.value;

            return (
              <button
                key={sub.value}
                type="button"
                onClick={() => setActiveSubcategory(sub.value)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                  isChecked
                    ? "bg-surface font-semibold text-navy"
                    : "text-navy/80 hover:bg-surface/50 hover:text-navy"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded border transition-colors ${
                      isChecked
                        ? "border-navy bg-navy text-white"
                        : "border-border bg-white"
                    }`}
                  >
                    {isChecked && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span className="truncate">{sub.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Modalidad de Entrega & Confianza (Beneficios de Compra) */}
      <div className="border-t border-border/80 pt-5">
        <h4 className="mb-3 font-label text-[11px] font-bold uppercase tracking-wider text-muted">
          Beneficios de Compra
        </h4>
        <div className="space-y-2">
          {/* Pago Contra Entrega */}
          <label className="group flex cursor-pointer items-start gap-2.5 rounded-lg border border-border/60 bg-white p-2.5 transition-all hover:border-border hover:bg-surface/40">
            <input
              type="checkbox"
              checked={onlyCod}
              onChange={(e) => setOnlyCod(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-navy focus:ring-0 focus:ring-offset-0"
            />
            <div className="flex-1">
              <span className="flex items-center gap-1.5 font-label text-xs font-semibold text-navy">
                <IconShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Pago Contra Entrega
              </span>
              <p className="mt-0.5 text-[10px] text-muted">
                Pagas en efectivo o transferencia al recibir en tu puerta
              </p>
            </div>
          </label>

          {/* Envío Gratis */}
          <label className="group flex cursor-pointer items-start gap-2.5 rounded-lg border border-border/60 bg-white p-2.5 transition-all hover:border-border hover:bg-surface/40">
            <input
              type="checkbox"
              checked={onlyFreeShipping}
              onChange={(e) => setOnlyFreeShipping(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-navy focus:ring-0 focus:ring-offset-0"
            />
            <div className="flex-1">
              <span className="flex items-center gap-1.5 font-label text-xs font-semibold text-navy">
                <IconTruck className="h-3.5 w-3.5 text-navy" />
                Envío Nacional Gratis
              </span>
              <p className="mt-0.5 text-[10px] text-muted">
                Cobertura a ciudades y municipios principales
              </p>
            </div>
          </label>

          {/* Lo Más Vendido */}
          <label className="group flex cursor-pointer items-start gap-2.5 rounded-lg border border-border/60 bg-white p-2.5 transition-all hover:border-border hover:bg-surface/40">
            <input
              type="checkbox"
              checked={onlyFeatured}
              onChange={(e) => setOnlyFeatured(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-navy focus:ring-0 focus:ring-offset-0"
            />
            <div className="flex-1">
              <span className="flex items-center gap-1.5 font-label text-xs font-semibold text-navy">
                <IconStar className="h-3.5 w-3.5 text-amber-500" />
                Lo Más Vendido
              </span>
              <p className="mt-0.5 text-[10px] text-muted">
                Artículos con mayor demanda y calificación
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* 4. Rango de Inversión / Precio */}
      <div className="border-t border-border/80 pt-5">
        <h4 className="mb-3 font-label text-[11px] font-bold uppercase tracking-wider text-muted">
          Rango de Precio (COP)
        </h4>
        <div className="space-y-1.5">
          {[
            { label: "Todos los precios", value: "all" },
            { label: "Hasta $70.000", value: "under-70k" },
            { label: "$70.000 a $120.000", value: "70k-120k" },
            { label: "Más de $120.000", value: "over-120k" },
          ].map((range) => {
            const isSelected = priceRange === range.value;
            return (
              <button
                key={range.value}
                type="button"
                onClick={() => setPriceRange(range.value as PriceFilter)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                  isSelected
                    ? "bg-surface font-semibold text-navy"
                    : "text-navy/80 hover:bg-surface/50 hover:text-navy"
                }`}
              >
                <span>{range.label}</span>
                {isSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* ── TOP BAR GENERAL: BÚSQUEDA RÁPIDA, BOTÓN MOBILE Y ORDENAMIENTO ── */}
      <div className="flex flex-col gap-4 border-b border-border/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Barra de búsqueda en tiempo real */}
        <div className="relative flex-1 max-w-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-navy/40">
            <IconSearch className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por producto, principio activo o tecnología..."
            className="w-full rounded-xl border border-border bg-white py-2 pl-10 pr-9 font-sans text-xs text-navy placeholder:text-muted transition-all focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20 sm:text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Limpiar búsqueda"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-navy"
            >
              <IconClose className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Controles de la derecha: Trigger Mobile y Ordenamiento */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          {/* Botón de Filtros para Pantallas Móviles */}
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 font-label text-xs font-semibold text-navy transition-colors hover:bg-surface lg:hidden"
          >
            <IconSliders className="h-3.5 w-3.5" />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-navy px-1 text-[9px] font-bold text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Contador de resultados desktop */}
          <div className="hidden font-sans text-xs text-muted xl:block">
            <span className="font-semibold text-navy">{filteredProducts.length}</span> referencias
          </div>

          {/* Selector de Ordenamiento */}
          <div className="flex items-center gap-2">
            <label htmlFor="shop-sort" className="hidden font-label text-xs text-muted sm:inline">
              Ordenar:
            </label>
            <select
              id="shop-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-xl border border-border bg-white px-3 py-2 font-label text-xs font-semibold text-navy transition-colors hover:border-navy/40 focus:border-navy focus:outline-none"
            >
              <option value="featured">Recomendados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name-asc">Alfabético: A - Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── CHIPS DE FILTROS ACTIVOS (CUANDO APLICA) ── */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="font-label text-[10px] font-bold uppercase tracking-wider text-muted">
            Filtros activos:
          </span>

          {activeCategory !== "todos" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 font-label text-[11px] font-medium text-navy">
              <span>{CATEGORY_MAP[activeCategory]?.label || activeCategory}</span>
              <button
                type="button"
                onClick={() => handleCategorySelect("todos")}
                className="text-muted hover:text-navy"
                aria-label="Remover filtro de categoría"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          {activeSubcategory !== "todos" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 font-label text-[11px] font-medium text-navy">
              <span>{activeSubcategory}</span>
              <button
                type="button"
                onClick={() => setActiveSubcategory("todos")}
                className="text-muted hover:text-navy"
                aria-label="Remover filtro de subcategoría"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 font-label text-[11px] font-medium text-navy">
              <span>&quot;{searchQuery}&quot;</span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-muted hover:text-navy"
                aria-label="Remover búsqueda"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          {onlyCod && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-label text-[11px] font-medium text-emerald-800">
              <span>Pago Contra Entrega</span>
              <button
                type="button"
                onClick={() => setOnlyCod(false)}
                className="text-emerald-700 hover:text-emerald-950"
                aria-label="Remover filtro contra entrega"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          {onlyFreeShipping && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 font-label text-[11px] font-medium text-navy">
              <span>Envío Gratis</span>
              <button
                type="button"
                onClick={() => setOnlyFreeShipping(false)}
                className="text-muted hover:text-navy"
                aria-label="Remover filtro envío gratis"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          {priceRange !== "all" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 font-label text-[11px] font-medium text-navy">
              <span>Precio personalizado</span>
              <button
                type="button"
                onClick={() => setPriceRange("all")}
                className="text-muted hover:text-navy"
                aria-label="Remover filtro de precio"
              >
                <IconClose className="h-3 w-3" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={resetAllFilters}
            className="font-label text-[11px] font-semibold text-muted underline-offset-2 hover:text-navy hover:underline"
          >
            Limpiar todo
          </button>
        </div>
      )}

      {/* ── ESTRUCTURA EDITORIAL DE 2 COLUMNAS (SIDEBAR VERTICAL + CANVAS) ── */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* COLUMNA IZQUIERDA: FILTROS VERTICALES (DESKTOP) */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28 self-start rounded-2xl border border-border/80 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            {renderFilterSidebar()}
          </div>
        </aside>

        {/* COLUMNA DERECHA: GRILLA DE PRODUCTOS */}
        <main className="lg:col-span-9">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white p-12 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-navy/40">
                  <IconSliders className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  No se encontraron referencias con estos parámetros
                </h3>
                <p className="mt-1 max-w-sm text-xs text-muted">
                  Intenta restablecer tus filtros o buscar con otro término de producto o tecnología.
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="mt-5 rounded-lg bg-navy px-4 py-2 font-label text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy/90"
                >
                  Restablecer todos los filtros
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* ── MODAL / DRAWER SLIDE-OVER PARA MÓVILES ── */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 bg-navy/40 backdrop-blur-sm"
            />

            {/* Slide-over Container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative z-10 flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-2xl"
            >
              {/* Header drawer */}
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <span className="font-display text-base font-bold text-navy">
                  Filtrar Catálogo
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="rounded-lg p-1.5 text-muted hover:bg-surface hover:text-navy"
                  aria-label="Cerrar filtros"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>

              {/* Contenido scrollable del drawer */}
              <div className="flex-1 overflow-y-auto py-4 scrollbar-thin">
                {renderFilterSidebar()}
              </div>

              {/* Footer con botón de aplicar */}
              <div className="border-t border-border/80 pt-4">
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="w-full rounded-xl bg-navy py-3 font-label text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-navy/90"
                >
                  Ver {filteredProducts.length} Resultados
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
