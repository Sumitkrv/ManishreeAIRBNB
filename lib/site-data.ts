export const AIRBNB_URL = "https://www.airbnb.co.in/rooms/1590674098743485986";
export const INSTAGRAM_URL = "https://www.instagram.com/manishreeresidency/";
export const SITE_URL = "https://manishree-residency-lucknow.deeploach33.chatgpt.site";

export const PROPERTY = {
  name: "Manishree Residency",
  descriptor: "A Premium Luxury Home",
  host: "Anushree",
  location: "Patrakar Puram, Gomti Nagar, Lucknow",
  neighborhood: "Gomti Nagar, Lucknow",
  accommodation: "The private ground-floor portion of a bungalow",
  bedrooms: 2,
  beds: 2,
  bathrooms: 2.5,
  maximumGuests: 6,
  rating: 4.96,
  reviewCount: 79,
  superhost: true,
  listingVerifiedAt: "2026-10-26",
  listingSource: AIRBNB_URL,
} as const;

export const AMENITIES = [
  {
    title: "A private entrance",
    detail: "Independent entry to the guest accommodation.",
  },
  {
    title: "Two bedrooms",
    detail: "The Sun Room and The Sky Room within one complete stay.",
  },
  {
    title: "A generous lounge",
    detail: "A comfortable living room for time together.",
  },
  {
    title: "A working kitchen",
    detail: "A modular kitchen with everyday cooking essentials.",
  },
  {
    title: "Wi-Fi & workspace",
    detail: "Internet and a dedicated place to work.",
  },
  {
    title: "On-premises parking",
    detail: "Parking is listed as available at the property.",
  },
  {
    title: "Courtyard outlook",
    detail: "An outdoor corner adds a little openness to the stay.",
  },
  {
    title: "Step-free access",
    detail: "Listed for the entrance and several guest areas; confirm your needs with the host.",
  },
] as const;

export const SPACES = [
  {
    number: "01",
    id: "sun-room",
    name: "The Sun Room",
    type: "Bedroom",
    description:
      "A restful bedroom within the private residence, thoughtfully named for a softer kind of morning.",
    note: "One of two bedrooms in the whole-home stay.",
    tone: "sun",
  },
  {
    number: "02",
    id: "sky-room",
    name: "The Sky Room",
    type: "Bedroom",
    description:
      "A second calm retreat, made for unhurried evenings and a comfortable night’s rest.",
    note: "Booked as part of the complete residence.",
    tone: "sky",
  },
  {
    number: "03",
    id: "the-lounge",
    name: "The Lounge",
    type: "Living room",
    description:
      "A spacious shared living room with soft seating and room to settle in together.",
    note: "The listing describes additional bedding by arrangement with the host.",
    tone: "lounge",
  },
  {
    number: "04",
    id: "the-kitchen",
    name: "The Kitchen",
    type: "Modular kitchen",
    description:
      "A well-equipped kitchen gives guests the freedom to prepare meals at their own pace.",
    note: "Meals are not included. Please check the current house rules before cooking.",
    tone: "kitchen",
  },
  {
    number: "05",
    id: "the-courtyard",
    name: "The Courtyard",
    type: "Outdoor detail",
    description:
      "A quieter outdoor corner brings a sense of air and greenery to the home.",
    note: "The listing describes a courtyard view and a private backyard utility area.",
    tone: "courtyard",
  },
] as const;

export const FAQS = [
  {
    question: "Where is Manishree Residency?",
    answer:
      "The residence is in Patrakar Puram, Gomti Nagar, Lucknow. The exact address is shared through Airbnb after booking.",
  },
  {
    question: "Is the stay private?",
    answer:
      "The Airbnb listing describes exclusive guest access to the private ground-floor portion of the bungalow, with an independent entrance.",
  },
  {
    question: "How many guests can stay?",
    answer:
      "The listing currently accommodates up to six guests across two bedrooms. Confirm your group’s arrangements with the host on Airbnb.",
  },
  {
    question: "Can I book The Sun Room or The Sky Room separately?",
    answer:
      "The listing is for the complete private ground-floor accommodation. The bedrooms are spaces within that stay, not separately advertised rooms.",
  },
  {
    question: "Is there a kitchen? Are meals included?",
    answer:
      "A functioning kitchen is listed. Meals are not included. Please check Airbnb’s current house rules for cooking guidance before your visit.",
  },
  {
    question: "Is parking and Wi-Fi available?",
    answer:
      "On-premises parking, Wi-Fi and a dedicated workspace are listed amenities. Confirm any specific requirements directly with the host.",
  },
  {
    question: "How do I check availability and final policies?",
    answer:
      "Use the official Airbnb listing for live dates, pricing, booking and the latest house rules. This website does not show live availability.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "The timing is not published here. Please confirm it with the host through Airbnb before you travel.",
  },
] as const;

export const NEARBY = [
  {
    name: "Patrakar Puram market",
    description: "Local shops, cafés and everyday Lucknow life.",
    query: "Patrakar Puram Market, Gomti Nagar, Lucknow",
  },
  {
    name: "Gomti Nagar railway station",
    description: "A local rail connection noted in the listing.",
    query: "Gomti Nagar railway station, Lucknow",
  },
  {
    name: "Parks & cafés",
    description: "Green spaces and neighbourhood cafés around Gomti Nagar.",
    query: "parks and cafes near Gomti Nagar, Lucknow",
  },
] as const;

export const GOOGLE_MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Gomti+Nagar%2C+Lucknow";
