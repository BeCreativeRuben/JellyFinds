"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CartView() {
  return (
    <div className="rounded-[1.8rem] bg-cream px-6 py-20 text-center ring-1 ring-ink/6">
      <p className="font-heading text-3xl tracking-tight">
        We don&rsquo;t have a basket — yet.
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
        Every product links directly to Amazon.nl where you can buy it. Browse
        the shop, find something you like, and hit &ldquo;Bekijk op
        Amazon&rdquo;.
      </p>
      <Button
        asChild
        className="mt-8 h-12 rounded-full bg-ink px-6 text-paper"
      >
        <Link href="/shop">Browse the shop</Link>
      </Button>
    </div>
  );
}
