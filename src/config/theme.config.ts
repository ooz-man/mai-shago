import type { ThemeName, ThemeTokens } from "@/types/hotel";

/**
 * Named theme presets. A hotel picks one of these (or a custom ThemeTokens
 * object) in its hotel.config.ts — never edit component code to reskin.
 */
export const themePresets: Record<ThemeName, ThemeTokens> = {
  "navy-gold": {
    name: "navy-gold",
    colors: {
      primary: "#0B1E33", // Deep Navy
      secondary: "#C9A227", // Gold
      accent: "#E9D9AE", // Champagne
      neutralLight: "#FAF7F2", // Cream
      neutralSoft: "#D9D5CC", // Soft Gray
      surface: "#FFFFFF",
      foreground: "#14202E",
    },
    fonts: {
      heading: "var(--font-playfair)",
      body: "var(--font-manrope)",
    },
    radius: "lg",
  },
  "forest-emerald": {
    name: "forest-emerald",
    colors: {
      primary: "#0E2C22",
      secondary: "#B08D57", // Bronze
      accent: "#1B4332", // Dark Emerald
      neutralLight: "#F6F4EE",
      neutralSoft: "#D6D2C4",
      surface: "#FFFFFF",
      foreground: "#0E2C22",
    },
    fonts: {
      heading: "var(--font-cormorant)",
      body: "var(--font-inter)",
    },
    radius: "md",
  },
  "black-bronze": {
    name: "black-bronze",
    colors: {
      primary: "#0A0A0A",
      secondary: "#B08D57",
      accent: "#2A2A2A",
      neutralLight: "#F2F0EC",
      neutralSoft: "#8A8A8A",
      surface: "#111111",
      foreground: "#F2F0EC",
    },
    fonts: {
      heading: "var(--font-playfair)",
      body: "var(--font-inter)",
    },
    radius: "sm",
  },
};

export function getTheme(name: ThemeName): ThemeTokens {
  return themePresets[name];
}
