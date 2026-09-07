import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Size = "sm" | "md" | "lg";

/** Uniform 1:1 white matte plates — real Amazon photos, object-contain. */
const sizes: Record<Size, string> = {
  sm: "aspect-square w-full",
  md: "aspect-square w-full",
  lg: "aspect-square w-full",
};

const padding: Record<Size, string> = {
  sm: "p-5",
  md: "p-9 sm:p-11",
  lg: "p-12 sm:p-16",
};

export function ProductVisual({
  product,
  size = "md",
  className,
}: {
  product: Product;
  size?: Size;
  className?: string;
}) {
  if (!product.imageUrl) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-white text-ink-soft",
          sizes[size],
          className,
        )}
      >
        <span className="text-sm">{product.name}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        // White matte absorbs Amazon white cutouts; lifestyle shots letterbox cleanly.
        "product-plate relative overflow-hidden bg-white",
        sizes[size],
        padding[size],
        className,
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt ?? product.name}
          fill
          className="object-contain transition duration-500 ease-out group-hover:scale-[1.03]"
          sizes={
            size === "lg"
              ? "(max-width: 1024px) 100vw, 55vw"
              : size === "md"
                ? "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                : "8rem"
          }
        />
      </div>
    </div>
  );
}
