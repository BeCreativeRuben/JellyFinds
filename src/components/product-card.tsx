import Link from "next/link";
import { formatPrice, roomLabel, type Product } from "@/lib/products";
import { ProductVisual } from "@/components/product-visual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        href={`/shop/${product.slug}`}
        className="block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_8px_30px_-18px_rgb(29_29_31_/_0.28)] ring-1 ring-ink/[0.06] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-20px_rgb(29_29_31_/_0.38)]"
      >
        <ProductVisual product={product} size="md" />
        <div className="space-y-1.5 border-t border-ink/[0.06] bg-[#f5f5f7] px-5 py-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
            {roomLabel(product.room)}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {product.name}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                {product.tagline}
              </p>
            </div>
            <p className="shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-ink">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
