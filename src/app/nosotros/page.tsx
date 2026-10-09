import type { Metadata } from "next";
import { NosotrosClient } from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Sobre Nosotros | MesoLab Pro — Ciencia, Belleza y Tecnología",
  description:
    "Conoce MesoLab Pro: nuestro estándar en dispositivos Beauty Tech, cosmética activa, cobertura nacional con Pago Contra Entrega e insumos profesionales en Colombia.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
