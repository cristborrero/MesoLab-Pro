"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

const SECTIONS = [
  { id: "alcance", title: "1. Alcance y Consentimiento" },
  { id: "tipos", title: "2. Tipos de Cookies Utilizadas" },
  { id: "tabla", title: "3. Tabla Detallada de Cookies" },
  { id: "desactivar", title: "4. Gestión y Desactivación" },
];

const COOKIES_DATA = [
  {
    name: "woocommerce_cart_hash",
    type: "Esencial",
    purpose: "Gestión del carrito de compras",
    origin: "Propia",
    duration: "Sesión",
  },
  {
    name: "woocommerce_items_in_cart",
    type: "Esencial",
    purpose: "Registro de ítems en el carrito",
    origin: "Propia",
    duration: "Sesión",
  },
  {
    name: "_ga",
    type: "Rendimiento",
    purpose: "Medición agregada de visitas (Google Analytics)",
    origin: "Tercero",
    duration: "2 años",
  },
  {
    name: "_fbp",
    type: "Marketing",
    purpose: "Medición y remarketing en Facebook",
    origin: "Tercero",
    duration: "3 meses",
  },
];

export function CookiesClient() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f7fafa] pt-20 pb-16 lg:pt-24 lg:pb-20 border-b border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-teal/10 blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn variant="fadeDown" duration={0.5}>
            <nav className="mb-6 font-label text-[10px] uppercase tracking-widest text-muted">
              <Link href="/" className="transition-colors hover:text-teal-dark">
                Inicio
              </Link>{" "}
              / <span className="text-navy font-medium">Política de cookies</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Política de <br />
              <span className="text-[#00cece]">Cookies</span>
            </h1>
            <p className="mt-4 text-sm text-muted max-w-2xl font-medium">
              En mesolabpro.com.co utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento del sitio, recordar tus preferencias y optimizar tu experiencia de compra.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-20 bg-[#f7fafa]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            
            {/* Sidebar Sticky Navigation (visible on desktop) */}
            <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
                <h3 className="font-display text-[10px] font-bold uppercase tracking-wider text-muted mb-4 border-b border-border pb-3">
                  Secciones
                </h3>
                <nav className="flex flex-col gap-2">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="text-left text-xs font-semibold text-navy/70 hover:text-teal-dark transition-colors py-1 cursor-pointer leading-relaxed"
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Legal Content */}
            <main className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-card space-y-10 text-navy/80 text-[14px] leading-relaxed">
                
                {/* Alcance */}
                <div id="alcance" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    1. Alcance y Consentimiento
                  </h2>
                  <p>
                    Esta política describe el uso de cookies, web beacons y tecnologías similares en el sitio web <strong>mesolabpro.com.co</strong>. Está redactada en consonancia con las guías de transparencia y responsabilidad demostrada de la Superintendencia de Industria y Comercio (SIC) de Colombia.
                  </p>
                  <p>
                    Al acceder y navegar en nuestro portal, se instalarán de manera automática las cookies catalogadas como <strong>esenciales</strong> para la funcionalidad técnica de la tienda. El almacenamiento de cookies no esenciales se basará 100% en tu consentimiento informado, el cual podés otorgar, rechazar o configurar libremente en el banner interactivo del sitio web.
                  </p>
                </div>

                {/* Tipos */}
                <div id="tipos" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    2. Tipos de Cookies Utilizadas
                  </h2>
                  <p>
                    De acuerdo con las directrices regulatorias vigentes, clasificamos las cookies del sitio en:
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-teal/40">
                    <li>
                      <strong>Cookies esenciales (Técnicas):</strong> Necesarias para el funcionamiento básico del sistema de comercio electrónico. Permiten gestionar el estado del carrito de compras, recordar los ítems agregados durante la sesión, autenticar el ingreso seguro al checkout y prevenir vulnerabilidades de sesión. No pueden ser desactivadas ya que el sitio web dejaría de operar correctamente.
                    </li>
                    <li>
                      <strong>Cookies funcionales:</strong> Permiten que el portal recuerde decisiones previas que has tomado para personalizar tu experiencia, tales como la ciudad de envío preferida o el idioma seleccionado.
                    </li>
                    <li>
                      <strong>Cookies de rendimiento (Analíticas):</strong> Recopilan información agregada y anónima sobre el comportamiento de los usuarios (páginas visitadas, tiempos de carga, errores técnicos). Nos ayudan a medir la velocidad del portal y corregir problemas de navegación.
                    </li>
                    <li>
                      <strong>Cookies de marketing (Publicitarias):</strong> Utilizadas para perfilar y mostrar anuncios personalizados según tus intereses específicos en plataformas de terceros (como redes sociales o motores de búsqueda) y medir la efectividad de nuestras campañas publicitarias de insumos profesionales.
                    </li>
                  </ul>
                </div>

                {/* Tabla */}
                <div id="tabla" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    3. Tabla Detallada de Cookies
                  </h2>
                  <p>
                    A continuación, listamos las cookies principales utilizadas en nuestra plataforma para que conozcas su origen, propósito y ciclo de vida:
                  </p>
                  
                  <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                    <table className="w-full border-collapse text-left text-xs">
                      <thead>
                        <tr className="bg-surface/60 font-semibold text-navy border-b border-border">
                          <th className="px-4 py-3 font-display">Identificador</th>
                          <th className="px-4 py-3 font-display">Categoría</th>
                          <th className="px-4 py-3 font-display">Finalidad</th>
                          <th className="px-4 py-3 font-display">Origen</th>
                          <th className="px-4 py-3 font-display">Duración</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-white text-navy/70">
                        {COOKIES_DATA.map((cookie) => (
                          <tr key={cookie.name} className="hover:bg-surface/20 transition-colors">
                            <td className="px-4 py-3 font-mono font-bold text-teal-dark">{cookie.name}</td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                cookie.type === "Esencial" 
                                  ? "bg-navy/10 text-navy"
                                  : cookie.type === "Rendimiento"
                                  ? "bg-teal-light text-teal-dark"
                                  : "bg-teal text-white"
                              }`}>
                                {cookie.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-medium">{cookie.purpose}</td>
                            <td className="px-4 py-3">{cookie.origin}</td>
                            <td className="px-4 py-3 font-mono">{cookie.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Desactivar */}
                <div id="desactivar" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    4. Gestión y Desactivación de Cookies
                  </h2>
                  <p>
                    Tenés el control absoluto sobre qué cookies deseas almacenar en tu equipo (a excepción de las esenciales):
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Panel de Preferencias:</strong> Podés cambiar o revocar tu consentimiento en cualquier momento a través del banner interactivo o del enlace de configuración de cookies en el pie de página.
                    </li>
                    <li>
                      <strong>Ajustes del Navegador:</strong> Todos los navegadores modernos permiten deshabilitar, restringir o borrar las cookies del disco duro. Podés hacerlo ingresando a la configuración de privacidad de tu navegador preferido (Chrome, Firefox, Safari, Microsoft Edge). Ten en cuenta que si bloqueas todas las cookies, incluyendo las esenciales, algunas secciones de la tienda online de MesoLab Pro (como el carrito de compras y checkout) podrían presentar problemas de funcionamiento.
                    </li>
                  </ul>
                </div>

              </div>
            </main>

          </div>
        </div>
      </section>
    </>
  );
}
