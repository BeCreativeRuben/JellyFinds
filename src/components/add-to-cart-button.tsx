"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  amazonUrl,
  className,
}: {
  amazonUrl: string;
  slug?: string;
  className?: string;
}) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-11 rounded-full bg-ink px-6 text-sm font-medium text-paper hover:bg-ink/85",
        className,
      )}
    >
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
        Bekijk op Amazon
      </a>
    </Button>
  );
}
