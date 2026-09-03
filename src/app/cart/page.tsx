import { CartView } from "@/components/cart-view";

export const metadata = {
  title: "Bag",
};

export default function CartPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
        Your bag
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-tight">Your bag</h1>
      <div className="mt-10">
        <CartView />
      </div>
    </div>
  );
}
