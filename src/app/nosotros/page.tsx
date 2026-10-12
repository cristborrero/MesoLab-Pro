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
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre MesoLab Pro — Ciencia, Belleza y Tecnología",
    "description":
      "Estándar en dispositivos Beauty Tech, cosmética activa, cobertura nacional con Pago Contra Entrega e insumos profesionales en Colombia.",
    "url": "https://mesolabpro.com.co/nosotros",
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
        "name": "Nosotros",
        "item": "https://mesolabpro.com.co/nosotros",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <NosotrosClient />
    </>
  );
}
