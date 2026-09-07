export const ASSOCIATE_TAG = "jellei-21";

/** Append the Amazon Associates tag to any amazon.nl product URL. */
export function amazonAffiliateUrl(url: string): string {
  const parsed = new URL(url);
  parsed.searchParams.set("tag", ASSOCIATE_TAG);
  return parsed.toString();
}
