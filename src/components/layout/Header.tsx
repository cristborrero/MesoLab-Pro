"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import { products as fallbackProducts } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/tienda", label: "Tienda" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20hacer%20un%20pedido";

export function Header() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [storeHovered, setStoreHovered] = useState(false);

  // Imagen spotlight del mega menú desde datos locales (sin depender de WooCommerce en layout)
  const spotlightImage = fallbackProducts.find((p) => p.slug === "l-carnitina")?.image || "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Trust Strip */}
      <div className="bg-navy text-white text-xs py-2 text-center font-label tracking-wide">
        <span className="hidden sm:inline">
          Envíos a toda Colombia · Productos certificados · Soporte vía
          WhatsApp
        </span>
        <span className="sm:hidden">
          Envíos nacionales · Productos certificados
        </span>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-surface lg:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M5 5l12 12" />
                  <path d="M17 5L5 17" />
                </>
              ) : (
                <>
                  <path d="M3 6h16" />
                  <path d="M3 11h16" />
                  <path d="M3 16h16" />
                </>
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo_mesolab_pro_h_web.svg"
              alt="MesoLab Pro"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links with Premium Mega Menú */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            <div
              className="relative py-5"
              onMouseEnter={() => setStoreHovered(true)}
              onMouseLeave={() => setStoreHovered(false)}
            >
              <Link
                href="/tienda"
                className="flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-teal-dark"
              >
                Tienda
                <svg className={`h-4.5 w-4.5 text-muted/60 transition-transform duration-200 ${storeHovered ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              
              {/* Mega Menu Container with blur & scale transition */}
              <AnimatePresence>
                {storeHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full -left-48 z-50 w-[600px] origin-top"
                  >
                    <div className="mt-2 rounded-[var(--radius-lg)] border border-border bg-white/95 p-6 shadow-modal backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Columns 1 & 2: Categories */}
                        <div className="col-span-2 grid grid-cols-2 gap-4 border-r border-border/60 pr-6">
                          <div className="flex flex-col gap-3">
                            <span className="font-label text-[10px] font-bold uppercase tracking-wider text-muted/60">Tratamientos</span>
                            <Link href="/tienda/lipoliticos" className="group/item flex flex-col gap-0.5 rounded-md p-2 transition-all hover:bg-surface/60">
                              <span className="text-sm font-semibold text-navy transition-colors group-hover/item:text-teal-dark">Lipolíticos</span>
                              <span className="text-[11px] text-muted leading-tight">Reducción localizada y contornos.</span>
                            </Link>
                            <Link href="/tienda/vitaminicos" className="group/item flex flex-col gap-0.5 rounded-md p-2 transition-all hover:bg-surface/60">
                              <span className="text-sm font-semibold text-navy transition-colors group-hover/item:text-teal-dark">Vitamínicos</span>
                              <span className="text-[11px] text-muted leading-tight">Revitalización y nutrición.</span>
                            </Link>
                          </div>
                          <div className="flex flex-col gap-3">
                            <span className="font-label text-[10px] font-bold uppercase tracking-wider text-muted/60">Especialidades</span>
                            <Link href="/tienda/anestesicos" className="group/item flex flex-col gap-0.5 rounded-md p-2 transition-all hover:bg-surface/60">
                              <span className="text-sm font-semibold text-navy transition-colors group-hover/item:text-teal-dark">Anestésicos</span>
                              <span className="text-[11px] text-muted leading-tight">Manejo del dolor en cabina.</span>
                            </Link>
                            <Link href="/tienda/insumos" className="group/item flex flex-col gap-0.5 rounded-md p-2 transition-all hover:bg-surface/60">
                              <span className="text-sm font-semibold text-navy transition-colors group-hover/item:text-teal-dark">Insumos</span>
                              <span className="text-[11px] text-muted leading-tight">Agujas y consumibles.</span>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Column 3: Editorial spotlight */}
                        <div className="flex flex-col gap-3">
                          <span className="font-label text-[10px] font-bold uppercase tracking-wider text-muted/60">Spotlight</span>
                          <div className="flex flex-1 flex-col rounded-lg bg-surface/40 p-3">
                            <div className="relative flex h-20 w-full items-center justify-center overflow-hidden rounded bg-white p-2 border border-border/50">
                              {spotlightImage ? (
                                <Image
                                  src={spotlightImage}
                                  alt="L-Carnitina"
                                  fill
                                  className="object-contain p-2 mix-blend-multiply"
                                  sizes="120px"
                                />
                              ) : (
                                <svg className="h-10 w-10 text-teal-dark/30" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                                  <path d="M45 15h10v20l8 12v38H37V47l8-12V15z" strokeWidth="3" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span className="mt-2 text-xs font-semibold text-navy leading-tight">L-Carnitina 500mg</span>
                            <span className="text-[10px] text-muted">Estándar en lipólisis.</span>
                            <Link href="/producto/l-carnitina" className="mt-auto text-xs font-bold text-teal-dark hover:underline">
                              Ver detalles →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/nosotros" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal-dark">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal-dark">
              Contacto
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* WhatsApp — desktop only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-[var(--radius-md)] bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-light lg:flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-surface"
              aria-label={`Carrito (${itemCount} items)`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden lg:hidden border-t border-border bg-white"
            >
              <nav
                className="flex flex-col gap-1 px-4 py-3"
                aria-label="Menú móvil"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-[var(--radius-md)] bg-navy px-3 py-2.5 text-sm font-medium text-white"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar por WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
