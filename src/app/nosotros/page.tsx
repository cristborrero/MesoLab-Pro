import type { Metadata } from "next";
import Link from "next/link";
import { NosotrosClient } from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Compromiso Científico MesoLab Pro",
  description:
    "Conoce MesoLab Pro: nuestro estándar de trazabilidad de lotes, almacenamiento certificado y principios activos autorizados por INVIMA en Colombia.",
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
