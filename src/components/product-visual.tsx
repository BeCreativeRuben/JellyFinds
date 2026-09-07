import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Size = "sm" | "md" | "lg";

/** Uniform 1:1 photo frames — object-contain keeps product proportions honest. */
const sizes: Record<Size, string> = {
  sm: "aspect-square w-full",
  md: "aspect-square w-full",
  lg: "aspect-square w-full",
};

const padding: Record<Size, string> = {
  sm: "p-4",
  md: "p-7",
  lg: "p-10 sm:p-14",
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
          "flex items-center justify-center bg-cream text-ink-soft",
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
        "relative overflow-hidden bg-cream",
        sizes[size],
        className,
      )}
    >
      <Image
        src={product.imageUrl}
        alt={product.imageAlt ?? product.name}
        fill
        className={cn(
          "object-contain transition duration-500 ease-out group-hover:scale-[1.03]",
          padding[size],
        )}
        sizes={
          size === "lg"
            ? "(max-width: 1024px) 100vw, 55vw"
            : size === "md"
              ? "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              : "8rem"
        }
      />
    </div>
  );
}
