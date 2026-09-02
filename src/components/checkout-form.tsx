"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/products";

export function CheckoutForm() {
  const { count, subtotal, clear } = useCart();
  const [done, setDone] = useState(false);

  if (count === 0 && !done) {
    return (
      <div className="rounded-[1.8rem] bg-cream px-6 py-16 text-center ring-1 ring-ink/6">
        <p className="font-heading text-3xl">Nothing to check out yet.</p>
        <Button asChild className="mt-6 h-12 rounded-full bg-ink px-6 text-paper">
          <Link href="/shop">Return to shop</Link>
        </Button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="rounded-[1.8rem] bg-cream px-6 py-20 text-center ring-1 ring-ink/6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
          Order reserved
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-tight">
          We have your note.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-ink-soft">
          This is a design preview — no payment was charged and nothing will
          ship. In a live store, this is where a confirmation would land.
        </p>
        <Button asChild className="mt-8 h-12 rounded-full bg-ink px-6 text-paper">
          <Link href="/shop">Keep browsing</Link>
        </Button>
      </div>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clear();
    setDone(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="space-y-4 rounded-[1.6rem] bg-cream p-6 ring-1 ring-ink/6">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="Address"
          name="address"
          autoComplete="street-address"
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="City" name="city" autoComplete="address-level2" required />
          <Field
            label="Postcode"
            name="postcode"
            autoComplete="postal-code"
            required
          />
        </div>
      </div>
      <aside className="h-fit rounded-[1.6rem] bg-ink p-6 text-paper">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
          Pay later
        </p>
        <p className="mt-4 font-heading text-3xl">{formatPrice(subtotal)}</p>
        <p className="mt-3 text-sm leading-6 text-paper/55">
          {count} {count === 1 ? "object" : "objects"} in the bag. Checkout is a
          demo — we will not store this form.
        </p>
        <Button
          type="submit"
          className="mt-8 h-12 w-full rounded-full bg-jelly text-white hover:bg-jelly/90"
        >
          Place demo order
        </Button>
      </aside>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-2xl border border-ink/10 bg-paper px-4 text-sm outline-none ring-jelly/30 focus:ring-3"
      />
    </label>
  );
}
