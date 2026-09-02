import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { ProductVisual } from "@/components/product-visual";
import {
  formatPrice,
  getProduct,
  getRelatedProducts,
  products,
  roomLabel,
} from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-sm text-ink-soft">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?room=${product.room}`} className="hover:text-ink">
          {roomLabel(product.room)}
        </Link>
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] ring-1 ring-ink/6">
          <ProductVisual product={product} size="lg" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-jelly">
            {roomLabel(product.room)}
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">{product.tagline}</p>
          <p className="mt-6 text-3xl font-semibold">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-soft">
            {product.description}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2">
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: product.accent }}
                />
                {detail}
              </li>
            ))}
          </ul>
          <AddToCartButton slug={product.slug} className="mt-8" />
        </div>
      </div>
      <section className="mt-20">
        <h2 className="font-heading text-3xl tracking-tight">Nearby on the shelf</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
