export const metadata = {
  title: "About",
  description: "Why JellyFinds exists, and what we put on the shelf.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        The house
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        A shop for objects that feel a bit alive.
      </h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-ink-soft">
        <p>
          JellyFinds started from a simple irritation: most &ldquo;smart
          home&rdquo; catalogues look like they were designed in a server room.
          We wanted the opposite — tech that can sit next to a sofa, a plant, a
          pile of books, and not apologise for being there.
        </p>
        <p>
          The name is a little silly on purpose. Jelly is translucent, slightly
          wobbly, and better in colour than in grey. Finds are the objects you
          keep after the unboxing is over. Together they are a filter: if a
          product is clever but ugly, it does not make the shelf.
        </p>
        <p>
          Everything here is chosen for living rooms, bedrooms, and the small
          desk in between. Lamps you can hold. A speaker that sits like a stone
          on the table. A monitor bar that lights the page, not the screen.
          Colour is allowed — used like a cushion, not like a neon sign.
        </p>
        <p>
          Every product you see on JellyFinds is a real item available on
          Amazon.nl. We hand-pick decorative tech that fits the quiet, colourful
          rooms we care about, and link you straight to the Amazon product page
          so you can buy with confidence. Prices shown are fetched from Amazon
          and may change — always check the listing for the current offer.
        </p>
        <p>
          We plan to join the Amazon Associates programme in the future, which
          means we may earn a small commission on purchases made through our
          links — at no extra cost to you. For now, the links are clean and
          tag-free.
        </p>
      </div>
    </div>
  );
}
