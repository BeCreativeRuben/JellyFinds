"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CheckoutForm() {
  return (
    <div className="rounded-3xl bg-cream px-6 py-16 text-center">
      <p className="text-2xl font-semibold tracking-tight">
        Checkout happens on Amazon.
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
        Find a product you love in the shop, then use the &ldquo;Bekijk op
        Amazon&rdquo; button to buy it directly on Amazon.nl.
      </p>
      <Button
        asChild
        className="mt-6 h-11 rounded-full bg-ink px-6 text-paper hover:bg-ink/85"
      >
        <Link href="/shop">Return to shop</Link>
      </Button>
    </div>
  );
}
