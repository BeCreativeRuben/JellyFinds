"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getBestsellers, type Product } from "@/lib/products";

export function BestsellersGrid({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/clicks", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as {
          counts?: Record<string, number>;
          total?: number;
        };
        if (cancelled) return;
        if ((data.total ?? 0) > 0 && data.counts) {
          setProducts(getBestsellers(6, data.counts));
        }
      } catch {
        // Keep bestsellerRank ordering when tracking is unavailable.
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Bestsellers
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Ordered by real interest
          </h2>
          <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-soft">
            Ranked from outbound Amazon clicks when we have them — never fake
            sold counts.
          </p>
        </div>
        <Link
          href="/shop"
          className="hidden text-sm text-ink-soft transition hover:text-ink sm:inline"
        >
          See everything
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
