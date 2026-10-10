"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResultItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  categoryLabel: string;
  price: number;
  inStock: boolean;
}

const NAV_LINKS = [
  { href: "/tienda", label: "Tienda" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/573133847436?text=Hola%2C%20quiero%20asesoria%20sobre%20los%20productos%20de%20MesoLab%20Pro";

export function Header() {
  const router = useRouter();
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeHovered, setStoreHovered] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live autocomplete search with debounce
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(searchQuery.trim())}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results || []);
          setIsSearching(false);
        })
        .catch(() => {
          setIsSearching(false);
        });
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      router.push(`/tienda?s=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_6px_rgba(38,55,59,0.03)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-surface lg:hidden transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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

          <Link href="/" className="flex items-center">
            <Image
              src="/logo_mesolab_pro_h_web.svg"
              alt="MesoLab Pro - Tecnología Estética & Dermocosmética"
              width={180}
              height={40}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Main Navigation (Spacious & Clean) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Navegación principal">
          <div
            className="relative py-4"
            onMouseEnter={() => setStoreHovered(true)}
            onMouseLeave={() => setStoreHovered(false)}
          >
            <Link
              href="/tienda"
              className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-teal transition-colors"
            >
              Tienda
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${storeHovered ? "rotate-180 text-teal" : "text-muted"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {storeHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-20 z-50 w-[520px] origin-top pt-2"
                >
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-modal">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="font-label text-[10px] font-bold uppercase tracking-wider text-teal-accessible">
                          Cuidado Personal
                        </span>
                        <Link href="/tienda?categoria=cuidado-facial" className="group/item flex flex-col rounded-lg p-2 transition-all hover:bg-surface">
                          <span className="text-xs font-bold text-navy group-hover/item:text-teal-dark">Cuidado Facial</span>
                          <span className="text-[11px] text-muted">Sueros, mascarillas y regeneración.</span>
                        </Link>
                        <Link href="/tienda?categoria=beauty-tech" className="group/item flex flex-col rounded-lg p-2 transition-all hover:bg-surface">
                          <span className="text-xs font-bold text-navy group-hover/item:text-teal-dark">Beauty Tech</span>
                          <span className="text-[11px] text-muted">Aparatología LED y microcorrientes.</span>
                        </Link>
                        <Link href="/tienda?categoria=cuidado-capilar" className="group/item flex flex-col rounded-lg p-2 transition-all hover:bg-surface">
                          <span className="text-xs font-bold text-navy group-hover/item:text-teal-dark">Cuidado Capilar</span>
                          <span className="text-[11px] text-muted">Biotina y nutrición folicular.</span>
                        </Link>
                      </div>

                      <div className="flex flex-col gap-2 border-l border-border pl-6">
                        <span className="font-label text-[10px] font-bold uppercase tracking-wider text-teal-accessible">
                          Silueta &amp; Cabina
                        </span>
                        <Link href="/tienda?categoria=cuidado-corporal" className="group/item flex flex-col rounded-lg p-2 transition-all hover:bg-surface">
                          <span className="text-xs font-bold text-navy group-hover/item:text-teal-dark">Cuidado Corporal</span>
                          <span className="text-[11px] text-muted">Geles reductores y firmeza.</span>
                        </Link>
                        <Link href="/tienda?categoria=linea-profesional" className="group/item flex flex-col rounded-lg p-2 transition-all hover:bg-surface">
                          <span className="text-xs font-bold text-navy group-hover/item:text-teal-dark">Línea Profesional</span>
                          <span className="text-[11px] text-muted">Mesoterapia y cabina estética.</span>
                        </Link>

                        <Link
                          href="/tienda"
                          className="mt-auto pt-2 block font-label text-xs font-bold text-teal-dark hover:underline"
                        >
                          Ver todos los 150 productos →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/nosotros"
            className="text-sm font-semibold text-navy hover:text-teal transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-semibold text-navy hover:text-teal transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Right: Functional Search + WhatsApp CTA + Cart */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Functional Search Bar with Live Dropdown */}
          <div ref={searchContainerRef} className="relative hidden md:block">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onFocus={() => setSearchOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  className="h-10 w-44 lg:w-56 xl:w-64 pl-9 pr-8 rounded-full bg-surface border border-border text-xs text-navy placeholder:text-muted focus:outline-none focus:border-teal focus:bg-white focus:w-64 lg:focus:w-72 transition-all duration-300"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted hover:text-navy"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>

            {/* Live Autocomplete Results Modal */}
            <AnimatePresence>
              {searchOpen && searchQuery.trim().length >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-border bg-white shadow-modal overflow-hidden z-50"
                >
                  <div className="p-3 border-b border-border bg-surface/50 flex items-center justify-between text-xs">
                    <span className="font-semibold text-navy">
                      {isSearching ? "Buscando productos..." : `${searchResults.length} resultados encontrados`}
                    </span>
                    <span className="text-[10px] text-muted">Presiona Enter para ver todos</span>
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-border/60">
                    {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <Link
                          key={item.id}
                          href={`/producto/${item.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center gap-3 p-3 hover:bg-surface transition-colors"
                        >
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface border border-border">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-1"
                              />
                            ) : (
                              <div className="h-full w-full bg-surface" />
                            )}
                          </div>
                          <div className="flex flex-1 flex-col overflow-hidden">
                            <span className="font-label text-[9px] font-bold uppercase tracking-wider text-teal-accessible">
                              {item.categoryLabel}
                            </span>
                            <span className="truncate text-xs font-semibold text-navy">
                              {item.name}
                            </span>
                            <span className="font-mono text-xs font-bold text-navy">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </Link>
                      ))
                    ) : !isSearching ? (
                      <div className="p-6 text-center text-xs text-muted">
                        No se encontraron productos para &ldquo;{searchQuery}&rdquo;.
                      </div>
                    ) : null}
                  </div>

                  {searchResults.length > 0 && (
                    <div className="p-2.5 border-t border-border bg-surface text-center">
                      <button
                        onClick={handleSearchSubmit}
                        className="text-xs font-bold text-teal-dark hover:underline"
                      >
                        Ver todos los resultados en la tienda →
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Asesoría WhatsApp CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-teal px-4.5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-teal-dark active:scale-[0.98] shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Asesoría por WhatsApp
          </a>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-surface text-navy hover:bg-border transition-colors shrink-0"
            aria-label={`Carrito (${itemCount} productos)`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white shadow-sm">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-white px-4 py-6 shadow-modal lg:hidden"
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative mb-5">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-full bg-surface border border-border text-xs text-navy focus:outline-none focus:border-teal"
              />
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 border-t border-border/80">
                <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted">
                  Categorías
                </span>
                <div className="mt-1 flex flex-col gap-1">
                  <Link
                    href="/tienda?categoria=cuidado-facial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs text-navy hover:bg-surface"
                  >
                    Cuidado Facial
                  </Link>
                  <Link
                    href="/tienda?categoria=beauty-tech"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs text-navy hover:bg-surface"
                  >
                    Beauty Tech
                  </Link>
                  <Link
                    href="/tienda?categoria=cuidado-corporal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs text-navy hover:bg-surface"
                  >
                    Cuidado Corporal
                  </Link>
                  <Link
                    href="/tienda?categoria=cuidado-capilar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs text-navy hover:bg-surface"
                  >
                    Cuidado Capilar
                  </Link>
                  <Link
                    href="/tienda?categoria=linea-profesional"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs text-navy hover:bg-surface"
                  >
                    Línea Profesional
                  </Link>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal py-3 text-xs font-bold text-white shadow-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Asesoría por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
