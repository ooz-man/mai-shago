import type { HotelConfig } from "@/types/hotel";
import { getTheme } from "@/config/theme.config";

/**
 * ============================================================
 *  hotel.config.ts
 * ------------------------------------------------------------
 *  Generate a new hotel site by editing ONLY this file (plus
 *  swapping images/logo in /public). Do not edit components
 *  to hardcode a hotel's name, copy, or colors — extend the
 *  types in src/types/hotel.ts instead if a field is missing.
 * ============================================================
 */
export const hotelConfig: HotelConfig = {
  slug: "example-hotel",
  name: "Example Hotel",
  tagline: "Where every stay feels like the beginning of a story.",
  logoUrl: "/logo.svg",

  theme: getTheme("navy-gold"),

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "#rooms" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Restaurant", href: "#restaurant" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    variant: "image-slider",
    headline: "An escape, quietly extraordinary.",
    subheadline:
      "Boutique comfort in the heart of the city, built for guests who notice the details.",
    media: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    ],
    ctaPrimary: { label: "Book Now", href: "#contact" },
    ctaSecondary: { label: "Explore Rooms", href: "#rooms" },
  },

  rooms: [
    {
      id: "deluxe-king",
      name: "Deluxe King Room",
      description:
        "A spacious retreat with a king-size bed, city views, and a marble ensuite.",
      pricePerNight: 85000,
      currency: "NGN",
      images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32"],
      amenities: ["Free WiFi", "Breakfast Included", "City View", "Air Conditioning"],
      maxGuests: 2,
      rating: 4.8,
      ctaHref: "#contact",
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      description:
        "A separate living area, premium finishes, and a private balcony for longer stays.",
      pricePerNight: 145000,
      currency: "NGN",
      images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427"],
      amenities: ["Free WiFi", "Lounge Access", "Balcony", "Mini Bar"],
      maxGuests: 3,
      rating: 4.9,
      ctaHref: "#contact",
    },
  ],

  amenities: [
    { id: "pool", label: "Swimming Pool", icon: "Waves" },
    { id: "restaurant", label: "Restaurant", icon: "UtensilsCrossed" },
    { id: "gym", label: "Gym", icon: "Dumbbell" },
    { id: "spa", label: "Spa", icon: "Sparkles" },
    { id: "wifi", label: "Free WiFi", icon: "Wifi" },
    { id: "parking", label: "Parking", icon: "SquareParking" },
    { id: "laundry", label: "Laundry", icon: "WashingMachine" },
    { id: "airport", label: "Airport Pickup", icon: "PlaneTakeoff" },
    { id: "conference", label: "Conference Hall", icon: "Presentation" },
    { id: "room-service", label: "Room Service", icon: "BellRing" },
  ],

  gallery: [
    { id: "g1", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32", alt: "Deluxe King Room", category: "rooms" },
    { id: "g2", src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d", alt: "Hotel pool at dusk", category: "pool" },
    { id: "g3", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Lobby lounge", category: "interior" },
  ],

  testimonials: [
    {
      id: "t1",
      guestName: "Amara O.",
      rating: 5,
      quote:
        "Every detail felt considered, from check-in to the turndown service. I'll be back.",
      stayDate: "June 2026",
    },
    {
      id: "t2",
      guestName: "David K.",
      rating: 5,
      quote: "Quiet, elegant, and the staff anticipated things before we asked.",
      stayDate: "April 2026",
    },
  ],

  contact: {
    phone: "+234 800 000 0000",
    whatsapp: "+234 800 000 0000",
    email: "reservations@examplehotel.com",
    address: "12 Example Street, Abuja, Nigeria",
    latitude: 9.0765,
    longitude: 7.3986,
  },

  socials: {
    instagram: "https://instagram.com/examplehotel",
    facebook: "https://facebook.com/examplehotel",
  },

  seo: {
    title: "Example Hotel — Boutique Luxury in Abuja",
    description:
      "Book a quietly extraordinary stay at Example Hotel: boutique rooms, a rooftop pool, and a restaurant guests remember.",
    ogImage: "/og-image.jpg",
  },
};
