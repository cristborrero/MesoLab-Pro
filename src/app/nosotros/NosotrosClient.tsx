"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Entrega Sin Riesgo",
    headline: "Pago Contra Entrega en todo el país",
    description:
      "Compra con total certeza. Despachamos tu pedido con transportadoras aliadas y pagas únicamente cuando el producto llega a tus manos, en efectivo o transferencia.",
    badge: "100% Cobertura",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: "Eficacia Clínica",
    headline: "Tecnología testeada y activos puros",
    description:
      "Seleccionamos minuciosamente cada dispositivo Beauty Tech y fórmula dermo-activa. Sin promesas vacías: especificaciones técnicas transparentes y resultados comprobables.",
    badge: "Calidad Certificada",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: "Acompañamiento 1 a 1",
    headline: "Asesoría humana antes y después de comprar",
    description:
      "Nuestro equipo te orienta por WhatsApp sobre modos de uso, compatibilidad con tu tipo de piel y protocolos de cabina para sacar el máximo rendimiento a tu inversión.",
    badge: "Soporte Directo",
  },
];

const certs = [
  "Pago Contra Entrega en toda Colombia",
  "Dispositivos con Certificación CE / RoHS",
  "Garantía directa de 30 a 90 días en equipos",
  "Envíos asegurados con guía de rastreo",
  "Línea profesional con trazabilidad sanitaria",
];

const timeline = [
  { year: "2019", title: "Origen clínico", event: "Nacimiento de MesoLab Pro en Colombia como distribuidor de insumos de mesoterapia y cabina." },
  { year: "2021", title: "Cadena de custodia", event: "Consolidación de red logística directa y despacho seguro a las principales ciudades del país." },
  { year: "2024", title: "Comunidad en crecimiento", event: "Más de 15.000 clientes particulares y profesionales del cuidado estético eligen nuestras soluciones." },
  { year: "2026", title: "Ecosistema integral", event: "Fusión de aparatología Beauty Tech, cosmecéutica formulada y compras protegidas con Pago Contra Entrega." },
];

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 mt-0.5 text-teal">
      <path d="M12 4L6 10L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="text-center px-4">
      <motion.p
        className="font-display text-3xl sm:text-4xl font-extrabold text-navy tracking-tight tabular-nums"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease }}
      >
        {value}
      </motion.p>
      <p className="mt-1 text-xs font-medium text-navy/70">{label}</p>
    </div>
  );
}

export function NosotrosClient() {
  return (
    <>
      {/* ─── HERO EDITORIAL CONTEXT ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/main-nosotros-mesolabpro.webp"
            alt="Laboratorio MesoLab Pro"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-multiply"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn variant="fadeDown" duration={0.4}>
            <nav className="mb-6 flex justify-center text-xs font-medium text-navy/60">
              <Link href="/" className="hover:text-navy transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-navy/40">/</span>
              <span className="text-navy font-semibold">Nosotros</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.08} duration={0.6}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.12]">
              Ciencia estética, tecnología clínica y honestidad en cada entrega
            </h1>
          </FadeIn>

          <FadeIn delay={0.16} duration={0.6}>
            <p className="mt-6 text-lg leading-relaxed text-navy/75 max-w-2xl mx-auto font-normal">
              Democratizamos el cuidado estético de alto rendimiento en Colombia. Integramos aparatología Beauty Tech, cosmecéutica formulada y suministros profesionales con envíos asegurados y servicio de Pago Contra Entrega.
            </p>
          </FadeIn>

          {/* Integrated Trust Strip */}
          <FadeIn delay={0.24} duration={0.6} className="mt-12">
            <div className="inline-grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-navy/10 rounded-2xl border border-navy/10 bg-white/90 p-6 backdrop-blur-md">
              <StatCounter value="+15.000" label="Clientes satisfechos en Colombia" />
              <StatCounter value="100%" label="Pago Contra Entrega disponible" />
              <StatCounter value="32" label="Departamentos con cobertura directa" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MISIÓN & ENFOQUE ─── */}
      <section className="py-20 lg:py-28 bg-[#f7fafa] border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Left: Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn duration={0.5}>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy leading-tight">
                  Tratamientos efectivos al alcance de tu hogar y de tu cabina
                </h2>
              </FadeIn>

              <FadeIn delay={0.08} duration={0.6} className="space-y-4 text-base leading-relaxed text-navy/75">
                <p>
                  Creemos firmemente que el cuidado estético de vanguardia no debe reservarse únicamente a procedimientos de difícil acceso, ni depender de aparatos genéricos sin respaldo técnico. En MesoLab Pro seleccionamos dispositivos portátiles con tecnologías comprobadas —fototerapia LED, radiofrecuencia, cavitación y microcorrientes— para que veas mejoras tangibles día a día.
                </p>
                <p>
                  Para clínicas, médicos y profesionales de la estética, mantenemos una división especializada con protocolos rigurosos, trazabilidad y asesoramiento continuo.
                </p>
                <p>
                  Operamos con un principio elemental: transparencia total. Cuentas con atención directa de personas reales a través de WhatsApp y la seguridad de pagar únicamente cuando tienes el pedido físicamente en tus manos.
                </p>
              </FadeIn>

              <FadeIn delay={0.16} duration={0.5}>
                <ul className="mt-8 space-y-3 pt-2">
                  {[
                    "Envíos garantizados a nivel nacional con opción de Pago Contra Entrega",
                    "Dispositivos Beauty Tech revisados y con certificados CE / RoHS",
                    "Acompañamiento personalizado vía WhatsApp para resolver dudas de uso",
                    "Portafolio profesional con estándares estrictos de calidad y procedencia",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy font-medium">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal-accessible">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.12} duration={0.6}>
                <div className="rounded-2xl border border-navy/10 bg-white p-7 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-navy mb-6">
                    Nuestra trayectoria
                  </h3>
                  <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-navy/15">
                    {timeline.map((item) => (
                      <div key={item.year} className="relative group">
                        <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal shadow-xs" />
                        <span className="text-xs font-bold text-teal-accessible font-label uppercase tracking-wider">
                          {item.year} — {item.title}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-navy/70">
                          {item.event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILARES EDITORIALES ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
              Pilares que definen el estándar MesoLab Pro
            </h2>
            <p className="mt-4 text-base text-navy/70">
              Construimos confianza mediante procesos verificables, atención humana y una logística diseñada para resolver cada etapa de tu compra.
            </p>
          </FadeIn>

          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.label}>
                <div className="flex flex-col h-full rounded-2xl border border-navy/10 bg-white p-8 transition-colors duration-200 hover:border-teal/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-light text-teal-accessible">
                      {pillar.icon}
                    </div>
                    <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold text-navy/80">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {pillar.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/70 flex-1">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CERTIFICACIONES & GARANTÍAS ─── */}
      <section className="py-18 lg:py-24 bg-[#f7fafa] border-t border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-navy">
              Respaldo normativo y garantías claras
            </h2>
            <p className="mt-3 text-sm text-navy/70">
              Operamos con apego a las normas sanitarias y comerciales vigentes en la República de Colombia.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2.5 rounded-xl border border-navy/10 bg-white px-5 py-3 text-xs font-semibold text-navy/85"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-teal shrink-0">
                  <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA DIRECTO ─── */}
      <section className="py-20 lg:py-24 bg-white border-t border-navy/10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn duration={0.5}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
              Encuentra la tecnología ideal para tu rutina
            </h2>
            <p className="mt-4 text-base text-navy/70 max-w-xl mx-auto">
              Explora nuestro catálogo con precios en pesos colombianos o contáctanos directamente para asesorarte con el equipo adecuado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tienda"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-teal px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark shadow-xs"
              >
                Explorar Catálogo
              </Link>
              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-navy/20 bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-mist"
              >
                Contactar Asesor
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
