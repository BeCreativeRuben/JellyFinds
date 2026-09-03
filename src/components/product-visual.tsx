import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-36",
  md: "h-64",
  lg: "h-[28rem]",
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
        className="object-contain p-6"
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
