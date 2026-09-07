/**
 * In-memory click counts for outbound Amazon links.
 * Cheap and real — no fake numbers. Resets on cold start;
 * bestsellers fall back to bestsellerRank when empty.
 */
const globalStore = globalThis as typeof globalThis & {
  __jellyfindsClicks?: Map<string, number>;
};

function store() {
  if (!globalStore.__jellyfindsClicks) {
    globalStore.__jellyfindsClicks = new Map();
  }
  return globalStore.__jellyfindsClicks;
}

export function recordClick(slug: string) {
  const clicks = store();
  clicks.set(slug, (clicks.get(slug) ?? 0) + 1);
  return clicks.get(slug) ?? 0;
}

export function getClickCounts(): Record<string, number> {
  return Object.fromEntries(store().entries());
}

export function totalClicks(): number {
  let sum = 0;
  for (const n of store().values()) sum += n;
  return sum;
}
