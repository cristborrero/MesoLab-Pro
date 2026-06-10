import type { Metadata } from "next";
import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Completa tu pedido de insumos de mesoterapia certificados.",
};

export default function CheckoutPage() {
  return (
    <section className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav className="mb-6 font-label text-xs text-muted">
          <a href="/" className="hover:text-teal-dark">
            Inicio
          </a>{" "}
          /{" "}
          <a href="/tienda" className="hover:text-teal-dark">
            Tienda
          </a>{" "}
          / <span className="text-navy">Checkout</span>
        </nav>

        <h1 className="mb-8 font-display text-3xl font-bold text-navy sm:text-4xl">
          Checkout
        </h1>

        <CheckoutContent />
      </div>
    </section>
  );
}
