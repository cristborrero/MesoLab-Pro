"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/motion";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido";

export function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy"
      style={{ minHeight: "100vh" }}
    >
      {/* ─── VIDEO BACKGROUND WITH PARALLAX ─── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: videoY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover scale-110"
          style={{ minHeight: "120%" }}
        >
          <source
            src="https://api.mesolabpro.com.co/wp-content/uploads/2026/06/woman-facial-treatment-mesolabpro-low.mp4"
            type="video/mp4"
          />
        </video>

        {/* Color grading overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />
        <div className="absolute inset-0 bg-[#00cece]/8 mix-blend-overlay" />
      </motion.div>

      {/* ─── BOTTOM GRADIENT FADE ─── */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none" />

      {/* ─── HERO CONTENT WITH SCROLL FADE ─── */}
      <motion.div
        className="relative z-20 mx-auto max-w-4xl px-4 text-center lg:px-8 flex flex-col items-center justify-center"
        style={{
          opacity: contentOpacity,
          y: contentY,
          minHeight: "100vh",
          paddingTop: "6rem",
          paddingBottom: "10rem",
        }}
      >
        <FadeIn variant="fadeDown" duration={0.45}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1.5 font-label text-[10px] font-bold uppercase tracking-widest text-white/90 mb-6 border border-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Suministros de Alta Precisión Clínica
          </span>
        </FadeIn>

        <FadeIn delay={0.08} duration={0.65}>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            Optimiza tus protocolos con
            <br />
            <span className="text-[#00cece]">
              insumos de precisión médica.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.16} duration={0.6}>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg max-w-2xl font-medium">
            Desbloquea resultados predecibles y seguros en cada ampolleta.
            Proporcionamos soluciones de mesoterapia certificadas con trazabilidad
            completa y respaldo INVIMA para profesionales exigentes de la estética
            en Colombia.
          </p>
        </FadeIn>

        <FadeIn delay={0.24} duration={0.55} className="w-full">
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row w-full justify-center">
            <Link
              href="/tienda"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-teal px-8 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(0,206,206,0.3)] sm:w-auto"
            >
              Explorar Catálogo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-8 text-base font-medium text-white transition-all hover:bg-white/20 active:scale-[0.98] sm:w-auto"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#25D366]"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Asesoría Inmediata
            </a>
          </div>
        </FadeIn>
      </motion.div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: contentOpacity }}
      >
        <span className="font-label text-[9px] uppercase tracking-[0.2em] text-white/40">Explorar</span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
