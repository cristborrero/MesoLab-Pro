import Link from "next/link";
import { categories, getFeaturedProducts } from "@/lib/data";
import { FeaturedProductsSection } from "@/components/home/FeaturedProducts";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Ciencia en cada
              <br />
              <span className="text-teal-dark">ampolleta.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              Insumos de mesoterapia certificados para profesionales de la
              estética y medicina estética en Colombia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Link
                href="/tienda"
                className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-teal px-8 text-base font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
              >
                Ver catálogo
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-navy/15 px-8 text-base font-medium text-navy transition-colors hover:bg-surface sm:w-auto"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-whatsapp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-[var(--radius-xl)] bg-surface sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
              <span className="text-8xl sm:text-9xl">🧬</span>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[var(--radius-xl)] border-2 border-teal/20" />
              <div className="absolute -inset-3 rounded-[20px] border border-teal/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Categorías
            </h2>
            <p className="mt-2 text-muted">
              Encuentra los insumos que necesitas para tu práctica profesional
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tienda/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-white p-6 text-center transition-all hover:border-teal/30 hover:shadow-elevated"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-display text-base font-semibold text-navy">
                  {cat.name}
                </h3>
                <p className="font-label text-xs text-muted">
                  {cat.productCount} producto
                  {cat.productCount !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Productos destacados
              </h2>
              <p className="mt-2 text-muted">
                Los más utilizados por profesionales
              </p>
            </div>
            <Link
              href="/tienda"
              className="hidden text-sm font-medium text-teal-dark transition-colors hover:underline sm:inline-flex"
            >
              Ver todo →
            </Link>
          </div>

          <FeaturedProductsSection products={featuredProducts} />

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/tienda"
              className="text-sm font-medium text-teal-dark hover:underline"
            >
              Ver todo el catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: "🛡️",
                title: "Productos Certificados",
                description:
                  "Todos nuestros productos cuentan con registro sanitario vigente y trazabilidad completa.",
              },
              {
                icon: "🚚",
                title: "Envío a toda Colombia",
                description:
                  "Despachos rápidos a nivel nacional con embalaje profesional para productos sensibles.",
              },
              {
                icon: "🎧",
                title: "Soporte Profesional",
                description:
                  "Asesoría técnica por WhatsApp. Resolvemos tus dudas sobre productos y protocolos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-white p-8 text-center shadow-card"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <blockquote>
            <p className="font-display text-xl font-medium leading-relaxed text-navy sm:text-2xl">
              &ldquo;Desde que trabajo con MesoLab Pro, mis pacientes notan la
              diferencia en los resultados. La trazabilidad y la calidad de los
              productos me dan la confianza que necesito.&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-semibold text-navy">Dra. Carolina Martínez</p>
              <p className="font-label text-sm text-muted">
                Medicina Estética · Bogotá
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            ¿Necesitas un pedido personalizado?
          </h2>
          <p className="max-w-md text-white/70">
            Atendemos pedidos por volumen, cotizaciones especiales y asesoría
            técnica para tu práctica profesional.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-whatsapp px-8 font-semibold text-white transition-colors hover:bg-[#22bf5b]"
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
              className="flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-white/20 px-8 font-medium text-white transition-colors hover:bg-white/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
