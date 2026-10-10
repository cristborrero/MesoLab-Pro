"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CategoryCardItem {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
  href: string;
  badge?: string;
}

const CATEGORIES: CategoryCardItem[] = [
  {
    id: "facial",
    name: "Cuidado Facial",
    description: "Sueros activos, mascarillas y regeneración dérmica",
    count: 30,
    image: "/images/category-facial.webp",
    href: "/tienda?categoria=cuidado-facial",
    badge: "Más Solicitado",
  },
  {
    id: "beauty-tech",
    name: "Beauty Tech",
    description: "Aparatología LED, radiofrecuencia y microcorrientes",
    count: 30,
    image: "/images/category-beautytech.webp",
    href: "/tienda?categoria=beauty-tech",
    badge: "Tecnología Avanzada",
  },
  {
    id: "corporal",
    name: "Cuidado Corporal",
    description: "Fórmulas lipolíticas, silueta, drenaje y firmeza",
    count: 30,
    image: "/images/category-corporal.webp",
    href: "/tienda?categoria=cuidado-corporal",
  },
  {
    id: "capilar",
    name: "Cuidado Capilar",
    description: "Estimulación folicular, biotina y terapias capilares",
    count: 30,
    image: "/images/category-capilar.webp",
    href: "/tienda?categoria=cuidado-capilar",
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-surface py-16 lg:py-24 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-teal-accessible">
              Colecciones Especializadas
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Explora por Categoría
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-secondary-text">
              Soluciones formuladas y aparatología seleccionada para responder con precisión a cada necesidad estética.
            </p>
          </div>

          <Link
            href="/tienda"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:text-teal transition-colors"
          >
            Ver catálogo completo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={cat.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-teal/30 h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Pill Badge */}
                  {cat.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-teal-dark shadow-sm backdrop-blur-sm border border-white/60">
                      {cat.badge}
                    </span>
                  )}

                  {/* Product Count Pill */}
                  <span className="absolute top-3 right-3 rounded-full bg-navy/60 px-2.5 py-1 font-label text-[10px] font-medium text-white backdrop-blur-sm">
                    {cat.count} productos
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy transition-colors group-hover:text-teal-dark">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-secondary-text leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-2 border-t border-border/60">
                    <span className="text-xs font-semibold text-teal-accessible group-hover:underline">
                      Ver productos
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-navy transition-all duration-200 group-hover:bg-teal group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
