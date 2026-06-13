import type { Metadata } from "next";
import { PrivacidadClient } from "./PrivacidadClient";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos | MesoLab Pro",
  description:
    "Política de tratamiento y protección de datos personales de MesoLab Pro. Conoce tus derechos de acceso, rectificación y supresión de datos conforme a la Ley 1581 de 2012.",
};

export default function PrivacidadPage() {
  return <PrivacidadClient />;
}
