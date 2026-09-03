import { CheckoutForm } from "@/components/checkout-form";

export const metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
        Checkout
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-tight">
        Buying happens on Amazon
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">
        Every product on JellyFinds links directly to Amazon.nl. Find something
        you like and hit &ldquo;Bekijk op Amazon&rdquo; to purchase.
      </p>
      <div className="mt-10">
        <CheckoutForm />
      </div>
    </div>
  );
}
