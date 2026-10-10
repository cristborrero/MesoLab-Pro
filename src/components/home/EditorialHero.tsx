"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20asesoria%20personalizada%20sobre%20los%20equipos%20y%20productos";

const TRUST_METRICS = [
  { label: "Envíos a todo el país", detail: "Cobertura nacional" },
  { label: "Compra 100% segura", detail: "Pago Contra Entrega" },
  { label: "Asesoría especializada", detail: "Atención 1 a 1" },
  { label: "Garantía oficial", detail: "Respaldo y soporte" },
];

export function EditorialHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clinical Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-dark border border-teal/20">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Tecnología Dermo-Estética Certificada
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] leading-[1.12]"
            >
              Tecnología estética. <br className="hidden sm:inline" />
              <span className="text-teal-dark">Confianza</span> en cada elección.
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-secondary-text sm:text-lg"
            >
              Aparatología avanzada, principios activos de grado clínico y soluciones formuladas para elevar tus rutinas en casa y cabinas profesionales en Colombia.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/tienda"
                className="inline-flex h-13 items-center justify-center rounded-full bg-teal px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,185,181,0.28)] transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_6px_20px_rgba(0,185,181,0.36)] active:scale-[0.98]"
              >
                Explorar productos
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-full border border-navy/20 bg-white px-7 text-sm font-semibold text-navy transition-all duration-200 hover:bg-surface hover:border-navy/40 active:scale-[0.98]"
              >
                <svg
                  className="mr-2 h-4 w-4 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar con un asesor
              </a>
            </motion.div>

            {/* Micro-Trust Strip under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4"
            >
              {TRUST_METRICS.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-xs font-semibold text-navy flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-teal shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-muted pl-5">{metric.detail}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Editorial Treatment Visual & Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Image Card with Rounded-3xl and clinical border */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-border shadow-elevated bg-surface">
                <Image
                  src="/images/hero-clinical-treatment.webp"
                  alt="Tratamiento dermo-estético con tecnología MesoLab Pro"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Gradient overlay for text contrast at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Floating clinical glass badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 p-4 backdrop-blur-md border border-white/50 shadow-md">
                  <div>
                    <span className="block font-label text-[10px] font-bold uppercase tracking-wider text-teal-accessible">
                      Resultados Clínicos
                    </span>
                    <span className="block text-sm font-bold text-navy">
                      Terapia LED &amp; Fotorejuvenecimiento
                    </span>
                  </div>
                  <Link
                    href="/tienda?categoria=beauty-tech"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white transition-transform hover:scale-110 active:scale-95"
                    aria-label="Ver equipos de fotorejuvenecimiento"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Decorative Subtle Background Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-teal/15 blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
