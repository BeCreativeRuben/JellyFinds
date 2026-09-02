import Link from "next/link";
import { formatPrice, roomLabel, type Product } from "@/lib/products";
import { ProductVisual } from "@/components/product-visual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        href={`/shop/${product.slug}`}
        className="block overflow-hidden rounded-[1.6rem] bg-cream shadow-[0_18px_40px_-28px_rgba(28,18,36,0.45)] ring-1 ring-ink/6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(28,18,36,0.4)]"
      >
        <ProductVisual product={product} size="md" />
        <div className="space-y-2 px-5 py-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
            {roomLabel(product.room)}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl tracking-tight text-ink">
                {product.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-ink-soft">
                {product.tagline}
              </p>
            </div>
            <p className="shrink-0 pt-1 text-sm font-semibold text-ink">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
