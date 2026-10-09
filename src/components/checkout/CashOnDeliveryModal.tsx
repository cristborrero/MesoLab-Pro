"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product, ProductPresentation } from "@/lib/types";
import { formatPrice } from "@/lib/data";

const DEPARTAMENTOS_COLOMBIA = [
  "Bogotá D.C.",
  "Antioquia",
  "Valle del Cauca",
  "Cundinamarca",
  "Atlántico",
  "Santander",
  "Bolívar",
  "Tolima",
  "Risaralda",
  "Caldas",
  "Huila",
  "Norte de Santander",
  "Meta",
  "Boyacá",
  "Quindío",
  "Cesar",
  "Córdoba",
  "Nariño",
  "Cauca",
  "Magdalena",
  "Sucre",
  "La Guajira",
  "Casanare",
  "Caquetá",
  "Putumayo",
  "Arauca",
  "Chocó",
];

const WHATSAPP_PHONE = "573133847436";

interface CashOnDeliveryModalProps {
  product: Product;
  selectedPresentation: ProductPresentation;
  initialQuantity?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function CashOnDeliveryModal({
  product,
  selectedPresentation,
  initialQuantity = 1,
  isOpen,
  onClose,
}: CashOnDeliveryModalProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [departamento, setDepartamento] = useState("Bogotá D.C.");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [notas, setNotas] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  const total = selectedPresentation.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim() || !ciudad.trim() || !direccion.trim()) {
      alert("Por favor completa todos los campos requeridos para coordinar la entrega.");
      return;
    }

    setIsSubmitting(true);
    const code = `MLP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(code);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
    }, 600);
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `¡Hola MesoLab Pro! Acabo de registrar mi pedido Contra Entrega:\n\n` +
      `📋 *Código de Pedido:* ${orderCode}\n` +
      `📦 *Producto:* ${product.name} (${selectedPresentation.label})\n` +
      `🔢 *Cantidad:* ${quantity}\n` +
      `💰 *Total a pagar:* ${formatPrice(total)} COP\n\n` +
      `👤 *Nombre:* ${nombre}\n` +
      `📱 *Teléfono:* ${telefono}\n` +
      `📍 *Destino:* ${ciudad}, ${departamento}\n` +
      `🏠 *Dirección:* ${direccion} ${barrio ? `(Barrio: ${barrio})` : ""}\n` +
      (notas ? `📝 *Notas:* ${notas}\n` : "") +
      `\n¿Podrían confirmarme la fecha estimada de entrega? Muchas gracias.`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-border/80 overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="bg-navy px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00cece]/20 text-[#00cece]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white leading-tight">
                    Pedido Contra Entrega (Pagas al Recibir)
                  </h3>
                  <p className="font-label text-[11px] text-white/70">
                    Envío gratis &middot; Pagas en efectivo al repartidor
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white rounded-lg p-1 transition-colors"
                aria-label="Cerrar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!orderConfirmed ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Resumen del Producto */}
                  <div className="flex items-center gap-3.5 rounded-xl bg-surface p-3 border border-border/60">
                    <div className="relative h-16 w-16 shrink-0 rounded-lg bg-white overflow-hidden border border-border/40">
                      <Image
                        src={selectedPresentation.image || product.image || ""}
                        alt={product.name}
                        fill
                        className="object-contain p-1.5 mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-bold text-navy truncate">
                        {product.name}
                      </h4>
                      <p className="font-label text-xs text-muted">
                        {selectedPresentation.label}
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-teal-dark">
                          {formatPrice(selectedPresentation.price)} COP
                        </span>
                        {/* Stepper */}
                        <div className="flex items-center rounded-md border border-border bg-white scale-90 origin-right">
                          <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-2 py-0.5 text-muted hover:bg-surface text-sm"
                          >
                            −
                          </button>
                          <span className="px-2.5 font-bold text-xs text-navy">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-2 py-0.5 text-muted hover:bg-surface text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Datos del Cliente */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej: Laura Restrepo"
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ej: 310 123 4567"
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        Departamento *
                      </label>
                      <select
                        value={departamento}
                        onChange={(e) => setDepartamento(e.target.value)}
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy bg-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        {DEPARTAMENTOS_COLOMBIA.map((dep) => (
                          <option key={dep} value={dep}>
                            {dep}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        Ciudad / Municipio *
                      </label>
                      <input
                        type="text"
                        required
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                        placeholder="Ej: Medellín"
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        Dirección de Entrega *
                      </label>
                      <input
                        type="text"
                        required
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="Ej: Calle 45 # 23-12 Apto 402"
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-label text-xs font-semibold text-navy mb-1">
                        Barrio
                      </label>
                      <input
                        type="text"
                        value={barrio}
                        onChange={(e) => setBarrio(e.target.value)}
                        placeholder="Ej: El Poblado"
                        className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  </div>

                  {/* Notas */}
                  <div>
                    <label className="block font-label text-xs font-semibold text-navy mb-1">
                      Indicaciones para la entrega (Opcional)
                    </label>
                    <input
                      type="text"
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      placeholder="Ej: Dejar en portería o llamar antes de llegar"
                      className="w-full rounded-lg border border-border px-3 py-2 text-sm text-navy placeholder:text-muted/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    />
                  </div>

                  {/* Resumen Total y Garantías */}
                  <div className="mt-2 rounded-xl bg-teal-light/50 p-4 border border-teal/20 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Costo del Envío:</span>
                      <span className="font-bold text-teal-dark uppercase text-xs">¡Gratis a Colombia!</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-teal/20 pt-2">
                      <span className="font-display font-bold text-navy">Total a Pagar en Casa:</span>
                      <span className="font-mono text-xl font-extrabold text-navy">
                        {formatPrice(total)} COP
                      </span>
                    </div>
                  </div>

                  {/* Botón de Confirmación */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#00cece] hover:bg-[#00b5b5] px-6 font-display font-bold text-navy transition-all shadow-[0_4px_20px_rgba(0,206,206,0.25)] hover:shadow-[0_4px_25px_rgba(0,206,206,0.4)] active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Generando pedido...</span>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Confirmar Pedido y Pagar al Recibir
                      </>
                    )}
                  </button>

                  <p className="text-center font-label text-[11px] text-muted">
                    🔒 Tus datos están protegidos. Te contactaremos por WhatsApp antes de despachar.
                  </p>
                </form>
              ) : (
                /* Estado Confirmado */
                <div className="py-4 text-center flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy">
                      ¡Pedido Registrado con Éxito!
                    </h3>
                    <p className="font-label text-sm text-muted mt-1">
                      Código de seguimiento: <span className="font-mono font-bold text-navy">{orderCode}</span>
                    </p>
                  </div>

                  <div className="w-full rounded-xl bg-surface p-4 text-left border border-border/80 text-sm space-y-1.5">
                    <p><strong className="text-navy">Destinatario:</strong> {nombre}</p>
                    <p><strong className="text-navy">Destino:</strong> {direccion}, {ciudad} ({departamento})</p>
                    <p><strong className="text-navy">Total a pagar al recibir:</strong> <span className="font-mono font-bold text-teal-dark">{formatPrice(total)} COP</span></p>
                    <p className="font-label text-xs text-muted pt-2 border-t border-border/60">
                      ⏱ Tiempo de entrega: 2 a 4 días hábiles vía transportadora certificada.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 w-full pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppConfirmation}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-semibold text-white transition-all hover:bg-[#20bd5a] shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Avisar por WhatsApp para Agilizar Despacho
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-xs font-semibold text-muted hover:text-navy py-1.5 transition-colors"
                    >
                      Cerrar ventana
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
