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
        <span className="mx-2 text-ink-soft/40">/</span>
        <Link href={`/shop?room=${product.room}`} className="hover:text-ink">
          {roomLabel(product.room)}
        </Link>
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-cream">
          <ProductVisual product={product} size="lg" />
        </div>
        <div className="lg:py-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {roomLabel(product.room)}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-base text-ink-soft">{product.tagline}</p>
          <p className="mt-5 text-2xl font-bold">{formatPrice(product.price)}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            {product.description}
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-ink-soft" />
                {detail}
              </li>
            ))}
          </ul>
          <AddToCartButton amazonUrl={product.amazonUrl} className="mt-7" />
        </div>
      </div>
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Nearby on the shelf</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
