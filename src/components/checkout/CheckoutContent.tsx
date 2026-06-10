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

  const shipping = subtotal > 200000 ? 0 : 15000;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to Wompi/Bold payment gateway
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <span className="text-5xl">🛒</span>
        <h2 className="font-display text-xl font-semibold text-navy">
          Tu carrito está vacío
        </h2>
        <p className="text-muted">
          Agrega productos antes de continuar al checkout.
        </p>
        <Link
          href="/tienda"
          className="mt-2 flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-teal px-8 font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-16 text-center">
        <span className="text-5xl">✅</span>
        <h2 className="font-display text-2xl font-bold text-navy">
          ¡Pedido confirmado!
        </h2>
        <p className="text-muted leading-relaxed">
          Recibirás una confirmación por WhatsApp con los detalles de tu pedido y
          la información de seguimiento.
        </p>
        <Link
          href="/tienda"
          className="mt-4 flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-teal px-8 font-semibold text-white transition-colors hover:bg-teal-dark"
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
              WhatsApp
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
              placeholder="Calle, carrera, número"
              className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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
                placeholder="Bogotá"
                className="h-11 rounded-[var(--radius-md)] border border-border px-4 text-sm text-navy placeholder:text-muted/50 focus:border-teal focus:outline-none"
              />
            </div>
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
          </div>
        </fieldset>

        {/* Payment Placeholder */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 font-display text-lg font-semibold text-navy">
            Método de pago
          </legend>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 text-center">
            <p className="font-label text-sm text-muted">
              Integración de pasarela de pago (Wompi / Bold)
            </p>
            <p className="mt-1 text-xs text-muted/60">
              Visa · Mastercard · PSE · Nequi
            </p>
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="flex h-14 items-center justify-center rounded-[var(--radius-md)] bg-teal text-lg font-semibold text-white transition-colors hover:bg-teal-dark"
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-surface text-lg">
                    🧪
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-navy leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-label text-xs text-muted">
                      {pres.label} × {item.quantity}
                    </p>
                  </div>
                  <span className="font-label text-sm font-medium text-navy">
                    {formatPrice(pres.price * item.quantity)}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-label font-medium text-navy">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Envío</span>
              <span className="font-label font-medium text-navy">
                {shipping === 0 ? "Gratis" : formatPrice(shipping)}
              </span>
            </div>
            {shipping === 0 && (
              <p className="font-label text-xs text-success">
                ✓ Envío gratis en pedidos mayores a $200.000
              </p>
            )}
            <div className="flex justify-between border-t border-border pt-2 text-base">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-label text-lg font-bold text-navy">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-4 flex items-center gap-2 rounded-[var(--radius-md)] bg-surface px-3 py-2">
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
              Pago seguro · Datos protegidos
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
