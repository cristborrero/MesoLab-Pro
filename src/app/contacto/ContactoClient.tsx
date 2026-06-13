"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn, Stagger, StaggerItem, HoverCard } from "@/components/ui/motion";

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20hacer%20un%20pedido";

const channels = [
  {
    id: "whatsapp",
    href: WHATSAPP_URL,
    external: true,
    primary: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp Business",
    sublabel: "+57 313 3847436 · Respuesta inmediata",
    badge: "Más rápido",
  },
  {
    id: "email",
    href: "mailto:info@mesolabpro.com.co",
    external: false,
    primary: false,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Correo electrónico",
    sublabel: "info@mesolabpro.com.co",
  },
  {
    id: "instagram",
    href: "https://instagram.com/mesolabpro",
    external: true,
    primary: false,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Comunidad Instagram",
    sublabel: "@mesolabpro",
  },
];

const hours = [
  { day: "Lunes a Viernes", time: "8:00 AM – 6:00 PM" },
  { day: "Sábados", time: "9:00 AM – 1:00 PM" },
  { day: "Domingos y festivos", time: "Cerrado" },
];

export function ContactoClient() {
  return (
    <>
      {/* ─── HERO WITH LIGHT CREATIVE BANNER ─── */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-white to-[#f7fafa] min-h-[380px] lg:min-h-[460px] flex items-center">
        {/* Background Banner Image sitting on the right */}
        <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[60%] pointer-events-none select-none">
          <Image
            src="/main-contacto-mesolabpro-1200px.webp"
            alt="MesoLab Pro Contacto"
            fill
            priority
            className="object-cover object-right opacity-30 lg:opacity-55 mix-blend-multiply"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Subtle gradient to fade the image on the left side (towards text) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7fafa] via-[#f7fafa]/40 to-transparent lg:from-white" />
          {/* Bottom gradient to integrate 100% with the #f7fafa section below */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7fafa] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 lg:px-8 lg:pt-24 lg:pb-20 w-full">
          <FadeIn variant="fadeDown" duration={0.45}>
            <nav className="mb-6 font-label text-[10px] uppercase tracking-widest text-muted">
              <Link href="/" className="transition-colors hover:text-teal-dark">
                Inicio
              </Link>{" "}
              / <span className="text-navy">Contacto</span>
            </nav>
          </FadeIn>

          <div className="max-w-lg">
            <FadeIn delay={0.05}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light border border-teal/15 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Canales Abiertos
              </span>
            </FadeIn>
            <FadeIn delay={0.1} duration={0.65}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                Ponte en contacto
              </h1>
            </FadeIn>
            <FadeIn delay={0.18} duration={0.6}>
              <p className="mt-4 text-[15px] leading-relaxed text-muted max-w-md">
                Estamos disponibles para ayudarte con tu pedido, resolver dudas
                sobre protocolos o coordinar una cotización a medida para tu
                clínica o consultorio.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <section className="py-16 lg:py-24 bg-[#f7fafa]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Left: channels */}
            <div className="lg:col-span-2 space-y-4">
              <FadeIn variant="fadeRight" duration={0.55}>
                <p className="font-label text-[10px] font-bold uppercase tracking-widest text-teal-dark mb-4">
                  Cómo contactarnos
                </p>
              </FadeIn>

              <Stagger slow>
                {channels.map((ch) => {
                  const Tag = ch.external ? "a" : Link;
                  const tagProps = ch.external
                    ? { href: ch.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: ch.href };

                  return (
                    <StaggerItem key={ch.id}>
                      <HoverCard lift={3}>
                        <Tag
                          {...(tagProps as any)}
                          className={`group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-200 ${
                            ch.primary
                              ? "border-[#25D366]/25 bg-[#25D366]/5 hover:border-[#25D366]/50 hover:bg-[#25D366]/8"
                              : "border-border bg-white hover:border-teal/25 hover:bg-white"
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                              ch.primary
                                ? "bg-[#25D366] text-white"
                                : "bg-teal-light/70 text-teal-dark border border-teal/10"
                            }`}
                          >
                            {ch.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-display font-semibold text-navy text-sm">{ch.label}</p>
                              {ch.badge && (
                                <span className="rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[9px] font-bold font-label uppercase tracking-wider text-[#128C7E]">
                                  {ch.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted mt-0.5 truncate">{ch.sublabel}</p>
                          </div>
                          <svg
                            className="h-4 w-4 text-muted/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-teal-dark shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </Tag>
                      </HoverCard>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              {/* Horario */}
              <FadeIn delay={0.4} duration={0.5}>
                <div className="mt-6 rounded-2xl border border-border bg-white p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-light/70 text-teal-dark">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <p className="font-display text-sm font-bold text-navy">Horario de atención</p>
                  </div>
                  <div className="space-y-2">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex justify-between items-center text-xs">
                        <span className="text-muted">{day}</span>
                        <span
                          className={`font-semibold font-label ${
                            time === "Cerrado" ? "text-muted/50" : "text-navy"
                          }`}
                        >
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: form */}
            <FadeIn
              variant="fadeLeft"
              delay={0.1}
              duration={0.65}
              className="lg:col-span-3"
            >
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
