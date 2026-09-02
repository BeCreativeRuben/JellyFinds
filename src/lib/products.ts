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
    slug: "lumen-pebble",
    name: "Lumen Pebble",
    tagline: "A lamp that behaves like a stone.",
    description:
      "A palm-sized glass pebble that washes a wall in warm colour. Dim it to a nightlight, or let it drift through a slow sunset cycle. No app required — a single tap is enough.",
    price: 89,
    room: "living-room",
    form: "pebble",
    hue: 350,
    accent: "#F25C8A",
    details: ["USB-C charge, 18h glow", "Touch dim + colour drift", "Frosted borosilicate shell"],
    featured: true,
  },
  {
    slug: "halo-frame",
    name: "Halo Frame",
    tagline: "Art that remembers the hour.",
    description:
      "A floating digital frame with a soft halo edge. Load a handful of stills, or let it idle on generative gradients that never quite repeat. Looks like a print until you get close.",
    price: 189,
    room: "bedroom",
    form: "frame",
    hue: 265,
    accent: "#8B7CFF",
    details: ["12\" matte e-ink hybrid", "Halo edge lighting", "Local storage, no cloud"],
    featured: true,
  },
  {
    slug: "drift-clock",
    name: "Drift Clock",
    tagline: "Time, projected like weather.",
    description:
      "A low disc that throws numerals onto the ceiling — faint at noon, brighter after dark. The digits dissolve and reform every minute so the room never feels stamped.",
    price: 64,
    room: "bedroom",
    form: "clock",
    hue: 200,
    accent: "#3EC6E0",
    details: ["Ceiling or wall throw", "Auto-dim ambient sensor", "Silent, no ticking"],
    featured: true,
  },
  {
    slug: "murmur-speaker",
    name: "Murmur Speaker",
    tagline: "Sound that sits like an object.",
    description:
      "A pebble speaker with a felt base and a glass lid. Tuned for rooms, not parties — voice, vinyl rips, late-night radio. The lid lights with the bass, just a little.",
    price: 129,
    room: "living-room",
    form: "speaker",
    hue: 28,
    accent: "#F0B429",
    details: ["12h battery", "Bluetooth 5.3", "Wool felt + glass"],
    featured: true,
  },
  {
    slug: "orbit-mobile",
    name: "Orbit Mobile",
    tagline: "A kinetic sculpture with a pulse.",
    description:
      "Three balanced rings that catch a draft, then a quiet motor that keeps them honest. Hang it over a table. People will watch it longer than they admit.",
    price: 148,
    room: "living-room",
    form: "orbit",
    hue: 168,
    accent: "#2FD4C0",
    details: ["Silent magnetic drive", "Brass + acrylic rings", "Ceiling hook included"],
    featured: true,
  },
  {
    slug: "nimbus-diffuser",
    name: "Nimbus Diffuser",
    tagline: "Mist, not theatre smoke.",
    description:
      "A cloud-shaped ultrasonic diffuser that glows from the inside. Two drops of oil, a soft plume, and a timer that fades itself out before you fall asleep.",
    price: 78,
    room: "bedroom",
    form: "diffuser",
    hue: 310,
    accent: "#E07AD6",
    details: ["240ml quiet tank", "4h / 8h fade", "Washable ceramic lid"],
  },
  {
    slug: "pulse-shelf",
    name: "Pulse Shelf",
    tagline: "A shelf with a horizon line.",
    description:
      "A narrow oak shelf with an LED edge that traces the wall. Set a warm dusk, a cool morning, or leave it as a thin gold line behind a stack of books.",
    price: 112,
    room: "living-room",
    form: "shelf",
    hue: 40,
    accent: "#E8A23A",
    details: ["80cm solid oak", "Hidden driver, 24V", "Wall mounts included"],
  },
  {
    slug: "glint-cube",
    name: "Glint Cube",
    tagline: "A desk light you can hold.",
    description:
      "A 70mm glass cube with a captured point of light. Tilt it and the glint slides. Tap to warm or cool the tone. It is a paperweight that earns the desk.",
    price: 96,
    room: "desk",
    form: "cube",
    hue: 185,
    accent: "#2BB8C8",
    details: ["Optical glass", "Inductive charge puck", "Warm / cool tap"],
    featured: true,
  },
  {
    slug: "echo-nest",
    name: "Echo Nest",
    tagline: "A tray that charges, then rests.",
    description:
      "A shallow ceramic nest for phone, keys, and the last coin of the day. The centre is a 15W charger. The rim holds a faint night glow so you can find it at 2am.",
    price: 54,
    room: "bedroom",
    form: "nest",
    hue: 18,
    accent: "#D98A5A",
    details: ["15W Qi2 pad", "Speckled stoneware", "Night-rim glow"],
  },
  {
    slug: "prism-pane",
    name: "Prism Pane",
    tagline: "A window that learned colour.",
    description:
      "A freestanding dichroic panel that splits daylight into a slow rainbow on the floor. Move it an inch and the room changes. No power. Just physics, showing off.",
    price: 42,
    room: "living-room",
    form: "pane",
    hue: 280,
    accent: "#9A6CFF",
    details: ["200 × 280mm glass", "Brass stand", "No electricity"],
  },
  {
    slug: "sprout-lamp",
    name: "Sprout Lamp",
    tagline: "Grow light, dressed for the desk.",
    description:
      "A small stem lamp with a leaf-shaped head. Enough spectrum for a pot of herbs, enough warmth to read by. The stem bends like a plant that knows the window.",
    price: 72,
    room: "desk",
    form: "sprout",
    hue: 145,
    accent: "#3CB87A",
    details: ["Full-spectrum + warm mix", "Flexible stem", "Clamp or stand"],
  },
  {
    slug: "night-tide",
    name: "Night Tide",
    tagline: "Waves on the ceiling, then sleep.",
    description:
      "A low projector that throws slow water across the ceiling. The motion is real film, not a loop that you catch. A 45-minute fade is usually enough.",
    price: 86,
    room: "bedroom",
    form: "wave",
    hue: 210,
    accent: "#4A8FE7",
    details: ["Optical water disc", "45 / 90 min fade", "Near-silent motor"],
    featured: true,
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
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function roomLabel(room: Room) {
  return rooms.find((item) => item.slug === room)?.label ?? room;
}
