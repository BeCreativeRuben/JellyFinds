import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/[0.06]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-7 text-ink-soft">
            Decorative tech for rooms that already have a personality. Real
            products, straight from Amazon.nl.
          </p>
        </div>
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Browse
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/shop" className="text-ink-soft transition hover:text-ink">
                All finds
              </Link>
            </li>
            <li>
              <Link href="/shop?room=living-room" className="text-ink-soft transition hover:text-ink">
                Living room
              </Link>
            </li>
            <li>
              <Link href="/shop?room=bedroom" className="text-ink-soft transition hover:text-ink">
                Bedroom
              </Link>
            </li>
            <li>
              <Link href="/shop?room=desk" className="text-ink-soft transition hover:text-ink">
                Desk
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            House
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@jellyfinds.studio" className="text-ink-soft transition hover:text-ink">
                hello@jellyfinds.studio
              </a>
            </li>
            <li>
              <Link href="/about" className="text-ink-soft transition hover:text-ink">
                Associates disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/[0.06]">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs leading-5 text-ink-soft sm:px-8">
          © {new Date().getFullYear()} JellyFinds. As an Amazon Associate we
          earn from qualifying purchases.{" "}
          <Link href="/about" className="underline-offset-2 hover:text-ink hover:underline">
            Details
          </Link>
        </p>
      </div>
    </footer>
  );
}
