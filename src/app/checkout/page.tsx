import { CheckoutForm } from "@/components/checkout-form";

export const metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Checkout
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Buying happens on Amazon
      </h1>
      <p className="mt-2 max-w-xl text-sm leading-7 text-ink-soft">
        Every product on JellyFinds links directly to Amazon.nl. Find something
        you like and hit &ldquo;Bekijk op Amazon&rdquo; to purchase.
      </p>
      <div className="mt-10">
        <CheckoutForm />
      </div>
    </div>
  );
}
