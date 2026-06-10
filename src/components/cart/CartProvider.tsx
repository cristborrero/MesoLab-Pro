"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/lib/types";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, presentationId: string, quantity?: number) => void;
  removeItem: (productId: string, presentationId: string) => void;
  updateQuantity: (
    productId: string,
    presentationId: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = useCallback(
    (product: Product, presentationId: string, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) =>
            item.product.id === product.id &&
            item.presentationId === presentationId
        );

        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id &&
            item.presentationId === presentationId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [...prev, { product, presentationId, quantity }];
      });

      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, presentationId: string) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.product.id === productId &&
              item.presentationId === presentationId
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, presentationId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, presentationId);
        return;
      }

      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId &&
          item.presentationId === presentationId
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = items.reduce((acc, item) => {
    const presentation = item.product.presentations.find(
      (p) => p.id === item.presentationId
    );
    return acc + (presentation?.price ?? 0) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
