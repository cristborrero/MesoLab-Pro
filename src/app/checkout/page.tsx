import type { Metadata } from "next";
import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout Seguro | MesoLab Pro",
  description: "Finaliza tu compra de suministros clínicos de mesoterapia de forma rápida y segura con encriptación SSL y facturación formal en Colombia.",
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

        <h1 className="mb-8 font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Finaliza tu Compra
        </h1>

        <CheckoutContent />
      </div>
    </section>
  );
}
