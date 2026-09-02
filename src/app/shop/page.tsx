import { Suspense } from "react";
import { ShopCatalog } from "@/components/shop-catalog";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop",
  description: "Browse decorative tech for living rooms, bedrooms, and desks.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
        The shop
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-tight">All finds</h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">
        Twelve objects, chosen for rooms rather than spec sheets. Filter by
        where they live, or search by name.
      </p>
      <div className="mt-10">
        <Suspense
          fallback={
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-80 animate-pulse rounded-[1.6rem] bg-cream"
                />
              ))}
            </div>
          }
        >
          <ShopCatalog products={products} />
        </Suspense>
      </div>
    </div>
  );
}
