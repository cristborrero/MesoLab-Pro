import type { Metadata } from "next";
import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getProducts } from "@/lib/woocommerce";
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
  title: {
    default: "MesoLab Pro — Ciencia en cada ampolleta",
    template: "%s | MesoLab Pro",
  },
  description:
    "Insumos de mesoterapia certificados para profesionales de la estética y medicina estética en Colombia. Productos con trazabilidad, calidad verificada y entrega confiable.",
  keywords: [
    "mesoterapia",
    "insumos estéticos",
    "L-Carnitina",
    "medicina estética Colombia",
    "MesoLab Pro",
    "mesoterapia Bogotá",
    "insumos mesoterapia",
  ],
  openGraph: {
    title: "MesoLab Pro — Ciencia en cada ampolleta",
    description:
      "Insumos de mesoterapia certificados para profesionales de la estética en Colombia.",
    locale: "es_CO",
    type: "website",
    siteName: "MesoLab Pro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let spotlightImage = "";
  try {
    const products = await getProducts();
    const lcarnitina = products.find((p) => p.slug === "l-carnitina");
    if (lcarnitina?.image) {
      spotlightImage = lcarnitina.image;
    }
  } catch (err) {
    console.error("Error fetching spotlight product:", err);
  }

  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground font-body">
        <CartProvider>
          <Header spotlightImage={spotlightImage} />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
