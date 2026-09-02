"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const { add } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <Button
      type="button"
      size="lg"
      className={cn(
        "h-12 rounded-full bg-ink px-6 text-sm font-medium text-paper hover:bg-ink/90",
        className,
      )}
      onClick={() => {
        add(slug);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1400);
      }}
    >
      {justAdded ? "Added to bag" : "Add to bag"}
    </Button>
  );
}
