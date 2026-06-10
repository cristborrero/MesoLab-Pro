"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/data";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
  } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-modal transition-transform duration-300 ease-[var(--ease-default)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold font-display text-navy">
            Tu pedido
            {itemCount > 0 && (
              <span className="ml-2 text-sm font-normal text-muted">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
            aria-label="Cerrar carrito"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="text-4xl">🧪</div>
              <p className="text-muted">Tu carrito está vacío</p>
              <button
                onClick={closeCart}
                className="mt-2 text-sm font-medium text-teal-dark hover:underline"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => {
                const presentation = item.product.presentations.find(
                  (p) => p.id === item.presentationId
                );
                if (!presentation) return null;

                return (
                  <li
                    key={`${item.product.id}-${item.presentationId}`}
                    className="flex gap-4 rounded-lg border border-border p-3"
                  >
                    {/* Thumbnail placeholder */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-surface text-2xl">
                      🧪
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-sm font-semibold text-navy leading-tight">
                        {item.product.name}
                      </p>
                      <p className="font-label text-xs text-muted">
                        {presentation.label}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.presentationId,
                                item.quantity - 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-border text-sm text-muted transition-colors hover:bg-surface"
                            aria-label="Reducir cantidad"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-label text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.presentationId,
                                item.quantity + 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-border text-sm text-muted transition-colors hover:bg-surface"
                            aria-label="Aumentar cantidad"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-label text-sm font-medium text-navy">
                          {formatPrice(presentation.price * item.quantity)}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.presentationId)
                      }
                      className="self-start text-muted transition-colors hover:text-error"
                      aria-label={`Eliminar ${item.product.name}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 3l8 8M11 3L3 11" />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-label text-lg font-semibold text-navy">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-muted">
              Envío calculado en el checkout
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-teal font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Ir al checkout
            </Link>
            <button
              onClick={closeCart}
              className="mt-2 w-full text-center text-sm text-teal-dark transition-colors hover:underline"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
