"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

const SECTIONS = [
  { id: "aceptacion", title: "1. Aceptación de Términos" },
  { id: "destinatarios", title: "2. Destinatarios y Capacidad B2B" },
  { id: "objeto", title: "3. Objeto del Sitio y Catálogo" },
  { id: "registro", title: "4. Registro y Credenciales" },
  { id: "compra", title: "5. Proceso de Compra y Aceptación" },
  { id: "precios", title: "6. Precios, Impuestos y Facturación" },
  { id: "envios", title: "7. Despachos y Tiempos de Entrega" },
  { id: "retracto-garantia", title: "8. Retracto, Garantía y Devolución" },
  { id: "propiedad-intelectual", title: "9. Propiedad Intelectual" },
  { id: "ley-aplicable", title: "10. Ley Aplicable y Jurisdicción" },
];

export function TerminosClient() {
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
              / <span className="text-navy font-medium">Términos y condiciones</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Términos y <br />
              <span className="text-[#00cece]">Condiciones de Uso</span>
            </h1>
            <p className="mt-4 text-sm text-muted max-w-2xl font-medium">
              Lineamientos legales que regulan el acceso, navegación y compras comerciales dentro de mesolabpro.com.co.
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
                
                {/* Aceptacion */}
                <div id="aceptacion" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    1. Aceptación de Términos y Condiciones
                  </h2>
                  <p>
                    El acceso al portal <strong>mesolabpro.com.co</strong>, así como la realización de pedidos y compras comerciales en línea a través de este, implican la aceptación total, incondicional y sin reservas de los presentes Términos y Condiciones por parte de los usuarios.
                  </p>
                  <p>
                    Si no estás de acuerdo con todo o parte del contenido de estos lineamientos, deberás abstenerte inmediatamente de utilizar el sitio, registrarte o realizar cualquier solicitud de compra a través de nuestros canales de comercio electrónico.
                  </p>
                </div>

                {/* Destinatarios */}
                <div id="destinatarios" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    2. Destinatarios y Capacidad Jurídica B2B
                  </h2>
                  <p>
                    El catálogo y los servicios de comercio electrónico de MESOLABPRO están dirigidos de manera exclusiva a <strong>profesionales de la salud, medicina estética y cosmetología/estética</strong> calificados, mayores de edad conforme a las leyes colombianas y con plena capacidad legal para contraer obligaciones comerciales.
                  </p>
                  <p>
                    Al ser un portal estrictamente B2B (de negocio a negocio), MESOLABPRO no comercializa sus productos de mesoterapia ni insumos de uso clínico con el público en general ni con menores de edad. No asumimos responsabilidades derivadas de la adquisición y aplicación de los insumos por parte de personas sin la debida titulación o habilitación sanitaria legal requerida en Colombia.
                  </p>
                </div>

                {/* Objeto */}
                <div id="objeto" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    3. Objeto del Sitio y Fichas de Producto
                  </h2>
                  <p>
                    MESOLABPRO pone a disposición de sus clientes profesionales un canal digital de compras donde se exponen principios activos de mesoterapia, insumos, dispositivos y consumibles clínicos.
                  </p>
                  <p>
                    Las características esenciales, la concentración, el fabricante, el registro sanitario INVIMA y las recomendaciones de almacenamiento se informan de manera clara en las fichas descriptivas de cada producto. En cumplimiento del Estatuto del Consumidor (Ley 1480 de 2011), todos los precios e impuestos aplicables se detallan de forma transparente con anterioridad a la confirmación final de compra.
                  </p>
                </div>

                {/* Registro */}
                <div id="registro" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    4. Registro de Usuarios y Custodia de Credenciales
                  </h2>
                  <p>
                    El usuario profesional que decida registrarse en la plataforma para facilitar su proceso de compra o acceder a tarifas especiales, se compromete a suministrar información veraz, completa y actualizada sobre su identidad y habilitación profesional.
                  </p>
                  <p>
                    Asimismo, el usuario es el único custodio y responsable de la confidencialidad de su contraseña y credenciales de acceso. Cualquier transacción comercial o interacción realizada bajo sus credenciales registradas se entenderá efectuada directamente por el Titular o por personas debidamente autorizadas bajo su supervisión.
                  </p>
                </div>

                {/* Compra */}
                <div id="compra" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    5. Proceso de Compra y Aceptación de la Oferta Comercial
                  </h2>
                  <p>
                    El proceso para formalizar un pedido se rige por las siguientes etapas:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Selección de productos en las cantidades y presentaciones preferidas, agregándolos al carrito de compras.</li>
                    <li>Revisión del resumen de pedido en el checkout, donde se desglosan el subtotal, los impuestos (IVA) y los costos asociados al envío.</li>
                    <li>Diligenciamiento de los datos de envío, facturación electrónica y contacto.</li>
                    <li>Lectura y aceptación expresa de los términos legales y políticas de datos.</li>
                    <li>Ejecución del pago seguro mediante la pasarela integrada.</li>
                  </ol>
                  <p>
                    El contrato de compraventa comercial se perfecciona cuando MESOLABPRO confirme la aceptación del pedido mediante un correo electrónico de confirmación enviado a la cuenta informada por el usuario.
                  </p>
                  <p>
                    MESOLABPRO se reserva el derecho de rechazar, retener o anular cualquier oferta de compra en caso de detectar sospechas de fraude, inconsistencias en los datos suministrados, errores tipográficos evidentes en los precios publicados, o falta de inventario por parte del laboratorio de origen. En tales eventos, se notificará de inmediato al usuario y se gestionará el reembolso del 100% de los dineros pagados.
                  </p>
                </div>

                {/* Precios */}
                <div id="precios" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    6. Precios, Impuestos y Facturación Electrónica
                  </h2>
                  <p>
                    Todos los precios publicados en mesolabpro.com.co están denominados en pesos colombianos (COP). Se detallarán de forma clara e individual los valores correspondientes al IVA (19% o la tasa aplicable por ley) y los fletes de transporte.
                  </p>
                  <p>
                    De acuerdo con las regulaciones de la DIAN en Colombia, MESOLABPRO emitirá la factura electrónica legal correspondiente por cada transacción, la cual será remitida al correo electrónico del comprador o entregada en físico junto con el pedido.
                  </p>
                </div>

                {/* Envios */}
                <div id="envios" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    7. Despachos y Tiempos de Entrega
                  </h2>
                  <p>
                    Los envíos de insumos médicos y de mesoterapia se realizan exclusivamente en el territorio de la República de Colombia, a través de operadores logísticos y transportadoras aliadas autorizadas.
                  </p>
                  <p>
                    Los tiempos estimados de entrega serán informados durante el checkout (generalmente entre 1 y 3 días hábiles para Bogotá y ciudades principales, y hasta 5 días hábiles para trayectos especiales). MESOLABPRO informará al usuario cualquier demora imprevista debido a factores externos o problemas de orden público en las carreteras del país.
                  </p>
                </div>

                {/* Retracto y Garantias */}
                <div id="retracto-garantia" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    8. Derecho de Retracto, Garantía Legal y Devoluciones
                  </h2>
                  <p><strong>Derecho de Retracto:</strong></p>
                  <p className="pl-4">
                    De conformidad con el artículo 47 de la Ley 1480 de 2011, al tratarse de ventas a distancia, el comprador profesional dispone de un término máximo de cinco (5) días hábiles contados a partir de la entrega física del producto para ejercer su derecho de retracto.
                  </p>
                  <p className="pl-4">
                    Debido a la naturaleza de los insumos comercializados (productos de uso estético y médico que requieren condiciones estrictas de higiene y conservación térmica), el retracto únicamente procederá si los viales o cajas se encuentran en su embalaje original cerrado, completamente sellados, sin signos de manipulación y en perfecto estado. El comprador deberá asumir el costo de envío de retorno a las bodegas de MESOLABPRO.
                  </p>
                  <p><strong>Garantía Legal:</strong></p>
                  <p className="pl-4">
                    MESOLABPRO responde por la calidad, idoneidad, seguridad, buen estado y fecha de vencimiento adecuada de los viales y consumibles entregados. En caso de detectarse alguna anomalía física o defecto de origen, el profesional deberá reportarla dentro de las 48 horas siguientes al recibo del despacho para coordinar la reposición o el reembolso, aportando las evidencias correspondientes (fotografías, videos del lote).
                  </p>
                  <p><strong>Exclusiones de Garantía y Devolución:</strong></p>
                  <p className="pl-4">
                    No procederá el cambio, devolución ni efectividad de garantía cuando el deterioro o falla del producto se deba a una manipulación indebida, almacenamiento en condiciones de temperatura contrarias a las indicadas en la ficha técnica, rotura de viales por caídas accidentales en el consultorio, o uso contrario a los protocolos clínico-estéticos aprobados por el fabricante y las autoridades sanitarias.
                  </p>
                </div>

                {/* Propiedad intelectual */}
                <div id="propiedad-intelectual" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    9. Propiedad Intelectual
                  </h2>
                  <p>
                    Todo el material visual, marcas comerciales, nombres comerciales, logotipos, eslóganes, textos descriptivos, imágenes promocionales, fotografías de producto, esquemas, diseños web, códigos fuente y fichas de seguridad expuestas en este portal son de propiedad exclusiva de <strong>MesolabPro</strong> o de sus laboratorios aliados licenciantes.
                  </p>
                  <p>
                    Queda estrictamente prohibida la reproducción parcial o total, copia, distribución, comunicación pública, alteración o explotación comercial no autorizada por escrito de dichos elementos.
                  </p>
                </div>

                {/* Ley aplicable */}
                <div id="ley-aplicable" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    10. Ley Aplicable y Jurisdicción Competente
                  </h2>
                  <p>
                    Los presentes Términos y Condiciones se rigen e interpretan en su totalidad bajo las leyes de la República de Colombia, especialmente por la Ley 1480 de 2011 (Estatuto del Consumidor), la Ley 1581 de 2012 (Protección de datos personales), el Código de Comercio colombiano y el Código Civil.
                  </p>
                  <p>
                    Cualquier discrepancia o conflicto legal derivado de la interpretación o ejecución de estas cláusulas se someterá a la decisión de los jueces ordinarios de la República de Colombia con jurisdicción y domicilio principal en la ciudad de Bogotá D.C.
                  </p>
                </div>

              </div>
            </main>

          </div>
        </div>
      </section>
    </>
  );
}
