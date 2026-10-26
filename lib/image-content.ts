export type EditorialImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  label: string;
  category: "Details" | "Lucknow";
  credit?: string;
  sourceUrl?: string;
  licenseUrl?: string;
};

export const ATMOSPHERE_IMAGES: EditorialImage[] = [
  {
    id: "linen",
    src: "/images/lifestyle/linen-mood.jpg",
    width: 1536,
    height: 1024,
    title: "A study in afternoon light",
    alt: "Illustrative mood image of warm afternoon light across champagne and blush linen.",
    label: "Illustrative mood image · not a property photograph",
    category: "Details",
  },
  {
    id: "morning-chai",
    src: "/images/hero/morning-chai.webp",
    width: 1122,
    height: 1402,
    title: "A slower kind of morning",
    alt: "Illustrative still life of chai, jasmine flowers and soft ivory linen in morning light.",
    label: "AI-generated still life · not a property photograph",
    category: "Details",
  },
  {
    id: "warm-light",
    src: "/images/lifestyle/warm-light.webp",
    width: 1122,
    height: 1402,
    title: "Warmth in the little things",
    alt: "Illustrative still life of a glowing brass lamp, a book, jasmine and peach flowers.",
    label: "AI-generated still life · not a property photograph",
    category: "Details",
  },
  {
    id: "chikankari",
    src: "/images/lifestyle/chikankari-texture.webp",
    width: 1122,
    height: 1402,
    title: "A Lucknow-inspired texture study",
    alt: "Illustrative close-up of ivory embroidery-inspired fabric and a brass dish with a flower.",
    label: "AI-generated craft mood · not a property photograph",
    category: "Details",
  },
  {
    id: "travel-journal",
    src: "/images/lifestyle/travel-journal.webp",
    width: 1122,
    height: 1402,
    title: "Room for your own story",
    alt: "Illustrative flat lay of an open blank journal, tea, jasmine and ivory linen.",
    label: "AI-generated still life · not a property photograph",
    category: "Details",
  },
];

export const LUCKNOW_IMAGE: EditorialImage = {
  id: "bara-imambara",
  src: "/images/location/bara-imambara.jpg",
  width: 2938,
  height: 973,
  title: "Bara Imambara · Lucknow",
  alt: "Bara Imambara in Lucknow, seen across the landscaped approach.",
  label: "Lucknow landmark · destination photograph",
  category: "Lucknow",
  credit: "Mukerjee · Wikimedia Commons · CC BY 2.5 · used unchanged",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Bara-imambara.jpg",
  licenseUrl: "https://creativecommons.org/licenses/by/2.5/",
};

export const PROPERTY_PHOTO_CATEGORIES = [
  "Bedrooms",
  "Living Room",
  "Kitchen",
  "Courtyard",
] as const;

export const GALLERY_IMAGES: EditorialImage[] = [
  ...ATMOSPHERE_IMAGES,
  LUCKNOW_IMAGE,
];
