"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { rooms, type Product, type Room } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc";

export function ShopCatalog({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") as Room | null;
  const initialQuery = searchParams.get("q") ?? "";
  const [room, setRoom] = useState<Room | "all">(initialRoom ?? "all");
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products
      .filter((product) => (room === "all" ? true : product.room === room))
      .filter((product) =>
        needle
          ? `${product.name} ${product.tagline} ${product.description}`
              .toLowerCase()
              .includes(needle)
          : true,
      )
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      });
  }, [products, query, room, sort]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterChip active={room === "all"} onClick={() => setRoom("all")}>
            All rooms
          </FilterChip>
          {rooms.map((item) => (
            <FilterChip
              key={item.slug}
              active={room === item.slug}
              onClick={() => setRoom(item.slug)}
            >
              {item.label}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lamps, clocks, frames…"
            className="h-11 w-full rounded-full border border-ink/10 bg-cream px-4 text-sm outline-none ring-jelly/30 placeholder:text-ink-soft focus:ring-3 sm:w-72"
          />
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="h-11 rounded-full border border-ink/10 bg-cream px-4 text-sm outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-[1.6rem] bg-cream px-6 py-16 text-center ring-1 ring-ink/6">
          <p className="font-heading text-2xl">Nothing in that corner yet.</p>
          <p className="mt-2 text-sm text-ink-soft">
            Try another room, or clear the search.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm transition",
        active
          ? "bg-ink text-paper"
          : "bg-cream text-ink-soft ring-1 ring-ink/8 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
