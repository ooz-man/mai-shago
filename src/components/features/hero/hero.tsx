"use client";

import { motion } from "framer-motion";
import { hotelConfig } from "@/config/hotel.config";
import { ButtonLink } from "@/components/ui/button";
import { heroReveal, staggerContainer } from "@/animations/variants";

/**
 * Hero variant is driven by hotelConfig.hero.variant. This build implements
 * "image-slider" (single crossfaded layer for simplicity) and "static-image".
 * "video" is a drop-in swap of the <img> for a <video> tag — see comment below.
 */
export function Hero() {
  const { hero, name } = hotelConfig;
  const [primaryImage] = hero.media;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background media layer */}
      <div className="absolute inset-0">
        {hero.variant === "video" ? (
          // Swap in when a hotel supplies a hero video URL:
          // <video src={hero.media[0]} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          <img src={primaryImage} alt={name} className="h-full w-full object-cover" />
        ) : (
          <img src={primaryImage} alt={name} className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10" />
      </div>

      {/* Floating decorative accent — kept subtle per "nothing should feel cheap" */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center text-neutral-light"
      >
        <motion.p
          variants={heroReveal}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary"
        >
          {name}
        </motion.p>
        <motion.h1
          variants={heroReveal}
          className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p variants={heroReveal} className="mx-auto mt-5 max-w-xl text-base text-neutral-light/80 md:text-lg">
          {hero.subheadline}
        </motion.p>

        <motion.div variants={heroReveal} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={hero.ctaPrimary.href} variant="gold" size="lg">
            {hero.ctaPrimary.label}
          </ButtonLink>
          {hero.ctaSecondary && (
            <ButtonLink
              href={hero.ctaSecondary.href}
              variant="outline"
              size="lg"
              className="border-white/40 text-neutral-light hover:bg-white/10"
            >
              {hero.ctaSecondary.label}
            </ButtonLink>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
