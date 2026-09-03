import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, rooms } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Objects that glow a little.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
            JellyFinds is a curated shop of decorative tech — lamps you can
            hold, speakers that sit like stones, and desk lights that know
            when to dim. Real products, straight from Amazon.nl.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition hover:bg-ink/85"
            >
              Shop all
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-full bg-cream px-6 text-sm font-medium text-ink transition hover:bg-cream/70"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/shop?room=${room.slug}`}
              className="group rounded-2xl bg-cream p-5 transition hover:bg-cream/70"
            >
              <h2 className="text-lg font-semibold tracking-tight">
                {room.label}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{room.blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink-soft group-hover:text-ink">
                Browse <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Featured
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              The glowing shelf
            </h2>
          </div>
          <Link href="/shop" className="hidden text-sm text-ink-soft hover:text-ink sm:inline">
            See everything
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-14 text-paper sm:px-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-paper/50">
            From the studio
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Tech that looks like it belongs next to a plant, not a router.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-paper/60">
            We pick real objects for living rooms, bedrooms, and desks. If it
            needs a fifteen-page manual, it does not make the shelf.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex h-11 items-center rounded-full bg-paper px-6 text-sm font-medium text-ink"
          >
            Read about JellyFinds
          </Link>
        </div>
      </section>
    </div>
  );
}
