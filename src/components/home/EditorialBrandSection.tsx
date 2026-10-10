"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function EditorialBrandSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with rounded-3xl & shadow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl border border-border shadow-elevated bg-surface">
              <Image
                src="/images/about-editorial-still-life.webp"
                alt="Formulaciones dermocosméticas y activos clínicos de MesoLab Pro"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Subtle glow behind */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
            />
          </motion.div>

          {/* Right Column: Editorial story & statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="font-label text-xs font-bold uppercase tracking-widest text-teal-accessible">
              Sobre Nosotros
            </span>

            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl leading-tight">
              Tu aliado en tecnología estética y cosmética profesional
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-secondary-text">
              En MesoLab Pro seleccionamos cuidadosamente las mejores tecnologías y formulaciones dermocosméticas para ofrecer resultados visibles, seguros y duraderos.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary-text">
              Respaldamos a centros de estética, profesionales de la salud y usuarios que buscan el más alto estándar en el cuidado de su piel, con envío directo a cualquier rincón de Colombia y la confianza del Pago Contra Entrega.
            </p>

            {/* 3 Metric Pills */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-b border-border/80 py-6">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-navy">
                  +10 años
                </span>
                <span className="block mt-1 text-xs text-muted">
                  Experiencia en el sector dermo-estético
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-teal-dark">
                  150+
                </span>
                <span className="block mt-1 text-xs text-muted">
                  Referencias activas en inventario real
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-navy">
                  +5.000
                </span>
                <span className="block mt-1 text-xs text-muted">
                  Clientes y cabinas en toda Colombia
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/nosotros"
                className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-7 text-sm font-semibold text-white transition-all hover:bg-navy-light"
              >
                Conoce más sobre nosotros
              </Link>
              <Link
                href="/tienda"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-semibold text-navy transition-all hover:bg-surface"
              >
                Ver productos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
