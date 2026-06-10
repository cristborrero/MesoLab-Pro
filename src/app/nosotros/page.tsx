import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a MesoLab Pro: tu proveedor de referencia para insumos de mesoterapia certificados en Colombia.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <nav className="mb-6 font-label text-xs text-muted">
            <a href="/" className="hover:text-teal-dark">
              Inicio
            </a>{" "}
            / <span className="text-navy">Sobre Nosotros</span>
          </nav>
          <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Ciencia y confianza para tu práctica profesional
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            MesoLab Pro es el proveedor de referencia para profesionales de la
            estética y la medicina estética en Colombia. Ofrecemos insumos de
            mesoterapia certificados, con trazabilidad, presentaciones
            profesionales y entrega confiable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-navy">
              Nuestra misión
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                No vendemos productos: vendemos la tranquilidad de trabajar con
                calidad verificada. Cada ampolleta que distribuimos cuenta con
                trazabilidad completa desde fabricación hasta tu consultorio.
              </p>
              <p>
                Entendemos que cuando un profesional aplica un producto en su
                paciente, está poniendo en juego su reputación y la confianza de
                quien está frente a él. Por eso trabajamos con los más altos
                estándares de calidad, almacenamiento y distribución.
              </p>
              <p>
                Nuestro equipo está formado por profesionales que entienden las
                necesidades del sector estético colombiano. Sabemos que necesitas
                disponibilidad inmediata, precios justos, asesoría técnica y un
                proveedor que responda cuando lo necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold text-navy">
            Nuestros pilares
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "🔬",
                title: "Calidad Certificada",
                description:
                  "Todos nuestros productos cuentan con registro sanitario vigente y cumplen con las normativas de INVIMA. Cada lote es verificado antes de su distribución.",
              },
              {
                icon: "📋",
                title: "Trazabilidad Completa",
                description:
                  "Desde la fabricación hasta la entrega en tu consultorio, cada producto tiene documentación completa de origen, lote y condiciones de almacenamiento.",
              },
              {
                icon: "🤝",
                title: "Soporte Profesional",
                description:
                  "Asesoría técnica disponible por WhatsApp. Nuestro equipo te ayuda con fichas técnicas, protocolos de uso y cualquier duda sobre nuestros productos.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-[var(--radius-lg)] border border-border bg-white p-8 text-center"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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
          <h2 className="font-display text-2xl font-bold text-navy">
            Certificaciones y garantías
          </h2>
          <p className="mt-3 text-muted">
            Trabajamos bajo los estándares regulatorios colombianos
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
                className="flex items-center gap-2 rounded-[var(--radius-md)] bg-white px-5 py-3 shadow-card"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-label text-sm font-medium text-navy">
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
            ¿Listo para trabajar con calidad certificada?
          </h2>
          <p className="mt-3 text-muted">
            Explora nuestro catálogo o contáctanos para una cotización
            personalizada.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/tienda"
              className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-teal px-8 font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
            >
              Ver catálogo
            </Link>
            <Link
              href="/contacto"
              className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] border border-navy/15 px-8 font-medium text-navy transition-colors hover:bg-surface sm:w-auto"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
