import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Size = "sm" | "md" | "lg";

/** Uniform 1:1 matte plates — object-contain keeps real Amazon photos honest. */
const sizes: Record<Size, string> = {
  sm: "aspect-square w-full",
  md: "aspect-square w-full",
  lg: "aspect-square w-full",
};

const padding: Record<Size, string> = {
  sm: "p-5",
  md: "p-8 sm:p-10",
  lg: "p-10 sm:p-16",
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
          "flex items-center justify-center bg-[#f5f5f7] text-ink-soft",
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
        "product-plate relative overflow-hidden bg-[#f5f5f7]",
        sizes[size],
        className,
      )}
    >
      {/* Soft letterbox / matte — absorbs busy Amazon PNG edges without replacing the product */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#f5f5f7_72%)]"
      />
      <div className={cn("absolute inset-0", padding[size])}>
        <div className="relative h-full w-full">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt ?? product.name}
            fill
            className="object-contain drop-shadow-[0_10px_28px_rgb(29_29_31_/_0.10)] transition duration-500 ease-out group-hover:scale-[1.03]"
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
    </div>
  );
}
