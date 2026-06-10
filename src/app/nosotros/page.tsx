import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conocé a MesoLab Pro: tu proveedor de referencia para insumos de mesoterapia certificados en Colombia.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <nav className="mb-6 font-label text-[10px] uppercase tracking-widest text-muted">
            <Link href="/" className="hover:text-teal-dark">
              Inicio
            </Link>{" "}
            / <span className="text-navy">Sobre Nosotros</span>
          </nav>
          <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl leading-tight">
            Ciencia y confianza para tu práctica profesional
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            MesoLab Pro es el proveedor de referencia para profesionales de la
            estética y la medicina estética en Colombia. Ofrecemos insumos de
            mesoterapia certificados, con trazabilidad completa, presentaciones
            profesionales y entrega confiable en tu clínica o consultorio.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Propósito Clínico</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-1">
              Nuestra misión
            </h2>
            <div className="mt-6 space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                No distribuimos simples viales: te brindamos la tranquilidad de trabajar con
                calidad verificada. Cada ampolleta que llega a tus manos cuenta con
                trazabilidad completa desde el laboratorio de fabricación hasta tu consultorio.
              </p>
              <p>
                Entendemos que al aplicar un principio activo en tu paciente, estás comprometiendo tu 
                prestigio profesional y la confianza de quien deposita su salud en tus manos. Por eso, 
                no tomamos atajos: nos regimos por los estándares de almacenamiento y distribución más estrictos.
              </p>
              <p>
                Nuestro equipo está compuesto por profesionales que entienden el ritmo de tu práctica clínica. 
                Sabemos que necesitás disponibilidad inmediata, precios coherentes sin intermediarios, 
                fichas técnicas claras y un soporte técnico que responda cuando de verdad importa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pilares with SVGs instead of emojis */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Valores Fundacionales</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-1">
              Nuestros Pilares
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
                  </svg>
                ),
                title: "Calidad Certificada",
                description:
                  "Todos nuestros productos cuentan con registro sanitario vigente y cumplen con las normativas del INVIMA. Cada lote es auditado antes de despacharse.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24A9.019 9.019 0 0112 15.75c-1.93 0-3.69-.607-5.127-1.644m11.254-4.855A9.019 9.019 0 0112 15.75c-1.93 0-3.69-.607-5.127-1.644" />
                  </svg>
                ),
                title: "Trazabilidad Completa",
                description:
                  "Desde el laboratorio de producción hasta la entrega final en tus manos, cada producto cuenta con un registro exhaustivo de origen y conservación.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Soporte Profesional",
                description:
                  "Asesoría técnica disponible por canales directos. Te proporcionamos fichas de seguridad, sugerencias de almacenamiento y guías analíticas.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-[var(--radius-lg)] border border-border bg-white p-8 text-center flex flex-col items-center gap-2 hover:border-teal/30 hover:shadow-card transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-teal-dark mb-2">
                  {value.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted mt-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Seguridad Validada</span>
          <h2 className="font-display text-2xl font-bold text-navy mt-1">
            Certificaciones y Garantías
          </h2>
          <p className="mt-3 text-sm text-muted">
            Operamos bajo los marcos regulatorios y sanitarios de la República de Colombia.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {[
              "Registro Sanitario INVIMA",
              "Cadena de Frío Controlada",
              "Trazabilidad de Lote",
              "Almacenamiento Certificado",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2.5 rounded-[var(--radius-md)] bg-white px-5 py-3 shadow-sm border border-border/50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-success"
                >
                  <path
                    d="M13.5 4.5L6.5 11.5L2.5 7.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-label text-xs font-semibold text-navy uppercase tracking-wide">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy">
            ¿Buscás trabajar con calidad certificada?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Explorá nuestro catálogo o ponete en contacto para coordinar una cotización personalizada.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/tienda"
              className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-teal px-8 font-semibold text-white transition-all hover:bg-teal-dark active:scale-[0.98] sm:w-auto shadow-sm"
            >
              Ver Catálogo
            </Link>
            <Link
              href="/contacto"
              className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] border border-navy/15 bg-white px-8 font-medium text-navy transition-all hover:bg-surface active:scale-[0.98] sm:w-auto"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
