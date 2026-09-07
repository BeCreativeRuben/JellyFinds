import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { getClickCounts, recordClick, totalClicks } from "@/lib/clicks";

export async function GET() {
  return NextResponse.json({
    counts: getClickCounts(),
    total: totalClicks(),
  });
}

export async function POST(request: Request) {
  let body: { slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const slug = body.slug?.trim();
  if (!slug || !getProduct(slug)) {
    return NextResponse.json({ error: "Unknown product" }, { status: 400 });
  }

  const count = recordClick(slug);
  return NextResponse.json({ slug, count, total: totalClicks() });
}
