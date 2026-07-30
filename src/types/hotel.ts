/**
 * Core domain types for the platform. A "hotel" here means any property
 * type in TARGET AUDIENCE (hotel, resort, guest house, event centre, etc).
 * Nothing in this file may reference a specific hotel's name or content —
 * that belongs in /src/config or /src/data.
 */

export type ThemeName =
  | "navy-gold" // default luxury theme
  | "forest-emerald"
  | "black-bronze";

export interface ThemeTokens {
  name: ThemeName;
  colors: {
    primary: string; // Deep Navy
    secondary: string; // Gold
    accent: string; // Champagne
    neutralLight: string; // Cream / White
    neutralSoft: string; // Soft Gray
    surface: string;
    foreground: string;
  };
  fonts: {
    heading: string; // e.g. "Playfair Display" | "Cormorant Garamond"
    body: string; // e.g. "Inter" | "Manrope"
  };
  radius: "sm" | "md" | "lg" | "xl";
}

export interface ContactInfo {
  phone: string;
  whatsapp?: string;
  email: string;
  address: string;
  mapEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  currency: string;
  images: string[];
  amenities: string[];
  maxGuests: number;
  rating?: number;
  ctaHref: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
  description?: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestPhoto?: string;
  rating: number; // 1-5
  quote: string;
  stayDate?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface HeroConfig {
  variant: "video" | "image-slider" | "static-image";
  headline: string;
  subheadline: string;
  media: string[]; // video url(s) or image url(s)
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

/**
 * The single object a new hotel site is generated from.
 * Everything visual/content-related should be reachable from here.
 */
export interface HotelConfig {
  slug: string;
  name: string;
  tagline: string;
  logoUrl: string;
  theme: ThemeTokens;
  navLinks: NavLink[];
  hero: HeroConfig;
  rooms: RoomType[];
  amenities: Amenity[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  socials: SocialLinks;
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}
