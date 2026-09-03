import { CartView } from "@/components/cart-view";

export const metadata = {
  title: "Bag",
};

export default function CartPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Your bag
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Your bag</h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}
