"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { useCart } from "@/components/cart-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?room=living-room", label: "Living" },
  { href: "/shop?room=bedroom", label: "Bedroom" },
  { href: "/shop?room=desk", label: "Desk" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-ink-soft transition hover:text-ink",
                pathname === link.href && "text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative inline-flex size-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5"
            aria-label={`Bag, ${count} items`}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute right-1 top-1 grid min-w-4 place-items-center rounded-full bg-jelly px-1 text-[0.65rem] font-semibold text-white">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-ink/8 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
