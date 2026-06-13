"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

const SECTIONS = [
  { id: "intro", title: "1. Introducción y Marco Legal" },
  { id: "responsable", title: "2. Responsable del Tratamiento" },
  { id: "definiciones", title: "3. Definiciones y Principios" },
  { id: "datos-tratados", title: "4. Datos Objeto de Tratamiento" },
  { id: "finalidades", title: "5. Finalidades del Tratamiento" },
  { id: "derechos", title: "6. Derechos de los Titulares" },
  { id: "procedimiento", title: "7. Consultas y Reclamos" },
  { id: "transferencia", title: "8. Encargados y Transferencias" },
  { id: "seguridad", title: "9. Medidas de Seguridad" },
  { id: "vigencia", title: "10. Vigencia" },
];

export function PrivacidadClient() {
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
              / <span className="text-navy font-medium">Política de privacidad</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Política de Tratamiento y <br />
              <span className="text-[#00cece]">Protección de Datos</span>
            </h1>
            <p className="mt-4 text-sm text-muted max-w-2xl font-medium">
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, garantizamos la seguridad, confidencialidad y correcto tratamiento de la información de nuestros clientes y aliados.
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
                
                {/* Intro */}
                <div id="intro" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    1. Introducción y Marco Legal
                  </h2>
                  <p>
                    La presente Política de Tratamiento y Protección de Datos Personales (en adelante, la "Política") tiene por objeto establecer los lineamientos bajo los cuales <strong>MesolabPro</strong> (en adelante "MESOLABPRO" o el "Responsable del tratamiento") recolecta, almacena, usa, transmite, transfiere, suprime y realiza cualquier operación de tratamiento sobre los datos personales de sus clientes, proveedores, aliados y usuarios, de conformidad con lo establecido en la <strong>Ley 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y demás normas concordantes y complementarias aplicables en la República de Colombia.
                  </p>
                  <p>
                    Esta Política aplica al tratamiento de datos personales efectuado en territorio colombiano o cuando el responsable o encargado se rija por la legislación colombiana, incluyendo de manera particular los datos recolectados a través de nuestro sitio web oficial <strong>mesolabpro.com.co</strong>, WhatsApp corporativo, correo electrónico, redes sociales y demás canales oficiales de comunicación comercial.
                  </p>
                </div>

                {/* Responsable */}
                <div id="responsable" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    2. Responsable del Tratamiento
                  </h2>
                  <p>
                    El responsable del tratamiento de sus datos personales es:
                  </p>
                  <div className="rounded-xl bg-surface/50 border border-border p-5 space-y-2 text-xs">
                    <p><strong>Nombre comercial:</strong> MesolabPro</p>
                    <p><strong>Razón social:</strong> MesolabPro</p>
                    <p><strong>Dirección:</strong> Cra. 56 #161-94, Suba, Bogotá, Colombia</p>
                    <p><strong>Correo electrónico de contacto:</strong> <a href="mailto:info@mesolabpro.com.co" className="text-teal-dark underline hover:text-teal font-medium">info@mesolabpro.com.co</a></p>
                    <p><strong>WhatsApp corporativo:</strong> +57 313 3847436</p>
                  </div>
                </div>

                {/* Definiciones */}
                <div id="definiciones" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    3. Definiciones y Principios Aplicables
                  </h2>
                  <p>
                    Para efectos de la presente Política, se adoptan las definiciones legales establecidas en el artículo 3 de la Ley 1581 de 2012:
                  </p>
                  <ul className="list-disc pl-5 space-y-2.5">
                    <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.</li>
                    <li><strong>Base de Datos:</strong> Conjunto organizado de datos personales que sea objeto de Tratamiento.</li>
                    <li><strong>Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
                    <li><strong>Dato Sensible:</strong> Aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación (como origen laboral, orientación política, convicciones religiosas, pertenencia a sindicatos, datos de salud o datos biométricos).</li>
                    <li><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de Tratamiento.</li>
                    <li><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</li>
                  </ul>
                  <p>
                    MESOLABPRO garantiza el cumplimiento estricto de los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad en el tratamiento de los datos.
                  </p>
                </div>

                {/* Datos tratados */}
                <div id="datos-tratados" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    4. Datos Personales Objeto de Tratamiento
                  </h2>
                  <p>
                    Dado nuestro enfoque de negocio B2B, orientado a profesionales de la salud y estética en el territorio colombiano, tratamos principalmente los siguientes datos de personas naturales:
                  </p>
                  <ul className="list-disc pl-5 space-y-2.5">
                    <li><strong>Datos de identificación:</strong> Nombres, apellidos, tipo y número de documento de identidad (C.C. o NIT de persona natural).</li>
                    <li><strong>Datos de contacto:</strong> Dirección de correspondencia y envío, ciudad, país, correo electrónico personal o corporativo, teléfonos de contacto y usuario de WhatsApp.</li>
                    <li><strong>Datos profesionales:</strong> Profesión, especialidad en salud/estética, número de registro profesional (si se requiere para verificar idoneidad sanitaria) e institución o centro de estética donde presta sus servicios.</li>
                    <li><strong>Datos transaccionales:</strong> Historial de pedidos, productos adquiridos, canales de compra utilizados y valores facturados.</li>
                    <li><strong>Datos de facturación:</strong> Información necesaria para la emisión de la factura electrónica legal (sin almacenar información de tarjetas de crédito o credenciales de pago, las cuales son procesadas de manera externa e independiente por las pasarelas de pago certificadas con PCI-DSS).</li>
                    <li><strong>Datos de navegación:</strong> Dirección IP, logs de acceso, identificadores de dispositivo, cookies y comportamiento de navegación en nuestra web.</li>
                  </ul>
                  <p>
                    <strong>Tratamiento de datos sensibles:</strong> MESOLABPRO no realiza de manera habitual el tratamiento de datos sensibles (como la información de salud de los pacientes de nuestros clientes). En caso excepcional de requerirse algún dato sensible, se solicitará una autorización expresa, previa y reforzada conforme a la legislación nacional, informando de su carácter opcional.
                  </p>
                </div>

                {/* Finalidades */}
                <div id="finalidades" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    5. Finalidades del Tratamiento
                  </h2>
                  <p>
                    Los datos recolectados por MESOLABPRO tienen como finalidad exclusiva:
                  </p>
                  
                  <div className="space-y-3 pl-4 border-l-2 border-teal/40">
                    <p><strong>A. Gestión de la relación comercial B2B:</strong> Registrar y validar a los usuarios profesionales de la salud y estética, procesar pedidos y cotizaciones, gestionar despachos y entregas de insumos en Colombia, y prestar soporte posventa.</p>
                    <p><strong>B. Soporte técnico y servicio al cliente:</strong> Atender PQR (peticiones, quejas y reclamos), consultas de compatibilidad técnica, y realizar el seguimiento de calidad de los lotes de mesoterapia distribuidos.</p>
                    <p><strong>C. Mercadeo y fidelización (previo consentimiento):</strong> Enviar boletines comerciales, promociones y convocatorias a capacitaciones profesionales sobre productos y técnicas de mesoterapia a través de correo electrónico y WhatsApp.</p>
                    <p><strong>D. Seguridad y prevención de fraudes:</strong> Validar la identidad de los compradores, coordinar controles antifraude con las pasarelas de pago aliadas y mantener logs de auditoría en la plataforma.</p>
                    <p><strong>E. Obligaciones legales:</strong> Atender requerimientos de autoridades sanitarias o judiciales, y dar cumplimiento a normativas contables, fiscales y tributarias vigentes en Colombia.</p>
                  </div>
                </div>

                {/* Derechos */}
                <div id="derechos" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    6. Derechos de los Titulares
                  </h2>
                  <p>
                    De acuerdo con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene derecho a:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Conocer, actualizar y rectificar sus datos personales frente a MESOLABPRO en su calidad de responsable.</li>
                    <li>Solicitar prueba de la autorización otorgada a MESOLABPRO, salvo excepciones de ley.</li>
                    <li>Ser informado, previa solicitud, respecto del uso que se ha dado a sus datos personales.</li>
                    <li>Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normativa de protección de datos.</li>
                    <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                    <li>Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
                  </ol>
                </div>

                {/* Procedimiento */}
                <div id="procedimiento" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    7. Procedimiento para Consultas y Reclamos (Habeas Data)
                  </h2>
                  <p>
                    Cualquier petición, consulta o reclamo relacionado con el ejercicio de los derechos de Habeas Data podrá ser formulado por el Titular (o sus derechohabientes autorizados) a través de nuestro correo oficial <strong>info@mesolabpro.com.co</strong>.
                  </p>
                  <p>
                    La solicitud deberá contener al menos: nombre completo del titular, tipo y número de documento de identificación, descripción clara de los hechos que dan lugar a la consulta o reclamo, datos de contacto de notificación y documentos adjuntos de soporte (cuando aplique).
                  </p>
                  <p className="font-semibold text-navy">Trámite de Consultas:</p>
                  <p className="pl-4">
                    Las consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de su recepción. En caso de no ser posible su atención en dicho plazo, se informará al solicitante los motivos de la demora y la fecha en que se resolverá, la cual no podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.
                  </p>
                  <p className="font-semibold text-navy">Trámite de Reclamos:</p>
                  <p className="pl-4">
                    Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a su recepción para que subsane los errores. Transcurridos dos (2) meses sin respuesta, se entenderá desistido el reclamo.
                  </p>
                  <p className="pl-4">
                    El término máximo para atender un reclamo completo será de quince (15) días hábiles contados a partir del día siguiente a su recepción, prorrogables por ocho (8) días hábiles más si el caso lo amerita y previa justificación.
                  </p>
                </div>

                {/* Transferencia */}
                <div id="transferencia" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    8. Encargados y Transferencias Internacionales
                  </h2>
                  <p>
                    Para la ejecución de actividades de hosting web, procesamiento de pagos electrónicos, logística de envíos físicos, y servicios de mensajería (email y WhatsApp marketing), MESOLABPRO contrata a terceros encargados que actúan bajo contratos de confidencialidad y procesamiento seguro de datos personales.
                  </p>
                  <p>
                    En caso de realizar transferencias internacionales a países que no posean niveles adecuados de protección declarados por la SIC, MESOLABPRO implementará las cláusulas contractuales y acuerdos de transmisión de datos aplicables de conformidad con lo previsto en el artículo 26 de la Ley 1581 de 2012.
                  </p>
                </div>

                {/* Seguridad */}
                <div id="seguridad" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    9. Medidas de Seguridad de la Información
                  </h2>
                  <p>
                    MESOLABPRO adopta medidas técnicas, administrativas y organizativas de seguridad razonables para mitigar riesgos de alteración, pérdida, acceso no autorizado, uso indebido o robo de las bases de datos personales bajo su custodia.
                  </p>
                  <p>
                    Sin embargo, el Titular reconoce y acepta que las medidas de seguridad en entornos electrónicos no son infalibles en su totalidad y que pueden presentarse riesgos asociados a fallas en redes públicas de telecomunicaciones o ataques cibernéticos maliciosos avanzados fuera de nuestro control.
                  </p>
                </div>

                {/* Vigencia */}
                <div id="vigencia" className="space-y-4 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy border-b border-border/60 pb-2">
                    10. Vigencia de las Bases de Datos y Cambios en la Política
                  </h2>
                  <p>
                    Las bases de datos personales se mantendrán activas mientras resulten necesarias para cumplir con las finalidades descritas y durante los plazos mínimos exigidos por las regulaciones comerciales, fiscales y contables colombianas.
                  </p>
                  <p>
                    La presente versión de la Política rige a partir de su publicación oficial. Cualquier modificación sustancial a las condiciones aquí planteadas será comunicada a través de nuestro sitio web o mediante notificación directa a los canales registrados del Titular con antelación a su puesta en marcha.
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
