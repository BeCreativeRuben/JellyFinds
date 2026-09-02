import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
        404
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-tight">
        That find rolled away.
      </h1>
      <p className="mt-4 text-sm leading-7 text-ink-soft">
        The page is gone, or it never made the shelf. Try the shop instead.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper"
      >
        Back to the shop
      </Link>
    </div>
  );
}
