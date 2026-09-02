"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/products";

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

const STORAGE_KEY = "jellyfinds-cart";
const CartContext = createContext<CartContextValue | null>(null);

let memoryCart: CartLine[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function readCart(): CartLine[] {
  if (typeof window === "undefined") return memoryCart;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryCart;
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    memoryCart = parsed.filter(
      (line) => typeof line.slug === "string" && line.quantity > 0,
    );
    return memoryCart;
  } catch {
    return [];
  }
}

function writeCart(next: CartLine[]) {
  memoryCart = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(subscribe, readCart, () => memoryCart);

  const add = useCallback((slug: string, quantity = 1) => {
    const current = readCart();
    const existing = current.find((line) => line.slug === slug);
    const next = existing
      ? current.map((line) =>
          line.slug === slug
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        )
      : [...current, { slug, quantity }];
    writeCart(next);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      writeCart(readCart().filter((line) => line.slug !== slug));
      return;
    }
    writeCart(
      readCart().map((line) =>
        line.slug === slug ? { ...line, quantity } : line,
      ),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    writeCart(readCart().filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => writeCart([]), []);

  const value = useMemo(() => {
    const detailed = lines
      .map((line) => {
        const product = getProduct(line.slug);
        return product ? { line, product } : null;
      })
      .filter(Boolean) as { line: CartLine; product: Product }[];

    return {
      lines,
      count: detailed.reduce((sum, item) => sum + item.line.quantity, 0),
      subtotal: detailed.reduce(
        (sum, item) => sum + item.product.price * item.line.quantity,
        0,
      ),
      add,
      setQuantity,
      remove,
      clear,
    };
  }, [add, clear, lines, remove, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
