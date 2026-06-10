import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido";

export const metadata: Metadata = {
  title: "Contacto y Asesoría Técnica | MesoLab Pro",
  description: "Ponte en contacto con nuestro departamento de soporte técnico farmacéutico para pedidos clínicos al por mayor, cotizaciones e indicaciones de protocolos.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 font-label text-[10px] uppercase tracking-widest text-muted">
            <a href="/" className="hover:text-teal-dark">
              Inicio
            </a>{" "}
            / <span className="text-navy">Contacto</span>
          </nav>

          <div className="mb-10">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark">Canales Abiertos</span>
            <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl mt-1">
              Ponte en contacto
            </h1>
            <p className="mt-3 max-w-xl text-muted text-sm sm:text-base leading-relaxed">
              Estamos a disposición para ayudarte con tu pedido, resolver dudas sobre protocolos o coordinar una cotización a medida para tu clínica o consultorio.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              {/* WhatsApp — Primary */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[var(--radius-lg)] border-2 border-whatsapp/20 bg-whatsapp/5 p-5 transition-all hover:border-whatsapp/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-navy">
                    WhatsApp Business
                  </p>
                  <p className="text-xs text-muted">
                    Respuesta inmediata · Nuestro canal preferido
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@mesolabpro.com.co"
                className="group flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-5 transition-all hover:border-teal/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-teal-dark">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-navy">
                    Correo electrónico
                  </p>
                  <p className="text-sm text-muted">
                    contacto@mesolabpro.com.co
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/mesolabpro"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-5 transition-all hover:border-teal/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-teal-dark">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-navy">
                    Comunidad Instagram
                  </p>
                  <p className="text-sm text-muted">@mesolabpro</p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="rounded-[var(--radius-lg)] border border-border bg-white p-5">
                <p className="font-display font-semibold text-navy">
                  Horario de atención
                </p>
                <p className="mt-1 text-sm text-muted">
                  Lunes a Viernes: 8:00 AM – 6:00 PM
                </p>
                <p className="text-sm text-muted">
                  Sábados: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
