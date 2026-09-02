"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { ProductVisual } from "@/components/product-visual";
import { formatPrice, getProduct } from "@/lib/products";

export function CartView() {
  const { lines, subtotal, setQuantity, remove } = useCart();
  const items = lines
    .map((line) => {
      const product = getProduct(line.slug);
      return product ? { line, product } : null;
    })
    .filter(Boolean) as {
    line: { slug: string; quantity: number };
    product: NonNullable<ReturnType<typeof getProduct>>;
  }[];

  if (items.length === 0) {
    return (
      <div className="rounded-[1.8rem] bg-cream px-6 py-20 text-center ring-1 ring-ink/6">
        <p className="font-heading text-3xl tracking-tight">Your bag is empty.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
          A lamp, a quiet speaker, a pane of colour — start with one object that
          changes the room.
        </p>
        <Button asChild className="mt-8 h-12 rounded-full bg-ink px-6 text-paper">
          <Link href="/shop">Browse the shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
      <ul className="space-y-4">
        {items.map(({ line, product }) => (
          <li
            key={product.slug}
            className="grid grid-cols-[6.5rem_1fr] overflow-hidden rounded-[1.4rem] bg-cream ring-1 ring-ink/6 sm:grid-cols-[8rem_1fr]"
          >
            <ProductVisual product={product} size="sm" className="h-full min-h-28" />
            <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
              <div>
                <Link
                  href={`/shop/${product.slug}`}
                  className="font-heading text-xl tracking-tight hover:text-jelly"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm text-ink-soft">{product.tagline}</p>
                <p className="mt-2 text-sm font-semibold">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center rounded-full bg-paper ring-1 ring-ink/8">
                  <button
                    type="button"
                    className="grid size-9 place-items-center"
                    onClick={() => setQuantity(product.slug, line.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="min-w-6 text-center text-sm">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    className="grid size-9 place-items-center"
                    onClick={() => setQuantity(product.slug, line.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => remove(product.slug)}
                  className="grid size-9 place-items-center rounded-full text-ink-soft hover:bg-ink/5 hover:text-ink"
                  aria-label={`Remove ${product.name}`}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <aside className="h-fit rounded-[1.6rem] bg-ink p-6 text-paper">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
          Summary
        </p>
        <div className="mt-6 flex items-end justify-between">
          <span className="text-sm text-paper/70">Subtotal</span>
          <span className="font-heading text-3xl">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-paper/55">
          Shipping calculated at checkout. This is a demo storefront — no real
          payment is taken.
        </p>
        <Button
          asChild
          className="mt-8 h-12 w-full rounded-full bg-jelly text-white hover:bg-jelly/90"
        >
          <Link href="/checkout">Continue to checkout</Link>
        </Button>
      </aside>
    </div>
  );
}
