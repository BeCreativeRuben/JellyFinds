"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CartView() {
  return (
    <div className="rounded-3xl bg-cream px-6 py-20 text-center">
      <p className="text-2xl font-semibold tracking-tight">
        We don&rsquo;t have a basket — yet.
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
        Every product links directly to Amazon.nl where you can buy it. Browse
        the shop, find something you like, and hit &ldquo;Bekijk op
        Amazon&rdquo;.
      </p>
      <Button
        asChild
        className="mt-7 h-11 rounded-full bg-ink px-6 text-paper hover:bg-ink/85"
      >
        <Link href="/shop">Browse the shop</Link>
      </Button>
    </div>
  );
}
