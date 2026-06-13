import type { Metadata } from "next";
import { TerminosClient } from "./TerminosClient";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso y Compras | MesoLab Pro",
  description:
    "Términos y condiciones de uso y compras en línea de MesoLab Pro. Conoce las condiciones de contratación, envíos, garantías y derecho de retracto en Colombia.",
};

export default function TerminosPage() {
  return <TerminosClient />;
}
