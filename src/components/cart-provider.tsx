"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

export type CartLine = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const noop = () => {};

export function CartProvider({ children }: { children: ReactNode }) {
  const value = useMemo<CartContextValue>(
    () => ({
      lines: [],
      count: 0,
      subtotal: 0,
      add: noop,
      setQuantity: noop,
      remove: noop,
      clear: noop,
    }),
    [],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
