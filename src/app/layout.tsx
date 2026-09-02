import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-var",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading-var",
});

export const metadata: Metadata = {
  title: {
    default: "JellyFinds — objects that glow a little",
    template: "%s · JellyFinds",
  },
  description:
    "Decorative tech for living rooms, bedrooms, and desks. Soft lamps, quiet speakers, and playful objects with a little colour.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
