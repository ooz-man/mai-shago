"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { hotelConfig } from "@/config/hotel.config";
import { SectionTitle } from "@/components/ui/section-title";
import { fadeUp, staggerContainer } from "@/animations/variants";
import type { LucideIcon } from "lucide-react";

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Amenities"
          title="Everything you need, nothing you don't"
          description="A curated set of comforts, available throughout your stay."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
        >
          {hotelConfig.amenities.map((amenity) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[amenity.icon];
            return (
              <motion.div
                key={amenity.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-soft/40 bg-neutral-light/40 p-6 text-center transition-shadow hover:shadow-lg"
              >
                <span className="rounded-full bg-primary/5 p-3 text-primary">
                  {Icon ? <Icon size={22} /> : null}
                </span>
                <p className="text-sm font-medium text-foreground/80">{amenity.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
