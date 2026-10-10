"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20asesoria%20personalizada%20sobre%20los%20equipos%20y%20productos";

interface SlideData {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
}

const SLIDES: SlideData[] = [
  {
    tag: "TECNOLOGÍA ESTÉTICA & COSMÉTICA PROFESIONAL",
    titleLine1: "Tecnología estética.",
    titleLine2: "Confianza en cada ",
    highlight: "elección.",
    description:
      "Equipos y soluciones cosméticas seleccionados para profesionales que buscan calidad, asesoría especializada y resultados respaldados por información clara.",
    image: "/images/hero-clinical-treatment.webp",
    imageAlt: "Tratamiento dermo-estético con tecnología MesoLab Pro",
    primaryCtaText: "Explorar productos",
    primaryCtaHref: "/tienda?categoria=beauty-tech",
  },
  {
    tag: "DERMOCOSMÉTICA ACTIVA & REGENERACIÓN",
    titleLine1: "Fórmulas puras.",
    titleLine2: "Resultados visibles en ",
    highlight: "cada sesión.",
    description:
      "Principios activos de grado clínico con ácido hialurónico, péptidos y vitamina C diseñados para potenciar la luminosidad y firmeza dérmica.",
    image: "/images/category-facial.webp",
    imageAlt: "Cuidado facial y sueros activos MesoLab Pro",
    primaryCtaText: "Ver Cuidado Facial",
    primaryCtaHref: "/tienda?categoria=cuidado-facial",
  },
  {
    tag: "CABINA PROFESIONAL & BIENESTAR",
    titleLine1: "Soluciones de cabina.",
    titleLine2: "Respaldo clínico para ",
    highlight: "tu centro estético.",
    description:
      "Acompañamiento especializado 1 a 1, aparatología certificada y logística nacional asegurada con opción de Pago Contra Entrega en Colombia.",
    image: "/images/consultation-specialists.webp",
    imageAlt: "Especialistas clínicos de MesoLab Pro",
    primaryCtaText: "Ver Catálogo Completo",
    primaryCtaHref: "/tienda",
  },
];

const TRUST_ITEMS = [
  {
    title: "Envíos a todo Colombia",
    icon: (
      <svg className="h-5 w-5 text-navy/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v10.875" />
      </svg>
    ),
  },
  {
    title: "Compra segura",
    icon: (
      <svg className="h-5 w-5 text-navy/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Asesoría especializada",
    icon: (
      <svg className="h-5 w-5 text-navy/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    title: "Garantía en todos nuestros productos",
    icon: (
      <svg className="h-5 w-5 text-navy/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

export function EditorialHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = SLIDES[current];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-[#FAFBFB] pt-20 border-b border-border/40"
    >
      {/* ─── FULL CANVAS EDITORIAL BACKGROUND SLIDER ─── */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] w-full flex flex-col justify-between">
        {/* Background Image Layer with Cross-Fade */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority
                className="object-cover object-center lg:object-right"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Smooth editorial gradient mask from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-35% md:via-45% to-white/20 lg:to-transparent" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* ─── HERO CONTENT (LEFT ALIGNED) ─── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="max-w-2xl lg:max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Clinical Label */}
                <span className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-teal-accessible">
                  {slide.tag}
                </span>

                {/* Headline */}
                <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-navy leading-[1.12]">
                  {slide.titleLine1} <br />
                  {slide.titleLine2}
                  <span className="text-teal-dark">{slide.highlight}</span>
                </h1>

                {/* Subcopy */}
                <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-secondary-text">
                  {slide.description}
                </p>

                {/* Dual CTAs matching Photo 2 */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.primaryCtaHref}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-teal px-7 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,185,181,0.28)] transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_6px_20px_rgba(0,185,181,0.36)] active:scale-[0.98]"
                  >
                    {slide.primaryCtaText}
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
                    className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-navy backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-slate-400 active:scale-[0.98]"
                  >
                    Hablar con un asesor
                    <svg
                      className="ml-2 h-4 w-4 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── BOTTOM STRIP: TRUST ICONS (LEFT) + SLIDER CONTROLS (RIGHT) ─── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-t border-border/80 pt-6">
            {/* Left: 4 Trust Pillars matching Photo 2 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="flex items-center gap-2.5">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-xs font-semibold text-navy leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Slider Controls (Pills, Counter 01 / 03, Arrows) */}
            <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 lg:pt-0">
              {/* Pagination Indicators */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className="focus:outline-none py-2"
                    aria-label={`Ir al slide ${idx + 1}`}
                  >
                    {current === idx ? (
                      <span className="block h-1.5 w-6 rounded-full bg-teal transition-all duration-300" />
                    ) : (
                      <span className="block h-1.5 w-1.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300" />
                    )}
                  </button>
                ))}
              </div>

              {/* Counter matching Photo 2: 01 / 03 */}
              <span className="font-mono text-xs font-bold text-navy/70">
                0{current + 1} / 0{SLIDES.length}
              </span>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-all hover:bg-surface hover:border-slate-300 active:scale-95"
                  aria-label="Slide anterior"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-all hover:bg-surface hover:border-slate-300 active:scale-95"
                  aria-label="Siguiente slide"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
