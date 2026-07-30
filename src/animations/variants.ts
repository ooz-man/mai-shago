import type { Variants } from "framer-motion";

/** Section-level reveal: fade + rise, staggers its children on scroll-into-view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Hero text reveal — larger travel distance, slightly slower. */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Card hover lift used by room cards, amenity cards, feature cards. */
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 8px 24px rgba(11,30,51,0.08)" },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 24px 48px rgba(11,30,51,0.18)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Image scale-on-hover used inside cards/gallery tiles. */
export const imageZoom = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
