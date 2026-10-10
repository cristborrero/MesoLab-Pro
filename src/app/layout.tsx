import type { Metadata } from "next";
import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesolabpro.com.co"),
  title: {
    default: "MesoLab Pro | Tecnología Estética, Cuidado Facial & Beauty Tech en Colombia",
    template: "%s | MesoLab Pro",
  },
  description:
    "Tienda especializada en tecnología estética, aparatología facial y corporal, sueros activos y cosmecéutica profesional en Colombia. Envíos nacionales con Pago Contra Entrega.",
  keywords: [
    "beauty tech Colombia",
    "tecnología estética",
    "aparatología facial",
    "máscara LED facial",
    "radiofrecuencia portátil",
    "cuidado facial",
    "sueros activos",
    "mesoterapia Colombia",
    "pago contra entrega",
    "MesoLab Pro",
    "dermo estética Bogotá",
    "depiladora IPL",
    "cavitación portátil",
  ],
  authors: [{ name: "MesoLab Pro" }],
  creator: "MesoLab Pro",
  publisher: "MesoLab Pro",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "MesoLab Pro | Tecnología Estética & Beauty Tech en Colombia",
    description:
      "Aparatología estética avanzada, activos de grado clínico y cosmecéutica profesional. Envíos a toda Colombia con opción de Pago Contra Entrega.",
    url: "https://mesolabpro.com.co",
    siteName: "MesoLab Pro",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/hero-clinical-treatment.webp",
        width: 1200,
        height: 630,
        alt: "MesoLab Pro - Tecnología Estética & Beauty Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MesoLab Pro | Tecnología Estética & Beauty Tech",
    description:
      "Aparatología estética avanzada y cosmecéutica en Colombia con Pago Contra Entrega.",
    images: ["/images/hero-clinical-treatment.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mesolabpro.com.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground font-body">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
