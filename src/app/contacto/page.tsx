import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto y Asesoría Técnica | MesoLab Pro",
  description:
    "Ponte en contacto con nuestro departamento de soporte técnico farmacéutico para pedidos clínicos al por mayor, cotizaciones e indicaciones de protocolos.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto y Asesoría Técnica — MesoLab Pro",
    "description":
      "Departamento de soporte técnico farmacéutico para pedidos clínicos al por mayor, cotizaciones e indicaciones de protocolos.",
    "url": "https://mesolabpro.com.co/contacto",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://mesolabpro.com.co",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contacto",
        "item": "https://mesolabpro.com.co/contacto",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <ContactoClient />
    </>
  );
}
