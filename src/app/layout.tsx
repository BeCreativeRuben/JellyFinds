import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-var",
});

export const metadata: Metadata = {
  title: {
    default: "JellyFinds — objects that glow a little",
    template: "%s · JellyFinds",
  },
  description:
    "Decorative tech for living rooms, bedrooms, and desks. Real products, straight from Amazon.nl.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
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
