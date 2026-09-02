export const metadata = {
  title: "About",
  description: "Why JellyFinds exists, and what we put on the shelf.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-jelly">
        The house
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-tight sm:text-6xl">
        A shop for objects that feel a bit alive.
      </h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-ink-soft">
        <p>
          JellyFinds started from a simple irritation: most “smart home”
          catalogues look like they were designed in a server room. We wanted
          the opposite — tech that can sit next to a sofa, a plant, a pile of
          books, and not apologise for being there.
        </p>
        <p>
          The name is a little silly on purpose. Jelly is translucent, slightly
          wobbly, and better in colour than in grey. Finds are the objects you
          keep after the unboxing is over. Together they are a filter: if a
          product is clever but ugly, it does not make the shelf.
        </p>
        <p>
          Everything here is chosen for living rooms, bedrooms, and the small
          desk in between. Lamps you can hold. A clock that behaves like
          weather. A speaker that looks like a stone. Colour is allowed — used
          like a cushion, not like a neon sign.
        </p>
        <p>
          This first version is a complete storefront you can host on Vercel:
          browse, bag, and a demo checkout. The products are curated fiction
          with real prices as placeholders, ready to swap for a live catalogue
          later.
        </p>
      </div>
    </div>
  );
}
