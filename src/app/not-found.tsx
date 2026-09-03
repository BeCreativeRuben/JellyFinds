import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        That find rolled away.
      </h1>
      <p className="mt-3 text-sm leading-7 text-ink-soft">
        The page is gone, or it never made the shelf. Try the shop instead.
      </p>
      <Link
        href="/shop"
        className="mt-7 inline-flex h-11 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper"
      >
        Back to the shop
      </Link>
    </div>
  );
}
