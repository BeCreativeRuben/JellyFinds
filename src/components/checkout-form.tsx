"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CheckoutForm() {
  return (
    <div className="rounded-[1.8rem] bg-cream px-6 py-16 text-center ring-1 ring-ink/6">
      <p className="font-heading text-3xl">
        Checkout happens on Amazon.
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
        Find a product you love in the shop, then use the &ldquo;Bekijk op
        Amazon&rdquo; button to buy it directly on Amazon.nl.
      </p>
      <Button
        asChild
        className="mt-6 h-12 rounded-full bg-ink px-6 text-paper"
      >
        <Link href="/shop">Return to shop</Link>
      </Button>
    </div>
  );
}
