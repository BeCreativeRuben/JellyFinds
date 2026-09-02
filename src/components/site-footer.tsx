import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/8 bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo className="text-paper [&_span]:text-paper" />
          <p className="max-w-sm text-sm leading-7 text-paper/70">
            Decorative tech for rooms that already have a personality. Soft
            objects, quiet light, a little colour — nothing that shouts.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
            Browse
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/shop" className="hover:text-jelly-soft">
                All finds
              </Link>
            </li>
            <li>
              <Link
                href="/shop?room=living-room"
                className="hover:text-jelly-soft"
              >
                Living room
              </Link>
            </li>
            <li>
              <Link href="/shop?room=bedroom" className="hover:text-jelly-soft">
                Bedroom
              </Link>
            </li>
            <li>
              <Link href="/shop?room=desk" className="hover:text-jelly-soft">
                Desk
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
            House
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-jelly-soft">
                About JellyFinds
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-jelly-soft">
                Your bag
              </Link>
            </li>
            <li>
              <a href="mailto:hello@jellyfinds.studio" className="hover:text-jelly-soft">
                hello@jellyfinds.studio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-paper/45 sm:px-8">
          © {new Date().getFullYear()} JellyFinds. Objects that glow a little.
        </p>
      </div>
    </footer>
  );
}
