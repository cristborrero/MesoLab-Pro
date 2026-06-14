"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/data";

const COLOMBIAN_DEPARTMENTS = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bogotá D.C.",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];

export function CheckoutContent() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [department, setDepartment] = useState("");

  // Dynamic shipping cost based on Colombian departments to prevent margin bleed
  const shipping =
    subtotal > 200000
      ? 0
      : department === ""
      ? 15000
      : department === "Bogotá D.C." || department === "Cundinamarca"
      ? 8000
      : 15000;

  const total = subtotal + shipping;

  // 19% IVA included breakdown for B2B financial compliance in Colombia
  const ivaIncluded = Math.round(subtotal * 0.19);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        {/* SVG Cart Placeholder instead of Emoji */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-navy/40">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <h2 className="font-display text-xl font-semibold text-navy">
          Tu carrito está vacío
        </h2>
        <p className="text-muted text-sm">
          Agrega insumos antes de continuar al checkout.
        </p>
        <Link
          href="/tienda"
          className="mt-2 flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-teal-accessible px-8 font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-navy">
          ¡Pedido confirmado!
        </h2>
        <p className="text-muted text-sm leading-relaxed">
          Hemos recibido tu solicitud. Vas a recibir una confirmación detallada por WhatsApp con la liquidación e información de facturación de tu pedido.
        </p>
        <Link
          href="/tienda"
          className="mt-4 flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-teal-accessible px-8 font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Contact */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 font-display text-lg font-semibold text-navy">
            Información de contacto
          </legend>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-email"
              className="font-label text-xs font-medium uppercase tracking-wider text-muted"
            >
              Correo electrónico
            </label>
            <input
              id="checkout-email"
              name="email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-whatsapp"
              className="font-label text-xs font-medium uppercase tracking-wider text-muted"
            >
              WhatsApp / Celular
            </label>
            <input
              id="checkout-whatsapp"
              name="whatsapp"
              type="tel"
              required
              inputMode="numeric"
              placeholder="300 123 4567"
              className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
            />
          </div>
        </fieldset>

        {/* Shipping */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 font-display text-lg font-semibold text-navy">
            Dirección de envío
          </legend>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-name"
              className="font-label text-xs font-medium uppercase tracking-wider text-muted"
            >
              Nombre completo
            </label>
            <input
              id="checkout-name"
              name="fullName"
              type="text"
              required
              placeholder="Nombre y apellido"
              className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-address"
              className="font-label text-xs font-medium uppercase tracking-wider text-muted"
            >
              Dirección
            </label>
            <input
              id="checkout-address"
              name="address"
              type="text"
              required
              placeholder="Calle, carrera, número, apartamento"
              className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-department"
                className="font-label text-xs font-medium uppercase tracking-wider text-muted"
              >
                Departamento
              </label>
              <select
                id="checkout-department"
                name="department"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="h-11 rounded-[var(--radius-md)] border border-border bg-white px-4 text-sm text-navy focus:border-teal focus:outline-none"
              >
                <option value="">Seleccionar...</option>
                {COLOMBIAN_DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-city"
                className="font-label text-xs font-medium uppercase tracking-wider text-muted"
              >
                Ciudad
              </label>
              <input
                id="checkout-city"
                name="city"
                type="text"
                required
                placeholder="Ej. Bogotá / Medellín"
                className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        {/* Payment Placeholder */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 font-display text-lg font-semibold text-navy">
            Método de pago
          </legend>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 text-center">
            <p className="font-label text-sm font-semibold text-navy">
              Integración de pasarela segura (Wompi / Bold)
            </p>
            <p className="mt-1.5 text-xs text-muted">
              Tarjetas de crédito · PSE · Bancolombia · Nequi
            </p>
          </div>
        </fieldset>

        {/* Consentimiento de datos y Términos */}
        <div className="space-y-4 border-t border-border pt-6 text-left">
          <p className="text-[10px] leading-relaxed text-muted">
            <strong>Información legal básica sobre protección de datos:</strong> MesolabPro (Cra. 56 #161-94, Suba, Bogotá, Colombia) es el responsable del tratamiento de los datos personales suministrados para gestionar tu pedido, facturación y envío. Podés ejercer tus derechos de acceso, rectificación, supresión y revocación escribiendo a <a href="mailto:info@mesolabpro.com.co" className="text-teal-dark underline hover:text-teal font-medium">info@mesolabpro.com.co</a>. El tratamiento se realiza bajo nuestra <Link href="/privacidad" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Política de Privacidad</Link> y las compras se rigen por nuestros <Link href="/terminos" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Términos y Condiciones</Link>.
          </p>

          <div className="flex items-start gap-3">
            <input
              id="checkout-privacy"
              name="accept_privacy"
              type="checkbox"
              required
              className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-border bg-white text-teal accent-teal focus:ring-teal/20 cursor-pointer"
            />
            <label htmlFor="checkout-privacy" className="text-xs text-navy/70 leading-normal select-none cursor-pointer">
              Declaro que he leído y acepto la <Link href="/privacidad" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Política de Tratamiento de Datos Personales</Link> y los <Link href="/terminos" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Términos y Condiciones</Link> de MesolabPro. <span className="text-error font-bold">*</span>
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="checkout-marketing"
              name="accept_marketing"
              type="checkbox"
              className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-border bg-white text-teal accent-teal focus:ring-teal/20 cursor-pointer"
            />
            <label htmlFor="checkout-marketing" className="text-xs text-navy/70 leading-normal select-none cursor-pointer">
              Autorizo a MesolabPro para enviarme información comercial, promociones y contenidos educativos sobre productos para profesionales de la salud/estética a través de correo electrónico y WhatsApp.
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex h-14 items-center justify-center rounded-[var(--radius-md)] bg-teal-accessible text-lg font-semibold text-white transition-all hover:bg-teal-dark active:scale-[0.99] cursor-pointer"
        >
          Completar pedido · {formatPrice(total)}
        </button>
      </form>

      {/* Order Summary */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        {/* Mobile toggle */}
        <button
          onClick={() => setSummaryOpen(!summaryOpen)}
          className="mb-4 flex w-full items-center justify-between rounded-[var(--radius-md)] bg-surface px-4 py-3 lg:hidden"
        >
          <span className="font-display text-sm font-semibold text-navy">
            Resumen del pedido ({items.length})
          </span>
          <span className="font-label text-sm font-semibold text-navy">
            {formatPrice(total)}
          </span>
        </button>

        <div
          className={`rounded-[var(--radius-lg)] border border-border bg-white p-6 ${
            summaryOpen ? "block" : "hidden lg:block"
          }`}
        >
          <h3 className="mb-4 font-display text-base font-semibold text-navy">
            Resumen del pedido
          </h3>

          <ul className="flex flex-col gap-3">
            {items.map((item) => {
              const pres = item.product.presentations.find(
                (p) => p.id === item.presentationId
              );
              if (!pres) return null;
              return (
                <li
                  key={`${item.product.id}-${item.presentationId}`}
                  className="flex items-center gap-3"
                >
                  {/* Clean beaker visual instead of emoji */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-surface text-navy/40">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 011-18z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-navy leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-label text-xs text-muted">
                      {pres.label} × {item.quantity}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-medium text-navy">
                    {formatPrice(pres.price * item.quantity)}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-mono font-medium text-navy">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Envío</span>
              <span className="font-mono font-medium text-navy">
                {shipping === 0 ? "Gratis" : formatPrice(shipping)}
              </span>
            </div>
            {shipping === 0 && (
              <p className="font-label text-[10px] uppercase tracking-wider text-success font-semibold">
                ✓ Envío gratis por compras mayores a $200.000 COP
              </p>
            )}
            <div className="flex justify-between text-xs text-muted pt-1">
              <span>IVA Incluido (19%)</span>
              <span className="font-mono">{formatPrice(ivaIncluded)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-mono text-lg font-bold text-navy">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-4 flex items-center gap-2 rounded-[var(--radius-md)] bg-surface px-3 py-2.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="text-success"
            >
              <path
                d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8L7 9.5L10.5 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-label text-xs text-muted">
              Conexión encriptada SSL · Pago 100% Seguro
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
