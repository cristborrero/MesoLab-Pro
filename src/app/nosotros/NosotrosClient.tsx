"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Stagger, StaggerItem, HoverCard, SpotlightCard } from "@/components/ui/motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: "Calidad Certificada",
    description:
      "Todos nuestros productos cuentan con registro sanitario vigente y cumplen con las normativas del INVIMA. Cada lote es auditado antes de despacharse.",
    stat: "100%",
    statLabel: "Registros INVIMA vigentes",
    color: "teal",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
    label: "Trazabilidad Completa",
    description:
      "Desde el laboratorio de producción hasta la entrega final en tus manos, cada producto cuenta con un registro exhaustivo de origen y conservación.",
    stat: "5+",
    statLabel: "Años distribuyendo",
    color: "navy",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: "Soporte Profesional",
    description:
      "Asesoría técnica disponible por canales directos. Te proporcionamos fichas de seguridad, sugerencias de almacenamiento y guías analíticas.",
    stat: "24h",
    statLabel: "Tiempo de respuesta",
    color: "teal",
  },
];

const certs = [
  "Registro Sanitario INVIMA",
  "Cadena de Frío Controlada",
  "Trazabilidad de Lote",
  "Almacenamiento Certificado",
];

const timeline = [
  { year: "2019", event: "Fundación de MesoLab Pro en Colombia" },
  { year: "2020", event: "Primera certificación de cadena de frío controlada" },
  { year: "2022", event: "Expansión a distribución nacional certificada" },
  { year: "2024", event: "Más de 500 profesionales confían en nosotros" },
];

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 mt-0.5">
      <path d="M12 4L6 10L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="font-display text-4xl font-extrabold text-teal tabular-nums"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease }}
      >
        {value}
      </motion.p>
      <p className="mt-1 text-[9px] font-label uppercase tracking-widest text-navy/60 font-bold">{label}</p>
    </div>
  );
}

export function NosotrosClient() {
  return (
    <>
      {/* ─── HERO STACKED WITH BACKGROUND BANNER & TEAL ACCENT ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f7fafa] pt-20 pb-24 lg:pt-28 lg:pb-36 flex items-center justify-center">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main-nosotros-mesolabpro.webp"
            alt="MesoLab Pro Nosotros"
            fill
            priority
            className="object-cover object-center opacity-[0.38] mix-blend-multiply"
            sizes="100vw"
          />
          {/* Color grading overlay playing with white, light teal, and Teal (#00cece) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-[#00cece]/15 to-[#f7fafa]" />
          {/* Ambient glowing spotlight using #00cece (teal) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] rounded-full bg-teal/20 blur-[100px] pointer-events-none" />
          {/* Bottom gradient mask to blend smoothly with the #f7fafa section below */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7fafa] via-[#f7fafa]/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <FadeIn variant="fadeDown" duration={0.5}>
            <nav className="mb-6 font-label text-[10px] uppercase tracking-widest text-teal-dark/80">
              <Link href="/" className="transition-colors hover:text-teal">
                Inicio
              </Link>{" "}
              / <span className="text-navy/60 font-medium">Sobre Nosotros</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.05} duration={0.65}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light border border-teal/20 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Compromiso Científico
            </span>
          </FadeIn>

          <FadeIn delay={0.1} duration={0.7}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              Ciencia y confianza para{" "}
              <span className="text-[#00cece]">
                tu práctica profesional
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} duration={0.65}>
            <p className="mt-6 text-base leading-relaxed text-navy/70 max-w-2xl mx-auto font-medium">
              MesoLab Pro es el proveedor de referencia para profesionales de la
              estética y la medicina estética en Colombia. Insumos certificados,
              trazabilidad completa y entrega confiable en tu consultorio.
            </p>
          </FadeIn>

          {/* Translucent Stats bar with Teal stats */}
          <FadeIn delay={0.28} duration={0.6} className="mt-14">
            <div className="inline-flex flex-wrap justify-center gap-8 sm:gap-16 rounded-2xl border border-teal/15 bg-white/80 px-8 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
              <StatCounter value="500+" label="Profesionales activos" />
              <div className="hidden sm:block w-px bg-navy/10" />
              <StatCounter value="100%" label="Registros INVIMA" />
              <div className="hidden sm:block w-px bg-navy/10" />
              <StatCounter value="5+" label="Años de experiencia" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MISIÓN ─── */}
      <section className="relative overflow-hidden bg-[#f7fafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left: text */}
            <FadeIn variant="fadeRight" duration={0.65}>
              <div>
                <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">
                  Propósito Clínico
                </span>
                <h2 className="font-display mt-2 text-3xl font-bold text-navy lg:text-4xl">
                  Nuestra misión
                </h2>
                <div className="mt-6 space-y-4 text-muted text-[15px] leading-relaxed">
                  <p>
                    No distribuimos simples viales: te brindamos la tranquilidad de
                    trabajar con calidad verificada. Cada ampolleta cuenta con
                    trazabilidad completa desde el laboratorio hasta tu consultorio.
                  </p>
                  <p>
                    Entendemos que al aplicar un principio activo en tu paciente,
                    estás comprometiendo tu prestigio profesional y la confianza de
                    quien deposita su salud en tus manos. Por eso, no tomamos
                    atajos.
                  </p>
                  <p>
                    Nuestro equipo está compuesto por profesionales que entienden el
                    ritmo de tu práctica clínica: disponibilidad inmediata, precios
                    coherentes sin intermediarios y soporte técnico real.
                  </p>
                </div>

                <ul className="mt-8 space-y-2.5">
                  {[
                    "Distribución directa sin intermediarios",
                    "Cadena de frío garantizada desde origen",
                    "Fichas técnicas con cada despacho",
                    "Respaldo INVIMA en cada producto",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy font-medium">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal-dark">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right: timeline */}
            <FadeIn variant="fadeLeft" delay={0.1} duration={0.65}>
              <div className="relative">
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-teal/30 via-teal/20 to-transparent" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      className="relative pl-14"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease }}
                    >
                      <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal/20 bg-white text-xs font-bold font-label text-teal-dark shadow-sm">
                        {item.year.slice(2)}
                      </div>
                      <p className="font-label text-[10px] font-semibold uppercase tracking-widest text-teal-dark">
                        {item.year}
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-navy font-medium">
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PILARES ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">
              Valores Fundacionales
            </span>
            <h2 className="font-display mt-2 text-3xl font-bold text-navy lg:text-4xl">
              Nuestros Pilares
            </h2>
          </FadeIn>

          <Stagger className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.label}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-white p-8 cursor-default shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-teal/25 transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light/70 text-teal-dark border border-teal/10 mb-5">
                    {pillar.icon}
                  </div>
                  <div className="mb-1 font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">
                    {pillar.stat} · {pillar.statLabel}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-3">
                    {pillar.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CERTIFICACIONES ─── */}
      <section className="bg-navy/30 py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/molecular-bg-mesolabpro.webp"
            alt="MesoLab Pro Certificaciones Background"
            fill
            className="object-cover object-center opacity-[0.35] mix-blend-multiply"
            sizes="100vw"
          />
          {/* Fade overlays to blend edges with adjacent sections */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f7fafa] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          {/* Decorative gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[120px]"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
          <FadeIn>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">
              Seguridad Validada
            </span>
            <h2 className="font-display mt-2 text-3xl font-bold text-navy lg:text-4xl">
              Certificaciones y Garantías
            </h2>
            <p className="mt-3 text-sm text-navy/60 max-w-md mx-auto font-medium">
              Operamos bajo los marcos regulatorios y sanitarios de la República
              de Colombia.
            </p>
          </FadeIn>

          <Stagger className="mt-12 flex flex-wrap items-center justify-center gap-4" slow>
            {certs.map((cert) => (
              <StaggerItem key={cert}>
                <motion.div
                  className="flex items-center gap-2.5 rounded-xl border border-navy/10 bg-white/70 backdrop-blur-sm px-5 py-3.5 cursor-default"
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderColor: "rgba(0,206,206,0.4)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-teal-dark shrink-0">
                    <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-label text-xs font-semibold text-navy/80 uppercase tracking-wide">
                    {cert}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-teal-light/20 to-transparent"
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center lg:px-8">
          <FadeIn variant="scaleIn" duration={0.6}>
            <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl">
              ¿Buscas trabajar con calidad certificada?
            </h2>
            <p className="mt-4 text-[15px] text-muted max-w-md mx-auto">
              Explora nuestro catálogo o ponte en contacto para coordinar una
              cotización personalizada para tu clínica.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/tienda"
                  className="flex h-12 items-center justify-center rounded-xl bg-teal px-8 font-semibold text-white transition-colors hover:bg-teal-dark shadow-sm hover:shadow-[0_4px_20px_rgba(0,206,206,0.3)]"
                >
                  Ver Catálogo
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contacto"
                  className="flex h-12 items-center justify-center rounded-xl border border-navy/15 bg-white px-8 font-medium text-navy transition-all hover:bg-surface hover:border-navy/25"
                >
                  Contacto
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
