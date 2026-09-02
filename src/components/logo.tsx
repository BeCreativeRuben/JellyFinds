import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 text-ink",
        className,
      )}
    >
      <span className="relative grid size-8 place-items-center">
        <span className="absolute inset-0 rounded-full bg-jelly/25 blur-[6px] transition group-hover:bg-mint/30" />
        <svg viewBox="0 0 32 32" className="relative size-8" aria-hidden>
          <defs>
            <radialGradient id="jelly-drop" cx="32%" cy="28%" r="70%">
              <stop offset="0%" stopColor="#FFE3EC" />
              <stop offset="55%" stopColor="#F25C8A" />
              <stop offset="100%" stopColor="#C43D7A" />
            </radialGradient>
          </defs>
          <path
            d="M16 4C16 4 7 14.2 7 20.2C7 25.1 10.9 29 16 29C21.1 29 25 25.1 25 20.2C25 14.2 16 4 16 4Z"
            fill="url(#jelly-drop)"
          />
          <ellipse cx="13" cy="17" rx="3.2" ry="2" fill="white" opacity="0.55" />
        </svg>
      </span>
      <span className="font-heading text-[1.15rem] leading-none tracking-tight">
        Jelly<span className="text-jelly">Finds</span>
      </span>
    </Link>
  );
}
