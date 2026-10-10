"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20asesoria%20personalizada%20con%20un%20especialista%20de%20MesoLab%20Pro";

export function ConsultationBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-navy text-white shadow-elevated"
        >
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal/15 blur-3xl"
          />

          <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16">
            {/* Left Column: Messaging & CTAs */}
            <div className="lg:col-span-7 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal border border-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Asesoría Especializada 1 a 1
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                ¿Tienes dudas sobre qué equipo o activo elegir?
              </h2>

              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                Nuestros especialistas en aparatología y dermocosmética están disponibles para orientarte según tu tipo de piel o las metas de tu centro estético.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-teal px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,185,181,0.3)] transition-all hover:bg-teal-dark active:scale-[0.98]"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar con un especialista
                </a>

                <Link
                  href="/contacto"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  Formulario de contacto
                </Link>
              </div>
            </div>

            {/* Right Column: Specialists Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/15 shadow-md">
                <Image
                  src="/images/consultation-specialists.webp"
                  alt="Especialistas de MesoLab Pro en asesoría estética"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
