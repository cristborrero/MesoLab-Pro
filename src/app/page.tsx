import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProducts, getCategories } from "@/lib/woocommerce";
import { FeaturedProductsSection } from "@/components/home/FeaturedProducts";
import { HeroVideo } from "@/components/home/HeroVideo";
import { FadeIn, Stagger, StaggerItem, HoverCard, SpotlightCard } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "MesoLab Pro | Insumos de Mesoterapia Certificados en Colombia",
  description:
    "Optimiza la precisión de tus tratamientos con insumos de mesoterapia de alta pureza. Distribución autorizada con registro INVIMA en Bogotá y a nivel nacional.",
};

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido";

export default async function HomePage() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.filter((p) => p.featured);
  const categories = await getCategories();



  // Diccionario de configuración de categorías para asegurar mapeo de tamaño y etiquetas correcto
  const CATEGORY_CONFIG: Record<string, { label: string; isLarge: boolean }> = {
    lipoliticos: { label: "Línea Reductora", isLarge: true },
    vitaminicos: { label: "Línea Nutritiva", isLarge: false },
    anestesicos: { label: "Línea de Base", isLarge: false },
    insumos: { label: "Consumibles", isLarge: true },
  };

  return (
    <>
      {/* ─── HERO VIDEO CON PARALLAX ─── */}
      <HeroVideo />


      {/* ─── BENTO GRID DE CATEGORÍAS ─── */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Categorías
            </h2>
            <p className="mt-2 text-sm text-muted">
              Encuentra los insumos que necesitas para tu práctica profesional
            </p>
          </FadeIn>

          {/* Bento Grid layout */}
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {categories.slice(0, 4).map((category) => {
              // Obtener la configuración de estilo y etiqueta para esta categoría
              const config = CATEGORY_CONFIG[category.slug] || {
                label: "Línea Profesional",
                isLarge: false,
              };

              const colSpan = config.isLarge ? "md:col-span-2" : "md:col-span-1";
              const minHeight = config.isLarge ? "min-h-[300px]" : "min-h-[240px]";

              return (
                <StaggerItem key={category.slug} className={colSpan}>
                  <HoverCard lift={3} className="h-full">
                    <Link
                      href={`/tienda/${category.slug}`}
                      className={`group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-8 overflow-hidden h-full ${minHeight}`}
                    >
                      {/* Background Image filling the right side and blending into the white background */}
                      {category.image && (
                        <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
                          <div className="absolute right-0 top-0 w-[70%] h-full">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover object-right mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes={config.isLarge ? "600px" : "350px"}
                            />
                          </div>
                          {/* Gradient covering the entire card to melt the image from left to right */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
                        </div>
                      )}

                      {/* Clean text container (max 50% width to stay on solid background) */}
                      <div className="relative z-20 max-w-[50%] flex flex-col h-full justify-between">
                        <div>
                          <span className="inline-block font-label text-[9px] font-bold uppercase tracking-widest text-teal-dark bg-teal-light px-2.5 py-1 rounded">
                            {config.label}
                          </span>
                          <h3
                            className={`font-display font-bold text-navy mt-4 ${
                              config.isLarge ? "text-2xl" : "text-xl"
                            }`}
                          >
                            {category.name}
                          </h3>
                        </div>

                        <div className="mt-6 flex flex-col gap-1">
                          <span className="font-label text-[10px] text-muted">
                            {category.productCount}{" "}
                            {category.productCount === 1 ? "producto" : "productos"}
                          </span>
                          <span className="font-bold text-teal-dark text-xs md:text-sm group-hover:underline">
                            Ver catálogo →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <FadeIn>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Catálogo Seleccionado</span>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl mt-1">
                Productos Destacados
              </h2>
            </FadeIn>
            <FadeIn>
              <Link
                href="/tienda"
                className="hidden text-sm font-semibold text-teal-dark transition-colors hover:underline sm:inline-flex"
              >
                Ver todo →
              </Link>
            </FadeIn>
          </div>

          <FeaturedProductsSection products={featuredProducts} />

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/tienda"
              className="text-sm font-semibold text-teal-dark hover:underline"
            >
              Ver todo el catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRUEBA SOCIAL / INFINITE MARQUEE SLIDER ─── */}
      <section className="bg-surface py-12 border-t border-b border-border/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-6">
          <h3 className="text-center font-label text-[10px] font-bold uppercase tracking-widest text-muted/70">
            Médicos y Clínicas Estéticas Aliadas
          </h3>
        </div>
        <div className="relative w-full overflow-hidden">
          {/* Fading side masks for marquee visual premium */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
          
          <div className="animate-marquee flex gap-12 whitespace-nowrap">
            {[
              "Dra. Carolina Martínez • Derma",
              "INVIMA Registro Sanitario Vigente",
              "Clínica Cutis Bogotá",
              "Dr. Alejandro Gómez • Medicina Estética",
              "Calidad Certificada ISO 13485",
              "Dra. Laura Rojas • Cirugía Plástica",
              "Clínica Renacer Cali",
              "Trazabilidad Controlada por Lote",
              "Dra. Carolina Martínez • Derma",
              "INVIMA Registro Sanitario Vigente",
              "Clínica Cutis Bogotá",
              "Dr. Alejandro Gómez • Medicina Estética",
              "Calidad Certificada ISO 13485",
              "Dra. Laura Rojas • Cirugía Plástica",
              "Clínica Renacer Cali",
              "Trazabilidad Controlada por Lote"
            ].map((text, idx) => (
              <span key={idx} className="font-display text-sm font-semibold text-navy/50 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST PILLARS SECTION ─── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Stagger className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-8 w-8 text-teal-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                ),
                title: "Garantía de Origen",
                description:
                  "Trazabilidad documental total de cada ampolleta. Registro INVIMA verificado.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-teal-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                ),
                title: "Cadena de Custodia",
                description:
                  "Embalaje térmico controlado para mantener la temperatura óptima de los principios activos.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-teal-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                  </svg>
                ),
                title: "Atención Especializada",
                description:
                  "Asesoría de farmacéuticos matriculados para guiar tu compra o resolver consultas de protocolos.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <SpotlightCard lift={2} className="h-full rounded-2xl bg-surface/50 p-8 text-center border border-border/40 flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm border border-border/50 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted relative z-10">
                    {item.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-16 lg:py-24 bg-surface/40 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <FadeIn duration={0.65}>
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-teal to-teal-dark text-white font-display text-2xl font-bold shadow-md">
                CM
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm border border-border">
                  <svg className="h-3.5 w-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                </span>
              </div>

              <blockquote className="text-center md:text-left">
                <p className="font-display text-xl font-medium leading-relaxed text-navy sm:text-2xl">
                  &ldquo;Desde que trabajo con MesoLab Pro, mis pacientes notan la
                  diferencia en los resultados. La trazabilidad y la calidad de los
                  productos me dan la confianza que necesito.&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-semibold text-navy">Dra. Carolina Martínez</p>
                  <p className="font-label text-xs uppercase tracking-wider text-muted mt-0.5">
                    Medicina Estética · Reg. Médico 18402-5 · Bogotá
                  </p>
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA BANNER WITH INTERACTIVE SPOTLIGHT ─── */}
      <SpotlightCard lift={0} className="bg-navy relative overflow-hidden py-16 lg:py-20 w-full rounded-none border-none">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-teal/10 blur-[100px]"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center lg:px-8 z-10">
          <FadeIn variant="scaleIn" duration={0.65}>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              ¿Necesitas un pedido personalizado?
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70 mx-auto">
              Atendemos pedidos por volumen, cotizaciones especiales y asesoría
              técnica para tu práctica profesional.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row w-full sm:w-auto justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 font-semibold text-white transition-all hover:bg-[#22bf5b] hover:shadow-[0_4px_20px_rgba(37,211,102,0.25)] sm:w-auto"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="flex h-12 w-full items-center justify-center rounded-xl border border-white/20 px-8 font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                Contacto
              </Link>
            </div>
          </FadeIn>
        </div>
      </SpotlightCard>
    </>
  );
}
