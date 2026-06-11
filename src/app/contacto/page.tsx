import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto y Asesoría Técnica | MesoLab Pro",
  description:
    "Ponte en contacto con nuestro departamento de soporte técnico farmacéutico para pedidos clínicos al por mayor, cotizaciones e indicaciones de protocolos.",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
