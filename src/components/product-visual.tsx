import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Product, ProductForm } from "@/lib/products";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-36",
  md: "h-56",
  lg: "h-[28rem]",
};

function Scene({
  hue,
  children,
  className,
}: {
  hue: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      style={{
        background: `radial-gradient(120% 90% at 20% 10%, oklch(0.96 0.04 ${hue}) 0%, oklch(0.88 0.07 ${hue}) 42%, oklch(0.78 0.08 ${hue + 20}) 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute -left-8 -top-10 size-40 rounded-full opacity-70 blur-2xl"
        style={{ background: `oklch(0.92 0.08 ${hue})` }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-6 size-48 rounded-full opacity-50 blur-3xl"
        style={{ background: `oklch(0.72 0.12 ${hue + 40})` }}
      />
      <svg
        viewBox="0 0 200 200"
        className="relative z-10 mx-auto h-full w-full max-w-none"
        aria-hidden
      >
        <defs>
          <radialGradient id={`gel-${hue}`} cx="32%" cy="28%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.85" />
            <stop offset="42%" stopColor={`oklch(0.82 0.12 ${hue})`} stopOpacity="0.95" />
            <stop offset="100%" stopColor={`oklch(0.62 0.14 ${hue + 12})`} />
          </radialGradient>
          <linearGradient id={`shine-${hue}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {children}
      </svg>
    </div>
  );
}

function FormShape({ form, hue }: { form: ProductForm; hue: number }) {
  const fill = `url(#gel-${hue})`;
  const shine = `url(#shine-${hue})`;

  switch (form) {
    case "pebble":
      return (
        <g>
          <ellipse cx="100" cy="118" rx="54" ry="38" fill={fill} />
          <ellipse cx="88" cy="104" rx="18" ry="10" fill={shine} />
          <ellipse cx="100" cy="150" rx="28" ry="5" fill="black" opacity="0.08" />
        </g>
      );
    case "frame":
      return (
        <g>
          <rect x="52" y="42" width="96" height="116" rx="10" fill={fill} />
          <rect x="64" y="54" width="72" height="80" rx="4" fill="white" opacity="0.35" />
          <rect x="52" y="42" width="96" height="116" rx="10" fill="none" stroke="white" strokeOpacity="0.4" />
        </g>
      );
    case "clock":
      return (
        <g>
          <ellipse cx="100" cy="138" rx="58" ry="16" fill={fill} />
          <ellipse cx="100" cy="128" rx="36" ry="10" fill={shine} />
          <path d="M70 90 C90 40 110 40 130 90" fill="none" stroke={`oklch(0.8 0.1 ${hue})`} strokeWidth="3" opacity="0.55" />
        </g>
      );
    case "speaker":
      return (
        <g>
          <ellipse cx="100" cy="150" rx="42" ry="8" fill="black" opacity="0.08" />
          <path d="M62 118 Q100 86 138 118 L132 142 Q100 162 68 142 Z" fill={fill} />
          <ellipse cx="100" cy="112" rx="28" ry="10" fill={shine} />
        </g>
      );
    case "orbit":
      return (
        <g fill="none" stroke={`oklch(0.55 0.12 ${hue})`} strokeWidth="3">
          <ellipse cx="100" cy="100" rx="62" ry="22" transform="rotate(-18 100 100)" />
          <ellipse cx="100" cy="100" rx="50" ry="18" transform="rotate(32 100 100)" />
          <ellipse cx="100" cy="100" rx="38" ry="14" transform="rotate(-8 100 100)" />
          <circle cx="100" cy="100" r="8" fill={fill} stroke="none" />
        </g>
      );
    case "diffuser":
      return (
        <g>
          <ellipse cx="100" cy="128" rx="46" ry="32" fill={fill} />
          <path d="M78 86 C86 62 114 62 122 86" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="3" />
          <ellipse cx="88" cy="116" rx="12" ry="7" fill={shine} />
        </g>
      );
    case "shelf":
      return (
        <g>
          <rect x="28" y="108" width="144" height="14" rx="4" fill={fill} />
          <rect x="28" y="108" width="144" height="4" fill={shine} />
          <rect x="44" y="86" width="28" height="22" rx="3" fill="white" opacity="0.35" />
          <rect x="80" y="72" width="22" height="36" rx="3" fill="white" opacity="0.28" />
        </g>
      );
    case "cube":
      return (
        <g>
          <path d="M100 52 L148 78 L148 126 L100 152 L52 126 L52 78 Z" fill={fill} />
          <path d="M100 52 L148 78 L100 104 L52 78 Z" fill={shine} />
          <circle cx="100" cy="104" r="8" fill="white" opacity="0.7" />
        </g>
      );
    case "nest":
      return (
        <g>
          <ellipse cx="100" cy="118" rx="58" ry="28" fill={fill} />
          <ellipse cx="100" cy="116" rx="34" ry="14" fill="white" opacity="0.28" />
          <ellipse cx="100" cy="148" rx="30" ry="6" fill="black" opacity="0.07" />
        </g>
      );
    case "pane":
      return (
        <g>
          <path d="M78 40 L132 52 L122 162 L68 148 Z" fill={fill} opacity="0.9" />
          <path d="M78 40 L132 52 L122 90 L74 78 Z" fill={shine} />
          <line x1="90" y1="162" x2="110" y2="166" stroke={`oklch(0.45 0.06 ${hue})`} strokeWidth="4" />
        </g>
      );
    case "sprout":
      return (
        <g>
          <path d="M100 160 C100 110 86 92 86 70" fill="none" stroke={`oklch(0.5 0.1 ${hue})`} strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="108" cy="62" rx="22" ry="14" transform="rotate(-18 108 62)" fill={fill} />
          <ellipse cx="100" cy="168" rx="22" ry="6" fill="black" opacity="0.08" />
        </g>
      );
    case "wave":
      return (
        <g>
          <ellipse cx="100" cy="142" rx="48" ry="16" fill={fill} />
          <path
            d="M48 88 C72 68 88 108 112 86 C136 64 152 100 168 82"
            fill="none"
            stroke="white"
            strokeOpacity="0.65"
            strokeWidth="4"
          />
          <path
            d="M52 108 C76 90 92 124 116 104 C140 84 154 118 168 104"
            fill="none"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="3"
          />
        </g>
      );
    default:
      return <circle cx="100" cy="100" r="46" fill={fill} />;
  }
}

export function ProductVisual({
  product,
  size = "md",
  className,
}: {
  product: Product;
  size?: Size;
  className?: string;
}) {
  return (
    <Scene hue={product.hue} className={cn(sizes[size], className)}>
      <FormShape form={product.form} hue={product.hue} />
    </Scene>
  );
}
