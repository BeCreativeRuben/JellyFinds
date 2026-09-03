export type Room = "living-room" | "bedroom" | "desk";

export type ProductForm =
  | "pebble"
  | "frame"
  | "clock"
  | "speaker"
  | "orbit"
  | "diffuser"
  | "shelf"
  | "cube"
  | "nest"
  | "pane"
  | "sprout"
  | "wave";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  room: Room;
  form: ProductForm;
  hue: number;
  accent: string;
  details: string[];
  featured?: boolean;
  asin: string;
  amazonUrl: string;
};

export const rooms: { slug: Room; label: string; blurb: string }[] = [
  {
    slug: "living-room",
    label: "Living room",
    blurb: "Glow, hush, and a little theatre for the sofa.",
  },
  {
    slug: "bedroom",
    label: "Bedroom",
    blurb: "Softer light, slower mornings, quieter nights.",
  },
  {
    slug: "desk",
    label: "Desk",
    blurb: "Small objects that make a work corner feel considered.",
  },
];

export const products: Product[] = [
  {
    slug: "philips-hue-go",
    name: "Philips Hue Go",
    tagline: "A portable colour lamp that fits in a palm.",
    description:
      "A palm-sized portable table lamp that washes a wall in up to 16 million colours. Dim it, set a light recipe for reading or relaxing, or let it drift through shades via the Hue app. Works with Alexa, Google and Apple Home — Hue Bridge required.",
    price: 69.95,
    room: "living-room",
    form: "pebble",
    hue: 350,
    accent: "#F25C8A",
    details: [
      "White and coloured light, dimmable",
      "App and voice control (Alexa, Google, Apple Home)",
      "Hue Bridge required",
      "USB powered, plastic shell",
    ],
    featured: true,
    asin: "B07SQ2FZTK",
    amazonUrl: "https://www.amazon.nl/dp/B07SQ2FZTK",
  },
  {
    slug: "amazon-echo-dot",
    name: "Amazon Echo Dot (5th Gen)",
    tagline: "Big sound in a small speaker, with Alexa.",
    description:
      "The Echo Dot (5th generation, 2022 release) delivers vibrant sound for its size. Ask Alexa to play music, answer questions, set timers, or control compatible smart home devices. Connects via Wi-Fi and Bluetooth. Speaks Dutch.",
    price: 64.99,
    room: "living-room",
    form: "speaker",
    hue: 28,
    accent: "#F0B429",
    details: [
      "Wi-Fi and Bluetooth smart speaker",
      "Built-in Alexa (speaks Dutch)",
      "Charcoal finish",
    ],
    featured: true,
    asin: "B09B8X9RGM",
    amazonUrl: "https://www.amazon.nl/dp/B09B8X9RGM",
  },
  {
    slug: "kindle-paperwhite",
    name: "Amazon Kindle Paperwhite",
    tagline: "The fastest Kindle ever, with a 7″ glare-free display.",
    description:
      "A 7-inch Paperwhite with higher contrast and 25% faster page turns. The ultra-thin design, adjustable white-to-amber display, and USB-C charging that lasts up to 12 weeks make it a quiet companion for any bedside table. Waterproof and distraction-free — no social media, no notifications.",
    price: 224.99,
    room: "bedroom",
    form: "frame",
    hue: 265,
    accent: "#8B7CFF",
    details: [
      "7″ glare-free display, higher contrast",
      "USB-C, up to 12 weeks battery",
      "Waterproof (IPX8)",
      "16 GB storage, black",
    ],
    featured: true,
    asin: "B0CFPWLGF2",
    amazonUrl: "https://www.amazon.nl/dp/B0CFPWLGF2",
  },
  {
    slug: "creative-pebble-v3",
    name: "Creative Pebble V3",
    tagline: "Minimalist desk speakers with real bass.",
    description:
      "A pair of 2.0 desktop speakers in a compact pebble shape. USB-C powered with Bluetooth 5.0 for wireless streaming. Clear Dialog audio processing keeps voices intelligible without cranking the volume. 8 W RMS, up to 16 W peak — enough for a desk, not a party.",
    price: 37.99,
    room: "desk",
    form: "speaker",
    hue: 200,
    accent: "#3EC6E0",
    details: [
      "USB-C with USB-A converter included",
      "Bluetooth 5.0",
      "8 W RMS / 16 W peak",
      "Clear Dialog audio processing",
      "45° angled drivers",
    ],
    featured: true,
    asin: "B08F5BQZL8",
    amazonUrl: "https://www.amazon.nl/dp/B08F5BQZL8",
  },
  {
    slug: "benq-screenbar",
    name: "BenQ ScreenBar",
    tagline: "A monitor lamp that lights the desk, not the screen.",
    description:
      "A slim LED task lamp that clips onto your monitor. The asymmetrical optical design illuminates the desk while keeping the screen glare-free. Auto-dimming and hue adjustment adapt to your environment. USB-C powered — one cable from the monitor is enough.",
    price: 99.00,
    room: "desk",
    form: "shelf",
    hue: 40,
    accent: "#E8A23A",
    details: [
      "Asymmetric optics — zero screen glare",
      "Auto-dimming ambient sensor",
      "Adjustable colour temperature",
      "USB powered, matte black aluminium",
    ],
    featured: true,
    asin: "B0785D93KD",
    amazonUrl: "https://www.amazon.nl/dp/B0785D93KD",
  },
  {
    slug: "philips-hue-iris",
    name: "Philips Hue Iris",
    tagline: "A colour accent lamp shaped like a softened disc.",
    description:
      "A dimmable table lamp that projects white and coloured light against a wall or into a corner. Connect via Bluetooth for quick setup, or pair with a Hue Bridge for full control. Works with Alexa and Google Home. 8.1 W integrated LED, white finish.",
    price: 77.57,
    room: "living-room",
    form: "pebble",
    hue: 310,
    accent: "#E07AD6",
    details: [
      "White and coloured light, dimmable",
      "Bluetooth or Hue Bridge connection",
      "8.1 W integrated LED",
      "Works with Alexa and Google Home",
    ],
    featured: true,
    asin: "B08CXZJWM9",
    amazonUrl: "https://www.amazon.nl/dp/B08CXZJWM9",
  },
  {
    slug: "galaxy-projector",
    name: "One Fire Galaxy Projector",
    tagline: "Stars on the ceiling, music from the speaker.",
    description:
      "A compact LED starry-sky projector with built-in Bluetooth speaker and white-noise modes. Sound-reactive lighting syncs colour changes to music. Timer and remote control included. A quiet bedroom companion for winding down — or a low-key party trick.",
    price: 25.99,
    room: "bedroom",
    form: "wave",
    hue: 210,
    accent: "#4A8FE7",
    details: [
      "LED starry sky + galaxy projection",
      "Built-in Bluetooth speaker",
      "White noise modes",
      "Remote control and timer",
    ],
    featured: true,
    asin: "B09M2V7X38",
    amazonUrl: "https://www.amazon.nl/dp/B09M2V7X38",
  },
  {
    slug: "levitating-moon-lamp",
    name: "Levitating Moon Lamp",
    tagline: "A moon that floats, spins, and glows.",
    description:
      "A 3D-printed moon globe that hovers above a wooden base via magnetic levitation. It lights up wirelessly through electromagnetic induction and rotates gently in the air. 16 colour modes — pick a warm glow or cycle through the spectrum.",
    price: 69.99,
    room: "bedroom",
    form: "orbit",
    hue: 168,
    accent: "#2FD4C0",
    details: [
      "Magnetic levitation, wireless power",
      "3D-printed moon surface",
      "16 colour modes",
      "Wooden base, polyester + wood construction",
    ],
    asin: "B0B7LQKYVZ",
    amazonUrl: "https://www.amazon.nl/dp/B0B7LQKYVZ",
  },
  {
    slug: "frameo-photo-frame",
    name: "Frameo Digital Photo Frame",
    tagline: "A 10-inch frame your family can send photos to.",
    description:
      "A 10.1-inch WiFi photo frame with IPS touchscreen (1280 × 800). Family and friends send photos directly via the Frameo app — no cloud accounts needed. 32 GB built-in storage, auto-rotation, and slideshow mode. Landscape or portrait, table or wall.",
    price: 55.98,
    room: "living-room",
    form: "frame",
    hue: 185,
    accent: "#2BB8C8",
    details: [
      "10.1″ IPS touchscreen, 1280 × 800",
      "32 GB storage (expandable via microSD)",
      "WiFi — share via Frameo app",
      "Auto-rotation, slideshow mode",
    ],
    asin: "B0DNMGKW2H",
    amazonUrl: "https://www.amazon.nl/dp/B0DNMGKW2H",
  },
  {
    slug: "benq-screenbar-halo",
    name: "BenQ ScreenBar Halo 2",
    tagline: "Front and rear light with a wireless dial.",
    description:
      "The Halo 2 adds rear ambient lighting and a wireless controller to the ScreenBar formula. Auto-dimming, adjustable colour temperature, and an ultra-wide beam that covers the full desk. Clips to monitors up to 6 cm thick — no screws, no tape. USB powered.",
    price: 179.00,
    room: "desk",
    form: "shelf",
    hue: 145,
    accent: "#3CB87A",
    details: [
      "Front + rear ambient light",
      "Wireless controller dial",
      "Auto-dimming, adjustable colour temperature",
      "USB powered, aluminium, fits monitors up to 6 cm",
    ],
    asin: "B0DK59YKRS",
    amazonUrl: "https://www.amazon.nl/dp/B0DK59YKRS",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByRoom(room: Room) {
  return products.filter((product) => product.room === room);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);

  return products
    .filter((product) => product.slug !== slug)
    .sort((a, b) => {
      const aScore = a.room === current.room ? 0 : 1;
      const bScore = b.room === current.room ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function roomLabel(room: Room) {
  return rooms.find((item) => item.slug === room)?.label ?? room;
}
