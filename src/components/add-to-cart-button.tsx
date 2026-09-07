"use client";

import { Button } from "@/components/ui/button";
import { amazonAffiliateUrl } from "@/lib/amazon";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  amazonUrl,
  slug,
  className,
}: {
  amazonUrl: string;
  slug?: string;
  className?: string;
}) {
  const href = amazonAffiliateUrl(amazonUrl);

  function trackClick() {
    if (!slug) return;
    const body = JSON.stringify({ slug });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/clicks",
        new Blob([body], { type: "application/json" }),
      );
      return;
    }
    void fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  }

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-11 rounded-full bg-ink px-6 text-sm font-medium text-paper transition hover:bg-ink/85",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={trackClick}
      >
        Bekijk op Amazon
      </a>
    </Button>
  );
}
