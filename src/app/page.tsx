import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, rooms } from "@/lib/products";

const roomTones = [
  "from-jelly/25 via-cream to-amber/20",
  "from-violet/25 via-cream to-mint/20",
  "from-mint/25 via-cream to-jelly/15",
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="jelly-blob -left-16 top-10 size-72 bg-jelly/35" />
        <div className="jelly-blob right-0 top-24 size-80 bg-mint/30" />
        <div className="jelly-blob bottom-0 left-1/3 size-64 bg-violet/25" />
        <div className="relative mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-jelly">
              Soft tech for real rooms
            </p>
            <h1 className="mt-5 max-w-xl font-heading text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
              Objects that{" "}
              <em className="text-jelly not-italic">glow</em> a little.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-ink-soft">
              JellyFinds is a small shop of decorative tech — lamps you can
              hold, clocks that behave like weather, and a speaker that sits
              like a stone on the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition hover:bg-ink/90"
              >
                Shop the drop
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center rounded-full bg-cream px-6 text-sm font-medium text-ink ring-1 ring-ink/10 transition hover:ring-ink/20"
              >
                The house story
              </Link>
            </div>
          </div>
          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-jelly/70 via-violet/50 to-mint/40 shadow-[0_30px_60px_-28px_rgba(242,92,138,0.55)]" />
            <div className="mt-10 aspect-square rounded-full bg-gradient-to-tr from-amber/80 to-jelly/50" />
            <div className="col-span-2 h-28 rounded-[2rem] bg-gradient-to-r from-mint/70 via-cream to-violet/50" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {rooms.map((room, index) => (
            <Link
              key={room.slug}
              href={`/shop?room=${room.slug}`}
              className={`group rounded-[1.6rem] bg-gradient-to-br p-6 ring-1 ring-ink/6 transition hover:-translate-y-0.5 ${roomTones[index]}`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                Room
              </p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight">
                {room.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{room.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
                Browse <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
              This week
            </p>
            <h2 className="mt-2 font-heading text-4xl tracking-tight">
              The glowing shelf
            </h2>
          </div>
          <Link href="/shop" className="hidden text-sm text-ink-soft hover:text-ink sm:inline">
            See everything
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper sm:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly-soft">
            A note from the studio
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            Tech that looks like it belongs next to a plant, not a router.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-paper/65">
            We pick objects for living rooms and bedrooms first. If it needs a
            fifteen-page manual, it does not make the shelf.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-paper px-6 text-sm font-medium text-ink"
          >
            Read about JellyFinds
          </Link>
        </div>
      </section>
    </div>
  );
}
